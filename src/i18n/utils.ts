import { translations, LANGS, type Lang, type Translation } from './translations';

export { LANGS, LANG_META } from './translations';
export type { Lang, Translation } from './translations';

export const DEFAULT_LANG: Lang = 'en';

export function useTranslations(lang: Lang): Translation {
  return translations[lang] as Translation;
}

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  const baseIndex = segments[0] === 'support-center' ? 1 : 0;
  const maybeLang = segments[baseIndex];
  if (maybeLang && (LANGS as string[]).includes(maybeLang)) return maybeLang as Lang;
  return DEFAULT_LANG;
}

export function localizedPath(lang: Lang, base: string): string {
  const trimmed = base.replace(/\/$/, '');
  return lang === DEFAULT_LANG ? `${trimmed}/` : `${trimmed}/${lang}/`;
}
