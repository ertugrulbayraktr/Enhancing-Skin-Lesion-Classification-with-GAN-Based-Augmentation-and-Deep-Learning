/**
 * Loading Spinner Component
 * Multi-stage loading indicator with messages
 */

import React from 'react';
import { LOADING_MESSAGES } from '../utils/constants';

const LoadingSpinner = ({ stage = 'preparing', message = null }) => {
  const displayMessage = message || LOADING_MESSAGES[stage] || 'Loading...';

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Spinner */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Message */}
      <p className="text-slate-600 font-medium text-center">{displayMessage}</p>

      {/* Stage indicator */}
      <div className="mt-4 flex gap-2">
        <span
          className={`w-2 h-2 rounded-full transition-all ${
            stage === 'preparing' ? 'bg-primary w-6' : 'bg-slate-300'
          }`}
        ></span>
        <span
          className={`w-2 h-2 rounded-full transition-all ${
            stage === 'removing_hair' ? 'bg-primary w-6' : 'bg-slate-300'
          }`}
        ></span>
        <span
          className={`w-2 h-2 rounded-full transition-all ${
            stage === 'analyzing' ? 'bg-primary w-6' : 'bg-slate-300'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

