'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function ClientWrapper({ 
  children, 
  fallback = <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-luxury-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
}: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
} 