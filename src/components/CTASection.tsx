import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, primaryText, primaryLink, secondaryText, secondaryLink }) => (
  <section className="bg-blue-600 text-white py-16">
    <div className="container text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={primaryLink} className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {primaryText} <ArrowRight className="ml-2" size={18} />
        </Link>
        {secondaryText && secondaryLink && (
          <Link to={secondaryLink} className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            {secondaryText}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default CTASection;
