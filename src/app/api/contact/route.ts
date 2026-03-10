import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

const contactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(1),
});

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { ok: false, message: 'Invalid form data.' },
        { status: 400 },
      );
    }

    const toEmail = getEnv('CONTACT_TO_EMAIL') ?? 'aidoecompany@gmail.com';

    const host = getEnv('SMTP_HOST');
    const portStr = getEnv('SMTP_PORT');
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const secureStr = getEnv('SMTP_SECURE');

    if (!host || !portStr || !user || !pass) {
      return Response.json(
        {
          ok: false,
          message:
            'Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local.',
        },
        { status: 500 },
      );
    }

    const port = Number(portStr);
    if (!Number.isFinite(port)) {
      return Response.json(
        { ok: false, message: 'Invalid SMTP_PORT value.' },
        { status: 500 },
      );
    }

    const secure = secureStr ? secureStr.toLowerCase() === 'true' : port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const { name, phone, email, message } = parsed.data;

    const subject = `New website message from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: getEnv('SMTP_FROM') ?? user,
      to: toEmail,
      subject,
      text,
      replyTo: email,
    });

    return Response.json({ ok: true, message: 'Message sent successfully.' });
  } catch {
    return Response.json(
      { ok: false, message: 'Failed to send message. Please try again.' },
      { status: 500 },
    );
  }
}
