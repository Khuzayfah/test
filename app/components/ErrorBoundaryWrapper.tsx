'use client';

import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// Error Fallback component
const ErrorFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <div className="text-red-500 text-5xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-4">
        We're sorry, but there was an error loading the chat interface.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-luxury-red-500 text-white rounded-lg hover:bg-luxury-red-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

export default function ErrorBoundaryWrapper({ 
  children, 
  fallback 
}: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
} 