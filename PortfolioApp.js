import React, { useState, useEffect } from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';


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