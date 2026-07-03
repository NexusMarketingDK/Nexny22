import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import { usePageContent } from '../../i18n/usePageContent';

const content = {
  da: {
    seoTitle: 'Freelance Sælger til Web Bureau | Magnora Marketing – Sælg Webudvikling og Digitale Løsninger',
    seoDesc: 'Bliv freelance sælger for web bureau ydelser hos Magnora Marketing. Sælg webudvikling, SEO og digitale løsninger hjemmefra med fleksible tider og attraktiv provision.',
    heroTitle: 'Freelance Sælger til Web Bureau & Digitale Løsninger',
    heroSubtitle: 'Sælg webudvikling, SEO og digitale løsninger til danske virksomheder – hjemmefra, med fleksible tider og stærk provision. Magnora Marketing giver dig produkterne, kunderne og støtten.',
    applyCta: 'Søg stillingen',
    allJobs: 'Se alle stillinger',
    aboutTitle: 'Hvad går jobbet ud på?',
    aboutP1: 'Som freelance sælger for web bureau ydelser hos Magnora Marketing kontakter du danske virksomheder og præsenterer vores webudvikling, landingssider, SEO og digitale løsninger. Du arbejder selvstændigt hjemmefra – Magnora Marketing sørger for scripts, materialer og løbende support.',
    aboutP2: 'Du behøver ikke teknisk baggrund – du skal forstå forretning og have lyst til at hjælpe virksomheder med at vokse online. Vi oplærer dig i produkterne og salgsprocessen.',
    tasks: [
      'Opsøgende salg til SMV\'er og iværksættere',
      'Booking af møder og præsentationer af webløsninger',
      'Opfølgning på leads og tilbud',
      'Samarbejde med Magnora Marketing\'s web- og salgsteam',
      'Rapportering af aktivitet og resultater',
    ],
    factsTitle: 'Stillingens nøglefakta',
    facts: [
      { label: 'Ansættelsesform', value: 'Freelance / selvstændig' },
      { label: 'Arbejdssted', value: 'Hjemmefra – hele Danmark' },
      { label: 'Arbejdstid', value: 'Fleksibel – du bestemmer selv' },
      { label: 'Løn', value: 'Fast grundhonorar + provision' },
      { label: 'Produkt', value: 'Webudvikling, SEO, digitale løsninger' },
      { label: 'Opstart', value: 'Hurtigst muligt' },
    ],
    sendApplication: 'Send din ansøgning',
    productsTitle: 'Det sælger du – Magnora Marketing\'s digitale ydelser',
    productsSubtitle: 'Du har et stærkt produktkatalog i ryggen. Magnora Marketing leverer moderne webløsninger som danske virksomheder efterspørger.',
    products: [
      { title: 'Hjemmesider & landingssider', desc: 'Moderne, mobilvenlige hjemmesider og konverteringsoptimerede landingssider til SMV\'er og iværksættere.' },
      { title: 'Webshops & e-handel', desc: 'Professionelle webshops med nem administration og integrationer til betaling, lager og fragt.' },
      { title: 'SEO & synlighed', desc: 'Organisk søgemaskineoptimering der bringer relevante kunder til virksomhedens hjemmeside.' },
      { title: 'AI-integration', desc: 'Chatbots, booking-automatisering og AI-funktioner integreret direkte på kundens hjemmeside.' },
      { title: 'Vedligeholdelse & support', desc: 'Løbende opdatering, sikkerhed og support – en fast månedlig ydelse der skaber tilbagevendende omsætning.' },
      { title: 'Skræddersyede løsninger', desc: 'Særlige integrationer, API-forbindelser og kundespecifikke digitale projekter med fast pris.' },
    ],
    getTitle: 'Hvad du får hos Magnora Marketing',
    getSubtitle: 'Vi giver dig de bedste forudsætninger for at lykkes – så du kan fokusere på at sælge.',
    get: [
      { title: 'Arbejd hjemmefra', desc: 'Fuld frihed til at arbejde fra dit eget hjem. Ingen transport, ingen faste mødetider – du styrer din egen dag.' },
      { title: 'Attraktiv provision', desc: 'Fast grundhonorar plus provision på alle salg. Jo mere du sælger, jo mere tjener du – ingen loft.' },
      { title: 'Oplæring og support', desc: 'Vi oplærer dig i produkterne og salgsteknikken. Du har altid adgang til support fra Magnora Marketing\'s salgsteam.' },
    ],
    lookForTitle: 'Det kigger vi efter',
    lookFor: [
      'Erfaring med salg eller kundekontakt – B2B er en fordel',
      'Gode kommunikationsevner på dansk',
      'Selvdisciplin og evne til at arbejde selvstændigt',
      'Grundlæggende forståelse for digitale produkter',
      'Resultatorienteret og målbevidst indstilling',
      'Teknisk baggrund er ikke et krav',
    ],
    howTitle: 'Sådan søger du',
    howP1: 'Send os en kort besked om hvem du er, hvad du har prøvet, og hvorfor du vil sælge digitale løsninger. Vi vender tilbage inden for 2 hverdage.',
    howP2: 'Ingen formel ansøgning nødvendig – bare skriv til os. Vi vurderer alle henvendelser individuelt.',
    contactNow: 'Kontakt Magnora Marketing nu',
    faqs: [
      { question: 'Skal jeg kende til webudvikling for at sælge det?', answer: 'Nej – du behøver ingen teknisk baggrund. Magnora Marketing oplærer dig i produkterne og salgsteknikken, så du kan præsentere løsningerne professionelt.' },
      { question: 'Hvem er mine kunder?', answer: 'Du kontakter primært SMV\'er og iværksættere i Danmark der har brug for en professionel online tilstedeværelse.' },
      { question: 'Hvad sker der, når jeg har lavet et salg?', answer: 'Du videregiver kundens information til Magnora Marketing\'s web-team, som overtager og leverer løsningen. Du tjener provision på salget.' },
      { question: 'Er der faste kvoter jeg skal nå?', answer: 'Vi arbejder med mål og ambitioner, men tilpasser forventningerne individuelt. Du sætter selv barren.' },
      { question: 'Hvad er USP\'en for Magnora Marketing\'s webprodukter?', answer: 'Magnora Marketing bygger moderne, hurtige og konverteringsoptimerede løsninger til konkurrencedygtige priser – med dansk support og garanti.' },
      { question: 'Hvem konkurrerer vi med?', answer: 'Kunder sammenligner typisk med Wix, WordPress-bureauer og freelance udviklere. Magnora Marketing\'s fordel er skræddersyet kvalitet med professionel support.' },
      { question: 'Hvad er typiske indsigelser fra kunder?', answer: 'Vi oplærer dig i at håndtere indsigelser som pris, timing og eksisterende løsning. Du får scripts og svar til alle standardindsigelser.' },
      { question: 'Kan jeg sælge til kunder der allerede har en hjemmeside?', answer: 'Ja – mange kunder er klar til et redesign eller opgradering. Vi hjælper dig med at identificere og kvalificere disse muligheder.' },
      { question: 'Hvad er en god kundereferens?', answer: 'Vi giver dig adgang til portfolio og cases som du kan bruge til at overbevise skeptiske kunder om kvaliteten.' },
      { question: 'Kan jeg se produktet inden jeg sælger det?', answer: 'Ja – du får en grundig gennemgang og demo af alle Magnora Marketing\'s webprodukter inden du begynder at sælge dem.' },
      { question: 'Er der mersalgsmuligheder?', answer: 'Ja – kunder der køber en hjemmeside kan sælges vedligeholdelse, SEO, AI-integration og andre løbende services.' },
      { question: 'Hvad er den gennemsnitlige ordreværdi?', answer: 'Det varierer per produkt og kunde. En simpel hjemmeside kan starte fra 10.000 kr., mens større projekter kan være 50.000+ kr.' },
      { question: 'Kan jeg specialisere mig i én kundetype?', answer: 'Ja – mange sælgere vælger at fokusere på en specifik branche eller virksomhedsstørrelse for at blive eksperter.' },
      { question: 'Hvad er provision per salg?', answer: 'Provisionen aftales individuelt og afhænger af produkttype og salgspris. Du modtager en klar provisionsstruktur ved opstart.' },
    ],
    ctaTitle: 'Klar til at sælge digitale løsninger?',
    ctaSubtitle: 'Tag det første skridt og kontakt Magnora Marketing i dag. Vi ser frem til at høre fra dig.',
    sendApplicationShort: 'Send ansøgning',
    seeAllOpen: 'Se alle ledige stillinger',
  },
  en: {
    seoTitle: 'Freelance Sales Rep for Web Agency | Magnora Marketing – Sell Web Development and Digital Solutions',
    seoDesc: 'Become a freelance sales rep for web agency services at Magnora Marketing. Sell web development, SEO and digital solutions from home with flexible hours and attractive commission.',
    heroTitle: 'Freelance Sales Rep for Web Agency & Digital Solutions',
    heroSubtitle: 'Sell web development, SEO and digital solutions to Danish companies – from home, with flexible hours and strong commission. Magnora Marketing gives you the products, the customers and the support.',
    applyCta: 'Apply for the position',
    allJobs: 'See all positions',
    aboutTitle: 'What does the job involve?',
    aboutP1: 'As a freelance sales rep for web agency services at Magnora Marketing, you contact Danish companies and present our web development, landing pages, SEO and digital solutions. You work independently from home – Magnora Marketing provides scripts, materials and ongoing support.',
    aboutP2: 'You don\'t need a technical background – you need to understand business and want to help companies grow online. We train you in the products and the sales process.',
    tasks: [
      'Outbound sales to SMEs and entrepreneurs',
      'Booking meetings and presentations of web solutions',
      'Following up on leads and quotes',
      'Collaborating with Magnora Marketing\'s web and sales team',
      'Reporting activity and results',
    ],
    factsTitle: 'Key facts about the position',
    facts: [
      { label: 'Employment type', value: 'Freelance / self-employed' },
      { label: 'Location', value: 'From home – all of Denmark' },
      { label: 'Working hours', value: 'Flexible – you decide' },
      { label: 'Pay', value: 'Fixed base fee + commission' },
      { label: 'Product', value: 'Web development, SEO, digital solutions' },
      { label: 'Start', value: 'As soon as possible' },
    ],
    sendApplication: 'Send your application',
    productsTitle: 'What you sell – Magnora Marketing\'s digital services',
    productsSubtitle: 'You have a strong product catalogue behind you. Magnora Marketing delivers modern web solutions that Danish companies demand.',
    products: [
      { title: 'Websites & landing pages', desc: 'Modern, mobile-friendly websites and conversion-optimised landing pages for SMEs and entrepreneurs.' },
      { title: 'Webshops & e-commerce', desc: 'Professional webshops with easy administration and integrations for payment, inventory and shipping.' },
      { title: 'SEO & visibility', desc: 'Organic search engine optimisation that brings relevant customers to the company\'s website.' },
      { title: 'AI integration', desc: 'Chatbots, booking automation and AI features integrated directly on the customer\'s website.' },
      { title: 'Maintenance & support', desc: 'Ongoing updates, security and support – a fixed monthly service that creates recurring revenue.' },
      { title: 'Tailored solutions', desc: 'Special integrations, API connections and customer-specific digital projects with a fixed price.' },
    ],
    getTitle: 'What you get at Magnora Marketing',
    getSubtitle: 'We give you the best conditions to succeed – so you can focus on selling.',
    get: [
      { title: 'Work from home', desc: 'Full freedom to work from your own home. No commuting, no fixed meeting times – you control your own day.' },
      { title: 'Attractive commission', desc: 'Fixed base fee plus commission on all sales. The more you sell, the more you earn – no ceiling.' },
      { title: 'Training and support', desc: 'We train you in the products and the sales technique. You always have access to support from Magnora Marketing\'s sales team.' },
    ],
    lookForTitle: 'What we look for',
    lookFor: [
      'Experience with sales or customer contact – B2B is an advantage',
      'Good communication skills',
      'Self-discipline and the ability to work independently',
      'A basic understanding of digital products',
      'A results-oriented and goal-driven mindset',
      'A technical background is not a requirement',
    ],
    howTitle: 'How to apply',
    howP1: 'Send us a short message about who you are, what you have tried, and why you want to sell digital solutions. We get back to you within 2 business days.',
    howP2: 'No formal application needed – just write to us. We assess all enquiries individually.',
    contactNow: 'Contact Magnora Marketing now',
    faqs: [
      { question: 'Do I need to know web development to sell it?', answer: 'No – you need no technical background. Magnora Marketing trains you in the products and the sales technique so you can present the solutions professionally.' },
      { question: 'Who are my customers?', answer: 'You primarily contact SMEs and entrepreneurs in Denmark who need a professional online presence.' },
      { question: 'What happens when I make a sale?', answer: 'You pass the customer\'s information to Magnora Marketing\'s web team, which takes over and delivers the solution. You earn commission on the sale.' },
      { question: 'Are there fixed quotas I have to reach?', answer: 'We work with goals and ambitions, but adjust expectations individually. You set the bar yourself.' },
      { question: 'What is the USP of Magnora Marketing\'s web products?', answer: 'Magnora Marketing builds modern, fast and conversion-optimised solutions at competitive prices – with Danish support and a guarantee.' },
      { question: 'Who do we compete with?', answer: 'Customers typically compare with Wix, WordPress agencies and freelance developers. Magnora Marketing\'s advantage is tailored quality with professional support.' },
      { question: 'What are typical objections from customers?', answer: 'We train you to handle objections like price, timing and existing solution. You get scripts and answers to all standard objections.' },
      { question: 'Can I sell to customers who already have a website?', answer: 'Yes – many customers are ready for a redesign or upgrade. We help you identify and qualify these opportunities.' },
      { question: 'What is a good customer reference?', answer: 'We give you access to the portfolio and cases you can use to convince sceptical customers of the quality.' },
      { question: 'Can I see the product before I sell it?', answer: 'Yes – you get a thorough walkthrough and demo of all Magnora Marketing\'s web products before you start selling them.' },
      { question: 'Are there upselling opportunities?', answer: 'Yes – customers who buy a website can be sold maintenance, SEO, AI integration and other ongoing services.' },
      { question: 'What is the average order value?', answer: 'It varies per product and customer. A simple website can start from DKK 10,000, while larger projects can be DKK 50,000+.' },
      { question: 'Can I specialise in one customer type?', answer: 'Yes – many sales reps choose to focus on a specific industry or company size to become experts.' },
      { question: 'What is the commission per sale?', answer: 'The commission is agreed individually and depends on product type and sales price. You receive a clear commission structure at onboarding.' },
    ],
    ctaTitle: 'Ready to sell digital solutions?',
    ctaSubtitle: 'Take the first step and contact Magnora Marketing today. We look forward to hearing from you.',
    sendApplicationShort: 'Send application',
    seeAllOpen: 'See all open positions',
  },
  es: {
    seoTitle: 'Vendedor Freelance para Agencia Web | Magnora Marketing – Vende Desarrollo Web y Soluciones Digitales',
    seoDesc: 'Conviértete en vendedor freelance de servicios de agencia web en Magnora Marketing. Vende desarrollo web, SEO y soluciones digitales desde casa con horarios flexibles y comisión atractiva.',
    heroTitle: 'Vendedor Freelance para Agencia Web y Soluciones Digitales',
    heroSubtitle: 'Vende desarrollo web, SEO y soluciones digitales a empresas danesas – desde casa, con horarios flexibles y buena comisión. Magnora Marketing te da los productos, los clientes y el apoyo.',
    applyCta: 'Solicitar el puesto',
    allJobs: 'Ver todas las vacantes',
    aboutTitle: '¿En qué consiste el trabajo?',
    aboutP1: 'Como vendedor freelance de servicios de agencia web en Magnora Marketing, contactas con empresas danesas y presentas nuestro desarrollo web, páginas de aterrizaje, SEO y soluciones digitales. Trabajas de forma autónoma desde casa – Magnora Marketing se encarga de los guiones, materiales y apoyo continuo.',
    aboutP2: 'No necesitas formación técnica – necesitas entender el negocio y tener ganas de ayudar a las empresas a crecer online. Te formamos en los productos y el proceso de venta.',
    tasks: [
      'Venta proactiva a pymes y emprendedores',
      'Reserva de reuniones y presentaciones de soluciones web',
      'Seguimiento de leads y ofertas',
      'Colaboración con el equipo web y de ventas de Magnora Marketing',
      'Informe de actividad y resultados',
    ],
    factsTitle: 'Datos clave del puesto',
    facts: [
      { label: 'Tipo de contrato', value: 'Freelance / autónomo' },
      { label: 'Lugar de trabajo', value: 'Desde casa – toda Dinamarca' },
      { label: 'Horario', value: 'Flexible – tú decides' },
      { label: 'Retribución', value: 'Base fija + comisión' },
      { label: 'Producto', value: 'Desarrollo web, SEO, soluciones digitales' },
      { label: 'Inicio', value: 'Lo antes posible' },
    ],
    sendApplication: 'Envía tu solicitud',
    productsTitle: 'Lo que vendes – los servicios digitales de Magnora Marketing',
    productsSubtitle: 'Tienes un catálogo de productos sólido a tu espalda. Magnora Marketing ofrece soluciones web modernas que demandan las empresas danesas.',
    products: [
      { title: 'Sitios web y páginas de aterrizaje', desc: 'Sitios web modernos y adaptados a móviles y páginas de aterrizaje optimizadas para la conversión para pymes y emprendedores.' },
      { title: 'Tiendas online y e-commerce', desc: 'Tiendas online profesionales con administración sencilla e integraciones de pago, inventario y envío.' },
      { title: 'SEO y visibilidad', desc: 'Optimización orgánica en buscadores que lleva clientes relevantes al sitio web de la empresa.' },
      { title: 'Integración de IA', desc: 'Chatbots, automatización de reservas y funciones de IA integradas directamente en el sitio web del cliente.' },
      { title: 'Mantenimiento y soporte', desc: 'Actualización, seguridad y soporte continuos – un servicio mensual fijo que crea ingresos recurrentes.' },
      { title: 'Soluciones a medida', desc: 'Integraciones especiales, conexiones API y proyectos digitales específicos del cliente con precio fijo.' },
    ],
    getTitle: 'Lo que obtienes en Magnora Marketing',
    getSubtitle: 'Te damos las mejores condiciones para tener éxito – para que puedas centrarte en vender.',
    get: [
      { title: 'Trabaja desde casa', desc: 'Total libertad para trabajar desde tu propia casa. Sin desplazamientos, sin horarios de reunión fijos – controlas tu propia jornada.' },
      { title: 'Comisión atractiva', desc: 'Base fija más comisión en todas las ventas. Cuanto más vendes, más ganas – sin límite.' },
      { title: 'Formación y soporte', desc: 'Te formamos en los productos y la técnica de venta. Siempre tienes acceso al soporte del equipo de ventas de Magnora Marketing.' },
    ],
    lookForTitle: 'Lo que buscamos',
    lookFor: [
      'Experiencia en ventas o contacto con clientes – el B2B es una ventaja',
      'Buenas habilidades de comunicación',
      'Autodisciplina y capacidad de trabajar de forma autónoma',
      'Comprensión básica de los productos digitales',
      'Una actitud orientada a resultados y con determinación',
      'No se requiere formación técnica',
    ],
    howTitle: 'Cómo solicitarlo',
    howP1: 'Envíanos un mensaje breve sobre quién eres, qué has hecho y por qué quieres vender soluciones digitales. Te respondemos en un plazo de 2 días laborables.',
    howP2: 'No se necesita solicitud formal – solo escríbenos. Evaluamos todas las consultas individualmente.',
    contactNow: 'Contacta con Magnora Marketing ahora',
    faqs: [
      { question: '¿Necesito saber de desarrollo web para venderlo?', answer: 'No – no necesitas formación técnica. Magnora Marketing te forma en los productos y la técnica de venta para que puedas presentar las soluciones de forma profesional.' },
      { question: '¿Quiénes son mis clientes?', answer: 'Contactas principalmente con pymes y emprendedores en Dinamarca que necesitan una presencia online profesional.' },
      { question: '¿Qué ocurre cuando cierro una venta?', answer: 'Pasas la información del cliente al equipo web de Magnora Marketing, que se hace cargo y entrega la solución. Tú ganas comisión sobre la venta.' },
      { question: '¿Hay cuotas fijas que deba alcanzar?', answer: 'Trabajamos con objetivos y ambiciones, pero ajustamos las expectativas individualmente. Tú marcas el listón.' },
      { question: '¿Cuál es la USP de los productos web de Magnora Marketing?', answer: 'Magnora Marketing construye soluciones modernas, rápidas y optimizadas para la conversión a precios competitivos – con soporte danés y garantía.' },
      { question: '¿Con quién competimos?', answer: 'Los clientes suelen comparar con Wix, agencias de WordPress y desarrolladores freelance. La ventaja de Magnora Marketing es la calidad a medida con soporte profesional.' },
      { question: '¿Cuáles son las objeciones típicas de los clientes?', answer: 'Te formamos para gestionar objeciones como el precio, el momento y la solución existente. Recibes guiones y respuestas para todas las objeciones estándar.' },
      { question: '¿Puedo vender a clientes que ya tienen un sitio web?', answer: 'Sí – muchos clientes están listos para un rediseño o una actualización. Te ayudamos a identificar y cualificar estas oportunidades.' },
      { question: '¿Qué es una buena referencia de cliente?', answer: 'Te damos acceso al portfolio y casos que puedes usar para convencer a clientes escépticos de la calidad.' },
      { question: '¿Puedo ver el producto antes de venderlo?', answer: 'Sí – recibes una explicación detallada y una demo de todos los productos web de Magnora Marketing antes de empezar a venderlos.' },
      { question: '¿Hay oportunidades de venta adicional?', answer: 'Sí – a los clientes que compran un sitio web se les puede vender mantenimiento, SEO, integración de IA y otros servicios continuos.' },
      { question: '¿Cuál es el valor medio del pedido?', answer: 'Varía según el producto y el cliente. Un sitio web sencillo puede empezar desde 10.000 DKK, mientras que los proyectos más grandes pueden ser de 50.000+ DKK.' },
      { question: '¿Puedo especializarme en un tipo de cliente?', answer: 'Sí – muchos vendedores eligen centrarse en un sector o tamaño de empresa específico para convertirse en expertos.' },
      { question: '¿Cuál es la comisión por venta?', answer: 'La comisión se acuerda individualmente y depende del tipo de producto y del precio de venta. Recibes una estructura de comisión clara al incorporarte.' },
    ],
    ctaTitle: '¿Listo para vender soluciones digitales?',
    ctaSubtitle: 'Da el primer paso y contacta con Magnora Marketing hoy. Estamos deseando saber de ti.',
    sendApplicationShort: 'Enviar solicitud',
    seeAllOpen: 'Ver todas las vacantes disponibles',
  },
};

export default function WebBureauPage() {
  const c = usePageContent(content);
  const productIcons = [
    <Globe size={32} className="text-blue-600" />,
    <Laptop size={32} className="text-blue-600" />,
    <Users size={32} className="text-blue-600" />,
    <ArrowRight size={32} className="text-blue-600" />,
    <Clock size={32} className="text-blue-600" />,
    <PiggyBank size={32} className="text-blue-600" />,
  ];
  const getIcons = [
    <Home size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
  ];
  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDesc}
        canonical="/jobs/webudvikling-salg"
        keywords="freelance sælger web bureau, sælg webudvikling, digitalt bureau sælger, freelance digital salg, Magnora Marketing web bureau stilling"
      />

      <HeroSection
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        ctaText={c.applyCta}
        ctaLink="/kontakt"
        secondaryCtaText={c.allJobs}
        secondaryCtaLink="/freelance-telemarketing"
        backgroundImage="https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.aboutTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{c.aboutP1}</p>
              <p className="text-lg text-gray-600 mb-8">{c.aboutP2}</p>
              <ul className="space-y-3">
                {c.tasks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">{c.factsTitle}</h3>
              <div className="space-y-4">
                {c.facts.map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/kontakt" className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {c.sendApplication} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.productsTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.productsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.products.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="mb-4">{productIcons[i]}</div>
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
            <h2 className="text-3xl font-bold mb-4">{c.getTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{c.getSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.get.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{getIcons[i]}</div>
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
              <h2 className="text-2xl font-bold mb-6">{c.lookForTitle}</h2>
              <ul className="space-y-3">
                {c.lookFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">{c.howTitle}</h2>
              <p className="text-gray-600 mb-6">{c.howP1}</p>
              <p className="text-gray-600 mb-8">{c.howP2}</p>
              <Link to="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {c.contactNow} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={c.faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{c.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{c.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {c.sendApplicationShort} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/freelance-telemarketing" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {c.seeAllOpen}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
