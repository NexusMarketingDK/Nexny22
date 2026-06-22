import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, CheckCircle, ArrowRight, Building } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Kundefokus',
      description: 'Vi sætter altid kunden i centrum og arbejder dedikeret på at forstå og opfylde deres behov.'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Kvalitet',
      description: 'Vi stræber efter excellence i alt, hvad vi gør, fra den første kontakt til den endelige leverance.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: 'Resultater',
      description: 'Vi måler vores succes på de konkrete resultater, vi skaber for vores kunder.'
    }
  ];

  const industries = [
    {
      name: 'IT & Software',
      description: 'Specialiseret erfaring med salg af IT-løsninger og software til virksomheder.'
    },
    {
      name: 'Konsulent & Rådgivning',
      description: 'Ekspertise i at booke møder for konsulenter og rådgivningsvirksomheder.'
    },
    {
      name: 'Industri & Produktion',
      description: 'Erfaring med B2B salg inden for industri- og produktionssektoren.'
    },
    {
      name: 'Energi & Miljø',
      description: 'Fokus på bæredygtige løsninger og energioptimering til erhverv.'
    }
  ];

  return (
    <>
      <SEO 
        title="Om Nexus Marketing | Eksperter i B2B Salg & Digital Udvikling"
        description="Lær mere om Nexus Marketing - din professionelle partner inden for B2B salg og digital udvikling. Med over 20 års erfaring og dokumenterede resultater hjælper vi virksomheder med at vækste gennem målrettede aktiviteter."
        canonical="/om-os"
        keywords="B2B salg, digital udvikling, telemarketing, mødebooking, virksomhedshistorie, salgsoptimering"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Din partner i vækst og succes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Med over 20 års erfaring inden for salg og marketing står vi hos NexusMarketing klar til at hjælpe din virksomhed med at nå nye højder.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Om NexusMarketing</h2>
              <p className="text-lg text-gray-600 mb-6">
                NexusMarketing er specialister i B2B telemarketing og mødebooking. Vi har opbygget en solid erfaring med at skabe værdifulde forbindelser mellem virksomheder og hjælpe vores kunder med at vækste gennem målrettede salgsaktiviteter.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Vores kerneydelser omfatter professionel telemarketing, kvalificeret mødebooking og leadgenerering for B2B virksomheder. Vi arbejder målrettet med at skabe resultater for vores kunder gennem en kombination af erfaring, dedikation og moderne teknologi.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi tror på, at stærke relationer og godt samarbejde er nøglen til succes. Derfor arbejder vi tæt sammen med vores kunder for at forstå deres forretning og skræddersy løsninger, der passer til netop deres behov.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Succesfuldt forretningssamarbejde visualiseret gennem professionelt håndtryk" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vores værdier</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vores værdier er fundamentet for alt, hvad vi gør, og hvordan vi samarbejder med vores kunder og partnere.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extended SEO Content */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Professionel B2B Telemarketing & Mødebooking</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                  Som specialister i B2B telemarketing og mødebooking har NexusMarketing opbygget en stærk position i markedet. 
                  Vores dedikerede team af erfarne telemarketingkonsulenter og mødebookere arbejder hver dag på at skabe 
                  værdifulde forbindelser mellem virksomheder.
                </p>
                <p className="text-gray-600 mb-4">
                  Vi adskiller os ved vores professionelle tilgang til telemarketing og mødebooking, hvor kvalitet og resultater 
                  går hånd i hånd. Gennem årene har vi forfinet vores metoder og processer for at sikre den højest mulige 
                  kvalitet i vores leverancer.
                </p>
                <p className="text-gray-600 mb-4">
                  Vores succes bygger på en kombination af grundig research, målrettet kommunikation og en dyb forståelse 
                  for vores kunders produkter og services. Dette gør os i stand til at identificere og kvalificere de 
                  rigtige leads og booke møder med relevante beslutningstagere.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Branchespecialiseret Ekspertise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi har omfattende erfaring med telemarketing og mødebooking på tværs af forskellige B2B brancher.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Er du klar til at tage din virksomhed til næste niveau?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os i dag og hør, hvordan vi kan hjælpe dig med at vokse og trives i et konkurrencepræget marked. Vi ser frem til et stærkt og frugtbart samarbejde.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Kontakt os nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;