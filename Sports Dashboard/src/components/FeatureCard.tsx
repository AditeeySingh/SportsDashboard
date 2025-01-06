import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-blue-700/50 transition-all duration-300 transform hover:-translate-y-1">
      <Icon className="w-8 h-8 mb-4 text-blue-400" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </div>
  );
}