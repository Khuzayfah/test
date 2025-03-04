/**
 * Professional Contact Page
 * 
 * This page provides a clean, professional contact interface with form and information
 * that emphasizes trust, reliability, and professionalism.
 * 
 * Features:
 * - Clean white background with subtle blue accents for trust
 * - Professional form design with validation
 * - Contact information and trust elements
 * - Subtle animations for improved engagement
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="luxury-corner absolute top-0 left-0 w-full h-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="luxury-badge mb-4">Get In Touch</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-luxury-red-700">
              Contact <span className="text-luxury-gold-main">SingRank</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Have questions about our services or ready to elevate your digital presence? 
              Our team of SEO experts is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-lg luxury-border h-full">
                <h2 className="text-2xl font-bold mb-6 text-luxury-red-700">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-luxury-red-50 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-luxury-red-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Office Location</h3>
                      <p className="text-gray-600">One Raffles Place, #20-61<br />Singapore 048616</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-luxury-red-50 rounded-full mr-4">
                      <FaPhone className="text-luxury-red-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">+65 6123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-luxury-red-50 rounded-full mr-4">
                      <FaEnvelope className="text-luxury-red-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">hello@singrank.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-luxury-red-50 rounded-full mr-4">
                      <FaClock className="text-luxury-red-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-luxury-red-50 rounded-full hover:bg-luxury-red-100 transition-colors">
                      <FaLinkedin className="text-luxury-red-600 text-xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-luxury-red-50 rounded-full hover:bg-luxury-red-100 transition-colors">
                      <FaFacebook className="text-luxury-red-600 text-xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-luxury-red-50 rounded-full hover:bg-luxury-red-100 transition-colors">
                      <FaTwitter className="text-luxury-red-600 text-xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-luxury-red-50 rounded-full hover:bg-luxury-red-100 transition-colors">
                      <FaInstagram className="text-luxury-red-600 text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg luxury-border">
                <h2 className="text-2xl font-bold mb-6 text-luxury-red-700">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 bg-red-50' : 'border-luxury-red-100'} focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 bg-red-50' : 'border-luxury-red-100'} focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors`}
                          placeholder="Your email"
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-luxury-red-100 focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors"
                          placeholder="Your phone (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-luxury-red-100 focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors"
                          placeholder="Your company (optional)"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-luxury-red-100 focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors"
                      >
                        <option value="">Select a service (optional)</option>
                        <option value="SEO">Search Engine Optimization (SEO)</option>
                        <option value="Local SEO">Local SEO</option>
                        <option value="Technical SEO">Technical SEO Audit</option>
                        <option value="Content Strategy">Content Strategy</option>
                        <option value="AEO">Answer Engine Optimization</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300 bg-red-50' : 'border-luxury-red-100'} focus:border-luxury-red-300 focus:ring focus:ring-luxury-red-200 focus:ring-opacity-50 outline-none transition-colors`}
                        placeholder="Tell us about your project or inquiry"
                      ></textarea>
                      {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="btn-primary px-8 py-4 flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Submit Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-red-700">Visit Our <span className="text-luxury-gold-main">Office</span></h2>
            <p className="text-lg text-gray-600 mt-2">Located in the heart of Singapore's business district</p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl luxury-border">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="flex items-center justify-center p-12 bg-luxury-red-50">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-5xl text-luxury-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-luxury-red-700 mb-2">SingRank Headquarters</h3>
                  <p className="text-gray-700">One Raffles Place, #20-61, Singapore 048616</p>
                  <div className="mt-6">
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center px-6 py-3"
                    >
                      <FaMapMarkerAlt className="mr-2" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-red-700">Frequently Asked <span className="text-luxury-gold-main">Questions</span></h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              Here are answers to some common questions about our services. If you don't find what you're looking for, please contact us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What makes SingRank different from other SEO agencies?",
                  answer: "SingRank combines deep local market knowledge with advanced technical expertise. We focus on data-driven strategies that deliver measurable results, with a proven track record of 97% ranking improvement and 8.3x average ROI for our clients. Our comprehensive approach includes technical SEO, content strategy, and AI answer optimization."
                },
                {
                  question: "How long does it take to see results from SEO efforts?",
                  answer: "SEO is a long-term strategy, but many of our clients begin to see initial improvements within 3-6 months. The timeline varies based on your website's current state, competition in your industry, and the specific strategies implemented. We provide regular progress reports to track improvements in rankings, traffic, and conversions."
                },
                {
                  question: "Do you offer customized SEO packages?",
                  answer: "Yes, all our SEO solutions are tailored to your specific business needs and goals. We begin with a comprehensive audit to understand your current digital presence, then develop a customized strategy based on your objectives, target audience, and competitive landscape."
                },
                {
                  question: "How do you measure the success of your SEO campaigns?",
                  answer: "We track a range of metrics including organic traffic growth, keyword rankings, conversion rates, and ROI. Our reports provide transparent insights into your campaign's performance, with clear benchmarks and goals. We focus on metrics that directly impact your business success, not just vanity metrics."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md luxury-border">
                  <h3 className="text-xl font-bold mb-3 text-luxury-red-700">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 