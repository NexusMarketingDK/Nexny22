import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Code, ArrowRight, Target, Briefcase, BarChart3, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Phone size={40} className="text-blue-600" />,
      title: 'Telemarketing',
      description: 'Professionel telemarketing målrettet virksomheder, der ønsker at udvide deres kundebase og øge salget.',
      features: [
        'Målrettet opsøgende salg til beslutningstagere',
        'Kvalificering af leads og kundeemner',
        'Opdatering af kundedata og kontaktinformation',
        'Opfølgning på marketing kampagner',
        'Feedback og markedsundersøgelser',
        'Detaljeret rapportering og performance-måling'
      ]
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Mødebooking',
      description: 'Effektiv mødebooking der sikrer jeres salgsteam møder med de rigtige beslutningstagere hos potentielle kunder.',
      features: [
        'Identifikation af relevante kontaktpersoner',
        'Kvalificering af potentielle kunder',
        'Booking af fysiske møder eller online demos',
        'Koordinering af kalendere og mødetider',
        'Mødebekræftelser og påmindelser',
        'Opfølgning og feedback efter møder'
      ]
    },
    {
      icon: <Code size={40} className="text-blue-600" />,
      title: 'Webudvikling',
      description: 'Professionel webudvikling med fokus på moderne, brugervenlige og skalerbare løsninger.',
      features: [
        'Skræddersyede webløsninger',
        'Responsive design',
        'E-commerce platforme',
        'API integration',
        'CMS-systemer',
        'Teknisk vedligeholdelse'
      ]
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Omfattende leadgenerering med fokus på kvalitet fremfor kvantitet, samt analyse og rapportering.',
      features: [
        'Multi-channel leadgenerering strategi',
        'Scoring og kvalificering af leads',
        'Segmentering baseret på købsintention',
        'Detaljeret lead-profiling',
        'Performance analyse og optimering',
        'Integration med jeres CRM-system'
      ]
    }
  ];

  const businessBenefits = [
    'Telemarketing og leadgenerering',
    'Mødebooking med beslutningstagere',
    'Kundepleje og opfølgning',
    'Markedsundersøgelser og feedback',
    'Opdatering af kunde- og prospektdatabaser',
    'Strategi og rådgivning om telemarketing'
  ];

  const freelanceBenefits = [
    'Fleksible arbejdstider',
    'Attraktiv provision',
    'Professionel oplæring',
    'Støtte og sparring',
    'Moderne arbejdsplatform',
    'Spændende projekter'
  ];

  const industries = [
    {
      name: 'SaaS-løsninger',
      description: 'Møder med tech-savvy beslutningstagere og CTO\'er'
    },
    {
      name: 'IT-konsulentvirksomheder',
      description: 'Salgsmøder med beslutningstagere'
    },
    {
      name: 'Forretningsudvikling',
      description: 'B2B-møder med C-level executives'
    },
    {
      name: 'Markedsføring & kommunikation',
      description: 'Møder med marketingchefer'
    },
    {
      name: 'Digitale bureauer og webdesign',
      description: 'Møder med virksomheder der søger online synlighed'
    },
    {
      name: 'Økonomi & revision',
      description: 'Kvalificerede møder med CFO\'er'
    },
    {
      name: 'HR & rekruttering',
      description: 'Møder med HR-direktører'
    },
    {
      name: 'Transport & logistik',
      description: 'Salgsmøder med indkøbschefer'
    },
    {
      name: 'LED belysning og energiløsninger',
      description: 'Møder om energieffektive løsninger til erhverv'
    },
    {
      name: 'Strøm og energioptimering',
      description: 'B2C og B2B møder om energibesparelser'
    },
    {
      name: 'Kaffeservice til erhverv',
      description: 'Møder med facility managers og indkøbsansvarlige'
    },
    {
      name: 'Solenergi og vedvarende energi',
      description: 'Møder om grøn omstilling og bæredygtighed'
    },
    {
      name: 'Måtteservice og facility management',
      description: 'Møder om arbejdsmiljø og rengøringsløsninger'
    },
    {
      name: 'Pensionsrådgivning',
      description: 'Møder med privatpersoner og virksomheder om pensionsordninger'
    },
    {
      name: 'Inkasso og debitorhåndtering',
      description: 'Møder om professionel gældinddrivelse'
    },
    {
      name: 'Serviceydelser generelt',
      description: 'B2B møder på tværs af servicebrancherne'
    }
  ];

  return (
    <>
      <SEO 
        title="Nexus Marketing | Telemarketing, Mødebooking & Digital Udvikling"
        description="Professionel telemarketing, mødebooking og digital udvikling. Vi hjælper virksomheder med at vækste gennem målrettede salgsaktiviteter og innovative digitale løsninger. ✓ 20 års erfaring ✓ Dokumenterede resultater"
        canonical="/"
        keywords="telemarketing, mødebooking, webudvikling, leadgenerering, B2B salg, digital udvikling, salgsoptimering"
      />

      <HeroSection
        title="Professionel B2B Telemarketing & Mødebooking"
        subtitle="Vi forbinder ambitiøse virksomheder med kvalificerede leads og dygtige sælgere. Vælg mellem strategisk partnerskab eller en spændende karriere som freelance sælger."
        ctaText="Bliv samarbejdspartner"
        ctaLink="/samarbejdspartner"
        secondaryCtaText="Start din karriere"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Core Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vi er Specialister i Telemarketing, Mødebooking, Webudvikling og Leadgenerering</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med over 20 års erfaring hjælper vi virksomheder med at nå deres mål gennem professionelle services og innovative løsninger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card p-6 flex flex-col items-center text-center fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Boost din virksomheds vækst</h2>
              <p className="text-lg text-gray-600 mb-8">
                Outsource din telemarketing og mødebooking til eksperter. Vi hjælper B2B virksomheder med at 
                generere kvalificerede leads og øge salget gennem målrettede kampagner og professionel dialog.
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
                  Få et tilbud og se hvad vi kan gøre for dig <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business growth and success visualization" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2">Hjulpet +200 med vækst og udvikling</p>
                <p>Virksomheder i Danmark og udland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Freelancers */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Freelance sælger på vej mod succes" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Start din karriere som freelance sælger / mødebooker</h2>
              <p className="text-lg text-gray-600 mb-8">
                Drømmer du om frihed og fleksibilitet i din arbejdsdag? Som freelance sælger eller mødebooker 
                hos Nexus Marketing får du attraktive indtjeningsmuligheder og professionel udvikling.
              </p>
              <div className="space-y-4">
                {freelanceBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/freelance-telemarketing" className="btn btn-primary inline-flex items-center">
                  Se ledige stillinger <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vores Branchespecialiseret Ekspertise inden for salg og mødebooking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi har omfattende erfaring med telemarketing og mødebooking på tværs af forskellige B2B brancher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-8 border-b md:border-b-0 md:border-r border-gray-700">
              <Briefcase size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Virksomheder</h3>
              <p className="mb-6">
                Øg dit salg med professionel telemarketing og mødebooking. Vi hjælper dig med at nå dine salgsmål.
              </p>
              <Link to="/samarbejdspartner" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Start samarbejde <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="text-center p-8">
              <BarChart3 size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">For Sælgere</h3>
              <p className="mb-6">
                Tag det næste skridt i din karriere. Bliv freelance sælger eller mødebooker med attraktiv indtjening.
              </p>
              <Link to="/freelance-telemarketing" className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center">
                Se muligheder <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;