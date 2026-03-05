'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showTitles?: boolean;
  className?: string;
}

export function ImageGallery({ 
  images, 
  columns = 3, 
  showTitles = false,
  className = ""
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className={className}>
      <div className={`grid gap-4 ${gridCols[columns]}`}>
        {images.map((image, index) => (
          <Card key={image.id} className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Dialog>
              <DialogTrigger asChild>
                <div onClick={() => setSelectedImage(index)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    {showTitles && image.title && (
                      <div className="p-4">
                        <h3 className="font-semibold text-sm">{image.title}</h3>
                        {image.description && (
                          <p className="text-xs text-muted-foreground mt-1">{image.description}</p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <div className="relative">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={selectedImage !== null ? images[selectedImage].src : image.src}
                      alt={selectedImage !== null ? images[selectedImage].alt : image.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  
                  {/* Navigation buttons */}
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  
                  {/* Image info */}
                  {selectedImage !== null && images[selectedImage].title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <h3 className="font-semibold">{images[selectedImage].title}</h3>
                      {images[selectedImage].description && (
                        <p className="text-sm opacity-90">{images[selectedImage].description}</p>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
}