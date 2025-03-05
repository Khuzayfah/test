/**
 * Professional Projects Page
 * 
 * This page showcases our portfolio of successful projects with a clean,
 * professional design that emphasizes our expertise and trusted results.
 * 
 * Features:
 * - Elegant luxury red and white theme matching the home page
 * - Professional card design for each project
 * - Consistent typography and spacing
 * - Subtle animations for improved engagement
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import components for performance
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50"></div>
});

// Define our professional projects
const projects = [
  {
    id: 1,
    name: 'E-Commerce SEO Campaign',
    description: 'Increased organic traffic by 185% and conversions by 75% for a regional e-commerce platform.',
    category: 'SEO',
    image: '/images/projects/ecommerce-seo.jpg'
  },
  {
    id: 2,
    name: 'B2B Lead Generation Strategy',
    description: 'Developed and implemented a comprehensive B2B lead generation strategy that increased qualified leads by 120%.',
    category: 'Lead Generation',
    image: '/images/projects/b2b-leads.jpg'
  },
  {
    id: 3,
    name: 'Social Media Brand Building',
    description: 'Created a cohesive social media presence that increased engagement by a15% and grew the follower base by 30K in six months.',
    category: 'Social Media',
    image: '/images/projects/social-media.jpg'
  },
  {
    id: 4,
    name: 'Content Marketing Campaign',
    description: 'Designed a content strategy that established our client as an industry thought leader and increased website traffic by 85%.',
    category: 'Content',
    image: '/images/projects/content-marketing.jpg'
  },
  {
    id: 5,
    name: 'PPC Campaign Optimization',
    description: 'Optimized Google Ads campaigns that reduced cost-per-acquisition by 42% while increasing conversion volume.',
    category: 'PPC',
    image: '/images/projects/ppc-campaign.jpg'
  },
  {
    id: 6,
    name: 'Website Redesign & SEO',
    description: 'Completely redesigned a corporate website with SEO best practices, resulting in a 95% increase in organic traffic.',
    category: 'Web Design',
    image: '/images/projects/website-redesign.jpg'
  }
];

// Project categories for filtering
const categories = ['All', 'SEO', 'Social Media', 'Content', 'PPC', 'Web Design', 'Lead Generation'];

export default function Projects() {
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filtered projects based on category selection
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
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
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold mb-4">Our Client Success Stories</h1>
              <div className="w-24 h-1 bg-luxury-red-600 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                Explore our portfolio of successful digital marketing campaigns and projects that have delivered measurable results for our clients.
              </p>
            </motion.div>
          </div>

          {/* Filter categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-luxury-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-luxury-red-100 hover:text-luxury-red-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-luxury-red-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-red-500/20 to-luxury-red-700/30 flex items-center justify-center text-white text-4xl">
                    {project.category === 'SEO' && '🔍'}
                    {project.category === 'Social Media' && '📱'}
                    {project.category === 'Content' && '✍️'}
                    {project.category === 'PPC' && '📊'}
                    {project.category === 'Web Design' && '💻'}
                    {project.category === 'Lead Generation' && '🎯'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-luxury-red-600 mb-4 text-xs font-medium">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-luxury-red-700 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="text-luxury-red-600 hover:text-luxury-red-800 inline-flex items-center font-medium"
                  >
                    View case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center bg-luxury-red-50 p-12 rounded-xl shadow-sm border border-luxury-red-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-luxury-red-900">Ready to be our next success story?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              We pride ourselves on delivering measurable results for businesses like yours.
              Let's discuss how we can help you achieve your goals.
            </p>
            <Link 
              href="/contact" 
              className="bg-luxury-red-600 hover:bg-luxury-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 