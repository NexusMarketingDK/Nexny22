import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Code, ArrowRight, Briefcase, BarChart3, CheckCircle, TrendingUp, MessageSquare, Target, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import HeroVisual from '../components/HeroVisual';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const serviceIcons = [
    <Phone size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
    <Code size={40} className="text-blue-600" />,
    <BarChart3 size={40} className="text-blue-600" />,
  ];
  const stepMeta = [
    { step: '01', icon: <MessageSquare size={22} className="text-white" />, color: 'bg-blue-600' },
    { step: '02', icon: <Target size={22} className="text-white" />, color: 'bg-indigo-600' },
    { step: '03', icon: <Zap size={22} className="text-white" />, color: 'bg-blue-700' },
    { step: '04', icon: <TrendingUp size={22} className="text-white" />, color: 'bg-green-600' },
  ];

  const services = t('homepage.services', { returnObjects: true }) as { title: string; description: string }[];
  const processSteps = t('homepage.processSteps', { returnObjects: true }) as { title: string; desc: string; tag: string }[];
  const businessBenefits = t('homepage.business.benefits', { returnObjects: true }) as string[];
  const industries = t('homepage.industries', { returnObjects: true }) as { name: string; description: string }[];
  const seoBullets = t('homepage.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('homepage.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('homepage.seo.title')}
        description={t('homepage.seo.description')}
        canonical="/"
        keywords={t('homepage.seo.keywords')}
      />

      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('homepage.heroCta')}
        ctaLink="/samarbejdspartner"
        secondaryCtaText={t('homepage.heroSecondaryCta')}
        secondaryCtaLink="/freelance-telemarketing"
        visual={<HeroVisual />}
      />

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-label">{t('homepage.processLabel')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('home.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">{t('home.process.subtitle')}</p>
          </div>

          {/* Process simulation */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />

              {processSteps.map((s, i) => (
                <div key={i} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className={`w-16 h-16 rounded-2xl ${stepMeta[i].color} flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    {stepMeta[i].icon}
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-slate-800 text-lg">{s.title}</h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">{stepMeta[i].step}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="text-xs text-slate-400 font-medium">{s.tag}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <p className="text-lg font-semibold mb-1">{t('homepage.processCta.title')}</p>
              <p className="text-white/80 text-sm mb-6">{t('homepage.processCta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/kontakt" className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  {t('homepage.processCta.primary')} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/ydelser" className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  {t('homepage.processCta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('homepage.servicesSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('homepage.servicesSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4">{serviceIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('homepage.business.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('homepage.business.subtitle')}</p>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  {t('homepage.business.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/heroes/hero-home.jpg"
                alt={t('homepage.business.imageAlt')}
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2">{t('homepage.business.badgeTitle')}</p>
                <p>{t('homepage.business.badgeSub')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('homepage.industriesSection.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('homepage.industriesSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 border-b md:border-b-0 md:border-r border-gray-700">
              <Briefcase size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('homepage.twoCol.forBusinessTitle')}</h3>
              <p className="mb-6">{t('homepage.twoCol.forBusinessText')}</p>
              <Link to="/samarbejdspartner" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                {t('homepage.twoCol.forBusinessCta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="text-center p-8">
              <BarChart3 size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('homepage.twoCol.forSellersTitle')}</h3>
              <p className="mb-6">{t('homepage.twoCol.forSellersText')}</p>
              <Link to="/freelance-telemarketing" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                {t('homepage.twoCol.forSellersCta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('homepage.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('homepage.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('homepage.seoText1.p2')}</p>
            <ul className="space-y-2">
              {seoBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('homepage.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('homepage.seoText2.p1')}</p>
            <p className="text-gray-600 mb-6">{t('homepage.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('homepage.finalCta.title')}
        subtitle={t('homepage.finalCta.subtitle')}
        primaryText={t('homepage.finalCta.primary')}
        primaryLink="/samarbejdspartner"
        secondaryText={t('homepage.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default HomePage;
