/**
 * Professional Contact Page with WhatsApp Integration
 */

import dynamic from 'next/dynamic';

// Dynamically import the ChatbotInterface component with no SSR
const ChatbotInterface = dynamic(() => import('./ChatbotInterface'), { ssr: false });

// Dynamically import the ErrorBoundary wrapper with no SSR
const ErrorBoundaryWrapper = dynamic(() => import('../components/ErrorBoundaryWrapper'), { ssr: false });

// Dynamically import ClientWrapper with no SSR
const ClientWrapper = dynamic(() => import('../components/ClientWrapper'), { ssr: false });

// Komponen loading
const LoadingComponent = () => (
  <div className="min-h-[500px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-luxury-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Contact() {
  return (
    <div>
      <ErrorBoundaryWrapper>
        <ClientWrapper fallback={<LoadingComponent />}>
          <ChatbotInterface />
        </ClientWrapper>
      </ErrorBoundaryWrapper>
    </div>
  );
} 