import React from 'react';
import { Shield, Users, Star, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function MatServicePage() {
  return (
    <StandardJobPage
      ns="jobmat"
      canonical="/jobs/matte-service"
      heroBg="/heroes/hero-service.jpg"
      accent="teal"
      whyIcons={[
        <Shield size={36} className="text-teal-600" />,
        <Users size={36} className="text-teal-600" />,
        <Star size={36} className="text-teal-600" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
