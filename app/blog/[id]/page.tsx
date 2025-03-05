/**
 * Professional Blog Post Page - Luxury Red & White Theme
 * 
 * This page displays an individual blog post with an elegant,
 * premium design that emphasizes readability and authority.
 * 
 * Features:
 * - Luxury red and white theme with subtle animations
 * - Premium typography for enhanced readability
 * - Author information with credentials
 * - Related posts section
 * - Social sharing functionality
 * - Advanced SEO optimization with structured data
 */

import { Metadata, ResolvingMetadata } from 'next';
import { getPostData, getAllPosts } from '../../../lib/blog';
import BlogStructuredData from '../../../components/BlogSEO';
import BlogPostClient from '../../../components/BlogPostClient';
import { notFound } from 'next/navigation';

// Type definitions
type BlogPostParams = {
  params: {
    id: string;
  };
};

// Author interface
interface AuthorData {
  name: string;
  title?: string;
  image?: string;
  bio?: string;
}

// Post data interface
interface PostData {
  id: string;
  title: string;
  date: string;
  author: string | AuthorData;
  content: string;
  contentHtml: string;
  readTime?: string;
  excerpt?: string;
  thumbnail?: string;
  category?: string;
  tags?: string[];
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
    twitterImage?: string;
    twitterCardType?: 'summary' | 'summary_large_image';
  };
  structuredData?: {
    articleType?: string;
    dateModified?: string;
    mainEntity?: string;
    autoGenerate?: boolean;
    generatedSchema?: any;
    faq?: Array<{ question: string; answer: string }>;
  };
  relatedPosts?: any[];
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: BlogPostParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Get post data
  try {
    const postData = await getPostData(params.id);
    
    // Get base URL from environment variable or use fallback
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://singrank.com';
    
    // Base metadata (title, description)
    const metadata: Metadata = {
      title: postData.seo?.metaTitle || postData.title,
      description: postData.seo?.metaDescription || postData.excerpt,
    };
    
    // Robots control
    if (postData.seo?.noIndex) {
      metadata.robots = {
        index: false,
        follow: true,
      };
    }
    
    // Open Graph metadata
    metadata.openGraph = {
      type: 'article',
      title: postData.socialSharing?.ogTitle || postData.title,
      description: postData.socialSharing?.ogDescription || postData.excerpt,
      url: postData.seo?.canonical || `${baseUrl}/blog/${postData.id}`,
      images: [
        {
          url: postData.socialSharing?.ogImage || postData.thumbnail || '/images/blog/default.jpg',
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
      publishedTime: postData.date,
      modifiedTime: postData.structuredData?.dateModified || postData.date,
      authors: [typeof postData.author === 'string' 
        ? postData.author 
        : postData.author.name],
      tags: postData.tags,
    };
    
    // Twitter metadata
    metadata.twitter = {
      card: (postData.socialSharing?.twitterCardType as 'summary' | 'summary_large_image') || 'summary_large_image',
      title: postData.socialSharing?.twitterTitle || postData.title,
      description: postData.socialSharing?.twitterDescription || postData.excerpt,
      images: [postData.socialSharing?.ogImage || postData.thumbnail || '/images/blog/default.jpg'],
    };
    
    // Canonical URL
    metadata.alternates = {
      canonical: postData.seo?.canonical || `${baseUrl}/blog/${postData.id}`,
    };
    
    // Keywords metadata
    if (postData.seo?.focusKeywords) {
      metadata.keywords = postData.seo.focusKeywords;
    } else if (postData.tags && postData.tags.length > 0) {
      metadata.keywords = postData.tags.join(', ');
    }
    
    return metadata;
  } catch (error) {
    // Fallback metadata for error case
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | SingRank',
      description: 'Read our latest blog post on SingRank.',
    };
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const allPosts = await getAllPosts();
    return allPosts.map((post) => ({
      id: post.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main blog post page component
export default async function BlogPost({ params }: BlogPostParams) {
  try {
    // Get post data
    const postData = await getPostData(params.id);
    
    // If post not found, show 404 page
    if (!postData) {
      notFound();
    }
    
    return (
      <>
        {/* Structured Data for SEO */}
        <BlogStructuredData post={postData} />
        
        {/* Client Side Blog Post Component */}
        <BlogPostClient postData={postData} />
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}