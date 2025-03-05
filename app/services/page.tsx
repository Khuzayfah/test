/**
 * SingRank Services Page
 * 
 * A visually stunning presentation of our digital services with
 * interactive animations, dynamic effects, and SEO-optimized content.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ServiceModal from '../components/ServiceModal';

// Dynamically import components for performance
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50"></div>
});

// Complete service data with details for all categories and shortened descriptions
const servicesData = [
  {
    id: 1,
    name: "SEO SERVICES SINGAPORE",
    description: "We help your website rank higher on Google with proven SEO techniques designed for Singapore businesses. Our local SEO experts know what works in the Singapore market, combining on-page optimization, technical SEO, and content strategy to drive organic traffic and conversions.",
    category: "SEO",
    iconType: "seo",
    benefits: [
      "Higher Google Rankings",
      "More Website Visitors",
      "Better Quality Leads",
      "Improved Brand Visibility",
      "Higher Conversion Rates"
    ],
          features: [
      "Complete website SEO audit and competitor analysis",
      "Keyword research tailored for Singapore businesses",
      "On-page SEO optimization for all important pages",
      "Local SEO for Singapore businesses to dominate local search",
      "Content optimization for search engines",
      "Regular SEO performance reports with actionable insights"
    ],
    process: [
      { step: "Initial SEO Audit", description: "We analyze your website and identify all SEO issues and opportunities." },
      { step: "Strategy Development", description: "We create a custom SEO plan for your Singapore business based on competitive analysis." },
      { step: "On-Page Optimization", description: "We optimize your website structure, content, and metadata for target keywords." },
      { step: "Ongoing Monitoring", description: "We track your rankings and continuously improve your SEO strategy." }
    ]
  },
  {
    id: 2,
    name: "WEBSITE DEVELOPMENT",
    description: "We build fast, mobile-friendly websites that look great and rank well on search engines. Our websites are designed to convert visitors into customers with intuitive interfaces, optimized performance, and built-in SEO features to maximize your online presence.",
    category: "Web Development",
    iconType: "web",
    benefits: [
      "Mobile-Friendly Design",
      "Fast Loading Speed",
      "Built-in SEO Features",
      "Conversion-Optimized Layout",
      "User-Friendly Navigation"
    ],
          features: [
      "Responsive design that works on all devices and screen sizes",
      "SEO-optimized code structure from the ground up",
      "Fast loading pages with performance optimization",
      "User-friendly navigation and intuitive interfaces",
      "Contact forms and lead capture functionality",
      "Integration with Google Analytics and other tools"
    ],
    process: [
      { step: "Discovery & Planning", description: "We define your website goals, target audience, and technical requirements." },
      { step: "Design", description: "Our designers create visual mockups for your approval." },
      { step: "Development", description: "We build your website with clean, efficient code and SEO best practices." },
      { step: "Testing & Launch", description: "We test everything thoroughly before launching your new website." }
    ]
  },
  {
    id: 3,
    name: "CONTENT CREATION",
    description: "Our professional writers create SEO-friendly blogs, articles and website content that engage your audience and help you rank for important keywords. Every piece is strategically crafted to provide value while optimizing for search visibility.",
    category: "Content",
    iconType: "content",
    benefits: [
      "Engaging Blog Posts",
      "SEO-Optimized Content",
      "Regular Publishing Schedule",
      "Industry-Specific Expertise",
      "Higher Search Engine Rankings"
    ],
          features: [
      "Keyword-focused article writing that ranks in search",
      "Comprehensive blog content strategy",
      "Website copy that converts visitors to customers",
      "Industry-specific content expertise across various sectors",
      "Meta descriptions and title tags optimization",
      "Content performance tracking and analytics"
    ],
    process: [
      { step: "Topic Research", description: "We identify high-value topics relevant to your business and audience." },
      { step: "Content Planning", description: "We develop a content calendar based on SEO goals and audience needs." },
      { step: "Writing & Optimization", description: "Our writers create engaging, SEO-friendly content with proper structure." },
      { step: "Publishing & Promotion", description: "We help publish and promote your content across channels." }
    ]
  },
  {
    id: 4,
    name: "SOFTWARE DEVELOPMENT",
    description: "We build custom software applications with both frontend and backend development to meet your specific business requirements. Our tailored solutions streamline operations, enhance user experience, and provide competitive advantages through innovative functionality.",
    category: "Software",
    iconType: "software",
    benefits: [
      "Tailored Solutions For Your Business",
      "Streamlined Business Processes",
      "Improved Customer Experience",
      "Data-Driven Decision Making",
      "Competitive Advantage"
    ],
          features: [
      "Custom web application development",
      "Mobile app development for iOS and Android",
      "Backend API development and integration",
      "Database design and optimization",
      "Cloud-based software solutions",
      "User authentication and security implementation"
    ],
    process: [
      { step: "Requirements Analysis", description: "We gather and document your specific software requirements." },
      { step: "Solution Architecture", description: "We design the technical architecture and select appropriate technologies." },
      { step: "Development", description: "Our engineers build both frontend and backend components." },
      { step: "Deployment & Support", description: "We deploy your application and provide ongoing maintenance." }
    ]
  },
  {
    id: 5,
    name: "SOCIAL MEDIA MANAGEMENT",
    description: "We handle your social media presence across all major platforms, creating engaging content and building your audience in Singapore. Our strategies include consistent posting, audience engagement, and performance tracking to grow your brand's online community.",
    category: "Social Media",
    iconType: "social",
    benefits: [
      "Consistent Brand Presence",
      "Growing Follower Base",
      "Higher Engagement Rates",
      "Increased Website Traffic",
      "Better Customer Relationships"
    ],
          features: [
      "Social media strategy development",
      "Content calendar creation and management",
      "Original graphic design for social posts",
      "Regular posting on all relevant platforms",
      "Community management and engagement",
      "Performance analytics and reporting"
    ],
    process: [
      { step: "Social Audit", description: "We analyze your current social media presence and identify opportunities." },
      { step: "Strategy Development", description: "We create a social media strategy aligned with your business goals." },
      { step: "Content Creation", description: "We create engaging posts, graphics, and videos for your audience." },
      { step: "Publishing & Management", description: "We post content and engage with your audience regularly." }
    ]
  },
  {
    id: 6,
    name: "AI INTEGRATION",
    description: "We help integrate AI tools and chatbots into your website and business systems to improve customer service and automate tasks. Our solutions provide 24/7 support, automate repetitive processes, and deliver data-driven insights to enhance decision making.",
    category: "AI",
    iconType: "ai",
    benefits: [
      "24/7 Customer Support",
      "Automated Business Processes",
      "Improved User Experience",
      "Data-Driven Insights",
      "Reduced Operational Costs"
    ],
          features: [
      "AI chatbot development and implementation",
      "Natural language processing integration",
      "Customer service automation",
      "Predictive analytics implementation",
      "Machine learning models for business insights",
      "Process automation with AI"
    ],
    process: [
      { step: "Needs Assessment", description: "We identify where AI can add the most value to your business." },
      { step: "Solution Design", description: "We design an AI solution tailored to your specific requirements." },
      { step: "AI Development", description: "We build or integrate the appropriate AI technologies." },
      { step: "Deployment & Training", description: "We implement the AI solution and train your team on its use." }
    ]
  },
  {
    id: 7,
    name: "CMS DEVELOPMENT",
    description: "We build easy-to-use content management systems that let you update your website without technical knowledge. Our custom CMS solutions empower your team with intuitive interfaces, workflows tailored to your needs, and comprehensive training.",
    category: "CMS",
    iconType: "cms",
    benefits: [
      "Easy Content Updates",
      "User-Friendly Interface",
      "Customized Workflows",
      "Scalable Architecture",
      "Secure Content Management"
    ],
          features: [
      "Custom dashboard development",
      "Role-based access control",
      "Content scheduling and publishing",
      "Media library management",
      "SEO tools integration",
      "Multi-language content support"
    ],
    process: [
      { step: "Requirements Gathering", description: "We determine your specific content management needs." },
      { step: "Interface Design", description: "We create intuitive admin interfaces for content editors." },
      { step: "Development", description: "We build the custom CMS with all required functionality." },
      { step: "Training & Support", description: "We train your team and provide ongoing support." }
    ]
  },
  {
    id: 8,
    name: "E-COMMERCE SOLUTIONS",
    description: "We create online stores that drive sales and provide a smooth shopping experience for your Singapore customers. Our e-commerce websites include secure payment processing, inventory management, and mobile-friendly design to maximize your online sales.",
    category: "E-commerce",
    iconType: "ecommerce",
    benefits: [
      "Professional Online Store",
      "Mobile Shopping Experience",
      "Secure Payment Processing",
      "Inventory Management",
      "Increased Online Sales"
    ],
          features: [
      "Custom e-commerce website development",
      "Product catalog and category management",
      "Shopping cart and checkout optimization",
      "Multiple payment gateway integration",
      "Order management system",
      "Inventory tracking and management"
    ],
    process: [
      { step: "Store Planning", description: "We plan your online store structure and features based on your products and audience." },
      { step: "Development", description: "We build your store with all necessary e-commerce functionality." },
      { step: "Payment Integration", description: "We integrate secure payment options suitable for your target market." },
      { step: "Launch & Support", description: "We launch your store and provide ongoing maintenance." }
    ]
  }
];

// Service interface
interface ServiceType {
  id: number;
  name: string;
  description: string;
  category: string;
  iconType: string;
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
}

// Service categories for filtering
const categories = ['ALL', 'SEO', 'WEB DEVELOPMENT', 'CONTENT', 'SOFTWARE', 'SOCIAL MEDIA', 'AI', 'CMS', 'E-COMMERCE'];

// Icon animation variants
const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  }),
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 0],
    transition: { duration: 0.8 }
  }
};

// Function to render the appropriate icon path based on service type
const renderIconPath = (iconType: string) => {
  switch(iconType) {
    case "seo":
      return <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>;
    case "web":
      return <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>;
    case "content":
      return <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>;
    case "software":
      return <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>;
    case "social":
      return <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>;
    case "ai":
      return <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>;
    case "cms":
      return <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>;
    case "ecommerce":
      return <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>;
    default:
      return <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>;
  }
};

export default function Services() {
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState('ALL');
  // State for mobile filter dropdown
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  // State to detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  // State to track client-side rendering
  const [isClient, setIsClient] = useState(false);
  // State to track which cards are visible for animation
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  
  // Safely set client-side state after hydration
  useEffect(() => {
    setIsClient(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Setup intersection observer for scroll animations
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('data-id');
        if (id) {
          setVisibleCards(prev => ({
            ...prev,
            [id]: entry.isIntersecting
          }));
        }
      });
    }, options);

    // Wait for DOM to be ready before observing
    setTimeout(() => {
      document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
      });
    }, 100);
    
    // Check initially
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      observer.disconnect();
    };
  }, []);
  
  // Filtered services based on category selection
  const filteredServices = activeCategory === 'ALL' 
    ? servicesData 
    : servicesData.filter(service => service.category.toUpperCase() === activeCategory);
  
  // Function to open modal with selected service
  const openServiceDetails = (service: ServiceType) => {
    console.log("Opening service details:", service);
    setSelectedService(service);
    setIsModalOpen(true);
  };
  
  // Function to close modal
  const closeServiceModal = () => {
    console.log("Closing service modal");
    setIsModalOpen(false);
    // Don't immediately clear the service to allow for exit animations
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  // Function to animate service cards
  const animate = (i: number) => {
    if (!isClient || !visibleCards[i + 1]) return {};
    return { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        delay: i * 0.1, 
        ease: [0.43, 0.13, 0.23, 0.96] 
      } 
    };
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>
      
      <div className="relative z-10 pt-10 md:pt-16 pb-10 md:pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Page header */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">Our Services</h1>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl">
              Professional digital services to help your business succeed online in Singapore
            </p>
          </motion.div>
          
          {/* Mobile filter */}
          <div className="md:hidden mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-800">Filter Services</h3>
              <button 
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="flex items-center text-[#d13239] text-sm font-medium"
              >
                {showMobileFilter ? 'Close' : 'Show Categories'} 
                <svg 
                  className={`w-5 h-5 ml-1 transition-transform ${showMobileFilter ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Current active category */}
            <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[#d13239] text-white p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">{activeCategory}</span>
              </div>
              {activeCategory !== 'ALL' && (
                <button 
                  onClick={() => setActiveCategory('ALL')}
                  className="text-sm text-[#d13239]"
                >
                  Reset
                </button>
              )}
            </div>
            
            {/* Mobile filter dropdown */}
            <AnimatePresence>
              {showMobileFilter && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-lg mt-2 overflow-hidden border border-gray-200"
                >
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map(category => (
                        <motion.button 
                          key={category}
                          onClick={() => {
                            setActiveCategory(category);
                            setShowMobileFilter(false);
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-3 py-3 rounded-lg text-sm font-medium flex justify-between items-center ${
                            activeCategory === category 
                              ? 'bg-[#d13239] text-white' 
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span>{category}</span>
                          {activeCategory === category && (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Desktop filter buttons */}
          <div className="hidden md:flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 rounded-full text-lg ${
                  activeCategory === category 
                    ? 'bg-[#d13239] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                data-id={service.id}
                className="service-card bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-r from-[#d13239] to-[#e64c4c] p-4 flex items-center">
                  <div className="bg-white rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-[#d13239]" viewBox="0 0 24 24">
                      {renderIconPath(service.iconType)}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <h4 className="font-medium text-[#d13239]">Key Benefits:</h4>
                    <ul className="pl-5 list-disc space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="px-4 py-2 bg-gradient-to-r from-[#d13239] to-[#e64c4c] text-white rounded-md hover:from-[#e64c4c] hover:to-[#d13239] transition-all duration-300 inline-flex items-center justify-center w-full"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* No services found message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block bg-red-50 p-5 rounded-full mb-4">
                <svg className="w-12 h-12 text-[#d13239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Services Found</h3>
              <p className="text-gray-600 mb-4">Try selecting a different category or check back later.</p>
              <button 
                onClick={() => setActiveCategory('ALL')}
                className="bg-[#d13239] text-white hover:bg-[#b52a30] font-medium px-4 py-2 rounded-lg inline-flex items-center transition-all"
              >
                Show All Services
              </button>
            </motion.div>
          )}
          
          {/* Mobile CTA bottom */}
          <div className="md:hidden mt-8">
            <motion.div 
              className="bg-gradient-to-r from-[#d13239] to-[#e64c4c] rounded-xl p-5 text-white text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">Need a Custom Solution?</h3>
              <p className="mb-4 text-white/90 text-sm">We can create a tailored service package just for your business.</p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#d13239] font-bold px-5 py-2 rounded-lg">
                Get in Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Modal - only render on client side */}
      {isClient && (
        <ServiceModal 
          isOpen={isModalOpen}
          onClose={closeServiceModal}
          service={selectedService}
          isMobile={isMobile}
        />
      )}
    </div>
  );
} 