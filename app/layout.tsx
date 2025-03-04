import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://singrank.com'),
  title: 'SingRank - Digital Marketing Agency Singapore',
  description: 'Premier digital marketing agency in Singapore helping businesses grow their online presence through innovative strategies and solutions.',
  keywords: 'digital marketing, SEO, social media marketing, content marketing, Singapore, marketing agency',
  authors: [{ name: 'SingRank' }],
  openGraph: {
    title: 'SingRank - Digital Marketing Agency Singapore',
    description: 'Premier digital marketing agency in Singapore helping businesses grow their online presence through innovative strategies and solutions.',
    url: 'https://singrank.com',
    siteName: 'SingRank',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SingRank - Digital Marketing Agency Singapore',
    description: 'Premier digital marketing agency in Singapore helping businesses grow their online presence through innovative strategies and solutions.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 