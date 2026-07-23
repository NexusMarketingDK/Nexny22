import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Users, BarChart3, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const OutsourcingPage: React.FC = () => {
  const { t } = useTranslation();

  const reasonIcons = [
    <TrendingUp className="w-12 h-12 text-blue-600" />,
    <Clock className="w-12 h-12 text-blue-600" />,
    <Shield className="w-12 h-12 text-blue-600" />,
    <Users className="w-12 h-12 text-blue-600" />,
    <BarChart3 className="w-12 h-12 text-blue-600" />,
    <Zap className="w-12 h-12 text-blue-600" />,
  ];

  const reasons = t('outsourcing.reasons', { returnObjects: true }) as { title: string; description: string }[];
  const checklist = t('outsourcing.compare.checklist', { returnObjects: true }) as string[];
  const seoBullets = t('outsourcing.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('outsourcing.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('outsourcing.seo.title')}
        description={t('outsourcing.seo.description')}
        canonical="/hvorfor-nexny"
        keywords={t('outsourcing.seo.keywords')}
      />

      <HeroSection
        title={t('outsourcing.hero.title')}
        subtitle={t('outsourcing.hero.subtitle')}
        ctaText={t('outsourcing.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('outsourcing.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('outsourcing.reasonsSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('outsourcing.reasonsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <div className="mb-4">{reasonIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('outsourcing.compare.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">{t('outsourcing.compare.p1')}</p>
              <p className="text-lg text-gray-600 mb-6">{t('outsourcing.compare.p2')}</p>
              <div className="space-y-3 mb-8">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                {t('outsourcing.compare.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">{t('outsourcing.compare.formTitle')}</h3>
                <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Hvorfor Magnora-siden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('outsourcing.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('outsourcing.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('outsourcing.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('outsourcing.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('outsourcing.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('outsourcing.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('outsourcing.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('outsourcing.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('outsourcing.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('outsourcing.finalCta.title')}
        subtitle={t('outsourcing.finalCta.subtitle')}
        primaryText={t('outsourcing.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('outsourcing.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default OutsourcingPage;
