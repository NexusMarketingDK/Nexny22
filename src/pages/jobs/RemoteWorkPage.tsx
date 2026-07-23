import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function RemoteWorkPage() {
  const { t } = useTranslation();

  const benefitIcons = [
    <Home size={40} className="text-blue-600" />,
    <Laptop size={40} className="text-blue-600" />,
    <Globe size={40} className="text-blue-600" />,
  ];
  const getIcons = [
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
    <Clock size={40} className="text-blue-600" />,
    <Laptop size={40} className="text-blue-600" />,
  ];
  const productLinks = [
    '/jobs/webudvikling-salg',
    '/jobs/led-belysning',
    '/jobs/solenergi',
    '/jobs/energi-salg',
    '/jobs/kaffe-service',
    '/jobs/matte-service',
    '/jobs/pensionsordning',
    '/jobs/inkasso',
    '/freelance-telemarketing',
  ];

  const benefits = t('jobremote.benefits', { returnObjects: true }) as { title: string; desc: string }[];
  const products = t('jobremote.products', { returnObjects: true }) as string[];
  const getCards = t('jobremote.getCards', { returnObjects: true }) as { title: string; desc: string }[];
  const lookingForItems = t('jobremote.lookingFor.items', { returnObjects: true }) as string[];
  const seoBullets = t('jobremote.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('jobremote.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('jobremote.seo.title')}
        description={t('jobremote.seo.description')}
        canonical="/jobs/arbejd-hjemmefra"
        keywords={t('jobremote.seo.keywords')}
      />

      <HeroSection
        title={t('jobremote.hero.title')}
        subtitle={t('jobremote.hero.subtitle')}
        ctaText={t('jobremote.hero.cta')}
        ctaLink="/freelance-telemarketing"
        secondaryCtaText={t('jobremote.hero.secondaryCta')}
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-jobs.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobremote.intro.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('jobremote.intro.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{benefitIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobremote.productsSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('jobremote.productsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((label, i) => (
              <Link
                key={i}
                to={productLinks[i]}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <CheckCircle className="text-blue-500 flex-shrink-0 group-hover:text-blue-600" size={18} />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm">{label}</span>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('jobremote.getSection.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {getCards.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{getIcons[i]}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('jobremote.lookingFor.title')}</h2>
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
              <h2 className="text-2xl font-bold mb-6">{t('jobremote.gettingStarted.title')}</h2>
              <p className="text-gray-600 mb-4">{t('jobremote.gettingStarted.p1')}</p>
              <p className="text-gray-600 mb-8">{t('jobremote.gettingStarted.p2')}</p>
              <div className="flex flex-col gap-3">
                <Link to="/freelance-telemarketing" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('jobremote.gettingStarted.ctaPrimary')} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/kontakt" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {t('jobremote.gettingStarted.ctaSecondary')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('jobremote.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('jobremote.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('jobremote.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('jobremote.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('jobremote.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('jobremote.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('jobremote.finalCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('jobremote.finalCta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/freelance-telemarketing" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('jobremote.finalCta.ctaPrimary')} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('jobremote.finalCta.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
