import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle, ArrowRight, Bot, Zap, BarChart3, MessageSquare } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

export default function AiIntegrationPage() {
  const features = [
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'AI-chatbots og virtuelle assistenter',
      description: 'Vi implementerer intelligente chatbots der håndterer kundehenvendelser, kvalificerer leads og besvarer spørgsmål – automatisk og døgnet rundt.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Automatisering af arbejdsprocesser',
      description: 'Nexny kortlægger og automatiserer manuelle processer med AI – fra dataindsamling og rapportering til e-mailflows og opgavedistribution.'
    },
    {
      icon: <BarChart3 size={36} className="text-blue-600" />,
      title: 'Datadrevet AI-analyse',
      description: 'Vi integrerer AI-modeller der analyserer jeres salgsdata, forudsiger efterspørgsel og identificerer vækstmuligheder i realtid.'
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600" />,
      title: 'Naturlig sprogbehandling (NLP)',
      description: 'Tekstanalyse, sentimentanalyse og AI-drevet indholdsgenerering der sparer tid og løfter kvaliteten i din kommunikation.'
    }
  ];

  const useCases = [
    'AI-drevet lead scoring og kvalificering',
    'Automatiske svarflows i kundeservice',
    'Intelligente e-mail- og SMS-kampagner',
    'Salgsforudsigelse og pipeline-analyse',
    'Dokumentbehandling og dataudtræk',
    'AI-baseret content-generering og optimering',
    'Talegenkendelse og transkribering',
    'Personaliserede anbefalingssystemer'
  ];

  return (
    <>
      <SEO
        title="AI Integration | Nexny – Automatisering og Kunstig Intelligens"
        description="Nexny integrerer AI og maskinlæring i din forretning. Automatiser processer, boost salget og tag bedre beslutninger med datadrevet kunstig intelligens."
        canonical="/digital/ai-integration"
        keywords="AI integration, kunstig intelligens, automatisering, chatbot, NLP, maskinlæring, Nexny digital"
      />

      <HeroSection
        title="AI Integration der Accelererer din Forretning"
        subtitle="Nexny implementerer skræddersyede AI-løsninger der automatiserer processer, forbedrer kundeoplevelsen og frigiver tid til det der skaber vækst."
        ctaText="Udforsk mulighederne"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-løsninger fra Nexny</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi gør AI tilgængeligt og praktisk anvendeligt for din virksomhed – uanset størrelse og branche.
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
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AI integration og automatisering hos Nexny"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Konkrete AI-anvendelser vi leverer</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fra enkle automatiseringer til avancerede maskinlæringsmodeller – vi finder den AI-løsning der giver mest værdi for netop din virksomhed.
              </p>
              <ul className="space-y-3">
                {useCases.map((u, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book en AI-konsultation <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Cpu size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Hvorfor AI-integration med Nexny?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Sparer tid', desc: 'Automatiser gentagne opgaver og frigør dine medarbejdere til værdiskabende arbejde.' },
              { title: 'Øger præcision', desc: 'AI-modeller minimerer menneskelige fejl og sikrer konsistens i dine processer.' },
              { title: 'Skalerer med dig', desc: 'Vores AI-løsninger vokser med din forretning uden proportionale omkostningsstigninger.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at implementere AI i din virksomhed?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book en uforpligtende konsultation – vi gennemgår dine processer og præsenterer konkrete AI-muligheder med estimeret ROI.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Nexny nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
