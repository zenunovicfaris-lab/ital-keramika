'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'O NAMA', href: '#o-nama' },
  { label: 'BRENDOVI', href: '#brendovi' },
  { label: 'MATERIJALI', href: '#materijali' },
  { label: 'UGRADNJA', href: '#ugradnja' },
  { label: 'INSPIRACIJA', href: '#inspiracija' },
  { label: 'KONTAKT', href: '#kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ital-darker/95 backdrop-blur-md border-b border-white/5'
          : 'bg-ital-darker/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Ital Gres"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-barlow font-semibold text-sm tracking-[0.15em] uppercase text-ital-light/70 hover:text-ital-light transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-ital-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/38761959656"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ital-green/50 text-ital-green font-barlow font-semibold text-xs px-4 py-2 hover:bg-ital-green hover:text-white transition-all duration-300 tracking-widest uppercase flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WHATSAPP
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ital-light/70 hover:text-ital-light transition-colors p-2"
            aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Flag line */}
      <div className="flag-line w-full" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-ital-darker/98 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-ital-light/70 hover:text-ital-light p-2"
              aria-label="Zatvori meni"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="font-cormorant text-4xl text-ital-light/80 hover:text-ital-light transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me/38761959656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ital-green hover:text-ital-light transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/italgresbih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ital-muted hover:text-ital-light transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
              <div className="flag-line w-24" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
