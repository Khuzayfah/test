/**
 * Professional Services Page
 * 
 * This page presents our range of premium digital marketing services with a clean,
 * professional design that emphasizes trust, expertise, and results.
 * 
 * Features:
 * - Clean white background with subtle blue accents for trust
 * - Professional card design for each service
 * - Consistent typography and spacing
 * - Subtle animations for improved engagement
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaChartLine, FaCodeBranch, FaMapMarkerAlt, FaRobot, FaMobileAlt, FaUserFriends } from 'react-icons/fa';
import { MdOutlineContentPaste, MdSpeed, MdKeyboard } from 'react-icons/md';

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const serviceCategories = [
    {
      title: "Search Engine Optimization (SEO) & Answer Engine Optimization (AEO)",
      description: "Boost your online visibility with our comprehensive SEO services designed to improve rankings and drive targeted traffic.",
      icon: <FaSearchPlus className="text-4xl text-luxury-red-600" />,
      services: [
        {
          title: "Technical SEO Audits",
          description: "Comprehensive website analysis to identify and resolve technical issues affecting search visibility.",
          features: [
            "Site architecture evaluation",
            "Core Web Vitals assessment",
            "Indexation issue resolution",
            "Mobile optimization checks",
            "Site speed improvements"
          ]
        },
        {
          title: "Content Strategy",
          description: "Data-driven content plans that align with search intent and business objectives.",
          features: [
            "Keyword research and analysis",
            "Topic cluster organization",
            "Content calendar planning",
            "Competitive content analysis",
            "Content gap identification"
          ]
        },
        {
          title: "AI Answer Optimization",
          description: "Optimize content for AI-powered platforms to ensure your brand is recognized as an authoritative source.",
          features: [
            "Featured snippet optimization",
            "Voice search optimization",
            "FAQ schema implementation",
            "Natural language processing alignment",
            "AI readability improvements"
          ]
        }
      ]
    },
    {
      title: "Technical SEO Audit",
      description: "Detailed analysis to identify and address technical issues that impact your website's performance in search engines.",
      icon: <FaCodeBranch className="text-4xl text-luxury-red-600" />,
      services: [
        {
          title: "Site Architecture",
          description: "Evaluating URL structures, internal linking, and crawl efficiency to enhance search engine indexing.",
          features: [
            "URL structure analysis",
            "Internal linking optimization",
            "Site hierarchy assessment",
            "Crawl budget optimization",
            "Sitemap evaluation"
          ]
        },
        {
          title: "Core Web Vitals",
          description: "Assessing and improving metrics related to loading speed, interactivity, and visual stability.",
          features: [
            "Largest Contentful Paint (LCP) optimization",
            "First Input Delay (FID) improvement",
            "Cumulative Layout Shift (CLS) reduction",
            "Page load speed optimization",
            "Mobile usability enhancement"
          ]
        },
        {
          title: "Indexation Issues",
          description: "Identifying and addressing crawl errors, duplicate content, and other indexing challenges.",
          features: [
            "Crawl error identification and resolution",
            "Duplicate content detection",
            "Canonical tag implementation",
            "robots.txt optimization",
            "404 error management"
          ]
        }
      ]
    },
    {
      title: "Content Strategy",
      description: "Strategic content planning and creation to attract and engage your target audience while improving search visibility.",
      icon: <MdOutlineContentPaste className="text-4xl text-luxury-red-600" />,
      services: [
        {
          title: "Keyword Research",
          description: "Identifying high-value keywords to target for improved search rankings.",
          features: [
            "Competitive keyword analysis",
            "Long-tail keyword identification",
            "Search intent mapping",
            "Keyword difficulty assessment",
            "Traffic potential evaluation"
          ]
        },
        {
          title: "Topic Clusters",
          description: "Organizing content into thematic clusters to enhance topical authority.",
          features: [
            "Pillar content development",
            "Supporting content creation",
            "Internal linking strategy",
            "Topical relevance improvement",
            "Content hierarchy planning"
          ]
        },
        {
          title: "Content Calendar",
          description: "Planning and scheduling content publication to maintain consistency and relevance.",
          features: [
            "Strategic publication planning",
            "Seasonal content opportunities",
            "Content freshness management",
            "Resource allocation planning",
            "Performance tracking setup"
          ]
        }
      ]
    },
    {
      title: "Local SEO",
      description: "Enhance your local visibility to connect with customers in your area and dominate local search results.",
      icon: <FaMapMarkerAlt className="text-4xl text-luxury-red-600" />,
      services: [
        {
          title: "Google Business Profile Optimization",
          description: "Enhancing your business's presence on Google Maps and local search results.",
          features: [
            "Business profile completion",
            "Category and attribute optimization",
            "Photo and video enhancement",
            "Q&A and business description optimization",
            "Local post publishing strategy"
          ]
        },
        {
          title: "Local Citations",
          description: "Ensuring consistent business information across various online directories.",
          features: [
            "NAP consistency audit",
            "Directory submission management",
            "Citation cleanup service",
            "Industry-specific directory placement",
            "Data aggregator submission"
          ]
        },
        {
          title: "Review Management",
          description: "Monitoring and responding to customer reviews to build trust and credibility.",
          features: [
            "Review acquisition strategy",
            "Response templates and guidelines",
            "Negative review management",
            "Review monitoring system",
            "Reputation enhancement tactics"
          ]
        }
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-red-50 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="luxury-badge mb-4">Our Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-luxury-red-700">
              Premium SEO <span className="text-luxury-gold-main">Services</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Comprehensive digital marketing solutions tailored to elevate your brand's online presence and drive measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-6 py-3">
                Get Free Consultation
              </Link>
              <a href="#services" className="btn-secondary px-6 py-3">
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-luxury-red-700">
              Our <span className="text-luxury-gold-main">Expertise</span>
            </h2>
            <p className="text-lg text-gray-700">
              At SingRank, we offer a comprehensive suite of digital marketing services tailored to meet the unique needs of businesses in Singapore.
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg luxury-border mb-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className="p-4 bg-luxury-red-50 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-luxury-red-700">{category.title}</h3>
                    <p className="text-gray-700">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div 
                    key={serviceIndex}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold mb-4 text-luxury-red-700">{service.title}</h4>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-luxury-red-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-luxury-red-700">
              Our <span className="text-luxury-gold-main">Process</span>
            </h2>
            <p className="text-lg text-gray-700">
              We follow a systematic approach to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We begin by understanding your business, goals, and current digital presence.",
                icon: <FaSearchPlus className="text-3xl text-white" />
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "We create a customized strategy tailored to your specific needs and objectives.",
                icon: <FaChartLine className="text-3xl text-white" />
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our team executes the strategy with precision and attention to detail.",
                icon: <MdSpeed className="text-3xl text-white" />
              },
              {
                step: "04",
                title: "Monitoring & Optimization",
                description: "We continuously monitor performance and make adjustments for optimal results.",
                icon: <FaChartLine className="text-3xl text-white" />
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-luxury-red-600 text-white p-8 rounded-lg h-full">
                  <div className="absolute -top-6 -left-2 bg-luxury-gold-main text-luxury-red-800 text-xl font-bold p-2 w-12 h-12 flex items-center justify-center rounded-full">
                    {process.step}
                  </div>
                  <div className="mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                  <p className="text-luxury-red-100">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-luxury-gold-main transform rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to elevate your digital presence?</h2>
              <p className="text-lg text-luxury-red-100">Get a free consultation and discover how SingRank can transform your SEO strategy.</p>
            </div>
            <Link href="/contact" className="btn-primary bg-white text-luxury-red-700 hover:bg-luxury-gold-light hover:text-luxury-red-800 px-8 py-4 text-lg">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 