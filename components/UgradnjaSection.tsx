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

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const ugradnja = [
  {
    brand: 'Ceresit',
    items: [
      'Fleksibilna ljepila C2TE',
      'Fugirne mase CE 40',
      'Hidroizolacija CL 51',
      'Prajmeri i adhezivi',
    ],
  },
  {
    brand: 'TKK',
    items: [
      'PU pjene za prozore',
      'MS polimer silikoni',
      'Akrilne mase',
      'Kontaktna ljepila',
    ],
  },
  {
    brand: 'Rofix',
    items: [
      'Sistemi za fasade',
      'Termoizolacija',
      'Žbuke i glazure',
    ],
  },
]

export default function UgradnjaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-dark grain relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/image-3.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.07]"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <img
              src="/images/image-3.jpg"
              alt="Profesionalna ugradnja keramike"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />

            {/* Ceresit floating card */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-ital-darker border border-ital-green/30 p-6 w-60 md:w-64 shadow-2xl"
            >
              <img
                src="/brendovi/Ceresit.png"
                alt="Ceresit"
                className="h-8 w-auto mb-3"
              />
              <p className="font-dm text-xs text-ital-light/60 leading-relaxed">
                Generalni zastupnik Ceresit ljepila i fugirnih masa za
                profesionalnu ugradnju.
              </p>
            </motion.div>

            {/* TKK floating card */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute -top-6 -left-4 md:-left-6 bg-ital-darker border border-ital-gold/30 p-4 w-48 md:w-52 shadow-2xl"
            >
              <img
                src="/brendovi/TKK.png"
                alt="TKK"
                className="h-6 w-auto mb-2"
              />
              <p className="font-dm text-xs text-ital-light/50">
                PUR pjene, silikoni, akrilne mase
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span
              variants={fadeUp}
              className="font-barlow text-xs tracking-[0.35em] text-ital-green uppercase"
            >
              PROFESIONALNA UGRADNJA
            </motion.span>

            <motion.div variants={fadeUp} className="flag-line w-16 my-5" />

            <motion.h2
              variants={fadeUp}
              className="font-cormorant font-light text-ital-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Sve za savršenu ugradnju –{' '}
              <em className="italic">pod jednim krovom</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-dm font-light text-ital-light/65 text-base md:text-lg leading-relaxed mt-6"
            >
              Pored premium keramike, nudimo kompletan asortiman za profesionalnu
              ugradnju. Od ljepila i fugirnih masa do hidroizolacije i PU pjena –
              sve na jednom mjestu.
            </motion.p>

            {/* Product lists */}
            <motion.div variants={fadeUp} className="mt-8 space-y-0">
              {ugradnja.map((group) => (
                <div
                  key={group.brand}
                  className="border-t border-ital-green/20 pt-5 mt-5 first:border-t-0 first:mt-0 first:pt-0"
                >
                  <h3 className="font-barlow uppercase tracking-widest text-ital-gold text-sm mb-3">
                    {group.brand}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-ital-green text-xs mt-1">
                          &#9679;
                        </span>
                        <span className="font-dm text-sm text-ital-light/60">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
