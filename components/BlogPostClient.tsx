'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiCalendar, FiArrowLeft, FiShare2, FiHeart, FiMessageSquare, FiBookmark, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { format } from 'date-fns';

// Post data interface (same as in page.tsx)
interface PostData {
  id: string;
  title: string;
  date: string;
  author: string | {
    name: string;
    title?: string;
    image?: string;
    bio?: string;
  };
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

interface BlogPostClientProps {
  postData: PostData;
}

export default function BlogPostClient({ postData }: BlogPostClientProps) {
  // Format date function
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMMM d, yyyy');
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  // Get formatted author data
  const getAuthorData = () => {
    if (typeof postData.author === 'string') {
      return { name: postData.author };
    }
    return postData.author;
  };

  const author = getAuthorData();

  // Handle social share
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(postData.title);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with thumbnail */}
      <div className="relative h-96 bg-gradient-to-r from-red-900 to-red-700 overflow-hidden">
        {postData.thumbnail && (
          <Image
            src={postData.thumbnail}
            alt={postData.title}
            fill
            style={{ objectFit: 'cover', opacity: 0.4 }}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="flex items-center text-white mb-4 hover:text-red-300 transition">
              <FiArrowLeft className="mr-2" />
              <span>Back to Blog</span>
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{postData.title}</h1>
            <div className="flex flex-wrap items-center text-gray-300 mb-4">
              <span className="flex items-center mr-6">
                <FiCalendar className="mr-2" />
                {formatDate(postData.date)}
              </span>
              {postData.readTime && (
                <span className="flex items-center">
                  <FiClock className="mr-2" />
                  {postData.readTime}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Article Content */}
          <motion.article 
            className="md:w-3/4 pr-0 md:pr-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />

            {/* Tags */}
            {postData.tags && postData.tags.length > 0 && (
              <div className="mt-12 mb-8">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap">
                  {postData.tags.map((tag, index) => (
                    <Link 
                      href={`/blog?tag=${tag}`} 
                      key={index}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full mr-2 mb-2 hover:bg-red-100 hover:text-red-800 transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons */}
            <div className="mt-8 mb-12">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleShare('twitter')}
                  className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-500 p-3 rounded-full transition"
                  aria-label="Share on Twitter"
                >
                  <FiTwitter size={20} />
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="bg-gray-100 hover:bg-blue-200 text-gray-700 hover:text-blue-600 p-3 rounded-full transition"
                  aria-label="Share on Facebook"
                >
                  <FiFacebook size={20} />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 p-3 rounded-full transition"
                  aria-label="Share on LinkedIn"
                >
                  <FiLinkedin size={20} />
                </button>
              </div>
            </div>

            {/* Related posts */}
            {postData.relatedPosts && postData.relatedPosts.length > 0 && (
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {postData.relatedPosts.map((post, index) => (
                    <Link href={`/blog/${post.id}`} key={index}>
                      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition group">
                        <div className="relative h-48 rounded-t-lg overflow-hidden">
                          {post.thumbnail ? (
                            <Image
                              src={post.thumbnail}
                              alt={post.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600"></div>
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-semibold mb-2 group-hover:text-red-700 transition">{post.title}</h4>
                          <p className="text-gray-600 text-sm">{formatDate(post.date)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            className="md:w-1/4 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Author information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                {author.image ? (
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500">
                    {author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{author.name}</h4>
                  {author.title && <p className="text-gray-600 text-sm">{author.title}</p>}
                </div>
              </div>
              {author.bio && <p className="text-gray-700 text-sm">{author.bio}</p>}
            </div>

            {/* Category */}
            {postData.category && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Category</h3>
                <Link 
                  href={`/blog?category=${postData.category}`}
                  className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg hover:bg-red-200 transition"
                >
                  {postData.category}
                </Link>
              </div>
            )}

            {/* Interactive elements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Engage with this post</h3>
              <div className="flex justify-between">
                <button className="flex flex-col items-center p-3 hover:text-red-600 transition">
                  <FiHeart size={24} />
                  <span className="text-sm mt-1">Like</span>
                </button>
                <button className="flex flex-col items-center p-3 hover:text-red-600 transition">
                  <FiMessageSquare size={24} />
                  <span className="text-sm mt-1">Comment</span>
                </button>
                <button className="flex flex-col items-center p-3 hover:text-red-600 transition">
                  <FiBookmark size={24} />
                  <span className="text-sm mt-1">Save</span>
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
} 