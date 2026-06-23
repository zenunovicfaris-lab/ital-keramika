'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: '-100px' })
  const { scrollY } = useScroll()
  const videoParallax = useTransform(scrollY, [0, 500], [0, 120])

  return (
    <div ref={sectionRef} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y: videoParallax }} className="absolute inset-0 scale-110">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/ital-gres-hero.mp4"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ital-darker/90 via-ital-dark/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ital-darker/80 via-transparent to-ital-darker/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          ref={contentRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full"
        >
          {/* Tag */}
          <motion.div variants={fadeIn}>
            <span className="font-barlow text-xs tracking-[0.35em] uppercase text-ital-green">
              &#10022; Made in Italy &middot; Premium Asortiman
            </span>
          </motion.div>

          {/* Flag line */}
          <motion.div variants={fadeIn} className="flag-line w-20 my-4" />

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-cormorant font-light text-ital-light leading-[0.9] text-5xl sm:text-6xl md:text-8xl lg:text-[108px] tracking-tight"
          >
            Dobro došli
            <br />
            <em className="font-normal not-italic">u svijet</em>
            <br />
            <span className="font-bold">talijanske</span>
            <br />
            keramike.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-dm font-light text-ital-light/65 text-lg md:text-xl max-w-md leading-relaxed mt-6"
          >
            Premium asortiman direktno iz Italije. Stručna ugradnja. Bezvremenski
            dizajn za vaš prostor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <a
              href="#materijali"
              className="bg-ital-green text-white font-barlow font-semibold tracking-widest uppercase text-sm px-8 py-4 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(3,146,80,0.5)] transition-all duration-300"
            >
              POGLEDAJ MATERIJALE
            </a>
            <a
              href="#kontakt"
              className="border border-ital-light/30 text-ital-light font-barlow font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-ital-gold hover:text-ital-gold transition-all duration-300"
            >
              KONTAKTIRAJTE NAS
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-ital-darker/60 backdrop-blur-sm z-10">
        <div className="flag-line" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between gap-4">
          <span className="font-barlow text-xs tracking-widest text-ital-light/50 uppercase">
            &#128205; Bihaćkih kapetana CB5, Bihać
          </span>
          <span className="font-barlow text-xs tracking-widest text-ital-light/50 uppercase">
            &#128222; 061 959 656
          </span>
          <span className="font-barlow text-xs tracking-widest text-ital-light/50 uppercase">
            &#10022; Atlas Concorde &middot; Florim &middot; Marazzi
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-barlow text-[10px] tracking-[0.3em] text-ital-light/30 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-ital-light/30 to-transparent" />
      </div>
    </div>
  )
}
