/**
 * Results Section Component
 * Display prediction results with visualization
 */

import React from 'react';
import { CLASSES, RISK_COLORS } from '../utils/constants';
import PredictionChart from './PredictionChart';
import ImageProcessingPreview from './ImageProcessingPreview';

const ResultsSection = ({ results, originalImage }) => {
  if (!results) return null;

  const classInfo = CLASSES[results.predicted_class];
  const riskColors = RISK_COLORS[classInfo.riskLevel];

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center">
            Analysis Results
          </h2>

          {/* Image Processing Preview */}
          {results.processing?.processed_image && (
            <ImageProcessingPreview
              originalImage={originalImage}
              processedImage={results.processing.processed_image}
            />
          )}

          {/* Main Result Card */}
          <div className="card mt-8">
            {/* Predicted Class */}
            <div className="text-center mb-8 pb-8 border-b border-slate-200">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                <span className="text-sm font-medium text-slate-600">Predicted Class</span>
              </div>
              
              <h3
                className={`text-4xl md:text-5xl font-bold mb-3 ${classInfo.textColor}`}
              >
                {classInfo.name}
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className={`px-4 py-1 ${riskColors.bg} ${riskColors.text} rounded-full font-semibold text-sm`}>
                  {classInfo.riskLevel} Risk
                </span>
                <span className="px-4 py-1 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm">
                  {results.predicted_class}
                </span>
              </div>

              {/* Confidence */}
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-2xl font-bold text-slate-700">
                  {(results.confidence * 100).toFixed(2)}%
                </span>
                <span className="text-slate-500">Confidence</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 max-w-md mx-auto">
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${riskColors.badge} transition-all duration-1000 ease-out`}
                    style={{ width: `${results.confidence * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                {classInfo.description}
              </p>
            </div>

            {/* Probabilities Chart */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-slate-700 mb-6 text-center">
                All Class Probabilities
              </h4>
              <PredictionChart probabilities={results.probabilities} />
            </div>

            {/* Detailed Probabilities */}
            <div className="mt-8 space-y-3">
              {Object.entries(results.probabilities)
                .sort(([, a], [, b]) => b - a)
                .map(([className, prob]) => {
                  const info = CLASSES[className];
                  return (
                    <div
                      key={className}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: info.color }}
                        ></div>
                        <span className="font-medium text-slate-700">{info.name}</span>
                        <span className="text-sm text-slate-500">({className})</span>
                      </div>
                      <span className="font-bold text-slate-700">
                        {(prob * 100).toFixed(2)}%
                      </span>
                    </div>
                  );
                })}
            </div>

            {/* Model Info */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-blue-800 font-medium">
                    Model: SEResNet • Accuracy: {results.model_info?.accuracy ? (results.model_info.accuracy * 100).toFixed(2) : '97.23'}%
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    This is an AI prediction. Always consult a healthcare professional for medical advice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Analyze Another Image
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-secondary"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

