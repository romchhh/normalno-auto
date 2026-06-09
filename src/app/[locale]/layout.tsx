import { notFound } from 'next/navigation'
import { isValidLocale, locales } from '@/lib/i18n/config'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children, params }: Props) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  return children
}
