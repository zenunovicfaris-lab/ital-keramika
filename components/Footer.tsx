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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Brendovi', href: '#brendovi' },
  { label: 'Materijali', href: '#materijali' },
  { label: 'Ugradnja', href: '#ugradnja' },
  { label: 'Inspiracija', href: '#inspiracija' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref} className="bg-ital-darker">
      {/* Top flag line */}
      <div className="flag-line w-full" style={{ height: '3px' }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20"
      >
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Logo & Social */}
          <motion.div variants={fadeUp}>
            <img
              src="/logo.png"
              alt="Ital Gres"
              className="h-14 w-auto mb-4"
            />
            <p className="font-cormorant italic text-ital-light/50 text-lg leading-relaxed mb-6">
              Premium salon talijanske keramike u srcu Bihaća. Kvalitet koji se
              vidi i osjeti.
            </p>
            <div className="flag-line w-16 mb-6" />
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/italgresbih"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ital-muted hover:text-ital-green hover:scale-115 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582162750380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ital-muted hover:text-ital-green hover:scale-115 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div variants={fadeUp}>
            <h3 className="font-barlow font-semibold text-xs tracking-widest text-ital-muted uppercase mb-6">
              SALON KERAMIKE
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-dm text-sm text-ital-light/50 hover:text-ital-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="font-barlow font-semibold text-xs tracking-widest text-ital-muted uppercase mb-6">
              KONTAKTIRAJTE NAS
            </h3>
            <ul className="space-y-3 font-dm text-sm text-ital-light/50">
              <li>Bihaćkih kapetana CB5</li>
              <li>Bihać 77000, BiH</li>
              <li>
                <a
                  href="tel:+38761959656"
                  className="hover:text-ital-light transition-colors"
                >
                  061 959 656
                </a>
              </li>
              <li>
                <a
                  href="mailto:Italgresbih@gmail.com"
                  className="hover:text-ital-light transition-colors"
                >
                  Italgresbih@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/38761959656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ital-green hover:text-ital-light transition-colors"
                >
                  WhatsApp &rarr;
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="flag-line w-full" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-wrap justify-between items-center gap-4">
        <p className="font-barlow text-[10px] tracking-widest text-ital-muted/40 uppercase">
          &copy; 2025 Ital Gres – Salon Keramike. Sva prava zadržana.
        </p>
        <p className="font-barlow text-[10px] tracking-widest text-ital-muted/40 uppercase">
          Made in Italy &middot; Installed in Bosnia
        </p>
      </div>
    </footer>
  )
}
