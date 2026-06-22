import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';

export default function RemoteWorkPage() {
  return (
    <>
      <SEO
        title="Freelance Remote Salg – Arbejd Hjemmefra | Nexny"
        description="Bliv freelance sælger og arbejd 100% remote hos Nexny. Vælg dit eget produkt, sæt dine egne tider og byg en karriere hjemmefra med stærk provision."
        canonical="/jobs/arbejd-hjemmefra"
        keywords="freelance remote salg, arbejd hjemmefra sælger, remote job Danmark, hjemmekontor salg, Nexny remote stilling"
      />

      <HeroSection
        title="Freelance Sælger – Arbejd 100% Remote"
        subtitle="Nexny tilbyder freelance salgsstillinger du kan udøve fra hvor som helst i Danmark. Ingen pendling, ingen faste kontortider – du sætter selv rammerne."
        ctaText="Se ledige stillinger"
        ctaLink="/freelance-telemarketing"
        secondaryCtaText="Kontakt os"
        secondaryCtaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad er remote salg hos Nexny?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Remote salg betyder at du arbejder som freelance sælger for Nexny – fra dit eget hjem, sommerhus, eller hvor du har lyst. Du vælger selv produkt, arbejdstider og ambitionsniveau.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Home size={40} className="text-blue-600" />, title: 'Fuld fleksibilitet', desc: 'Arbejd hvornår du vil og fra hvor du vil. Ingen mødetider, ingen kontor – bare resultater.' },
              { icon: <Laptop size={40} className="text-blue-600" />, title: 'Alt foregår digitalt', desc: 'Telefon, e-mail og CRM. Nexny leverer de digitale værktøjer – du leverer salget.' },
              { icon: <Globe size={40} className="text-blue-600" />, title: 'Sælg fra hele Danmark', desc: 'Dine kunder er i hele Danmark. Du er ikke begrænset af geografi – sælg til hele landet fra ét sted.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vælg det produkt du brænder for</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexny har remote salgsstillinger inden for mange brancher. Find det produkt der passer til din baggrund og interesse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Webudvikling & digitale løsninger', link: '/jobs/webudvikling-salg' },
              { label: 'LED-belysning & energieffektivisering', link: '/jobs/led-belysning' },
              { label: 'Solenergi & vedvarende energi', link: '/jobs/solenergi' },
              { label: 'Strøm & energioptimering', link: '/jobs/energi-salg' },
              { label: 'Kaffeservice til erhverv', link: '/jobs/kaffe-service' },
              { label: 'Måtte- og rengøringsservice', link: '/jobs/matte-service' },
              { label: 'Pensionsrådgivning', link: '/jobs/pensionsordning' },
              { label: 'Inkasso & kreditorstyring', link: '/jobs/inkasso' },
              { label: 'B2B telemarketing & mødebooking', link: '/freelance-telemarketing' }
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <CheckCircle className="text-blue-500 flex-shrink-0 group-hover:text-blue-600" size={18} />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm">{item.label}</span>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad du får hos Nexny</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { icon: <PiggyBank size={40} className="text-blue-600" />, title: 'Konkurrencedygtig provision', desc: 'Fast grundhonorar plus provision på dine salg. Jo mere du sælger, jo mere tjener du – ingen loft.' },
              { icon: <Users size={40} className="text-blue-600" />, title: 'Stærkt supportnetværk', desc: 'Du er aldrig alene. Nexny\'s salgsledere er klar til sparring, coaching og support gennem hele forløbet.' },
              { icon: <Clock size={40} className="text-blue-600" />, title: 'Dine egne tider', desc: 'Fuld fleksibilitet over din arbejdsdag. Perfekt som fuldtidsjob, biindtægt eller supplement til studie.' },
              { icon: <Laptop size={40} className="text-blue-600" />, title: 'Digitale arbejdsværktøjer', desc: 'Adgang til CRM, scripts, kampagnematerialer og leads. Du har alt hvad du skal bruge fra dag ét.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Det kigger vi efter</h2>
              <ul className="space-y-3">
                {[
                  'Erfaring med salg, kundekontakt eller telemarketing',
                  'Evne til at arbejde selvstændigt og disciplineret',
                  'Gode kommunikationsevner på dansk',
                  'Resultatorienteret og målbevidst',
                  'Adgang til telefon og computer',
                  'Motivation og drive – det er det vigtigste'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Sådan kommer du i gang</h2>
              <p className="text-gray-600 mb-4">
                Kig på vores ledige stillinger, find det produkt der passer dig, og send os en kort besked. Ingen formel ansøgning – bare skriv til os.
              </p>
              <p className="text-gray-600 mb-8">Vi vender tilbage inden for 2 hverdage og sætter et afklaringsmøde op.</p>
              <div className="flex flex-col gap-3">
                <Link to="/freelance-telemarketing" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Se alle ledige stillinger <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/kontakt" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Kontakt Nexny direkte <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={[
        { question: 'Kan jeg arbejde remote som sælger hos Nexny?', answer: 'Ja – alle Nexny\'s freelance salgsstillinger kan udføres 100% hjemmefra. Du behøver kun en telefon, computer og stabilt internet.' },
        { question: 'Hvad er provisionssatsen?', answer: 'Provisionen varierer afhængigt af produkt og kampagne. Du får altid en klar aftale om løn og provision inden opstart.' },
        { question: 'Skal jeg selv finde kunder?', answer: 'Nej – Nexny leverer leads, scripts og kampagnematerialer. Du ringer til de kontakter vi giver dig og arbejder efter vores salgsproces.' },
        { question: 'Hvornår udbetales provision?', answer: 'Provision udbetales månedligt baseret på verificerede salg og resultater.' },
        { question: 'Kan jeg arbejde for Nexny ved siden af et andet job?', answer: 'Ja – mange af vores freelancere arbejder for Nexny som biindtægt eller supplement til studier.' },
      ]} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start din freelance karriere hos Nexny i dag</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Fri, fleksibel og med fuld fokus på resultater. Det er hvad Nexny tilbyder dig som remote sælger.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/freelance-telemarketing" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Se alle ledige stillinger <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Kontakt Nexny
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
