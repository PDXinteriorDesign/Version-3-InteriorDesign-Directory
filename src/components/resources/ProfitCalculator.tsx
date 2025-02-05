import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Percent } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    projectFee: '',
    materialCost: '',
    laborHours: '',
    hourlyRate: '',
    overheadPercent: ''
  });

  const [result, setResult] = useState<{
    revenue: number;
    costs: number;
    profit: number;
    margin: number;
  } | null>(null);

  const calculateProfit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const revenue = parseFloat(formData.projectFee);
    const materials = parseFloat(formData.materialCost);
    const labor = parseFloat(formData.laborHours) * parseFloat(formData.hourlyRate);
    const overhead = (revenue * parseFloat(formData.overheadPercent)) / 100;
    
    const totalCosts = materials + labor + overhead;
    const profit = revenue - totalCosts;
    const margin = (profit / revenue) * 100;

    setResult({
      revenue,
      costs: totalCosts,
      profit,
      margin
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Calculator className="w-12 h-12 mx-auto mb-4 text-sage-600" />
          <h2 className="text-3xl font-serif mb-4">Job Profit Calculator</h2>
          <p className="text-gray-600">
            Calculate your project's potential profit and margin to ensure your pricing strategy is optimal
          </p>
        </div>

        <form onSubmit={calculateProfit} className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline-block mr-1" />
              Project Fee
            </label>
            <input
              type="number"
              name="projectFee"
              required
              min="0"
              step="0.01"
              value={formData.projectFee}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              placeholder="5000.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline-block mr-1" />
              Material Costs
            </label>
            <input
              type="number"
              name="materialCost"
              required
              min="0"
              step="0.01"
              value={formData.materialCost}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              placeholder="2000.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline-block mr-1" />
              Labor Hours
            </label>
            <input
              type="number"
              name="laborHours"
              required
              min="0"
              step="0.5"
              value={formData.laborHours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              placeholder="40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline-block mr-1" />
              Hourly Rate
            </label>
            <input
              type="number"
              name="hourlyRate"
              required
              min="0"
              step="0.01"
              value={formData.hourlyRate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              placeholder="75.00"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Percent className="w-4 h-4 inline-block mr-1" />
              Overhead Percentage
            </label>
            <input
              type="number"
              name="overheadPercent"
              required
              min="0"
              max="100"
              step="0.1"
              value={formData.overheadPercent}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
              placeholder="20"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              Calculate Profit
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-center">Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1">Revenue</p>
                <p className="text-xl font-semibold">${result.revenue.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1">Total Costs</p>
                <p className="text-xl font-semibold">${result.costs.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1">Profit</p>
                <p className="text-xl font-semibold text-green-600">${result.profit.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1">Profit Margin</p>
                <p className="text-xl font-semibold">{result.margin.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};