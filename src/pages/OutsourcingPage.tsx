import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Users, BarChart3, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

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
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Outsourcing af B2B Salg til Nexny – Professionel Salgskraft uden Ansættelsesbyrden</h2>
            <p className="text-gray-600 mb-4">
              Outsourcing af B2B salg og telemarketing til Nexny giver din virksomhed adgang til et erfarent og professionelt salgsteam fra dag ét – uden de store faste omkostninger forbundet med rekruttering, oplæring, ledelse og fastholdelse af interne sælgere. Nexny fungerer som din forlængede salgsstyrke og repræsenterer din virksomhed professionelt og engageret over for potentielle kunder, med fuld respekt for dine brand guidelines og din tone of voice. Alle genererede leads og bookede møder tilhører dig og leveres direkte ind i dit CRM-system.
            </p>
            <p className="text-gray-600 mb-6">
              Nexny's outsourcingmodel er designet til maksimal fleksibilitet og skalerbarhed. Du kan hurtigt justere aktivitetsniveauet baseret på dine aktuelle behov, kampagnemål og budget – og du betaler kun for aktiv salgstid og dokumenterede resultater. Vores kunder beholder fuld kontrol og indsigt via løbende rapportering og ugentlige statusmøder, og kan til enhver tid se hvad der sker i pipeline og hvilke resultater indsatsen giver.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Skalerbar salgsindsats uden faste ansættelsesbyrder</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fuld kontrol og transparens via løbende rapportering</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Alle leads og møder leveres direkte til dit CRM</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Professionel repræsentation af dit brand</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hvornår er Outsourcing af Salg den Rigtige Beslutning?</h2>
            <p className="text-gray-600 mb-4">
              Outsourcing af salg er den rigtige løsning for virksomheder der ønsker at vækste hurtigt, teste nye markeder eller produkter, eller supplere et eksisterende salgsteam uden at ansætte. Det er særligt relevant for virksomheder der mangler de interne ressourcer til at bemande systematisk telemarketing og mødebooking, eller som har haft svingende resultater med tidligere salgsrekrutteringer.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Nexny på +45 91 95 27 94 eller kontakt@nexny.dk for en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed med at accelerere væksten gennem professionel outsourcing af salg og mødebooking.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er fordelene ved at outsource sit salg?', answer: 'Outsourcing af salg giver adgang til erfarne salgsprofessionelle uden fast ansættelse, reducerer faste lønomkostninger og giver fleksibilitet til at skalere op eller ned.' },
        { question: 'Mister vi kontrollen over salgsprocessen?', answer: 'Nej – Nexny arbejder tæt sammen med jer, følger jeres guidelines og rapporterer løbende. I beholder fuld kontrol og indsigt.' },
        { question: 'Hvem ejer de leads der genereres?', answer: 'Alle leads og møder tilhører jer som kunde – de leveres direkte ind i jeres CRM-system.' },
        { question: 'Kan Nexny repræsentere vores brand professionelt?', answer: 'Ja – vores sælgere præsenterer sig som en del af jeres team og følger jeres brand guidelines og tone of voice.' },
        { question: 'Hvad er forskellen på Nexny og at ansætte en intern sælger?', answer: 'Med Nexny betaler du kun for aktiv salgstid og resultater. En intern sælger koster fast løn, rekruttering, oplæring og ledelse – uanset performance.' },
        { question: "Hvad er forskellen på outsourcing og interim salg?", answer: "Outsourcing er løbende ekstern salgsstøtte. Interim salg er typisk en midlertidig sælger der arbejder in-house. Nexny tilbyder eksternt outsourcet salg." },
        { question: "Kan vi outsource kun én del af salgsfunktionen?", answer: "Ja – du kan outsource prospektering og leadgenerering, mens dit interne team håndterer forhandling og lukning." },
        { question: "Hvad er de typiske resultater i de første 3 måneder?", answer: "De første 6-8 uger bruges typisk på opbygning og optimering. Fra måned 2-3 begynder resultaterne at accelerere." },
        { question: "Hvad sker der, hvis vores branche er meget niche?", answer: "Vi elsker nichemarkeder – vi researcher grundigt og tilpasser tilgangen, så vi taler det rigtige sprog til de rigtige personer." },
        { question: "Kan Nexny hjælpe med salg på nye markeder?", answer: "Ja – vi kan understøtte ekspansion til nye geografier og segmenter med målrettet opsøgende salg." },
        { question: "Hvad kræver det af os som kunde?", answer: "En kort briefing, adgang til jeres CRM og et godkendt script. Vi tager os af resten." },
        { question: "Kan vi bruge Nexny til en enkeltstående kampagne?", answer: "Ja – vi tilbyder kampagnebaserede samarbejder ved produktlanceringer, sæsonkampagner og andre engangsbehov." },
        { question: "Hvad er risikoen ved at outsource salget?", answer: "Den primære risiko er manglende alignment på tone og budskab – det afhjælper vi med grundig onboarding og løbende justeringer." },
        { question: "Hvad er et godt tidspunkt at starte outsourcing?", answer: "Når du har et klart produkt/service og en defineret målgruppe. Jo mere defineret, jo hurtigere resultater." },
        { question: "Kan vi stoppe og starte samarbejdet igen?", answer: "Ja – vi har kunder der bruger Nexny sæsonbaseret eller ved specifikke kampagnebehov." },
      ]} />
      <CTASection
        title="Outsource dit salg til Nexny og fokuser på din kerneforretning"
        subtitle="Professionelt telesalg og mødebooking uden faste lønudgifter – fleksibelt, skalerbart og med dokumenterede resultater."
        primaryText="Kom i gang i dag"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
};

export default OutsourcingPage;
