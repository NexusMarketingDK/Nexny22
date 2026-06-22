import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle, ArrowRight, Zap, Clock, Globe, Bot, BarChart3, Star, Smartphone, Shield } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';

export default function AiWidgetPage() {
  const features = [
    {
      icon: <Bot size={36} className="text-blue-600" />,
      title: 'Intelligent AI-chat på din hjemmeside',
      description: 'Nexny\'s AI-widget besvarer besøgendes spørgsmål øjeblikkeligt – på dansk – og guider dem mod en booking, et tilbud eller et køb.'
    },
    {
      icon: <Clock size={36} className="text-blue-600" />,
      title: '24/7 leadgenerering uden personale',
      description: 'Widgetten arbejder nat og dag. Mens du sover, kvalificerer AI\'en nye leads, indsamler kontaktoplysninger og booker møder automatisk.'
    },
    {
      icon: <Zap size={36} className="text-blue-600" />,
      title: 'Automatisk mødebooking',
      description: 'Integreret kalenderintegration gør det muligt for besøgende at booke et møde direkte i chatten – uden menneskelig mellemhand.'
    },
    {
      icon: <Globe size={36} className="text-blue-600" />,
      title: 'Nem installation – virker overalt',
      description: 'Indsæt ét enkelt script på din hjemmeside. Virker på WordPress, Shopify, Webflow, custom React og alle andre platforme.'
    },
    {
      icon: <BarChart3 size={36} className="text-blue-600" />,
      title: 'Leaddata og konverteringsanalyse',
      description: 'Al interaktion logges og analyseres. Du får indsigt i, hvad besøgende spørger om, og hvilke emner der konverterer bedst.'
    },
    {
      icon: <Shield size={36} className="text-blue-600" />,
      title: 'GDPR-kompatibel og sikker',
      description: 'Widgetten er bygget med dansk og europæisk lovgivning in mente. Data behandles sikkert og i overensstemmelse med GDPR.'
    }
  ];

  const useCases = [
    { title: 'B2B salgssider', desc: 'Kvalificer besøgende og book salgsmøder automatisk' },
    { title: 'Webshops', desc: 'Besvar produktspørgsmål og øg konverteringen' },
    { title: 'Konsulentfirmaer', desc: 'Screeen nye kunder og book introduktionsmøder' },
    { title: 'Ejendomsmæglere', desc: 'Book fremvisninger og svar på boligspørgsmål 24/7' },
    { title: 'Klinikker & behandlere', desc: 'Bookingassistent til tider og behandlingsforespørgsler' },
    { title: 'SaaS-virksomheder', desc: 'Onboard nye brugere og svar på tekniske spørgsmål' },
  ];

  const faqs = [
    { question: 'Hvad er en AI-widget?', answer: 'En AI-widget er en intelligent chatboks der placeres på din hjemmeside. Den besvarer besøgendes spørgsmål, kvalificerer leads og booker møder – automatisk og døgnet rundt.' },
    { question: 'Kan widgetten tale dansk?', answer: 'Ja – Nexny\'s AI-widget er specialiseret til dansk erhvervskommunikation og forstår nuancer, branchejargon og danske kontekster.' },
    { question: 'Hvad kræver installation af widgetten?', answer: 'Du indsætter et enkelt JavaScript-snippet på din hjemmeside. Det tager typisk under 10 minutter og kræver ingen teknisk ekspertise.' },
    { question: 'Kan widgetten integreres med mit CRM?', answer: 'Ja – vi integrerer med HubSpot, Pipedrive, Salesforce, ActiveCampaign og mange andre CRM-systemer, så leads automatisk sendes til dit system.' },
    { question: 'Hvordan trænes AI\'en til mit produkt?', answer: 'Vi onboarder widgetten med din virksomheds FAQ, produktinformation og salgsmateriale, så den svarer præcist og på brand.' },
    { question: 'Hvad sker der med de leads widgetten genererer?', answer: 'Leads sendes direkte til dit CRM, din e-mail eller Slack – eller videre til Nexny\'s salgsteam for opfølgning og mødebooking.' },
    { question: 'Kan widgetten booke møder i min kalender?', answer: 'Ja – via integration med Google Calendar, Outlook og Calendly kan besøgende booke møder direkte i chatten.' },
    { question: 'Er widgetten GDPR-kompatibel?', answer: 'Ja – al databehandling sker i overensstemmelse med GDPR. Vi kan hjælpe med cookiesamtykke og databehandleraftale.' },
    { question: 'Hvad koster en AI-widget fra Nexny?', answer: 'Prisen afhænger af antal samtaler, integrationer og funktioner. Kontakt os for et tilbud tilpasset din virksomhed.' },
    { question: 'Kan jeg se statistik over widgettens performance?', answer: 'Ja – du får adgang til et dashboard med konverteringsdata, samtalehistorik og leadstatistik.' },
    { question: 'Hvad sker der hvis AI\'en ikke kender svaret?', answer: 'Widgetten eskalerer ukendte spørgsmål til et menneske via e-mail eller chat-handover, så ingen henvendelse falder mellem to stole.' },
    { question: 'Kan widgetten bruges på mobilsider?', answer: 'Ja – widgetten er fuldt responsiv og fungerer på alle enheder: desktop, tablet og mobil.' },
    { question: 'Hvor lang tid tager det at komme i gang?', answer: 'Fra aftale til live widget tager det typisk 3-5 hverdage inklusiv opsætning, træning og integration.' },
    { question: 'Kan jeg tilpasse widgettens design?', answer: 'Ja – farver, logo, velkomstbesked og tone-of-voice tilpasses din brand identity.' },
    { question: 'Hvilke platforme understøttes?', answer: 'Widgetten virker på alle platforme: WordPress, Webflow, Shopify, custom React/Vue, og alle andre der tillader JavaScript.' },
  ];

  return (
    <>
      <SEO
        title="AI Widget til Hjemmesider | Automatisk Leadgenerering & Mødebooking | Nexny"
        description="Nexny's AI-widget genererer leads og booker møder automatisk på din hjemmeside – 24/7, på dansk. Nem installation. Integrerer med dit CRM. ✓ GDPR-kompatibel ✓ Prøv gratis"
        canonical="/digital/ai-widget"
        keywords="AI widget, chatbot hjemmeside, AI leadgenerering, automatisk mødebooking, AI chat dansk, chatbot B2B"
      />

      <HeroSection
        title="AI-widget der genererer leads mens du sover"
        subtitle="Placer Nexny's intelligente AI-widget på din hjemmeside og lad den besvare spørgsmål, kvalificere besøgende og booke møder – automatisk, på dansk, døgnet rundt."
        ctaText="Få en gratis demo"
        ctaLink="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaLink="/priser"
        backgroundImage="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Funktioner</span>
            <h2 className="mb-4">Alt hvad en AI-widget skal kunne</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Fra simpel FAQ til avanceret leadkvalificering og automatisk booking – Nexny's widget håndterer det hele.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-8">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-sky-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Sådan virker det</span>
              <h2 className="mb-6">Fra besøgende til booket møde – på 3 minutter</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Besøgende åbner widgetten', desc: 'En personlig velkomst og et relevant første spørgsmål engagerer den besøgende med det samme.' },
                  { step: '02', title: 'AI\'en kvalificerer og besvarer', desc: 'Widgetten stiller de rigtige spørgsmål, identificerer behovet og tilpasser svaret til den besøgendes situation.' },
                  { step: '03', title: 'Automatisk booking eller lead-opsamling', desc: 'Den besøgende booker et møde direkte i chatten – eller efterlader kontaktinfo som sendes til dit CRM og salgsteam.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{s.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                      <p className="text-slate-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="btn btn-primary mt-8 inline-flex">
                Book en gratis demo <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Nexny AI Assistant</div>
                  <div className="text-xs text-green-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Online nu</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  Hej! Jeg er Nexny's AI-assistent. Hvad kan jeg hjælpe dig med i dag?
                </div>
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto">
                  Jeg er interesseret i mødebooking for min virksomhed
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  Perfekt! Hvor mange møder ønsker du booket om måneden, og hvilken branche er du i?
                </div>
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] ml-auto">
                  Ca. 20 møder, vi sælger SaaS-løsninger
                </div>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[85%]">
                  Godt! Vil du booke et gratis 20-minutters møde med en af vores specialister? 📅
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-400 bg-slate-50" placeholder="Skriv her..." readOnly />
                <button className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Brancher</span>
            <h2 className="mb-4">AI-widget til alle typer virksomheder</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="flex items-start gap-4 p-6 card">
                <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-800 mb-1">{u.title}</div>
                  <div className="text-sm text-slate-500">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '24/7', label: 'Tilgængelighed' },
              { value: '< 3 sek', label: 'Responstid' },
              { value: '+40%', label: 'Flere leads' },
              { value: '3-5 dage', label: 'Tid til live' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Ofte stillede spørgsmål om AI-widget" />

      <CTASection
        title="Klar til at lade AI arbejde for dig?"
        subtitle="Book en gratis demo og se Nexny's AI-widget i aktion på din hjemmeside inden for 48 timer."
        primaryText="Book gratis demo"
        primaryLink="/kontakt"
        secondaryText="Se alle digitale løsninger"
        secondaryLink="/digital/ai-integration"
      />
    </>
  );
}
