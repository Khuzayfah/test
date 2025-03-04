'use client';

import { motion } from 'framer-motion';

const services = [
  {
    name: 'Search Engine Optimization (SEO)',
    description: 'Improve your website\'s visibility in search results and drive organic traffic.',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Link Building',
      'Local SEO',
      'SEO Content Creation',
    ],
  },
  {
    name: 'Social Media Marketing',
    description: 'Build and engage with your audience across social media platforms.',
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Marketing',
      'Social Media Analytics',
    ],
  },
  {
    name: 'Content Marketing',
    description: 'Create valuable content that attracts and retains your target audience.',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Copywriting',
      'Video Content',
      'Infographics',
      'Content Distribution',
    ],
  },
  {
    name: 'Pay-Per-Click (PPC) Advertising',
    description: 'Drive targeted traffic and conversions through paid advertising campaigns.',
    features: [
      'Google Ads Management',
      'Facebook Ads',
      'LinkedIn Ads',
      'Display Advertising',
      'Remarketing Campaigns',
      'Conversion Tracking',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-3xl bg-gray-800/50 p-8 ring-1 ring-amber-900/20 shadow-xl hover:shadow-amber-900/10 transition-all duration-300 xl:p-10"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold leading-7 text-amber-400">{service.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-300">{service.description}</p>
                </div>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 