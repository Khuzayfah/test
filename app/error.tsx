'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to analytics service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center">
      <div className="text-center">
        <p className="text-base font-semibold text-amber-500">Error Occurred</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Oops! Something went wrong
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Sorry, an unexpected error has occurred. Our team has been notified.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => reset()}
            className="rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
          >
            Try Again
          </button>
          <a href="/" className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-all duration-300">
            Back to home <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
} 