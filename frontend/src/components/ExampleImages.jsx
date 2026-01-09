/**
 * Example Images Component
 * Grid of example images for quick testing
 */

import React from 'react';
import { EXAMPLE_IMAGES } from '../utils/constants';

const ExampleImages = ({ onSelectExample }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        Or try with an example image:
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {EXAMPLE_IMAGES.map((example) => (
          <button
            key={example.id}
            onClick={() => onSelectExample(example.path)}
            className="group relative aspect-square rounded-lg overflow-hidden border-2 border-dark-border hover:border-primary transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
          >
            <img
              src={example.path}
              alt={example.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
              <span className="text-xs text-white font-medium">{example.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExampleImages;

