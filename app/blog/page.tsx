'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: '10 SEO Strategies That Actually Work in 2024',
    description: 'Learn the most effective SEO strategies that will help your website rank higher in search results.',
    category: 'SEO',
    date: 'Mar 16, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Complete Guide to Social Media Marketing',
    description: 'Everything you need to know about building a strong social media presence for your business.',
    category: 'Social Media',
    date: 'Mar 14, 2024',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Content Marketing Trends to Watch in 2024',
    description: 'Stay ahead of the curve with these emerging content marketing trends that will shape the industry.',
    category: 'Content Marketing',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'How to Create a Successful PPC Campaign',
    description: 'A step-by-step guide to creating and managing successful pay-per-click advertising campaigns.',
    category: 'PPC',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Email Marketing Best Practices for Higher Conversion',
    description: 'Discover proven email marketing strategies that will help you increase your conversion rates.',
    category: 'Email Marketing',
    date: 'Mar 8, 2024',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'The Power of Video Marketing in Digital Strategy',
    description: 'Learn how to leverage video content to enhance your digital marketing strategy and engage your audience.',
    category: 'Video Marketing',
    date: 'Mar 6, 2024',
    readTime: '5 min read',
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Latest Insights</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay updated with the latest trends and insights in digital marketing
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start p-6 rounded-xl bg-gray-800/50 ring-1 ring-amber-900/20 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-300"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-400">
                  {post.date}
                </time>
                <span className="inline-flex items-center rounded-full bg-amber-900/20 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-700/20">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  <a href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-300">
                    <span className="absolute inset-0" />
                    {post.readTime}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 