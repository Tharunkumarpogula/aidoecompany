import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onClick?: () => void;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export function AppImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onClick,
  rounded = 'md',
  shadow = 'none',
  hover = false,
  ...props
}: AppImageProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'
    : '';

  const imageClasses = cn(
    roundedClasses[rounded],
    shadowClasses[shadow],
    hoverClasses,
    className
  );

  const imageProps = {
    src,
    alt,
    priority,
    quality,
    placeholder,
    ...(blurDataURL && { blurDataURL }),
    className: imageClasses,
    onClick,
    unoptimized: true, // For external URLs and development
    ...props,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return (
    <Image
      {...imageProps}
      width={width || 400}
      height={height || 300}
    />
  );
}

// Predefined image variants for common use cases
export function HeroImage({ src, alt, className, ...props }: Omit<AppImageProps, 'width' | 'height'>) {
  return (
    <AppImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      rounded="xl"
      shadow="xl"
      hover
      className={cn('w-full h-auto', className)}
      {...props}
    />
  );
}

export function CardImage({ src, alt, className, ...props }: Omit<AppImageProps, 'width' | 'height'>) {
  return (
    <AppImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      rounded="lg"
      shadow="md"
      hover
      className={cn('w-full h-auto', className)}
      {...props}
    />
  );
}

export function AvatarImage({ src, alt, size = 100, className, ...props }: Omit<AppImageProps, 'width' | 'height'> & { size?: number }) {
  return (
    <AppImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      rounded="full"
      shadow="sm"
      className={cn('aspect-square object-cover', className)}
      {...props}
    />
  );
}

export function ThumbnailImage({ src, alt, className, ...props }: Omit<AppImageProps, 'width' | 'height'>) {
  return (
    <AppImage
      src={src}
      alt={alt}
      width={150}
      height={150}
      rounded="md"
      hover
      className={cn('aspect-square object-cover', className)}
      {...props}
    />
  );
}