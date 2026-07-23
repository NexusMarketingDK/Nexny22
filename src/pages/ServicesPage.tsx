import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Users, Target, CheckCircle, ArrowRight, MessageSquare, Building, Award } from 'lucide-react';
import AiSolutionsSection from '../components/AiSolutionsSection';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const serviceIcons = [
    <Phone className="w-12 h-12 text-blue-600" />,
    <Users className="w-12 h-12 text-blue-600" />,
    <Target className="w-12 h-12 text-blue-600" />,
    <MessageSquare className="w-12 h-12 text-blue-600" />,
  ];
  const industryIcons = [
    <Building className="w-12 h-12 text-blue-600" />,
    <Building className="w-12 h-12 text-blue-600" />,
    <Building className="w-12 h-12 text-blue-600" />,
    <Award className="w-12 h-12 text-blue-600" />,
  ];

  const services = t('services.services', { returnObjects: true }) as { title: string; description: string; features: string[] }[];
  const industries = t('services.industries', { returnObjects: true }) as { title: string; description: string; successStory: string; expertise: string[] }[];
  const seoBullets = t('services.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('services.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        canonical="/ydelser"
        keywords={t('services.seo.keywords')}
      />

      <HeroSection
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        ctaText={t('services.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('services.hero.secondaryCta')}
        secondaryCtaLink="/priser"
        backgroundImage="/heroes/hero-telesalg.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.coreSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('services.coreSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="mb-4">{serviceIcons[index]}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiSolutionsSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.industriesSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('services.industriesSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{industryIcons[index]}</div>
                <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <p className="text-blue-600 font-medium mb-4">{industry.successStory}</p>
                <ul className="space-y-2">
                  {industry.expertise.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('services.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('services.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('services.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('services.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('services.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('services.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('services.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('services.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('services.finalCta.title')}
        subtitle={t('services.finalCta.subtitle')}
        primaryText={t('services.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('services.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default ServicesPage;
