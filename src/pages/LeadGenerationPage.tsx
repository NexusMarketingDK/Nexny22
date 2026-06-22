import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Phone, BarChart3, Database, Filter, Zap, Clock, Award, Shield, ChevronDown, ChevronUp, Search, FileText, UserCheck, Briefcase } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const LeadGenerationPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: Target,
      title: 'Præcis Målretning',
      description: 'Vi identificerer og kontakter nøjagtigt de beslutningstagere, der matcher din ideelle kundeprofil og har reelt købsbehov.'
    },
    {
      icon: Filter,
      title: 'Kvalificerede Leads',
      description: 'Alle leads bliver grundigt kvalificeret efter BANT-modellen (Budget, Authority, Need, Timeline) før de sendes videre til dit salgsteam.'
    },
    {
      icon: TrendingUp,
      title: 'Højere Konverteringsrate',
      description: 'Kvalificerede leads konverterer typisk 3-5x bedre end ukvalificerede kontakter, hvilket maksimerer dit salgs ROI.'
    },
    {
      icon: Clock,
      title: 'Spar Tid og Ressourcer',
      description: 'Dit salgsteam slipper for tidskrævende koldkald og kan fokusere 100% på at lukke handler med varme, kvalificerede leads.'
    }
  ];

  const serviceTypes = [
    {
      icon: Search,
      title: 'B2B Lead Research',
      description: 'Grundig research og identificering af potentielle kunder baseret på din ideelle kundeprofil.',
      features: [
        'Identificering af målvirksomheder',
        'Research af beslutningstagere',
        'Kontaktoplysninger og verifikation',
        'Firmografisk data og insights',
        'GDPR-compliant databaser'
      ]
    },
    {
      icon: Phone,
      title: 'Outbound Lead Generering',
      description: 'Proaktiv kontakt til potentielle kunder via telefon med fokus på kvalificering og interesse.',
      features: [
        'Koldkald til beslutningstagere',
        'Præsentation af jeres løsning',
        'Kvalificering efter BANT',
        'Håndtering af indvendinger',
        'Opbygning af interesse og behov'
      ]
    },
    {
      icon: UserCheck,
      title: 'Lead Kvalificering',
      description: 'Grundig screening og kvalificering af indkommende og eksisterende leads.',
      features: [
        'BANT-kvalificering (Budget, Authority, Need, Timeline)',
        'Scoring af lead-kvalitet',
        'Identifikation af salgsmuligheder',
        'Prioritering af hot leads',
        'CRM-opdatering og dokumentation'
      ]
    },
    {
      icon: Database,
      title: 'Database Opbygning',
      description: 'Opbygning og vedligeholdelse af målrettede, kvalificerede kontaktdatabaser.',
      features: [
        'Segmentering efter industri og størrelse',
        'Opdaterede kontaktoplysninger',
        'Beslutningstagerprofiler',
        'GDPR-compliant databehandling',
        'Løbende dataopdatering'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Målgruppeanalyse',
      description: 'Vi starter med en grundig analyse af din ideelle kundeprofil (ICP), målgruppe, konkurrenter og markedsdynamikker. Vi identificerer de specifikke brancher, virksomhedsstørrelser og beslutningstagerprofiler, der har størst sandsynlighed for at konvertere.'
    },
    {
      step: '2',
      title: 'Research & Database',
      description: 'Vores team research og opbygger en målrettet database af potentielle kunder, der matcher din ICP. Vi identificerer beslutningstagere, verificerer kontaktoplysninger og indsamler relevant firmografisk data, så du får adgang til høj-kvalitets prospects.'
    },
    {
      step: '3',
      title: 'Outreach & Kvalificering',
      description: 'Vi kontakter potentielle kunder via telefon med skræddersyede scripts tilpasset dit værdipropposition. Hver kontakt kvalificeres grundigt efter BANT-modellen, hvor vi afdækker budget, beslutningskompetence, behov og tidslinje for at sikre, at kun seriøse prospects går videre.'
    },
    {
      step: '4',
      title: 'Lead Handover',
      description: 'Kvalificerede leads overdrages til dit salgsteam med detaljeret dokumentation: kontaktinfo, kvalificeringsnoter, identificerede pain points, budgetramme, beslutningstidslinje og konkrete next steps. Leads integreres direkte i jeres CRM-system.'
    },
    {
      step: '5',
      title: 'Opfølgning & Optimering',
      description: 'Vi følger op på lead-kvalitet baseret på feedback fra dit salgsteam og justerer løbende vores tilgang. Gennem A/B-testing af scripts, kontinuerlig forfinelse af ICP og dataanalyse optimerer vi kampagnen for at maksimere konverteringsraten.'
    }
  ];

  const industries = [
    'SaaS og Cloud-løsninger',
    'IT-konsulent og systemintegration',
    'Markedsføring og kommunikation',
    'HR-software og rekruttering',
    'Finansielle services og fintech',
    'E-commerce platforme',
    'Logistik og supply chain',
    'Produktion og manufacturing',
    'Rådgivning og konsulentydelser',
    'Sikkerhed og compliance',
    'EdTech og e-learning',
    'HealthTech og medico'
  ];

  const metrics = [
    {
      number: '15-20',
      label: 'Kvalificerede leads per 100 opkald',
      icon: Target
    },
    {
      number: '60-70%',
      label: 'Lead-til-møde konverteringsrate',
      icon: TrendingUp
    },
    {
      number: '3-5x',
      label: 'Højere salgskonvertering end ukvalificerede leads',
      icon: Award
    },
    {
      number: '48t',
      label: 'Gennemsnitlig responstid på kvalificerede leads',
      icon: Clock
    }
  ];

  const faqItems = [
    {
      question: 'Hvad er leadgenerering og hvordan fungerer det?',
      answer: 'Leadgenerering er processen med at identificere og kvalificere potentielle kunder (leads), der har interesse i dine produkter eller services. Vi bruger en kombination af research, outbound telefoni og kvalificering til at finde beslutningstagere med reelt købsbehov. Hver lead kvalificeres efter BANT-modellen (Budget, Authority, Need, Timeline) for at sikre, at de er klar til at tale med dit salgsteam.'
    },
    {
      question: 'Hvad er forskellen på leads og mødebooking?',
      answer: 'Leadgenerering fokuserer på at identificere og kvalificere potentielle kunder med interesse, men uden nødvendigvis at booke et konkret møde. Mødebooking går et skridt videre og sikrer et bekræftet møde mellem prospect og dit salgsteam. Begge services kan kombineres for en komplet end-to-end løsning, hvor vi både genererer, kvalificerer og booker møder med dine ideelle kunder.'
    },
    {
      question: 'Hvordan kvalificerer I leads?',
      answer: 'Vi bruger BANT-modellen til lead-kvalificering: Budget (har de økonomisk mulighed?), Authority (er de beslutningstagere?), Need (har de et reelt behov for jeres løsning?), og Timeline (hvornår planlægger de at købe?). Derudover scorer vi leads baseret på virksomhedsstørrelse, branche, pain points og engagement-niveau. Kun leads der opfylder jeres på forhånd definerede kriterier går videre til salgsteamet.'
    },
    {
      question: 'Hvilke brancher kan I generere leads til?',
      answer: 'Vi har særlig stor erfaring med B2B-leadgenerering inden for: SaaS og tech-løsninger, IT-konsulentvirksomheder, markedsførings- og kommunikationsbureauer, HR-software og rekruttering, finansielle services, e-commerce platforme, logistik, produktion, rådgivning, sikkerhed, EdTech og HealthTech. Vores lead-specialister er trænet i at kommunikere komplekse værdipropositioner og forstår B2B-købsprocesser.'
    },
    {
      question: 'Hvor mange leads kan I levere?',
      answer: 'Antallet af leads afhænger af din branche, målgruppe, produktkompleksitet og budget. Typisk genererer vi 15-20 kvalificerede leads per 100 outbound opkald. For en standard B2B-kampagne leverer vi typisk 20-40 kvalificerede leads per måned. Vi tilpasser volumen efter dine behov og dit salgsteams kapacitet, så de ikke bliver overbelastet med leads.'
    },
    {
      question: 'Hvad koster professionel leadgenerering?',
      answer: 'Vi tilbyder både No Cure No Pay (betaling pr. kvalificeret lead) og faste månedlige pakker. No Cure No Pay priser varierer typisk mellem 300-800 kr. pr. kvalificeret lead afhængig af kompleksitet og målgruppe. Månedlige pakker starter fra ca. 15.000 kr. og inkluderer et garanteret antal kvalificerede leads. Kontakt os for et skræddersyet tilbud baseret på dine specifikke behov.'
    },
    {
      question: 'Leverer I også emnelister og databaser?',
      answer: 'Ja, vi leverer gerne GDPR-compliant emnelister og databaser som en del af vores leadgenerering. Vi research og opbygger målrettede databaser baseret på din ICP, inklusiv virksomhedsinfo, beslutningstagere, kontaktoplysninger og firmografiske data. Alle data er verificerede, opdaterede og fuldt compliant med GDPR-regler.'
    },
    {
      question: 'Hvordan integrerer I med vores CRM-system?',
      answer: 'Vi integrerer seamlessly med alle større CRM-systemer som Salesforce, HubSpot, Pipedrive, Microsoft Dynamics og lignende. Kvalificerede leads kan automatisk synkroniseres direkte til jeres CRM med alle relevante data: kontaktinfo, kvalificeringsnoter, scoring, pain points og next steps. Vi tilpasser vores integration til jeres eksisterende workflows og processer.'
    },
    {
      question: 'Hvor hurtigt kan I starte leadgenerering?',
      answer: 'Efter en indledende kickoff-workshop hvor vi gennemgår din ICP, værdipropposition og kvalificeringskriterier, kan vi typisk starte aktiv leadgenerering inden for 1-2 uger. De første kvalificerede leads leveres normalt i uge 2-3. Vi prioriterer kvalitet over hastighed i opstartsfasen for at sikre de bedst mulige resultater på lang sigt.'
    },
    {
      question: 'Hvad er jeres succesrate og garantier?',
      answer: 'Vi leverer gennemsnitligt 15-20 kvalificerede leads per 100 outbound opkald, og vores leads har typisk 60-70% møde-konverteringsrate. Med No Cure No Pay betaler du kun for leads der opfylder jeres på forhånd definerede kvalitetskriterier. Ved pakkeløsninger garanterer vi et minimum antal kvalificerede leads per måned, og leads der ikke lever op til standarden erstattes gratis.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Professionel Leadgenerering B2B | Kvalificerede Leads | Nexus Marketing"
        description="Få kvalificerede B2B-leads med professionel leadgenerering. BANT-kvalificering, målrettet research, outbound telefoni. 15-20 leads per 100 opkald. No Cure No Pay eller pakkeløsning."
        canonical="/leadgenerering"
        keywords="leadgenerering, B2B leads, kvalificerede leads, lead generation, outbound leadgenerering, BANT kvalificering, salgslead, lead research, telemarketing leads"
      />

      <HeroSection
        title="Professionel B2B Leadgenerering - Få Kvalificerede Salgsleds"
        subtitle="Vi identificerer, kontakter og kvalificerer dine ideelle kunder, så dit salgsteam kan fokusere på at lukke handler. BANT-kvalificerede leads der konverterer."
        ctaText="Få uforpligtende tilbud"
        ctaLink="#contact-form"
        secondaryCtaText="Ring 57 77 26 11"
        secondaryCtaLink="tel:+4557772611"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hvorfor vælge professionel leadgenerering?</h2>
              <p className="text-xl text-gray-600">Lad os fylde din salgspipeline med kvalificerede leads, mens dit team fokuserer på at lukke handler</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <benefit.icon size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Dokumenterede resultater i leadgenerering</h2>
              <p className="text-xl text-blue-100">Vi leverer konsistente, målbare resultater der maksimerer dit salgs-ROI</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <metric.icon className="mx-auto mb-4 text-blue-200" size={40} />
                  <div className="text-4xl font-bold mb-2">{metric.number}</div>
                  <p className="text-blue-100">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Vores leadgenerering services</h2>
              <p className="text-xl text-gray-600">Komplet leadgenerering fra research til kvalificerede salgsleds</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <service.icon className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Sådan fungerer vores leadgenerering-proces</h2>
              <p className="text-xl text-gray-600">Fra research til kvalificerede leads - en struktureret tilgang til B2B leadgenerering</p>
            </div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Brancher vi genererer leads til</h2>
              <p className="text-xl text-gray-600">Vi har dokumenteret erfaring med leadgenerering i følgende B2B-brancher</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={22} />
                  <span className="font-medium text-gray-800">{industry}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-600 text-white rounded-lg text-center">
              <Briefcase size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Er din branche ikke på listen?</h3>
              <p className="text-lg text-blue-100 mb-6">
                Vi arbejder med leadgenerering på tværs af alle B2B-brancher. Kontakt os for at høre hvordan vi kan hjælpe netop din virksomhed.
              </p>
              <Link to="/kontakt" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontakt os for rådgivning <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Professionel B2B Leadgenerering i Danmark</h2>

            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvad er leadgenerering?</h3>
                  <p className="text-gray-600 mb-4">
                    Leadgenerering er en strategisk proces, hvor vi identificerer, kontakter og kvalificerer potentielle kunder,
                    der har interesse i dine produkter eller services. I modsætning til traditionel markedsføring fokuserer
                    leadgenerering på at skabe direkte kontakt med beslutningstagere og kvalificere deres købsparathed.
                  </p>
                  <p className="text-gray-600">
                    Hos Nexus Marketing bruger vi en kombination af research, outbound telefoni og BANT-kvalificering til at
                    levere leads, der har reelt potentiale for at konvertere til kunder. Vi fungerer som en forlængelse af
                    dit salgsteam og fylder din pipeline med hot leads.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvorfor outsource leadgenerering?</h3>
                  <p className="text-gray-600 mb-4">
                    Leadgenerering er tidskrævende og kræver specialiseret erfaring. Dine sælgere er mest værdifulde, når
                    de arbejder med kvalificerede prospects - ikke når de laver koldkald til ukvalificerede kontakter.
                    Ved at outsource leadgenerering til os får du adgang til erfarne specialister, avancerede værktøjer og
                    optimerede processer.
                  </p>
                  <p className="text-gray-600">
                    Vores lead-specialister har gennemsnitligt 5+ års erfaring med B2B-salg og forstår, hvordan man
                    identificerer købssignaler, håndterer indvendinger og kvalificerer reelt potentiale. Det betyder højere
                    konverteringsrater og bedre ROI for din salgsorganisation.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">BANT-kvalificering sikrer lead-kvalitet</h3>
                <p className="text-gray-600 mb-4">
                  Vi bruger BANT-modellen som vores kvalificeringsstandardard for alle leads. BANT står for Budget, Authority,
                  Need og Timeline - de fire kritiske faktorer der bestemmer, om en prospect er klar til at købe:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Budget:</strong> Har virksomheden økonomisk mulighed for at investere i jeres løsning?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Authority:</strong> Taler vi med den reelle beslutningstager eller en nøgle-influencer?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Need:</strong> Har de et reelt, dokumenteret behov for jeres type løsning?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Timeline:</strong> Hvornår planlægger de at træffe en købsbeslutning?</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Leadgenerering vs. Mødebooking</h3>
                  <p className="text-gray-600 mb-3">
                    Mange virksomheder er usikre på forskellen mellem leadgenerering og mødebooking:
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Leadgenerering</strong> fokuserer på at identificere og kvalificere potentielle kunder med
                    interesse. Vi leverer kvalificerede kontakter med dokumenteret behov, budget og timeline, men ikke
                    nødvendigvis et booket møde.
                  </p>
                  <p className="text-gray-600">
                    <strong>Mødebooking</strong> går et skridt videre og sikrer et konkret, bekræftet møde mellem prospect
                    og dit salgsteam. Vi kan kombinere begge services for en komplet end-to-end løsning.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">ROI ved professionel leadgenerering</h3>
                  <p className="text-gray-600 mb-3">
                    Investering i professionel leadgenerering giver typisk markant bedre ROI end internt koldkald:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kvalificerede leads konverterer 3-5x bedre</li>
                    <li>• Dit salgsteam kan fokusere på højværdi-aktiviteter</li>
                    <li>• Hurtigere salgsproces med pre-kvalificerede prospects</li>
                    <li>• Forudsigelig pipeline og lettere forecasting</li>
                    <li>• Lavere cost-per-acquisition sammenlignet med advertising</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ofte stillede spørgsmål om leadgenerering</h2>
              <p className="text-xl text-gray-600">Find svar på de mest almindelige spørgsmål om vores leadgenerering-services</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Har du flere spørgsmål om vores leadgenerering-services?</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Kontakt os for rådgivning
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Klar til at fylde din salgspipeline med kvalificerede leads?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Lad os identificere og kvalificere dine næste bedste kunder, så dit salgsteam kan fokusere på at lukke handler.
              Start med professionel B2B leadgenerering i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Få uforpligtende tilbud
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+4557772611"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
              >
                <Phone className="mr-2" size={20} />
                Ring 57 77 26 11
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Få tilbud på professionel leadgenerering</h2>
              <p className="text-lg text-gray-600">
                Udfyld formularen, så kontakter vi dig inden for 24 timer med et skræddersyet tilbud på leadgenerering
                tilpasset din branche, målgruppe og budget.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <iframe
                data-tally-src="https://tally.so/embed/w4DglO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Få tilbud på leadgenerering - Nexus Marketing"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadGenerationPage;
