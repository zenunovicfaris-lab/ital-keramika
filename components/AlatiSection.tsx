'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const kubalaAlati = [
  {
    category: 'Ručni alati',
    items: [
      'Zupčaste gletarice (sve veličine)',
      'Mistrije i špahtele',
      'Čekići za keramiku',
      'Mjerne letve i libele',
    ],
  },
  {
    category: 'Rezanje i obrađivanje',
    items: [
      'Mokre pile za keramiku',
      'Ugaone brusilice',
      'Dijamantske krunaste svrdla',
      'Pločice rezači – manualni',
    ],
  },
  {
    category: 'Pomagala za ugradnju',
    items: [
      'DLS sistemi za poravnanje',
      'Razupirači i klinovi',
      'Vakuumski podizači',
      'Gumeni čekići i podloge',
    ],
  },
]

export default function AlatiSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-darker overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span
              variants={slideLeft}
              className="font-barlow text-xs tracking-[0.35em] text-ital-green uppercase"
            >
              PROFESIONALNA OPREMA
            </motion.span>

            <motion.div variants={slideLeft} className="flag-line w-16 my-5" />

            <motion.h2
              variants={fadeUp}
              className="font-cormorant font-light text-ital-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Alati koji prate{' '}
              <em className="italic">kvalitet</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-dm font-light text-ital-light/65 text-base md:text-lg leading-relaxed mt-6"
            >
              Kubala alati – omiljena oprema profesionalnih keramičara. Od
              gletarica do elektromotornih alata – sve što vam treba za savršenu
              ugradnju.
            </motion.p>

            {/* Tool Categories Grid */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-3 gap-4 mt-10"
            >
              {kubalaAlati.map((group) => (
                <div
                  key={group.category}
                  className="bg-ital-dark p-6 border-t-2 border-ital-gold"
                >
                  <h3 className="font-barlow uppercase tracking-widest text-ital-gold text-xs mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-ital-green text-xs mt-1">
                          &#9679;
                        </span>
                        <span className="font-dm text-sm text-ital-light/60">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Kubala Brand Showcase */}
            <motion.div
              variants={fadeUp}
              className="mt-12 border border-ital-gold/20 p-8 flex flex-col md:flex-row items-center gap-8"
            >
              <img
                src="/brendovi/Kubala.png"
                alt="Kubala"
                className="h-12 w-auto opacity-80"
              />
              <div className="hidden md:block w-px h-16 bg-ital-gold/20" />
              <p className="font-cormorant italic text-ital-light/70 text-xl text-center md:text-left">
                &ldquo;Kubala – izbor profesionalnih keramičara već desetljećima.
                Sve što vam treba za savršenu ugradnju.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative overflow-hidden"
          >
            <img
              src="/images/image-4.jpg"
              alt="Profesionalni alati za keramiku"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ital-darker/60" />
            <div className="absolute bottom-6 left-6 bg-ital-dark/80 backdrop-blur px-4 py-2 border-l-2 border-ital-gold">
              <span className="font-barlow text-xs tracking-widest text-ital-gold uppercase">
                Kubala Professional Tools
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
