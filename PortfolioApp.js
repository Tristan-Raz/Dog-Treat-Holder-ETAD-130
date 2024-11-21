import React, { useState, useEffect } from 'react';
import { FileText, Image, Box, DollarSign, Lightbulb, Users } from 'lucide-react';

const PortfolioApp = () => {
  const [loading, setLoading] = useState(true);
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

  if (loading) return <div>Loading...</div>;

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
