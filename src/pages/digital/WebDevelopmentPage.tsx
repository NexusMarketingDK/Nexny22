import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

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
        title="Webudvikling | Nexny – Professionelle Webapplikationer"
        description="Nexny udvikler skræddersyede webapplikationer og digitale løsninger til ambitiøse virksomheder. Moderne teknologi, responsivt design og høj performance."
        canonical="/digital/webudvikling"
        keywords="webudvikling, webapplikation, React, Next.js, TypeScript, Nexny digital"
      />

      <HeroSection
        title="Professionel Webudvikling med Nexny"
        subtitle="Vi bygger moderne, skalerbare og konverteringsoptimerede webapplikationer der understøtter din forretning og vækst."
        ctaText="Få et tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad vi tilbyder inden for webudvikling</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fra idé til lancering leverer Nexny komplette webløsninger der er bygget til at vokse med din virksomhed.
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
              <h2 className="text-3xl font-bold mb-6">Hvad du modtager fra Nexny</h2>
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
                alt="Webudvikling team hos Nexny"
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
            Kontakt Nexny nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
