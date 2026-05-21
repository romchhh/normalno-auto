import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Stopka nawigacja">
          <a href="#">O klinice</a>
          <a href="#">Usługi</a>
          <a href="#">Lekarze</a>
          <a href="#">Historie pacjentów</a>
          <a href="#">Opinie</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Godziny pracy</h3>
            <p>Pn–Sb: 10:00 – 20:00</p>
            <p>Niedziela – dzień wolny</p>
          </div>

          <div className={styles.col}>
            <h3>Kontakt</h3>
            <p>ul. Marszałkowska 12<br />00-590 Warszawa</p>
            <p>+48 123 456 789</p>
            <a href="mailto:kontakt@dente.pl">kontakt@dente.pl</a>
          </div>

          <div className={styles.col}>
            <h3>Social media</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TIKTOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">DENTÉ</div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Denté. Wszelkie prawa zastrzeżone.</span>
        <a href="#">Polityka prywatności</a>
        <a href="#" className={styles.dev}>PROJEKT STRONY: DENTÉ STUDIO</a>
      </div>
    </footer>
  )
}
