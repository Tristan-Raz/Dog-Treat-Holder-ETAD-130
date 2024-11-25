import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const VideoPreview = ({ videoId }) => (
  <div className="aspect-video w-full">
    <iframe
      className="w-full h-full rounded-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Product Demo Video"
    />
  </div>
);

const DocumentPreview = ({ title, type }) => (
  <Card className="p-4 flex items-center space-x-4 hover:bg-gray-50 cursor-pointer">
    <div className="bg-gray-100 p-3 rounded-lg">
      {type === 'pdf' ? (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{type.toUpperCase()}</p>
    </div>
  </Card>
);

const PortfolioApp = () => {
  const [activeTab, setActiveTab] = useState("design");

  const documents = [
    { title: "CAP", type: "pdf" },
    { title: "Dog Love", type: "jpg" },
    { title: "Dog Treat Holder", type: "pdf" },
    { title: "Feeding", type: "jpg" },
    { title: "Main Holder", type: "pdf" },
    { title: "Slider Pin", type: "pdf" },
    { title: "Sliding Mechanism", type: "pdf" },
    { title: "Thumbs up", type: "jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold">Service Dog Treat Holder Portfolio</h1>
          <p className="text-gray-600 mt-2">A PLA-based design optimized for service dog handlers</p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Design Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src="/api/placeholder/400/300"
                alt="Design preview"
                className="rounded-lg shadow-md w-full"
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
          </TabsContent>

          <TabsContent value="photos" className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {['Dog Love', 'Feeding', 'Thumbs up'].map((title, index) => (
                <img
                  key={index}
                  src="/api/placeholder/400/300"
                  alt={title}
                  className="rounded-lg shadow-md w-full"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="docs" className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid gap-4">
              {documents.map((doc, index) => (
                <DocumentPreview key={index} title={doc.title} type={doc.type} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demo" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Product Demo</h2>
            <VideoPreview videoId="th5qBq1SDNg" />
          </TabsContent>
        </Tabs>

        {/* Analysis Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cost Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
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

export default PortfolioApp;