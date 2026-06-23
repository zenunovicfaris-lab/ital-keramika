'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

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

interface MaterialData {
  tag: string
  title: string
  subtitle: string
  desc: string
  features: string[]
  image: string
  brand: string
  accent: string
  layout: 'image-left' | 'image-right'
}

const materials: MaterialData[] = [
  {
    tag: 'MERMER I PRIRODNI KAMEN',
    title: 'Vječna elegancija mermera',
    subtitle: 'Atlas Marvel · Calacatta · Statuario',
    desc: 'Veliki formati do 280cm. Bookmatching efekti. Svaka pločica je jedinstvena – kao prirodno remek-djelo.',
    features: [
      'Formati do 120×280cm',
      'Polirana i mat površina',
      'Unutrašnji i vanjski prostori',
      'Otpornost na vlagu i habanje',
    ],
    image: '/images/image-5.jpg',
    brand: 'Atlas Concorde · Marazzi',
    accent: 'ital-green',
    layout: 'image-left',
  },
  {
    tag: 'SPC I VINILNE PLOČICE',
    title: 'Toplo drvo, moderna tehnologija',
    subtitle: 'SPC Click · Luxury Vinyl · Waterproof',
    desc: 'Vodootporni SPC podovi koji imitiraju drvo i beton. Idealni za mokre prostorije i podove s grijanjem.',
    features: [
      '100% vodootporni',
      'Kompatibilni s podnim grijanjem',
      'Jednostavna ugradnja click sistemom',
      'Antiklizna površina',
    ],
    image: '/images/image-3.jpg',
    brand: 'Florim · Casalgrande Padana',
    accent: 'ital-gold',
    layout: 'image-right',
  },
  {
    tag: 'MOZAICI I DEKORATIVNE PLOČICE',
    title: 'Detalj koji sve mijenja',
    subtitle: 'Stakleni · Kameni · Metalni mozaici',
    desc: 'Ručno izrađeni mozaici, 3D dekoracije, metalik završnice. Za onaj jedan zid koji postaje fokusna točka prostora.',
    features: [
      'Stakleni i kameni mozaici',
      '3D reljefne površine',
      'Metalik i perlasti efekti',
      'Po mjeri za svaki projekt',
    ],
    image: '/images/image-2.jpg',
    brand: 'Atlas Concorde · Marazzi',
    accent: 'ital-red',
    layout: 'image-left',
  },
  {
    tag: 'KERAMIKA ZA KUPATILA I KUHINJE',
    title: 'Dizajn koji inspiriše',
    subtitle: 'Sanitarna keramika · Kuhinjske pločice',
    desc: 'Od minimalističke bijele do dramatičnih tamnih tonova – naš asortiman pokriva sve stilove modernog interijera.',
    features: [
      'Antibakterijska obrada',
      'Lako čišćenje nano premazom',
      'Koordinirani setovi poda i zida',
      'Matte, satin i polished finishes',
    ],
    image: '/images/image-4.jpg',
    brand: 'Florim · Ceresit fugiranje',
    accent: 'ital-green',
    layout: 'image-right',
  },
]

function accentColor(accent: string): string {
  switch (accent) {
    case 'ital-gold':
      return '#c9a96e'
    case 'ital-red':
      return '#e62031'
    default:
      return '#039250'
  }
}

function accentTextClass(accent: string): string {
  switch (accent) {
    case 'ital-gold':
      return 'text-ital-gold'
    case 'ital-red':
      return 'text-ital-red'
    default:
      return 'text-ital-green'
  }
}

function accentBorderClass(accent: string): string {
  switch (accent) {
    case 'ital-gold':
      return 'border-ital-gold'
    case 'ital-red':
      return 'border-ital-red'
    default:
      return 'border-ital-green'
  }
}

function MaterialPanel({ material, index }: { material: MaterialData; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isImageLeft = material.layout === 'image-left'

  const imageSlide = isImageLeft ? slideLeft : slideRight
  const contentSlide = isImageLeft ? slideRight : slideLeft

  const imageBlock = (
    <motion.div
      variants={imageSlide}
      className="relative lg:w-1/2 min-h-[50vh] lg:min-h-[90vh] overflow-hidden"
    >
      <img
        src={material.image}
        alt={material.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 ${
          isImageLeft
            ? 'bg-gradient-to-r from-transparent to-ital-darker/80'
            : 'bg-gradient-to-l from-transparent to-ital-darker/80'
        }`}
      />
      <div
        className={`absolute bottom-6 left-6 bg-ital-dark/80 backdrop-blur px-4 py-2 border-l-2 ${accentBorderClass(material.accent)}`}
      >
        <span
          className={`font-barlow text-xs tracking-widest ${accentTextClass(material.accent)} uppercase`}
        >
          {material.brand}
        </span>
      </div>
    </motion.div>
  )

  const contentBlock = (
    <motion.div
      variants={stagger}
      className="lg:w-1/2 px-8 md:px-16 lg:px-20 py-16 flex flex-col justify-center"
    >
      <motion.span
        variants={contentSlide}
        className={`font-barlow text-xs tracking-[0.35em] uppercase ${accentTextClass(material.accent)}`}
      >
        {material.tag}
      </motion.span>

      <motion.div
        variants={contentSlide}
        className="flag-line w-16 my-5"
      />

      <motion.h2
        variants={fadeUp}
        className="font-cormorant font-light text-ital-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        {material.title}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className={`font-barlow text-sm tracking-widest uppercase mt-3 ${accentTextClass(material.accent)}`}
      >
        {material.subtitle}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="font-dm font-light text-ital-light/70 text-base md:text-lg leading-relaxed mt-5"
      >
        {material.desc}
      </motion.p>

      <motion.ul variants={fadeUp} className="mt-6 space-y-3">
        {material.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: accentColor(material.accent) }}
            />
            <span className="font-dm text-sm text-ital-light/60">
              {feature}
            </span>
          </li>
        ))}
      </motion.ul>

      <motion.div variants={fadeUp} className="mt-8">
        <a
          href="#kontakt"
          className={`inline-block border ${accentBorderClass(material.accent)}/50 ${accentTextClass(material.accent)} font-barlow font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-ital-green hover:text-white hover:border-ital-green transition-all duration-300`}
        >
          POGLEDAJ KOLEKCIJU
        </a>
      </motion.div>
    </motion.div>
  )

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`flex flex-col ${
        isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } min-h-[90vh] items-center ${index > 0 ? 'border-t border-white/5' : ''}`}
    >
      {imageBlock}
      {contentBlock}
    </motion.div>
  )
}

export default function MaterialsSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <div className="bg-ital-darker">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? 'visible' : 'hidden'}
        variants={stagger}
        className="text-center py-24 md:py-32"
      >
        <motion.span
          variants={fadeUp}
          className="font-barlow text-sm tracking-[0.3em] text-ital-green uppercase"
        >
          NAŠI MATERIJALI
        </motion.span>

        <motion.div
          variants={fadeUp}
          className="flag-line w-24 mx-auto my-4"
        />

        <motion.h2
          variants={fadeUp}
          className="font-cormorant font-light text-ital-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Svaki prostor zasluži
          <br />
          <em className="italic">savršen materijal</em>
        </motion.h2>
      </motion.div>

      {/* Material Panels */}
      {materials.map((material, index) => (
        <MaterialPanel key={material.tag} material={material} index={index} />
      ))}
    </div>
  )
}
