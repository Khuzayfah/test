'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission here
    console.log('Login submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md space-y-6 sm:space-y-8"
      >
        <div>
          <a href="/" className="flex justify-center">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">SingRank</span>
          </a>
          <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-100">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <a href="/contact" className="font-medium text-amber-400 hover:text-amber-300 transition-all duration-300 touch-manipulation">
              contact us to get started
            </a>
          </p>
        </div>
        <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-t-md relative block w-full px-3.5 py-3 sm:py-2 border border-amber-800/30 bg-gray-800/50 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 text-base sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-b-md relative block w-full px-3.5 py-3 sm:py-2 border border-amber-800/30 bg-gray-800/50 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 text-base sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                className="h-5 w-5 sm:h-4 sm:w-4 text-amber-600 focus:ring-amber-500 border-gray-700 rounded touch-manipulation"
              />
              <label htmlFor="remember" className="ml-2 block text-base sm:text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-base sm:text-sm">
              <a href="#" className="font-medium text-amber-400 hover:text-amber-300 transition-all duration-300 touch-manipulation">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3.5 sm:py-2.5 px-4 border border-transparent text-base sm:text-sm font-medium rounded-md text-gray-900 bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 touch-manipulation"
            >
              Sign in
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 