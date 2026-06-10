'use client'

import { useTranslation } from 'react-i18next'
import styles from './SeoTextSection.module.css'

export default function SeoTextSection() {
  const { t } = useTranslation()
  const paragraphs = t('seo.bottomText').split('\n\n').filter(Boolean)

  return (
    <section className={styles.section} aria-labelledby="seo-bottom-title">
      <div className={styles.inner}>
        <h2 id="seo-bottom-title" className={styles.title}>
          {t('seo.bottomTitle')}
        </h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
