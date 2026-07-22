import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Mic, ArrowRight, CheckCircle } from 'lucide-react';

interface AiSolutionsSectionProps {
  variant?: 'light' | 'dark';
}

const AiSolutionsSection: React.FC<AiSolutionsSectionProps> = ({ variant = 'light' }) => {
  const { t } = useTranslation();

  const solutionMeta = [
    { icon: <MessageSquare size={28} className="text-blue-500" />, href: '/digital/ai-widget', accent: 'from-blue-500 to-indigo-600' },
    { icon: <Mic size={28} className="text-indigo-500" />, href: '/digital/ai-reception', accent: 'from-indigo-500 to-violet-600' },
  ];
  const solutionsText = t('aisolutions.solutions', { returnObjects: true }) as { badge: string; title: string; description: string; features: string[]; ctaText: string }[];
  const solutions = solutionsText.map((s, i) => ({ ...s, ...solutionMeta[i] }));
  const stats = t('aisolutions.stats', { returnObjects: true }) as { value: string; label: string }[];

  const bg = variant === 'dark' ? 'bg-slate-900' : 'bg-sky-50';
  const headingColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const cardBg = variant === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100';
  const cardTitle = variant === 'dark' ? 'text-white' : 'text-slate-800';
  const cardText = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const checkColor = variant === 'dark' ? 'text-blue-400' : 'text-blue-600';
  const featureText = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';

  return (
    <section className={`section ${bg}`}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-label">{t('aisolutions.label')}</span>
          <h2 className={`mb-4 ${headingColor}`}>{t('aisolutions.title')}</h2>
          <p className={`max-w-2xl mx-auto ${subColor}`}>{t('aisolutions.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((s, i) => (
            <div key={i} className={`rounded-3xl border p-8 flex flex-col ${cardBg}`}>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center`}>
                  {React.cloneElement(s.icon, { className: 'text-white' })}
                </div>
                <span className="badge">{s.badge}</span>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${cardTitle}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${cardText}`}>{s.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle size={16} className={`${checkColor} mt-0.5 flex-shrink-0`} />
                    <span className={`text-sm ${featureText}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={s.href}
                className="btn btn-primary self-start"
              >
                {s.ctaText} <ArrowRight size={15} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className={`rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-blue-600 text-white'}`}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div className={`text-2xl font-black mb-1 ${variant === 'dark' ? 'text-blue-400' : 'text-white'}`}>{stat.value}</div>
              <div className={`text-xs font-medium ${variant === 'dark' ? 'text-slate-400' : 'text-blue-100'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSolutionsSection;
