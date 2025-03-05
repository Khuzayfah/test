import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | SingRank - Digital Marketing Agency',
  description: 'Discover the latest tips and strategies on SEO, PPC, and digital marketing in our blog',
  openGraph: {
    title: 'Blog | SingRank Digital Marketing Agency',
    description: 'Latest articles and insights on digital marketing, SEO, and online growth',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'SingRank Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | SingRank Digital Marketing Agency',
    description: 'Discover our latest insights on digital marketing and SEO',
    images: ['/images/og-blog.jpg'],
  },
}; 