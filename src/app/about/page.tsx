import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// Embedded fallback hero image as a data URI (SVG base64) to avoid dev static-serving issues
const HERO_DATA_URI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxNzJhO3N0b3Atb3BhY2l0eToxIiAvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWUyOTNiO3N0b3Atb3BhY2l0eToxIiAvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJhY2NlbnRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzA2YjZkNDtzdG9wLW9wYWNpdHk6MSIgLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzNiODJmNjtzdG9wLW9wYWNpdHk6MSIgLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgIDxmaWx0ZXIgaWQ9Imdsb3ciPg0KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgcmVzdWx0PSJjb2xvcmVkQmx1ciIvPg0KICAgICAgPGZlTWVyZ2U+IA0KICAgICAgICA8ZmVNZXJnZU5vZGUgaW49ImNvbG9yZWRCbHVyIi8+DQogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPg0KICAgICAgPC9mZU1lcmdlPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIA0KICA8IS0tIEJhY2tncm91bmQgLS0+DQogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSJ1cmwoI2JnR3JhZGllbnQpIi8+DQogIA0KICA8IS0tIE1haW4gQ29udGVudCBBcmVhIC0tPg0KICA8cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMzcwIiBmaWxsPSIjMWUyOTNiIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMiIgcng9IjEyIiBmaWx0ZXI9InVybCgjZ2xvdykiLz4NCiAgDQogIDwhLS0gSGVhZGVyIC0tPg0KICA8cmVjdCB4PSI2MCIgeT0iNjAiIHdpZHRoPSI2ODAiIGhlaWdodD0iNjAiIGZpbGw9IiMwZjE3MmEiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iOCIvPg0KICA8dGV4dCB4PSI0MDAiIHk9Ijk1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDZiNmQ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BSURPRSAtIEFJIEZPUiBIRUFMVEhDQVJFPC90ZXh0Pg0KICANCiAgPCEtLSBMZWZ0IFBhbmVsIC0gQUkgVGVjaG5vbG9neSAtLT4NCiAgPHJlY3QgeD0iODAiIHk9IjE0MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiMwZjE3MmEiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iOCIvPg0KICANCiAgPCEtLSBBSSBCcmFpbiBJY29uIC0tPg0KICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMyIvPg0KICA8Y2lyY2xlIGN4PSIyMjUiIGN5PSIxOTAiIHI9IjQiIGZpbGw9IiMwNmI2ZDQiLz4NCiAgPGNpcmNsZSBjeD0iMjU1IiBjeT0iMTkwIiByPSI0IiBmaWxsPSIjMDZiNmQ0Ii8+DQogIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjIxMCIgcj0iNCIgZmlsbD0iIzA2YjZkNCIvPg0KICA8Y2lyY2xlIGN4PSIyMTUiIGN5PSIyMTAiIHI9IjMiIGZpbGw9IiMzYjgyZjYiLz4NCiAgPGNpcmNsZSBjeD0iMjY1IiBjeT0iMjEwIiByPSIzIiBmaWxsPSIjM2I4MmY2Ii8+DQogIDxwYXRoIGQ9Ik0yMjAgMTgwIFEyNDAgMTcwIDI2MCAxODAiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+DQogIDxwYXRoIGQ9Ik0yMTAgMjIwIFEyNDAgMjM1IDI3MCAyMjAiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+DQogIA0KICA8IS0tIE5ldXJhbCBOZXR3b3JrIExpbmVzIC0tPg0KICA8cGF0aCBkPSJNMjAwIDE4MCBMMjQwIDIwMCBMMjgwIDE4MCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNyIvPg0KICA8cGF0aCBkPSJNMjAwIDIyMCBMMjQwIDIwMCBMMjgwIDIyMCIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNyIvPg0KICANCiAgPHRleHQgeD0iMjQwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwNmI2ZDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFJIFRFQ0hOT0xPR1k8L3RleHQ+DQogIDx0ZXh0IHg9IjI0MCIgeT0iMjkwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkludGVsbGlnZW50IEhlYWx0aGNhcmUgU29sdXRpb25zPC90ZXh0Pg0KICANCiAgPCEtLSBSaWdodCBQYW5lbCAtIEhlYWx0aGNhcmUgSW5ub3ZhdGlvbiAtLT4NCiAgPHJlY3QgeD0iNDIwIiB5PSIxNDAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIiBmaWxsPSIjMGYxNzJhIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMSIgcng9IjgiLz4NCiAgDQogIDwhLS0gTWVkaWNhbCBDcm9zcyAtLT4NCiAgPHJlY3QgeD0iNTcwIiB5PSIxODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDZiNmQ0IiByeD0iMiIvPg0KICA8cmVjdCB4PSI1ODYiIHk9IjE2NCIgd2lkdGg9IjgiIGhlaWdodD0iNDAiIGZpbGw9IiMwNmI2ZDQiIHJ4PSIyIi8+DQogIA0KICA8IS0tIFB1bHNlIExpbmUgLS0+DQogIDxwYXRoIGQ9Ik00NTAgMjQwIEw0NzAgMjQwIEw0NzUgMjIwIEw0ODAgMjYwIEw0ODUgMjQwIEw1MDUgMjQwIEw1MTAgMjMwIEw1MTUgMjUwIEw1MjAgMjQwIEw1NDAgMjQwIEw1NDUgMjI1IEw1NTAgMjU1IEw1NTUgMjQwIEw1NzUgMjQwIEw1ODAgMjIwIEw1ODUgMjYwIEw1OTAgMjQwIEw2MTAgMjQwIEw2MTUgMjMwIEw2MjAgMjUwIEw2MjUgMjQwIEw2NDUgMjQwIEw2NTAgMjI1IEw2NTUgMjU1IEw2NjAgMjQwIEw2ODAgMjQwIEw2ODUgMjIwIEw2OTAgMjYwIEw2OTUgMjQwIEw3MTAgMjQwIiANCiAgICAgICAgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4NCiAgDQogIDx0ZXh0IHg9IjU4MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDZiNmQ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IRUFMVEhDQVJFIElOTk9WQVRJT048L3RleHQ+DQogIDx0ZXh0IHg9IjU4MCIgeT0iMjkwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRyYW5zZm9ybWluZyBNZWRpY2FsIFByYWN0aWNlPC90ZXh0Pg0KICANCiAgPCEtLSBGb290ZXIgLS0+DQogIDx0ZXh0IHg9IjQwMCIgeT0iMzQwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVtcG93ZXJpbmcgSGVhbHRoY2FyZSBQcm9mZXNzaW9uYWxzIHdpdGggSW50ZWxsaWdlbnQgVGVjaG5vbG9neTwvdGV4dD4NCiAgPHRleHQgeD0iNDAwIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFraW5nIEFkdmFuY2VkIEhlYWx0aGNhcmUgQWNjZXNzaWJsZSB0byBFdmVyeSBDbGluaWMgYW5kIEhvc3BpdGFsPC90ZXh0Pg0KPC9zdmc+';

export default function AboutPage() {
  const ceoImage = PlaceHolderImages.find((img) => img.id === 'ceo');
  const cofounderImage = PlaceHolderImages.find((img) => img.id === 'co-founder');

  return (
  <div className="container mx-auto py-12 sm:py-16 lg:py-24 fade-in">
      {/* Hero Image Section */}
      <div className="text-center mb-16">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <img
            src="/a34fa41b-b3f1-431e-af5e-4b3f710f3a41.png"
            alt="About Aidoe — AI healthcare technology overview"
            className="w-full h-auto rounded-lg object-cover mx-auto"
            style={{ aspectRatio: '16/9', maxHeight: '520px' }}
          />
        </div>
      </div>
        
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-animate">
          Our mission
        </h1>
        <p className="mt-4 max-w-3xl text-center text-lg text-muted-foreground mx-auto text-animate text-animate-delay-1">
          "Our mission is to make advanced healthcare technology accessible to every clinic and hospital. AI should empower doctors to deliver better, faster, and more precise care—not replace them. Aidoe bridges medical expertise and intelligent technology, keeping patient well-being at the center of every innovation."
        </p>
      </div>

      

  <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-10 max-w-3xl mx-auto justify-items-center items-stretch">
  <Card className="w-full max-w-xl h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="flex-row items-center justify-center gap-4 text-center">
            <div className="rounded-full p-1 bg-gradient-to-r from-accent/20 via-primary/40 to-accent/20 ring-1 ring-border shadow-sm">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/WhatsApp Image 2025-09-21 at 21.00.07_c077a73e.jpg" alt="CEO Sanchay Krishna" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <CardTitle>CEO / Founder</CardTitle>
              <p className="text-muted-foreground">Sanchay Krishna</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center text-animate">
              – “Every revolution in history begins with a single idea. Aidoe is our step toward a future where intelligence and compassion shape healthcare.”
            </p>
          </CardContent>
        </Card>
  <Card className="w-full max-w-xl h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="flex-row items-center justify-center gap-4 text-center">
            <div className="rounded-full p-1 bg-gradient-to-r from-accent/20 via-primary/40 to-accent/20 ring-1 ring-border shadow-sm">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/WhatsApp Image 2025-09-21 at 21.00.12_d763cfc6.jpg" alt="Co-founder Hariharan Vinod" />
                <AvatarFallback>HV</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <CardTitle>Co-founder</CardTitle>
              <p className="text-muted-foreground">Hariharan Vinod</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center text-animate">
             “We combine research and technology to ensure every innovation is evidence-based, scalable, and impactful in real-world healthcare.”
            </p>
          </CardContent>
        </Card>
      </div>

     <div className="mt-16 max-w-3xl mx-auto">
       <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-animate">Our Vision</h2>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto text-animate text-animate-delay-1">
                We envision a world where every healthcare professional is empowered with intelligent tools to make life-saving decisions, and every patient receives personalized care tailored to their unique needs. By harnessing the power of AI, we aim to build a healthier future for generations to come.
                </p>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
