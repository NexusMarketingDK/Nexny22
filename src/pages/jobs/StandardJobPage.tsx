import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

type Accent = 'amber' | 'green' | 'orange' | 'purple' | 'indigo' | 'gray' | 'slate' | 'teal' | 'yellow';

const accentClasses: Record<Accent, { box: string; heading: string; row: string }> = {
  amber: { box: 'bg-amber-50 border-amber-100', heading: 'text-amber-800', row: 'border-amber-100' },
  green: { box: 'bg-green-50 border-green-100', heading: 'text-green-800', row: 'border-green-100' },
  orange: { box: 'bg-orange-50 border-orange-100', heading: 'text-orange-800', row: 'border-orange-100' },
  purple: { box: 'bg-purple-50 border-purple-100', heading: 'text-purple-800', row: 'border-purple-100' },
  indigo: { box: 'bg-indigo-50 border-indigo-100', heading: 'text-indigo-800', row: 'border-indigo-100' },
  gray: { box: 'bg-gray-50 border-gray-200', heading: 'text-gray-800', row: 'border-gray-200' },
  slate: { box: 'bg-slate-50 border-slate-200', heading: 'text-slate-800', row: 'border-slate-200' },
  teal: { box: 'bg-teal-50 border-teal-100', heading: 'text-teal-800', row: 'border-teal-100' },
  yellow: { box: 'bg-yellow-50 border-yellow-100', heading: 'text-yellow-800', row: 'border-yellow-100' },
};

interface StandardJobPageProps {
  ns: string;
  canonical: string;
  heroBg: string;
  accent: Accent;
  whyIcons: ReactNode[];
  getIcons: ReactNode[];
}

const StandardJobPage: React.FC<StandardJobPageProps> = ({ ns, canonical, heroBg, accent, whyIcons, getIcons }) => {
  const { t, i18n } = useTranslation();
  const a = accentClasses[accent];
  const hasWhySubtitle = i18n.exists(`${ns}.why.subtitle`);

  const tasks = t(`${ns}.about.tasks`, { returnObjects: true }) as string[];
  const rows = t(`${ns}.keyFacts.rows`, { returnObjects: true }) as { label: string; value: string }[];
  const whyCards = t(`${ns}.why.cards`, { returnObjects: true }) as { title: string; desc: string }[];
  const getCards = t(`${ns}.get.cards`, { returnObjects: true }) as { title: string; desc: string }[];
  const lookingForItems = t(`${ns}.lookingFor.items`, { returnObjects: true }) as string[];
  const faqSpecific = t(`${ns}.faqSpecific`, { returnObjects: true }) as { question: string; answer: string }[];
  const faqBoilerplate = t('common.jobFaqBoilerplate', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t(`${ns}.seo.title`)}
        description={t(`${ns}.seo.description`)}
        canonical={canonical}
        keywords={t(`${ns}.seo.keywords`)}
      />

      <HeroSection
        title={t(`${ns}.hero.title`)}
        subtitle={t(`${ns}.hero.subtitle`)}
        ctaText={t(`${ns}.hero.cta`)}
        ctaLink="/kontakt"
        secondaryCtaText={t(`${ns}.hero.secondaryCta`)}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage={heroBg}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t(`${ns}.about.title`)}</h2>
              <p className="text-lg text-gray-600 mb-6">{t(`${ns}.about.p1`)}</p>
              <p className="text-lg text-gray-600 mb-8">{t(`${ns}.about.p2`)}</p>
              <ul className="space-y-3">
                {tasks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl p-8 border ${a.box}`}>
              <h3 className={`text-xl font-bold mb-6 ${a.heading}`}>{t(`${ns}.keyFacts.title`)}</h3>
              <div className="space-y-4">
                {rows.map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 border-b last:border-0 ${a.row}`}>
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t(`${ns}.keyFacts.applyBtn`)} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t(`${ns}.why.title`)}</h2>
            {hasWhySubtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t(`${ns}.why.subtitle`)}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((item, i) => (
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
            <h2 className="text-3xl font-bold mb-4">{t(`${ns}.get.title`)}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCards.map((item, i) => (
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
              <h2 className="text-2xl font-bold mb-6">{t(`${ns}.lookingFor.title`)}</h2>
              <ul className="space-y-3">
                {lookingForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{t(`${ns}.howApply.title`)}</h2>
              <p className="text-gray-600 mb-6">{t(`${ns}.howApply.p1`)}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t(`${ns}.howApply.cta`)} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[...faqSpecific, ...faqBoilerplate]} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t(`${ns}.finalCta.title`)}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t(`${ns}.finalCta.subtitle`)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t(`${ns}.finalCta.ctaPrimary`)} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t(`${ns}.finalCta.ctaSecondary`)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StandardJobPage;
