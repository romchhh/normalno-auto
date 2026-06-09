'use client'

import { usePathname } from 'next/navigation'
import { defaultLocale, getLocaleFromPathname, localePath, type Locale } from './config'

export function useLocale(): Locale {
  const pathname = usePathname()
  return getLocaleFromPathname(pathname) ?? defaultLocale
}

export function useLocalizedPath() {
  const locale = useLocale()
  return (path: string) => localePath(path, locale)
}
