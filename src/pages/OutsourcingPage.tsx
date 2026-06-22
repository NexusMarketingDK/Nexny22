import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Users, BarChart3, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const OutsourcingPage: React.FC = () => {
  const reasons = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: 'Hurtigere skalering',
      description: 'Skaler din salgsindsats hurtigt op eller ned uden ansættelses- og oplæringsomkostninger.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Frigør dit team',
      description: 'Lad dine egne sælgere fokusere på lukning og kundepleji – vi tager den tidskrævende prospektering.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Lav risiko',
      description: 'Med No Cure No Pay modellen betaler du kun for leverede resultater. Ingen faste lønomkostninger.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Erfaren salgsstyrke',
      description: 'Få adgang til et erfarent team af salgsprofessionelle med dokumenterede resultater fra dag ét.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Fuld transparens',
      description: 'Løbende rapportering og data-indsigt giver dig fuld overblik over indsatsen og dens resultater.'
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Hurtigt i gang',
      description: 'Nexny kan typisk starte aktiv salg og mødebooking inden for 1-2 uger efter aftaleindgåelse.'
    }
  ];

  return (
    <>
      <SEO
        title="Hvorfor Nexny? | Din Vækstpartner inden for Telesalg og AI"
        description="Oplev fordelene ved at vælge Nexny som vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver."
        canonical="/hvorfor-nexny"
        keywords="outsource salg, outsource mødebooking, Nexny, B2B salgsoutsourcing, ekstern salgsstyrke"
      />

      <HeroSection
        title="Hvorfor Outsource dit Salg til Nexny?"
        subtitle="Spar tid og ressourcer – og få adgang til professionel salgskraft og mødebooking uden de faste udgifter ved egne ansatte."
        ctaText="Kom i gang"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">6 grunde til at vælge Nexny som salgspartner</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny giver dig det bedste fra to verdener: professionel salgskraft og fuld fleksibilitet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intern sælger vs. Nexny som salgspartner</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ansætte en dedikeret sælger koster typisk 400.000-600.000 kr. om året inkl. løn, bonus, pension, arbejdsplads og oplæring. Og det tager 3-6 måneder at rekruttere og onboarde.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Med Nexny betaler du kun for den faktiske indsats – og du kan starte inden for uger. Du slipper for rekrutteringsrisikoen, sygedage og opsigelsesomkostninger.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Ingen rekrutteringsomkostninger',
                  'Ingen oplæringsperiode på 3-6 måneder',
                  'Ingen sygefravær eller opsigelsesrisiko',
                  'Ingen faste lønomkostninger ved No Cure No Pay',
                  'Fleksibel skalering op og ned',
                  'Erfaret team fra dag ét'
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                Tal med Nexny <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Indsend dit samarbejdsønske</h3>
                <iframe
                  data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Kontakt Nexny om salgsoutsourcing"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at prøve Nexny?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book en gratis samtale og hør, hvordan Nexny kan accelerere din salgsindsats fra næste måned.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book gratis samtale <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OutsourcingPage;
