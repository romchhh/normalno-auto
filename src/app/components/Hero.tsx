'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [time, setTime] = useState({ h: '12', m: '31', s: '32' })

  useEffect(() => {
    const getTarget = () => {
      const t = new Date()
      t.setHours(23, 59, 0, 0)
      if (new Date() > t) t.setDate(t.getDate() + 1)
      return t
    }
    let target = getTarget()

    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { target = getTarget(); return }
      setTime({
        h: String(Math.floor(diff / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/Gemini_Generated_Image_eixfh7eixfh7eixf.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <h1 className={styles.headline}>
          Twój uśmiech,<br />nasza <em>misja</em>
        </h1>

        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            <span className={styles.phone}>+48 123 456 789</span>
            <span className={styles.address}>ul. Marszałkowska 12<br />00-590 Warszawa</span>
          </div>

          <a href="#kontakt" className={styles.card}>
            <div className={styles.cardText}>
              <p className={styles.cardLabel}>Zapisz się na wizytę</p>
              <p className={styles.timer}>
                <b>{time.h}</b><span>g</span>
                <b>{time.m}</b><span>m</span>
                <b>{time.s}</b><span>s</span>
              </p>
              <p className={styles.cardSub}>I skorzystaj z bezpłatnego<br />wybielania zębów</p>
            </div>
            <div className={styles.cardArrow}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
