import { useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import './About.css'

const About = () => {
  const jakDzialamyRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash === '#jak-dzialamy' && jakDzialamyRef.current) {
      jakDzialamyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const steps = [
    {
      id: 1,
      title: 'Kontakt',
      description:
        'Skontaktuj się z nami telefonicznie, mailowo lub przez formularz. Odpowiemy szybko i pomożemy dobrać najlepsze rozwiązania dla Twojego wydarzenia.',
    },
    {
      id: 2,
      title: 'Ustalenie szczegółów',
      description:
        'Wspólnie omówimy wszystkie szczegóły: datę, miejsce, liczbę gości, oczekiwania i budżet. Przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb.',
    },
    {
      id: 3,
      title: 'Przygotowanie i realizacja',
      description:
        'Zajmiemy się wszystkimi przygotowaniami: rezerwacją sprzętu, logistyką, koordynacją z dostawcami. Wszystko dopięte na ostatni guzik.',
    },
    {
      id: 4,
      title: 'Obsługa na miejscu',
      description:
        'W dniu wydarzenia nasza ekipa pojawi się punktualnie, zamontuje sprzęt, przeprowadzi animacje i zadba o to, żeby wszystko przebiegło bez zakłóceń.',
    },
  ]

  return (
    <>
      <SEO
        title="O nas - Fun Rent"
        description="Fun Rent to zespół pasjonatów eventów, którzy od lat tworzą niezapomniane wydarzenia na terenie całego Podkarpacia. Łączymy profesjonalizm z pasją, dbając o każdy szczegół Twojego eventu."
        canonical="/o-nas"
      />
      <div className="onas-page">
        <section className="onas-hero section" aria-labelledby="about-title">
          <div className="container">
            <div className="onas-hero-grid">
              <div className="onas-hero-content">
                <h1 id="about-title" className="section-title">O nas</h1>
                <div className="onas-hero-text">
                  <p>
                    Fun Rent to zespół pasjonatów eventów, którzy od lat tworzą niezapomniane 
                    wydarzenia na terenie całego Podkarpacia. Łączymy profesjonalizm z pasją, 
                    dbając o każdy szczegół Twojego eventu.
                  </p>
                  <p>
                    Specjalizujemy się w wynajmie sprzętu eventowego — od fotobudek i nagłośnienia 
                    po dekoracje i atrakcje dla dzieci. Oferujemy również kompleksową obsługę 
                    wydarzeń, w tym animacje, prowadzenie imprez i koordynację całego przedsięwzięcia.
                  </p>
                  <p>
                    Nasza misja to sprawić, żeby każdy event był wyjątkowy, a Ty mógł cieszyć się 
                    chwilą bez stresu. Z nami możesz być pewien, że wszystko będzie dopięte na ostatni guzik.
                  </p>
                </div>
              </div>
              <div className="onas-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Zespół Fun Rent podczas przygotowań do eventu"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="jak-dzialamy" ref={jakDzialamyRef} className="onas-process section" aria-labelledby="process-title">
          <div className="container">
            <h2 id="process-title" className="section-title">Jak działamy</h2>
            <p className="section-subtitle">
              Prosty, przejrzysty proces współpracy — od pierwszego kontaktu po realizację eventu
            </p>
            <ol className="process-timeline" role="list">
              {steps.map((step, index) => (
                <li key={step.id} className="process-step" role="listitem">
                  <div className="process-step-number" aria-hidden="true">{step.id}</div>
                  <div className="process-step-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-description">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && <div className="process-step-connector" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
