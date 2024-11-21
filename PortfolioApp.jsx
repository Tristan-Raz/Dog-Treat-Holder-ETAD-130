import React, { useState } from 'react';

function PortfolioApp() {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: 'design', label: 'Design' },
    { id: 'photos', label: 'Photos' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'demo', label: 'Demo' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold">Service Dog Treat Holder Portfolio</h1>
          <p className="text-gray-600 mt-2">A PLA-based design optimized for service dog handlers</p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-4 gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-2 rounded-lg ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === "design" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Design Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <img src="/api/placeholder/400/300" alt="Design" className="rounded shadow" />
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-4">
                    <li>Ergonomic grip design</li>
                    <li>Weather-resistant PLA material</li>
                    <li>Snap-fit mechanism</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "photos" && (
            <div className="grid md:grid-cols-2 gap-4">
              <img src="/api/placeholder/400/300" alt="Product Photo 1" className="rounded shadow" />
              <img src="/api/placeholder/400/300" alt="Product Photo 2" className="rounded shadow" />
            </div>
          )}

          {activeTab === "analysis" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Cost Analysis</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p>Material Cost (Bambu Labs PLA):</p>
                <ul className="mt-2">
                  <li>Filament used: 100g</li>
                  <li>Cost per kg: $24.99</li>
                  <li>Total cost: $2.50</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "demo" && (
            <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Demo video coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioApp;