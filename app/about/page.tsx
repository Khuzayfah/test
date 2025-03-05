/**
 * SingRank About Page
 * 
 * A professionally designed presentation of our company, team, values, and mission
 * with interactive animations, dynamic effects, and SEO-optimized content.
 * Styled to match the Services page with consistent design elements.
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaSearchPlus, FaChartLine, FaMapMarkerAlt, FaServer, FaRegFileAlt, FaGoogle, FaUsers, FaLightbulb, FaHandshake, FaChartBar } from 'react-icons/fa';
import { BsSpeedometer, BsGlobe, BsStars } from 'react-icons/bs';
import { MdOutlineContentPaste, MdOutlineAnalytics, MdKeyboardVoice, MdLocationOn, MdPeople, MdInsights } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { RiRobot2Line } from 'react-icons/ri';
import { SiGoogleanalytics } from 'react-icons/si';

// Dynamically import components for performance with ssr: false to prevent hydration errors
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-[#202020] to-[#333333]"></div>
});

// Header animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const headerItemsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// About page team members data
const teamMembers = [
  {
    id: 1,
    name: 'Khuzayfah Redo',
    position: 'CEO & Founder',
    bio: 'SEO Specialist & Front-end Developer with expertise in modern web technologies and digital marketing strategies.',
    image: '/team/founder.jpg',
    iconType: 'leader'
  },
  {
    id: 2,
    name: 'Jack Ando Michael',
    position: 'Backend Developer',
    bio: 'Expert in backend development and API integration, creating robust and scalable solutions.',
    image: '/team/tech-lead.jpg',
    iconType: 'tech'
  },
  {
    id: 3,
    name: 'Wahyu We Die',
    position: 'Social Media Specialist',
    bio: 'Creative social media strategist with a passion for building engaging online communities.',
    image: '/team/content-strategist.jpg',
    iconType: 'content'
  }
];

// Company values data
const companyValues = [
  {
    id: 1,
    name: "DATA-DRIVEN DECISIONS",
    description: "We base our strategies on concrete data and analytics, ensuring measurable results for every campaign we undertake.",
    iconType: "data",
    color: "from-[#d13239] to-[#e64c4c]"
  },
  {
    id: 2,
    name: "CLIENT SUCCESS FOCUS",
    description: "Your business goals are our priority. We measure our success by the growth and achievements of our clients.",
    iconType: "client",
    color: "from-[#d13239] to-[#e64c4c]"
  },
  {
    id: 3,
    name: "INNOVATION & ADAPTABILITY",
    description: "Digital marketing evolves rapidly. We stay ahead of trends and algorithm changes to keep your business competitive.",
    iconType: "innovation",
    color: "from-[#d13239] to-[#e64c4c]"
  },
  {
    id: 4,
    name: "TRANSPARENCY & INTEGRITY",
    description: "We provide clear reporting and honest communication about what's working and what needs adjustment.",
    iconType: "transparency",
    color: "from-[#d13239] to-[#e64c4c]"
  }
];

// Company stats
const companyStats = [
  { number: "5+", label: "Years Experience" },
  { number: "200+", label: "Clients Served" },
  { number: "97%", label: "Client Satisfaction" },
  { number: "500+", label: "Projects Completed" },
];

// Interface for team member modal
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  iconType: string;
}

// Render icon based on type
const renderIconPath = (iconType: string) => {
  switch(iconType) {
    case 'leader':
      return (
        <FaUsers className="h-6 w-6 text-[#d13239]" />
      );
    case 'seo':
      return (
        <FaSearchPlus className="h-6 w-6 text-[#d13239]" />
      );
    case 'content':
      return (
        <MdOutlineContentPaste className="h-6 w-6 text-[#d13239]" />
      );
    case 'tech':
      return (
        <FaServer className="h-6 w-6 text-[#d13239]" />
      );
    case 'data':
      return (
        <FaChartLine className="h-6 w-6 text-[#d13239]" />
      );
    case 'client':
      return (
        <FaHandshake className="h-6 w-6 text-[#d13239]" />
      );
    case 'innovation':
      return (
        <FaLightbulb className="h-6 w-6 text-[#d13239]" />
      );
    case 'transparency':
      return (
        <FaRegFileAlt className="h-6 w-6 text-[#d13239]" />
      );
    default:
      return (
        <BsStars className="h-6 w-6 text-[#d13239]" />
      );
  }
};

// Client-side only component for particles
function ClientParticles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) {
    return <div className="absolute inset-0 bg-gradient-to-b from-[#202020] to-[#333333]"></div>;
  }
  
  return <ParticlesContainer />;
}

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.97]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted on client
    setIsMounted(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Setup resize listener
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const openTeamMemberDetails = (member: TeamMember) => {
    setSelectedTeamMember(member);
  };

  const closeTeamMemberModal = () => {
    setSelectedTeamMember(null);
  };

  const animate = (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Hero Section with Particles Background */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-50 to-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          {/* Use ClientParticles component to prevent hydration errors */}
          {isMounted ? <ClientParticles /> : <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>}
        </div>
        
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: 'url(/images/singapore-skyline.jpg)' }}></div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="absolute bottom-10 left-0 w-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <IoIosArrowDown size={30} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.div
            variants={headerItemsVariants}
          >
            <motion.div
              variants={headerItemVariants}
              className="mb-6 inline-block"
            >
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#d13239]/10 text-gray-900 text-sm font-medium backdrop-blur-sm">
                <BsStars className="mr-1" /> Singapore's Premier Agency
              </span>
            </motion.div>
            
            <motion.h1 
              variants={headerItemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-[#d13239]">SingRank</span>
            </motion.h1>
            
            <motion.p
              variants={headerItemVariants}
              className="text-xl max-w-3xl mx-auto text-gray-700"
            >
              Driving digital success for businesses across Singapore with data-driven strategies and innovative solutions.
            </motion.p>
            
            <motion.div
              variants={headerItemVariants}
              className="h-1 w-24 md:w-[150px] bg-[#d13239] mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our <span className="text-[#d13239]">Mission</span></h2>
            <p className="text-xl text-gray-700 mb-8">
              To empower Singapore businesses with cutting-edge digital strategies that drive measurable growth and establish lasting online presence.
            </p>
            <div className="h-1 w-24 bg-[#d13239] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/ourstory.png"
                  alt="SingRank Mission and Our Story"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white font-semibold">Achieving Excellence Together</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">We're More Than Just an Agency</h3>
              <p className="text-gray-700">
                At SingRank, we're passionate about driving real, measurable results for our clients. We combine technical expertise with creative strategies to help your business thrive in the digital landscape.
              </p>
              <p className="text-gray-700">
                Founded with a vision to transform how Singapore businesses approach digital marketing, we've grown to become a trusted partner for companies seeking to establish a powerful online presence.
              </p>
              <div className="pt-4">
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-[#d13239] to-[#e64c4c] text-white font-medium hover:from-[#e64c4c] hover:to-[#d13239] transition-all duration-300"
                >
                  Explore Our Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our <span className="text-[#d13239]">Values</span></h2>
            <p className="text-xl text-gray-700 mb-8">
              The principles that guide our work and define our approach to helping your business succeed.
            </p>
            <div className="h-1 w-24 bg-[#d13239] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div 
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-lg shadow-xl overflow-hidden h-full border border-gray-100 hover:border-[#d13239]/20"
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-[#d13239]/10 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    {renderIconPath(value.iconType)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.name}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our <span className="text-[#d13239]">Team</span></h2>
            <p className="text-xl text-gray-700 mb-8">
              Meet the experts who will drive your digital success through innovation and expertise.
            </p>
            <div className="h-1 w-24 bg-[#d13239] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                layoutId={`team-${member.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onClick={() => openTeamMemberDetails(member)}
                className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer h-full border border-gray-100 hover:border-[#d13239]/20"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center text-center p-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#d13239] to-[#e64c4c] mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {member.name.charAt(0)}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-[#d13239] font-medium mb-4">{member.position}</p>
                      <div className="w-12 h-1 bg-[#d13239] mb-4"></div>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#d13239]/10 flex items-center justify-center">
                      {renderIconPath(member.iconType)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our <span className="text-[#d13239]">Impact</span></h2>
            <p className="text-xl text-gray-700 mb-8">
              Numbers that tell the story of our commitment to excellence and client success.
            </p>
            <div className="h-1 w-24 bg-[#d13239] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {companyStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:border-[#d13239]/20"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#d13239] mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#d13239] to-[#e64c4c] rounded-xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to elevate your digital presence and achieve measurable results.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-md bg-white text-[#d13239] font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTeamMemberModal}
          >
            <motion.div
              layoutId={`team-${selectedTeamMember.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#d13239] to-[#e64c4c] py-4 px-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-3 bg-white rounded-full p-2">
                    {renderIconPath(selectedTeamMember.iconType)}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedTeamMember.name}
                  </h3>
                </div>
                <button
                  className="text-white hover:text-gray-200 focus:outline-none"
                  onClick={closeTeamMemberModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative h-64 overflow-hidden bg-gray-300">
                {/* Fallback for image */}
                <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-200 flex items-center justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white text-2xl font-bold">
                      {selectedTeamMember.name.charAt(0)}
                    </div>
                    <div className="text-gray-600 text-sm mt-2">{selectedTeamMember.position}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{selectedTeamMember.position}</h4>
                  <p className="text-gray-700">{selectedTeamMember.bio}</p>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-[#d13239] to-[#e64c4c] text-white font-medium rounded-md hover:from-[#e64c4c] hover:to-[#d13239] transition-colors duration-300"
                    onClick={closeTeamMemberModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 