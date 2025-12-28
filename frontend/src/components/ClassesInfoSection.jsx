/**
 * Classes Info Section Component
 * Information about each disease class
 */

import React from 'react';
import { CLASSES, RISK_COLORS } from '../utils/constants';

const ClassesInfoSection = () => {
  const classesArray = Object.entries(CLASSES).map(([key, value]) => ({
    key,
    ...value,
  }));

  return (
    <section id="classes" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Skin Lesion Classes
            </h2>
            <p className="text-lg text-slate-600">
              Understanding the 5 types of skin lesions our model can identify
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {classesArray.map((classInfo) => {
              const riskColors = RISK_COLORS[classInfo.riskLevel];
              
              return (
                <div
                  key={classInfo.key}
                  className={`card border-l-4 ${classInfo.borderColor} hover:shadow-xl transition-shadow duration-200`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-xl font-bold ${classInfo.textColor}`}>
                          {classInfo.name}
                        </h3>
                        <span
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded"
                        >
                          {classInfo.shortName}
                        </span>
                      </div>
                      <span
                        className={`inline-block px-3 py-1 ${riskColors.bg} ${riskColors.text} text-sm font-semibold rounded-full`}
                      >
                        {classInfo.riskLevel} Risk
                      </span>
                    </div>
                    
                    {/* Color Indicator */}
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0 shadow-md"
                      style={{ backgroundColor: classInfo.color }}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {classInfo.description}
                  </p>

                  {/* Additional Info based on risk level */}
                  {classInfo.riskLevel === 'High' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-2">
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
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <p className="text-sm text-red-700">
                          <strong>Urgent:</strong> Seek immediate medical evaluation if suspected.
                        </p>
                      </div>
                    </div>
                  )}

                  {classInfo.riskLevel === 'Medium' && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"
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
                        <p className="text-sm text-orange-700">
                          <strong>Monitor:</strong> Regular check-ups recommended.
                        </p>
                      </div>
                    </div>
                  )}

                  {classInfo.riskLevel === 'Low' && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                        <p className="text-sm text-green-700">
                          <strong>Generally benign:</strong> Routine monitoring is usually sufficient.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* General Advice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent-teal/10 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
              General Recommendations
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Regular Check-ups</h4>
                <p className="text-sm text-slate-600">
                  Schedule routine skin examinations with a dermatologist
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Sun Protection</h4>
                <p className="text-sm text-slate-600">
                  Use sunscreen and protective clothing to prevent skin damage
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Monitor Changes</h4>
                <p className="text-sm text-slate-600">
                  Watch for changes in size, shape, color, or symptoms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesInfoSection;

