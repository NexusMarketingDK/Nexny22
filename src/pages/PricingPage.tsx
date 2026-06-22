import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Target, Award, ChevronDown, ChevronUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const PricingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const pricingModels = [
    {
      title: 'Pakkeløsning',
      subtitle: 'Fast månedlig ydelse',
      description: 'Den mest omkostningseffektive model til kontinuerlig mødebooking med faste, forudsigelige omkostninger',
      features: [
        'Dedikeret mødebooker tilknyttet din kampagne',
        'Garanteret minimumsantal salgsmøder',
        'Laveste pris pr. møde ved fast aftale',
        'Aflyste møder erstattes automatisk',
        'Løbende strategi- og scriptoptimering',
        'Månedlig performance-rapport',
        'Fleksibel opsigelse med 30 dages varsel',
        'Prioriteret support og dedikeret kontaktperson'
      ],
      highlight: true,
      icon: Target
    },
    {
      title: 'No Cure No Pay',
      subtitle: 'Betal kun for resultater',
      description: 'Den risikofrie model – du betaler udelukkende for gennemførte, kvalificerede møder',
      features: [
        'Ingen forudgående investering eller binding',
        'Fast pris pr. gennemført, kvalificeret møde',
        'Du definerer selv kvalitetskriterierne',
        'Ingen betaling for aflyste eller useriøse møder',
        'Perfekt til test af nye markeder og målgrupper',
        'Skalerbar op og ned efter behov',
        'Fuld transparens og løbende rapportering',
        'Resultatorienteret samarbejde med klart fokus'
      ],
      highlight: false,
      icon: Award
    }
  ];

  const faqItems = [
    {
      question: 'Hvad koster professionel mødebooking hos Nexny?',
      answer: 'Prisen på mødebooking hos Nexny afhænger af din branche, målgruppens kompleksitet og den valgte model. Med No Cure No Pay betaler du typisk pr. gennemført møde, mens pakkeløsninger giver lavere enhedspris ved fast månedlig aftale. Kontakt os for et uforpligtende og skræddersyet tilbud.'
    },
    {
      question: 'Hvordan fungerer No Cure No Pay hos Nexny?',
      answer: "Med Nexny's No Cure No Pay model betaler du kun for møder der lever op til jeres på forhånd aftalte kvalitetskrav. Vi definerer sammen, hvad der udgør et vellykket møde – f.eks. varighed, beslutningskompetence og branche. Aflyste eller useriøse møder faktureres ikke."
    },
    {
      question: 'Hvad er forskellen på No Cure No Pay og pakkeløsning hos Nexny?',
      answer: 'No Cure No Pay er ideel hvis du vil starte uden stor investering eller teste nye markeder. Du betaler kun for leverede resultater. Pakkeløsningen giver lavere pris pr. møde og mere forudsigelige omkostninger – bedst til virksomheder med et stabilt og kontinuerligt behov for mødebooking.'
    },
    {
      question: 'Hvilke brancher arbejder Nexny med?',
      answer: 'Nexny har erfaring fra en bred vifte af B2B brancher: tech og SaaS, IT-konsulenter, energi og bæredygtighed, facility management, finans og revision, HR, transport og logistik, markedsføring, inkasso og meget mere.'
    },
    {
      question: 'Hvornår modtager jeg de første møder fra Nexny?',
      answer: 'Efter en grundig opstartsbriefing kan Nexny typisk levere de første kvalificerede møder inden for 2-3 uger. Vi prioriterer solid forberedelse fremfor hurtig levering – det sikrer markant bedre mødekvalitet og færre no-shows.'
    },
    {
      question: 'Hvordan sikrer Nexny mødekvaliteten?',
      answer: 'Nexny sikrer høj mødekvalitet via: grundig lead-research og målgruppesegmentering, skræddersyede scripts og kommunikationsstrategier, BANT-baseret forhåndskvalificering, dobbelt mødebekræftelse samt løbende optimering baseret på sælgerfeedback.'
    }
  ];

  return (
    <>
      <SEO
        title="Priser & Pakker | Nexny – Mødebooking og Telemarketing"
        description="Se Nexny's prismodeller for professionel B2B mødebooking og telemarketing. Vælg mellem No Cure No Pay eller fast pakkeløsning. Transparente priser og dokumenterede resultater."
        canonical="/priser"
        keywords="Nexny priser, mødebooking pris, telemarketing pris, No Cure No Pay, pakkeløsning salg"
      />

      <HeroSection
        title="Priser & Pakker hos Nexny"
        subtitle="Gennemsigtige og fleksible prismodeller tilpasset din virksomheds behov. Betal for resultater – ikke for tid."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vælg din model hos Nexny</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder to gennemsigtige prismodeller – begge med fokus på målbare resultater og høj mødekvalitet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div key={index} className={`rounded-xl p-8 shadow-lg ${model.highlight ? 'bg-blue-600 text-white ring-4 ring-blue-300' : 'bg-white border border-gray-200'}`}>
                  <Icon className={`w-12 h-12 mb-4 ${model.highlight ? 'text-white' : 'text-blue-600'}`} />
                  <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
                  <p className={`text-sm mb-2 ${model.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{model.subtitle}</p>
                  <p className={`mb-6 ${model.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{model.description}</p>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${model.highlight ? 'text-white' : 'text-green-500'}`} size={18} />
                        <span className={`text-sm ${model.highlight ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${model.highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    Få et tilbud <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Ofte stillede spørgsmål om Nexny's priser</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Få et uforpligtende tilbud fra Nexny</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os om din virksomhed og dine mål – vi sender et skræddersyet tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Nexny nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Er der opstartsgebyr?', answer: 'Det afhænger af den valgte pakke. Kontakt os for at få en gennemgang af hvad der er inkluderet fra dag ét.' },
        { question: 'Kan vi opsige samarbejdet?', answer: 'Vi tilbyder fleksible aftaler med rimelige opsigelsesvarsler – typisk 1 måned.' },
        { question: 'Hvad er inkluderet i prisen?', answer: 'Afhængigt af pakken inkluderer prisen typisk kampagneplanlægning, opkaldstimer, rapportering, CRM-opdatering og løbende optimering.' },
        { question: 'Tilbyder I rabat ved langtidssamarbejde?', answer: 'Ja – ved 6 eller 12 måneders aftaler tilbyder vi fordelagtige priser. Kontakt os for et individuelt tilbud.' },
        { question: 'Kan vi skalere op eller ned?', answer: 'Absolut. Nexny\'s løsninger er designet til at skalere med din virksomheds behov og vækst.' },
      ]} />
      <CTASection
        title="Få et skræddersyet tilbud til din virksomhed"
        subtitle="Alle prismodeller er fleksible og tilpassede. Kontakt os for at finde den løsning der passer til dit budget og dine mål."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
      />
    </>
  );
};

export default PricingPage;
