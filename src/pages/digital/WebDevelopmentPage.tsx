import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Code size={36} className="text-blue-600" />,
      title: 'Skræddersyede webapplikationer',
      description: 'Vi bygger komplekse webapplikationer fra bunden – præcis tilpasset dine forretningsprocesser og brugerbehov.'
    },
    {
      icon: <Smartphone size={36} className="text-blue-600" />,
      title: 'Responsivt design',
      description: 'Alle løsninger er fuldt mobilvenlige og fungerer fejlfrit på alle skærmstørrelser og enheder.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Høj performance',
      description: 'Hurtige indlæsningstider og optimeret kode der sikrer en god brugeroplevelse og bedre placeringer i søgeresultaterne.'
    },
    {
      icon: <Shield size={36} className="text-blue-600" />,
      title: 'Sikkerhed i fokus',
      description: 'Vi bygger med sikkerhed som grundpille – HTTPS, datakryptering og løbende opdateringer er altid inkluderet.'
    }
  ];

  const techStack = [
    'React & Next.js', 'TypeScript', 'Node.js & Express', 'REST API & GraphQL',
    'PostgreSQL & MongoDB', 'Tailwind CSS', 'Vercel & AWS', 'CI/CD pipelines'
  ];

  const deliverables = [
    'Kravspecifikation og teknisk arkitektur',
    'UI/UX design og prototyper',
    'Fuldt responsiv frontend-udvikling',
    'Backend og database-integration',
    'Testning og kvalitetssikring',
    'Lancering og teknisk support',
    'Dokumentation og vidensoverdragelse',
    'Løbende vedligeholdelse og opdateringer'
  ];

  return (
    <>
      <SEO
        title="Webudvikling | Magnora Marketing – Professionelle Webapplikationer"
        description="Magnora Marketing udvikler skræddersyede webapplikationer og digitale løsninger til ambitiøse virksomheder. Moderne teknologi, responsivt design og høj performance."
        canonical="/digital/webudvikling"
        keywords="webudvikling, webapplikation, React, Next.js, TypeScript, Magnora Marketing digital"
      />

      <HeroSection
        title="Professionel Webudvikling med Magnora Marketing"
        subtitle="Vi bygger moderne, skalerbare og konverteringsoptimerede webapplikationer der understøtter din forretning og vækst."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad vi tilbyder inden for webudvikling</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fra idé til lancering leverer Magnora Marketing komplette webløsninger der er bygget til at vokse med din virksomhed.
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
              <h2 className="text-3xl font-bold mb-6">Hvad du modtager fra Magnora Marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi håndterer hele processen – fra kravspecifikation og design til udvikling, test og lancering. Du får en nøglefærdig løsning med fuld dokumentation og support.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start dit projekt <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Webudvikling team hos Magnora Marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Teknologier vi arbejder med</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Vi bruger moderne og afprøvede teknologier der sikrer stabilitet, skalering og nem vedligeholdelse.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <span key={i} className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-medium border border-blue-100">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <BarChart3 size={48} className="mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-6">Klar til at starte dit projekt?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fortæl os om din idé eller dine behov – vi sender et uforpligtende tilbud inden for 24 timer.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Magnora Marketing nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professionel Webudvikling til Ambitiøse Virksomheder – React, Next.js og TypeScript</h2>
            <p className="text-gray-600 mb-4">
              Magnora Marketing's webudviklingsteam bygger moderne, skalerbare og konverteringsoptimerede webapplikationer der understøtter din forretning og vækst. Vi arbejder med de bedste og mest afprøvede teknologier – React, Next.js, TypeScript, Node.js og PostgreSQL – og sikrer at din løsning er bygget til at vokse med din virksomhed. Fra enkle præsentationssider til avancerede SaaS-platforme og systemintegrationer håndterer Magnora Marketing hele udviklingsprocessen fra kravspecifikation og UI/UX-design til testning, lancering og løbende vedligeholdelse.
            </p>
            <p className="text-gray-600 mb-6">
              Alle Magnora Marketing's webløsninger er fuldt responsive og mobilvenlige, SEO-optimerede fra grunden, og bygget med sikkerhed og GDPR-compliance som grundpillerne. Vi leverer nøglefærdige løsninger med fuld dokumentation, kilekodeoverdragelse og et struktureret onboarding-forløb, der sikrer at du og dit team kan administrere og videreudvikle løsningen selv. Hurtige indlæsningstider og optimeret kode er standard i alle projekter.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Moderne teknologistack: React, Next.js, TypeScript, Node.js</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Fuldt responsivt design til alle enheder</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> Teknisk SEO og Google Analytics opsætning inkluderet</li>
              <li className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> GDPR-compliant med fuld dokumentation og kildekode</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Webudvikling der Genererer Leads og Konverterer Besøgende til Kunder</h2>
            <p className="text-gray-600 mb-4">
              En professionel hjemmeside eller webapplikation fra Magnora Marketing er mere end blot en digital tilstedeværelse – det er din mest effektive sælger, der arbejder for dig døgnet rundt. Vi designer med konvertering for øje og bygger klare call-to-actions, brugervenlig navigation og overbevisende landingssider der omdanner besøgende til leads og leads til kunder. Kombineret med solid teknisk SEO sikrer vi, at din hjemmeside ranker godt i søgemaskinerne og tiltrækker den rigtige trafik.
            </p>
            <p className="text-gray-600 mb-4">
              Kontakt Magnora Marketing på mail@magnoramarketing.dk for en uforpligtende snak om dit webudviklingsprojekt. Vi sender et tilbud inden for 24 timer.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Hvad koster en hjemmeside hos Magnora Marketing?', answer: 'Prisen afhænger af scope og kompleksitet. Vi tilbyder løsninger fra enkle landingssider til avancerede webapplikationer. Kontakt os for et uforpligtende tilbud.' },
        { question: 'Hvem ejer hjemmesiden når den er færdig?', answer: 'Du ejer 100% af koden og indholdet. Magnora Marketing leverer en løsning du selv kan administrere og videreudvikle.' },
        { question: 'Kan I overtage og videreudvikle en eksisterende hjemmeside?', answer: 'Ja – vi kan gennemgå, optimere og videreudvikle eksisterende løsninger uanset teknologi.' },
        { question: 'Laver I mobilvenlige hjemmesider?', answer: 'Alle Magnora Marketing\'s webløsninger er fuldt responsive og optimeret til mobile enheder.' },
        { question: 'Inkluderer I SEO-optimering?', answer: 'Ja – vi bygger alle hjemmesider med solid teknisk SEO som fundament, inkl. hurtig loadtid, strukturerede data og metadata.' },
        { question: "Hvad er en webapp?", answer: "En webapp er en avanceret hjemmeside med interaktive funktioner – f.eks. brugerlogin, dashboards, bookingsystemer eller interne værktøjer." },
        { question: "Kan I overtage et eksisterende projekt?", answer: "Ja – vi vurderer gerne eksisterende kode og overdrager projektet til vores team med minimal afbrydelse." },
        { question: "Hvad er forskellen på en hjemmeside og en webapp?", answer: "En hjemmeside præsenterer information. En webapp tilbyder interaktive funktioner og bruges som et digitalt arbejdsredskab." },
        { question: "Bruger I open source teknologier?", answer: "Ja – vi bygger typisk på moderne open source frameworks som React, Next.js og Node.js for skalerbarhed og transparens." },
        { question: "Hvad er en CMS?", answer: "Et CMS (Content Management System) er et administrationsværktøj der giver dig mulighed for at opdatere indhold på din hjemmeside uden teknisk viden." },
        { question: "Kan jeg se en prototype inden projektet godkendes?", answer: "Ja – vi præsenterer altid wireframes og designprototyper til godkendelse inden vi begynder den egentlige udvikling." },
        { question: "Hvad er vedligeholdelse, og hvad koster det?", answer: "Vedligeholdelse inkluderer sikkerhedsopdateringer, performance-tjek og indholdsændringer. Vi tilbyder månedlige vedligeholdelsespakker." },
        { question: "Kan I hjælpe med Google Analytics og tracking?", answer: "Ja – vi opsætter Google Analytics, heatmaps og konverteringstracking som standard del af projektet." },
        { question: "Hvad er hastighed vigtig for?", answer: "Sideindlæsningshastighed påvirker både brugeroplevelsen og Google-rangering. Vi optimerer alle projekter til hurtig loadtid." },
        { question: "Kan I hjælpe med domæne og hosting?", answer: "Ja – vi hjælper med valg, registrering og opsætning af domæne og hosting som del af projektet." },
      ]} />
      <CTASection
        title="Få dit webudviklingsprojekt startet i dag"
        subtitle="Moderne, konverteringsoptimerede webløsninger der repræsenterer din virksomhed professionelt."
        primaryText="Kontakt os"
        primaryLink="/kontakt"
        secondaryText="Se digital portfolio"
        secondaryLink="/digital/hjemmesider"
      />
    </>
  );
}
