import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../mock/funrent.data'
import './TestimonialsSlider.css'

const TestimonialsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || prefersReducedMotion || isPaused) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed
      if (position <= -slider.scrollWidth / 2) {
        position = 0
      }
      slider.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [prefersReducedMotion, isPaused])

  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <div className="testimonials-slider-wrapper">
      <div className="testimonials-slider-controls">
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Wznów przewijanie opinii' : 'Zatrzymaj przewijanie opinii'}
          className="testimonials-pause-btn"
        >
          {isPaused ? '▶' : '⏸'}
        </button>
      </div>
      <div 
        className="testimonials-slider-container"
        aria-label="Opinie klientów"
        role="region"
      >
        <div 
          className="testimonials-slider" 
          ref={sliderRef}
          aria-live={isPaused ? 'off' : 'polite'}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <article key={`${testimonial.id}-${index}`} className="testimonial-card">
              <div className="testimonial-stars" aria-label={`Ocena: ${testimonial.rating} z 5`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="testimonial-text">
                <p>"{testimonial.text}"</p>
              </blockquote>
              <div className="testimonial-author">
                <cite className="testimonial-name">{testimonial.author}</cite>
                <span className="testimonial-source">{testimonial.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSlider
