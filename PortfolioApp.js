import React from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const getTreatHolderData = () => ({
  measurements: {
    height: { design: 120, actual: 119.5 },
    width: { design: 80, actual: 80.2 },
    depth: { design: 40, actual: 39.8 }
  },
  costs: {
    pricePerKg: 24.99,
    weightUsed: 150,
    supportMaterial: 15,
    wasteMaterial: 5,
    printTime: 4.5,
    powerConsumption: 0.15,
    electricityRate: 0.12
  }
});

const PortfolioApp = () => {
  const data = getTreatHolderData();

  const calculateDeviation = (design, actual) => {
    const diff = (actual - design).toFixed(1);
    return `${diff > 0 ? '+' : ''}${diff}`;
  };

  const calculateCosts = () => {
    const { pricePerKg, weightUsed, supportMaterial, wasteMaterial, printTime, powerConsumption, electricityRate } = data.costs;
    const materialCost = ((weightUsed + supportMaterial + wasteMaterial) / 1000) * pricePerKg;
    const energyCost = printTime * powerConsumption * electricityRate;
    return {
      material: materialCost.toFixed(2),
      energy: energyCost.toFixed(2),
      total: (materialCost + energyCost).toFixed(2)
    };
  };

  const tabData = [
    { value: 'design', Icon: FileText, label: 'Design' },
    { value: 'audience', Icon: Users, label: 'Audience' },
    { value: 'materials', Icon: Lightbulb, label: 'Materials' },
    { value: 'technical', Icon: Image, label: 'Technical' },
    { value: 'build', Icon: Box, label: 'Build' },
    { value: 'analysis', Icon: DollarSign, label: 'Analysis' }
  ];

  const costs = calculateCosts();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Service Dog Treat Holder Portfolio</h1>
        <p className="text-gray-600">A PLA-based design optimized for service dog handlers</p>
      </div>

      <Tabs defaultValue="design" className="w-full">
        <TabsList className="flex space-x-2 border-b border-gray-200 mb-4">
          {tabData.map(({ value, Icon, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="design" className="p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>One-handed operation design</li>
                <li>Quick-access mechanism</li>
                <li>Secure closure system</li>
                <li>Ergonomic grip design</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Handler Benefits</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improved treat accessibility</li>
                <li>Reduced training interruptions</li>
                <li>Enhanced handling efficiency</li>
                <li>Durable daily use design</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="p-4 border rounded-lg">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Target Users</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service dog handlers requiring quick treat access</li>
                <li>Handlers who need one-handed operation</li>
                <li>Those requiring discrete treat storage</li>
                <li>Handlers needing reliable access</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="materials" className="p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">PLA Properties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Food-safe material</li>
                <li>Biodegradable</li>
                <li>Sturdy and durable</li>
                <li>Easy to clean</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Material Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Temperature range: 0-60°C</li>
                <li>Impact resistant</li>
                <li>Non-toxic</li>
                <li>Recyclable</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="p-4 border rounded-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Detailed specifications will be displayed here</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Technical drawings will be displayed here</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="build" className="p-4 border rounded-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Build Measurements</h3>
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-2 text-left">Measurement</th>
                  <th className="border p-2 text-left">Design (mm)</th>
                  <th className="border p-2 text-left">Actual (mm)</th>
                  <th className="border p-2 text-left">Deviation</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data.measurements).map(([dimension, values]) => (
                  <tr key={dimension}>
                    <td className="border p-2 capitalize">{dimension}</td>
                    <td className="border p-2">{values.design}</td>
                    <td className="border p-2">{values.actual}</td>
                    <td className="border p-2">{calculateDeviation(values.design, values.actual)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Material Usage</h3>
              <ul className="space-y-2">
                <li>Primary material: {data.costs.weightUsed}g</li>
                <li>Support material: {data.costs.supportMaterial}g</li>
                <li>Waste material: {data.costs.wasteMaterial}g</li>
                <li>Total material: {data.costs.weightUsed + data.costs.supportMaterial + data.costs.wasteMaterial}g</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cost Analysis</h3>
              <ul className="space-y-2">
                <li>Material cost: ${costs.material}</li>
                <li>Print time: {data.costs.printTime} hours</li>
                <li>Energy cost: ${costs.energy}</li>
                <li>Total cost: ${costs.total}</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioApp;