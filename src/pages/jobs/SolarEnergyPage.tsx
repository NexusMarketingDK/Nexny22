import React from 'react';
import { Sun, TrendingUp, Leaf, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function SolarEnergyPage() {
  return (
    <StandardJobPage
      ns="jobsolar"
      canonical="/jobs/solenergi"
      heroBg="/heroes/hero-energi.jpg"
      accent="green"
      whyIcons={[
        <Sun size={36} className="text-orange-500" />,
        <TrendingUp size={36} className="text-orange-500" />,
        <Leaf size={36} className="text-orange-500" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
