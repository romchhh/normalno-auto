import { buildHomeJsonLd } from '@/lib/home-schema'
import type { Locale } from '@/lib/i18n/config'
import JsonLdScript from './seo/JsonLdScript'

export default function JsonLd({ locale }: { locale: Locale }) {
  return <JsonLdScript data={buildHomeJsonLd(locale)} />
}
