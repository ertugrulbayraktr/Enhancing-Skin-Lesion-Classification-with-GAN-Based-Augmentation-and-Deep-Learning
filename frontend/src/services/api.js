/**
 * API Service for backend communication
 */

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Check API health status
 */
export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

/**
 * Get model information
 */
export const getModelInfo = async () => {
  try {
    const response = await apiClient.get('/model-info');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch model info:', error);
    throw error;
  }
};

/**
 * Get class information
 */
export const getClassesInfo = async () => {
  try {
    const response = await apiClient.get('/classes');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch classes info:', error);
    throw error;
  }
};

/**
 * Predict skin lesion class from image
 * @param {File} imageFile - Image file to analyze
 * @param {Function} onUploadProgress - Optional progress callback
 */
export const predictImage = async (imageFile, onUploadProgress = null) => {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await apiClient.post('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onUploadProgress,
    });

    return response.data;
  } catch (error) {
    console.error('Prediction failed:', error);
    if (error.response) {
      // Server responded with error
      throw new Error(error.response.data.detail || 'Prediction failed');
    } else if (error.request) {
      // No response received
      throw new Error('No response from server. Please check if the backend is running.');
    } else {
      // Other errors
      throw new Error('Failed to send request: ' + error.message);
    }
  }
};

export default {
  checkHealth,
  getModelInfo,
  getClassesInfo,
  predictImage,
};

