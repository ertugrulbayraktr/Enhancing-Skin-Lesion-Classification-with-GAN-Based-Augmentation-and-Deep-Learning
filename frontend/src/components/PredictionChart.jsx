/**
 * Prediction Chart Component
 * Bar chart showing class probabilities
 */

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CLASSES } from '../utils/constants';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PredictionChart = ({ probabilities }) => {
  if (!probabilities) return null;

  // Prepare data for chart
  const classNames = Object.keys(probabilities);
  const values = Object.values(probabilities).map((v) => (v * 100).toFixed(2));
  const colors = classNames.map((className) => CLASSES[className]?.color || '#0891b2');

  const data = {
    labels: classNames,
    datasets: [
      {
        label: 'Probability (%)',
        data: values,
        backgroundColor: colors.map((color) => color + '40'), // 40 = 25% opacity
        borderColor: colors,
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
        grid: {
          color: '#e2e8f0',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-64 md:h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PredictionChart;

