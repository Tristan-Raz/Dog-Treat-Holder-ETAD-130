// src/App.jsx
import React, { useState } from 'react';
import { VideoPreview } from './components/VideoPreview';
import { DocumentPreview } from './components/DocumentPreview';

const App = () => {
  const [activeTab, setActiveTab] = useState("design");

  const documents = [
    { title: "Cap", type: "jpg", file: "/images/Cap.jpg" },
    { title: "Dog love", type: "jpg", file: "/images/Dog love.jpg" },
    { title: "Dog Treat Holder", type: "jpg", file: "/images/Dog Treat Holder.jpg" },
    { title: "Feeding", type: "jpg", file: "/images/Feeding.jpg" },
    { title: "Main Holder", type: "jpg", file: "/images/Main Holder.jpg" },
    { title: "Slider Pin", type: "jpg", file: "/images/Slider Pin.jpg" },
    { title: "Sliding Mechanism", type: "jpg", file: "/images/Sliding Mechanism.jpg" },
    { title: "Thumbs up", type: "jpg", file: "/images/Thumbs up.jpg" },
    { title: "Holder Exploded", type: "jpg", file: "/images/Holder Exploded.jpg" }
  ];

  const tabs = [
    { id: 'design', label: 'Design' },
    { id: 'photos', label: 'Photos' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'docs', label: 'Documents' },
    { id: 'demo', label: 'Demo' }
  ];

  // Handle image click to open in new tab
  const handleImageClick = (image) => {
    window.open(image.file, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold">Service Dog Treat Holder Portfolio</h1>
          <p className="text-gray-600 mt-2">A PLA-based design optimized for service dog handlers</p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-5 gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-50'
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
                <img
                  src="/images/Dog Treat Holder.jpg"
                  alt="Design preview"
                  className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer hover:shadow-xl transition-shadow duration-200"
                  onClick={() => handleImageClick(documents[2])}
                />
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Ergonomic grip design for comfortable handling</li>
                    <li>Weather-resistant PLA material for durability</li>
                    <li>Snap-fit mechanism for secure closure</li>
                    <li>Reinforced attachment points for reliability</li>
                    <li>Easy-clean surface finish for maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "photos" && (
            <div className="grid md:grid-cols-3 gap-4">
              {documents.map((image, index) => (
                <div key={index} className="group relative aspect-square">
                  <img
                    src={image.file}
                    alt={image.title}
                    className="rounded-lg shadow-md w-full h-full object-cover cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                    onClick={() => handleImageClick(image)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "analysis" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Cost Analysis</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Material Cost (Bambu Labs PLA):</p>
                <ul className="mt-2 space-y-1">
                  <li>Filament used: 100g</li>
                  <li>Cost per kg: $24.99</li>
                  <li>Total material cost: $2.50</li>
                  <li>Print time: 4.5 hours</li>
                  <li>Energy consumption: 0.3 kWh</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold">Target Market Analysis:</p>
                <ul className="mt-2 space-y-1">
                  <li>Primary: Service dog handlers</li>
                  <li>Secondary: Professional trainers</li>
                  <li>Market size: 500,000+ potential users</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "docs" && (
            <div className="grid gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(doc)}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 flex items-center space-x-4 cursor-pointer"
                >
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{doc.title}</p>
                    <p className="text-sm text-gray-500">{doc.type.toUpperCase()}</p>
                  </div>
                  <div className="text-blue-500 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "demo" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Product Demo</h2>
              <VideoPreview videoId="th5qBq1SDNg" />
            </div>
          )}
        </div>

        {/* Analysis Section always visible */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Material Specifications:</p>
              <ul className="mt-2 space-y-1">
                <li>Filament used: 100g</li>
                <li>Cost per kg: $24.99</li>
                <li>Total material cost: $2.50</li>
                <li>Print time: 4.5 hours</li>
                <li>Energy consumption: 0.3 kWh</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold">Market Analysis:</p>
              <ul className="mt-2 space-y-1">
                <li>Primary market: Service dog handlers</li>
                <li>Secondary market: Professional trainers</li>
                <li>Estimated market size: 500,000+ potential users</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// src/components/VideoPreview.jsx
export const VideoPreview = ({ videoId }) => (
  <div className="aspect-video w-full">
    <iframe
      className="w-full h-full rounded-lg shadow-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Product Demo Video"
    />
  </div>
);