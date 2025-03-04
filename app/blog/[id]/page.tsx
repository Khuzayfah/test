/**
 * Professional Blog Post Page
 * 
 * This page displays an individual blog post with a clean,
 * professional design that emphasizes readability and authority.
 * 
 * Features:
 * - Clean white background with subtle blue accents for trust
 * - Professional typography for improved readability
 * - Consistent styling with the main blog page
 * - Clear structure and content organization
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import PageLayout from '../../components/PageLayout';

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: '10 SEO Strategies That Will Dominate in 2024',
    description: 'Stay ahead of the competition with these proven SEO strategies that are set to deliver the best results in the coming year.',
    category: 'SEO',
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'Alex Johnson',
      title: 'SEO Director',
      image: '/images/authors/alex.jpg'
    },
    content: `
      <p>As we move deeper into 2024, search engine optimization continues to evolve at a rapid pace. Staying ahead of these changes is crucial for maintaining and improving your website's visibility in search results.</p>
      
      <h2>1. Focus on User Experience Signals</h2>
      
      <p>Google's algorithms are increasingly prioritizing sites that provide excellent user experiences. Core Web Vitals have become essential ranking factors, measuring loading performance, interactivity, and visual stability.</p>
      
      <h2>2. Create High-Quality, Authoritative Content</h2>
      
      <p>Content remains king, but the bar for quality continues to rise. In 2024, successful content must be comprehensive, factually accurate, and offer unique insights. Generic content no longer cuts it in competitive niches.</p>
      
      <h2>3. Optimize for Voice Search</h2>
      
      <p>With the growing prevalence of smart speakers and voice assistants, optimizing for voice search is more important than ever. This means focusing on natural language patterns and question-based queries.</p>
      
      <h2>4. Leverage AI for Content Creation and Optimization</h2>
      
      <p>AI tools have become sophisticated enough to assist with content creation and optimization. While they shouldn't replace human creativity, they can enhance efficiency and help identify optimization opportunities.</p>
      
      <h2>5. Focus on E-E-A-T</h2>
      
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) remain crucial for SEO success, especially in YMYL (Your Money Your Life) niches. Demonstrating these qualities through your content and site structure is essential.</p>
      
      <h2>6. Optimize for Mobile-First Indexing</h2>
      
      <p>Mobile optimization is no longer optional. With Google's mobile-first indexing, ensuring your site performs flawlessly on mobile devices is critical for ranking success.</p>
      
      <h2>7. Implement Schema Markup</h2>
      
      <p>Structured data through schema markup helps search engines understand your content better and can lead to rich snippets in search results, increasing your visibility and click-through rates.</p>
      
      <h2>8. Focus on Local SEO</h2>
      
      <p>For businesses with physical locations, local SEO continues to be vital. Optimizing your Google Business Profile and local citations can significantly improve your visibility in local search results.</p>
      
      <h2>9. Build Quality Backlinks</h2>
      
      <p>Despite many changes in SEO, backlinks remain a crucial ranking factor. Focus on earning high-quality, relevant backlinks rather than quantity.</p>
      
      <h2>10. Monitor and Adapt to Core Updates</h2>
      
      <p>Google's core updates can significantly impact rankings. Staying informed about these updates and having the flexibility to adapt your strategy accordingly is essential for long-term SEO success.</p>
      
      <h2>Conclusion</h2>
      
      <p>SEO in 2024 requires a comprehensive approach that balances technical optimization, quality content creation, and user experience enhancement. By implementing these strategies, you'll be well-positioned to improve your search visibility and stay ahead of the competition.</p>
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id;
  
  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === postId);
  
  // If post not found, we could redirect to the blog list
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <p className="text-gray-700 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageLayout
      showParticles={false}
      className="pt-28" // Add additional padding for the blog post
    >
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to all articles
          </Link>
        </motion.div>
        
        {/* Blog post header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="trust-badge text-xs">{post.category}</div>
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <p className="text-xl text-gray-700 mb-8">
            {post.description}
          </p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.title}</div>
            </div>
          </div>
        </motion.div>
        
        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Blog content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-100 flex items-start"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-bold">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.title}</div>
            </div>
          </div>
        </motion.div>
        
        {/* Related posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">You May Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ...existing related posts content... */}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center bg-blue-50 p-12 rounded-xl shadow-sm border border-blue-100"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Share this article</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <span className="sr-only">Share on Twitter</span>
                  <span>𝕏</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <span className="sr-only">Share on LinkedIn</span>
                  <span>in</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <span className="sr-only">Share on Facebook</span>
                  <span>f</span>
                </button>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="btn-secondary"
            >
              Request a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
} 