'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: 'E-commerce Growth Strategy',
    description: 'Helped a local retailer increase online sales by 200% through targeted SEO and social media campaigns.',
    category: 'E-commerce',
    imageUrl: '/projects/ecommerce.jpg',
  },
  {
    name: 'Brand Awareness Campaign',
    description: 'Developed and executed a comprehensive digital marketing strategy for a new F&B chain.',
    category: 'Branding',
    imageUrl: '/projects/branding.jpg',
  },
  {
    name: 'Lead Generation Program',
    description: 'Generated 500+ qualified leads per month for a B2B software company through content marketing.',
    category: 'B2B Marketing',
    imageUrl: '/projects/leads.jpg',
  },
  {
    name: 'Social Media Management',
    description: 'Increased social media engagement by 300% for a lifestyle brand through creative content strategy.',
    category: 'Social Media',
    imageUrl: '/projects/social.jpg',
  },
  {
    name: 'Local SEO Campaign',
    description: 'Improved local search rankings for a chain of restaurants, resulting in 150% more foot traffic.',
    category: 'SEO',
    imageUrl: '/projects/local-seo.jpg',
  },
  {
    name: 'Content Marketing Strategy',
    description: 'Created a content hub that drives 100,000+ monthly organic visitors for a tech startup.',
    category: 'Content Marketing',
    imageUrl: '/projects/content.jpg',
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Our Projects</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Take a look at some of our successful digital marketing campaigns and projects
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="h-full w-full rounded-2xl bg-gray-800 p-4 flex items-center justify-center text-gray-400">
                    [Project Image]
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-900/20" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-amber-900/20 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-700/20">
                    {project.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                    <span className="absolute inset-0" />
                    {project.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-300">{project.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
} 