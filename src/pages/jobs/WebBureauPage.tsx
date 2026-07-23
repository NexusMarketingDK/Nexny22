import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function WebBureauPage() {
  const { t } = useTranslation();

  const serviceIcons = [
    <Globe size={32} className="text-blue-600" />,
    <Laptop size={32} className="text-blue-600" />,
    <Users size={32} className="text-blue-600" />,
    <ArrowRight size={32} className="text-blue-600" />,
    <Clock size={32} className="text-blue-600" />,
    <PiggyBank size={32} className="text-blue-600" />,
  ];
  const getIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
  ];

  const tasks = t('jobwebbureau.about.tasks', { returnObjects: true }) as string[];
  const rows = t('jobwebbureau.keyFacts.rows', { returnObjects: true }) as { label: string; value: string }[];
  const serviceCards = t('jobwebbureau.services.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const getCards = t('jobwebbureau.get.cards', { returnObjects: true }) as { title: string; desc: string }[];
  const lookingForItems = t('jobwebbureau.lookingFor.items', { returnObjects: true }) as string[];
  const faqs = t('jobwebbureau.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('jobwebbureau.seo.title')}
        description={t('jobwebbureau.seo.description')}
        canonical="/jobs/webudvikling-salg"
        keywords={t('jobwebbureau.seo.keywords')}
      />

      <HeroSection
        title={t('jobwebbureau.hero.title')}
        subtitle={t('jobwebbureau.hero.subtitle')}
        ctaText={t('jobwebbureau.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('jobwebbureau.hero.secondaryCta')}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('jobwebbureau.about.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">{t('jobwebbureau.about.p1')}</p>
              <p className="text-lg text-gray-600 mb-8">{t('jobwebbureau.about.p2')}</p>
              <ul className="space-y-3">
                {tasks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">{t('jobwebbureau.keyFacts.title')}</h3>
              <div className="space-y-4">
                {rows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobwebbureau.keyFacts.applyBtn')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobwebbureau.services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('jobwebbureau.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{serviceIcons[i]}</div>
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
            <h2 className="text-3xl font-bold mb-4">{t('jobwebbureau.get.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('jobwebbureau.get.subtitle')}</p>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobwebbureau.lookingFor.title')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobwebbureau.howApply.title')}</h2>
              <p className="text-gray-600 mb-6">{t('jobwebbureau.howApply.p1')}</p>
              <p className="text-gray-600 mb-8">{t('jobwebbureau.howApply.p2')}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('jobwebbureau.howApply.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobwebbureau.finalCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobwebbureau.finalCta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobwebbureau.finalCta.ctaPrimary')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobwebbureau.finalCta.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
