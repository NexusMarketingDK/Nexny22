import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Mic, Clock, MessageSquare, Bot, Calendar, Headphones, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiReceptionPage() {
  const { t } = useTranslation();

  const featureIcons = [
    <Mic size={36} className="text-blue-600" />,
    <Clock size={36} className="text-blue-600" />,
    <Calendar size={36} className="text-blue-600" />,
    <Bot size={36} className="text-blue-600" />,
    <MessageSquare size={36} className="text-blue-600" />,
    <BarChart3 size={36} className="text-blue-600" />,
  ];

  const features = t('aireception.features', { returnObjects: true }) as { title: string; description: string }[];
  const checklist = t('aireception.problem.checklist', { returnObjects: true }) as string[];
  const callLines = t('aireception.call.lines', { returnObjects: true }) as { role: string; text: string }[];
  const rows = t('aireception.comparison.rows', { returnObjects: true }) as string[][];
  const faqs = t('aireception.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('aireception.seo.title')}
        description={t('aireception.seo.description')}
        canonical="/digital/ai-reception"
        keywords={t('aireception.seo.keywords')}
      />

      <HeroSection
        title={t('aireception.hero.title')}
        subtitle={t('aireception.hero.subtitle')}
        ctaText={t('aireception.hero.cta')}
        ctaLink="/kontakt"
        secondaryCtaText={t('aireception.hero.secondaryCta')}
        secondaryCtaLink="/digital/ai-widget"
        backgroundImage="/heroes/hero-voice.jpg"
      />

      {/* Problem / Solution */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">{t('aireception.problem.label')}</span>
              <h2 className="mb-6">{t('aireception.problem.title')}</h2>
              <p className="text-slate-500 mb-5 leading-relaxed">{t('aireception.problem.p1')}</p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {t('aireception.problem.solutionPre')}
                <strong className="text-slate-800">{t('aireception.problem.solutionStrong')}</strong>
                {t('aireception.problem.solutionPost')}
              </p>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {/* Simulated call */}
              <div className="bg-slate-900 rounded-3xl p-6 text-white font-mono text-sm">
                <div className="flex items-center gap-2 mb-5 text-slate-400 text-xs">
                  <Headphones size={14} />
                  <span>{t('aireception.call.header')}</span>
                  <span className="ml-auto text-green-400">● {t('aireception.call.connected')}</span>
                </div>
                <div className="space-y-3">
                  {callLines.map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className={`${line.role === 'ai' ? 'text-blue-400' : 'text-green-400'} flex-shrink-0`}>
                        {line.role === 'ai' ? 'AI:' : `${t('aireception.call.callerLabel')}:`}
                      </span>
                      <span className="text-slate-300">{line.text}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-slate-700 text-slate-500 text-xs flex items-center gap-2">
                    <Calendar size={12} />
                    {t('aireception.call.booked')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">{t('aireception.featuresSection.label')}</span>
            <h2 className="mb-4">{t('aireception.featuresSection.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('aireception.featuresSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-8 bg-white">
                <div className="mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label">{t('aireception.comparison.label')}</span>
            <h2 className="mb-4">{t('aireception.comparison.title')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 pr-6 text-slate-500 font-medium"></th>
                  <th className="py-4 px-6 text-blue-600 font-bold text-center bg-blue-50 rounded-t-xl">{t('aireception.comparison.headAi')}</th>
                  <th className="py-4 px-6 text-slate-600 font-bold text-center">{t('aireception.comparison.headHuman')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feature, ai, human], i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-4 pr-6 text-slate-700 font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center bg-blue-50 text-blue-700 font-semibold">{ai}</td>
                    <td className="py-4 px-6 text-center text-slate-500">{human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/kontakt" className="btn btn-primary">
              {t('aireception.comparison.cta')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={t('aireception.faqTitle')} />

      <CTASection
        title={t('aireception.finalCta.title')}
        subtitle={t('aireception.finalCta.subtitle')}
        primaryText={t('aireception.finalCta.primary')}
        primaryLink="/kontakt"
        secondaryText={t('aireception.finalCta.secondary')}
        secondaryLink="/digital/ai-widget"
      />
    </>
  );
}
