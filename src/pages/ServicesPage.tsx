import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Target, BarChart3, CheckCircle, ArrowRight, MessageSquare, Building, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'Telemarketing',
      description: 'Målrettet B2B telemarketing der åbner nye dørе, skaber dialog og konverterer emner til reelle salgsmuligheder.',
      features: ['Opsøgende leadgenerering', 'Direkte salgskontakt', 'Kundeservice og rådgivning', 'Markedsundersøgelser']
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Mødebooking',
      description: 'Kvalificerede salgsmøder med de rette beslutningstagere – booket, bekræftet og klar til dit salgsteam.',
      features: ['Screenede og kvalificerede møder', 'Effektiv lead-vurdering', 'Mødebekræftelse og opfølgning', 'Kalenderkoordinering']
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Datadrevet og flerkanalbaseret leadgenerering der skaber en konstant strøm af varme, salgsklar emner.',
      features: ['Lead scoring og prioritering', 'Salgsdatabase-opbygning', 'Kampagnestyring og optimering', 'ROI tracking og rapportering']
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: 'Kundeservice',
      description: 'Professionel og empatisk kundeservice der styrker kundeloyalitet og skaber positive oplevelser ved hvert kontaktpunkt.',
      features: ['Support og problemløsning', 'Ordrebehandling og koordinering', 'Kundefeedback og analyse', 'Tilfredshedsmålinger']
    }
  ];

  const industries = [
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Tech & SaaS',
      description: 'Dyb erfaring med salg af softwareløsninger, cloud-platforme og teknologiprodukter til erhvervsmarkedet.',
      successStory: 'Hjulpet 50+ tech-virksomheder med at øge salgspipelinen markant',
      expertise: ['SaaS og cloud-løsninger', 'Enterprise software', 'IT-sikkerhed', 'Digital transformation']
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Konsulentbranchen',
      description: 'Specialiseret erfaring med at booke kvalificerede møder for konsulentvirksomheder og rådgivere.',
      successStory: 'Over 200 kampagner gennemført for konsulentvirksomheder',
      expertise: ['Management consulting', 'Finansiel rådgivning', 'HR og rekruttering', 'Juridiske ydelser']
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Energi & Bæredygtighed',
      description: 'Stærk track record inden for grøn energi, solenergi og energieffektiviseringsløsninger til erhverv.',
      successStory: 'Hjulpet energivirksomheder med at nå nye kundesegmenter',
      expertise: ['Solenergi og vedvarende energi', 'LED og energioptimering', 'Grøn omstilling', 'Erhvervsenergirådgivning']
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Facility & Service',
      description: 'Erfaren indsats inden for facility management, kaffeservice, måtteservice og relaterede erhvervsservices.',
      successStory: 'Succesfulde kampagner for servicevirksomheder i hele Danmark',
      expertise: ['Kaffeservice til erhverv', 'Måtteservice og hygiejne', 'Rengøring og facility', 'Kontorservices']
    }
  ];

  return (
    <>
      <SEO
        title="Ydelser | Nexny – Telesalg, Mødebooking, Webudvikling og AI"
        description="Nexny's ydelser: professionelt telesalg, mødebooking, leadgenerering, webudvikling og AI-udviklingsopgaver. Din vækstpartner med dokumenterede resultater."
        canonical="/ydelser"
        keywords="Nexny ydelser, telemarketing, mødebooking, leadgenerering, kundeservice, B2B salg, salgsoutsourcing"
      />

      <HeroSection
        title="Ydelser der Skaber Reel Vækst"
        subtitle="Nexny tilbyder skræddersyede salgs- og marketingløsninger der passer til din virksomhed – fra første kontakt til underskrevet kontrakt."
        ctaText="Kontakt os"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vores Kerneydelser</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny tilbyder et komplet sortiment af B2B salgsydelser der kan sammensættes og skaleres efter dine behov og vækstmål.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Branchespecialiseret Ekspertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny har dybdegående erfaring med B2B salg og mødebooking på tværs af en lang række brancher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <p className="text-blue-600 font-medium mb-4">{industry.successStory}</p>
                <ul className="space-y-2">
                  {industry.expertise.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at vækste med Nexny?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os for en uforpligtende snak om, hvilke ydelser der passer bedst til din virksomheds mål og budget.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Få et gratis tilbud <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
