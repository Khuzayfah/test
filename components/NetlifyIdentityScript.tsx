'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function NetlifyIdentityScript() {
  useEffect(() => {
    // This will run after the script loads
    const handleNetlifyIdentityLoaded = () => {
      console.log('Netlify Identity Widget loaded');
    };

    // Check if the script is already loaded
    if (window.netlifyIdentity) {
      handleNetlifyIdentityLoaded();
    } else {
      // Set up a listener for when it loads
      window.addEventListener('netlifyIdentityLoaded', handleNetlifyIdentityLoaded);
    }

    // Cleanup
    return () => {
      window.removeEventListener('netlifyIdentityLoaded', handleNetlifyIdentityLoaded);
    };
  }, []);

  return (
    <Script 
      src="https://identity.netlify.com/v1/netlify-identity-widget.js" 
      strategy="afterInteractive"
    />
  );
}

// Add TypeScript declaration for window object
declare global {
  interface Window {
    netlifyIdentity: any;
  }
} 