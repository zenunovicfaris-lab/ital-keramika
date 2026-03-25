'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

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

const inquiryOptions = [
  'Keramika i pločice',
  'Mermer i kamen',
  'SPC podovi',
  'Ugradnja i ljepila',
  'Alati i oprema',
  'Ostalo / Posjet salonu',
]

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.phone) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setStatus('sent')
        setFormState({ name: '', phone: '', email: '', inquiry: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'bg-white/5 border border-white/10 focus:border-ital-green text-ital-light placeholder:text-ital-muted/50 px-5 py-4 w-full outline-none transition-all font-dm text-sm'

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background - Venezia */}
      <div className="absolute inset-0">
        <img
          src="/images/Italija.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ital-darker/85" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span
              variants={fadeUp}
              className="font-barlow text-xs tracking-[0.35em] text-ital-green uppercase"
            >
              KONTAKT
            </motion.span>

            <motion.div variants={fadeUp} className="flag-line w-16 my-5" />

            <motion.h2
              variants={fadeUp}
              className="font-cormorant font-light text-ital-light text-4xl sm:text-5xl md:text-6xl leading-tight"
            >
              Posjetite nas ili pišite
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-dm font-light text-ital-light/55 text-base md:text-lg leading-relaxed mt-4 mb-10"
            >
              Stručni savjet je besplatan. Dođite u salon ili nam pišite –
              odgovaramo u roku od sat vremena.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-barlow text-[10px] tracking-[0.25em] uppercase text-ital-muted mb-2 block">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Vaše ime"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-barlow text-[10px] tracking-[0.25em] uppercase text-ital-muted mb-2 block">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  placeholder="061 123 456"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-barlow text-[10px] tracking-[0.25em] uppercase text-ital-muted mb-2 block">
                  Email (opcionalno)
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="vas@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-barlow text-[10px] tracking-[0.25em] uppercase text-ital-muted mb-2 block">
                  Vrsta upita
                </label>
                <select
                  value={formState.inquiry}
                  onChange={(e) =>
                    setFormState({ ...formState, inquiry: e.target.value })
                  }
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-ital-darker">
                    Odaberite kategoriju
                  </option>
                  {inquiryOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-ital-darker">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-barlow text-[10px] tracking-[0.25em] uppercase text-ital-muted mb-2 block">
                  Poruka
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Opišite vaš projekat ili pitanje..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-ital-green text-white font-barlow font-semibold tracking-widest uppercase text-sm px-8 py-4 w-full hover:bg-ital-darker hover:text-ital-green border border-transparent hover:border-ital-green transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending'
                  ? 'ŠALJEM...'
                  : status === 'sent'
                    ? 'PORUKA POSLANA!'
                    : 'POŠALJITE UPIT'}
              </button>

              {status === 'error' && (
                <p className="text-ital-red text-sm font-dm mt-2">
                  Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte
                  telefonom.
                </p>
              )}
            </motion.form>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col justify-center"
          >
            {/* Contact cards */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="border-l-2 border-ital-green pl-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-ital-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-dm text-ital-light text-sm">
                      Bihaćkih kapetana CB5
                    </p>
                    <p className="font-dm text-ital-muted text-sm">
                      Bihać 77000, Bosna i Hercegovina
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-ital-green pl-5">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-ital-green flex-shrink-0" />
                  <a
                    href="tel:+38761959656"
                    className="font-dm text-ital-light text-sm hover:text-ital-green transition-colors"
                  >
                    061 959 656
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-ital-green pl-5">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-ital-green flex-shrink-0" />
                  <a
                    href="mailto:Italgresbih@gmail.com"
                    className="font-dm text-ital-light text-sm hover:text-ital-green transition-colors"
                  >
                    Italgresbih@gmail.com
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-ital-green pl-5">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ital-green flex-shrink-0" />
                  <div>
                    <p className="font-dm text-ital-light text-sm">
                      Pon–Pet: 09:00–18:00
                    </p>
                    <p className="font-dm text-ital-muted text-sm">
                      Sub: 09:00–14:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-5 mt-8"
            >
              <a
                href="https://www.instagram.com/italgresbih"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ital-muted hover:text-ital-green transition-colors hover:scale-110 transform duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582162750380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ital-muted hover:text-ital-green transition-colors hover:scale-110 transform duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </motion.div>

            {/* Google Maps */}
            <motion.div variants={fadeUp} className="mt-8 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22560.1!2d15.8691!3d44.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47618ed5e3a9f0cf%3A0x99a48c40ba06d1e7!2sBiha%C4%87!5e0!3m2!1sbs!2sba!4v1699000000000"
                width="100%"
                height="240"
                style={{
                  border: 0,
                  filter: 'sepia(40%) contrast(1.1) brightness(0.7)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ital Gres lokacija – Bihać"
              />
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/38761959656"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-6 bg-ital-green/10 border border-ital-green/30 text-ital-green font-barlow tracking-widest text-sm px-6 py-4 hover:bg-ital-green hover:text-white transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-ital-green animate-pulse" />
              <MessageCircle className="w-4 h-4" />
              PIŠITE NA WHATSAPP
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
