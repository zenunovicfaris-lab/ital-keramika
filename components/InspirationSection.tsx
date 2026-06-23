'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const gallery = [
  {
    src: '/images/image-2.jpg',
    alt: 'Tamno kupatilo s mermerom',
    span: 'row-span-2',
  },
  {
    src: '/images/image-3.jpg',
    alt: 'Minimalistički interijer',
    span: '',
  },
  {
    src: '/images/image-4.jpg',
    alt: 'Luksuzna kupaonica',
    span: '',
  },
  {
    src: '/images/image-5.jpg',
    alt: 'Mermer i kamen',
    span: 'row-span-2',
  },
  {
    src: '/images/Italija.jpg',
    alt: 'Inspiracija iz Italije',
    span: '',
  },
  {
    src: '/images/image-2.jpg',
    alt: 'Detalj keramike',
    span: '',
  },
]

export default function InspirationSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' })
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-dark py-24 md:py-32 lg:py-40">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        variants={stagger}
        initial="hidden"
        animate={headingInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16"
      >
        <motion.span
          variants={fadeUp}
          className="font-barlow text-sm tracking-[0.3em] text-ital-green uppercase"
        >
          INSPIRACIJA
        </motion.span>

        <motion.div variants={fadeUp} className="flag-line w-16 mx-auto my-5" />

        <motion.h2
          variants={fadeUp}
          className="font-cormorant font-light italic text-ital-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Pronađite svoj stil
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-dm font-light text-ital-light/55 text-base md:text-lg max-w-xl mx-auto mt-5"
        >
          U salonima Ital Gres, pronaći ćete inspiraciju i rješenja za uređenje
          vašeg životnog prostora.
        </motion.p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? 'visible' : 'hidden'}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4">
          {gallery.map((image, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ital-darker/0 group-hover:bg-ital-darker/50 transition-all duration-500 flex items-end p-6">
                <span className="font-cormorant italic text-ital-light text-lg md:text-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="font-cormorant italic text-ital-light/50 text-xl md:text-2xl mb-6">
          Posjetite salon i pronađite svoju savršenu pločicu.
        </p>
        <a
          href="#kontakt"
          className="inline-block border border-ital-green/50 text-ital-green font-barlow font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-ital-green hover:text-white transition-all duration-300"
        >
          ZAKAŽITE POSJETU
        </a>
      </div>
    </div>
  )
}
