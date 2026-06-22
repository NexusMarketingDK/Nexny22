import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, PiggyBank, Award, Users, CheckCircle, ArrowRight, Home, Building, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import { jobListings } from '../data/jobListings';

const FreelancersPage: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: 'Fleksible arbejdstider',
      description: 'Arbejd når det passer dig og skab den perfekte balance mellem arbejde og fritid.'
    },
    {
      icon: <PiggyBank size={40} className="text-blue-600" />,
      title: 'Attraktiv aflønning',
      description: 'Tjene godt med både fast løn og attraktive bonusordninger baseret på resultater.'
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Del af et stærkt team',
      description: 'Bliv en del af et professionelt team med løbende sparring og udvikling.'
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Karriereudvikling',
      description: 'Mulighed for at udvikle dine kompetencer og avancere til nye roller.'
    }
  ];

  const workFromHomeBenefits = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Arbejd hjemmefra',
      description: 'Fuld fleksibilitet til at arbejde fra dit eget hjem - ingen transporttid eller kontoromkostninger.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Fleksible arbejdstider',
      description: 'Tilrettelæg din arbejdsdag som det passer dig - perfekt til studerende eller dig med familie.'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      title: 'Attraktiv indtjening',
      description: 'Tjen godt med både fast løn og provision - jo mere du yder, jo mere tjener du.'
    }
  ];

  const advantages = [
    'Ingen transporttid og -omkostninger',
    'Bedre work-life balance',
    'Fleksible arbejdstider',
    'Attraktiv indtjening med provisionsordning',
    'Del af et professionelt team',
    'Grundig oplæring og løbende support',
    'Mulighed for personlig og faglig udvikling',
    'Sociale arrangementer med kollegaer'
  ];

  const requirements = [
    'Et roligt hjemmekontor eller arbejdsplads',
    'Stabil internetforbindelse',
    'Computer (Windows/Mac)',
    'Headset med god lydkvalitet',
    'Selvdisciplin og struktur i hverdagen',
    'Minimum 20 timer ugentligt'
  ];

  const jobTypes = [
    {
      title: 'Freelance Telemarketing',
      description: 'Som telemarketer hos Nexus Marketing arbejder du med udgående opkald til potentielle kunder for at præsentere vores samarbejdspartneres produkter og services. Du får grundig oplæring i produkter og salgsscripts.',
      requirements: 'Erfaring med salg er en fordel, men ikke et krav. Det vigtigste er din motivation og evne til at kommunikere klart og overbevisende.',
      benefits: 'Attraktiv aflønning med bonusordning, fleksible arbejdstider og mulighed for at arbejde hjemmefra.'
    },
    {
      title: 'Freelance Mødebooker',
      description: 'Som mødebooker er din primære opgave at identificere potentielle kunder og booke kvalificerede møder til vores samarbejdspartneres salgsteams. Du bliver ekspert i at kvalificere leads og skabe den første interesse.',
      requirements: 'Du skal være god til at lytte og stille de rigtige spørgsmål. Erfaring med B2B-salg eller mødebooking er en fordel.',
      benefits: 'Konkurrencedygtig aflønning per booket møde, frihed til at tilrettelægge din egen arbejdsdag og professionel udvikling.'
    }
  ];

  const testimonials = [
    {
      quote: "Jeg har arbejdet som freelancer hos Nexus Marketing i over 2 år, og det giver mig den perfekte balance mellem arbejde og familieliv. Jeg sætter især pris på fleksibiliteten og det gode arbejdsmiljø.",
      name: "Michael Hansen",
      title: "Freelance Mødebooker",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Efter mange år i traditionelle salgsjob giver Nexus Marketing mig mulighed for at arbejde hjemmefra med en attraktiv løn. Teamet er fantastisk støttende, og jeg har forbedret mine salgsevner betydeligt.",
      name: "Louise Jensen",
      title: "Freelance Telemarketer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  // Get featured job opportunities (first 6)
  const featuredJobs = jobListings.slice(0, 6);

  return (
    <>
      <SEO 
        title="Bliv Freelance Sælger eller Mødebooker | Attraktive Vilkår"
        description="Start din karriere som freelance sælger eller mødebooker. Vi tilbyder attraktiv provision, fleksible arbejdstider og professionel oplæring. ✓ Arbejd hjemmefra ✓ Høj indtjening"
        canonical="/freelance-telemarketing"
        keywords="freelance sælger, mødebooker job, arbejd hjemmefra, B2B salg, telemarketing job, fleksibelt arbejde"
      />

      <HeroSection
        title="Bliv freelance sælger eller mødebooker"
        subtitle="Søger du et fleksibelt job med attraktiv løn og gode udviklingsmuligheder? Bliv en del af Nexus Marketing teamet og arbejd hjemmefra."
        ctaText="Se arbejd hjemmefra muligheder"
        ctaLink="/jobs/arbejd-hjemmefra"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Highlighted Work From Home Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
              <Star className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Mest Populære: Arbejd Hjemmefra</h2>
              <p className="text-xl mb-6">
                Få den ultimative frihed og fleksibilitet med et job som mødebooker eller telesælger hjemmefra. 
                Ingen transporttid, fleksible arbejdstider og attraktiv indtjening.
              </p>
              <Link 
                to="/jobs/arbejd-hjemmefra" 
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Se alle hjemmearbejde muligheder <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {workFromHomeBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fordele ved at arbejde med os</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Som freelancer hos Nexus Marketing får du frihed til at tilrettelægge din arbejdsdag med gode indtjeningsmuligheder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="card p-6 flex flex-col items-center text-center fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Job Opportunities */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Udvalgte jobmuligheder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder spændende freelance muligheder inden for forskellige brancher. 
              Alle stillinger kan udføres hjemmefra med fleksible arbejdstider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <IconComponent className={`w-12 h-12 ${job.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{job.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <Home size={16} className="mr-2" />
                    <span>Kan udføres hjemmefra</span>
                  </div>
                  <Link 
                    to={job.path} 
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center text-sm"
                  >
                    Læs mere <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Vil du se alle muligheder for hjemmearbejde?</h3>
              <p className="text-gray-600 mb-6">
                Få et komplet overblik over alle vores hjemmearbejde stillinger, krav og fordele. 
                Perfekt til dig der ønsker maksimal fleksibilitet og frihed.
              </p>
              <Link 
                to="/jobs/arbejd-hjemmefra" 
                className="btn btn-primary inline-flex items-center"
              >
                Se alle hjemmearbejde stillinger <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Jobmuligheder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder forskellige typer af freelance stillinger inden for telemarketing og mødebooking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {jobTypes.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{job.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Beskrivelse:</h4>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Krav:</h4>
                    <p className="text-gray-700">{job.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fordele:</h4>
                    <p className="text-gray-700">{job.benefits}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-green-600">
                  <Home size={20} className="mr-2" />
                  <span className="font-medium">Kan udføres 100% hjemmefra</span>
                </div>
                <div className="mt-6">
                  <Link to="/jobs/arbejd-hjemmefra" className="btn btn-primary">
                    Se hjemmearbejde detaljer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad vi forventer af dig</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi søger motiverede personer, der er klar til at tage ansvar og levere resultater. 
                Her er nogle af de kvalifikationer, vi ser efter for hjemmearbejde:
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>{requirement}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/jobs/arbejd-hjemmefra" className="btn btn-primary inline-flex items-center">
                  Læs mere om hjemmearbejde krav <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Motivated freelance telemarketing professional working from home" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Det siger vores freelancere</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hør fra nogle af vores freelancere, hvordan det er at arbejde hjemmefra med Nexus Marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <Home size={14} className="mr-1" />
                      <span>Arbejder hjemmefra</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic relative">
                  <span className="text-5xl text-blue-200 absolute -top-6 -left-2">"</span>
                  <p className="relative z-10 pl-6">{testimonial.quote}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-blue-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Klar til at arbejde hjemmefra?</h2>
            <p className="text-xl mb-8">
              Få den ultimative frihed og fleksibilitet med et job som freelance mødebooker eller telesælger hjemmefra. 
              Vi ser frem til at høre fra dig og diskutere, hvordan vi kan samarbejde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs/arbejd-hjemmefra" className="btn bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
                Se alle hjemmearbejde muligheder <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/kontakt" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 inline-flex items-center">
                Kontakt os <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelancersPage;