import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageGallery, type GalleryImage } from '@/components/ui/image-gallery';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const showcaseImages: GalleryImage[] = [
  {
    id: 'dashboard',
    src: '/Home.png',
    alt: 'Aidoe Dashboard Interface',
    title: 'Smart Healthcare Dashboard',
    description: 'Real-time analytics and patient monitoring'
  },
  {
    id: 'telehealth',
    src: '/telehealth-bridge.png',
    alt: 'Telehealth Bridge Platform',
    title: 'Telehealth Solutions',
    description: 'Seamless remote patient care'
  },
  {
    id: 'why-aidoe',
    src: '/why-aidoe.png',
    alt: 'Why Choose Aidoe',
    title: 'AI-Powered Healthcare',
    description: 'Transforming medical practice with intelligence'
  }
];

const features = [
  {
    title: "AI Diagnostics",
    description: "Advanced machine learning algorithms assist medical professionals in accurate diagnosis",
    image: '/ai-diagnostics.png',
    badge: "AI-Powered"
  },
  {
    title: "Team Collaboration",
    description: "Seamless communication and data sharing between medical teams",
    image: '/team-collaboration.jpg',
    badge: "Collaborative"
  },
  {
    title: "Patient Monitoring",
    description: "Real-time patient data tracking and automated alert systems",
    image: '/a23deb9d-3094-4713-85be-039f53317c99.png',
    badge: "Real-time"
  }
];

export function HealthcareShowcase() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
            See Aidoe in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered healthcare platform is transforming medical practice 
            with intelligent solutions and seamless integration.
          </p>
        </div>

        

        {/* Feature Cards with Images */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {feature.badge}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section with Background Image */}
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Image
              src={PlaceHolderImages.find(img => img.id === 'hospital-dashboard')?.imageUrl || ''}
              alt="Healthcare background"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold mb-8 transition-transform duration-300 group-hover:scale-[1.02]">
              Trusted by Healthcare Professionals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">500+</div>
                <div className="text-primary-foreground/80">Hospitals Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">1M+</div>
                <div className="text-primary-foreground/80">Patients Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">99.9%</div>
                <div className="text-primary-foreground/80">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}