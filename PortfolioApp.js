import React, { useState, useEffect } from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

const PortfolioApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-center">
          Service Dog Treat Holder Portfolio
        </h1>
        <p className="text-center mt-2">
          A PLA-based design optimized for service dog handlers
        </p>
      </div>
    </div>
  );
};

export default PortfolioApp;