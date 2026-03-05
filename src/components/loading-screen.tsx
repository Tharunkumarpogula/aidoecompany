import { Logo } from '@/components/logo';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Logo className="h-24 w-24 text-foreground" />
        </div>
      </div>
    </div>
  );
}
