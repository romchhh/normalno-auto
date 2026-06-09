'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from '@/locales/ru.json'
import en from '@/locales/en.json'
import type { Locale } from './config'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  })
}

export function setI18nLocale(locale: Locale) {
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
}

export default i18n
