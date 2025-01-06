import React from 'react';
import { BarChart, Activity, TrendingUp } from 'lucide-react';

export default function StatsPreview() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advanced Analytics Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
            <p className="text-gray-600">Track player efficiency, shooting percentages, and advanced statistics in real-time.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Comparisons</h3>
            <p className="text-gray-600">Compare team statistics, head-to-head records, and historical performance data.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Predictive Analysis</h3>
            <p className="text-gray-600">Get AI-powered predictions and insights based on historical data and current form.</p>
          </div>
        </div>
      </div>
    </div>
  );
}