'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-300">
              Get in touch with us to discuss how we can help grow your business online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 sm:mt-16 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-200">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-3 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-800/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 text-base sm:text-sm sm:leading-6 bg-gray-800/50 text-gray-100"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-200">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-3 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-800/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 text-base sm:text-sm sm:leading-6 bg-gray-800/50 text-gray-100"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-200">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-3 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-800/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 text-base sm:text-sm sm:leading-6 bg-gray-800/50 text-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-200">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-3 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-800/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 text-base sm:text-sm sm:leading-6 bg-gray-800/50 text-gray-100"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-3.5 sm:py-2.5 text-center text-base sm:text-sm font-semibold text-gray-900 shadow-sm hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 touch-manipulation"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div className="rounded-2xl bg-gray-800/50 p-6 sm:p-10 ring-1 ring-amber-900/20 shadow-xl">
                <h3 className="text-lg sm:text-base font-semibold leading-7 text-amber-400">Office Address</h3>
                <dl className="mt-3 space-y-1 text-base sm:text-sm leading-6 text-gray-300">
                  <div>
                    <p>Buangkok Link</p>
                    <p>Singapore</p>
                  </div>
                </dl>
                <h3 className="mt-6 text-lg sm:text-base font-semibold leading-7 text-amber-400">Contact Info</h3>
                <dl className="mt-3 space-y-1 text-base sm:text-sm leading-6 text-gray-300">
                  <div>
                    <dt className="font-semibold text-gray-200">Email</dt>
                    <dd>
                      <a href="mailto:info@singrank.sg.com" className="text-amber-400 hover:text-amber-300 transition-all duration-300 touch-manipulation">
                        info@singrank.sg.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-200">Phone</dt>
                    <dd>
                      <a href="tel:+65666999" className="text-amber-400 hover:text-amber-300 transition-all duration-300 touch-manipulation">
                        +65 666 999
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 