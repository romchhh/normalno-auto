'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ContactSection.module.css'

const SERVICES = [
  'Wybielanie zębów',
  'Leczenie kanałowe',
  'Implanty',
  'Ortodoncja',
  'Protetyka',
  'Higiena i profilaktyka',
  'Stomatologia dziecięca',
  'Inne',
]

type FormState = { name: string; phone: string; service: string; comment: string; consent: boolean }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', comment: '', consent: false })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('loading')
    // Simulate async request — replace with real API call
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
  }

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.inner}>
        {/* ─── LEFT ─── */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Porozmawiajmy<br />o leczeniu
          </h2>
          <div className={styles.imgWrap}>
            <Image
              src="/images/contact-dentist.jpg"
              alt="Lekarz stomatolog podczas zabiegu"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>

        {/* ─── RIGHT ─── */}
        <div className={styles.right}>
          <p className={styles.subheading}>
            Bezpłatna konsultacja — zostaw zgłoszenie,<br />
            a my skontaktujemy się, aby ustalić wygodny termin wizyty
          </p>

          {status === 'success' ? (
            <div className={styles.success}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--sky)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="24" cy="24" r="20"/>
                <path d="M14 24 L21 31 L34 18"/>
              </svg>
              <h3>Dziękujemy!</h3>
              <p>Skontaktujemy się z Tobą wkrótce.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Imię</label>
                <input id="name" type="text" placeholder="Wprowadź imię" value={form.name} onChange={set('name')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Numer telefonu</label>
                <input id="phone" type="tel" placeholder="Twój numer telefonu" value={form.phone} onChange={set('phone')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="service">Wybierz usługę</label>
                <div className={styles.selectWrap}>
                  <select id="service" value={form.service} onChange={set('service')}>
                    <option value="">Potrzebna usługa</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--slate)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 6 L8 11 L13 6"/>
                  </svg>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="comment">Komentarz</label>
                <textarea id="comment" placeholder="Twój komentarz..." rows={4} value={form.comment} onChange={set('comment')} />
              </div>
              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span>Wypełniając formularz, zgadzasz się na przetwarzanie swoich danych osobowych</span>
              </label>
              <button type="submit" className={styles.submit} disabled={!form.consent || status === 'loading'}>
                {status === 'loading' ? 'Wysyłanie…' : 'Wyślij zgłoszenie'}
                {status !== 'loading' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
