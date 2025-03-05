/**
 * SingRank About Page
 * 
 * A professionally designed presentation of our company, team, values, and mission
 * with interactive animations, dynamic effects, and SEO-optimized content.
 * Styled to match the Services page with consistent design elements.
 */

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaSearchPlus, FaServer, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { MdOutlineContentPaste } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { FaRegFileAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import type { MotionProps } from 'framer-motion';

// Animation variants
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

// Interface for team member data
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  iconType: string;
  email?: string;
  specialties?: string[];
}

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Khuzayfah Redo',
    position: 'SEO & Founder',
    bio: 'Co-Founder of Oneiros and SEO Expert with comprehensive expertise in digital marketing, AI integration, and frontend development. Leading innovative solutions for business growth in the digital landscape.',
    image: '/team/founder.jpg',
    iconType: 'leader',
    email: 'naturalgifts.sg@gmail.com',
    specialties: [
      'SEO & AEO Expert',
      'Data Analysis',
      'Digital Marketing Strategist',
      'AI Training & Integration',
      'Frontend Development',
      'Content Strategy',
      'Marketing Analytics',
      'Search Engine Marketing',
      'User Experience Design',
      'Digital Brand Development'
    ]
  },
  {
    id: 2,
    name: 'Jekriando Michael',
    position: 'Oneiros Co-Founder & Tech Lead',
    bio: 'Co-Founder of Oneiros and Technical Lead with extensive experience in full-stack development, system architecture, and database management. Specializes in creating scalable and efficient technical solutions.',
    image: '/team/tech-lead.jpg',
    iconType: 'tech',
    specialties: [
      'Fullstack Development',
      'Backend Architecture',
      'API Integration',
      'Database Management',
      'System Architecture',
      'Cloud Infrastructure',
      'DevOps & CI/CD',
      'Security Implementation',
      'Performance Optimization',
      'Technical Leadership'
    ]
  },
  {
    id: 3,
    name: 'Wahyu Wedy',
    position: 'Social Media Expert',
    bio: 'Social Media Management specialist with a proven track record in building and managing successful social media campaigns and community engagement strategies.',
    image: '/team/content-strategist.jpg',
    iconType: 'content',
    specialties: [
      'Social Media Management',
      'Community Management',
      'Content Creation',
      'Campaign Strategy',
      'Brand Voice Development',
      'Audience Engagement',
      'Social Analytics',
      'Influencer Collaboration',
      'Social Media Advertising',
      'Crisis Management'
    ]
  }
];

// Values data
const values = [
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

interface StatItem {
  number: string;
  label: string;
  suffix: string;
}

const stats: StatItem[] = [
  { 
    number: "15", 
    label: "Years Experience",
    suffix: "+"
  },
  { 
    number: "69", 
    label: "Clients Served",
    suffix: "+"
  },
  { 
    number: "95", 
    label: "Client Satisfaction",
    suffix: "%"
  },
  { 
    number: "132", 
    label: "Projects Completed",
    suffix: "+"
  }
];

interface CountingNumberProps {
  value: string;
  suffix: string;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ value, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMountedLocal, setIsMountedLocal] = useState(false);

  useEffect(() => {
    setIsMountedLocal(true);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const finalValue = parseInt(value);
      const duration = 2000;
      const steps = 60;
      const increment = finalValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          setCount(finalValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, hasAnimated]);

  // On the first render (server side or before mount), render static final value
  if (!isMountedLocal) {
    return (
      <span className="text-4xl md:text-5xl font-bold text-gray-900">
        {value}{suffix}
      </span>
    );
  }

  return (
    <motion.span 
      ref={ref} 
      className="text-4xl md:text-5xl font-bold text-gray-900 inline-block"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

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

// Dynamically import motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), {
  ssr: false
});

// Dynamically import ParticlesContainer
const ClientParticles = dynamic(() => import('../components/ParticlesContainer'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-white to-luxury-red-50"></div>
});

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.97]);

  useEffect(() => {
    // Set mounted state first
    setIsMounted(true);
    
    // Then handle mobile check and loading state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Set loading to false after a delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Enable animations after a short delay
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const openTeamMemberDetails = (member: TeamMember) => {
    if (isMounted) {
      setSelectedTeamMember(member);
    }
  };

  const closeTeamMemberModal = () => {
    setSelectedTeamMember(null);
  };

  // Initial loading state (server-side and client-side match)
  if (!isMounted || isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#d13239] border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  const renderTeamMemberCard = (member: TeamMember, index: number) => {
    if (!isMounted) {
      return (
        <div
          key={member.id}
          className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer h-full border border-gray-100 hover:border-[#d13239]/20"
        >
          {/* Card content */}
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
        </div>
      );
    }

    return (
      <MotionDiv
        key={member.id}
        layoutId={`team-${member.id}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        onClick={() => openTeamMemberDetails(member)}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full border border-gray-100 hover:border-[#d13239]/20 hover:shadow-2xl transition-all duration-300 relative group"
      >
        {/* Card content */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-colors duration-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center text-center p-6 relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#d13239] to-[#e64c4c] mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#d13239] transition-colors duration-300">{member.name}</h3>
              <p className="text-[#d13239] font-medium mb-4 group-hover:scale-105 transition-transform duration-300">{member.position}</p>
              <div className="w-12 h-1 bg-[#d13239] mb-4 group-hover:w-24 transition-all duration-300"></div>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{member.bio}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#d13239]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 bg-white border-t border-gray-100 group-hover:bg-gray-50 transition-colors duration-300">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#d13239]/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              {renderIconPath(member.iconType)}
            </div>
          </div>
        </div>
      </MotionDiv>
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Hero Section with Particles Background */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-50 to-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          {isMounted && <ClientParticles />}
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
            {values.map((value, index) => (
              <motion.div 
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full border border-gray-100 hover:border-[#d13239]/20 hover:shadow-2xl transition-all duration-300 relative group"
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 mb-4 bg-[#d13239]/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {renderIconPath(value.iconType)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d13239] transition-colors duration-300">{value.name}</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{value.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d13239]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            {teamMembers.map((member, index) => renderTeamMemberCard(member, index))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d13239] rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e64c4c] rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[#d13239] relative">
                Impact
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d13239] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Numbers that tell the story of our commitment to excellence and client success.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-[#d13239] to-[#e64c4c] mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    delay: index * 0.2,
                    bounce: 0.4
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 30px -10px rgba(209, 50, 57, 0.2)",
                  transition: { type: "spring", bounce: 0.4 }
                }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#d13239]/20 transform transition-all duration-300 group backdrop-blur-sm bg-white/80"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d13239]/5 to-transparent rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative">
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold text-[#d13239] mb-4 bg-clip-text"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.3
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <CountingNumber value={stat.number} suffix={stat.suffix} />
                    </motion.div>
                    <motion.p 
                      className="text-lg font-medium text-gray-700 group-hover:text-[#d13239] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.3 + 0.2
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>
                  </div>
                </div>
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

      {/* Team Member Modal - Only render on client side */}
      {isMounted && selectedTeamMember && (
        <AnimatePresence mode="wait">
          <MotionDiv
            key="modal"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTeamMemberModal}
          >
            <MotionDiv
              layoutId={`team-${selectedTeamMember.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#d13239] to-[#e64c4c] py-6 px-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#d13239] text-2xl font-bold mr-4">
                      {selectedTeamMember.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {selectedTeamMember.name}
                      </h3>
                      <p className="text-white/90">{selectedTeamMember.position}</p>
                      {selectedTeamMember.email && (
                        <a href={`mailto:${selectedTeamMember.email}`} className="text-white/80 hover:text-white flex items-center mt-2 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {selectedTeamMember.email}
                        </a>
                      )}
                    </div>
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
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                  <p className="text-gray-700">{selectedTeamMember.bio}</p>
                </div>
                
                {selectedTeamMember.specialties && selectedTeamMember.specialties.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeamMember.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#d13239]/10 text-[#d13239] rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pt-6 flex justify-end">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-[#d13239] to-[#e64c4c] text-white font-medium rounded-md hover:from-[#e64c4c] hover:to-[#d13239] transition-colors duration-300"
                    onClick={closeTeamMemberModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </AnimatePresence>
      )}
    </main>
  );
} 