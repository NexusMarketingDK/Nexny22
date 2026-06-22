import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Sun, Leaf, TrendingUp } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

export default function SolarEnergyPage() {
  return (
    <>
      <SEO
        title="Freelance Sælger Solenergi & Vedvarende Energi | Nexny"
        description="Bliv freelance sælger af solenergi og vedvarende energiløsninger hos Nexny. Sælg solceller til erhverv og private – fleksibelt hjemmearbejde med stærk provision."
        canonical="/jobs/solar-energy"
        keywords="freelance sælger solenergi, sælg solceller, solenergi job, vedvarende energi salg, Nexny solcelle stilling"
      />

      <HeroSection
        title="Freelance Sælger – Solenergi & Vedvarende Energi"
        subtitle="Sælg fremtidens energiløsninger til private og erhverv. Solceller er én af de hurtigst voksende brancher i Danmark – og du kan tjene godt på det hjemmefra."
        ctaText="Søg stillingen"
        ctaLink="/kontakt"
        secondaryCtaText="Se alle stillinger"
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvad går jobbet ud på?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Som freelance sælger inden for solenergi kontakter du boligejere, landmænd og erhvervsvirksomheder om investering i solceller og grøn energi. Markedet er i vækst, og efterspørgslen er høj.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nexny leverer leads, scripts og produktviden. Du håndterer dialogen, besvarer spørgsmål om besparelser og booker tilbudsmøder til vores energirådgivere.
              </p>
              <ul className="space-y-3">
                {[
                  'Opsøgende salg til private og erhvervskunder',
                  'Booking af energirådgivningsmøder og tilbudsbesøg',
                  'Rådgivning om besparelser, tilskud og tilbagebetalingstid',
                  'Opfølgning på interesserede emner',
                  'Samarbejde med Nexny\'s energiteam'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold mb-6 text-green-800">Stillingens nøglefakta</h3>
              <div className="space-y-4">
                {[
                  { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
                  { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
                  { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
                  { label: 'Løn', value: 'Fast grundhonorar + provision' },
                  { label: 'Produkt', value: 'Solceller & vedvarende energi' },
                  { label: 'Opstart', value: 'Hurtigst muligt' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-green-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send din ansøgning <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Et marked i kraftig vækst</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Sun size={36} className="text-orange-500" />, title: 'Rekordinstallationer', desc: 'Danmark sætter år for år rekord i antal nyinstallerede solcelleanlæg – efterspørgslen overstiger udbuddet af gode sælgere.' },
              { icon: <TrendingUp size={36} className="text-orange-500" />, title: 'Høj provision pr. salg', desc: 'Solcellesalg er én af de mest lukrative provisionsprodukter på markedet – hvert salg giver markant afkast.' },
              { icon: <Leaf size={36} className="text-orange-500" />, title: 'Meningsfuldt arbejde', desc: 'Du hjælper familier og virksomheder med at reducere deres energiregning og CO₂-aftryk på samme tid.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvad du får hos Nexny</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Home size={40} className="text-blue-600" />, title: 'Arbejd hjemmefra', desc: 'Alt hvad du behøver er en telefon og computer. Du arbejder trygt hjemmefra med fuld fleksibilitet.' },
              { icon: <PiggyBank size={40} className="text-blue-600" />, title: 'Attraktiv provision', desc: 'Grundhonorar plus provision. Solceller er et højværdiprodukt – og din provision afspejler det.' },
              { icon: <Clock size={40} className="text-blue-600" />, title: 'Fleksible tider', desc: 'Tilrettelæg din salgsdag som det passer dig. Ideelt for studerende, forældre og dem med andet ved siden af.' }
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Det kigger vi efter</h2>
              <ul className="space-y-3">
                {[
                  'Erfaring med salg eller kundekontakt',
                  'Evne til at tale enkelt om økonomi og besparelser',
                  'Selvmotiveret og resultatorienteret',
                  'Gode kommunikationsevner på dansk',
                  'Interesse for grøn energi og bæredygtighed',
                  'Teknisk baggrund er ikke nødvendig'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Sådan søger du</h2>
              <p className="text-gray-600 mb-6">Send en kort besked om dig selv og din baggrund. Ingen lang ansøgning – vi vender tilbage inden for 2 hverdage.</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kontakt Nexny nu <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vær med i Danmarks grønne omstilling</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Kontakt Nexny og kom i gang med at sælge Danmarks mest efterspurgte energiprodukt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send ansøgning <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Se alle ledige stillinger
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
