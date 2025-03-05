import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Poppins, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import NetlifyIdentityScript from '../components/NetlifyIdentityScript'
import NetlifyIdentityRedirect from '../components/NetlifyIdentityRedirect'

// Dynamically import components with browser-only features
// This prevents hydration errors by ensuring they only load on the client
const ChatTerminal = dynamic(() => import('./components/ChatTerminal'), { 
  ssr: false, 
  loading: () => <div className="hidden lg:block fixed bottom-6 right-6 z-50 opacity-0"></div> 
})

// Optimize font loading with display: swap
const fontOption1 = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
})

const fontOption2 = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

const fontOption3 = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  preload: true,
})

// Pick one of the above fonts to use as your primary font
const primaryFont = fontOption2 // Using Poppins in this example

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000', // Changed to black for luxury theme
  // Add faster touch response
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://singrank.com'),
  title: 'SingRank | #1 SEO Agency Singapore | Top-Rated Digital Marketing',
  description: 'SingRank - Premier SEO Agency Singapore helping businesses rank #1 on Google. Affordable SEO services, technical audits, content strategy & local SEO with proven ROI.',
  keywords: 'SEO Agency Singapore, Singapore SEO Company, Singapore SEO Services, SEO Expert Singapore, SEO Consultant Singapore, Affordable SEO Singapore, Technical SEO Audit, Content Strategy, Local SEO, SingRank, Answer Engine Optimization, AI optimization',
  authors: [{ name: 'Khuzayfah Redo - SingRank' }],
  openGraph: {
    title: 'SingRank | #1 SEO Agency Singapore | Top-Rated Digital Marketing',
    description: 'SingRank - Premier SEO Agency Singapore helping businesses rank #1 on Google. Affordable SEO services, technical audits, content strategy & local SEO with proven ROI.',
    url: 'https://singrank.com',
    siteName: 'SingRank - SEO Agency Singapore',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: 'https://singrank.com/images/singrank-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SingRank - #1 SEO Agency Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SingRank | #1 SEO Agency Singapore | Top-Rated Digital Marketing',
    description: 'SingRank - Premier SEO Agency Singapore helping businesses rank #1 on Google. Affordable SEO services, technical audits, content strategy & local SEO with proven ROI.',
    images: ['https://singrank.com/images/singrank-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://singrank.com',
    languages: {
      'en-SG': 'https://singrank.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'SEO Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${primaryFont.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.png" as="image" />
        
        {/* Add meta tag to prevent flash of unstyled content */}
        <style dangerouslySetInnerHTML={{ __html: `
          html {
            visibility: visible;
            opacity: 1;
          }
        `}} />
      </head>
      <body className="font-sans">
        {/* Netlify Identity Script */}
        <NetlifyIdentityScript />
        <NetlifyIdentityRedirect />
        
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatTerminal />
        </div>
      </body>
    </html>
  )
} 