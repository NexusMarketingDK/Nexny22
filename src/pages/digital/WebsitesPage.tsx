import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Monitor, CheckCircle, ArrowRight, Search, TrendingUp, PenTool, Gauge, Leaf, Hammer, Store, ShoppingBag, HardHat, Briefcase, Tag, Image as ImageIcon, ExternalLink } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebsitesPage() {
  const { t } = useTranslation();

  // Non-translatable presentation data (icons, images, colours, links).
  const featureIcons = [
    <PenTool size={36} className="text-blue-600" />,
    <Search size={36} className="text-blue-600" />,
    <Gauge size={36} className="text-blue-600" />,
    <TrendingUp size={36} className="text-blue-600" />,
  ];

  const budgetVisuals = [
    { image: '/references/ref-have-anlaeg.jpg', icon: <Leaf size={18} />, color: 'text-green-600 bg-green-50' },
    { image: '/references/ref-haandvaerker.jpg', icon: <Hammer size={18} />, color: 'text-orange-600 bg-orange-50' },
    { image: '/references/ref-detail.jpg', icon: <Store size={18} />, color: 'text-pink-600 bg-pink-50' },
    { image: '/references/ref-webshop.jpg', icon: <ShoppingBag size={18} />, color: 'text-indigo-600 bg-indigo-50' },
    { image: '/references/ref-entreprenoer.jpg', icon: <HardHat size={18} />, color: 'text-yellow-600 bg-yellow-50' },
    { image: '/references/ref-konsulent.jpg', icon: <Briefcase size={18} />, color: 'text-blue-600 bg-blue-50' },
  ];

  const showcaseLinks = [
    { image: '/references/showcase-mtvagt.jpg', name: 'MT Vagt', url: 'https://mtvagt.dk/', domain: 'mtvagt.dk' },
    { image: '/references/showcase-aibooking.jpg', name: 'AI Booking', url: 'https://aibooking.dk/', domain: 'aibooking.dk' },
    { image: '/references/showcase-nexusmarketing.jpg', name: 'Nexus Marketing', url: 'https://nexusmarketing.dk/', domain: 'nexusmarketing.dk' },
    { image: '/references/showcase-somevideopost.jpg', name: 'Some Video Post', url: 'https://www.somevideopost.com/', domain: 'somevideopost.com' },
  ];

  // Translated text pulled from the i18n `websites` namespace.
  const features = t('websites.features', { returnObjects: true }) as { title: string; description: string }[];
  const includedItems = t('websites.included.items', { returnObjects: true }) as string[];
  const siteTypes = t('websites.siteTypes.items', { returnObjects: true }) as { title: string; desc: string }[];
  const budgetInfo = t('websites.budget.info', { returnObjects: true }) as { strong: string; text: string }[];
  const budgetTemplates = t('websites.budget.templates', { returnObjects: true }) as { branche: string; desc: string }[];
  const showcaseSites = t('websites.showcase.sites', { returnObjects: true }) as { desc: string }[];
  const seoBullets = t('websites.seoText1.bullets', { returnObjects: true }) as string[];
  const faqs = (t('websites.faq', { returnObjects: true }) as { question: string; answer: string }[])
    .map(f => ({ question: f.question, answer: f.answer }));

  const openInPopup = (e: React.MouseEvent, url: string, name: string) => {
    // Åbn referencesiden i et lille popup-vindue, så brugeren bliver på vores side
    e.preventDefault();
    const w = 980;
    const h = 700;
    const dualLeft = window.screenLeft ?? window.screenX;
    const dualTop = window.screenTop ?? window.screenY;
    const vw = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const vh = window.innerHeight || document.documentElement.clientHeight || screen.height;
    const left = Math.max(0, dualLeft + (vw - w) / 2);
    const top = Math.max(0, dualTop + (vh - h) / 2);
    const features = `popup=yes,width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`;
    const popup = window.open(url, name.replace(/\s+/g, '_'), features);
    if (popup) {
      popup.focus();
    } else {
      // Fallback hvis popup blokeres: åbn i ny fane
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <SEO
        title={t('websites.seo.title')}
        description={t('websites.seo.description')}
        canonical="/digital/hjemmesider"
        keywords={t('websites.seo.keywords')}
      />

      <HeroSection
        title={t('websites.hero.title')}
        subtitle={t('websites.hero.subtitle')}
        ctaText={t('websites.hero.cta')}
        ctaLink="/kontakt"
        backgroundImage="/heroes/hero-webdev.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('websites.diff.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('websites.diff.subtitle')}</p>
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
              <h2 className="text-3xl font-bold mb-6">{t('websites.included.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('websites.included.subtitle')}</p>
              <ul className="space-y-3">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('websites.included.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-webdev.jpg"
                alt={t('websites.included.imageAlt')}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Monitor size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('websites.siteTypes.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('websites.siteTypes.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteTypes.map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">{t('websites.budget.eyebrow')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('websites.budget.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('websites.budget.subtitle')}</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {budgetInfo.map((info, i) => {
                const Icon = [Tag, ImageIcon, Gauge][i];
                return (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                    <Icon size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">{info.strong}</span>{info.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgetTemplates.map((tpl, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={budgetVisuals[i].image}
                    alt={t('websites.budget.alt', { branche: tpl.branche })}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full shadow-sm">
                    {t('websites.budget.badge')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${budgetVisuals[i].color}`}>
                      {budgetVisuals[i].icon}
                    </span>
                    <h3 className="text-lg font-semibold">{tpl.branche}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{tpl.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ImageIcon size={15} className="text-blue-500" />
                    <span>{t('websites.budget.customize')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-5">{t('websites.budget.notFound')}</p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('websites.budget.cta')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">{t('websites.showcase.eyebrow')}</span>
            <h2 className="text-3xl font-bold mb-4">{t('websites.showcase.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('websites.showcase.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {showcaseLinks.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInPopup(e, site.url, site.name)}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={site.image}
                    alt={t('websites.showcase.alt', { name: site.name })}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('websites.showcase.visit')} <ExternalLink size={13} />
                  </span>
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{site.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{showcaseSites[i]?.desc}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all">
                    {site.domain} <ExternalLink size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('websites.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('websites.midCta.subtitle')}</p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('websites.midCta.button')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('websites.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('websites.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('websites.seoText1.p2')}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t('websites.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('websites.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('websites.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('websites.finalCta.title')}
        subtitle={t('websites.finalCta.subtitle')}
        primaryText={t('websites.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('websites.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
}
