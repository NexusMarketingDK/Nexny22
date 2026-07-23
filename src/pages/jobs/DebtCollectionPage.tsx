import React from 'react';
import { Shield, BarChart3, Users, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function DebtCollectionPage() {
  return (
    <StandardJobPage
      ns="jobdebt"
      canonical="/jobs/inkasso"
      heroBg="/heroes/hero-telesalg.jpg"
      accent="slate"
      whyIcons={[
        <Shield size={36} className="text-slate-600" />,
        <BarChart3 size={36} className="text-slate-600" />,
        <Users size={36} className="text-slate-600" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
