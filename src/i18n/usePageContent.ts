import { useTranslation } from 'react-i18next';

export type Lang = 'da' | 'en' | 'es';

/**
 * Selects the content block matching the active language for a content-heavy
 * page. Keeps long-form page/blog copy colocated with each page instead of
 * bloating the central i18n locale files. Falls back to Danish (the source
 * language) when a translation is missing.
 */
export function usePageContent<T>(content: Record<Lang, T>): T {
  const { i18n } = useTranslation();
  const lang = (['da', 'en', 'es'] as const).find((l) => l === i18n.language) ?? 'da';
  return content[lang] ?? content.da;
}
