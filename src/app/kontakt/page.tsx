'use client';

// ============================================================
// PLATZHALTER – Kontakt-Seite
// ============================================================

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function KontaktPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav – Logo & Links anpassen */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          FIRMEN <span className="text-[#E63329]">NAME</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {[{ label: 'Leistungen', href: '/leistungen' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'Kontakt', href: '/kontakt' }].map(item => (
            <Link key={item.href} href={item.href} className="text-[#AAAAAA] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <a href="https://www.beispiel.de" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-[#E63329] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors">
            CTA BUTTON
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] bg-[#111111] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#E63329 1px, transparent 1px), linear-gradient(90deg, #E63329 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#E63329]"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />
        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-6">WIR SIND FÜR SIE DA</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            KON<span className="text-[#E63329]">TAKT</span>
          </h1>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info – Kontaktdaten anpassen */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-8">KONTAKTINFORMATIONEN</p>
              <div className="space-y-8">
                {[
                  {
                    label: 'ADRESSE',
                    content: <><p>Straße Nr.</p><p>PLZ Ort</p></>,
                  },
                  {
                    label: 'TELEFON',
                    content: <a href="tel:+00000000000" className="hover:text-[#E63329] transition-colors">00000 – 000000</a>,
                  },
                  {
                    label: 'E-MAIL',
                    content: <a href="mailto:info@beispiel.de" className="hover:text-[#E63329] transition-colors">info@beispiel.de</a>,
                  },
                  {
                    label: 'WEBSITE',
                    content: <a href="https://www.beispiel.de" target="_blank" rel="noopener noreferrer" className="text-[#E63329] hover:text-[#111111] transition-colors">www.beispiel.de ↗</a>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6 border-b border-[#EEEEEE] pb-6">
                    <div className="w-1 bg-[#E63329] shrink-0" />
                    <div>
                      <p className="text-[#111111] text-xs font-bold tracking-[0.3em] mb-2">{item.label}</p>
                      <div className="text-[#555555] font-light">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links – anpassen */}
              <div className="mt-12 p-8 bg-[#111111]">
                <h3 className="text-white font-black text-lg tracking-tight mb-4" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  SCHNELL-LINKS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Leistung 1', href: '/leistungen' },
                    { label: 'Leistung 2', href: '/leistungen' },
                    { label: 'Website', href: 'https://www.beispiel.de', external: true },
                    { label: 'Über uns', href: '/ueber-uns' },
                  ].map((link) => (
                    <a key={link.label} href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-[#888888] hover:text-[#E63329] text-sm font-light transition-colors py-1 flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#E63329]" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="bg-[#111111] p-12"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#E63329] text-xs tracking-[0.4em] font-bold mb-3">ANFRAGE SENDEN</p>
              <h3 className="text-white text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                WIR MELDEN<br />UNS SCHNELL
              </h3>
              <p className="text-[#888888] text-sm mb-8 font-light">
                Kurzer Begleittext zum Kontaktformular.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Vorname"
                    className="px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors text-sm" />
                  <input type="text" placeholder="Nachname"
                    className="px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors text-sm" />
                </div>
                <input type="email" placeholder="E-Mail-Adresse"
                  className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors text-sm" />
                <input type="tel" placeholder="Telefon (optional)"
                  className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors text-sm" />
                {/* Dropdown-Optionen anpassen */}
                <select className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-[#555555] outline-none focus:border-[#E63329] transition-colors text-sm appearance-none">
                  <option value="">Thema auswählen</option>
                  <option>Leistung 1</option>
                  <option>Leistung 2</option>
                  <option>Leistung 3</option>
                  <option>Sonstiges</option>
                </select>
                <textarea placeholder="Ihre Anfrage"
                  rows={5}
                  className="w-full px-4 py-4 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#555555] outline-none focus:border-[#E63329] transition-colors resize-none text-sm" />
                <button className="w-full py-4 bg-[#E63329] text-white font-bold tracking-widest hover:bg-white hover:text-[#E63329] transition-colors text-sm">
                  ANFRAGE ABSENDEN
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 border-t border-[#222222]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-white font-black text-xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            FIRMEN <span className="text-[#E63329]">NAME</span>
          </Link>
          <p className="text-xs font-light text-[#555555]">© 2026 Firmenname · Inhabername</p>
          <div className="flex gap-6 text-xs font-light text-[#555555]">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
