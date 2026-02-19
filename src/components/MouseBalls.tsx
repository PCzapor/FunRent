import { useEffect, useRef, useCallback } from 'react'
import './MouseBalls.css'

const THROTTLE_MS = 80
const BALL_SIZE_MIN = 6
const BALL_SIZE_MAX = 14
const MOUSE_OFFSET_Y = 15
const BURST_COUNT = 14
const BURST_DISTANCE = 90
const BURST_DURATION = 0.6
const MAX_BALLS = 50

const MouseBalls = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastTime = useRef(0)
  const reducedMotionRef = useRef(false)

  const pruneIfNeeded = useCallback(() => {
    const container = containerRef.current
    if (!container || container.children.length <= MAX_BALLS) return
    while (container.children.length > MAX_BALLS) {
      container.firstChild?.remove()
    }
  }, [])

  const createBall = useCallback((x: number, y: number) => {
    if (reducedMotionRef.current) return
    const container = containerRef.current
    if (!container) return

    pruneIfNeeded()
    const size = BALL_SIZE_MIN + Math.random() * (BALL_SIZE_MAX - BALL_SIZE_MIN)
    const ball = document.createElement('div')
    ball.className = 'mouse-ball'
    ball.setAttribute('aria-hidden', 'true')
    ball.style.left = `${x}px`
    ball.style.top = `${y}px`
    ball.style.width = `${size}px`
    ball.style.height = `${size}px`
    ball.style.animationDuration = `${0.8 + Math.random() * 0.6}s`
    ball.style.setProperty('--ball-drift', `${(Math.random() - 0.5) * 40}px`)

    const onEnd = () => ball.remove()
    ball.addEventListener('animationend', onEnd)
    container.appendChild(ball)
  }, [])

  const createBurst = useCallback((x: number, y: number) => {
    if (reducedMotionRef.current) return
    const container = containerRef.current
    if (!container) return

    while (container.children.length + BURST_COUNT > MAX_BALLS && container.firstChild) {
      container.firstChild.remove()
    }
    for (let i = 0; i < BURST_COUNT; i++) {
      const angle = (i / BURST_COUNT) * Math.PI * 2 + Math.random() * 0.4
      const dist = BURST_DISTANCE + Math.random() * 30
      const endX = Math.cos(angle) * dist
      const endY = Math.sin(angle) * dist
      const size = BALL_SIZE_MIN + Math.random() * (BALL_SIZE_MAX - BALL_SIZE_MIN)
      const duration = BURST_DURATION + Math.random() * 0.2

      const ball = document.createElement('div')
      ball.className = 'mouse-ball mouse-ball-burst'
      ball.setAttribute('aria-hidden', 'true')
      ball.style.left = `${x}px`
      ball.style.top = `${y}px`
      ball.style.width = `${size}px`
      ball.style.height = `${size}px`
      ball.style.animationDuration = `${duration}s`
      ball.style.setProperty('--ball-end-x', `${endX}px`)
      ball.style.setProperty('--ball-end-y', `${endY}px`)

      const onEnd = () => ball.remove()
      ball.addEventListener('animationend', onEnd)
      container.appendChild(ball)
    }
  }, [])

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = motionQuery.matches
    if (motionQuery.matches) return

    const handleMotionChange = () => {
      reducedMotionRef.current = motionQuery.matches
      if (motionQuery.matches && containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
    motionQuery.addEventListener('change', handleMotionChange)

    const handleMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime.current < THROTTLE_MS) return
      lastTime.current = now
      createBall(e.clientX, e.clientY + MOUSE_OFFSET_Y)
    }

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest('button, a[href], [role="button"]')
      if (!target) return
      const rect = (target as HTMLElement).getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      createBurst(centerX, centerY)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('click', handleClick)
    }
  }, [createBall, createBurst])

  return <div ref={containerRef} className="mouse-balls-container" aria-hidden="true" />
}

export default MouseBalls
