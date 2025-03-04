'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-base font-semibold text-red-600">Error 500</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Error Sistem
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Maaf, terjadi kesalahan pada sistem kami. Tim kami sedang bekerja untuk memperbaikinya.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <button
                onClick={() => reset()}
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 