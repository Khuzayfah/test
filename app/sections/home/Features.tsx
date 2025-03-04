'use client';

/**
 * Professional Luxury Features Section
 * 
 * Showcases the key services and features in an elegant white background with blue and gold accents
 * that conveys professionalism, trust, and expertise. Uses sophisticated decorative elements,
 * professional iconography, and refined typography.
 * 
 * Features:
 * - Elegant grid layout with luxury card components
 * - Professional-themed iconography representing trust and expertise
 * - Sophisticated animations and hover effects
 * - Blue and gold accents and ornamental decorations
 * - Refined serif typography for headings
 */

import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';

interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
  animation: 'float' | 'pulse' | 'rotate' | 'sparkle' | 'none';
}

// Feature items data with professional luxury icons and animations
const features: Feature[] = [
  {
    name: 'Strategic Excellence',
    description: 'Elevate your brand with meticulously crafted strategies designed for distinguished businesses.',
    icon: (
      <span className="text-3xl text-blue-500">⚙️</span> // Gear icon for strategic processes
    ),
    animation: 'rotate' // Rotating animation for gear icon
  },
  {
    name: 'Refined Digital Presence',
    description: "Establish an elegant and sophisticated online presence that reflects your brand's prestige.",
    icon: (
      <span className="text-3xl text-blue-500">🌐</span> // Globe for digital presence
    ),
    animation: 'float' // Floating animation for globe icon
  },
  {
    name: 'Luxury Content Creation',
    description: 'Captivate your audience with compelling content that embodies excellence and authority.',
    icon: (
      <span className="text-3xl text-blue-500">✒️</span> // Fountain pen for sophisticated content
    ),
    animation: 'sparkle' // Sparkle animation for pen icon
  },
  {
    name: 'Sophisticated Analytics',
    description: 'Gain powerful insights through comprehensive data analysis and custom reporting.',
    icon: (
      <span className="text-3xl text-blue-500">📊</span> // Chart for analytics
    ),
    animation: 'pulse' // Pulse animation for chart icon
  },
];

/**
 * Animation variants for container and items
 * Uses staggered animations for a more sophisticated reveal
 */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white particles-bg relative overflow-hidden">
      {/* Decorative floating elements with animation */}
      <motion.div 
        className="absolute left-0 h-full w-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="absolute top-1/4 left-6 text-blue-400 opacity-20 text-7xl"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 10, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-8 text-blue-400 opacity-20 text-7xl"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, 15, 0],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✨
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute right-0 h-full w-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="absolute top-1/3 right-8 text-blue-400 opacity-20 text-7xl"
          animate={{ 
            y: [0, -25, 0], 
            x: [0, -10, 0],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-6 text-blue-400 opacity-20 text-7xl"
          animate={{ 
            y: [0, 15, 0], 
            x: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          ✨
        </motion.div>
      </motion.div>
      
      {/* Floating small particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400 text-opacity-30 text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Ornamental divider with animation */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-1"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 160, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700"></div>
        </motion.div>
        
        {/* Section header with animations */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-serif font-semibold leading-7 text-blue-600 uppercase tracking-widest">Professional Services</h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
              Exceptional Solutions for Discerning Clients
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto my-6"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our prestigious suite of services is meticulously designed to elevate your brand, build trust, and deliver remarkable results.
            </p>
          </motion.div>
        </div>
        
        {/* Features grid with custom professional cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                variants={item}
                className="professional-shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Card 
                  hoverEffect={true}
                  goldBorder={false}
                  darkBackground={false}
                  className="border border-gray-200 h-full bg-white p-6 rounded-xl"
                >
                  <dt className="flex flex-col items-center text-center gap-y-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 icon-${feature.animation}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold leading-7 text-gray-900 trust-text">{feature.name}</h3>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600 text-center">{feature.description}</dd>
                </Card>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 