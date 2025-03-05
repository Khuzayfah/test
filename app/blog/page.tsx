/**
 * Professional Blog Page - Luxury Red & White Theme
 * 
 * This page presents our collection of industry insights and expertise with an elegant,
 * premium design that emphasizes trust, knowledge, and authority.
 * 
 * Features:
 * - Luxury red and white theme with subtle animations
 * - Premium card design with elegant hover effects
 * - Featured posts section for highlighted content
 * - Sophisticated filtering and search functionality
 * - Newsletter subscription with premium styling
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: '10 SEO Strategies That Will Dominate in 2024',
    description: 'Stay ahead of the competition with these proven SEO strategies that are set to deliver the best results in the coming year.',
    category: 'SEO',
    date: 'March 15, 2024',
    readTime: '8 min read',
    featured: true,
    image: '/images/blog/seo-strategies.jpg'
  },
  {
    id: 2,
    title: 'How to Build a Social Media Strategy That Converts',
    description: 'Learn how to create a social media strategy focused on driving conversions rather than just increasing vanity metrics.',
    category: 'Social Media',
    date: 'March 10, 2024',
    readTime: '6 min read',
    featured: false,
    image: '/images/blog/social-media.jpg'
  },
  {
    id: 3,
    title: 'Content Marketing Trends to Watch in 2024',
    description: 'Discover the latest content marketing trends that are shaping the digital landscape and how you can leverage them.',
    category: 'Content Marketing',
    date: 'March 5, 2024',
    readTime: '7 min read',
    featured: true,
    image: '/images/blog/content-marketing.jpg'
  },
  {
    id: 4,
    title: 'PPC Campaign Optimization: A Step-by-Step Guide',
    description: 'Follow this comprehensive guide to optimize your PPC campaigns for better performance and higher ROI.',
    category: 'PPC',
    date: 'February 28, 2024',
    readTime: '10 min read',
    featured: false,
    image: '/images/blog/ppc-campaign.jpg'
  },
  {
    id: 5,
    title: 'Email Marketing Best Practices for 2024',
    description: 'Maximize your email marketing effectiveness with these up-to-date best practices for higher open rates and conversions.',
    category: 'Email Marketing',
    date: 'February 20, 2024',
    readTime: '5 min read',
    featured: false,
    image: '/images/blog/email-marketing.jpg'
  },
  {
    id: 6,
    title: 'How Video Marketing is Transforming Digital Strategies',
    description: 'Explore how video marketing is changing the digital landscape and how businesses are leveraging it for growth.',
    category: 'Video Marketing',
    date: 'February 15, 2024',
    readTime: '8 min read',
    featured: false,
    image: '/images/blog/video-marketing.jpg'
  }
];

// Blog categories for filtering
const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing', 'Video Marketing'];

export default function Blog() {
  // State for category filtering and search
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fff1f1] to-transparent opacity-50 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-[#fff5f5] text-[#d13239] rounded-full text-sm font-medium mb-6 border border-[#ffcaca]">
              Insights & Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d13239] to-[#a61b22]">
              Digital Marketing Insights
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover the latest strategies, trends, and insights to elevate your digital presence and drive measurable results.
            </p>
            
            {/* Search bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d13239]/20 focus:border-[#d13239]"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiSearch size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 text-center">
              <span className="border-b-2 border-[#d13239] pb-1">Featured Articles</span>
            </h2>
            <p className="text-gray-600 text-center">
              Handpicked content by our experts
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-[#d13239]/80 flex items-center justify-center z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <span className="text-white font-medium flex items-center">
                        Read Article <FiArrowRight className="ml-2" />
                      </span>
                    </div>
                    <div className="h-full w-full relative">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#d13239] rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <Image 
                        src={post.image || '/images/blog/default.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1.5" size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1.5" size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#d13239] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
      
      {/* Category filters */}
      <section className="container mx-auto px-4 py-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap justify-center mb-8 gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#d13239] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#d13239]/30 hover:bg-[#fff5f5]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>
      
      {/* All Blog Posts Grid */}
      <section className="container mx-auto px-4 py-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
            <span className="border-b-2 border-[#d13239] pb-1">All Articles</span>
          </h2>
        </motion.div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 mb-4">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-[#ffcaca]"
              >
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#d13239] rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <Image 
                      src={post.image || '/images/blog/default.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="flex items-center mr-3">
                        <FiCalendar className="mr-1" size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#d13239] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.description}</p>
                    <div className="text-[#d13239] text-sm font-medium flex items-center">
                      Read more
                      <FiArrowRight className="ml-1.5 group-hover:ml-2.5 transition-all duration-300" size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>
      
      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d13239] to-[#a61b22] opacity-95"></div>
          <div className="relative z-10 px-6 py-12 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Informed</h2>
              <p className="text-white/80 mb-8 text-lg">
                Subscribe to our newsletter to receive the latest insights and industry trends straight to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button className="whitespace-nowrap px-6 py-3 bg-white text-[#d13239] font-bold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/60 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 