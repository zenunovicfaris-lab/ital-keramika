'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LogoLoop from './LogoLoop'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const logos = [
  { src: '/brendovi/Atlas-Concorde.png', alt: 'Atlas Concorde' },
  { src: '/brendovi/Casalgrande-Padana.png', alt: 'Casalgrande Padana' },
  { src: '/brendovi/Ceresit.png', alt: 'Ceresit' },
  { src: '/brendovi/Florim.png', alt: 'Florim' },
  { src: '/brendovi/Kubala.png', alt: 'Kubala' },
  { src: '/brendovi/Marazzi.png', alt: 'Marazzi' },
  { src: '/brendovi/Rofix.png', alt: 'Rofix' },
  { src: '/brendovi/TKK.png', alt: 'TKK' },
]

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-darker py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-12"
      >
        <motion.span
          variants={fadeUp}
          className="font-barlow text-sm tracking-[0.3em] text-ital-muted uppercase"
        >
          BRENDOVI KOJE ZASTUPAMO
        </motion.span>

        <motion.div variants={fadeUp} className="flag-line w-16 mx-auto my-5" />

        <motion.p
          variants={fadeUp}
          className="font-cormorant italic text-ital-light/60 text-2xl"
        >
          Isključivo talijanski i europski proizvođači premium kvaliteta
        </motion.p>
      </motion.div>

      <LogoLoop
        logos={logos}
        speed={80}
        direction="left"
        logoHeight={56}
        gap={80}
        pauseOnHover
        hoverSpeed={0}
        fadeOut
        fadeOutColor="#2e2620"
        scaleOnHover
        ariaLabel="Brendovi keramike koje zastupamo"
      />
    </div>
  )
}
