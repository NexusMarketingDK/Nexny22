import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Users, Target, Euro, Clock, Shield, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const PricingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pricingModels = [
    {
      title: 'Pakkeløsning',
      subtitle: 'Fast månedlig ydelse',
      description: 'Den mest omkostningseffektive løsning til kontinuerlig mødebooking',
      features: [
        'Dedikeret mødebooker',
        'Garanteret antal salgsmøder',
        'Billigste pris per møde',
        'Aflyste møder erstattes gratis',
        'Løbende optimering af strategi',
        'Månedlig rapportering',
        'Fleksibel opsigelse',
        'Prioriteret support'
      ],
      highlight: true,
      icon: Target
    },
    {
      title: 'No Cure No Pay',
      subtitle: 'Betal kun for resultater',
      description: 'Den risikofrie løsning - du betaler kun for gennemførte, kvalificerede møder',
      features: [
        'Ingen forudgående investering',
        'Fast pris pr. gennemført møde',
        'Du definerer kvalitetskriterierne',
        'Kun betaling for møder der lever op til kravene',
        'Ingen betaling ved aflyste møder',
        'Skalerbar efter behov',
        'Perfekt til test af nye markeder',
        'Resultatorienteret samarbejde'
      ],
      highlight: false,
      icon: Award
    }
  ];

  const faqItems = [
    {
      question: 'Hvad koster professionel mødebooking hos Nexus Marketing?',
      answer: 'Prisen på mødebooking afhænger af flere faktorer: din branche, målgruppens kompleksitet, geografisk område og den valgte betalingsmodel. Vi tilbyder både No Cure No Pay (betaling pr. gennemført møde) og faste pakkeløsninger. Med No Cure No Pay betaler du typisk mellem 800-2.000 kr. pr. kvalificeret møde, mens pakkeløsninger starter fra ca. 15.000 kr./md. Kontakt os for et skræddersyet tilbud på mødebooking baseret på dine specifikke behov.'
    },
    {
      question: 'Hvordan fungerer No Cure No Pay mødebooking?',
      answer: 'Med vores No Cure No Pay model betaler du udelukkende for møder, der lever op til jeres på forhånd aftalte kvalitetskrav. Vi definerer sammen, hvad der udgør et vellykket møde - f.eks. mødevarighed, deltagerprofil, beslutningskompetence eller konkrete forretningsmuligheder. Aflyste, ikke-fremmødte eller useriøse møder faktureres ikke. Du har fuld kontrol og nul risiko.'
    },
    {
      question: 'Hvad er forskellen på No Cure No Pay og pakkeløsning?',
      answer: 'No Cure No Pay er ideelt hvis du vil teste mødebooking uden store investeringer, har sæsonbetonet behov, eller ønsker maksimal fleksibilitet. Du betaler kun for resultater. Pakkeløsningen giver den laveste pris pr. møde og er bedst til virksomheder med kontinuerligt behov for mødebooking. Her får du dedikerede ressourcer, garanteret antal møder og prioriteret support.'
    },
    {
      question: 'Hvilke brancher har I erfaring med mødebooking til?',
      answer: 'Vi har særlig stor erfaring med B2B-mødebooking inden for: SaaS og tech-løsninger, IT-konsulentvirksomheder, forretningsudvikling, markedsføring & kommunikation, digitale bureauer, økonomi & revision, HR & rekruttering, transport & logistik, energiløsninger (LED, strøm, solenergi), facility services (kaffe, måtter), pensionsrådgivning og inkasso. Vores mødebookere er trænet i at kommunikere komplekse budskaber.'
    },
    {
      question: 'Hvor hurtigt kan I levere de første møder?',
      answer: 'Efter en grundig gennemgang af jeres virksomhed, produkter og målgruppe kan vi typisk starte aktiv mødebooking inden for 1-2 uger. De første kvalificerede møder leveres normalt inden for uge 2-3. Vi prioriterer kvalitet i forarbejdet (strategi, scripts, lead-kvalificering), da det sikrer markant bedre møderesultater på lang sigt.'
    },
    {
      question: 'Hvordan sikrer I høj kvalitet i de bookede møder?',
      answer: 'Vi sikrer mødekvalitet gennem: 1) Grundig research af din målgruppe og udvikling af skræddersyede scripts, 2) Træning af mødebookere i dine værdier og løsninger, 3) Præcis kvalificering af hvert lead inden booking (BANT-framework), 4) Mødebekræftelse via email og SMS før mødet, 5) Løbende tracking og optimering baseret på feedback fra jeres sælgere.'
    },
    {
      question: 'Kan I booke møder i hele Danmark?',
      answer: 'Ja, vi booker professionelle salgsmøder i hele Danmark - fra København til Aalborg, Aarhus til Esbjerg og alle steder imellem. Vi håndterer fysiske møder på kundens lokation, møder hos jer, samt videomøder og telefonmøder. Videomøder giver endnu større geografisk fleksibilitet og er ofte foretrukket af beslutningstagere.'
    },
    {
      question: 'Hvad er inkluderet i prisen på mødebooking?',
      answer: 'Uanset model får du: Erfarne mødebookere med gennemsnitligt 5+ års B2B-erfaring, skræddersyede salgsscripts optimeret til din målgruppe, CRM-integration og detaljeret rapportering, kvalificering af leads og beslutningstagere, mødebekræftelse og reminder før hvert møde, løbende optimering baseret på data, samt dedikeret account manager. Ingen skjulte omkostninger.'
    },
    {
      question: 'Leverer I også emnelister til mødebooking?',
      answer: 'Ja, vi leverer gerne GDPR-compliant emnelister uden beregning som en del af vores forarbejde. Vi research og kvalitetssikrer alle leads inden opstart af kampagnen, så I kan være sikre på at vi kun kontakter relevante beslutningstagere. Vi kan også arbejde med jeres eksisterende kundelister eller CRM-data.'
    },
    {
      question: 'Hvorfor vælge Nexus Marketing frem for andre mødebooking-firmaer?',
      answer: 'Vi adskiller os ved: 1) Ægte No Cure No Pay uden skjulte gebyrer, 2) Gennemsnitligt 15-20 kvalificerede møder per 100 opkald (over branchegennemsnit), 3) Erfarne mødebookere med minimum 5+ års B2B-erfaring, 4) Fuld transparens med detaljeret rapportering efter hver kampagne, 5) Fleksible modeller (No Cure No Pay eller pakke) tilpasset dine behov. Vi fokuserer på kvalitet frem for kvantitet - altid.'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Billigste Pris per Møde',
      description: 'Vores pakkeløsning giver den mest omkostningseffektive løsning med garanteret antal møder og laveste pris per møde.'
    },
    {
      icon: Euro,
      title: 'Fast Månedlig Pris',
      description: 'Forudsigelig økonomi med fast månedlig ydelse. Ingen overraskelser - du ved præcis hvad du får og hvad det koster.'
    },
    {
      icon: TrendingUp,
      title: 'Garanteret Antal Møder',
      description: 'Med pakkeløsning får du garanteret antal kvalificerede salgsmøder hver måned. Aflyste møder erstattes gratis.'
    },
    {
      icon: Clock,
      title: 'Dedikeret Mødebooker',
      description: 'Din egen dedikerede mødebooker der lærer din virksomhed at kende og optimerer løbende for bedre resultater.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Tilbud på Mødebooking | Mødebooking Priser 2026 | Nexus Marketing"
        description="Få tilbud på professionel mødebooking. No Cure No Pay eller pakkeløsning. 15-20 møder per 100 opkald. Erfarne mødebooking firma i hele Danmark. Se priser og få uforpligtende tilbud."
        canonical="/priser"
        keywords="tilbud på mødebooking, mødebooking priser, mødebooking firma, pris på mødebooking, telemarketing priser, B2B mødebooking, no cure no pay, professionel mødebooking"
      />

      <HeroSection
        title="Tilbud på Professionel Mødebooking - Pakkeløsning"
        subtitle="Vælg vores omkostningseffektive pakkeløsning eller No Cure No Pay (betal kun for møder). Transparente priser, erfarne mødebookere, dokumenterede resultater."
        ctaText="Få uforpligtende tilbud"
        ctaLink="#contact-form"
        secondaryCtaText="Ring 57 77 26 11"
        secondaryCtaLink="tel:+4557772611"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hvorfor vælge Nexus Marketing som dit mødebooking-firma?</h2>
              <p className="text-xl text-gray-600">Professionel mødebooking med fleksible betalingsmodeller og dokumenterede resultater</p>
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

      {/* Pricing Models */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Vælg din betalingsmodel for mødebooking</h2>
              <p className="text-xl text-gray-600">Fleksible løsninger tilpasset din virksomheds behov og budget</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {pricingModels.map((model, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-xl p-8 ${
                    model.highlight ? 'border-4 border-blue-600 relative transform scale-105' : 'border border-gray-200'
                  }`}
                >
                  {model.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Mest populære
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <model.icon className="text-blue-600 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{model.title}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-2">{model.subtitle}</p>
                    <p className="text-gray-600">{model.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="#contact-form"
                    className={`w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors block ${
                      model.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Få tilbud på denne model
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Usikker på hvilken model der passer bedst?</strong> Kontakt os for en uforpligtende rådgivning.
                Vi hjælper dig med at vælge den mest omkostningseffektive løsning baseret på din branche, målgruppe og salgsbehov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Mødebooking priser og pakker 2026</h2>

            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvad koster professionel mødebooking?</h3>
                  <p className="text-gray-600 mb-4">
                    Når virksomheder søger efter tilbud på mødebooking, er prisen naturligvis en vigtig faktor.
                    Hos Nexus Marketing tilbyder vi Danmarks mest transparente og fleksible prismodeller for mødebooking.
                    Du kan vælge mellem vores omkostningseffektive pakkeløsning eller No Cure No Pay (betal kun for resultater).
                  </p>
                  <p className="text-gray-600">
                    Pakkeløsninger starter fra ca. 15.000 kr./md og giver den laveste pris pr. møde med garanteret antal møder.
                    Med No Cure No Pay betaler du typisk mellem 800-2.000 kr. pr. kvalificeret møde, afhængig af kompleksitet,
                    målgruppe og branche.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvorfor vælge pakkeløsning?</h3>
                  <p className="text-gray-600 mb-4">
                    Vores pakkeløsning er den mest omkostningseffektive model til kontinuerlig mødebooking. Du får dedikeret mødebooker,
                    garanteret antal møder hver måned, og den laveste pris per møde. Aflyste møder erstattes gratis, så du altid får
                    det antal møder du har betalt for.
                  </p>
                  <p className="text-gray-600">
                    Med fast månedlig pris får du fuld forudsigelighed i dit budget og kan planlægge din salgsindsats langt bedre.
                    Din dedikerede mødebooker lærer din virksomhed at kende og optimerer løbende for bedre resultater måned efter måned.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sammenlign: Internt vs. Outsourcing af mødebooking</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Intern mødebooker (fuldtid)</h4>
                    <p className="text-sm text-gray-700 mb-2"><strong>Månedlig omkostning:</strong> 45.000-55.000 kr.</p>
                    <p className="text-sm text-gray-600 mb-2">Inkluderer: Løn, pension, ferie, sygedage, uddannelse, kontor, software</p>
                    <p className="text-sm text-gray-600">Risiko: Fuld investering uanset resultater</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Nexus Marketing Pakkeløsning</h4>
                    <p className="text-sm text-gray-700 mb-2"><strong>Månedlig omkostning:</strong> Fra 15.000 kr./md</p>
                    <p className="text-sm text-gray-600 mb-2">Inkluderer: Dedikeret mødebooker, garanteret møder, CRM, rapportering</p>
                    <p className="text-sm text-green-600 font-semibold">Fordel: Laveste pris per møde + Gratis erstatning af aflyste møder</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvad påvirker prisen på mødebooking?</h3>
                  <p className="text-gray-600 mb-3">
                    Prisen for professionel mødebooking varierer baseret på:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Målgruppe:</strong> C-level executives er typisk dyrere end middle management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Branche:</strong> Tekniske B2B-løsninger kræver mere research end standardprodukter</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Geografi:</strong> Landsdækkende vs. regionalt fokus</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span><strong>Mødetype:</strong> Fysisk møde, videomøde eller telefonmøde</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Hvad er inkluderet i prisen?</h3>
                  <p className="text-gray-600 mb-3">
                    Uanset om du vælger No Cure No Pay eller pakkeløsning får du:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Erfarne mødebookere med 5+ års B2B-erfaring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Skræddersyede salgsscripts optimeret til din målgruppe</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>GDPR-compliant emnelister uden beregning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Mødebekræftelse og reminder før hvert møde</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Detaljeret rapportering og løbende optimering</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ofte stillede spørgsmål om mødebooking-priser</h2>
              <p className="text-xl text-gray-600">Find svar på de mest almindelige spørgsmål om vores priser og services</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Har du flere spørgsmål om vores mødebooking-priser?</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Kontakt os for rådgivning
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Klar til at få flere kvalificerede salgsmøder?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Uanset om du vælger pakkeløsning eller No Cure No Pay, får du Danmarks mest erfarne mødebookere
              til at generere kvalificerede møder for din virksomhed. Få den bedste pris per møde i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Få uforpligtende tilbud
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+4557772611"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
              >
                <Phone className="mr-2" size={20} />
                Ring 57 77 26 11
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Få dit personlige tilbud på mødebooking</h2>
              <p className="text-lg text-gray-600">
                Udfyld formularen, så sender vi dig et detaljeret tilbud inden for 24 timer.
                Vælg mellem vores omkostningseffektive pakkeløsning eller No Cure No Pay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <iframe
                data-tally-src="https://tally.so/embed/w4DglO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Få tilbud på mødebooking - Nexus Marketing"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
