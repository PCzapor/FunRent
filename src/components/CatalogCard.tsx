import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CatalogItem, CATEGORY_LABEL } from '../mock/funrent.data'
import './CatalogCard.css'

interface CatalogCardProps {
  item: CatalogItem
}

const CatalogCard = ({ item }: CatalogCardProps) => {
  const images = item.photos?.length ? item.photos : [item.photoUrl]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length)
  }
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((i) => (i + 1) % images.length)
  }

  return (
    <article className="catalog-card">
      {item.status === 'favorite' && (
        <div className="catalog-card-badge" aria-label="Najpopularniejszy produkt">
          Najpopularniejsze
        </div>
      )}
      <div className="catalog-card-image">
        <div
          className="catalog-card-slider"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          aria-live="polite"
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={idx === 0 ? `${item.title} - ${item.description.substring(0, 80)}` : `${item.title} - zdjęcie ${idx + 1}`}
            />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="catalog-card-slider-btn catalog-card-slider-prev"
              onClick={goPrev}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
            <button
              type="button"
              className="catalog-card-slider-btn catalog-card-slider-next"
              onClick={goNext}
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
            <div className="catalog-card-dots" role="tablist" aria-label="Wybierz zdjęcie">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentImageIndex}
                  aria-label={`Zdjęcie ${idx + 1}`}
                  className={`catalog-card-dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentImageIndex(idx)
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="catalog-card-content">
        <div className="catalog-card-category" aria-label={`Kategoria: ${CATEGORY_LABEL[item.category]}`}>
          {CATEGORY_LABEL[item.category]}
        </div>
        <h3 className="catalog-card-title">{item.title}</h3>
        <p className="catalog-card-description">{item.description}</p>
        <div className="catalog-card-footer">
          <span className="catalog-card-price" aria-label={`Cena: ${item.price}`}>
            {item.price}
          </span>
          <Link to="/o-nas#jak-dzialamy" className="catalog-card-order-btn">
            Zamów
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CatalogCard
