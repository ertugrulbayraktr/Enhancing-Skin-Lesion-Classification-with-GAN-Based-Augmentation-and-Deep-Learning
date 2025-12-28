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
        <div className="py-8 bg-white">
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
              <div className="mt-6 max-w-lg mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
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
                    <p className="text-red-800 font-semibold">Analysis Failed</p>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
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
      <footer className="bg-slate-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Skin Cancer Detection</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI-powered skin lesion classification using deep learning for educational and research purposes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#classes" className="hover:text-white transition-colors">
                    Classes
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>PyTorch & SEResNet</li>
                <li>FastAPI Backend</li>
                <li>React & Tailwind CSS</li>
                <li>OpenCV Processing</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Skin Cancer Detection. Educational & Research Use Only.</p>
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
