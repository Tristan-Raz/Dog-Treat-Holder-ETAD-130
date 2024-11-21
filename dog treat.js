import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';

const PortfolioPresentation = () => {
  // PLA material cost calculation
  const filamentCost = {
    pricePerKg: 24.99, // Bambu Labs PLA cost
    weightUsed: 150, // grams - replace with actual weight
    supportMaterial: 15, // grams - replace with actual weight
    wasteMaterial: 5, // grams - replace with actual weight
    printTime: 4.5, // hours - replace with actual time
    powerConsumption: 0.15, // kWh - typical 3D printer consumption
    electricityRate: 0.12 // $/kWh - replace with local rate
  };

  const calculateCosts = () => {
    const materialCost = ((filamentCost.weightUsed + filamentCost.supportMaterial + filamentCost.wasteMaterial) / 1000) * filamentCost.pricePerKg;
    const energyCost = filamentCost.printTime * filamentCost.powerConsumption * filamentCost.electricityRate;
    return {
      material: materialCost.toFixed(2),
      energy: energyCost.toFixed(2),
      total: (materialCost + energyCost).toFixed(2)
    };
  };

  const costs = calculateCosts();

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Service Dog Treat Holder Design Portfolio</CardTitle>
          <p className="text-muted-foreground">Designed specifically for service dog handlers using PLA material</p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="design" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="design">
            <FileText className="h-4 w-4 mr-2" />
            Design
          </TabsTrigger>
          <TabsTrigger value="audience">
            <Users className="h-4 w-4 mr-2" />
            Audience
          </TabsTrigger>
          <TabsTrigger value="materials">
            <Lightbulb className="h-4 w-4 mr-2" />
            Materials
          </TabsTrigger>
          <TabsTrigger value="technical">
            <Image className="h-4 w-4 mr-2" />
            Technical
          </TabsTrigger>
          <TabsTrigger value="build">
            <Box className="h-4 w-4 mr-2" />
            Build
          </TabsTrigger>
          <TabsTrigger value="analysis">
            <DollarSign className="h-4 w-4 mr-2" />
            Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Design Choices & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Service Dog-Specific Features</h3>
                  <p className="text-muted-foreground mb-2">Design choices tailored for service dog handlers</p>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    [Your design choice content will go here]
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Handler Benefits</h3>
                  <p className="text-muted-foreground mb-2">Specific benefits for service dog handlers</p>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    [Your benefits content will go here]
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience">
          <Card>
            <CardHeader>
              <CardTitle>Service Dog Handler Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Designed For</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Service dog handlers requiring quick treat access</li>
                    <li>Handlers who need one-handed operation</li>
                    <li>Those requiring discrete treat storage</li>
                    <li>Handlers needing reliable, consistent access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Limitations Section</h3>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    [Your limitations content will go here]
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>PLA Material Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">PLA Properties</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Food-safe material suitable for treat contact</li>
                    <li>Biodegradable and environmentally friendly</li>
                    <li>Sturdy and durable for daily use</li>
                    <li>Easy to clean and maintain</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Material Considerations</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Operating temperature range: 0-60°C</li>
                    <li>Impact resistance suitable for daily carry</li>
                    <li>Non-toxic and safe for handler and dog</li>
                    <li>Recyclable at end of life</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Technical Drawings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      [Your part drawings will go here]
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      [Your assembly diagram will go here]
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Exploded View</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                    [Your exploded view will go here]
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="build">
          <Card>
            <CardHeader>
              <CardTitle>Build Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Dimension Comparison</h3>
                  <table className="w-full mt-4">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Measurement</th>
                        <th className="text-left p-2">Design (mm)</th>
                        <th className="text-left p-2">Actual (mm)</th>
                        <th className="text-left p-2">Deviation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Height</td>
                        <td className="p-2">[Design]</td>
                        <td className="p-2">[Actual]</td>
                        <td className="p-2">[Difference]</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Width</td>
                        <td className="p-2">[Design]</td>
                        <td className="p-2">[Actual]</td>
                        <td className="p-2">[Difference]</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Depth</td>
                        <td className="p-2">[Design]</td>
                        <td className="p-2">[Actual]</td>
                        <td className="p-2">[Difference]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Assembled Product</h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      [Your assembled photos will go here]
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Print Bed Layout</h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      [Your print bed screenshot will go here]
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>Cost & Material Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">PLA Usage</h3>
                  <ul className="space-y-2 mt-4">
                    <li>Primary material: {filamentCost.weightUsed}g</li>
                    <li>Support material: {filamentCost.supportMaterial}g</li>
                    <li>Waste material: {filamentCost.wasteMaterial}g</li>
                    <li>Total material: {filamentCost.weightUsed + filamentCost.supportMaterial + filamentCost.wasteMaterial}g</li>
                    <li>Material efficiency: {((filamentCost.weightUsed / (filamentCost.weightUsed + filamentCost.supportMaterial + filamentCost.wasteMaterial)) * 100).toFixed(1)}%</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">Cost Breakdown</h3>
                  <ul className="space-y-2 mt-4">
                    <li>PLA cost: ${costs.material}</li>
                    <li>Print time: {filamentCost.printTime} hours</li>
                    <li>Energy cost: ${costs.energy}</li>
                    <li>Total cost: ${costs.total}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioPresentation;