import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Award, CheckCircle, ArrowRight, Building, Globe, CalendarCheck, Phone, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const deliverableMeta = [
    { icon: <Globe className="w-12 h-12 text-blue-600" />, link: '/digital/hjemmesider' },
    { icon: <CalendarCheck className="w-12 h-12 text-blue-600" />, link: '/modebooking-priser' },
    { icon: <Phone className="w-12 h-12 text-blue-600" />, link: '/ydelser' },
    { icon: <Sparkles className="w-12 h-12 text-blue-600" />, link: '/digital/ai-integration' },
  ];
  const valueIcons = [
    <Users className="w-12 h-12 text-blue-600" />,
    <Award className="w-12 h-12 text-blue-600" />,
    <CheckCircle className="w-12 h-12 text-blue-600" />,
  ];

  const deliverables = t('about.deliverables', { returnObjects: true }) as { title: string; description: string }[];
  const values = t('about.values', { returnObjects: true }) as { title: string; description: string }[];
  const industries = t('about.industries', { returnObjects: true }) as { name: string; description: string }[];
  const seoBullets = t('about.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = t('about.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        canonical="/om-os"
        keywords={t('about.seo.keywords')}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('about.hero.title')}</h1>
            <p className="text-xl text-gray-300 mb-8">{t('about.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="section-label">{t('about.delivSection.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.delivSection.title')}</h2>
            <p className="text-lg text-gray-600">{t('about.delivSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <Link
                key={index}
                to={deliverableMeta[index].link}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="mb-5">{deliverableMeta[index].icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <span className="inline-flex items-center text-blue-600 font-semibold mt-5">
                  {t('about.readMore')} <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.aboutBlock.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">{t('about.aboutBlock.p1')}</p>
              <p className="text-lg text-gray-600 mb-6">{t('about.aboutBlock.p2')}</p>
              <p className="text-lg text-gray-600 mb-8">{t('about.aboutBlock.p3')}</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt={t('about.aboutBlock.imageAlt')}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.valuesSection.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('about.valuesSection.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-6">{valueIcons[index]}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{t('about.b2bBlock.title')}</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">{t('about.b2bBlock.p1')}</p>
                <p className="text-gray-600 mb-4">{t('about.b2bBlock.p2')}</p>
                <p className="text-gray-600 mb-4">{t('about.b2bBlock.p3')}</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.industriesSection.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('about.industriesSection.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('about.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('about.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('about.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('about.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('about.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('about.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('about.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('about.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('about.finalCta.title')}
        subtitle={t('about.finalCta.subtitle')}
        primaryText={t('about.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('about.finalCta.secondary')}
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default AboutPage;
