import React, { useState } from 'react';

function PortfolioApp() {
  const [activeTab, setActiveTab] = useState("design");

  const portfolioData = {
    designImages: [
      "/path/to/design1.jpg",
      "/path/to/design2.jpg"
    ],
    productPhotos: [
      "/path/to/photo1.jpg",
      "/path/to/photo2.jpg"
    ],
    youtubeEmbedId: "your-video-id-here"
  };

  const tabs = [
    { id: 'design', label: 'Design' },
    { id: 'photos', label: 'Photos' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'demo', label: 'Demo' }
  ];

  const YouTubeEmbed = ({ embedId }) => (
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

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
                <div className="space-y-4">
                  {portfolioData.designImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Design view ${index + 1}`}
                      className="rounded shadow w-full"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-4">
                    <li>Ergonomic grip design</li>
                    <li>Weather-resistant PLA material</li>
                    <li>Snap-fit mechanism</li>
                    <li>Reinforced attachment points</li>
                    <li>Easy-clean surface finish</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "photos" && (
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.productPhotos.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product photo ${index + 1}`}
                  className="rounded shadow w-full"
                />
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

          {activeTab === "demo" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Product Demo</h2>
              <YouTubeEmbed embedId={portfolioData.youtubeEmbedId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioApp;