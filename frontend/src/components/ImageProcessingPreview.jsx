/**
 * Image Processing Preview Component
 * Shows before/after comparison of hair removal
 */

import React from 'react';

const ImageProcessingPreview = ({ originalImage, processedImage }) => {
  if (!processedImage) return null;

  return (
    <div className="mt-6 p-4 md:p-6 bg-gradient-to-r from-primary/20 to-accent-teal/20 rounded-xl border border-primary/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        Image Processing
      </h3>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Original Image */}
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-medium text-slate-300 text-center">Original</p>
            <div className="relative rounded-lg overflow-hidden border-2 border-dark-border aspect-square">
              <img
                src={originalImage}
                alt="Original"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Processed Image */}
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-medium text-slate-300 text-center">
              Hair Removed
            </p>
            <div className="relative rounded-lg overflow-hidden border-2 border-primary aspect-square shadow-glow">
              <img
                src={processedImage}
                alt="Processed"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-1 md:top-2 md:right-2 px-2 py-0.5 md:py-1 bg-primary text-white text-xs font-semibold rounded shadow-glow">
                Processed
              </div>
            </div>
          </div>
        </div>
        
        {/* Arrow between images (centered below) */}
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-dark-card/80 backdrop-blur-sm rounded-full border border-primary/30">
            <svg
              className="w-4 h-4 text-primary rotate-90 md:rotate-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="text-xs text-slate-300 font-medium">Preprocessed</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-400 text-center mt-3">
        Hair artifacts automatically removed for better analysis
      </p>
    </div>
  );
};

export default ImageProcessingPreview;

