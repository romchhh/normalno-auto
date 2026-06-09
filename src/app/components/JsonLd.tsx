import { buildHomeJsonLd } from '@/lib/home-schema'
import JsonLdScript from './seo/JsonLdScript'

export default function JsonLd() {
  return <JsonLdScript data={buildHomeJsonLd()} />
}
