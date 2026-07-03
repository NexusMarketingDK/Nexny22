import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import { usePageContent, type Lang } from '../../i18n/usePageContent';

export interface JobPageContent {
  seoTitle: string;
  seoDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  applyCta: string;
  allJobs: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  tasks: string[];
  factsTitle: string;
  facts: { label: string; value: string }[];
  sendApplication: string;
  whyTitle: string;
  whySubtitle?: string;
  why: { title: string; desc: string }[];
  getTitle: string;
  get: { title: string; desc: string }[];
  lookForTitle: string;
  lookFor: string[];
  howTitle: string;
  howP: string;
  contactNow: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  sendApplicationShort: string;
  seeAllOpen: string;
}

interface Accent {
  factsBox: string;
  factsTitle: string;
  factsRow: string;
  whyIconColor: string;
}

const accents: Record<string, Accent> = {
  purple: { factsBox: 'bg-purple-50 border-purple-100', factsTitle: 'text-purple-800', factsRow: 'border-purple-100', whyIconColor: 'text-purple-600' },
  amber: { factsBox: 'bg-amber-50 border-amber-100', factsTitle: 'text-amber-800', factsRow: 'border-amber-100', whyIconColor: 'text-amber-600' },
  yellow: { factsBox: 'bg-yellow-50 border-yellow-100', factsTitle: 'text-yellow-800', factsRow: 'border-yellow-100', whyIconColor: 'text-yellow-600' },
  green: { factsBox: 'bg-green-50 border-green-100', factsTitle: 'text-green-800', factsRow: 'border-green-100', whyIconColor: 'text-green-600' },
  orange: { factsBox: 'bg-orange-50 border-orange-100', factsTitle: 'text-orange-800', factsRow: 'border-orange-100', whyIconColor: 'text-orange-600' },
  blue: { factsBox: 'bg-blue-50 border-blue-100', factsTitle: 'text-blue-800', factsRow: 'border-blue-100', whyIconColor: 'text-blue-600' },
  gray: { factsBox: 'bg-gray-50 border-gray-100', factsTitle: 'text-gray-800', factsRow: 'border-gray-100', whyIconColor: 'text-gray-600' },
  teal: { factsBox: 'bg-teal-50 border-teal-100', factsTitle: 'text-teal-800', factsRow: 'border-teal-100', whyIconColor: 'text-teal-600' },
  indigo: { factsBox: 'bg-indigo-50 border-indigo-100', factsTitle: 'text-indigo-800', factsRow: 'border-indigo-100', whyIconColor: 'text-indigo-600' },
  slate: { factsBox: 'bg-slate-50 border-slate-200', factsTitle: 'text-slate-800', factsRow: 'border-slate-200', whyIconColor: 'text-slate-600' },
};

interface Props {
  content: Record<Lang, JobPageContent>;
  canonical: string;
  keywords: string;
  backgroundImage: string;
  accent: keyof typeof accents;
  /** Three icons for the "why" section, already sized/coloured by the caller. */
  whyIcons: React.ReactNode[];
}

const JobPageLayout: React.FC<Props> = ({ content, canonical, keywords, backgroundImage, accent, whyIcons }) => {
  const c = usePageContent(content);
  const a = accents[accent] ?? accents.blue;
  const getIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Clock size={40} className="text-blue-600" />,
  ];

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDesc} canonical={canonical} keywords={keywords} />

      <HeroSection
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        ctaText={c.applyCta}
        ctaLink="/kontakt"
        secondaryCtaText={c.allJobs}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage={backgroundImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.aboutTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{c.aboutP1}</p>
              <p className="text-lg text-gray-600 mb-8">{c.aboutP2}</p>
              <ul className="space-y-3">
                {c.tasks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl p-8 border ${a.factsBox}`}>
              <h3 className={`text-xl font-bold mb-6 ${a.factsTitle}`}>{c.factsTitle}</h3>
              <div className="space-y-4">
                {c.facts.map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 border-b last:border-0 ${a.factsRow}`}>
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {c.sendApplication} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.whyTitle}</h2>
            {c.whySubtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.whySubtitle}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.why.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">{whyIcons[i]}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.getTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.get.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{getIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{c.lookForTitle}</h2>
              <ul className="space-y-3">
                {c.lookFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{c.howTitle}</h2>
              <p className="text-gray-600 mb-6">{c.howP}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {c.contactNow} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={c.faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{c.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{c.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {c.sendApplicationShort} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {c.seeAllOpen}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPageLayout;
