'use client';

/**
 * Professional Luxury Testimonials Section
 * 
 * Displays client testimonials in a clean, elegant format with professional styling
 * that builds trust and credibility. Features sophisticated animations and a
 * professional color scheme.
 */

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    body: 'Our digital presence has completely transformed since working with this team. The SEO optimization and social media management have resulted in a 200% increase in organic traffic.',
    author: {
      name: 'Sarah Thompson',
      role: 'Marketing Director',
      company: 'Tech Innovators',
      imageUrl: '/images/avatars/avatar-1.jpg',
    },
  },
  {
    body: 'The PPC campaign strategy they developed delivered immediate results. We saw a 30% increase in conversions within the first month. Highly recommended!',
    author: {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'Growth Ventures',
      imageUrl: '/images/avatars/avatar-2.jpg',
    },
  },
  {
    body: 'Their content marketing approach has positioned us as thought leaders in our industry. The engagement on our blog posts and social channels has never been higher.',
    author: {
      name: 'Emma Wilson',
      role: 'Brand Manager',
      company: 'Horizon Solutions',
      imageUrl: '/images/avatars/avatar-3.jpg',
    },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32 particles-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-8 text-blue-600 uppercase tracking-widest">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear What Our Clients Say
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We've helped businesses across industries achieve their digital marketing goals.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-sm leading-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-200 professional-shadow">
                  <blockquote className="text-gray-700">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-50 overflow-hidden">
                      {testimonial.author.imageUrl && (
                        <div className="h-full w-full bg-blue-50 flex items-center justify-center text-blue-500">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-blue-700">{testimonial.author.name}</div>
                      <div className="text-gray-500">{`${testimonial.author.role}, ${testimonial.author.company}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 