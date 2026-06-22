import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const partnerFAQs = [
    {
      question: "Hvordan kommer vi i gang med et samarbejde?",
      answer: "Vi starter med et uforpligtende møde, hvor vi diskuterer jeres behov og mål. Herefter udarbejder vi en skræddersyet løsning til jer.",
      link: "/samarbejdspartner"
    },
    {
      question: "Hvad koster det at samarbejde med Nexus Marketing?",
      answer: "Vi tilbyder fleksible prismodeller tilpasset jeres behov. Kontakt os for et skræddersyet tilbud baseret på jeres specifikke ønsker og mål.",
      link: "/samarbejdspartner"
    }
  ];

  const freelanceFAQs = [
    {
      question: "Hvordan bliver jeg freelance sælger hos Nexus Marketing?",
      answer: "Start med at sende din ansøgning gennem vores kontaktformular. Vi inviterer dig derefter til en samtale, hvor vi diskuterer mulighederne.",
      link: "/freelancere"
    },
    {
      question: "Hvilke krav er der til freelance sælgere?",
      answer: "Vi søger engagerede personer med gode kommunikationsevner. Du skal have et hjemmekontor med stabilt internet og kunne arbejde minimum 20 timer om ugen.",
      link: "/jobs/arbejd-hjemmefra"
    }
  ];

  return (
    <>
      <SEO 
        title="Kontakt Nexus Marketing | Få et uforpligtende tilbud"
        description="Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed med professionel telemarketing, mødebooking eller digital udvikling. ✓ Gratis rådgivning ✓ Skræddersyede løsninger"
        canonical="/kontakt"
        keywords="kontakt, telemarketing bureau, mødebooking bureau, digital udvikling, B2B salg, rådgivning"
      />
      
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">Kontakt Nexus Marketing</h1>
            <p className="text-lg text-gray-600">
              Vi er klar til at hjælpe dig med dine spørgsmål om telemarketing, 
              mødebooking eller jobmuligheder. Udfyld formularen nedenfor, eller 
              kontakt os direkte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <iframe 
                  data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Kontakt Nexus Marketing"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Kontaktoplysninger</h2>
                
                <div className="space-y-8">
                  {/* Spanish Office */}
                  <div>
                    <h3 className="font-medium text-lg mb-3">NexusMarketing Spanien</h3>
                    <div className="flex items-start">
                      <MapPin size={24} className="text-blue-600 mr-4 mt-1" />
                      <p className="text-gray-600">
                        Calle Las Barcas, 2 2nd floor<br />
                        46002 Valencia<br />
                        Spanien
                      </p>
                    </div>
                  </div>

                  {/* Danish Office */}
                  <div>
                    <h3 className="font-medium text-lg mb-3">NexusMarketing Danmark</h3>
                    <div className="flex items-start">
                      <MapPin size={24} className="text-blue-600 mr-4 mt-1" />
                      <p className="text-gray-600">
                        Trindsøvej 6, 1. sal<br />
                        8000 Aarhus C<br />
                        Danmark
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+4591952794" className="hover:text-blue-600">+45 91 95 27 94</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:kontakt@nexusmarketing.dk" className="hover:text-blue-600">kontakt@nexusmarketing.dk</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">Website</h3>
                    <p className="text-gray-600">
                      <a href="https://www.nexusmarketing.dk" className="hover:text-blue-600">www.nexusmarketing.dk</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">Åbningstider</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Mandag - Torsdag:</span>
                    <span>8:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fredag:</span>
                    <span>8:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lørdag - Søndag:</span>
                    <span>Lukket</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Ofte stillede spørgsmål</h2>
            
            {/* Partner FAQs */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">For virksomheder</h3>
                <div className="space-y-6">
                  {partnerFAQs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <Link to={faq.link} className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                        Læs mere <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Freelance FAQs */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">For freelancere</h3>
                <div className="space-y-6">
                  {freelanceFAQs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <Link to={faq.link} className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                        Læs mere <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO Optimized Content */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Professionel Mødebooking & Telemarketing Partner</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Nexus Marketing er din professionelle partner inden for B2B telemarketing og mødebooking. 
                  Med over 20 års erfaring i branchen har vi specialiseret os i at skabe værdifulde forbindelser 
                  mellem virksomheder og hjælpe vores kunder med at vækste gennem målrettede salgsaktiviteter.
                </p>
                <p className="mb-4">
                  Vores dedikerede team af erfarne telemarketingkonsulenter og mødebookere arbejder målrettet 
                  med at generere kvalificerede leads og booke møder med beslutningstagere i jeres målgruppe. 
                  Vi tilbyder skræddersyede løsninger tilpasset jeres specifikke behov og branche.
                </p>
                <p className="mb-4">
                  Som samarbejdspartner får I adgang til:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Professionel telemarketing og leadgenerering</li>
                  <li>Kvalificeret mødebooking med beslutningstagere</li>
                  <li>Erfarne konsulenter med branchekendskab</li>
                  <li>Detaljeret rapportering og opfølgning</li>
                  <li>Fleksible samarbejdsmodeller</li>
                </ul>
                <p>
                  Kontakt os i dag for en uforpligtende snak om, hvordan vi kan hjælpe jeres virksomhed 
                  med at nå jeres salgsmål gennem professionel telemarketing og mødebooking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;