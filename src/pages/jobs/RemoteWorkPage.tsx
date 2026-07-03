import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, PiggyBank, Home, Laptop, Globe, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import FAQSection from '../../components/FAQSection';
import { usePageContent } from '../../i18n/usePageContent';

const productLinks = [
  '/jobs/webudvikling-salg',
  '/jobs/led-belysning',
  '/jobs/solenergi',
  '/jobs/energi-salg',
  '/jobs/kaffe-service',
  '/jobs/matte-service',
  '/jobs/pensionsordning',
  '/jobs/inkasso',
  '/freelance-telemarketing',
];

const content = {
  da: {
    seoTitle: 'Freelance Remote Salg – Arbejd Hjemmefra | Magnora Marketing',
    seoDesc: 'Bliv freelance sælger og arbejd 100% remote hos Magnora Marketing. Vælg dit eget produkt, sæt dine egne tider og byg en karriere hjemmefra med stærk provision.',
    heroTitle: 'Freelance Sælger – Arbejd 100% Remote',
    heroSubtitle: 'Magnora Marketing tilbyder freelance salgsstillinger du kan udøve fra hvor som helst i Danmark. Ingen pendling, ingen faste kontortider – du sætter selv rammerne.',
    heroCta: 'Se ledige stillinger',
    contactUs: 'Kontakt os',
    whatTitle: 'Hvad er remote salg hos Magnora Marketing?',
    whatSubtitle: 'Remote salg betyder at du arbejder som freelance sælger for Magnora Marketing – fra dit eget hjem, sommerhus, eller hvor du har lyst. Du vælger selv produkt, arbejdstider og ambitionsniveau.',
    what: [
      { title: 'Fuld fleksibilitet', desc: 'Arbejd hvornår du vil og fra hvor du vil. Ingen mødetider, ingen kontor – bare resultater.' },
      { title: 'Alt foregår digitalt', desc: 'Telefon, e-mail og CRM. Magnora Marketing leverer de digitale værktøjer – du leverer salget.' },
      { title: 'Sælg fra hele Danmark', desc: 'Dine kunder er i hele Danmark. Du er ikke begrænset af geografi – sælg til hele landet fra ét sted.' },
    ],
    productTitle: 'Vælg det produkt du brænder for',
    productSubtitle: 'Magnora Marketing har remote salgsstillinger inden for mange brancher. Find det produkt der passer til din baggrund og interesse.',
    products: [
      'Webudvikling & digitale løsninger',
      'LED-belysning & energieffektivisering',
      'Solenergi & vedvarende energi',
      'Strøm & energioptimering',
      'Kaffeservice til erhverv',
      'Måtte- og rengøringsservice',
      'Pensionsrådgivning',
      'Inkasso & kreditorstyring',
      'B2B telemarketing & mødebooking',
    ],
    getTitle: 'Hvad du får hos Magnora Marketing',
    get: [
      { title: 'Konkurrencedygtig provision', desc: 'Fast grundhonorar plus provision på dine salg. Jo mere du sælger, jo mere tjener du – ingen loft.' },
      { title: 'Stærkt supportnetværk', desc: 'Du er aldrig alene. Magnora Marketing\'s salgsledere er klar til sparring, coaching og support gennem hele forløbet.' },
      { title: 'Dine egne tider', desc: 'Fuld fleksibilitet over din arbejdsdag. Perfekt som fuldtidsjob, biindtægt eller supplement til studie.' },
      { title: 'Digitale arbejdsværktøjer', desc: 'Adgang til CRM, scripts, kampagnematerialer og leads. Du har alt hvad du skal bruge fra dag ét.' },
    ],
    lookForTitle: 'Det kigger vi efter',
    lookFor: [
      'Erfaring med salg, kundekontakt eller telemarketing',
      'Evne til at arbejde selvstændigt og disciplineret',
      'Gode kommunikationsevner på dansk',
      'Resultatorienteret og målbevidst',
      'Adgang til telefon og computer',
      'Motivation og drive – det er det vigtigste',
    ],
    startTitle: 'Sådan kommer du i gang',
    startP1: 'Kig på vores ledige stillinger, find det produkt der passer dig, og send os en kort besked. Ingen formel ansøgning – bare skriv til os.',
    startP2: 'Vi vender tilbage inden for 2 hverdage og sætter et afklaringsmøde op.',
    seeAllJobs: 'Se alle ledige stillinger',
    contactDirect: 'Kontakt Magnora Marketing direkte',
    seoBlock1Title: 'Freelance Remote Salg – Arbejd Hjemmefra som B2B Sælger hos Magnora Marketing',
    seoBlock1P1: 'Remote salg er fremtiden for B2B telemarketing og mødebooking – og hos Magnora Marketing er det hverdagen. Som remote freelance sælger arbejder du 100% hjemmefra med moderne digitale salgsværktøjer, klare processer og stærk støtte fra Magnora Marketing\'s erfarne salgsledere. Du behøver ingen dyr pendling, intet kontor og ingen faste mødetider – bare et stabilt internet, en telefon og drivkraften til at skabe resultater. Magnora Marketing leverer alt det andet: leads, scripts, CRM-adgang og løbende sparring.',
    seoBlock1P2: 'Remote salgsstillinger hos Magnora Marketing dækker et bredt spektrum af brancher og produkter – fra webudvikling og digitale løsninger til solenergi, LED-belysning, kaffeservice, pensionsrådgivning og B2B mødebooking. Du vælger selv det produkt og den branche der matcher din baggrund og interesse, og Magnora Marketing matcher dig med den kampagne der passer bedst til dine kompetencer og ambitioner.',
    seoBullets1: [
      '100% remote – arbejd hvornår og hvorfra du vil',
      'Leads, scripts og CRM leveret fra dag ét',
      'Bredt udvalg af produkter og brancher',
      'Konkurrencedygtig provision uden loft',
    ],
    seoBlock2Title: 'Freelance Hjemmekontor – Kom i Gang med Remote Salg hos Magnora Marketing',
    seoBlock2P1: 'At starte som remote freelance sælger hos Magnora Marketing er enkelt og hurtigt. Du finder et produkt der passer til dig, sender os en besked – ingen formel ansøgning nødvendig – og Magnora Marketing vender tilbage inden for 2 hverdage. Derefter gennemgår du et kort onboarding-forløb med produkttræning og salgsteknik, og er klar til at starte inden for få dage. De fleste sælgere finder deres rytme og leverer solide resultater inden for de første 4-6 uger.',
    seoBlock2P2: 'Kontakt Magnora Marketing på mail@magnoramarketing.dk og hør mere om de aktuelle remote salgsmuligheder. Vi er klar til en uforpligtende snak om hvad Magnora Marketing kan tilbyde dig.',
    faqs: [
      { question: 'Kan jeg arbejde remote som sælger hos Magnora Marketing?', answer: 'Ja – alle Magnora Marketing\'s freelance salgsstillinger kan udføres 100% hjemmefra. Du behøver kun en telefon, computer og stabilt internet.' },
      { question: 'Hvad er provisionssatsen?', answer: 'Provisionen varierer afhængigt af produkt og kampagne. Du får altid en klar aftale om løn og provision inden opstart.' },
      { question: 'Skal jeg selv finde kunder?', answer: 'Nej – Magnora Marketing leverer leads, scripts og kampagnematerialer. Du ringer til de kontakter vi giver dig og arbejder efter vores salgsproces.' },
      { question: 'Hvornår udbetales provision?', answer: 'Provision udbetales månedligt baseret på verificerede salg og resultater.' },
      { question: 'Kan jeg arbejde for Magnora Marketing ved siden af et andet job?', answer: 'Ja – mange af vores freelancere arbejder for Magnora Marketing som biindtægt eller supplement til studier.' },
      { question: 'Har jeg brug for et dedikeret hjemmekontor?', answer: 'Du behøver et stille sted at arbejde fra med stabil internetforbindelse og telefon. Et dedikeret hjemmekontor er en fordel, men ikke et krav.' },
      { question: 'Hvad sker der, hvis mit internet driller?', answer: 'Tekniske udfordringer er en del af hverdagen. Vi hjælper dig med at finde praktiske løsninger og har backup-procedurer.' },
      { question: 'Er der fællesskab, selvom vi arbejder remote?', answer: 'Ja – Magnora Marketing har regelmæssige online møder, workshops og kanaler til erfaringsudveksling for alle freelancere.' },
      { question: 'Kan jeg tale med andre remote sælgere?', answer: 'Ja – vi har et netværk af erfarne remote sælgere som deler tips, erfaringer og motivation.' },
      { question: 'Hvad sker der, hvis jeg er syg?', answer: 'Som freelancer er du ikke dækket af sygedagpenge fra Magnora Marketing. Du bestemmer selv din aktivitet, men tjener kun ved resultater.' },
      { question: 'Kan jeg arbejde om aftenen?', answer: 'Du kan strukturere din dag frit, men salgsopkald bør ske inden for normal dansk kontortid (8-17) for bedst resultat.' },
      { question: 'Er der bonusprogrammer?', answer: 'Ja – vi kører løbende konkurrencer og bonusprogrammer for topperformere i vores freelancenetværk.' },
      { question: 'Hvad kræver det at starte op?', answer: 'En telefon, computer og stabilt internet. Vi leverer scripts, leads og CRM-adgang fra dag ét.' },
      { question: 'Kan jeg anbefale andre sælgere?', answer: 'Ja – vi belønner anbefalinger der fører til nye freelance-samarbejder.' },
      { question: 'Hvad er den typiske indkøringsperiode?', answer: 'De fleste sælgere finder deres rytme og leverer gode resultater inden for de første 4-6 uger.' },
    ],
    ctaTitle: 'Start din freelance karriere hos Magnora Marketing i dag',
    ctaSubtitle: 'Fri, fleksibel og med fuld fokus på resultater. Det er hvad Magnora Marketing tilbyder dig som remote sælger.',
    contactShort: 'Kontakt Magnora Marketing',
  },
  en: {
    seoTitle: 'Freelance Remote Sales – Work from Home | Magnora Marketing',
    seoDesc: 'Become a freelance sales rep and work 100% remotely at Magnora Marketing. Choose your own product, set your own hours and build a career from home with strong commission.',
    heroTitle: 'Freelance Sales Rep – Work 100% Remotely',
    heroSubtitle: 'Magnora Marketing offers freelance sales positions you can do from anywhere in Denmark. No commuting, no fixed office hours – you set the framework yourself.',
    heroCta: 'See open positions',
    contactUs: 'Contact us',
    whatTitle: 'What is remote sales at Magnora Marketing?',
    whatSubtitle: 'Remote sales means you work as a freelance sales rep for Magnora Marketing – from your own home, holiday house, or wherever you like. You choose the product, working hours and level of ambition.',
    what: [
      { title: 'Full flexibility', desc: 'Work whenever you want and from wherever you want. No meeting times, no office – just results.' },
      { title: 'Everything is digital', desc: 'Phone, email and CRM. Magnora Marketing provides the digital tools – you deliver the sales.' },
      { title: 'Sell across all of Denmark', desc: 'Your customers are across all of Denmark. You are not limited by geography – sell to the whole country from one place.' },
    ],
    productTitle: 'Choose the product you are passionate about',
    productSubtitle: 'Magnora Marketing has remote sales positions across many industries. Find the product that matches your background and interest.',
    products: [
      'Web development & digital solutions',
      'LED lighting & energy efficiency',
      'Solar energy & renewables',
      'Electricity & energy optimisation',
      'Coffee service for businesses',
      'Mat and cleaning service',
      'Pension advice',
      'Debt collection & credit management',
      'B2B telemarketing & meeting booking',
    ],
    getTitle: 'What you get at Magnora Marketing',
    get: [
      { title: 'Competitive commission', desc: 'Fixed base fee plus commission on your sales. The more you sell, the more you earn – no ceiling.' },
      { title: 'Strong support network', desc: 'You are never alone. Magnora Marketing\'s sales managers are ready for sparring, coaching and support throughout.' },
      { title: 'Your own hours', desc: 'Full flexibility over your working day. Perfect as a full-time job, side income or a supplement to studies.' },
      { title: 'Digital work tools', desc: 'Access to CRM, scripts, campaign materials and leads. You have everything you need from day one.' },
    ],
    lookForTitle: 'What we look for',
    lookFor: [
      'Experience with sales, customer contact or telemarketing',
      'Ability to work independently and with discipline',
      'Good communication skills',
      'Results-oriented and goal-driven',
      'Access to a phone and computer',
      'Motivation and drive – that is the most important thing',
    ],
    startTitle: 'How to get started',
    startP1: 'Look at our open positions, find the product that suits you, and send us a short message. No formal application – just write to us.',
    startP2: 'We get back to you within 2 business days and set up a clarification meeting.',
    seeAllJobs: 'See all open positions',
    contactDirect: 'Contact Magnora Marketing directly',
    seoBlock1Title: 'Freelance Remote Sales – Work from Home as a B2B Sales Rep at Magnora Marketing',
    seoBlock1P1: 'Remote sales is the future of B2B telemarketing and meeting booking – and at Magnora Marketing it is everyday reality. As a remote freelance sales rep you work 100% from home with modern digital sales tools, clear processes and strong support from Magnora Marketing\'s experienced sales managers. You need no expensive commuting, no office and no fixed meeting times – just stable internet, a phone and the drive to create results. Magnora Marketing provides everything else: leads, scripts, CRM access and ongoing sparring.',
    seoBlock1P2: 'Remote sales positions at Magnora Marketing cover a broad spectrum of industries and products – from web development and digital solutions to solar energy, LED lighting, coffee service, pension advice and B2B meeting booking. You choose the product and industry that match your background and interest, and Magnora Marketing matches you with the campaign that best suits your skills and ambitions.',
    seoBullets1: [
      '100% remote – work whenever and from wherever you want',
      'Leads, scripts and CRM provided from day one',
      'Broad selection of products and industries',
      'Competitive commission with no ceiling',
    ],
    seoBlock2Title: 'Freelance Home Office – Get Started with Remote Sales at Magnora Marketing',
    seoBlock2P1: 'Starting as a remote freelance sales rep at Magnora Marketing is simple and fast. You find a product that suits you, send us a message – no formal application needed – and Magnora Marketing gets back to you within 2 business days. You then go through a short onboarding with product training and sales technique, and are ready to start within a few days. Most sales reps find their rhythm and deliver solid results within the first 4-6 weeks.',
    seoBlock2P2: 'Contact Magnora Marketing at mail@magnoramarketing.dk and hear more about the current remote sales opportunities. We are ready for a no-obligation chat about what Magnora Marketing can offer you.',
    faqs: [
      { question: 'Can I work remotely as a sales rep at Magnora Marketing?', answer: 'Yes – all of Magnora Marketing\'s freelance sales positions can be done 100% from home. You only need a phone, computer and stable internet.' },
      { question: 'What is the commission rate?', answer: 'The commission varies depending on product and campaign. You always get a clear agreement on pay and commission before starting.' },
      { question: 'Do I have to find customers myself?', answer: 'No – Magnora Marketing provides leads, scripts and campaign materials. You call the contacts we give you and work by our sales process.' },
      { question: 'When is commission paid out?', answer: 'Commission is paid monthly based on verified sales and results.' },
      { question: 'Can I work for Magnora Marketing alongside another job?', answer: 'Yes – many of our freelancers work for Magnora Marketing as a side income or supplement to studies.' },
      { question: 'Do I need a dedicated home office?', answer: 'You need a quiet place to work from with a stable internet connection and phone. A dedicated home office is an advantage, but not a requirement.' },
      { question: 'What happens if my internet plays up?', answer: 'Technical challenges are part of everyday life. We help you find practical solutions and have backup procedures.' },
      { question: 'Is there a community, even though we work remotely?', answer: 'Yes – Magnora Marketing has regular online meetings, workshops and channels for sharing experience across all freelancers.' },
      { question: 'Can I talk to other remote sales reps?', answer: 'Yes – we have a network of experienced remote sales reps who share tips, experience and motivation.' },
      { question: 'What happens if I am ill?', answer: 'As a freelancer you are not covered by sick pay from Magnora Marketing. You decide your own activity, but earn only on results.' },
      { question: 'Can I work in the evening?', answer: 'You can structure your day freely, but sales calls should happen within normal Danish office hours (8-17) for best results.' },
      { question: 'Are there bonus programmes?', answer: 'Yes – we run ongoing competitions and bonus programmes for top performers in our freelance network.' },
      { question: 'What does it take to get started?', answer: 'A phone, computer and stable internet. We provide scripts, leads and CRM access from day one.' },
      { question: 'Can I refer other sales reps?', answer: 'Yes – we reward referrals that lead to new freelance collaborations.' },
      { question: 'What is the typical ramp-up period?', answer: 'Most sales reps find their rhythm and deliver good results within the first 4-6 weeks.' },
    ],
    ctaTitle: 'Start your freelance career at Magnora Marketing today',
    ctaSubtitle: 'Free, flexible and with full focus on results. That is what Magnora Marketing offers you as a remote sales rep.',
    contactShort: 'Contact Magnora Marketing',
  },
  es: {
    seoTitle: 'Venta Freelance en Remoto – Trabaja desde Casa | Magnora Marketing',
    seoDesc: 'Conviértete en vendedor freelance y trabaja 100% en remoto en Magnora Marketing. Elige tu propio producto, fija tus horarios y construye una carrera desde casa con buena comisión.',
    heroTitle: 'Vendedor Freelance – Trabaja 100% en Remoto',
    heroSubtitle: 'Magnora Marketing ofrece puestos de venta freelance que puedes ejercer desde cualquier lugar de Dinamarca. Sin desplazamientos, sin horarios de oficina fijos – tú marcas las reglas.',
    heroCta: 'Ver vacantes disponibles',
    contactUs: 'Contáctanos',
    whatTitle: '¿Qué es la venta en remoto en Magnora Marketing?',
    whatSubtitle: 'Venta en remoto significa que trabajas como vendedor freelance para Magnora Marketing – desde tu propia casa, tu casa de vacaciones o donde quieras. Tú eliges el producto, el horario y el nivel de ambición.',
    what: [
      { title: 'Total flexibilidad', desc: 'Trabaja cuando quieras y desde donde quieras. Sin horarios de reunión, sin oficina – solo resultados.' },
      { title: 'Todo es digital', desc: 'Teléfono, email y CRM. Magnora Marketing proporciona las herramientas digitales – tú generas la venta.' },
      { title: 'Vende en toda Dinamarca', desc: 'Tus clientes están en toda Dinamarca. No te limita la geografía – vende a todo el país desde un solo lugar.' },
    ],
    productTitle: 'Elige el producto que te apasiona',
    productSubtitle: 'Magnora Marketing tiene puestos de venta en remoto en muchos sectores. Encuentra el producto que encaje con tu experiencia e intereses.',
    products: [
      'Desarrollo web y soluciones digitales',
      'Iluminación LED y eficiencia energética',
      'Energía solar y renovables',
      'Electricidad y optimización energética',
      'Servicio de café para empresas',
      'Servicio de alfombras y limpieza',
      'Asesoría de pensiones',
      'Cobro de deudas y gestión de crédito',
      'Telemarketing B2B y reserva de reuniones',
    ],
    getTitle: 'Lo que obtienes en Magnora Marketing',
    get: [
      { title: 'Comisión competitiva', desc: 'Base fija más comisión sobre tus ventas. Cuanto más vendes, más ganas – sin límite.' },
      { title: 'Sólida red de apoyo', desc: 'Nunca estás solo. Los responsables de ventas de Magnora Marketing están disponibles para asesoramiento, coaching y apoyo durante todo el proceso.' },
      { title: 'Tus propios horarios', desc: 'Total flexibilidad sobre tu jornada laboral. Perfecto como trabajo a tiempo completo, ingreso extra o complemento a los estudios.' },
      { title: 'Herramientas de trabajo digitales', desc: 'Acceso a CRM, guiones, materiales de campaña y leads. Tienes todo lo que necesitas desde el primer día.' },
    ],
    lookForTitle: 'Lo que buscamos',
    lookFor: [
      'Experiencia en ventas, contacto con clientes o telemarketing',
      'Capacidad de trabajar de forma autónoma y disciplinada',
      'Buenas habilidades de comunicación',
      'Orientación a resultados y determinación',
      'Acceso a teléfono y ordenador',
      'Motivación y empuje – eso es lo más importante',
    ],
    startTitle: 'Cómo empezar',
    startP1: 'Mira nuestras vacantes, encuentra el producto que te encaja y envíanos un mensaje breve. Sin solicitud formal – solo escríbenos.',
    startP2: 'Te respondemos en un plazo de 2 días laborables y organizamos una reunión de aclaración.',
    seeAllJobs: 'Ver todas las vacantes disponibles',
    contactDirect: 'Contacta directamente con Magnora Marketing',
    seoBlock1Title: 'Venta Freelance en Remoto – Trabaja desde Casa como Vendedor B2B en Magnora Marketing',
    seoBlock1P1: 'La venta en remoto es el futuro del telemarketing y la reserva de reuniones B2B – y en Magnora Marketing es el día a día. Como vendedor freelance en remoto trabajas 100% desde casa con herramientas de venta digitales modernas, procesos claros y un fuerte apoyo de los experimentados responsables de ventas de Magnora Marketing. No necesitas desplazamientos caros, ni oficina, ni horarios de reunión fijos – solo internet estable, un teléfono y las ganas de generar resultados. Magnora Marketing proporciona todo lo demás: leads, guiones, acceso al CRM y asesoramiento continuo.',
    seoBlock1P2: 'Los puestos de venta en remoto en Magnora Marketing abarcan un amplio abanico de sectores y productos – desde desarrollo web y soluciones digitales hasta energía solar, iluminación LED, servicio de café, asesoría de pensiones y reserva de reuniones B2B. Tú eliges el producto y el sector que encajan con tu experiencia e intereses, y Magnora Marketing te asigna la campaña que mejor se adapta a tus competencias y ambiciones.',
    seoBullets1: [
      '100% en remoto – trabaja cuándo y desde dónde quieras',
      'Leads, guiones y CRM entregados desde el primer día',
      'Amplia selección de productos y sectores',
      'Comisión competitiva sin límite',
    ],
    seoBlock2Title: 'Oficina en Casa Freelance – Empieza con la Venta en Remoto en Magnora Marketing',
    seoBlock2P1: 'Empezar como vendedor freelance en remoto en Magnora Marketing es sencillo y rápido. Encuentras un producto que te encaja, nos envías un mensaje – sin solicitud formal necesaria – y Magnora Marketing te responde en un plazo de 2 días laborables. Después completas un breve proceso de incorporación con formación de producto y técnica de venta, y estás listo para empezar en pocos días. La mayoría de los vendedores encuentran su ritmo y logran buenos resultados en las primeras 4-6 semanas.',
    seoBlock2P2: 'Contacta con Magnora Marketing en mail@magnoramarketing.dk y conoce más sobre las oportunidades actuales de venta en remoto. Estamos listos para una charla sin compromiso sobre lo que Magnora Marketing puede ofrecerte.',
    faqs: [
      { question: '¿Puedo trabajar en remoto como vendedor en Magnora Marketing?', answer: 'Sí – todos los puestos de venta freelance de Magnora Marketing se pueden ejercer 100% desde casa. Solo necesitas un teléfono, ordenador e internet estable.' },
      { question: '¿Cuál es la tasa de comisión?', answer: 'La comisión varía según el producto y la campaña. Siempre recibes un acuerdo claro sobre la retribución y la comisión antes de empezar.' },
      { question: '¿Tengo que encontrar clientes yo mismo?', answer: 'No – Magnora Marketing proporciona leads, guiones y materiales de campaña. Llamas a los contactos que te damos y trabajas según nuestro proceso de venta.' },
      { question: '¿Cuándo se paga la comisión?', answer: 'La comisión se paga mensualmente en función de las ventas y resultados verificados.' },
      { question: '¿Puedo trabajar para Magnora Marketing junto a otro empleo?', answer: 'Sí – muchos de nuestros freelance trabajan para Magnora Marketing como ingreso extra o complemento a sus estudios.' },
      { question: '¿Necesito una oficina en casa dedicada?', answer: 'Necesitas un lugar tranquilo para trabajar con conexión a internet estable y teléfono. Una oficina en casa dedicada es una ventaja, pero no un requisito.' },
      { question: '¿Qué pasa si mi internet falla?', answer: 'Los problemas técnicos forman parte del día a día. Te ayudamos a encontrar soluciones prácticas y tenemos procedimientos de respaldo.' },
      { question: '¿Hay comunidad aunque trabajemos en remoto?', answer: 'Sí – Magnora Marketing tiene reuniones online periódicas, talleres y canales para compartir experiencias entre todos los freelance.' },
      { question: '¿Puedo hablar con otros vendedores en remoto?', answer: 'Sí – tenemos una red de vendedores en remoto experimentados que comparten consejos, experiencias y motivación.' },
      { question: '¿Qué pasa si estoy enfermo?', answer: 'Como freelance no estás cubierto por baja por enfermedad de Magnora Marketing. Tú decides tu propia actividad, pero solo ganas por resultados.' },
      { question: '¿Puedo trabajar por la tarde?', answer: 'Puedes estructurar tu día libremente, pero las llamadas de venta deben hacerse dentro del horario de oficina danés habitual (8-17) para obtener mejores resultados.' },
      { question: '¿Hay programas de bonificación?', answer: 'Sí – organizamos concursos y programas de bonificación continuos para los mejores de nuestra red de freelance.' },
      { question: '¿Qué se necesita para empezar?', answer: 'Un teléfono, ordenador e internet estable. Proporcionamos guiones, leads y acceso al CRM desde el primer día.' },
      { question: '¿Puedo recomendar a otros vendedores?', answer: 'Sí – recompensamos las recomendaciones que dan lugar a nuevas colaboraciones freelance.' },
      { question: '¿Cuál es el periodo de adaptación típico?', answer: 'La mayoría de los vendedores encuentran su ritmo y logran buenos resultados en las primeras 4-6 semanas.' },
    ],
    ctaTitle: 'Empieza hoy tu carrera freelance en Magnora Marketing',
    ctaSubtitle: 'Libre, flexible y con foco total en los resultados. Eso es lo que Magnora Marketing te ofrece como vendedor en remoto.',
    contactShort: 'Contacta con Magnora Marketing',
  },
};

export default function RemoteWorkPage() {
  const c = usePageContent(content);
  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDesc}
        canonical="/jobs/arbejd-hjemmefra"
        keywords="freelance remote salg, arbejd hjemmefra sælger, remote job Danmark, hjemmekontor salg, Magnora Marketing remote stilling"
      />

      <HeroSection
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        ctaText={c.heroCta}
        ctaLink="/freelance-telemarketing"
        secondaryCtaText={c.contactUs}
        secondaryCtaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.whatTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.whatSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              <Home size={40} className="text-blue-600" />,
              <Laptop size={40} className="text-blue-600" />,
              <Globe size={40} className="text-blue-600" />,
            ].map((icon, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{c.what[i].title}</h3>
                <p className="text-gray-600">{c.what[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.productTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{c.productSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.products.map((label, i) => (
              <Link
                key={i}
                to={productLinks[i]}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <CheckCircle className="text-blue-500 flex-shrink-0 group-hover:text-blue-600" size={18} />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm">{label}</span>
                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-500" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.getTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              <PiggyBank size={40} className="text-blue-600" />,
              <Users size={40} className="text-blue-600" />,
              <Clock size={40} className="text-blue-600" />,
              <Laptop size={40} className="text-blue-600" />,
            ].map((icon, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{c.get[i].title}</h3>
                  <p className="text-gray-600">{c.get[i].desc}</p>
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
              <h2 className="text-2xl font-bold mb-6">{c.startTitle}</h2>
              <p className="text-gray-600 mb-4">{c.startP1}</p>
              <p className="text-gray-600 mb-8">{c.startP2}</p>
              <div className="flex flex-col gap-3">
                <Link to="/freelance-telemarketing" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {c.seeAllJobs} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/kontakt" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {c.contactDirect} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{c.seoBlock1Title}</h2>
            <p className="text-gray-600 mb-4">{c.seoBlock1P1}</p>
            <p className="text-gray-600 mb-6">{c.seoBlock1P2}</p>
            <ul className="space-y-2">
              {c.seoBullets1.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{c.seoBlock2Title}</h2>
            <p className="text-gray-600 mb-4">{c.seoBlock2P1}</p>
            <p className="text-gray-600 mb-4">{c.seoBlock2P2}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={c.faqs} />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{c.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{c.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/freelance-telemarketing" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {c.seeAllJobs} <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {c.contactShort}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
