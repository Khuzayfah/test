'use client';

import { useEffect } from 'react';

export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    // Check if Netlify Identity is available
    if (window.netlifyIdentity) {
      console.log('Netlify Identity detected in window');
      
      window.netlifyIdentity.on("init", (user: any) => {
        console.log('Netlify Identity initialized', user ? 'User logged in' : 'No user');
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            console.log('User logged in, redirecting to admin');
            document.location.href = "/admin/";
          });
        }
      });

      // Handle error events
      window.netlifyIdentity.on("error", (err: any) => {
        console.error('Netlify Identity error:', err);
      });

      // Log Git Gateway issues
      if (window.netlifyIdentity.gotrue) {
        console.log('GoTrue API Available:', window.netlifyIdentity.gotrue.api?.apiURL);
      }
    } else {
      console.error('Netlify Identity Widget not loaded properly');
    }
  }, []);

  return null; // This component doesn't render anything
}

// Add TypeScript declaration for window object
declare global {
  interface Window {
    netlifyIdentity: any;
  }
} 