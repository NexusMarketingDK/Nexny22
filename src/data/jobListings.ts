import { Building, Zap, Coffee, Sun, Shield, Briefcase, Scale, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Lang = 'da' | 'en' | 'es';
type Localized = Record<Lang, string>;

export interface JobListingData {
  path: string;
  title: Localized;
  description: Localized;
  icon: any;
  color: string;
}

export interface JobListing {
  path: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

export const jobListingsData: JobListingData[] = [
  {
    path: '/jobs/arbejd-hjemmefra',
    title: {
      da: 'Arbejd hjemmefra',
      en: 'Work from home',
      es: 'Trabaja desde casa',
    },
    description: {
      da: 'Få frihed og fleksibilitet med et job som freelance sælger eller mødebooker hjemmefra.',
      en: 'Get freedom and flexibility with a job as a freelance sales rep or meeting booker from home.',
      es: 'Consigue libertad y flexibilidad con un trabajo como vendedor freelance o agente de reservas desde casa.',
    },
    icon: Building,
    color: 'text-blue-600'
  },
  {
    path: '/jobs/webudvikling-salg',
    title: {
      da: 'Sælger - Webudvikling & Digitale Løsninger',
      en: 'Sales Rep - Web Development & Digital Solutions',
      es: 'Vendedor - Desarrollo Web y Soluciones Digitales',
    },
    description: {
      da: 'Book kvalificerede møder for et af Danmarks førende digitale bureauer og hjælp virksomheder med at finde de rigtige marketingløsninger.',
      en: 'Book qualified meetings for one of Denmark\'s leading digital agencies and help businesses find the right marketing solutions.',
      es: 'Reserva reuniones cualificadas para una de las agencias digitales líderes de Dinamarca y ayuda a las empresas a encontrar las soluciones de marketing adecuadas.',
    },
    icon: Building,
    color: 'text-blue-600'
  },
  {
    path: '/jobs/led-belysning',
    title: {
      da: 'Mødebooker - LED Belysning',
      en: 'Meeting Booker - LED Lighting',
      es: 'Agente de Reservas - Iluminación LED',
    },
    description: {
      da: 'Bliv mødebooker for Danmarks mest innovative LED-virksomhed og hjælp erhverv med energieffektive belysningsløsninger.',
      en: 'Become a meeting booker for Denmark\'s most innovative LED company and help businesses with energy-efficient lighting solutions.',
      es: 'Conviértete en agente de reservas para la empresa de LED más innovadora de Dinamarca y ayuda a las empresas con soluciones de iluminación energéticamente eficientes.',
    },
    icon: Lightbulb,
    color: 'text-yellow-600'
  },
  {
    path: '/jobs/energi-salg',
    title: {
      da: 'Sælger - Strøm B2C/B2B',
      en: 'Sales Rep - Electricity B2C/B2B',
      es: 'Vendedor - Electricidad B2C/B2B',
    },
    description: {
      da: 'Hjælp private og virksomheder med at spare på energien gennem optimerede strømløsninger og grønne alternativer.',
      en: 'Help private customers and businesses save on energy through optimised electricity solutions and green alternatives.',
      es: 'Ayuda a particulares y empresas a ahorrar energía mediante soluciones eléctricas optimizadas y alternativas ecológicas.',
    },
    icon: Zap,
    color: 'text-green-600'
  },
  {
    path: '/jobs/kaffe-service',
    title: {
      da: 'Mødebooker - Kaffeservice',
      en: 'Meeting Booker - Coffee Service',
      es: 'Agente de Reservas - Servicio de Café',
    },
    description: {
      da: 'Hjælp virksomheder med at finde den perfekte kaffeløsning til deres medarbejdere og kunder.',
      en: 'Help businesses find the perfect coffee solution for their employees and customers.',
      es: 'Ayuda a las empresas a encontrar la solución de café perfecta para sus empleados y clientes.',
    },
    icon: Coffee,
    color: 'text-amber-600'
  },
  {
    path: '/jobs/solenergi',
    title: {
      da: 'Mødebooker - Vedvarende Energi',
      en: 'Meeting Booker - Renewable Energy',
      es: 'Agente de Reservas - Energía Renovable',
    },
    description: {
      da: 'Vær med til at drive den grønne omstilling som mødebooker inden for solceller og vedvarende energi.',
      en: 'Help drive the green transition as a meeting booker within solar panels and renewable energy.',
      es: 'Contribuye a impulsar la transición verde como agente de reservas en el ámbito de los paneles solares y la energía renovable.',
    },
    icon: Sun,
    color: 'text-orange-600'
  },
  {
    path: '/jobs/matte-service',
    title: {
      da: 'Mødebooker - Måtteservice',
      en: 'Meeting Booker - Mat Service',
      es: 'Agente de Reservas - Servicio de Alfombras',
    },
    description: {
      da: 'Book møder for professionelle måtteservice løsninger og hjælp virksomheder med at skabe et renere arbejdsmiljø.',
      en: 'Book meetings for professional mat service solutions and help businesses create a cleaner work environment.',
      es: 'Reserva reuniones para soluciones profesionales de servicio de alfombras y ayuda a las empresas a crear un entorno de trabajo más limpio.',
    },
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    path: '/jobs/pensionsordning',
    title: {
      da: 'Mødebooker - Pension',
      en: 'Meeting Booker - Pension',
      es: 'Agente de Reservas - Pensiones',
    },
    description: {
      da: 'Hjælp danskere med at sikre deres økonomiske fremtid gennem professionel pensionsrådgivning.',
      en: 'Help people secure their financial future through professional pension advice.',
      es: 'Ayuda a las personas a asegurar su futuro financiero mediante asesoramiento profesional sobre pensiones.',
    },
    icon: Briefcase,
    color: 'text-indigo-600'
  },
  {
    path: '/jobs/inkasso',
    title: {
      da: 'Mødebooker - Inkasso',
      en: 'Meeting Booker - Debt Collection',
      es: 'Agente de Reservas - Cobro de Deudas',
    },
    description: {
      da: 'Book møder for professionelle inkassoløsninger og hjælp virksomheder med debitorhåndtering.',
      en: 'Book meetings for professional debt collection solutions and help businesses with accounts receivable management.',
      es: 'Reserva reuniones para soluciones profesionales de cobro de deudas y ayuda a las empresas con la gestión de cuentas por cobrar.',
    },
    icon: Scale,
    color: 'text-gray-600'
  }
];

const localize = (data: JobListingData[], lang: Lang): JobListing[] =>
  data.map((job) => ({
    path: job.path,
    title: job.title[lang] ?? job.title.da,
    description: job.description[lang] ?? job.description.da,
    icon: job.icon,
    color: job.color,
  }));

/** Hook returning job listings localised to the active language. */
export const useJobListings = (): JobListing[] => {
  const { i18n } = useTranslation();
  const lang = (['da', 'en', 'es'] as const).find((l) => l === i18n.language) ?? 'da';
  return localize(jobListingsData, lang);
};

/** Job listings for the remote-work page (excludes the main "arbejd-hjemmefra" entry). */
export const useJobListingsForRemotePage = (): JobListing[] =>
  useJobListings().filter((job) => job.path !== '/jobs/arbejd-hjemmefra');
