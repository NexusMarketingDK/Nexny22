import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowRight, Users, BarChart3, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const MeetingBookingPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: 'Kvalificerede møder',
      description: 'Hvert møde er grundigt screenet og kvalificeret inden booking. Ingen spildt tid – kun møder med reel forretningspotentiale.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Rette beslutningstagere',
      description: 'Vi sikrer at du møder de rette nøglepersoner med budget og beslutningskompetence.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Klar rapportering',
      description: 'Fuld transparens med løbende rapportering på bookede møder, mødekvalitet og kampagnestatus.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Garanteret kvalitet',
      description: 'Aflyste eller ikke-opfyldte møder erstattes – vi holder os selv ansvarlige for at levere.'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooking Priser | Nexny – Kvalificerede B2B Salgsmøder"
        description="Nexny's professionelle mødebooking sikrer kvalificerede salgsmøder med de rette beslutningstagere. Se vores prismodeller og hør hvordan vi kan fylde din kalender."
        canonical="/modebooking-priser"
        keywords="mødebooking priser, B2B salgsmøder, Nexny mødebooking, kvalificerede møder, mødebooking service"
      />

      <HeroSection
        title="Professionel Mødebooking med Nexny"
        subtitle="Vi leverer kvalificerede salgsmøder med de rette beslutningstagere – så din salgsstyrke kan lukke flere aftaler og bruge tid på det der skaber omsætning."
        ctaText="Se priser"
        ctaLink="/priser"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nexny's Tilgang til Mødebooking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi går metodisk til mødebooking – fra lead-research og kvalificering til bekræftede møder i din kalender.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sådan fungerer Nexny's mødebooking</h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Briefing og strategi', desc: 'Vi lærer din virksomhed og dine ideelle kunder at kende, og udvikler en målrettet kommunikationsstrategi.' },
                  { step: '2', title: 'Lead-identifikation', desc: 'Vi identificerer og screener relevante virksomheder og nøglepersoner i din målgruppe.' },
                  { step: '3', title: 'Kvalificeret kontakt', desc: 'Vi tager første kontakt og kvalificerer interesse, budget og beslutningskompetence.' },
                  { step: '4', title: 'Møde booket', desc: 'Det kvalificerede møde bookes i din kalender – bekræftet og klar til at gennemføre.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  Kom i gang med Nexny <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Hvad inkluderer Nexny's mødebooking?</h3>
                <ul className="space-y-3">
                  {[
                    'Fuld lead-research og målgruppesegmentering',
                    'Skræddersyede scripts og kommunikationsstrategier',
                    'BANT-kvalificering af hvert lead',
                    'Booking og kalenderkoordinering',
                    'Dobbelt mødebekræftelse (email + SMS)',
                    'Mødenoter og briefing-materiale til dig',
                    'Løbende optimering og feedback-loop',
                    'Månedlig performance-rapportering'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lad Nexny fylde din mødebog</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os og få et skræddersyet tilbud på mødebooking tilpasset din branche og dine vækstmål.
          </p>
          <Link to="/priser" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Se priser og modeller <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default MeetingBookingPage;
