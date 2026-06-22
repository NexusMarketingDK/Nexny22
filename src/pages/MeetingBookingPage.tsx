import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Target, TrendingUp, CheckCircle, ArrowRight, Users, Clock, Award, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const MeetingBookingPage: React.FC = () => {
  const providers = [
    { name: 'SaaS-løsninger', description: 'Møder med tech-savvy beslutningstagere og CTO\'er' },
    { name: 'IT-konsulentvirksomheder', description: 'Salgsmøder med beslutningstagere' },
    { name: 'Forretningsudvikling', description: 'B2B-møder med C-level executives' },
    { name: 'Markedsføring & kommunikation', description: 'Møder med marketingchefer' },
    { name: 'Digitale bureauer og webdesign', description: 'Møder med virksomheder der søger online synlighed' },
    { name: 'Økonomi & revision', description: 'Kvalificerede møder med CFO\'er' },
    { name: 'HR & rekruttering', description: 'Møder med HR-direktører' },
    { name: 'Transport & logistik', description: 'Salgsmøder med indkøbschefer' },
    { name: 'LED belysning og energiløsninger', description: 'Møder om energieffektive løsninger til erhverv' },
    { name: 'Strøm og energioptimering', description: 'B2C og B2B møder om energibesparelser' },
    { name: 'Kaffeservice til erhverv', description: 'Møder med facility managers og indkøbsansvarlige' },
    { name: 'Solenergi og vedvarende energi', description: 'Møder om grøn omstilling og bæredygtighed' },
    { name: 'Måtteservice og facility management', description: 'Møder om arbejdsmiljø og rengøringsløsninger' },
    { name: 'Pensionsrådgivning', description: 'Møder med privatpersoner og virksomheder om pensionsordninger' },
    { name: 'Inkasso og debitorhåndtering', description: 'Møder om professionel gældinddrivelse' },
    { name: 'Serviceydelser generelt', description: 'B2B møder på tværs af servicebrancherne' }
  ];

  const benefits = [
    { icon: Target, title: 'Målrettet tilgang', description: 'Vi identificerer og kontakter præcis de beslutningstagere, der matcher din målgruppe' },
    { icon: TrendingUp, title: 'Dokumenteret succesrate', description: 'Gennemsnitligt 15-20 kvalificerede salgsmøder per 100 opkald' },
    { icon: Clock, title: 'Spar tid', description: 'Frihed til at fokusere på kerneopgaver mens vi håndterer mødebooking' },
    { icon: Award, title: 'Professionel repræsentation', description: 'Erfarne mødebookere der repræsenterer din virksomhed professionelt' }
  ];

  const pricingModels = [
    {
      title: 'Pakkeløsning',
      description: 'Fast månedlig ydelse tilpasset jeres behov',
      features: [
        'Dedikeret mødebooker',
        'Garanteret antal salgsmøder',
        'Billigste løsning per møde',
        'Aflyste møder erstattes gratis',
        'Løbende optimering af strategi',
        'Månedlig rapportering',
        'Fleksibel opsigelse'
      ],
      highlight: true
    },
    {
      title: 'No Cure No Pay',
      description: 'Betal kun for gennemførte møder',
      features: [
        'Ingen forudgående investering',
        'Du definerer kvalitetskriterierne',
        'Kun betaling for møder der lever op til kravene',
        'Ingen betaling ved aflyste møder',
        'Resultatorienteret samarbejde'
      ],
      highlight: false
    }
  ];

  const faqItems = [
    {
      question: 'Hvad koster mødebooking?',
      answer: 'Prisen afhænger af flere faktorer: din branche, målgruppens kompleksitet, og den valgte betalingsmodel. Vi tilbyder både No Cure No Pay (betaling pr. møde) og faste pakkeløsninger. Kontakt os for et skræddersyet tilbud baseret på dine specifikke behov.'
    },
    {
      question: 'Hvordan fungerer No Cure No Pay?',
      answer: 'Med No Cure No Pay betaler du kun for møder, der lever op til jeres på forhånd aftalte kvalitetskrav. Vi definerer sammen, hvad der udgør et vellykket møde - f.eks. mødevarighed, deltagerprofil, eller konkrete forretningsmuligheder. Aflyste eller useriøse møder faktureres ikke.'
    },
    {
      question: 'Hvor hurtigt kan I starte mødebooking?',
      answer: 'Efter en grundig gennemgang af jeres virksomhed, produkter og målgruppe kan vi typisk starte aktiv mødebooking inden for 1-2 uger. Vi prioriterer kvalitet i forarbejdet, da det sikrer bedre møderesultater.'
    },
    {
      question: 'Hvilke brancher har I erfaring med?',
      answer: 'Vi har særlig stor erfaring med B2B-mødebooking inden for IT, forretningsløsninger, konsulentydelser, markedsføring, økonomi, HR, transport og logistik. Vores mødebookere er trænet i at kommunikere komplekse budskaber og forstår B2B-beslutningsprocesser.'
    },
    {
      question: 'Hvordan sikrer I høj mødekvalitet?',
      answer: 'Vi laver grundig research af din målgruppe, udvikler skræddersyede salgsscripts, og træner vores mødebookere i jeres værdier og løsninger. Derudover kvalificerer vi hvert lead inden booking, følger op før mødet, og tracker resultater løbende.'
    },
    {
      question: 'Kan I booke møder i hele Danmark?',
      answer: 'Ja, vi booker salgsmøder i hele landet - fra København til Aalborg og fra Esbjerg til Bornholm. Vi håndterer også videomøder og telefonmøder, hvilket giver endnu større geografisk fleksibilitet.'
    },
    {
      question: 'Hvad er forskellen mellem jeres service og andre mødebooking-firmaer?',
      answer: 'Vi fokuserer på kvalitet frem for kvantitet. Vores erfarne mødebookere har gennemsnitligt 5+ års erfaring med B2B-salg. Vi tilbyder fuld gennemsigtighed med detaljeret rapportering, og vores No Cure No Pay model sikrer, at vores interesser er fuldstændig aligned med jeres.'
    },
    {
      question: 'Leverer I også emnelister?',
      answer: 'Ja, vi leverer gerne emnelister uden beregning som en del af vores forarbejde. Vi sikrer GDPR-compliance og kvalitetssikrer alle leads inden opstart af kampagnen.'
    }
  ];

  return (
    <>
      <SEO
        title="Pris på mødebooking | Sammenlign priser (2026)"
        description="Få 3 gratis tilbud på professionel mødebooking. No Cure No Pay eller pakkeløsning. 15-20 møder per 100 opkald. Erfarne B2B-mødebookere i hele Danmark."
        canonical="https://nexusmarketing.dk/modebooking-priser"
        keywords="pris på mødebooking, mødebooking priser, mødebooking firma, telemarketing, B2B salgsmøder, no cure no pay"
      />

      <div className="min-h-screen">
        <HeroSection
          title="Vi håndterer din mødebooking – Få pris på mødebooking"
          subtitle="Professionel mødebooking der genererer kvalificerede salgsmøder. No Cure No Pay eller fast pakkeløsning."
          ctaText="Få uforpligtende tilbud"
          ctaLink="/kontakt"
          secondaryCtaText="Ring 57 77 26 11"
          secondaryCtaLink="tel:+4557772611"
          backgroundImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Fordele ved professionel mødebooking</h2>
                <p className="text-xl text-gray-600">Hvorfor virksomheder vælger ekstern mødebooking</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-blue-600 mb-4">
                      <benefit.icon size={40} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Vælg din betalingsmodel</h2>
                <p className="text-xl text-gray-600">Fleksible løsninger tilpasset din virksomhed</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {pricingModels.map((model, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 ${
                      model.highlight ? 'border-4 border-blue-600 relative' : 'border border-gray-200'
                    }`}
                  >
                    {model.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Mest populær
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{model.title}</h3>
                      <p className="text-gray-600">{model.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {model.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/kontakt"
                      className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                        model.highlight
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      Få et tilbud
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-700 text-lg mb-4">
                  <strong>Ikke sikker på hvilken model der passer bedst?</strong>
                </p>
                <p className="text-gray-600 mb-6">
                  Vi hjælper dig med at vælge den mest omkostningseffektive løsning baseret på din branche, målgruppe og forretningsmål.
                </p>
                <Link to="/kontakt" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Kontakt os for rådgivning <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Brancher vi betjener</h2>

              <p className="text-gray-700 text-center mb-12 text-lg max-w-3xl mx-auto">
                Vi har dokumenteret erfaring med mødebooking i følgende brancher:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map((provider, index) => (
                  <div key={index} className="flex items-start p-5 bg-white rounded-lg border border-blue-100 shadow-sm">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={22} />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">{provider.name}</h3>
                      <p className="text-gray-600 text-xs leading-snug">{provider.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-600 text-white rounded-lg text-center">
                <Users size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Vi booker møder i hele Danmark</h3>
                <p className="text-lg text-blue-100 mb-6">
                  Fra København til Aalborg, Esbjerg til Bornholm - vi håndterer fysiske møder, videomøder og telefonmøder.
                </p>
                <Link to="/kontakt" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Få et uforpligtende pris på mødebooking der passer til dit behov <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Sådan starter vi jeres mødebooking-kampagne</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Forventningsafstemning</h3>
                    <p className="text-gray-700">
                      Vi starter med en grundig gennemgang af din virksomhed, dine produkter og services. Vi identificerer din målgruppe, beslutningstager-profiler og jeres unikke værditilbud.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Udvikling af strategi og scripts</h3>
                    <p className="text-gray-700">
                      Baseret på vores analyse udvikler vi skræddersyede salgsscripts, der kommunikerer jeres budskab effektivt. Vi tester og optimerer løbende for at maksimere succesraten.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Emneliste og kvalificering</h3>
                    <p className="text-gray-700">
                      Vi leverer gerne en emneliste uden beregning. Vi kvalitetssikrer alle leads og sikrer GDPR-compliance. Kun relevante beslutningstagere kommer på listen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Aktiv mødebooking</h3>
                    <p className="text-gray-700">
                      Vores erfarne mødebookere starter kampagnen. De præsenterer jeres løsninger professionelt, håndterer indvendinger og booker møder med kvalificerede prospects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Rapportering og optimering</h3>
                    <p className="text-gray-700">
                      Du modtager løbende rapporter med detaljerede insights: antal opkald, bookede møder, mødegennemførelse og feedback. Vi justerer strategi baseret på resultater.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <Zap className="text-blue-600 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Hurtig opstart</h3>
                    <p className="text-gray-700">
                      Fra første kontakt til aktiv mødebooking går der typisk kun 1-2 uger. Vi prioriterer grundigt forarbejde, fordi det giver markant bedre resultater.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hvad er professionel mødebooking?</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Mødebooking er en effektiv marketingstrategi, hvor erfarne specialister kontakter potentielle kunder på vegne af din virksomhed for at booke kvalificerede salgsmøder. I en verden præget af digital markedsføring forbliver direkte, personlig kontakt en af de mest pålidelige veje til nye kunder - især i B2B-segmentet.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Hvorfor investere i mødebooking?</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Selvom SEO, sociale medier og andre online marketingaktiviteter er afgørende i dagens forretningsverden, skal du stadig have direkte dialog med dine potentielle kunder. Cold calling og mødebooking giver dokumenterbare resultater: Ring til 100 kvalificerede kundeemner, og du kan typisk forvente 15-20 konkrete salgsmøder på kort sigt plus en pipeline af leads til fremtidig opfølgning.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Udfordringen er, at mødebooking er tidskrævende og kræver dedikeret fokus. I en travl hverdag kan det være svært at opretholde konsistent mødebooking samtidig med, at du driver forretning. Det er her, professionelle mødebooking-partnere kommer ind i billedet.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Dokumenteret effekt i en digital tidsalder</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Mange virksomheder overser værdien af direkte kundekontakt i jagten på digitale løsninger. Men her er realiteten: Dine konkurrenter, der aktivt arbejder med mødebooking, skaber løbende nye forretningsmuligheder, mens andre venter på, at hjemmesiden eller LinkedIn genererer leads. Effektiv mødebooking giver dig en konkurrencefordel, fordi mange vælger det fra - de synes, det er for krævende eller ressourcetungt.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Sådan hjælper Nexus Marketing dig</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi tilbyder dedikerede, professionelle mødebookere med omfattende erfaring inden for B2B-salg. Vores team har bevist succes med at arrangere salgsmøder for virksomheder inden for IT, forretningsudvikling, konsulentydelser, markedsføring, økonomi, HR, transport og logistik.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi arbejder ikke bare som eksterne telefonpasser - vi bliver en forlængelse af dit salgsteam. Vi sætter os grundigt ind i din virksomhed, dine produkter, dine værdier og din målgruppe. Vi udvikler skræddersyede kommunikationsstrategier og sikrer, at hvert møde vi booker, har reelt potentiale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar size={64} className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Klar til flere kvalificerede salgsmøder?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Få et uforpligtende tilbud på professionel mødebooking. Vi sammensætter en løsning der matcher dine behov og budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                  Få et uforpligtende pris på mødebooking der passer til dit behov <ArrowRight className="ml-2" size={20} />
                </Link>
                <a href="tel:+4557772611" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors border-2 border-white">
                  <Phone className="mr-2" size={20} /> Ring nu: 57 77 26 11
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Ofte stillede spørgsmål om mødebooking</h2>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center p-8 bg-white rounded-lg border-2 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Har du andre spørgsmål?</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe med jeres mødebooking.
                </p>
                <Link to="/kontakt" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Kontakt os i dag <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hvad adskiller Nexus Marketing fra andre mødebooking-firmaer?</h2>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Erfaring og ekspertise</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vores mødebookere har gennemsnitligt 5+ års erfaring med B2B-salg. De kender udfordringerne ved at kontakte travle beslutningstagere og ved, hvordan man skaber interesse og værdi i den første kontakt. Vi er ikke et call center med høj medarbejderomsætning - vi er specialister inden for vores felt.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Kvalitet over kvantitet</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mange mødebooking-firmaer måler succes i antal opkald eller bookede møder. Vi måler succes på kvaliteten af de møder, vi leverer. Et møde med den rigtige beslutningstager, der har reelt behov og budget, er langt mere værdifuldt end ti møder med forkerte prospects.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Fuld gennemsigtighed</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Du får detaljeret indsigt i hver kampagne: hvor mange virksomheder vi har kontaktet, hvor mange samtaler vi har haft, hvordan prospects reagerede, og selvfølgelig resultaterne. Vi gemmer ikke os bag vage rapporter - du ved præcis, hvad du får for dine penge.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Fleksible samarbejdsmodeller</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nogle virksomheder foretrækker No Cure No Pay for at minimere risiko. Andre ønsker fast månedlig service med garanterede resultater. Vi tilpasser os dine behov og finder den model, der giver mest mening for din forretning.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Langsigtet partnerskab</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi ser os selv som en forlængelse af dit salgsteam, ikke bare en ekstern leverandør. Vi investerer tid i at forstå din forretning i dybden og optimerer løbende vores tilgang baseret på feedback og resultater. Dit langsigtede salg-succes er vores succes.
                </p>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Garanteret professionelt salgsarbejde</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vi står 100% bag kvaliteten af vores arbejde. Hvis et booket møde ikke lever op til de på forhånd aftalte kvalitetskriterier, fakturerer vi ikke for det. Så simpelt er det.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Vi skaber målbare resultater med respekt for dine kunder og din forretning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Få flere kunder med professionel mødebooking
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Ring i dag og få en uforpligtende gennemgang af, hvordan vi kan understøtte jeres salg med kvalificerede salgsmøder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/kontakt" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                  Få et uforpligtende pris på mødebooking der passer til dit behov <ArrowRight className="ml-2" size={20} />
                </Link>
                <a href="tel:+4557772611" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors border-2 border-white">
                  <Phone className="mr-2" size={20} /> 57 77 26 11
                </a>
              </div>
              <p className="text-blue-100 text-sm">
                Gratis og uforpligtende konsultation. Vi svarer inden for 24 timer.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MeetingBookingPage;
