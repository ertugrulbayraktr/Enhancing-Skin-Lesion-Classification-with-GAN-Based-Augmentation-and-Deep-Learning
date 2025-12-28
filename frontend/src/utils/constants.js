/**
 * Application constants
 */

// Class information with medical details
export const CLASSES = {
  NV: {
    name: 'Melanocytic Nevi',
    shortName: 'NV',
    description: 'Benign moles. Common skin lesions that are usually harmless and non-cancerous.',
    riskLevel: 'Low',
    color: '#10b981', // Green
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-500',
  },
  MEL: {
    name: 'Melanoma',
    shortName: 'MEL',
    description: 'Malignant skin cancer. The most dangerous form of skin cancer that requires immediate medical attention.',
    riskLevel: 'High',
    color: '#ef4444', // Red
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-500',
  },
  BKL: {
    name: 'Benign Keratosis',
    shortName: 'BKL',
    description: 'Benign skin lesion. Non-cancerous growths on the skin surface, commonly seen with aging.',
    riskLevel: 'Low',
    color: '#10b981', // Green
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-500',
  },
  BCC: {
    name: 'Basal Cell Carcinoma',
    shortName: 'BCC',
    description: 'Common skin cancer. Slow-growing and highly treatable when detected early.',
    riskLevel: 'Medium',
    color: '#f59e0b', // Orange
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-500',
  },
  AKIEC: {
    name: 'Actinic Keratosis',
    shortName: 'AKIEC',
    description: 'Pre-cancerous lesion. Rough, scaly patches on sun-exposed skin that should be monitored regularly.',
    riskLevel: 'Medium',
    color: '#f59e0b', // Orange
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-500',
  },
};

// Risk level colors
export const RISK_COLORS = {
  Low: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    badge: 'bg-green-500',
  },
  Medium: {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    badge: 'bg-orange-500',
  },
  High: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    badge: 'bg-red-500',
  },
};

// Example images for demonstration
export const EXAMPLE_IMAGES = [
  {
    id: 1,
    path: '/examples/example1.jpg',
    title: 'Example 1',
  },
  {
    id: 2,
    path: '/examples/example2.jpeg',
    title: 'Example 2',
  },
  {
    id: 3,
    path: '/examples/example3.jpeg',
    title: 'Example 3',
  },
  {
    id: 4,
    path: '/examples/example4.jpeg',
    title: 'Example 4',
  },
  {
    id: 5,
    path: '/examples/example5.jpeg',
    title: 'Example 5',
  },
  {
    id: 6,
    path: '/examples/example6.jpeg',
    title: 'Example 6',
  },
];

// Loading messages for different stages
export const LOADING_MESSAGES = {
  preparing: 'Preparing image...',
  removing_hair: 'Removing hair artifacts...',
  analyzing: 'Analyzing with AI model...',
  complete: 'Analysis complete!',
};

// Model information
export const MODEL_INFO = {
  name: 'SEResNet',
  fullName: 'Squeeze-and-Excitation ResNet',
  accuracy: 97.23,
  f1Score: 95.39,
  precision: 95.83,
  recall: 94.99,
};

// File upload constraints
export const FILE_CONSTRAINTS = {
  maxSize: 10 * 1024 * 1024, // 10 MB
  acceptedFormats: ['image/jpeg', 'image/jpg', 'image/png'],
  acceptedExtensions: ['.jpg', '.jpeg', '.png'],
};

// API configuration
export const API_CONFIG = {
  baseURL: 'http://localhost:8000/api',
  timeout: 30000, // 30 seconds
};

export default {
  CLASSES,
  RISK_COLORS,
  EXAMPLE_IMAGES,
  LOADING_MESSAGES,
  MODEL_INFO,
  FILE_CONSTRAINTS,
  API_CONFIG,
};

