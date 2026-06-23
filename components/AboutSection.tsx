'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

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

const stats = [
  { number: '8', label: 'Premium brendova', suffix: '' },
  { number: '500', label: 'Modela u salonu', suffix: '+' },
  { number: '15', label: 'Godina iskustva', suffix: '+' },
  { number: '100', label: 'Zadovoljnih projekata', suffix: '+' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-dark grain relative overflow-hidden">
      <div ref={ref} className="grid lg:grid-cols-[1fr_1.3fr] gap-0 min-h-[700px]">
        {/* Left - Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 p-10 md:p-16 lg:p-24 flex flex-col justify-center"
        >
          <motion.span
            variants={slideLeft}
            className="font-barlow text-xs tracking-[0.35em] text-ital-green uppercase"
          >
            O NAMA
          </motion.span>

          <motion.div variants={slideLeft} className="flag-line w-16 my-5" />

          <motion.h2
            variants={slideLeft}
            className="font-cormorant font-light text-ital-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            Talijanska <em className="italic">strast</em>
            <br />
            prema <strong className="font-bold">dizajnu</strong>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-dm font-light text-ital-light/65 text-base md:text-lg leading-relaxed mt-6"
          >
            Ital Gres je salon keramike u Bihaću koji donosi Italiju na vaša
            vrata. Biramo isključivo brendove koji su sinonim za kvalitet,
            trajnost i estetiku – Atlas Concorde, Florim, Marazzi, Casalgrande
            Padana.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-dm font-light text-ital-light/55 text-base leading-relaxed mt-4"
          >
            Od rustikalnog kamena do poliranog mermera, od klasičnog bijelog do
            avangardnih formata 120×280cm – naš asortiman pokriva svaki stil i
            svaki budžet.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 mt-10"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-ital-green pl-4"
              >
                <span className="font-cormorant font-bold text-4xl text-ital-gold">
                  {stat.number}
                  {stat.suffix}
                </span>
                <p className="font-barlow text-xs text-ital-muted uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Images */}
        <div className="relative grid grid-rows-2 min-h-[500px] lg:min-h-0">
          <div className="relative overflow-hidden">
            <img
              src="/images/image-5.jpg"
              alt="Premium keramika"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/images/image-4.jpg"
              alt="Luksuzni enterijer"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-ital-darker/70 flex items-end p-8">
              <p className="font-cormorant italic text-ital-light text-xl md:text-2xl leading-snug">
                &ldquo;Keramika nije samo pod – ona je temelj vašeg
                interijera.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
