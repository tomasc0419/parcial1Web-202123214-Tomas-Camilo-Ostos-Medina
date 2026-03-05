import 'server-only'

const dictionaries = {
  es: () => import('./dictionaries/es.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries
export const locales: Locale[] = ['es', 'en']
export const defaultLocale: Locale = 'es'

export const hasLocale = (lang: string): lang is Locale =>
  Object.prototype.hasOwnProperty.call(dictionaries, lang)

export const getDictionary = async (lang: Locale) => dictionaries[lang]()