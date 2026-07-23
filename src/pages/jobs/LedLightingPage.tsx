import React from 'react';
import { Zap, Clock, Sun, Home, PiggyBank, Lightbulb } from 'lucide-react';
import StandardJobPage from './StandardJobPage';

export default function LedLightingPage() {
  return (
    <StandardJobPage
      ns="jobled"
      canonical="/jobs/led-belysning"
      heroBg="/heroes/hero-energi.jpg"
      accent="yellow"
      whyIcons={[
        <Zap size={36} className="text-yellow-500" />,
        <Clock size={36} className="text-yellow-500" />,
        <Sun size={36} className="text-yellow-500" />,
      ]}
      getIcons={[
        <Home size={40} className="text-blue-600" />,
        <PiggyBank size={40} className="text-blue-600" />,
        <Lightbulb size={40} className="text-blue-600" />,
      ]}
    />
  );
}
