import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Camera, BarChart, Play } from 'lucide-react';

const PortfolioApp = () => {
  const [selectedTab, setSelectedTab] = useState("design");

  const portfolioData = {
    title: "Service Dog Treat Holder Portfolio",
    description: "A PLA-based design optimized for service dog handlers",
    designChoices: [
      "Ergonomic grip design for easy handling",
      "Weather-resistant PLA material",
      "Snap-fit mechanism for quick access",
      "Reinforced mounting points"
    ],
    inspiration: [
      "Existing commercial treat pouches",
      "Service dog handler feedback",
      "Modern minimalist design principles"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="border-none shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">{portfolioData.title}</CardTitle>
            <p className="text-gray-600 mt-2">{portfolioData.description}</p>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="design" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Design
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="demo" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Demo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="design">
            <Card>
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Design Choices & Benefits</h3>
                  <ul className="space-y-2">
                    {portfolioData.designChoices.map((choice, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-500 rounded-full" />
                        {choice}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Inspiration & Sources</h3>
                  <ul className="space-y-2">
                    {portfolioData.inspiration.map((source, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Technical Drawings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/api/placeholder/400/300" alt="Assembly View" className="rounded-lg shadow-md" />
                    <img src="/api/placeholder/400/300" alt="Exploded View" className="rounded-lg shadow-md" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <img src="/api/placeholder/400/300" alt="Assembled Product" className="rounded-lg shadow-md" />
                  <img src="/api/placeholder/400/300" alt="Print Bed Setup" className="rounded-lg shadow-md" />
                  <img src="/api/placeholder/400/300" alt="Detail View" className="rounded-lg shadow-md" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Cost Analysis</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="mb-2">Material Cost (Bambu Labs PLA):</p>
                      <ul className="space-y-1">
                        <li>Filament used: 100g</li>
                        <li>Cost per kg: $24.99</li>
                        <li>Total material cost: $2.50</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Target Users</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Designed For:</h4>
                        <ul className="list-disc ml-4">
                          <li>Service dog handlers</li>
                          <li>Professional trainers</li>
                          <li>Active users</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Not Recommended For:</h4>
                        <ul className="list-disc ml-4">
                          <li>Extended outdoor exposure</li>
                          <li>High-impact activities</li>
                          <li>Extreme temperatures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">YouTube demo video placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioApp;