'use client';

/**
 * SingRank - Premier SEO Agency in Singapore
 * 
 * Professional website for SingRank, Singapore's leading digital marketing agency.
 * Features elegant animations, interactive charts, diagrams, and a sophisticated
 * red and white color scheme inspired by Singapore's flag.
 * 
 * Sections include:
 * - Hero: Dynamic introduction to SingRank's services
 * - Statistics: SingRank's impressive performance metrics
 * - Services: Comprehensive digital marketing services
 * - Performance: Data visualizations of client results
 * - Case Studies: Successful client projects
 * - Contact: Professional contact section
 */

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { FaSearchPlus, FaChartLine, FaMapMarkerAlt, FaServer, FaRegFileAlt, FaGoogle } from 'react-icons/fa';
import { BsSpeedometer, BsGlobe, BsStars } from 'react-icons/bs';
import { MdOutlineContentPaste, MdOutlineAnalytics, MdKeyboardVoice, MdLocationOn } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { RiRobot2Line } from 'react-icons/ri';
import { SiGoogleanalytics } from 'react-icons/si';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dynamic from 'next/dynamic';

// Dynamically import components for performance
const ParticlesContainer = dynamic(() => import('./components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50"></div>
});

// Dynamically import charts to improve initial load time
const Charts = dynamic(() => import('./components/Charts'), {
  ssr: false,
  loading: () => <div className="w-full h-80 bg-gray-100 animate-pulse rounded-lg"></div>
});

// Animated component that only renders when in view
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll to next section
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
    setHasScrolled(true);
  };

  // Add scroll listener to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO Performance data for chart
  const seoPerformanceData = [
    { month: 'Jan', organicTraffic: 100, conversions: 10 },
    { month: 'Feb', organicTraffic: 130, conversions: 15 },
    { month: 'Mar', organicTraffic: 170, conversions: 22 },
    { month: 'Apr', organicTraffic: 220, conversions: 28 },
    { month: 'May', organicTraffic: 250, conversions: 32 },
    { month: 'Jun', organicTraffic: 290, conversions: 38 },
  ];

  // Keyword ranking improvements data
  const keywordRankingsData = [
    { keyword: 'SEO Singapore', before: 25, after: 2 },
    { keyword: 'Digital Marketing', before: 45, after: 5 },
    { keyword: 'Content Strategy', before: 30, after: 3 },
    { keyword: 'Technical SEO', before: 50, after: 4 },
    { keyword: 'Local SEO', before: 35, after: 1 },
  ];

  // ROI distribution data
  const roiData = [
    { name: 'SEO', value: 35 },
    { name: 'Content', value: 25 },
    { name: 'Technical', value: 20 },
    { name: 'Local SEO', value: 15 },
    { name: 'AEO', value: 5 },
  ];

  // Singapore colors
  const COLORS = ['#ED2939', '#9B2C2C', '#C53030', '#E53E3E', '#FC8181'];

  // Stats section data
  const stats = [
    { number: "97%", label: "Ranking Improvement" },
    { number: "184%", label: "Average Traffic Growth" },
    { number: "8.3x", label: "Average ROI" }
  ];

  // Services section data
  const services = [
    {
      icon: <FaSearchPlus className="text-3xl text-luxury-red-600" />,
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies to boost your online visibility and drive targeted traffic to your website."
    },
    {
      icon: <MdOutlineContentPaste className="text-3xl text-luxury-red-600" />,
      title: "Content Strategy",
      description: "Data-driven content plans that align with search intent and business objectives for maximum impact."
    },
    {
      icon: <BsSpeedometer className="text-3xl text-luxury-red-600" />,
      title: "Technical SEO Audit",
      description: "Thorough website analysis to identify and resolve technical issues affecting search visibility."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-luxury-red-600" />,
      title: "Local SEO",
      description: "Enhance your business presence on Google Maps and local search results to capture nearby customers."
    },
    {
      icon: <RiRobot2Line className="text-3xl text-luxury-red-600" />,
      title: "AI Answer Optimization",
      description: "Optimize content for AI-powered platforms to ensure your brand is recognized as an authority."
    },
    {
      icon: <FaChartLine className="text-3xl text-luxury-red-600" />,
      title: "Performance Analysis",
      description: "Detailed analytics and reporting to track progress and demonstrate ROI from your digital marketing investments."
    }
  ];

  // Technical SEO services
  const technicalSeoServices = [
    {
      icon: <FaServer className="text-2xl text-luxury-red-600" />,
      title: "Site Architecture",
      description: "Evaluating URL structures, internal linking, and crawl efficiency."
    },
    {
      icon: <BsSpeedometer className="text-2xl text-luxury-red-600" />,
      title: "Core Web Vitals",
      description: "Improving metrics related to loading speed, interactivity, and visual stability."
    },
    {
      icon: <FaRegFileAlt className="text-2xl text-luxury-red-600" />,
      title: "Indexation Issues",
      description: "Addressing crawl errors, duplicate content, and other indexing challenges."
    }
  ];

  // Content Strategy services
  const contentStrategyServices = [
    {
      icon: <MdKeyboardVoice className="text-2xl text-luxury-red-600" />,
      title: "Keyword Research",
      description: "Identifying high-value keywords to target for improved search rankings."
    },
    {
      icon: <BsStars className="text-2xl text-luxury-red-600" />,
      title: "Topic Clusters",
      description: "Organizing content into thematic clusters to enhance topical authority."
    },
    {
      icon: <MdOutlineAnalytics className="text-2xl text-luxury-red-600" />,
      title: "Content Calendar",
      description: "Planning and scheduling content publication to maintain consistency."
    }
  ];

  // Local SEO services
  const localSeoServices = [
    {
      icon: <FaGoogle className="text-2xl text-luxury-red-600" />,
      title: "Google Business Profile",
      description: "Enhancing your business's presence on Google Maps and local search."
    },
    {
      icon: <BsGlobe className="text-2xl text-luxury-red-600" />,
      title: "Local Citations",
      description: "Ensuring consistent business information across online directories."
    },
    {
      icon: <SiGoogleanalytics className="text-2xl text-luxury-red-600" />,
      title: "Review Management",
      description: "Monitoring and responding to customer reviews to build trust."
    }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with ParticleBackground */}
      <section className="relative min-h-screen bg-white">
        <div className="absolute inset-0 z-0">
          <ParticlesContainer />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
          <motion.div 
            style={{ opacity, y, scale }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="luxury-badge mb-6 bg-luxury-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              Premier SEO Agency in Singapore
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-luxury-red-700"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Elevate Your
              </motion.span>
              <motion.span 
                className="text-luxury-red-600 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Digital Presence
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-luxury-red-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                ></motion.span>
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key="tagline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-medium"
                >
                  SingRank delivers measurable results through strategic and data-driven approaches tailored for businesses in Singapore.
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className="btn-primary px-8 py-4 text-lg bg-luxury-red-600 hover:bg-luxury-red-700 text-white rounded-md transition-all duration-300 inline-block">
                  Get Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/services" className="btn-secondary px-8 py-4 text-lg border-2 border-luxury-red-600 text-luxury-red-600 hover:bg-luxury-red-600 hover:text-white rounded-md transition-all duration-300 inline-block">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: hasScrolled ? 0 : 1, 
              y: hasScrolled ? -20 : 0 
            }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5,
            }}
            onClick={handleScrollDown}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-luxury-red-600 mb-2">Scroll Down</span>
              <IoIosArrowDown className="text-2xl text-luxury-red-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white to-luxury-red-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-luxury-red-700">
              Proven <span className="text-luxury-red-600">Results</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative bg-white p-8 rounded-lg shadow-md border border-luxury-red-100 text-center hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <motion.div 
                    className="absolute -top-16 -right-16 w-32 h-32 bg-luxury-red-50 rounded-full opacity-70"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 1.5
                    }}
                  ></motion.div>
                  <motion.h3 
                    className="text-4xl sm:text-5xl font-bold text-luxury-red-600 mb-2 relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-lg text-gray-700 font-medium relative z-10">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-luxury-red-700">
              Our <span className="text-luxury-red-600">Services</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                <motion.div 
                  className="bg-white p-8 rounded-lg border border-gray-200 h-full flex flex-col hover:border-luxury-red-200 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(237, 41, 57, 0.5)"
                  }}
                >
                  <div className="mb-4 p-4 bg-luxury-red-50 rounded-lg inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-red-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <motion.div 
                    className="mt-6"
                    whileHover={{ x: 5 }}
                  >
                    <Link href="/services" className="text-luxury-red-600 font-medium inline-flex items-center">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Performance Section with Charts */}
      <section className="py-20 bg-gradient-to-r from-luxury-red-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-luxury-red-700">
              Performance <span className="text-luxury-red-600">Analytics</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection>
            <Charts />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Technical SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4 text-luxury-red-700">
              Technical SEO <span className="text-luxury-red-600">Excellence</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Our comprehensive technical SEO services ensure your website meets the highest standards for search engines.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSeoServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-luxury-red-200 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <div className="flex items-start mb-4">
                    <div className="mr-4 p-2 bg-luxury-red-50 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-luxury-red-700 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-luxury-red-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Start your journey to improved rankings, increased traffic, and better ROI with SingRank today.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className="inline-block px-8 py-4 bg-white text-luxury-red-600 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                  Schedule a Free Consultation
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 