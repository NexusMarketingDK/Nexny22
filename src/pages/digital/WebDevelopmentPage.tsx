import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Code, CheckCircle, ArrowRight, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebDevelopmentPage() {
  const { t } = useTranslation();

  const featureIcons = [
    <Code size={36} className="text-blue-600" />,
    <Smartphone size={36} className="text-blue-600" />,
    <Zap size={36} className="text-blue-600" />,
    <Shield size={36} className="text-blue-600" />,
  ];

  const techStack = [
    'React & Next.js', 'TypeScript', 'Node.js & Express', 'REST API & GraphQL',
    'PostgreSQL & MongoDB', 'Tailwind CSS', 'Vercel & AWS', 'CI/CD pipelines'
  ];

  const features = t('webdev.features', { returnObjects: true }) as { title: string; description: string }[];
  const deliverables = t('webdev.deliverables.items', { returnObjects: true }) as string[];
  const seoBullets = t('webdev.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('webdev.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('webdev.seo.title')}
        description={t('webdev.seo.description')}
        canonical="/digital/webudvikling"
        keywords={t('webdev.seo.keywords')}
      />

      <HeroSection
        title={t('webdev.hero.title')}
        subtitle={t('webdev.hero.subtitle')}
        ctaText={t('webdev.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('webdev.offer.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('webdev.offer.subtitle')}</p>
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
              <h2 className="text-3xl font-bold mb-6">{t('webdev.deliverables.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('webdev.deliverables.subtitle')}</p>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('webdev.deliverables.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt={t('webdev.deliverables.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('webdev.tech.title')}</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">{t('webdev.tech.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <span key={i} className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-medium border border-blue-100">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 size={48} className="mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-6">{t('webdev.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('webdev.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('webdev.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('webdev.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('webdev.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('webdev.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('webdev.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('webdev.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('webdev.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('webdev.finalCta.title')}
        subtitle={t('webdev.finalCta.subtitle')}
        primaryText={t('webdev.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('webdev.finalCta.secondary')}
        secondaryLink="/digital/hjemmesider"
      />
    </>
  );
}
