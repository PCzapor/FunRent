import SEO from '../components/SEO'
import HeroCarousel from '../components/HeroCarousel'
import CatalogCard from '../components/CatalogCard'
import TestimonialsSlider from '../components/TestimonialsSlider'
import { FEATURED_ITEMS } from '../mock/funrent.data'
import './Home.css'

const Home = () => {
  return (
    <>
      <SEO
        title="Fun Rent - Wynajem sprzętu i obsługa eventów"
        description="Fun Rent to firma event planningowa z pasją do tworzenia niezapomnianych chwil. Specjalizujemy się w wynajmie sprzętu eventowego, animacjach dla dzieci i dorosłych oraz kompleksowej obsłudze wydarzeń na terenie całego Podkarpacia."
        canonical="/"
      />
      <div className="home">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-carousel-wrapper">
                <HeroCarousel />
              </div>
              <div className="hero-about">
                <h1 id="hero-title" className="hero-title">O nas</h1>
                <p className="hero-description">
                  Fun Rent to firma event planningowa z pasją do tworzenia niezapomnianych chwil. 
                  Specjalizujemy się w wynajmie sprzętu eventowego, animacjach dla dzieci i dorosłych 
                  oraz kompleksowej obsłudze wydarzeń na terenie całego Podkarpacia.
                </p>
                <p className="hero-description">
                  Od wesel i urodzin po imprezy firmowe — zapewniamy profesjonalną obsługę, 
                  wysokiej jakości sprzęt i atmosferę pełną radości. Z nami Twój event będzie wyjątkowy!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section section" aria-labelledby="featured-title">
          <div className="container">
            <h2 id="featured-title" className="section-title">Najlepsze itemy</h2>
            <p className="section-subtitle">
              Sprawdź nasze najpopularniejsze propozycje, które sprawdzą się na każdym wydarzeniu
            </p>
            <ul className="catalog-grid" role="list">
              {FEATURED_ITEMS.map((item) => (
                <li key={item.id} role="listitem">
                  <CatalogCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="testimonials-section section" aria-labelledby="testimonials-title">
          <div className="container">
            <h2 id="testimonials-title" className="section-title">Opinie klientów</h2>
            <p className="section-subtitle">
              Zobacz, co mówią o nas osoby, które już skorzystały z naszych usług
            </p>
            <TestimonialsSlider />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
