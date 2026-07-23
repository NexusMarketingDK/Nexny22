import React from 'react';
import { Shield, TrendingUp, Users, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function PensionPage() {
  return (
    <StandardJobPage
      ns="jobpension"
      canonical="/jobs/pensionsordning"
      heroBg="/heroes/hero-moedebooking.jpg"
      accent="purple"
      whyIcons={[
        <Shield size={36} className="text-purple-600" />,
        <TrendingUp size={36} className="text-purple-600" />,
        <Users size={36} className="text-purple-600" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
