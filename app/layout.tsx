import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Poppins, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatTerminal from './components/ChatTerminal'

// Choose one of these professional font options:
const fontOption1 = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const fontOption2 = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const fontOption3 = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

// Pick one of the above fonts to use as your primary font
const primaryFont = fontOption2 // Using Poppins in this example

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000', // Changed to black for luxury theme
}

export const metadata: Metadata = {
  metadataBase: new URL('https://singrank.com'),
  title: 'SingRank - Premier SEO Agency in Singapore | Expert Digital Marketing',
  description: 'SingRank is Singapore\'s leading SEO agency offering comprehensive digital marketing, technical SEO audits, content strategy, and local SEO services with proven results.',
  keywords: 'SEO Singapore, digital marketing agency Singapore, technical SEO audit, content strategy, local SEO, Singapore SEO company, SingRank, Answer Engine Optimization, AI optimization',
  authors: [{ name: 'Khuzayfah Redo - SingRank' }],
  openGraph: {
    title: 'SingRank - Premier SEO Agency in Singapore | Expert Digital Marketing',
    description: 'SingRank is Singapore\'s leading SEO agency offering comprehensive digital marketing, technical SEO audits, content strategy, and local SEO services with proven results.',
    url: 'https://singrank.com',
    siteName: 'SingRank',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: 'https://singrank.com/images/singrank-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SingRank - Premier SEO Agency in Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SingRank - Premier SEO Agency in Singapore | Expert Digital Marketing',
    description: 'SingRank is Singapore\'s leading SEO agency offering comprehensive digital marketing, technical SEO audits, content strategy, and local SEO services with proven results.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${primaryFont.variable}`}>
      <body className="font-sans">
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