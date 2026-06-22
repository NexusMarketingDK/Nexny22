import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const PartnersPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: <TrendingUp size={40} className="text-blue-600" />,
      title: 'Øg jeres salg',
      description: 'Få flere kvalificerede leads og bookede møder, så jeres salgsteam kan fokusere på at lukke handler.'
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: 'Målbare resultater',
      description: 'Få detaljerede rapporter og indsigt i jeres kampagners performance og ROI.'
    },
    {
      icon: <HeartHandshake size={40} className="text-blue-600" />,
      title: 'Skræddersyede løsninger',
      description: 'Vi tilpasser vores services til jeres specifikke behov, målgruppe og budget.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Indledende møde',
      description: 'Vi starter med et møde for at forstå jeres virksomhed, produkter, services og målgruppe.'
    },
    {
      number: '02',
      title: 'Strategi & Setup',
      description: 'Vi udarbejder en skræddersyet strategi baseret på jeres mål og fastlægger KPI&apos;er og succeskriterier.'
    },
    {
      number: '03',
      title: 'Implementering',
      description: 'Vores team briefes grundigt og starter telemarketing eller mødebooking med løbende feedback.'
    },
    {
      number: '04',
      title: 'Opfølgning & Optimering',
      description: 'Vi følger op på resultater, evaluerer og optimerer løbende for at sikre de bedste resultater.'
    }
  ];

  const faqs = [
    {
      question: 'Hvad er minimumskravet for et samarbejde?',
      answer: 'Vi har ingen faste minimumskrav, men vi anbefaler typisk kampagner på mindst 3 måneder for at opnå de bedste resultater. Vi tilpasser altid vores service til jeres specifikke behov og budget.'
    },
    {
      question: 'Hvordan kvalificerer I leads?',
      answer: 'Vi arbejder med klare definitioner og kriterier for kvalificerede leads, som vi fastlægger sammen med jer. Dette inkluderer typisk beslutningskompetence, budget, behov og timing.'
    },
    {
      question: 'Kan I integrere med vores CRM-system?',
      answer: 'Ja, vi kan integrere med de fleste populære CRM-systemer for at sikre en smidig overførsel af leads og data.'
    },
    {
      question: 'Hvilke brancher har I erfaring med?',
      answer: 'Vi har erfaring med B2B-telemarketing og mødebooking på tværs af mange brancher, herunder IT, finans, konsulentydelser, produktion og mere. Vores team kan hurtigt sætte sig ind i nye brancher og produkter.'
    },
    {
      question: 'Hvor hurtigt kan I komme i gang?',
      answer: 'Efter det indledende møde og strategiudvikling kan vi typisk være i gang inden for 1-2 uger. Vi prioriterer en grundig briefing og setup for at sikre de bedste resultater fra start.'
    },
    {
      question: 'Hvordan rapporterer I på resultater?',
      answer: 'I får ugentlige og månedlige rapporter med detaljerede metrics som antal opkald, kontaktrate, kvalificerede leads, bookede møder og konverteringsrater. Vi tilbyder også løbende strategiske anbefalinger.'
    },
    {
      question: 'Hvad koster jeres services?',
      answer: 'Vores priser afhænger af projektets omfang, kompleksitet og varighed. Vi tilbyder både faste månedlige pakker og performance-baserede modeller. Kontakt os for et skræddersyet tilbud.'
    },
    {
      question: 'Kan I hjælpe med internationale markeder?',
      answer: 'Ja, vi har erfaring med telemarketing og mødebooking på internationale markeder, særligt i Europa. Vi tilpasser vores tilgang til lokale kulturer og forretningspraksis.'
    },
    {
      question: 'Hvad sker der, hvis vi ikke er tilfredse med resultaterne?',
      answer: 'Vi arbejder tæt sammen med vores kunder for at sikre tilfredshed. Hvis resultaterne ikke lever op til forventningerne, analyserer vi sammen årsagerne og justerer strategien. Vi tror på langsigtede partnerskaber baseret på gensidig succes.'
    },
    {
      question: 'Hvordan sikrer I kvaliteten af jeres mødebookere?',
      answer: 'Alle vores mødebookere gennemgår grundig træning i jeres produkter, målgruppe og værdipropositionen. Vi har løbende kvalitetskontrol, coaching og performance-evaluering for at sikre høj standard.'
    }
  ];

  return (
    <>
      <SEO 
        title="Samarbejdspartner | Professionel B2B Telemarketing & Mødebooking"
        description="Boost din virksomheds vækst med professionel telemarketing og mødebooking. Vi leverer kvalificerede leads og bookede møder til B2B virksomheder. ✓ Målbare resultater ✓ Transparent rapportering"
        canonical="/samarbejdspartner"
        keywords="B2B telemarketing, mødebooking partner, leadgenerering, outsourcing salg, B2B marketing, salgsoptimering"
      />

      <HeroSection
        title="Bliv samarbejdspartner med Nexus Marketing"
        subtitle="Outsource jeres telemarketing og mødebooking til eksperter og fokuser på det, I er bedst til."
        ctaText="Kontakt os for et tilbud"
        ctaLink="#contact-form"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Why Partner With Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Hvorfor samarbejde med os?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi hjælper jeres virksomhed med at generere kvalificerede leads og booke møder, så I kan fokusere på at lukke handler og vækste jeres forretning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Vi hjælper jer med:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Telemarketing og leadgenerering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Mødebooking med beslutningstagere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Kundepleje og opfølgning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Markedsundersøgelser og feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Opdatering af kunde- og prospektdatabaser</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Strategi og rådgivning om telemarketing</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="#contact-form" className="btn btn-primary inline-flex items-center">
                    Få et uforpligtende tilbud <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Professionel telemarketing samarbejde" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Vores samarbejdsproces</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tror på et tæt samarbejde med vores partnere for at sikre de bedste resultater. Her er hvordan processen foregår:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10 h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight size={24} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Optimized Content Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hvorfor Nexus Marketing er den rigtige partner for jeres telemarketing og mødebooking</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ekspertise i B2B Telemarketing</h3>
                  <p className="text-gray-600 mb-4">
                    Med over 20 års erfaring i B2B telemarketing har Nexus Marketing opbygget en dyb forståelse for, 
                    hvad der skal til for at skabe succesfulde kampagner. Vores team af erfarne telemarketingkonsulenter 
                    forstår kompleksiteten i B2B-salg og ved, hvordan man navigerer i forskellige brancher og målgrupper.
                  </p>
                  <p className="text-gray-600">
                    Vi specialiserer os i at identificere og kvalificere de rigtige leads for jeres virksomhed. 
                    Gennem grundig research og målrettet kommunikation sikrer vi, at I kun får præsenteret for 
                    potentielle kunder, der har reel interesse og købekraft.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professionel Mødebooking med Beslutningstagere</h3>
                  <p className="text-gray-600 mb-4">
                    Vores mødebookere er specialister i at identificere og komme i kontakt med de rigtige 
                    beslutningstagere i jeres målvirksomheder. Vi forstår vigtigheden af at booke møder med 
                    personer, der har både autoritet og budget til at træffe købsbeslutninger.
                  </p>
                  <p className="text-gray-600">
                    Gennem strukturerede samtaler og professionel opfølgning sikrer vi en høj møderate og 
                    kvalificerede leads, der er klar til at høre om jeres løsninger. Vores mødebookere er 
                    trænet i at skabe interesse og værdi allerede i den første kontakt.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Målbare Resultater og Transparent Rapportering</h3>
                <p className="text-gray-600 mb-4">
                  Hos Nexus Marketing tror vi på fuldstændig transparens i vores samarbejde. I får detaljerede 
                  rapporter om alle aktiviteter, inklusiv antal opkald, kontaktrate, kvalificerede leads, 
                  bookede møder og konverteringsrater. Dette giver jer mulighed for at følge jeres ROI tæt 
                  og træffe informerede beslutninger om jeres markedsføringsinvesteringer.
                </p>
                <p className="text-gray-600">
                  Vores rapportering inkluderer også kvalitativ feedback fra potentielle kunder, markedsindsigter 
                  og anbefalinger til optimering af jeres salgsproces. Vi ser os selv som en forlængelse af 
                  jeres salgsteam og bidrager aktivt til jeres strategiske udvikling.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skræddersyede Løsninger til Jeres Branche</h3>
                  <p className="text-gray-600 mb-4">
                    Vi forstår, at hver branche har sine unikke udfordringer og muligheder. Derfor tilpasser 
                    vi altid vores tilgang til jeres specifikke marked, produkter og målgruppe. Vores team 
                    sætter sig grundigt ind i jeres forretning og bliver eksperter i jeres værdipropositionen.
                  </p>
                  <p className="text-gray-600">
                    Uanset om I opererer inden for IT, finans, industri, konsulentydelser eller andre B2B-sektorer, 
                    har vi erfaring og ekspertise til at levere resultater. Vi udvikler skræddersyede scripts, 
                    kvalificeringskriterier og kampagnestrategier, der matcher jeres specifikke behov.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fokus på Langsigtet Partnerskab</h3>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing ser ikke blot sig selv som en leverandør, men som en strategisk partner 
                    i jeres vækstrejse. Vi investerer tid i at forstå jeres langsigtede mål og tilpasser 
                    vores services i takt med jeres udvikling og ændrede behov.
                  </p>
                  <p className="text-gray-600">
                    Vores succes måles på jeres succes. Derfor arbejder vi kontinuerligt på at optimere 
                    vores processer, forbedre vores resultater og bidrage til jeres konkurrenceevne på 
                    markedet. Vi er stolte af de langvarige partnerskaber, vi har opbygget med vores kunder.
                  </p>
                </div>
              </div>

              <div className="text-center bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Start Jeres Vækstrejse med Nexus Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Hvis I er klar til at tage jeres B2B-salg til næste niveau gennem professionel telemarketing 
                  og mødebooking, så er Nexus Marketing den rigtige partner for jer. Kontakt os i dag for en 
                  uforpligtende samtale om, hvordan vi kan hjælpe jeres virksomhed med at nå sine salgsmål 
                  og skabe bæredygtig vækst.
                </p>
                <Link to="#contact-form" className="btn btn-primary inline-flex items-center">
                  Kontakt os for et uforpligtende tilbud <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Få et uforpligtende tilbud på telemarketing og mødebooking</h2>
              <p className="text-lg text-gray-600">
                Udfyld formularen nedenfor, så kontakter vi jer inden for 24 timer med et skræddersyet tilbud 
                til jeres virksomheds behov.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <iframe 
                data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Kontakt Nexus Marketing - Samarbejdspartner"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ofte stillede spørgsmål</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Her finder du svar på nogle af de mest almindelige spørgsmål om samarbejde med Nexus Marketing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Har du andre spørgsmål? Vi er altid klar til at hjælpe.
            </p>
            <Link to="#contact-form" className="btn btn-primary inline-flex items-center">
              Kontakt os <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;