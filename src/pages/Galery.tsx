import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { GALLERY, GALLERY_CATEGORY_CARDS, Category } from '../mock/funrent.data'
import './Galery.css'

const Galery = () => {
  const { category } = useParams<{ category?: Category }>()
  const navigate = useNavigate()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const lightboxContentRef = useRef<HTMLDivElement>(null)

  const handleCategoryClick = (cat: Category) => {
    navigate(`/galeria/${cat}`)
  }

  const handleBackToCategories = () => {
    navigate('/galeria')
  }

  const categoryImages = category
    ? GALLERY.filter((img) => img.category === category)
    : []

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    if (categoryImages.length > 0) {
      const nextIndex = (lightboxIndex + 1) % categoryImages.length
      setLightboxIndex(nextIndex)
      setLightboxImage(categoryImages[nextIndex].src)
    }
  }

  const prevImage = () => {
    if (categoryImages.length > 0) {
      const prevIndex = (lightboxIndex - 1 + categoryImages.length) % categoryImages.length
      setLightboxIndex(prevIndex)
      setLightboxImage(categoryImages[prevIndex].src)
    }
  }

  useEffect(() => {
    if (!lightboxImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    const focusableElements = lightboxContentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements?.[0] as HTMLElement
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

    firstElement?.focus()

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    window.addEventListener('keydown', handleTabKey)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keydown', handleTabKey)
    }
  }, [lightboxImage, lightboxIndex, categoryImages])

  if (category && categoryImages.length > 0) {
    const categoryTitle = GALLERY_CATEGORY_CARDS.find((c) => c.category === category)?.title || 'Galeria'
    
    return (
      <>
        <SEO
          title={`Galeria: ${categoryTitle} - Fun Rent`}
          description={`Zobacz nasze realizacje z kategorii ${categoryTitle.toLowerCase()}`}
          canonical={`/galeria/${category}`}
        />
        <div className="galeria-page">
          <section className="galeria-section section" aria-labelledby="gallery-title">
            <div className="container">
              <button 
                onClick={handleBackToCategories} 
                className="galeria-back-btn"
                aria-label="Powrót do kategorii galerii"
              >
                ← Powrót do kategorii
              </button>
              <h1 id="gallery-title" className="section-title">
                Galeria: {categoryTitle}
              </h1>
              <ul className="galeria-grid" role="list">
                {categoryImages.map((image, index) => (
                  <li key={image.id} role="listitem">
                    <button
                      className="galeria-item"
                      onClick={() => openLightbox(image.src, index)}
                      aria-label={`Otwórz powiększenie: ${image.caption}`}
                    >
                      <img src={image.src} alt={image.caption} />
                      <div className="galeria-item-overlay">
                        <p className="galeria-item-caption">{image.caption}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {lightboxImage && (
            <div
              className="lightbox"
              onClick={closeLightbox}
              ref={lightboxRef}
              role="dialog"
              aria-modal="true"
              aria-label="Powiększenie zdjęcia"
            >
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
                ref={lightboxContentRef}
              >
                <button
                  className="lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Zamknij powiększenie"
                >
                  ×
                </button>
                {categoryImages.length > 1 && (
                  <>
                    <button
                      className="lightbox-nav lightbox-prev"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      aria-label="Poprzednie zdjęcie"
                    >
                      ‹
                    </button>
                    <button
                      className="lightbox-nav lightbox-next"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      aria-label="Następne zdjęcie"
                    >
                      ›
                    </button>
                  </>
                )}
                <div className="lightbox-image-wrap">
                  <img 
                    src={lightboxImage} 
                    alt={categoryImages[lightboxIndex]?.caption || 'Powiększenie zdjęcia'} 
                  />
                </div>
                {categoryImages[lightboxIndex]?.caption && (
                  <p className="lightbox-caption">{categoryImages[lightboxIndex].caption}</p>
                )}
                {categoryImages.length > 1 && (
                  <div className="lightbox-thumbnails" role="tablist" aria-label="Pasek zdjęć">
                    {categoryImages.map((img, idx) => (
                      <button
                        key={img.id}
                        type="button"
                        role="tab"
                        aria-selected={idx === lightboxIndex}
                        aria-label={`Zdjęcie ${idx + 1}: ${img.caption}`}
                        className={idx === lightboxIndex ? 'active' : ''}
                        onClick={(e) => {
                          e.stopPropagation()
                          setLightboxIndex(idx)
                          setLightboxImage(img.src)
                        }}
                      >
                        <img src={img.src} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title="Galeria - Fun Rent"
        description="Zobacz nasze realizacje i poczuj atmosferę wydarzeń, które organizujemy"
        canonical="/galeria"
      />
      <div className="galeria-page">
        <section className="galeria-section section" aria-labelledby="gallery-title">
          <div className="container">
            <h1 id="gallery-title" className="section-title">Galeria</h1>
            <p className="section-subtitle">
              Zobacz nasze realizacje i poczuj atmosferę wydarzeń, które organizujemy
            </p>
            <ul className="galeria-categories" role="list">
              {GALLERY_CATEGORY_CARDS.map((card) => (
                <li key={card.id} role="listitem">
                  <button
                    className="galeria-category-card"
                    onClick={() => handleCategoryClick(card.category)}
                    aria-label={`Zobacz galerię: ${card.title}`}
                  >
                    <div className="galeria-category-image">
                      <img src={card.coverImage} alt={`Kategoria: ${card.title}`} />
                    </div>
                    <div className="galeria-category-overlay">
                      <h2 className="galeria-category-title">{card.title}</h2>
                      <p className="galeria-category-link">Zobacz galerię →</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Galery
