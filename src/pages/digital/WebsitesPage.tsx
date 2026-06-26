import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, CheckCircle, ArrowRight, Search, TrendingUp, PenTool, Gauge } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebsitesPage() {
  const features = [
    {
      icon: <PenTool size={36} className="text-blue-600" />,
      title: 'Professionelt design',
      description: 'Hjemmesider der ser godt ud og giver det rigtige førstehåndsindtryk – tilpasset din branche, målgruppe og brand.'
    },
    {
      icon: <Search size={36} className="text-blue-600" />,
      title: 'SEO-optimeret fra start',
      description: 'Vi bygger med søgemaskineoptimering som en kernekomponent – teknisk SEO, hurtige loadtider og korrekt struktureret indhold.'
    },
    {
      icon: <Gauge size={36} className="text-blue-600" />,
      title: 'Lynhurtig performance',
      description: 'Optimerede billeder, minimal kode og CDN-hosting sikrer at din hjemmeside loader hurtigt – på alle enheder og forbindelser.'
    },
    {
      icon: <TrendingUp size={36} className="text-blue-600" />,
      title: 'Konverteringsoptimeret',
      description: "Vi designer med mål for øje – klare CTA'er, brugervenlig navigation og landingssider der omdanner besøgende til kunder."
    }
  ];

  const included = [
    'Strategisk design og UX-planlægning',
    'Responsivt design til alle skærmstørrelser',
    'CMS-integration (WordPress, Webflow, headless)',
    'Teknisk SEO-opsætning og metadata',
    'Google Analytics og tracking-opsætning',
    'Kontaktformularer og lead capture',
    'Cookie-banner og GDPR-compliance',
    'Domæne- og hostingopsætning',
    'Testning og quality assurance',
    '3 måneders gratis support efter lancering'
  ];

  const siteTypes = [
    { title: 'Virksomhedshjemmeside', desc: 'Præsentationssider der viser jer professionelt og genererer leads' },
    { title: 'Landingssider', desc: 'Kampagnesider optimeret til konvertering og annoncetrafik' },
    { title: 'Webshops', desc: 'E-handelsløsninger med fuldt betalingsflow og produktstyring' },
    { title: 'Porteføljesider', desc: 'Visuelle sider der fremviser jeres arbejde og referencer' },
    { title: 'Booking og reservationer', desc: 'Integrerede bookingsystemer til møder, events og ydelser' },
    { title: 'Multisprogshjemmesider', desc: 'Lokaliserede sider til det danske og internationale marked' }
  ];

  return (
    <>
      <SEO
        title="Hjemmesider | Magnora Marketing – Professionelle Webløsninger der Konverterer"
        description="Magnora Marketing designer og udvikler professionelle hjemmesider der er SEO-optimerede, hurtige og konverteringsvenlige. Skræddersyet til din virksomhed og dine mål."
        canonical="/digital/hjemmesider"
        keywords="hjemmeside, webdesign, SEO hjemmeside, konverteringsoptimering, Magnora Marketing digital, professionel hjemmeside"
      />

      <HeroSection
        title="Hjemmesider der Skaber Resultater"
        subtitle="Magnora Marketing bygger professionelle, SEO-optimerede hjemmesider der tiltrækker de rigtige besøgende og omdanner dem til kunder."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad gør en Magnora Marketing-hjemmeside anderledes?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi bygger ikke bare smukke hjemmesider – vi bygger digitale salgsmaskiner der arbejder for dig døgnet rundt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Alt er inkluderet</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hos Magnora Marketing får du en komplet løsning – fra første design-skitse til lancering og efterfølgende support. Ingen skjulte omkostninger.
              </p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Bestil din hjemmeside <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Webdesign og udvikling hos Magnora Marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Monitor size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Hjemmesidetyper vi specialiserer os i</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uanset hvilken type hjemmeside du har brug for, har vi ekspertisen til at levere den.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteTypes.map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til en ny hjemmeside?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os om din virksomhed og dine mål – vi sender et konkret tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionelle Hjemmesider der Konverterer – SEO-Optimeret og Mobilvenlig Design</h2>
            <p className="text-gray-600 mb-4">
              En professionel hjemmeside fra Magnora Marketing er din vigtigste digitale investering – den arbejder for dig 24 timer i døgnet, 7 dage om ugen, og er ofte det første møde potentielle kunder har med din virksomhed. Magnora Marketing designer og bygger hjemmesider med et klart formål: at konvertere besøgende til leads og kunder. Vi kombinerer professionelt visuelt design, stærk UX-planlægning og teknisk SEO-optimering for at sikre at din hjemmeside both ser flot ud og ranker godt i Google.
            </p>
            <p className="text-gray-600 mb-6">
              Alle Magnora Marketing's hjemmesider er fuldt responsive og mobilvenlige, og er bygget med hurtig indlæsningstid som en kerneprioritering. Vi opsætter Google Analytics og konverteringstracking som standard, integrerer GDPR-compliance og cookie-banner fra starten, og giver 3 måneders gratis support efter lancering. Du ejer 100% af koden og indholdet, og kan selv administrere hjemmesiden via det CMS vi implementerer.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> SEO-optimeret fra grunden med korrekt metadata og struktur</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Responsivt design til mobile, tablet og desktop</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> CMS-integration for nem selvadministration</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> 3 måneders gratis support efter lancering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hjemmeside Priser og Typer – Fra Enkle Landingssider til Komplette Webshops</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing leverer hjemmesider i alle størrelser og kompleksiteter – fra målrettede landingssider til kampagner og annoncetrafik, over professionelle virksomhedshjemmesider, til komplette webshops med fuldt betalingsflow og produktstyring. Vi tilbyder også porteføljesider, bookingplatforme og branche-specifikke løsninger tilpasset din forretning. Prisen afhænger af scope og kompleksitet, og vi sender altid et detaljeret og transparent tilbud inden projektet startes.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk eller mail@magnoramarketing.dk for at høre mere om, hvilken hjemmesideløsning der passer bedst til din virksomhed og dit budget. Vi sender et uforpligtende tilbud inden for 24 timer.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad er en landingsside?', answer: 'En landingsside er en målrettet webside designet til at konvertere besøgende til leads eller kunder – typisk brugt i kampagner og annoncering.' },
        { question: 'Kan jeg selv opdatere indholdet på min hjemmeside?', answer: 'Ja – vi bygger med brugervenlige CMS-løsninger så du nemt kan opdatere tekst, billeder og indhold uden teknisk baggrund.' },
        { question: 'Hvor lang tid tager det at bygge en hjemmeside?', answer: 'En simpel hjemmeside tager typisk 2-4 uger. Større løsninger aftales individuelt baseret på scope.' },
        { question: 'Inkluderer I hosting og domæne?', answer: 'Vi kan hjælpe med opsætning af hosting og domæne, eller integrere med din eksisterende løsning.' },
        { question: "Hvad er forskellen på en hjemmeside og en webshop?", answer: "En hjemmeside præsenterer din virksomhed og genererer leads. En webshop giver kunder mulighed for direkte online køb." },
        { question: "Kan I lave en hjemmeside på 1 uge?", answer: "En simpel landingsside kan vi levere på 1-2 uger. En fuld hjemmeside tager typisk 3-6 uger afhængigt af scope." },
        { question: "Hvad er en 'one-pager'?", answer: "En one-pager er en hjemmeside med alt indhold på én lang side, opdelt i sektioner. Perfekt til produktlanceringer og kampagner." },
        { question: "Kan I redesigne vores eksisterende hjemmeside?", answer: "Ja – vi tilbyder fulde redesigns med bevaret indhold og forbedret design, brugeroplevelse og konverteringsrate." },
        { question: "Hvad er en conversion rate?", answer: "Conversion rate er procentdelen af besøgende der udfører en ønsket handling – f.eks. udfylder en formular eller køber et produkt." },
        { question: "Kan vi selv redigere hjemmesiden?", answer: "Ja – vi bygger med brugervenlige CMS-løsninger som WordPress, Webflow eller lignende, så du nemt kan opdatere indhold." },
        { question: "Hvad er en 'SSL-certifikat'?", answer: "Et SSL-certifikat krypterer forbindelsen mellem brugerens browser og din hjemmeside. Det er nødvendigt for sikkerhed og Google-rangering." },
        { question: "Kan I lave flersprogede hjemmesider?", answer: "Ja – vi bygger flersprogede løsninger til virksomheder der opererer på internationale markeder." },
        { question: "Hvad er retargeting?", answer: "Retargeting viser annoncer til besøgende der allerede har besøgt din hjemmeside. Vi kan integrere tracking til dette formål." },
        { question: "Kan I hjælpe med billeder og tekst?", answer: "Ja – vi samarbejder med tekstforfattere og fotografer og kan levere en komplet løsning inkl. professionelt indhold." },
      ]} />
      <CTASection
        title="Få en professionel hjemmeside der konverterer"
        subtitle="Magnora Marketing bygger moderne, hurtige hjemmesider der tiltrækker kunder og genererer leads."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se priser"
        secondaryLink="/priser"
      />
    </>
  );
}
