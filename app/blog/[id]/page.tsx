'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const posts = [
  {
    id: 1,
    title: '10 SEO Strategies That Actually Work in 2024',
    description: 'Learn the most effective SEO strategies that will help your website rank higher in search results.',
    category: 'SEO',
    date: 'Mar 16, 2024',
    readTime: '5 min read',
    content: `
      Search Engine Optimization (SEO) continues to be a crucial aspect of digital marketing in 2024. As search engines become more sophisticated and user behavior evolves, it's essential to stay up-to-date with the most effective SEO strategies.

      Here are the top 10 SEO strategies that are proven to work in 2024:

      1. Focus on User Experience
      - Optimize page load speed
      - Ensure mobile responsiveness
      - Improve site navigation
      - Create clear and accessible content

      2. Create High-Quality Content
      - Address user intent
      - Provide comprehensive information
      - Include relevant keywords naturally
      - Keep content fresh and updated

      3. Optimize for Voice Search
      - Use conversational keywords
      - Focus on question-based queries
      - Implement structured data
      - Create FAQ sections

      4. Implement Technical SEO Best Practices
      - Use HTTPS security
      - Optimize robots.txt
      - Create and maintain sitemaps
      - Fix broken links and redirects

      5. Build Quality Backlinks
      - Create linkable content
      - Engage in guest posting
      - Build relationships with industry leaders
      - Monitor backlink profile

      6. Optimize for Core Web Vitals
      - Improve LCP (Largest Contentful Paint)
      - Minimize FID (First Input Delay)
      - Reduce CLS (Cumulative Layout Shift)

      7. Create Video Content
      - Optimize video titles and descriptions
      - Add transcripts
      - Use video sitemaps
      - Host on multiple platforms

      8. Focus on Local SEO
      - Optimize Google Business Profile
      - Manage local citations
      - Encourage customer reviews
      - Create location-specific content

      9. Use AI and Machine Learning
      - Implement AI-powered content optimization
      - Use predictive analytics
      - Automate routine SEO tasks
      - Analyze user behavior patterns

      10. Monitor and Adapt
      - Track key metrics
      - Analyze competitor strategies
      - Stay updated with algorithm changes
      - Adjust strategies based on data

      Remember, SEO is an ongoing process that requires constant monitoring and adjustment. What works today might need to be modified tomorrow as search engines evolve and user behavior changes.
    `,
  },
  // Add more blog posts here
];

export default function BlogPost() {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-amber-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">Post not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn't find the blog post you're looking for.</p>
          <div className="mt-10">
            <a href="/blog" className="text-sm font-semibold leading-7 text-amber-400 hover:text-amber-300 transition-all duration-300">
              <span aria-hidden="true">&larr;</span> Back to blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-400">
              {post.date}
            </time>
            <span className="inline-flex items-center rounded-full bg-amber-900/20 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-700/20">
              {post.category}
            </span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">{post.title}</h1>
          <div className="mt-10 max-w-xl">
            <div className="prose prose-invert prose-amber prose-lg">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mt-6 text-base leading-7 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <a href="/blog" className="text-sm font-semibold leading-7 text-amber-400 hover:text-amber-300 transition-all duration-300">
              <span aria-hidden="true">&larr;</span> Back to blog
            </a>
          </div>
        </motion.article>
      </div>
    </div>
  );
} 