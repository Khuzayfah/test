'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const [showFullText, setShowFullText] = useState(false);
  const [textProgress, setTextProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  
  // Text to be displayed character by character
  const welcomeText = "Welcome to SingRank!";
  const taglineText = "Dominate your Ranking now!";
  
  useEffect(() => {
    // Set dimensions safely on client-side
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Simulate character-by-character typing animation
    let currentChar = 0;
    const maxChars = welcomeText.length + taglineText.length;
    
    const typingInterval = setInterval(() => {
      currentChar += 1;
      setTextProgress(currentChar);
      
      if (currentChar >= maxChars) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFullText(true);
        }, 500);
      }
    }, 50); // Speed of typing animation
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Calculate which characters to show based on progress
  const visibleWelcome = welcomeText.substring(0, Math.min(textProgress, welcomeText.length));
  const visibleTagline = textProgress > welcomeText.length 
    ? taglineText.substring(0, textProgress - welcomeText.length) 
    : "";
  
  // Generate random positions that don't depend on window
  const getRandomPosition = (index: number) => {
    // Use deterministic randomness based on index
    const hashPos = (index * 13) % 100;
    return {
      x: `${hashPos}%`,
      y: `${(hashPos * 7) % 100}%`,
    };
  };
  
  return (
    <div ref={containerRef} className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Digital noise/grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(120)].map((_, i) => (
            <div 
              key={i} 
              className="border-[0.5px] border-gray-500 h-10"
              style={{
                opacity: Math.random() * 0.5 + 0.1
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Red and white particles */}
      {[...Array(50)].map((_, i) => {
        const position = getRandomPosition(i);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full z-0"
            initial={{
              opacity: 0,
              scale: 0,
              left: position.x,
              top: position.y,
              backgroundColor: i % 2 === 0 ? '#ED2939' : '#FFFFFF'
            }}
            animate={{
              opacity: [0, Math.random() * 0.5 + 0.1, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`
            }}
          />
        );
      })}
      
      <div className="z-10 relative">
        {/* Digital loading animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <svg width="80" height="80" viewBox="0 0 50 50">
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="#ED2939"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="25"
              cy="25"
              r="15"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="1,3"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25"
              stroke="#ED2939"
              strokeWidth="2"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </motion.div>
        
        {/* Digital typing effect text */}
        <div className="text-center space-y-4">
          {showFullText ? (
            <>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {welcomeText}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-luxury-red-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {taglineText}
              </motion.p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-mono relative">
                {visibleWelcome}
                <span className="absolute ml-1 animate-pulse">|</span>
              </h1>
              <p className="text-xl md:text-2xl text-luxury-red-600 font-mono">
                {visibleTagline}
              </p>
            </>
          )}
        </div>
      </div>
      
      {/* Digital glitch effect */}
      <motion.div
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0], 
          x: [0, -10, 10, -5, 0],
          scaleY: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 0.2,
          repeat: 5,
          repeatDelay: 3
        }}
      />
    </div>
  );
} 