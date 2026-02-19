import SEO from '../components/SEO'
import './Contact.css'

const PHONE = '+48 123 456 789'
const EMAIL = 'kontakt@funrent.pl'

const Contact = () => {
  return (
    <>
      <SEO
        title="Kontakt - Fun Rent"
        description="Działamy na terenie całego Podkarpacia. Skontaktuj się z nami, a pomożemy zorganizować niezapomniane wydarzenie!"
        canonical="/kontakt"
      />
      <div className="kontakt-page">
        <section className="kontakt-section section" aria-labelledby="contact-title">
          <div className="container">
            <div className="kontakt-content">
              <h1 id="contact-title" className="section-title">Kontakt</h1>
              <p className="section-subtitle">
                Działamy na terenie całego Podkarpacia. Skontaktuj się z nami, a pomożemy 
                zorganizować niezapomniane wydarzenie!
              </p>

              <div className="kontakt-info">
                <article className="kontakt-card">
                  <div className="kontakt-icon" aria-hidden="true">📞</div>
                  <h2 className="kontakt-card-title">Telefon</h2>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="kontakt-card-link">
                    {PHONE}
                  </a>
                  <p className="kontakt-card-note">Zadzwoń lub napisz SMS</p>
                </article>

                <article className="kontakt-card">
                  <div className="kontakt-icon" aria-hidden="true">✉️</div>
                  <h2 className="kontakt-card-title">Email</h2>
                  <a href={`mailto:${EMAIL}`} className="kontakt-card-link">
                    {EMAIL}
                  </a>
                  <p className="kontakt-card-note">Odpowiemy w ciągu 24h</p>
                </article>

                <article className="kontakt-card">
                  <div className="kontakt-icon" aria-hidden="true">🕐</div>
                  <h2 className="kontakt-card-title">Godziny pracy</h2>
                  <dl className="kontakt-hours">
                    <div>
                      <dt>Poniedziałek - Piątek:</dt>
                      <dd>9:00 - 18:00</dd>
                    </div>
                    <div>
                      <dt>Sobota:</dt>
                      <dd>10:00 - 16:00</dd>
                    </div>
                    <div>
                      <dt>Niedziela:</dt>
                      <dd>Zamknięte</dd>
                    </div>
                  </dl>
                </article>
              </div>

              <div className="kontakt-cta">
                <h2 className="kontakt-cta-title">Gotowy na niezapomniany event?</h2>
                <p className="kontakt-cta-text">
                  Skontaktuj się z nami już dziś, a pomożemy zaplanować każdy szczegół Twojego wydarzenia.
                </p>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="kontakt-cta-button">
                  Zadzwoń teraz
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
