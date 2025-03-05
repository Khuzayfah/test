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
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FiClock, FiCalendar, FiArrowLeft, FiShare2, FiHeart, FiMessageSquare, FiBookmark, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';

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
      
      <h2>4. Leverage AI and Machine Learning</h2>
      
      <p>AI tools can help identify trends, optimize content, and improve user experience. Use AI to analyze search patterns and create tailored content that addresses specific user needs.</p>
      
      <h2>5. Enhance Local SEO Strategies</h2>
      
      <p>Local search continues to evolve, with Google emphasizing proximity and relevance. Optimize your Google Business Profile, collect genuine reviews, and create location-specific content.</p>
      
      <h2>6. Focus on E-E-A-T</h2>
      
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness have become increasingly important for ranking well. Showcase your industry experience and ensure your content is written by qualified experts.</p>
      
      <h2>7. Adapt to SERP Changes</h2>
      
      <p>Search engine results pages continue to evolve, with featured snippets, knowledge panels, and other rich results becoming more prominent. Optimize your content to capture these high-visibility positions.</p>
      
      <h2>8. Implement Structured Data</h2>
      
      <p>Structured data helps search engines understand the context of your content. It increases the chances of your site appearing in rich results and can improve click-through rates.</p>
      
      <h2>9. Prioritize Mobile Optimization</h2>
      
      <p>With mobile-first indexing fully implemented, mobile optimization is no longer optional. Ensure your site loads quickly, displays properly, and provides an excellent user experience on mobile devices.</p>
      
      <h2>10. Analyze and Adapt</h2>
      
      <p>The most successful SEO strategies involve continuous monitoring and adaptation. Use analytics to identify what's working, what isn't, and adjust your approach accordingly.</p>
    `,
    tags: ['SEO', 'Digital Marketing', 'Content Strategy', 'Search Engine', 'E-E-A-T'],
    relatedPosts: [3, 5, 6]
  },
  {
    id: "2",
    title: 'How to Build a Social Media Strategy That Converts',
    description: 'Learn how to create a social media strategy focused on driving conversions rather than just increasing vanity metrics.',
    category: 'Social Media',
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Sarah Williams',
      title: 'Social Media Strategist',
      image: '/images/authors/sarah.jpg'
    },
    content: `
      <p>Many businesses struggle to turn their social media following into tangible results. This guide will help you create a conversion-focused social media strategy.</p>
      
      <h2>Understanding Your Audience</h2>
      
      <p>The first step in creating a conversion-focused strategy is understanding who your audience is, what they want, and how they behave on different platforms.</p>
      
      <h2>Setting Meaningful Goals</h2>
      
      <p>Move beyond vanity metrics like followers and likes. Set specific, measurable goals that align with your business objectives, such as lead generation, website traffic, or direct sales.</p>
    `,
    tags: ['Social Media', 'Digital Marketing', 'Conversion Optimization', 'Business Strategy'],
    relatedPosts: [4, 6, 1]
  },
  {
    id: "3",
    title: 'Content Marketing Trends to Watch in 2024',
    description: 'Discover the latest content marketing trends that are shaping the digital landscape and how you can leverage them.',
    category: 'Content Marketing',
    date: 'March 5, 2024',
    readTime: '7 min read',
    author: {
      name: 'Michael Brown',
      title: 'Content Director',
      image: '/images/authors/michael.jpg'
    },
    content: `
      <p>Content marketing continues to evolve rapidly. To stay competitive, marketers need to adapt to emerging trends and technologies.</p>
      
      <h2>AI-Generated Content with Human Oversight</h2>
      
      <p>AI tools can now generate high-quality content quickly, but human oversight remains crucial for adding unique insights, ensuring accuracy, and maintaining brand voice.</p>
      
      <h2>Interactive and Immersive Experiences</h2>
      
      <p>Interactive content like quizzes, assessments, and calculators engage users while providing valuable data. These formats significantly outperform static content in engagement metrics.</p>
    `,
    tags: ['Content Marketing', 'Digital Trends', 'AI Content', 'Interactive Content'],
    relatedPosts: [1, 5, 4]
  },
  // Additional blog posts would be added here
];

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  
  // Find the post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If no post is found, redirect to the blog index
  if (!post) {
    // We would normally handle this server-side, but for this client-side demo:
    router.push('/blog');
    return null;
  }
  
  // Find related posts
  const relatedPosts = post.relatedPosts ? 
    post.relatedPosts.map(id => blogPosts.find(post => post.id === id.toString())).filter(Boolean) : 
    [];
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16 bg-white">
      {/* Back to blog link */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog" className="inline-flex items-center text-[#d13239] hover:text-[#a61b22] transition-colors">
          <FiArrowLeft className="mr-2" />
          <span>Back to all articles</span>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-5 flex items-center">
              <span className="inline-block px-3 py-1 bg-[#fff5f5] text-[#d13239] rounded-full text-sm font-medium border border-[#ffcaca]">
                {post.category}
              </span>
              
              <div className="ml-auto flex space-x-3">
                <button className="inline-flex items-center text-gray-500 hover:text-[#d13239] transition-colors">
                  <FiShare2 size={16} />
                </button>
                <button className="inline-flex items-center text-gray-500 hover:text-[#d13239] transition-colors">
                  <FiBookmark size={16} />
                </button>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-start mb-8 py-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                {/* Placeholder for author image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                  {post.author.name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1">
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.title}</p>
              </div>
              
              <div className="text-sm text-gray-500 flex flex-col items-end">
                <div className="flex items-center mb-1">
                  <FiCalendar size={14} className="mr-1.5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FiClock size={14} className="mr-1.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar - Social sharing */}
              <div className="hidden md:block col-span-1">
                <div className="sticky top-32 space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col items-center space-y-5"
                  >
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d13239] hover:text-white transition-all duration-300">
                      <FiHeart size={18} />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                      <FiTwitter size={18} />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#4267B2] hover:text-white transition-all duration-300">
                      <FiFacebook size={18} />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                      <FiLinkedin size={18} />
                    </button>
                    <div className="h-10 border-l border-gray-200"></div>
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d13239] hover:text-white transition-all duration-300">
                      <FiMessageSquare size={18} />
                    </button>
                  </motion.div>
                </div>
              </div>
              
              {/* Main content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="col-span-12 md:col-span-11"
              >
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-[#d13239] hover:prose-a:text-[#a61b22]" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Tags */}
                {post.tags && (
                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Mobile social sharing */}
                <div className="md:hidden mt-10 pt-6 border-t border-gray-100">
                  <div className="flex justify-around">
                    <button className="flex flex-col items-center text-gray-600">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <FiHeart size={16} />
                      </div>
                      <span className="text-xs">Like</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-600">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <FiTwitter size={16} />
                      </div>
                      <span className="text-xs">Tweet</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-600">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <FiFacebook size={16} />
                      </div>
                      <span className="text-xs">Share</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-600">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <FiLinkedin size={16} />
                      </div>
                      <span className="text-xs">Post</span>
                    </button>
                  </div>
                </div>
                
                {/* Author Bio - Bottom */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200 mr-6 mb-4 md:mb-0">
                        {/* Placeholder for author image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xl">
                          {post.author.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">About {post.author.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author.title}</p>
                        <p className="text-gray-700">
                          A digital marketing expert with over 10 years of experience helping businesses achieve significant growth through strategic SEO and content marketing initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                <span className="border-b-2 border-[#d13239] pb-1">You might also like</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  relatedPost && (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
                    >
                      <Link href={`/blog/${relatedPost.id}`} className="block h-full">
                        <div className="relative h-40 overflow-hidden">
                          <div className="h-full w-full bg-gray-200 bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0]">
                            <div className="absolute top-3 left-3">
                              <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#d13239] rounded-full text-xs font-medium">
                                {relatedPost.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center text-xs text-gray-500 mb-3">
                            <span className="flex items-center mr-3">
                              <FiCalendar className="mr-1" size={12} />
                              {relatedPost.date}
                            </span>
                            <span className="flex items-center">
                              <FiClock className="mr-1" size={12} />
                              {relatedPost.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#d13239] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  )
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Newsletter CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d13239] to-[#a61b22] opacity-95"></div>
            <div className="relative z-10 px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Want to stay updated?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join our newsletter to receive the latest insights and industry trends straight to your inbox.
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
          </motion.div>
        </div>
      </section>
    </main>
  );
} 