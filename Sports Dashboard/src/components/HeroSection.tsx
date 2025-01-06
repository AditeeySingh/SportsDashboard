import React from 'react';
import { TrendingUp, Activity, Users, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  { 
    icon: TrendingUp, 
    title: 'Live Updates', 
    description: 'Real-time score tracking and match statistics' 
  },
  { 
    icon: Activity, 
    title: 'Performance', 
    description: 'Comprehensive player and team statistics' 
  },
  { 
    icon: Users, 
    title: 'Team Analysis', 
    description: 'In-depth squad performance metrics and trends' 
  },
  { 
    icon: BarChart3, 
    title: 'Analytics', 
    description: 'Advanced data insights and predictions' 
  },
];

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Real-Time Sports Analytics Dashboard
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get instant insights into player performance, match statistics, and team analytics with our cutting-edge dashboard.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border border-blue-400 hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}