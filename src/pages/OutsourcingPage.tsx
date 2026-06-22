import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock, Euro, CheckCircle, ArrowRight, Target, BarChart3, Shield, Award, Building, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const OutsourcingPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const outsourcingBenefits = [
    {
      icon: <Euro className="w-12 h-12 text-green-600" />,
      title: 'Reducerede Omkostninger',
      description: 'Spar op til 40% sammenlignet med at ansætte interne medarbejdere. Ingen omkostninger til rekruttering, træning, løn, pension eller ferie.',
      details: [
        'Ingen rekrutteringsomkostninger',
        'Ingen trænings- og oplæringsperiode',
        'Ingen faste lønomkostninger',
        'Ingen pension, ferie eller sygedage'
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Øget Fokus på Kerneforretning',
      description: 'Frigør jeres interne ressourcer til at fokusere på produktudvikling, kundeservice og strategisk planlægning.',
      details: [
        'Mere tid til strategisk arbejde',
        'Fokus på kerneforretning',
        'Bedre ressourceudnyttelse',
        'Øget produktivitet internt'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Adgang til Ekspertise',
      description: 'Få adgang til erfarne specialister med dyb viden om B2B telemarketing og mødebooking teknikker.',
      details: [
        'Erfarne telemarketingspecialister',
        'Opdateret viden om best practices',
        'Avancerede salgsmetoder',
        'Branchespecifik ekspertise'
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      title: 'Hurtigere Resultater',
      description: 'Kom i gang med professionel mødebooking inden for 1-2 uger i stedet for måneder med rekruttering og træning.',
      details: [
        'Øjeblikkelig opstart',
        'Ingen oplæringsperiode',
        'Erfarne medarbejdere fra dag 1',
        'Hurtigere ROI'
      ]
    }
  ];

  const internalVsOutsourcing = [
    {
      category: 'Intern Mødebooker',
      setup: '3-6 måneder',
      cost: '45.000-60.000 kr./md',
      expertise: 'Variabel - afhænger af erfaring',
      flexibility: 'Lav - fast omkostning',
      risk: 'Høj - ingen garanti for resultater',
      management: 'Kræver løbende ledelse'
    },
    {
      category: 'Nexus Marketing Outsourcing',
      setup: '1-2 uger',
      cost: 'Fra 15.000 kr./md eller pay-per-meeting',
      expertise: 'Høj - erfarne specialister',
      flexibility: 'Høj - skalerbar efter behov',
      risk: 'Lav - no cure no pay mulighed',
      management: 'Minimal - vi håndterer alt'
    }
  ];

  const whyNexusMarketing = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Over 20 års erfaring',
      description: 'Dokumenteret track record med succesfulde B2B telemarketing kampagner'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'No Cure No Pay model',
      description: 'Betal kun for konkrete resultater - ingen risiko for jeres virksomhed'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: 'Transparent rapportering',
      description: 'Detaljerede rapporter og fuld indsigt i alle aktiviteter og resultater'
    },
    {
      icon: <Building className="w-8 h-8 text-orange-600" />,
      title: 'Branchespecialisering',
      description: 'Erfaring med telemarketing på tværs af mange forskellige B2B brancher'
    }
  ];

  const commonChallenges = [
    {
      challenge: 'Manglende tid til mødebooking',
      solution: 'Vi overtager hele mødebooking processen, så jeres salgsteam kan fokusere på at lukke handler.',
      impact: 'Øget salgseffektivitet og bedre udnyttelse af jeres salgsteam.'
    },
    {
      challenge: 'Høje rekrutteringsomkostninger',
      solution: 'Ingen rekruttering nødvendig - vi har erfarne mødebookere klar til at starte med det samme.',
      impact: 'Spar tid og penge på rekruttering og kom hurtigere i gang med resultater.'
    },
    {
      challenge: 'Inkonsistente resultater',
      solution: 'Vores erfarne team leverer konsistente, målbare resultater med dokumenteret track record.',
      impact: 'Forudsigelige resultater og bedre planlægning af jeres salgsaktiviteter.'
    },
    {
      challenge: 'Manglende ekspertise',
      solution: 'Adgang til specialister med dyb viden om B2B telemarketing og moderne salgsteknikker.',
      impact: 'Højere konverteringsrater og bedre kvalitet af bookede møder.'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Indledende Analyse',
      description: 'Vi analyserer jeres målgruppe, produkter og salgsmål for at udvikle den optimale strategi.'
    },
    {
      step: '2',
      title: 'Strategi & Setup',
      description: 'Udvikling af skræddersyet mødebooking strategi og integration med jeres systemer.'
    },
    {
      step: '3',
      title: 'Implementering',
      description: 'Vores erfarne team starter mødebooking med løbende optimering og feedback.'
    },
    {
      step: '4',
      title: 'Resultater & Rapportering',
      description: 'Løbende levering af kvalificerede møder med detaljeret rapportering og analyse.'
    }
  ];

  return (
    <>
      <SEO 
        title="Hvorfor Vælge Nexus Marketing? | Professionel Mødebooking & Telesalg"
        description="Lær hvorfor Nexus Marketing er det rigtige valg for jeres mødebooking og telesalg. Over 20 års erfaring, no cure no pay model og dokumenterede resultater."
        canonical="/hvorfor-nexusmarketing"
        keywords="Nexus Marketing, professionel mødebooking, telesalg eksperter, B2B salg outsourcing, mødebooking specialister, telemarketing bureau"
      />

      <HeroSection
        title="Hvorfor Vælge Nexus Marketing?"
        subtitle="Med over 20 års erfaring og dokumenterede resultater er vi jeres ideelle partner for professionel mødebooking og telesalg. Fokuser på jeres kerneforretning mens vi håndterer jeres leadgenerering."
        ctaText="Se vores løsninger"
        ctaLink="#solutions"
        secondaryCtaText="Få uforpligtende tilbud"
        secondaryCtaLink="#contact-form"
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Main Benefits Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fordele ved at Vælge Nexus Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexus Marketing giver jeres virksomhed konkrete fordele gennem vores professionelle tilgang 
              til mødebooking og telesalg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {outsourcingBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="mr-4">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intern Mødebooker vs. Nexus Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se forskellen mellem at ansætte internt og vælge Nexus Marketing som jeres partner
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {internalVsOutsourcing.map((option, index) => (
                  <div key={index} className={`p-8 ${index === 1 ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}>
                    <h3 className={`text-xl font-bold mb-6 ${index === 1 ? 'text-blue-600' : 'text-gray-800'}`}>
                      {option.category}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="font-medium text-gray-700">Opstartid:</span>
                        <span className="ml-2 text-gray-600">{option.setup}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Månedlige omkostninger:</span>
                        <span className="ml-2 text-gray-600">{option.cost}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Ekspertise niveau:</span>
                        <span className="ml-2 text-gray-600">{option.expertise}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Fleksibilitet:</span>
                        <span className="ml-2 text-gray-600">{option.flexibility}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Risiko:</span>
                        <span className="ml-2 text-gray-600">{option.risk}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Ledelse krav:</span>
                        <span className="ml-2 text-gray-600">{option.management}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexus Marketing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad Gør Nexus Marketing Unik?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi er ikke bare en leverandør - vi er jeres strategiske partner i vækst og succes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyNexusMarketing.map((reason, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">No Cure No Pay Garanti</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Med vores pay-per-meeting model eliminerer vi al risiko for jeres virksomhed. I betaler kun for 
              succesfuldt bookede møder med kvalificerede beslutningstagere. Ingen faste omkostninger, 
              ingen skjulte gebyrer - kun resultater.
            </p>
            <Link to="/priser" className="btn btn-primary inline-flex items-center">
              Se vores prismodeller <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Udfordringer vi Løser for Jeres Virksomhed</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi forstår de udfordringer, B2B virksomheder står overfor, og har udviklet løsninger der virker
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-600 mb-2">Udfordring:</h3>
                    <p className="text-gray-600">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-600 mb-2">Vores løsning:</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">Resultat:</h3>
                    <p className="text-gray-600">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sådan Kommer I i Gang med Nexus Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores strukturerede proces sikrer hurtig opstart og optimale resultater fra dag ét
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nexus Marketing - Jeres Professionelle Partner i Mødebooking og Telesalg</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Over 20 Års Erfaring i B2B Salg</h3>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing har specialiseret sig i professionel mødebooking og telesalg siden starten. 
                    Med over 20 års erfaring i B2B markedet har vi opbygget en dyb forståelse for, hvad der 
                    skal til for at skabe succesfulde salgskampagner og generere kvalificerede leads.
                  </p>
                  <p className="text-gray-600">
                    Vores team består af erfarne specialister, der forstår kompleksiteten i moderne B2B salg 
                    og ved, hvordan man navigerer i forskellige brancher og målgrupper. Vi har hjulpet 
                    hundredvis af virksomheder med at øge deres salg og vækste deres forretning.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Dokumenterede Resultater og Succes</h3>
                  <p className="text-gray-600 mb-4">
                    Vores track record taler for sig selv. Vi har gennemført over 200 succesfulde kampagner 
                    og hjulpet vores kunder med at opnå gennemsnitligt 35% stigning i kvalificerede leads. 
                    Vores no cure no pay model sikrer, at vi kun får betaling, når vi leverer resultater.
                  </p>
                  <p className="text-gray-600">
                    Nexus Marketing er kendt for vores professionelle tilgang, transparente rapportering og 
                    evne til at tilpasse vores services til hver kundes specifikke behov. Vi ser os selv 
                    som en forlængelse af jeres salgsteam og arbejder dedikeret for jeres succes.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Hvorfor Nexus Marketing er det Rigtige Valg</h3>
                <p className="text-gray-600 mb-4">
                  Nexus Marketing adskiller sig fra andre udbydere gennem vores fokus på kvalitet frem for kvantitet, 
                  vores innovative pay-per-meeting model og vores dybe forståelse for B2B markedet. Vi investerer 
                  tid i at forstå jeres forretning, produkter og målgruppe for at sikre optimale resultater.
                </p>
                <p className="text-gray-600">
                  Vores pay-per-meeting model er revolutionerende på markedet og giver jer fuldstændig kontrol 
                  over jeres investering. I betaler kun for møder, der rent faktisk bliver gennemført med 
                  kvalificerede beslutningstagere, hvilket eliminerer al risiko og sikrer optimal ROI.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Branchespecialisering og Ekspertise</h3>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing har erfaring med mødebooking og telesalg på tværs af mange forskellige 
                    B2B brancher, herunder IT, konsulentydelser, industri, energi og finans. Vores 
                    branchespecifikke viden gør os i stand til at tilpasse vores tilgang og opnå 
                    bedre resultater for hver kunde.
                  </p>
                  <p className="text-gray-600">
                    Vi forstår, at hver branche har sine unikke udfordringer, målgrupper og salgscyklusser. 
                    Derfor udvikler vi skræddersyede strategier, scripts og kvalificeringskriterier, 
                    der matcher jeres specifikke marked og produkter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Moderne Teknologi og Rapportering</h3>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing investerer løbende i moderne teknologi og CRM-systemer for at sikre 
                    optimal effektivitet og transparens. Vi tilbyder detaljerede rapporter og real-time 
                    indsigt i alle aktiviteter og resultater, så I altid ved, hvordan jeres kampagne 
                    performer.
                  </p>
                  <p className="text-gray-600">
                    Vores avancerede rapportering inkluderer ikke kun kvantitative metrics, men også 
                    kvalitativ feedback fra potentielle kunder, markedsindsigter og anbefalinger til 
                    optimering af jeres salgsproces og produktpositionering.
                  </p>
                </div>
              </div>

              <div className="text-center bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Start Jeres Samarbejde med Nexus Marketing i Dag</h3>
                <p className="text-gray-600 mb-6">
                  Hvis I er klar til at opleve fordelene ved at arbejde med Nexus Marketing, så kontakt os 
                  i dag for en uforpligtende konsultation. Vi analyserer jeres behov og udvikler en 
                  skræddersyet løsning, der passer til jeres virksomhed og budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/priser" className="btn btn-primary inline-flex items-center">
                    Se vores priser <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/samarbejdspartner" className="btn btn-secondary inline-flex items-center">
                    Bliv samarbejdspartner <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Få et Uforpligtende Tilbud fra Nexus Marketing</h2>
              <p className="text-lg text-gray-600">
                Udfyld formularen nedenfor, så kontakter vi jer inden for 24 timer med et skræddersyet tilbud 
                på professionel mødebooking og telesalg.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <iframe 
                data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Kontakt Nexus Marketing - Hvorfor Nexus Marketing"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutsourcingPage;