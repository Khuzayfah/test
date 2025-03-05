'use client';

import { useState, useEffect, ReactNode } from 'react';

/**
 * ClientOnlyWrapper Component
 * 
 * A utility component that only renders its children on the client side.
 * This prevents hydration mismatch errors when server and client rendering differ.
 * 
 * Usage:
 * <ClientOnlyWrapper>
 *   <ComponentThatOnlyWorksOnClient />
 * </ClientOnlyWrapper>
 */
interface ClientOnlyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function ClientOnlyWrapper({ 
  children, 
  fallback = null 
}: ClientOnlyWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only render children after component has mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return <>{children}</>;
} 