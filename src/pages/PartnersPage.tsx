import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, HeartHandshake, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const PartnersPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const benefits = [
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
  ];

  const processSteps = [
    { number: '01', title: 'Opstartsmøde', description: 'Vi starter med et grundigt møde for at forstå din virksomhed, dine produkter og din ideelle kunde.' },
    { number: '02', title: 'Strategi & Opsætning', description: 'Vi udvikler en skræddersyet strategi med klare KPI\'er, målsætninger og kommunikationsplaner.' },
    { number: '03', title: 'Kampagnestart', description: 'Vores team briefes grundigt og går i gang med telemarketing eller mødebooking med løbende feedback og justering.' },
    { number: '04', title: 'Opfølgning & Optimering', description: 'Vi evaluerer resultater løbende og optimerer indsatsen kontinuerligt for at sikre den bedste ROI for dig.' }
  ];

  return (
    <>
      <SEO
        title="Bliv Samarbejdspartner | Nexny – Telesalg, Mødebooking og AI"
        description="Start et samarbejde med Nexny – din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver. Målbare resultater."
        canonical="/samarbejdspartner"
        keywords="Nexny samarbejdspartner, outsource salg, mødebooking partner, B2B salg, telemarketing bureau"
      />

      <HeroSection
        title="Lad Nexny Drive Dit Salg"
        subtitle="Bliv samarbejdspartner og få adgang til et dedikeret salgsteam der leverer kvalificerede møder, varme leads og dokumenterede resultater – uden ansættelsesbyrden."
        ctaText="Start samarbejde"
        ctaLink="#kontakt-formular"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvorfor vælge Nexny som salgspartner?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny kombinerer menneskelig salgskraft med datadrevne metoder for at levere resultater der gør en reel forskel for din bundlinje.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sådan starter samarbejdet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-formular" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Kontakt Nexny</h2>
            <p className="text-lg text-gray-600">Udfyld formularen og vi vender tilbage inden for én hverdag.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <iframe
              data-tally-src="https://tally.so/embed/npM1BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Bliv samarbejdspartner med Nexny"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at samarbejde med Nexny?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag det første skridt mod mere vækst. Kontakt os og hør hvad Nexny kan gøre for din virksomhed.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kom i gang <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvad koster det at samarbejde med Nexny?', answer: 'Prisen afhænger af din branche, opgavens omfang og den valgte model. Vi tilbyder både No Cure No Pay og faste pakkeløsninger. Kontakt os for et skræddersyet tilbud.' },
        { question: 'Hvornår kan I starte?', answer: 'Typisk kan vi starte aktiv indsats inden for 1-2 uger efter en grundig opstartsbriefing.' },
        { question: 'Hvilke brancher arbejder I med?', answer: 'Vi arbejder med en bred vifte af B2B brancher – fra IT og SaaS til energi, facility, finans og konsulentbranchen.' },
        { question: 'Hvad er minimumsperioden for samarbejde?', answer: 'Vi anbefaler minimum 3 måneder for at se solide resultater, men vi er fleksible og tilpasser os din situation.' },
        { question: 'Hvad indebærer et samarbejde med Nexny?', answer: 'Som samarbejdspartner får du adgang til Nexny\'s team af erfarne salgsprofessionelle, der arbejder dedikeret med at generere leads og booke møder til din virksomhed.' },
        { question: 'Kan vi selv definere målgruppen?', answer: 'Ja – vi skræddersyr kampagner baseret på din ønskede målgruppe, branche, virksomhedsstørrelse og geografi.' },
        { question: 'Hvad er minimumslængden på et samarbejde?', answer: 'Vi anbefaler minimum 3 måneder for at opnå optimale resultater, men tilbyder fleksible løsninger.' },
        { question: 'Får vi adgang til rapportering?', answer: 'Ja, du modtager ugentlige og månedlige rapporter med alle aktiviteter, mødebookinger og resultater.' },
        { question: 'Arbejder I med NDA og fortrolighed?', answer: 'Selvfølgelig – alle samarbejder er beskyttet af fortrolighedsaftaler.' },
        { question: "Hvad er en typisk opstartsproces?", answer: "Vi starter med en briefing, definerer målgruppe og KPI'er, laver et script og testperiode, og går derefter i fuld drift." },
        { question: "Kan vi se vores leads i realtid?", answer: "Ja – vi kan give adgang til et live dashboard eller levere ugentlige rapporter afhængigt af jeres præference." },
        { question: "Hvad sker der, hvis resultaterne ikke lever op til forventningerne?", answer: "Vi holder løbende optimeringsmøder og justerer tilgangen baseret på data. Transparens og ærlighed er grundlæggende for vores samarbejde." },
        { question: "Kan vi stoppe samarbejdet hvis det ikke virker?", answer: "Ja – vi har rimelige opsigelsesvarsler og ønsker ikke at binde kunder der ikke oplever værdi." },
        { question: "Arbejder I med eksklusive aftaler?", answer: "Vi kan tilbyde eksklusivitet inden for en given branche og region, afhængigt af samarbejdets omfang." },
        { question: "Kan I arbejde med vores eksisterende salgsteam?", answer: "Absolut – mange kunder bruger Nexny som supplement til deres interne salgsteam, ikke som erstatning." },
        { question: "Hvad er jeres erfaring med SaaS-virksomheder?", answer: "Vi har stærk erfaring med mødebooking og leadgenerering til SaaS-virksomheder, herunder tech-beslutningstagere og IT-chefer." },
        { question: "Kan I hjælpe med at validere en ny målgruppe?", answer: "Ja – telemarketing og mødebooking er ideelle til at teste nye målgrupper hurtigt og datadrevet." },
        { question: "Tilbyder I pilotprojekter?", answer: "Ja – vi tilbyder ofte en kortere pilotperiode så du kan evaluere resultater og samarbejdsform inden fuld opstart." },
        { question: "Hvad adskiller Nexny fra et traditionelt callcenter?", answer: "Nexny er ikke et callcenter – vi er en strategisk salgspartner med fokus på kvalitet, målretning og dokumenterede resultater, ikke volumen." },
      ]} />
      <CTASection
        title="Bliv samarbejdspartner – start din vækst i dag"
        subtitle="Lad Nexny fylde din kalender med kvalificerede salgsmøder og varme leads, så dit team kan fokusere på at lukke aftaler."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se priser og pakker"
        secondaryLink="/priser"
      />
    </>
  );
};

export default PartnersPage;
