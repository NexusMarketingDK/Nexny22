import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Code, ArrowRight, Briefcase, BarChart3, CheckCircle, TrendingUp, HeartHandshake } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Phone size={40} className="text-blue-600" />,
      title: 'Telemarketing',
      description: 'Skarpt målrettet B2B telemarketing der åbner døre, skaber dialog og driver reelle forretningsresultater for din virksomhed.',
      features: [
        'Direkte kontakt til relevante beslutningstagere',
        'Kvalificering og prioritering af kundeemner',
        'Løbende opdatering af prospektdatabaser',
        'Opfølgning på markedsføringskampagner',
        'Kundetilfredshedsundersøgelser og feedback',
        'Detaljeret resultatrapportering'
      ]
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Mødebooking',
      description: 'Vi fylder din kalender med kvalificerede salgsmøder hos de rette beslutningstagere – så dit team kan lukke flere aftaler.',
      features: [
        'Identifikation og screening af nøglepersoner',
        'Grundig forhåndskvalificering af emner',
        'Booking af fysiske møder og digitale demos',
        'Effektiv kalender- og tidsstyring',
        'Automatiske mødebekræftelser og påmindelser',
        'Struktureret opfølgning og feedbackloop'
      ]
    },
    {
      icon: <Code size={40} className="text-blue-600" />,
      title: 'Webudvikling',
      description: 'Moderne og konverteringsoptimerede webløsninger der repræsenterer din virksomhed professionelt og genererer leads døgnet rundt.',
      features: [
        'Skræddersyede webapplikationer',
        'Mobilvenligt responsivt design',
        'Webshops og e-handelsplatforme',
        'API-integrationer og systemkoblinger',
        'Brugervenlige CMS-løsninger',
        'Løbende support og vedligeholdelse'
      ]
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Struktureret og datadrevet leadgenerering der leverer varme, salgsklar emner direkte til dit CRM-system.',
      features: [
        'Flerkanalsstrategi for leadgenerering',
        'Lead scoring og kvalitetssikring',
        'Segmentering efter branche og købspotentiale',
        'Dybdegående lead-profilering',
        'Løbende performanceanalyse og optimering',
        'Sømløs CRM-integration'
      ]
    }
  ];

  const businessBenefits = [
    'Telemarketing og struktureret leadgenerering',
    'Kvalificerede salgsmøder med beslutningstagere',
    'Proaktiv kundepleje og systematisk opfølgning',
    'Markedsanalyser og konkurrentkortlægning',
    'Opdatering og berigelse af salgsdatabaser',
    'Strategisk rådgivning om salgsoptimering'
  ];

  const freelanceBenefits = [
    'Selvbestemte arbejdstider og hjemmekontor',
    'Konkurrencedygtig grundløn og resultatbonus',
    'Solid oplæring og løbende faglig sparring',
    'Tæt support fra erfarne salgsledere',
    'Moderne digitale arbejdsværktøjer',
    'Varierede og engagerende projekter'
  ];

  const industries = [
    { name: 'SaaS & Cloud-løsninger', description: 'Salgsmøder med tech-beslutningstagere og IT-chefer' },
    { name: 'IT-konsulenter', description: 'Kvalificerede møder med virksomhedsledere' },
    { name: 'Forretningsudvikling', description: 'B2B-møder med C-level og direktionsniveau' },
    { name: 'Marketing & Kommunikation', description: 'Møder med CMO\'er og marketingdirektører' },
    { name: 'Digitale bureauer', description: 'Møder med virksomheder der vil vækste online' },
    { name: 'Finans & Revision', description: 'Professionelle møder med CFO\'er og regnskabschefer' },
    { name: 'HR & Rekruttering', description: 'Møder med personalechefer og HR-direktører' },
    { name: 'Transport & Logistik', description: 'Salgsmøder med indkøbs- og driftschefer' },
    { name: 'LED & Energieffektivisering', description: 'Møder om energibesparende løsninger til erhverv' },
    { name: 'Strøm & Energioptimering', description: 'B2B og B2C møder om lavere energiomkostninger' },
    { name: 'Kaffeservice til erhverv', description: 'Møder med facility managers og indkøbsansvarlige' },
    { name: 'Solenergi & Vedvarende energi', description: 'Møder om grøn omstilling og bæredygtig drift' },
    { name: 'Måtte- og rengøringsservice', description: 'Møder om arbejdsmiljø og hygiejneløsninger' },
    { name: 'Pensionsrådgivning', description: 'Møder med private og erhvervskunder om pensionsplanlægning' },
    { name: 'Inkasso & Kreditorstyring', description: 'Møder om effektiv og professionel gældinddrivelse' },
    { name: 'Servicevirksomheder generelt', description: 'B2B møder på tværs af serviceerhverv' }
  ];

  return (
    <>
      <SEO
        title="Nexny | Vækstpartner inden for Telesalg, Mødebooking, Webudvikling og AI"
        description="Nexny er din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver. Vi leverer dokumenterede resultater med fleksible modeller."
        canonical="/"
        keywords="Nexny, vækstpartner, telesalg, mødebooking, webudvikling, leadgenerering, AI, AI-udvikling, salgspartner Danmark"
      />

      <HeroSection
        title="Din Vækstpartner inden for Telesalg og AI"
        subtitle="Nexny leverer professionelt telesalg, kvalificeret mødebooking, leadgenerering, moderne webudvikling og AI-udviklingsopgaver – alt samlet hos én partner."
        ctaText="Bliv samarbejdspartner"
        ctaLink="/samarbejdspartner"
        secondaryCtaText="Start din karriere"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvorfor vælge Nexny som salgspartner?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny kombinerer menneskelig salgskraft med datadrevne metoder for at levere resultater der gør en reel forskel for din bundlinje.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/samarbejdspartner" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Bliv samarbejdspartner <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nexny er Specialister i B2B Salg, Mødebooking, Webudvikling og Leadgenerering</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med et stærkt team af erfarne salgsprofessionelle og digitale specialister hjælper Nexny virksomheder med at nå deres vækstmål gennem effektive og målbare indsatser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Accelerér din virksomheds vækst med Nexny</h2>
              <p className="text-lg text-gray-600 mb-8">
                Overlad dit salgsarbejde til erfarne specialister. Nexny hjælper B2B virksomheder med at generere
                varme leads og booke kvalificerede møder – så din salgsstyrke kan fokusere på det, de er bedst til.
              </p>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  Få et uforpligtende tilbud <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Vækst og succes for B2B virksomheder med Nexny"
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2">Hjulpet +200 virksomheder med konkret vækst</p>
                <p>I Danmark og internationalt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nexny's Brancheerfaring inden for B2B Salg og Mødebooking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi har dybdegående erfaring med B2B mødebooking og telemarketing på tværs af brancher og målgrupper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 border-b md:border-b-0 md:border-r border-gray-700">
              <Briefcase size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Virksomheder</h3>
              <p className="mb-6">
                Din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI. Nexny leverer resultater – drevet af menneskelig ekspertise og moderne teknologi.
              </p>
              <Link to="/samarbejdspartner" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Start samarbejde <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="text-center p-8">
              <BarChart3 size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Sælgere</h3>
              <p className="mb-6">
                Tag styringen over din karriere. Bliv freelance sælger hos Nexny og tjene godt med fleksible arbejdstider og spændende projekter.
              </p>
              <Link to="/freelance-telemarketing" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Se muligheder <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvad gør Nexny?', answer: 'Nexny er en dansk vækstpartner specialiseret i B2B telemarketing, mødebooking, leadgenerering, webudvikling og AI-integration. Vi hjælper virksomheder med at fylde salgspipelinen med kvalificerede møder og leads.' },
        { question: 'Hvilke brancher arbejder Nexny med?', answer: 'Vi har erfaring på tværs af over 16 brancher, herunder SaaS, IT-konsulenter, finans, energi, HR, transport, solenergi og servicevirksomheder.' },
        { question: 'Hvad koster det at bruge Nexny?', answer: 'Vi tilbyder fleksible prismodeller tilpasset din virksomheds størrelse og behov. Kontakt os for et uforpligtende tilbud.' },
        { question: 'Kan Nexny hjælpe med både telemarketing og digital markedsføring?', answer: 'Ja – Nexny kombinerer menneskelig salgskraft med digitale løsninger, herunder webudvikling, AI-integration og leadgenerering via flere kanaler.' },
        { question: 'Hvor hurtigt kan vi komme i gang?', answer: 'Typisk kan vi opstart et samarbejde inden for 1-2 uger efter den første samtale.' },
      ]} />
      <CTASection
        title="Klar til at accelerere din vækst?"
        subtitle="Nexny hjælper B2B virksomheder med at generere leads, booke møder og drive salg – med dokumenterede resultater."
        primaryText="Bliv samarbejdspartner"
        primaryLink="/samarbejdspartner"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default HomePage;
