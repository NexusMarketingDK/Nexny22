import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import da from './locales/da';
import en from './locales/en';
import es from './locales/es';
import websitesDa from './locales/websites/da';
import websitesEn from './locales/websites/en';
import websitesEs from './locales/websites/es';
import webdevDa from './locales/webdev/da';
import webdevEn from './locales/webdev/en';
import webdevEs from './locales/webdev/es';
import apisaasDa from './locales/apisaas/da';
import apisaasEn from './locales/apisaas/en';
import apisaasEs from './locales/apisaas/es';
import aireceptionDa from './locales/aireception/da';
import aireceptionEn from './locales/aireception/en';
import aireceptionEs from './locales/aireception/es';
import aiwidgetDa from './locales/aiwidget/da';
import aiwidgetEn from './locales/aiwidget/en';
import aiwidgetEs from './locales/aiwidget/es';
import aiintegrationDa from './locales/aiintegration/da';
import aiintegrationEn from './locales/aiintegration/en';
import aiintegrationEs from './locales/aiintegration/es';

const isBrowser = typeof window !== 'undefined';

// Language detection relies on browser APIs (localStorage/navigator), so it is
// only enabled in the browser. During static pre-rendering (Node) we default to
// Danish, which is the canonical language we want indexed.
if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      da: { translation: { ...da, websites: websitesDa, webdev: webdevDa, apisaas: apisaasDa, aireception: aireceptionDa, aiwidget: aiwidgetDa, aiintegration: aiintegrationDa } },
      en: { translation: { ...en, websites: websitesEn, webdev: webdevEn, apisaas: apisaasEn, aireception: aireceptionEn, aiwidget: aiwidgetEn, aiintegration: aiintegrationEn } },
      es: { translation: { ...es, websites: websitesEs, webdev: webdevEs, apisaas: apisaasEs, aireception: aireceptionEs, aiwidget: aiwidgetEs, aiintegration: aiintegrationEs } },
    },
    lng: isBrowser ? undefined : 'da',
    fallbackLng: 'da',
    supportedLngs: ['da', 'en', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
