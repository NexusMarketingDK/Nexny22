import React from 'react';
import { Coffee, Users, Star, Home, PiggyBank, Clock } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function CoffeeServicePage() {
  return (
    <StandardJobPage
      ns="jobcoffee"
      canonical="/jobs/kaffe-service"
      heroBg="/heroes/hero-kaffe.jpg"
      accent="amber"
      whyIcons={[
        <Coffee size={36} className="text-amber-600" />,
        <Users size={36} className="text-amber-600" />,
        <Star size={36} className="text-amber-600" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Clock size={40} className="text-blue-600" />,
      ]}
    />
  );
}
