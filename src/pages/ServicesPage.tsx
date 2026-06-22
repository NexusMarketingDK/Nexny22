import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Users, Target, BarChart3, CheckCircle, ArrowRight, MessageSquare, Building, Euro, Award, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'Telemarketing',
      description: 'Professionel B2B telemarketing der genererer kvalificerede leads og øger jeres salg.',
      features: [
        'Målrettet leadgenerering',
        'Opsøgende salg',
        'Kundeservice og support',
        'Markedsundersøgelser'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Mødebooking',
      description: 'Effektiv mødebooking der sikrer jeres salgsteam møder med de rigtige beslutningstagere.',
      features: [
        'Kvalificerede salgsmøder',
        'Screening af leads',
        'Opfølgning og bekræftelse',
        'Kalenderkoordinering'
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Leadgenerering',
      description: 'Målrettet leadgenerering der skaber værdi og vækst for jeres virksomhed.',
      features: [
        'Lead scoring og kvalificering',
        'Database opbygning',
        'Kampagnestyring',
        'Performance tracking'
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: 'Kundeservice',
      description: 'Professionel kundeservice der styrker jeres kunderelationer og loyalitet.',
      features: [
        'Support og rådgivning',
        'Ordrehåndtering',
        'Kundefeedback',
        'Tilfredshedsundersøgelser'
      ]
    }
  ];

  const industries = [
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'IT & Software',
      description: 'Specialiseret erfaring med salg af IT-løsninger og software til virksomheder.',
      successStory: 'Hjulpet 50+ IT-virksomheder med at øge deres salg med gennemsnitligt 35%',
      expertise: [
        'SaaS og cloud-løsninger',
        'Enterprise software',
        'IT-sikkerhed og compliance',
        'Digital transformation'
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Konsulent & Rådgivning',
      description: 'Ekspertise i at booke møder for konsulenter og rådgivningsvirksomheder.',
      successStory: 'Over 200 succesfulde kampagner for konsulentvirksomheder',
      expertise: [
        'Management consulting',
        'Finansiel rådgivning',
        'HR og rekruttering',
        'Juridiske services'
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Industri & Produktion',
      description: 'Erfaring med B2B salg inden for industri- og produktionssektoren.',
      successStory: 'Dokumenteret succes med komplekse B2B salgsprocesser',
      expertise: [
        'Industrielt udstyr',
        'Produktionsoptimering',
        'Supply chain løsninger',
        'Automatisering og robotik'
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Energi & Miljø',
      description: 'Fokus på bæredygtige løsninger og energioptimering til erhverv.',
      successStory: 'Førende inden for grøn energi mødebooking med 40% konverteringsrate',
      expertise: [
        'Vedvarende energi',
        'Energieffektivisering',
        'Miljøteknologi',
        'Bæredygtige løsninger'
      ]
    }
  ];

  const benefits = [
    'Øget salg og omsætning',
    'Flere kvalificerede leads',
    'Bedre udnyttelse af salgsteamet',
    'Målbar ROI',
    'Professionel kundeservice',
    'Detaljeret rapportering'
  ];

  const whyChooseUs = [
    {
      icon: <Euro className="w-8 h-8 text-green-600" />,
      title: 'Konkurrencedygtige Priser på Mødebooking',
      description: 'Transparente priser fra 15.000 kr./md eller pay-per-meeting model uden risiko'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Over 20 Års Erfaring',
      description: 'Dokumenteret track record med succesfulde B2B telemarketing kampagner'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'No Cure No Pay Garanti',
      description: 'Betal kun for konkrete resultater med vores risikofrie pay-per-meeting model'
    }
  ];

  return (
    <>
      <SEO 
        title="Professionelle B2B Services | Telemarketing & Mødebooking | Nexus Marketing"
        description="Boost jeres salg med professionel telemarketing og mødebooking fra Nexus Marketing. Konkurrencedygtige priser, no cure no pay model og over 20 års erfaring. Se vores services her."
        canonical="/ydelser"
        keywords="B2B telemarketing, mødebooking priser, professionel mødebooking, telemarketing services, leadgenerering, B2B salg, Nexus Marketing"
      />

      <HeroSection
        title="Professionelle B2B Services"
        subtitle="Vi hjælper B2B virksomheder med at øge salget gennem målrettet telemarketing, mødebooking og leadgenerering."
        ctaText="Få et uforpligtende tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vores Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder professionelle B2B services der hjælper virksomheder med at vækste gennem 
              målrettede salgsaktiviteter og leadgenerering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Optimized Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vi Hjælper Virksomheder med Professionel Mødebooking og Telesalg</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Hvad Koster Professionel Mødebooking?</h3>
                  <p className="text-gray-600 mb-4">
                    Prisen på mødebooking varierer afhængigt af jeres specifikke behov, målgruppe og branche. 
                    Hos Nexus Marketing tilbyder vi transparente og konkurrencedygtige priser på professionel 
                    mødebooking, der starter fra 15.000 kr. om måneden for vores Starter Pakke.
                  </p>
                  <p className="text-gray-600">
                    Vores mest populære løsning er vores pay-per-meeting model, hvor I kun betaler for 
                    succesfuldt bookede møder. Dette eliminerer al risiko og giver jer fuld kontrol over 
                    jeres investering i mødebooking og telesalg.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Hvorfor Bruge Nexus Marketing som Salgspartner?</h3>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing er jeres ideelle salgspartner, fordi vi kombinerer over 20 års erfaring 
                    med moderne teknologi og en kundefokuseret tilgang. Vi forstår kompleksiteten i B2B salg 
                    og ved, hvordan man skaber værdi for både jer og jeres potentielle kunder.
                  </p>
                  <p className="text-gray-600">
                    Som jeres salgspartner tilbyder vi ikke bare mødebooking og telesalg - vi bliver en 
                    forlængelse af jeres salgsteam med dyb forståelse for jeres produkter, målgruppe og 
                    forretningsstrategi.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Fordele ved at Vælge Nexus Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Når I vælger Nexus Marketing som jeres partner for mødebooking og telesalg, får I adgang til 
                  et team af erfarne specialister, der har hjulpet hundredvis af B2B virksomheder med at øge 
                  deres salg og vækste deres forretning. Vi tilbyder skræddersyede løsninger, der passer til 
                  jeres specifikke behov og budget.
                </p>
                <p className="text-gray-600">
                  Vores no cure no pay model betyder, at I kun betaler for konkrete resultater. Dette skaber 
                  en naturlig incitamentsstruktur, hvor vores succes er direkte forbundet med jeres succes. 
                  Vi investerer i jeres langsigtede vækst og arbejder som en strategisk partner snarere end 
                  blot en leverandør.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professionel Mødebooking med Målbare Resultater</h3>
                  <p className="text-gray-600 mb-4">
                    Vores mødebooking service går langt ud over blot at ringe til potentielle kunder. Vi 
                    udfører grundig research, kvalificerer leads og sikrer, at hvert booket møde er med 
                    en relevant beslutningstagere, der har både interesse og købekraft.
                  </p>
                  <p className="text-gray-600">
                    Gennem vores strukturerede tilgang til mødebooking opnår vi typisk højere konverteringsrater 
                    end traditionelle metoder. Vi fokuserer på kvalitet frem for kvantitet og sikrer, at 
                    jeres salgsteam kun bruger tid på møder med reel potentiale.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Telesalg og Leadgenerering der Skaber Værdi</h3>
                  <p className="text-gray-600 mb-4">
                    Vores telesalg og leadgenerering services er designet til at skabe maksimal værdi for 
                    jeres virksomhed. Vi bruger avancerede CRM-systemer, datadrevne tilgange og kontinuerlig 
                    optimering for at sikre de bedst mulige resultater.
                  </p>
                  <p className="text-gray-600">
                    Som jeres salgspartner leverer vi ikke bare leads - vi leverer kvalificerede muligheder 
                    med detaljeret information om kundens behov, budget og beslutningsproces. Dette gør det 
                    nemmere for jeres salgsteam at konvertere leads til kunder.
                  </p>
                </div>
              </div>

              <div className="text-center bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Klar til at Øge Jeres Salg?</h3>
                <p className="text-gray-600 mb-6">
                  Hvis I er klar til at opleve fordelene ved professionel mødebooking og telesalg, så kontakt 
                  Nexus Marketing i dag. Vi tilbyder en uforpligtende konsultation, hvor vi analyserer jeres 
                  behov og udvikler en skræddersyet løsning, der passer til jeres virksomhed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/priser" className="btn btn-primary inline-flex items-center">
                    Se vores priser <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/samarbejdspartner" className="btn btn-secondary inline-flex items-center">
                    Bliv samarbejdspartner <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvorfor Vælge Nexus Marketing som Salgspartner?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi adskiller os fra konkurrenterne gennem vores fokus på resultater, transparente priser og langsigtede partnerskaber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fordele ved at vælge os</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to="/kontakt" 
                  className="btn btn-primary inline-flex items-center"
                >
                  Kontakt os <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional B2B services" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced with SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Brancher vi arbejder med</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med over 20 års erfaring har Nexus Marketing specialiseret sig i B2B telemarketing og mødebooking 
              på tværs af forskellige brancher. Vores branchespecifikke ekspertise sikrer optimale resultater.
            </p>
          </div>

          {/* Enhanced Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                {/* Success Story */}
                <div className="bg-blue-50 rounded-md p-3 mb-4">
                  <p className="text-sm text-blue-800 font-medium">{industry.successStory}</p>
                </div>
                
                {/* Expertise Areas */}
                <div className="text-left">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700">Specialområder:</h4>
                  <ul className="space-y-1">
                    {industry.expertise.map((area, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center">
                        <CheckCircle className="text-green-500 mr-1" size={12} />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Optimized Content for Industries */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Vælge Nexus Marketing til Jeres Branche?</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-blue-600">Branchespecifik Ekspertise</h4>
                  <p className="text-gray-600 mb-4">
                    Nexus Marketing forstår, at hver branche har sine unikke udfordringer, målgrupper og 
                    salgscyklusser. Vores erfarne team har arbejdet med virksomheder på tværs af mange 
                    forskellige B2B sektorer og har udviklet specialiseret viden om, hvad der virker 
                    inden for hver branche.
                  </p>
                  <p className="text-gray-600">
                    Vi tilpasser vores tilgang, scripts og kvalificeringskriterier til jeres specifikke 
                    branche for at sikre maksimal relevans og effektivitet i vores mødebooking og 
                    telemarketing aktiviteter.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-green-600">Dokumenterede Resultater</h4>
                  <p className="text-gray-600 mb-4">
                    Vores track record taler for sig selv. Vi har hjulpet over 200 B2B virksomheder med 
                    at øge deres salg gennem professionel mødebooking og telemarketing. Vores kunder 
                    oplever typisk en stigning i kvalificerede leads på 35-50% inden for de første 
                    3 måneder af samarbejdet.
                  </p>
                  <p className="text-gray-600">
                    Uanset om I opererer inden for IT, konsulentydelser, industri eller energi, har vi 
                    bevist vores evne til at levere målbare resultater og skabe værdi for vores partnere.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600">Succesfulde kampagner</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                <p className="text-gray-600">Gennemsnitlig stigning i leads</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                <p className="text-gray-600">Års erfaring i B2B salg</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Skræddersyet Tilgang til Jeres Branche</h3>
              <p className="text-gray-600 mb-6 text-center">
                Hos Nexus Marketing starter vi altid med en grundig analyse af jeres branche, konkurrenter 
                og målgruppe. Dette sikrer, at vores mødebooking og telemarketing aktiviteter er optimeret 
                til netop jeres marked og giver de bedst mulige resultater.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Vores proces inkluderer:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Branchespecifik markedsanalyse</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Målgruppeidentifikation og segmentering</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Udvikling af branchespecifikke scripts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Kontinuerlig optimering baseret på resultater</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Jeres fordele:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Højere konverteringsrater</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Bedre kvalificerede leads</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Kortere salgscyklusser</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Øget ROI på jeres markedsføringsinvestering</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-6">
                  Uanset hvilken branche I opererer i, har Nexus Marketing ekspertisen og erfaringen til 
                  at hjælpe jer med at nå jeres salgsmål gennem professionel mødebooking og telemarketing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/samarbejdspartner" className="btn btn-primary inline-flex items-center">
                    Bliv samarbejdspartner <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/priser" className="btn btn-secondary inline-flex items-center">
                    Se vores priser <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at øge jeres salg?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os i dag for en uforpligtende snak om, hvordan vi kan hjælpe jeres virksomhed 
            med at nå jeres salgsmål.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/priser" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Se vores priser
            </Link>
            <Link 
              to="/kontakt" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Få et uforpligtende tilbud
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;