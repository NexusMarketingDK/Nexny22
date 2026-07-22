import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Target, Award, ChevronDown, ChevronUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const modelMeta = [
    { highlight: true, icon: Target },
    { highlight: false, icon: Award },
  ];
  const models = t('pricing.models', { returnObjects: true }) as { title: string; subtitle: string; description: string; features: string[] }[];
  const midFaq = t('pricing.midFaq', { returnObjects: true }) as { question: string; answer: string }[];
  const seoBullets = t('pricing.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('pricing.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('pricing.seo.title')}
        description={t('pricing.seo.description')}
        canonical="/priser"
        keywords={t('pricing.seo.keywords')}
      />

      <HeroSection
        title={t('pricing.hero.title')}
        subtitle={t('pricing.hero.subtitle')}
        ctaText={t('pricing.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-partner.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.modelsSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('pricing.modelsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {models.map((model, index) => {
              const meta = modelMeta[index];
              const Icon = meta.icon;
              return (
                <div key={index} className={`rounded-xl p-8 shadow-lg ${meta.highlight ? 'bg-blue-600 text-white ring-4 ring-blue-300' : 'bg-white border border-gray-200'}`}>
                  <Icon className={`w-12 h-12 mb-4 ${meta.highlight ? 'text-white' : 'text-blue-600'}`} />
                  <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
                  <p className={`text-sm mb-2 ${meta.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{model.subtitle}</p>
                  <p className={`mb-6 ${meta.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{model.description}</p>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${meta.highlight ? 'text-white' : 'text-green-500'}`} size={18} />
                        <span className={`text-sm ${meta.highlight ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${meta.highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    {t('pricing.cardCta')} <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('pricing.midFaqTitle')}</h2>
          <div className="space-y-4">
            {midFaq.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-medium"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.formSection.title')}</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/85">{t('pricing.formSection.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-left">
            <ContactForm presetTopic="Pris på Mødebooking / Telesalg" sourceLabel="Prissiden" />
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('pricing.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('pricing.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('pricing.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('pricing.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('pricing.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('pricing.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('pricing.finalCta.title')}
        subtitle={t('pricing.finalCta.subtitle')}
        primaryText={t('pricing.finalCta.primary')}
        primaryLink="/kontakt"
      />
    </>
  );
};

export default PricingPage;
