import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, CheckCircle, ArrowRight, BarChart3, Database, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const LeadGenerationPage: React.FC = () => {
  const { t } = useTranslation();

  const processIcons = [
    <Target className="w-12 h-12 text-blue-600" />,
    <Database className="w-12 h-12 text-blue-600" />,
    <Zap className="w-12 h-12 text-blue-600" />,
  ];

  const process = t('leadgen.process', { returnObjects: true }) as { title: string; desc: string }[];
  const whyChecklist = t('leadgen.whySection.checklist', { returnObjects: true }) as string[];
  const delivers = t('leadgen.delivers.items', { returnObjects: true }) as string[];
  const seoBullets = t('leadgen.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('leadgen.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('leadgen.seo.title')}
        description={t('leadgen.seo.description')}
        canonical="/leadgenerering"
        keywords={t('leadgen.seo.keywords')}
      />

      <HeroSection
        title={t('leadgen.hero.title')}
        subtitle={t('leadgen.hero.subtitle')}
        ctaText={t('leadgen.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('leadgen.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-leadgen.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('leadgen.processSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('leadgen.processSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{processIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('leadgen.whySection.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('leadgen.whySection.subtitle')}</p>
              <div className="space-y-4 mb-8">
                {whyChecklist.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                {t('leadgen.whySection.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <BarChart3 className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('leadgen.delivers.title')}</h3>
                <ul className="space-y-3">
                  {delivers.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('leadgen.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('leadgen.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('leadgen.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('leadgen.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('leadgen.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('leadgen.seoText1.p2')}</p>
            <ul className="space-y-2">
              {seoBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('leadgen.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('leadgen.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('leadgen.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('leadgen.finalCta.title')}
        subtitle={t('leadgen.finalCta.subtitle')}
        primaryText={t('leadgen.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('leadgen.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default LeadGenerationPage;
