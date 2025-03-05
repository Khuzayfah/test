import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';

// Definisi tipe untuk FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Definisi tipe untuk props BlogSEO
export interface BlogSEOProps {
  post: {
    id: string;
    title: string;
    date: string;
    author: {
      name: string;
      title?: string;
      image?: string;
    };
    content: string;
    description?: string;
    thumbnail?: string;
    tags?: string[];
    categories?: string[];
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      focusKeywords?: string;
      canonical?: string;
      noIndex?: boolean;
    };
    socialSharing?: {
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: string;
      twitterTitle?: string;
      twitterDescription?: string;
      twitterCardType?: string;
    };
    structuredData?: {
      articleType?: string;
      dateModified?: string;
      mainEntity?: string;
      faq?: FAQItem[];
    };
  };
}

// Helper function untuk menghasilkan metadata blog
export function generateBlogMetadata(
  post: BlogSEOProps['post'],
  baseUrl: string
): Metadata {
  // Base metadata
  const metadata: Metadata = {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.description,
    robots: {
      index: post.seo?.noIndex ? false : true,
      follow: true,
    },
  };

  // OpenGraph metadata
  metadata.openGraph = {
    type: 'article',
    title: post.socialSharing?.ogTitle || post.title,
    description: post.socialSharing?.ogDescription || post.description,
    url: post.seo?.canonical || `${baseUrl}/blog/${post.id}`,
    images: [
      {
        url: post.socialSharing?.ogImage || post.thumbnail || '/images/blog/default.jpg',
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
  };

  // Twitter metadata
  metadata.twitter = {
    card: (post.socialSharing?.twitterCardType as 'summary' | 'summary_large_image') || 'summary_large_image',
    title: post.socialSharing?.twitterTitle || post.title,
    description: post.socialSharing?.twitterDescription || post.description,
    images: [post.socialSharing?.ogImage || post.thumbnail || '/images/blog/default.jpg'],
  };

  // Canonical URL
  metadata.alternates = {
    canonical: post.seo?.canonical || `${baseUrl}/blog/${post.id}`,
  };

  return metadata;
}

// Blog Structured Data component
export default function BlogStructuredData({ post }: BlogSEOProps) {
  // Log untuk debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('Blog structured data for:', post.title);
  }

  // Generate artikel structured data
  const generateArticleStructuredData = () => {
    const articleType = post.structuredData?.articleType || 'Article';
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': articleType,
      headline: post.title,
      description: post.description,
      image: post.thumbnail || post.socialSharing?.ogImage || '/images/blog/default.jpg',
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.title,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SingRank',
        logo: {
          '@type': 'ImageObject',
          url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/logo.png`,
        },
      },
      datePublished: post.date,
      dateModified: post.structuredData?.dateModified || post.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': post.seo?.canonical || `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${post.id}`,
      },
    };

    return JSON.stringify(structuredData);
  };

  // Generate FAQ structured data jika ada
  const generateFAQStructuredData = () => {
    if (!post.structuredData?.faq || post.structuredData.faq.length === 0) {
      return null;
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.structuredData.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    return JSON.stringify(structuredData);
  };

  // Pre-generate the JSON strings
  const articleJson = generateArticleStructuredData();
  const faqJson = post.structuredData?.faq && post.structuredData.faq.length > 0 
    ? generateFAQStructuredData() 
    : null;

  return (
    <>
      {/* Article Structured Data */}
      <Script 
        id={`structured-data-article-${post.id}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: articleJson }}
      />
      
      {/* FAQ Structured Data (if exists) */}
      {faqJson && (
        <Script
          id={`structured-data-faq-${post.id}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: faqJson }}
        />
      )}
    </>
  );
} 