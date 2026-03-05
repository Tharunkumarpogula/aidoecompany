"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, createContext, useContext, useLayoutEffect } from 'react';
import { LoadingScreen } from './loading-screen';

const LoadingContext = createContext<{ isLoading: boolean }>({ isLoading: true });

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      handleStart();
      originalPushState.apply(history, args);
      window.dispatchEvent(new Event('pushstate'));
    };

    window.addEventListener('popstate', handleStart);
    window.addEventListener('pushstate', handleStart);

    return () => {
      history.pushState = originalPushState;
      window.removeEventListener('popstate', handleStart);
      window.removeEventListener('pushstate', handleStart);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {isLoading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  );
}
