'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Custom 404 Not Found Page
 * 
 * A user-friendly page shown when users navigate to a route that doesn't exist.
 * Provides helpful links to get back on track.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-luxury-red-100">
          <div className="w-20 h-20 bg-luxury-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-luxury-red-600">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full px-4 py-3 bg-luxury-red-600 text-white rounded-md hover:bg-luxury-red-700 transition-colors"
            >
              Return to Homepage
            </Link>
            
            <Link
              href="/contact"
              className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 