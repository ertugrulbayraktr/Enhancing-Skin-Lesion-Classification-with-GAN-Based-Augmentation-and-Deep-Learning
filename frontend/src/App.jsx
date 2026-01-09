/**
 * Main App Component
 * Skin Cancer Detection Application
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UploadSection from './components/UploadSection';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsSection from './components/ResultsSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ClassesInfoSection from './components/ClassesInfoSection';
import { predictImage } from './services/api';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStage, setLoadingStage] = useState('preparing');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleImageSelect = (file, preview) => {
    setSelectedFile(file);
    setSelectedImage(file);
    setSelectedImagePreview(preview);
    setResults(null);
    setError(null);
  };

  const handleClearResults = () => {
    // Clear everything - return to initial state
    setResults(null);
    setError(null);
    setSelectedImage(null);
    setSelectedImagePreview(null);
    setSelectedFile(null);
    
    // Scroll to upload section
    setTimeout(() => {
      document.getElementById('upload-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 100);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError(null);
    setResults(null);

    try {
      // Stage 1: Preparing
      setLoadingStage('preparing');
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Stage 2: Removing hair
      setLoadingStage('removing_hair');

      // Stage 3: Analyzing
      setLoadingStage('analyzing');

      // Make API call
      const response = await predictImage(selectedFile);

      // Set results
      setResults(response);
      setLoadingStage('complete');

      // Scroll to results
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Upload Section */}
      <UploadSection
        onImageSelect={handleImageSelect}
        selectedImage={selectedImagePreview}
        onClearResults={handleClearResults}
      />

      {/* Analyze Button */}
      {selectedImage && !results && (
        <div className="py-8 bg-dark-bg">
          <div className="container-custom text-center">
            {!isAnalyzing ? (
              <button
                onClick={handleAnalyze}
                className="btn-primary text-lg px-12 py-4 shadow-xl hover:shadow-2xl"
              >
                Analyze Image
              </button>
            ) : (
              <LoadingSpinner stage={loadingStage} />
            )}

            {error && (
              <div className="mt-6 max-w-lg mx-auto p-4 bg-red-500/20 border border-red-500 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-red-200 font-semibold">Analysis Failed</p>
                    <p className="text-red-300 text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results Section */}
      {results && (
        <div id="results-section">
          <ResultsSection results={results} originalImage={selectedImagePreview} />
        </div>
      )}

      {/* Information Sections */}
      <AboutSection />
      <HowItWorksSection />
      <ClassesInfoSection />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-dark-bg to-slate-950 text-white py-12 border-t border-dark-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Enhancing Skin Lesion Classification</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI-powered skin lesion classification using Enhanced SE-ResNet with GAN-based augmentation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#classes" className="hover:text-primary transition-colors">
                    Classes
                  </a>
                </li>
                <li className="pt-2 border-t border-dark-border">
                  <a 
                    href="https://github.com/Furkan-21/Enhanced-SE-ResNet-ACGAN-Lesion-Classification" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Model Repository
                  </a>
                </li>
              </ul>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Team Members</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center flex-shrink-0 shadow-glow">
                    <span className="text-white font-bold text-sm">EB</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ertuğrul Bayraktar</p>
                    <p className="text-slate-400 text-xs">Software Engineer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-teal to-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                    <span className="text-white font-bold text-sm">AF</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ahmet Furkan Öztürk</p>
                    <p className="text-slate-400 text-xs">Artificial Intelligence Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-dark-border pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Enhancing Skin Lesion Classification. Educational & Research Use Only.</p>
            <p className="mt-2">
              Not a medical device. Always consult healthcare professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
