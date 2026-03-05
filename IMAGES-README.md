# Image Management Guide

## Overview
Your website now has a comprehensive image management system with the following components:

## 1. Static Images (Public Folder)
Place your images in the `/public` folder. They can be accessed directly:
```tsx
<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

Current images in `/public`:
- `Home.png` - Dashboard interface
- `telehealth-bridge.png` - Telehealth platform
- `why-aidoe.png` - Why choose Aidoe
- `why-aidoe.svg` - SVG version
- `why-aidoe.jpg` - JPEG version

## 2. Placeholder Image System
Dynamic images are managed in `/src/lib/placeholder-images.json`. These are great for:
- Development and testing
- Dynamic content
- Temporary images

Available placeholder images:
- `ceo` - Professional portrait
- `co-founder` - Professional portrait  
- `healthcare-tech` - Medical technology
- `medical-team` - Healthcare professionals
- `hospital-dashboard` - Analytics dashboard
- `patient-care` - Patient monitoring

## 3. Image Components

### AppImage Component
Basic image component with preset styles:
```tsx
import { AppImage, HeroImage, CardImage, AvatarImage } from '@/components/ui/app-image';

// Basic usage
<AppImage src="/your-image.jpg" alt="Description" />

// Hero image (large, rounded, with shadow)
<HeroImage src="/hero.jpg" alt="Hero image" />

// Card image (medium size, for cards)
<CardImage src="/card.jpg" alt="Card image" />

// Avatar image (circular, for profiles)
<AvatarImage src="/avatar.jpg" alt="User avatar" size={100} />
```

### Image Gallery Component
For displaying multiple images:
```tsx
import { ImageGallery } from '@/components/ui/image-gallery';

const images = [
  {
    id: '1',
    src: '/image1.jpg',
    alt: 'Image 1',
    title: 'Optional title',
    description: 'Optional description'
  },
  // ... more images
];

<ImageGallery 
  images={images} 
  columns={3} 
  showTitles={true}
/>
```

## 4. Adding New Images

### For Static Images:
1. Add your image files to the `/public` folder
2. Reference them with `/filename.ext` in your components

### For Dynamic Images:
1. Add new entries to `/src/lib/placeholder-images.json`
2. Use `PlaceHolderImages.find(img => img.id === 'your-id')?.imageUrl`

### Example: Adding a Team Section
```tsx
import { ImageGallery } from '@/components/ui/image-gallery';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamImages = [
  {
    id: 'ceo',
    src: PlaceHolderImages.find(img => img.id === 'ceo')?.imageUrl || '',
    alt: 'CEO',
    title: 'John Doe',
    description: 'Chief Executive Officer'
  },
  {
    id: 'founder',
    src: PlaceHolderImages.find(img => img.id === 'co-founder')?.imageUrl || '',
    alt: 'Co-founder',
    title: 'Jane Smith',
    description: 'Co-founder & CTO'
  }
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <ImageGallery images={teamImages} columns={2} showTitles={true} />
      </div>
    </section>
  );
}
```

## 5. Best Practices

1. **Use Next.js Image component** for optimization
2. **Always provide alt text** for accessibility
3. **Use appropriate sizes** to avoid layout shifts
4. **Consider lazy loading** for images below the fold
5. **Optimize images** before adding to public folder
6. **Use WebP format** when possible for better compression

## 6. Current Implementation

Your homepage now includes:
- Hero section with telehealth bridge image
- Tech SaaS section with feature highlights
- New Healthcare Showcase section with:
  - Product screenshot gallery
  - Feature cards with images
  - Stats section with background image

## 7. Adding More Sections

You can easily add more image-rich sections to other pages:
- About page with team photos
- Contact page with office images  
- Why Aidoe page with product screenshots
- Case studies with before/after images

Would you like me to implement any specific image sections or help you add particular images to your website?