import React, { useState, useEffect } from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

const PortfolioApp = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('design');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = {
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
      };
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  const calculateDeviation = (design, actual) => {
    const diff = (actual - design).toFixed(1);
    return `${diff > 0 ? '+' : ''}${diff}`;
  };

  const calculateCosts = () => {
    if (!data) return { material: '0.00', energy: '0.00', total: '0.00' };

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

  if (loading) return <LoadingSpinner />;

  const costs = calculateCosts();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Service Dog Treat Holder Portfolio</h1>
          <p className="text-gray-600 text-center mt-2">A PLA-based design optimized for service dog handlers</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {tabData.map(({ value, Icon, label }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${
                  activeTab === value 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'design' && (
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
            )}

            {activeTab === 'analysis' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4">Material Usage</h3>
                  <ul className="space-y-2">
                    <li>Primary material: {data.costs.weightUsed}g</li>
                    <li>Support material: {data.costs.supportMaterial}g</li>
                    <li>Waste material: {data.costs.wasteMaterial}g</li>
                    <li>Total material: {data.costs.weightUsed + data.costs.supportMaterial + data.costs.wasteMaterial}g</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4">Cost Analysis</h3>
                  <ul className="space-y-2">
                    <li>Material cost: ${costs.material}</li>
                    <li>Print time: {data.costs.printTime} hours</li>
                    <li>Energy cost: ${costs.energy}</li>
                    <li>Total cost: ${costs.total}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Other tab content... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioApp;