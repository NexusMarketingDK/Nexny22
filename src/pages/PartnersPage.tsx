import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const PartnersPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const benefits = [
    {
      icon: <TrendingUp size={40} className="text-blue-600" />,
      title: 'Skalér dit salg',
      description: 'Nexny leverer kvalificerede møder og varme leads direkte til dit salgsteam – så I kan skalere uden at ansætte.'
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: 'Klar ROI-rapportering',
      description: 'Du får løbende adgang til performance-data, mødestatistik og ROI-beregning i klare, handlingsrettede rapporter.'
    },
    {
      icon: <HeartHandshake size={40} className="text-blue-600" />,
      title: 'Tilpasset til dig',
      description: 'Vi skræddersyr vores løsning til din branche, målgruppe og budget. Ingen standardpakker – kun præcis det du har brug for.'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Opstartsmøde', description: 'Vi starter med et grundigt møde for at forstå din virksomhed, dine produkter og din ideelle kunde.' },
    { number: '02', title: 'Strategi & Opsætning', description: 'Vi udvikler en skræddersyet strategi med klare KPI\'er, målsætninger og kommunikationsplaner.' },
    { number: '03', title: 'Kampagnestart', description: 'Vores team briefes grundigt og går i gang med telemarketing eller mødebooking med løbende feedback og justering.' },
    { number: '04', title: 'Opfølgning & Optimering', description: 'Vi evaluerer resultater løbende og optimerer indsatsen kontinuerligt for at sikre den bedste ROI for dig.' }
  ];

  const faqs = [
    {
      question: 'Hvad koster det at samarbejde med Nexny?',
      answer: 'Prisen afhænger af din branche, opgavens omfang og den valgte model. Vi tilbyder både No Cure No Pay og faste pakkeløsninger. Kontakt os for et skræddersyet tilbud.'
    },
    {
      question: 'Hvornår kan I starte?',
      answer: 'Typisk kan vi starte aktiv indsats inden for 1-2 uger efter en grundig opstartsbriefing.'
    },
    {
      question: 'Hvilke brancher arbejder I med?',
      answer: 'Vi arbejder med en bred vifte af B2B brancher – fra IT og SaaS til energi, facility, finans og konsulentbranchen.'
    },
    {
      question: 'Hvad er minimumsperioden for samarbejde?',
      answer: 'Vi anbefaler minimum 3 måneder for at se solide resultater, men vi er fleksible og tilpasser os din situation.'
    }
  ];

  return (
    <>
      <SEO
        title="Bliv Samarbejdspartner | Nexny – B2B Salg & Mødebooking"
        description="Start et samarbejde med Nexny og få adgang til professionel B2B telemarketing og mødebooking. Vi leverer kvalificerede salgsmøder og målbare resultater til din virksomhed."
        canonical="/samarbejdspartner"
        keywords="Nexny samarbejdspartner, outsource salg, mødebooking partner, B2B salg, telemarketing bureau"
      />

      <HeroSection
        title="Lad Nexny Drive Dit Salg"
        subtitle="Bliv samarbejdspartner og få adgang til et dedikeret salgsteam der leverer kvalificerede møder, varme leads og dokumenterede resultater – uden ansættelsesbyrden."
        ctaText="Start samarbejde"
        ctaLink="#kontakt-formular"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvorfor vælge Nexny som salgspartner?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny kombinerer menneskelig salgskraft med datadrevne metoder for at levere resultater der gør en reel forskel for din bundlinje.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sådan starter samarbejdet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-formular" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Kontakt Nexny</h2>
            <p className="text-lg text-gray-600">Udfyld formularen og vi vender tilbage inden for én hverdag.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <iframe
              data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Bliv samarbejdspartner med Nexny"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ofte stillede spørgsmål</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at samarbejde med Nexny?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag det første skridt mod mere vækst. Kontakt os og hør hvad Nexny kan gøre for din virksomhed.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kom i gang <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
