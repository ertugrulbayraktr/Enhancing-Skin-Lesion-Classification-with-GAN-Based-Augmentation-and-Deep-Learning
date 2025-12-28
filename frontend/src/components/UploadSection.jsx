/**
 * Upload Section Component
 * Drag-drop file upload with preview
 */

import React, { useState, useRef } from 'react';
import { FILE_CONSTRAINTS } from '../utils/constants';
import ExampleImages from './ExampleImages';

const UploadSection = ({ onImageSelect, selectedImage, onClearResults }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    // Check file type
    if (!FILE_CONSTRAINTS.acceptedFormats.includes(file.type)) {
      return 'Please upload a JPEG or PNG image';
    }

    // Check file size
    if (file.size > FILE_CONSTRAINTS.maxSize) {
      return `File size must be less than ${FILE_CONSTRAINTS.maxSize / (1024 * 1024)}MB`;
    }

    return null;
  };

  const handleFile = (file) => {
    const error = validateFile(file);
    if (error) {
      setError(error);
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageSelect(file, e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleExampleSelect = async (examplePath) => {
    try {
      const response = await fetch(examplePath);
      const blob = await response.blob();
      const file = new File([blob], examplePath.split('/').pop(), { type: 'image/jpeg' });
      
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageSelect(file, e.target.result);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('Failed to load example image');
    }
  };

  const handleChangeImage = () => {
    // Clear everything and return to initial upload state
    if (onClearResults) {
      onClearResults();
    }
    // Note: No need to click file input - user can now choose between
    // browsing files or selecting examples
  };

  return (
    <section id="upload-section" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Upload Image for Analysis
            </h2>
            <p className="text-lg text-slate-600">
              Upload a dermoscopy image or select an example to get started
            </p>
          </div>

          {/* Upload Area */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative border-3 border-dashed rounded-2xl p-8 md:p-12 transition-all duration-200 ${
              isDragging
                ? 'border-primary bg-primary/5 scale-105'
                : 'border-slate-300 hover:border-primary hover:bg-slate-50'
            }`}
          >
            {!selectedImage ? (
              <div className="text-center">
                {/* Upload Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent-teal mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {isDragging ? 'Drop your image here' : 'Drag & drop your image'}
                </h3>
                <p className="text-slate-500 mb-6">
                  or click to browse your files
                </p>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-primary"
                >
                  Select Image
                </button>

                <p className="text-sm text-slate-400 mt-4">
                  Supported: JPEG, PNG • Max size: 10MB
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept={FILE_CONSTRAINTS.acceptedFormats.join(',')}
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Preview */}
                <div className="relative max-w-md mx-auto">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full shadow">
                      Ready
                    </span>
                  </div>
                </div>

                {/* Change Image Button */}
                <div className="text-center">
                  <button
                    onClick={handleChangeImage}
                    className="btn-secondary"
                  >
                    Change Image
                  </button>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm text-center">{error}</p>
              </div>
            )}
          </div>

          {/* Example Images */}
          {!selectedImage && <ExampleImages onSelectExample={handleExampleSelect} />}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;

