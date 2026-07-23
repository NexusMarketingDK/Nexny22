import React from 'react';
import { Zap, BarChart3, Shield, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function EnergySalesPage() {
  return (
    <StandardJobPage
      ns="jobenergy"
      canonical="/jobs/energi-salg"
      heroBg="/heroes/hero-energi.jpg"
      accent="orange"
      whyIcons={[
        <Zap size={36} className="text-orange-500" />,
        <BarChart3 size={36} className="text-orange-500" />,
        <Shield size={36} className="text-orange-500" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
