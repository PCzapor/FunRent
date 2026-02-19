import { useState, useEffect, useRef } from 'react'
import { HERO_SLIDES } from '../mock/funrent.data'
import { IconPrev, IconNext, IconPlay, IconPause } from './Icons'
import './HeroCarousel.css'

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  useEffect(() => {
    if (isPlaying && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, prefersReducedMotion])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.closest('.hero-carousel')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          prevSlide()
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          nextSlide()
        } else if (e.key === ' ') {
          e.preventDefault()
          togglePlayPause()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="hero-carousel" ref={carouselRef} role="region" aria-label="Karuzela zdjęć z eventów">
      <div
        className="hero-carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        aria-live={isPlaying ? 'polite' : 'off'}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-carousel-slide"
            aria-hidden={index !== currentIndex}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      
      <div className="hero-carousel-controls">
        <button
          className="hero-carousel-btn hero-carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Poprzedni slajd"
        >
          <IconPrev />
        </button>
        <button
          className="hero-carousel-btn hero-carousel-btn-next"
          onClick={nextSlide}
          aria-label="Następny slajd"
        >
          <IconNext />
        </button>
      </div>

      <div className="hero-carousel-bottom">
        <button
          className="hero-carousel-btn hero-carousel-btn-play"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pauza' : 'Odtwarzaj'}
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
        <div className="hero-carousel-dots" role="tablist" aria-label="Wybierz slajd">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={`hero-carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slajd ${index + 1} z ${HERO_SLIDES.length}`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls={`slide-${index}`}
            />
          ))}
        </div>
        <div className="hero-carousel-dots-spacer" aria-hidden="true" />
      </div>
   
    </div>
  )
}

export default HeroCarousel
