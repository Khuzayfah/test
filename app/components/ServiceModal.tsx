/**
 * Service Detail Modal Component
 * 
 * Popup modal for displaying service details with animations
 * and styling that matches the main red and white theme.
 */

'use client';

import React, { useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for our service details
interface ServiceProps {
  id: number;
  name: string;
  description: string;
  category: string;
  iconType: string;
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceProps | null;
  isMobile: boolean;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service, isMobile }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Animation variants - optimized for performance
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  if (!service) return null;

  // Get the appropriate icon based on service type
  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'seo':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        );
      case 'web':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        );
      case 'content':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        );
      case 'software':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        );
      case 'social':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        );
      case 'ai':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0 1.36-1.35 2.04-3.13 2.04-4.91h2c0 2.34-.89 4.65-2.67 6.43-3.56 3.55-9.33 3.55-12.9 0-3.57-3.56-3.57-9.33 0-12.9 3.56-3.55 9.33-3.55 12.9 0l2.5-2.58V10.12z"/>
          </svg>
        );
      case 'cms':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        );
      case 'ecommerce':
        return (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && service && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="fixed inset-0"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          ></motion.div>
          
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle ${isMobile ? 'w-[95%] max-w-md mx-auto' : 'sm:max-w-2xl sm:w-full'}`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              layoutId={`service-${service.id}`}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#d13239] to-[#e64c4c] py-4 px-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-3 bg-white rounded-full p-2">
                    {getIcon(service.iconType)}
                  </div>
                  <h3 id="modal-title" className="text-xl font-bold text-white line-clamp-1">
                    {service.name}
                  </h3>
                </div>
                <motion.button
                  className="text-white hover:text-gray-200 focus:outline-none"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Body */}
              <div className="max-h-[60vh] overflow-y-auto px-4 py-3">
                <div className="mb-4">
                  <p className="text-gray-700">{service.description}</p>
                </div>

                {/* Benefits Section */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#d13239] mb-2">Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>

                {/* Features Section */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#d13239] mb-2">Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Process Section */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#d13239] mb-2">Our Process</h4>
                  <div className="space-y-3">
                    {service.process.map((step, index) => (
                      <div key={index} className="border-l-2 border-[#d13239] pl-4 mb-2">
                        <h5 className="font-medium text-md text-gray-900">{step.step}</h5>
                        <p className="text-sm text-gray-700">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-4 py-3 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gradient-to-r from-[#d13239] to-[#e64c4c] text-white font-medium rounded-md hover:from-[#e64c4c] hover:to-[#d13239] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ServiceModal); 