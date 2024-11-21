import React from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

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
      <div className="card text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Service Dog Treat Holder Portfolio</h1>
        <p className="text-gray-600">A PLA-based design optimized for service dog handlers</p>
      </div>

      <Tabs.Root defaultValue="design" className="w-full">
        <Tabs.List className="tab-container">
          {tabData.map(({ value, Icon, label }) => (
            <Tabs.Trigger
              key={value}
              value={value}
              className="tab flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="design" className="card">
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
        </Tabs.Content>

        {/* Add other tab contents similarly */}
      </Tabs.Root>
    </div>
  );
};

export default PortfolioApp;