'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import './LogoLoop.css'

interface LogoItem {
  src: string
  alt: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 80,
  direction = 'left',
  logoHeight = 56,
  gap = 80,
  pauseOnHover = false,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor = '#2e2620',
  scaleOnHover = false,
  ariaLabel = 'Logo carousel',
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const posRef = useRef(0)
  const lastTimeRef = useRef(0)
  const [isHovered, setIsHovered] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)

  const currentSpeed = isHovered && pauseOnHover ? hoverSpeed : speed
  const dirMultiplier = direction === 'left' ? -1 : 1

  const animate = useCallback(
    (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      posRef.current += currentSpeed * delta * dirMultiplier

      if (listRef.current) {
        const listWidth = listRef.current.scrollWidth
        if (direction === 'left' && posRef.current <= -listWidth) {
          posRef.current += listWidth
        } else if (direction === 'right' && posRef.current >= 0) {
          posRef.current -= listWidth
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    },
    [currentSpeed, dirMultiplier, direction]
  )

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [animate])

  const classNames = [
    'logoloop',
    fadeOut && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
  ]
    .filter(Boolean)
    .join(' ')

  const style = {
    '--logoloop-gap': `${gap / 2}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOut && fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
  } as React.CSSProperties

  const renderList = (key: string) => (
    <ul className="logoloop__list" ref={key === 'a' ? listRef : undefined}>
      {logos.map((logo, i) => (
        <li key={`${key}-${i}`} className="logoloop__item">
          <img src={logo.src} alt={logo.alt} loading="lazy" />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={classNames}
      style={style}
      aria-label={ariaLabel}
      role="marquee"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logoloop__track" ref={trackRef}>
        {renderList('a')}
        {renderList('b')}
        {renderList('c')}
      </div>
    </div>
  )
}
