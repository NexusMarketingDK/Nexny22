import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, PiggyBank, Award, Users, CheckCircle, ArrowRight, Home, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { jobListings } from '../data/jobListings';

const FreelancersPage: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: 'Fleksibel hverdag',
      description: 'Du bestemmer selv hvornår du arbejder. Tilpas din arbejdsdag til dit liv – ikke omvendt.'
    },
    {
      icon: <PiggyBank size={40} className="text-blue-600" />,
      title: 'Stærk indtjening',
      description: 'Konkurrencedygtig grundaflønning kombineret med attraktive resultatbonusser. Jo bedre du performer, jo mere tjener du.'
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Stærkt fællesskab',
      description: 'Selv som freelancer er du aldrig alene. Du er en del af et stærkt Nexny-netværk med sparring og fælles drive.'
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Faglig udvikling',
      description: 'Struktureret oplæring, løbende coaching og mulighed for at tage mere ansvar og avancere i rollen.'
    }
  ];

  const workFromHomeBenefits = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Hjemmekontor',
      description: 'Arbejd effektivt fra dit eget hjem med alle nødvendige digitale redskaber. Ingen transporttid, ingen dyre frokoster.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Egne arbejdstider',
      description: 'Tilrettelæg din dag som det passer dig – ideelt for studerende, forældre og alle med et aktivt liv ved siden af arbejdet.'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      title: 'Resultatdrevet løn',
      description: 'Fast grundløn plus provision. Dine resultater afspejler sig direkte i din lønseddel.'
    }
  ];

  return (
    <>
      <SEO
        title="Freelance Sælger & Mødebooker Stillinger | Nexny"
        description="Bliv freelance sælger eller mødebooker hos Nexny. Arbejd hjemmefra, sæt dine egne tider og tjen godt med attraktiv provision. Se alle ledige stillinger her."
        canonical="/freelance-telemarketing"
        keywords="freelance sælger, freelance mødebooker, arbejd hjemmefra, telemarketing job, Nexny stillinger, B2B sælger"
      />

      <HeroSection
        title="Din Karriere som Freelance Sælger starter her"
        subtitle="Nexny tilbyder fleksible freelance-muligheder inden for B2B salg og mødebooking. Sæt dine egne tider, arbejd hjemmefra og byg en karriere på dine egne præmisser."
        ctaText="Se ledige stillinger"
        ctaLink="#stillinger"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad du får hos Nexny</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny tilbyder noget sjældent: friheden som freelancer kombineret med et stærkt professionelt fundament.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Arbejd hjemmefra med Nexny</h2>
              <p className="text-lg text-gray-600 mb-8">
                Som freelance sælger eller mødebooker hos Nexny har du fuld fleksibilitet til at arbejde fra dit eget hjem. Du får adgang til moderne salgssystemer, løbende sparring og et stærkt netværk – uden at skulle møde ind på et kontor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {workFromHomeBenefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="flex justify-center mb-3">{benefit.icon}</div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Ingen transport og pendling', 'Bedre balance mellem arbejde og privatliv', 'Fuld fleksibilitet i arbejdstilrettelæggelsen', 'Provision og bonus oveni grundlønnen', "Del af Nexny's stærke salgsfællesskab", 'Grundig onboarding og løbende support', 'Professionel og personlig udvikling', 'Sociale events og fælles fejringer'].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Freelance sælger arbejder hjemmefra med Nexny"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="stillinger" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ledige Stillinger hos Nexny</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi søger løbende dygtige og motiverede freelance sælgere og mødebookere. Se de aktuelle stillinger herunder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <Link key={index} to={job.path} className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <Star className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">Ledig</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <span className="text-blue-600 font-medium text-sm inline-flex items-center">
                  Læs mere <ArrowRight size={14} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Er du klar til at starte hos Nexny?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Send os en besked eller ring – vi tager en uforpligtende snak om de muligheder der passer bedst til dig.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt os i dag <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvad tjener man som freelance sælger hos Nexny?', answer: 'Lønnen består af et fast grundhonorar plus provision på dine resultater. Jo mere du sælger, jo mere tjener du – der er intet loft.' },
        { question: 'Skal jeg have erfaring for at søge?', answer: 'Erfaring er en fordel, men ikke et krav. Nexny oplærer dig grundigt og giver dig løbende sparring og support.' },
        { question: 'Kan jeg arbejde deltid?', answer: 'Ja – du bestemmer selv dine arbejdstider og kan arbejde alt fra få timer om ugen til fuld tid.' },
        { question: 'Hvad sker der, hvis jeg har spørgsmål under arbejdet?', answer: 'Du har altid adgang til support fra Nexny\'s erfarne salgsledere, der kan hjælpe med sparring, scripts og produktspørgsmål.' },
        { question: 'Hvilke produkter sælger man?', answer: 'Nexny har freelancere inden for mange brancher – webudvikling, energi, solceller, kaffeservice, pension, inkasso og mere. Du vælger det produkt, der passer bedst til dig.' },
      ]} />
      <CTASection
        title="Tag styringen over din karriere – bliv freelance sælger hos Nexny"
        subtitle="Fleksible arbejdstider, konkurrencedygtig provision og spændende projekter. Alt hvad du behøver for at lykkes som freelancer."
        primaryText="Søg nu"
        primaryLink="/kontakt"
        secondaryText="Se ledige stillinger"
        secondaryLink="/jobs/arbejd-hjemmefra"
      />
    </>
  );
};

export default FreelancersPage;
