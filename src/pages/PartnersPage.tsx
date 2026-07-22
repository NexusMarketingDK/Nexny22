import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TrendingUp, BarChart3, HeartHandshake, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import AiSolutionsSection from '../components/AiSolutionsSection';
import ContactForm from '../components/ContactForm';

const PartnersPage: React.FC = () => {
  const { t } = useTranslation();

  const benefitIcons = [
    <TrendingUp size={40} className="text-blue-600" />,
    <BarChart3 size={40} className="text-blue-600" />,
    <HeartHandshake size={40} className="text-blue-600" />,
  ];

  const benefits = t('partners.benefits', { returnObjects: true }) as { title: string; description: string }[];
  const processSteps = t('partners.processSteps', { returnObjects: true }) as { number: string; title: string; description: string }[];
  const faqs = t('partners.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('partners.seo.title')}
        description={t('partners.seo.description')}
        canonical="/samarbejdspartner"
        keywords={t('partners.seo.keywords')}
      />

      <HeroSection
        title={t('partners.hero.title')}
        subtitle={t('partners.hero.subtitle')}
        ctaText={t('partners.hero.cta')}
        ctaLink="#kontakt-formular"
        secondaryCtaText={t('partners.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('partners.whySection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('partners.whySection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{benefitIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('partners.processSection.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-formular" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('partners.formSection.title')}</h2>
            <p className="text-lg text-gray-600">{t('partners.formSection.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Samarbejdspartner-siden" />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('partners.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('partners.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('partners.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('partners.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('partners.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('partners.seoText1.p2')}</p>
            <ul className="space-y-2">
              {(t('partners.seoText1.bullets', { returnObjects: true }) as string[]).map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('partners.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('partners.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('partners.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('partners.finalCta.title')}
        subtitle={t('partners.finalCta.subtitle')}
        primaryText={t('partners.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('partners.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default PartnersPage;
