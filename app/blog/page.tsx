/**
 * Professional Blog Page
 * 
 * This page presents our collection of industry insights and expertise with a clean,
 * professional design that emphasizes trust, knowledge, and authority.
 * 
 * Features:
 * - Clean white background with subtle blue accents for trust
 * - Professional card design for each blog post
 * - Consistent typography and spacing
 * - Subtle animations for improved engagement
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: '10 SEO Strategies That Will Dominate in 2024',
    description: 'Stay ahead of the competition with these proven SEO strategies that are set to deliver the best results in the coming year.',
    category: 'SEO',
    date: 'March 15, 2024',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'How to Build a Social Media Strategy That Converts',
    description: 'Learn how to create a social media strategy focused on driving conversions rather than just increasing vanity metrics.',
    category: 'Social Media',
    date: 'March 10, 2024',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Content Marketing Trends to Watch in 2024',
    description: 'Discover the latest content marketing trends that are shaping the digital landscape and how you can leverage them.',
    category: 'Content Marketing',
    date: 'March 5, 2024',
    readTime: '7 min read'
  },
  {
    id: 4,
    title: 'PPC Campaign Optimization: A Step-by-Step Guide',
    description: 'Follow this comprehensive guide to optimize your PPC campaigns for better performance and higher ROI.',
    category: 'PPC',
    date: 'February 28, 2024',
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'Email Marketing Best Practices for 2024',
    description: 'Maximize your email marketing effectiveness with these up-to-date best practices for higher open rates and conversions.',
    category: 'Email Marketing',
    date: 'February 20, 2024',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'How Video Marketing is Transforming Digital Strategies',
    description: 'Explore how video marketing is changing the digital landscape and how businesses are leveraging it for growth.',
    category: 'Video Marketing',
    date: 'February 15, 2024',
    readTime: '8 min read'
  }
];

// Blog categories for filtering
const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing', 'Video Marketing'];

export default function Blog() {
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filtered blog posts based on category selection
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageLayout
      title="Latest Industry Insights"
      description="Stay up-to-date with the latest digital marketing trends, strategies, and best practices through our regularly updated blog."
    >
      {/* Category filters */}
      <div className="flex flex-wrap justify-center mb-12 gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog posts grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.id}
            variants={itemVariants}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-blue-200"
          >
            <Link href={`/blog/${post.id}`} className="block h-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="trust-badge text-xs">{post.category}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="trust-link inline-flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
      
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center bg-blue-50 p-12 rounded-xl shadow-sm border border-blue-100"
      >
        <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Subscribe to our newsletter to receive the latest insights and industry trends straight to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </PageLayout>
  );
} 