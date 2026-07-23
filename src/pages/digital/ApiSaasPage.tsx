import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Settings, CheckCircle, ArrowRight, RefreshCw, Lock, Layers, Globe } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function ApiSaasPage() {
  const { t } = useTranslation();

  const featureIcons = [
    <Settings size={36} className="text-blue-600" />,
    <RefreshCw size={36} className="text-blue-600" />,
    <Layers size={36} className="text-blue-600" />,
    <Lock size={36} className="text-blue-600" />,
  ];

  const features = t('apisaas.features', { returnObjects: true }) as { title: string; description: string }[];
  const useCases = t('apisaas.integrations.items', { returnObjects: true }) as string[];
  const seoBullets = t('apisaas.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('apisaas.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('apisaas.seo.title')}
        description={t('apisaas.seo.description')}
        canonical="/digital/api-saas"
        keywords={t('apisaas.seo.keywords')}
      />

      <HeroSection
        title={t('apisaas.hero.title')}
        subtitle={t('apisaas.hero.subtitle')}
        ctaText={t('apisaas.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('apisaas.offer.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('apisaas.offer.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{featureIcons[i]}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt={t('apisaas.integrations.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('apisaas.integrations.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('apisaas.integrations.subtitle')}</p>
              <ul className="space-y-3">
                {useCases.map((u, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('apisaas.integrations.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe size={48} className="text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">{t('apisaas.scalable.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">{t('apisaas.scalable.subtitle')}</p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('apisaas.scalable.cta')} <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('apisaas.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('apisaas.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('apisaas.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('apisaas.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('apisaas.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('apisaas.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('apisaas.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('apisaas.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('apisaas.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('apisaas.finalCta.title')}
        subtitle={t('apisaas.finalCta.subtitle')}
        primaryText={t('apisaas.finalCta.primary')}
        primaryLink="/kontakt"
      />
    </>
  );
}
