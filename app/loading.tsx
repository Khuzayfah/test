'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500" />
        <p className="text-sm text-gray-300">Loading...</p>
      </div>
    </div>
  );
} 