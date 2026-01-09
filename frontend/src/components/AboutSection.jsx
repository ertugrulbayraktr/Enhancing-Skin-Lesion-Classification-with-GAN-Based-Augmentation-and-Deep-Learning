/**
 * About Section Component
 * Project information and details
 */

import React from 'react';
import { MODEL_INFO } from '../utils/constants';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-dark-bg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              About This Project
            </h2>
            <p className="text-lg text-slate-300">
              AI-powered skin lesion classification for early detection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Overview */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Overview</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                This web application uses deep learning to classify skin lesions into 5 different categories.
                Built with {MODEL_INFO.fullName} and ACGAN-based augmentation, it achieves {MODEL_INFO.accuracy}%
                accuracy on the HAM10000 dataset with enhanced multi-stage SE blocks and residual connections.
              </p>
            </div>

            {/* Technology */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Technology</h3>
              </div>
              <div className="space-y-2 text-slate-300">
                <p><span className="font-semibold">Backend:</span> FastAPI + PyTorch</p>
                <p><span className="font-semibold">Frontend:</span> React + Tailwind CSS</p>
                <p><span className="font-semibold">Model:</span> {MODEL_INFO.name} + ACGAN</p>
                <p><span className="font-semibold">Preprocessing:</span> Black-hat transform & inpainting</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Performance</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-dark-bg/50 rounded-lg border border-dark-border hover:border-primary/30 transition-all">
                  <p className="text-2xl font-bold text-primary">{MODEL_INFO.accuracy}%</p>
                  <p className="text-sm text-slate-400">Accuracy</p>
                </div>
                <div className="p-3 bg-dark-bg/50 rounded-lg border border-dark-border hover:border-primary/30 transition-all">
                  <p className="text-2xl font-bold text-primary">{MODEL_INFO.f1Score}%</p>
                  <p className="text-sm text-slate-400">F1 Score</p>
                </div>
                <div className="p-3 bg-dark-bg/50 rounded-lg border border-dark-border hover:border-primary/30 transition-all">
                  <p className="text-2xl font-bold text-primary">{MODEL_INFO.precision}%</p>
                  <p className="text-sm text-slate-400">Precision</p>
                </div>
                <div className="p-3 bg-dark-bg/50 rounded-lg border border-dark-border hover:border-primary/30 transition-all">
                  <p className="text-2xl font-bold text-primary">{MODEL_INFO.recall}%</p>
                  <p className="text-sm text-slate-400">Recall</p>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Purpose</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                This tool is designed for educational and research purposes. It demonstrates the application
                of deep learning in medical image analysis and serves as a portfolio project showcasing
                modern web development and ML integration.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-500/20 border-l-4 border-yellow-400 rounded-r-lg backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-1">Important Disclaimer</h4>
                <p className="text-sm text-yellow-200/90">
                  This application is NOT a medical device and should NOT be used for actual medical diagnosis.
                  Always consult with qualified healthcare professionals for any skin concerns. Early detection
                  and professional medical evaluation are crucial for skin cancer treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

