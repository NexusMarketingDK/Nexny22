import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ArrowRight, RefreshCw, Lock, Layers, Globe } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function ApiSaasPage() {
  const features = [
    {
      icon: <Settings size={36} className="text-blue-600" />,
      title: 'API-udvikling og integration',
      description: 'Vi designer og bygger RESTful og GraphQL API\'er der binder dine systemer og tjenester sammen – sikkert og skalerbart.'
    },
    {
      icon: <RefreshCw size={36} className="text-blue-600" />,
      title: 'Systemintegration',
      description: 'Nexny integrerer dine eksisterende platforme – CRM, ERP, betalingsløsninger, marketing-tools – i et sammenhængende digitalt setup.'
    },
    {
      icon: <Layers size={36} className="text-blue-600" />,
      title: 'SaaS-platforme',
      description: 'Vi bygger skalerbare SaaS-løsninger med multi-tenant arkitektur, abonnementsstyring og automatiserede brugerflows.'
    },
    {
      icon: <Lock size={36} className="text-blue-600" />,
      title: 'Sikker datahåndtering',
      description: 'Alle API\'er og integrationer bygges med GDPR og datasikkerhed i centrum – tokenstyring, kryptering og adgangskontrol inkluderet.'
    }
  ];

  const useCases = [
    'CRM-integration (HubSpot, Salesforce, Pipedrive)',
    'Betalingsgateway-opsætning (Stripe, Quickpay)',
    'ERP-kobling (e-conomic, Dinero, Business Central)',
    'Email-marketing automation (Mailchimp, ActiveCampaign)',
    'Webhook og event-drevet arkitektur',
    'Single Sign-On (SSO) og OAuth 2.0',
    'Data-pipeline og rapporteringsintegration',
    'Tredjepartsplatforme og marketplace-API\'er'
  ];

  return (
    <>
      <SEO
        title="API & SaaS Udvikling | Nexny – Systemintegration og Platforme"
        description="Nexny udvikler robuste API-løsninger og SaaS-platforme der binder dine systemer sammen. Skalerbar arkitektur og sikker datahåndtering."
        canonical="/digital/api-saas"
        keywords="API udvikling, SaaS platform, systemintegration, REST API, GraphQL, Nexny digital"
      />

      <HeroSection
        title="API & SaaS Løsninger fra Nexny"
        subtitle="Vi bygger de digitale broer der får dine systemer til at tale sammen – og platforme der skalerer med din forretning."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad Nexny tilbyder inden for API & SaaS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fra enkle integrationer til komplekse SaaS-produkter – vi har teknologien og erfaringen til at levere robuste digitale løsninger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
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
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="API og SaaS udvikling hos Nexny"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Integrationer vi arbejder med</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi har erfaring med en bred vifte af platforme og teknologier – og er vant til at bygge brugerdefinerede integrationer der passer præcis til jeres behov.
              </p>
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
                  Diskuter dit projekt <ArrowRight size={16} className="ml-2" />
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
            <h2 className="text-3xl font-bold mb-6">Skalerbare løsninger der vokser med dig</h2>
            <p className="text-lg text-gray-600 mb-8">
              Uanset om du skal integrere to systemer eller bygge en fuld SaaS-platform fra bunden, sikrer Nexny at arkitekturen kan håndtere din vækst – nu og fremover.
            </p>
            <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Kom i gang <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Har du et API- eller SaaS-projekt?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os hvad du har brug for – vi leverer et konkret og uforpligtende tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Nexny nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvad er en API-integration?', answer: 'En API-integration forbinder to eller flere systemer så de kan udveksle data automatisk – f.eks. dit CRM med din hjemmeside eller et betalingssystem.' },
        { question: 'Kan I bygge en SaaS-platform fra bunden?', answer: 'Ja – Nexny har erfaring med at designe og udvikle komplette SaaS-applikationer med brugeradministration, betalingsintegration og skalerbar infrastruktur.' },
        { question: 'Hvad er en webhook?', answer: 'En webhook er en automatisk notifikation der sendes fra ét system til et andet, når en bestemt hændelse opstår – f.eks. når en ordre er gennemført.' },
        { question: 'Kan I integrere med eksisterende systemer?', answer: 'Ja – vi har erfaring med integrationer til de mest populære CRM-, ERP- og marketingsystemer.' },
      ]} />
      <CTASection
        title="Lad Nexny bygge din næste API eller SaaS-løsning"
        subtitle="Skalerbare digitale platforme og integrationer der driver din forretning fremad."
        primaryText="Start dit projekt"
        primaryLink="/kontakt"
      />
    </>
  );
}
