/**
 * Hero Section Component
 * Landing section with project introduction
 */

import React from 'react';
import { MODEL_INFO } from '../utils/constants';

const HeroSection = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section bg-gradient-to-br from-primary via-primary-dark to-accent-teal text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">AI-Powered Detection</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Skin Cancer Detection
            <span className="block mt-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Using Deep Learning
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-cyan-50 mb-8 leading-relaxed">
            Advanced AI-powered skin lesion classification using {MODEL_INFO.fullName} architecture.
            Upload a dermoscopy image to get instant analysis with {MODEL_INFO.accuracy}% accuracy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">{MODEL_INFO.accuracy}%</div>
              <div className="text-sm text-cyan-100 mt-1">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">{MODEL_INFO.f1Score}%</div>
              <div className="text-sm text-cyan-100 mt-1">F1 Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-cyan-100 mt-1">Classes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">&lt;3s</div>
              <div className="text-sm text-cyan-100 mt-1">Analysis</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToUpload}
            className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
          >
            Analyze Image Now
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-cyan-100 mt-6 opacity-80">
            ⚠️ This tool is for educational and research purposes only. Not a substitute for professional medical diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

