'use client';

/**
 * SingRank Premium Blog Page
 * 
 * A sophisticated, premium blog interface with elegant animations,
 * dynamic effects, and visually stunning presentation of content.
 * Designed to match the luxury red & white theme of the home page
 * while showcasing our thought leadership and expertise.
 */

import React, { useState, useEffect, useRef } from 'react';
import { getAllPosts } from '../../lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight, FiSearch, FiFilter } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import components for performance
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50"></div>
});

// Interface for blog post
interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  readTime?: string;
  thumbnail?: string;
  categories?: string[];
  tags?: string[];
  author?: string | { name: string; title?: string; image?: string };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeywords?: string;
    canonical?: string;
    noIndex?: boolean;
  };
}

// Animated section component (reused from home page)
const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: any; 
  className?: string; 
  delay?: number 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: delay,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated card component
const AnimatedCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col transform hover:-translate-y-2"
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-luxury-red-600 to-luxury-red-800 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">SingRank</span>
            </div>
          )}
          
          {/* Category badge */}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-luxury-red-600 rounded-full text-sm font-medium border border-luxury-red-200 shadow-sm backdrop-blur-sm">
                {post.categories[0]}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          {/* Meta info */}
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <div className="flex items-center mr-4">
              <FiCalendar size={14} className="mr-1.5" />
              <span>{formatDate(post.date)}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <FiClock size={14} className="mr-1.5" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-luxury-red-600 transition-colors">
            {post.title}
          </h2>
          
          {/* Excerpt */}
          <p className="text-gray-600 mb-4 flex-grow">
            {post.excerpt}
          </p>
          
          {/* Read more */}
          <div className="mt-auto pt-4 flex items-center text-luxury-red-600 font-medium group-hover:text-luxury-red-800">
            <span>Read more</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get all categories from posts
  const allCategories = posts.reduce((categories, post) => {
    if (post.categories) {
      post.categories.forEach(category => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    }
    return categories;
  }, [] as string[]);
  
  // Fetch posts on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts as BlogPost[]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  // Filter posts based on search term and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || 
      (post.categories && post.categories.includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 pt-20 pb-32">
        <div className="absolute inset-0 overflow-hidden h-full">
          <ParticlesContainer />
        </div>
        
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-luxury-red-600 to-luxury-red-800 bg-clip-text text-transparent mb-4">
              Insights & Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our latest thoughts on digital marketing, SEO strategies, and online growth
            </p>
            
            {/* Search and filter */}
            <div className="mt-8 mb-12 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-red-500 focus:border-transparent"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-red-500 focus:border-transparent bg-white md:w-48"
                >
                  <option value="">All Categories</option>
                  {allCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C58.11,55.49,174.63,77.77,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimatedSection delay={0.2}>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
                    <div className="aspect-[16/9] bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <AnimatedCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">No articles found</h2>
                <p className="text-gray-600 mb-8">
                  {searchTerm || selectedCategory ? 
                    "Try adjusting your search or filter criteria." : 
                    "Blog articles are being created and will be available soon."}
                </p>
                {(searchTerm || selectedCategory) && (
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                    }}
                    className="inline-flex items-center px-4 py-2 bg-luxury-red-600 text-white rounded-lg hover:bg-luxury-red-700 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <AnimatedSection className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" delay={0.4}>
          <div className="bg-gradient-to-r from-luxury-red-600 to-luxury-red-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-white opacity-90 mb-8">
                Subscribe to our newsletter to receive the latest SEO tips, digital marketing strategies, and exclusive insights.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-luxury-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="text-white text-sm opacity-80 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
} 