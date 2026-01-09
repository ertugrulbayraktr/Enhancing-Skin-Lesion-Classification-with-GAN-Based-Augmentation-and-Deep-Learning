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
    <section className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent-teal opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30 shadow-glow">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-glow"></span>
            <span className="text-sm font-medium text-white">AI-Powered Detection</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Enhancing Skin Lesion Classification
            <span className="block mt-2 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent bg-200 animate-gradient">
              with GAN-Based Augmentation and Deep Learning
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-cyan-50 mb-8 leading-relaxed drop-shadow-lg">
            Advanced AI-powered skin lesion classification using {MODEL_INFO.fullName} with ACGAN-based augmentation.
            Upload a dermoscopy image to get instant analysis with {MODEL_INFO.accuracy}% accuracy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-glow">
              <div className="text-3xl font-bold text-white">{MODEL_INFO.accuracy}%</div>
              <div className="text-sm text-cyan-100 mt-1">Accuracy</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-glow">
              <div className="text-3xl font-bold text-white">{MODEL_INFO.f1Score}%</div>
              <div className="text-sm text-cyan-100 mt-1">F1 Score</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-glow">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-cyan-100 mt-1">Classes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-glow">
              <div className="text-3xl font-bold text-white">&lt;3s</div>
              <div className="text-sm text-cyan-100 mt-1">Analysis</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToUpload}
            className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-glow-lg hover:shadow-glow hover:scale-110 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-cyan-50"
          >
            Analyze Image Now
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-cyan-100 mt-6 opacity-90 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            This tool is for educational and research purposes only. Not a substitute for professional medical diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

