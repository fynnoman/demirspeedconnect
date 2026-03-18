'use client';

// ============================================================
// PLATZHALTER – Über uns-Seite
// ============================================================

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Lenis from 'lenis';

// --- Ticker-Begriffe anpassen ---
const TICKER_WORDS = ['GLASFASER', 'SPLEISSEN', 'TIEFBAU', 'HAUSANSCHLÜSSE', 'QUALITÄT', 'PRÄZISION', 'SCHNELLIGKEIT', 'KOMPETENZ'];

// --- Zahlen / Fakten anpassen ---
const ZAHLEN = [
  { number: '4', label: 'Kernleistungen' },
  { number: '100%', label: 'Qualitätsanspruch' },
  { number: '24/7', label: 'Erreichbarkeit' },
  { number: '∞', label: 'Zuverlässigkeit' },
];

export default function UeberUns() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    let rafId: number;
    function raf(time: number) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const NAV_LINKS = [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)} />
            <motion.div className="fixed top-0 right-0 h-full w-72 bg-[#0F172A] z-50 flex flex-col p-8 border-l border-[#1E293B]"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}>
              <button onClick={() => setMenuOpen(false)} className="self-end mb-10 text-[#94A3B8] hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                    className="text-white text-xl font-bold tracking-wider border-b border-[#1E293B] pb-4 hover:text-[#1D4ED8] transition-colors">
                    {item.label}
                  </Link>
                ))}
                <a href="/kontakt" onClick={() => setMenuOpen(false)}
                  className="mt-4 px-6 py-4 bg-[#1D4ED8] text-white text-sm font-bold tracking-widest text-center hover:bg-white hover:text-[#1D4ED8] transition-colors">
                  ANGEBOT ANFRAGEN
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/">
          <Image src="/AB257105-9CE0-457F-8EA2-47E07C066099.png" alt="Demir SpeedConnect" width={140} height={40} priority className="h-10 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(item => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <a href="/kontakt" className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
            ANGEBOT ANFRAGEN
          </a>
        </div>
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        {/* Konzentrische Kreise – Signalwellen */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[200, 360, 520, 680, 840, 1000, 1160].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-[#1D4ED8]"
              style={{ width: size, height: size, opacity: Math.max(0.03, 0.22 - size * 0.00015) }}
            />
          ))}
        </div>
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(29,78,216,0.30) 0%, rgba(29,78,216,0.08) 40%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40" />
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8] z-10"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />
        <motion.div className="text-center relative z-10 px-6" style={{ y: titleY, opacity: titleOpacity, willChange: 'transform, opacity' }}>
          <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">WER WIR SIND</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 10vw, 11rem)' }}>
            ÜBER <span className="text-[#1D4ED8]">UNS</span>
          </h1>
          <p className="text-[#94A3B8] text-base lg:text-lg mt-6">Demir SpeedConnect – Glasfaser & Tiefbau</p>
        </motion.div>
      </section>

      {/* Intro – Texte anpassen */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }} viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">UNSERE GESCHICHTE</p>
              <h2 className="text-[#0F172A] text-4xl lg:text-7xl font-black leading-none tracking-tighter mb-8"
                style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                DEMIR<br />SPEED<br /><span className="text-[#1D4ED8]">CONNECT</span>
              </h2>
              <div className="w-16 h-1 bg-[#1D4ED8] mb-8" />
              <p className="text-[#475569] text-base lg:text-lg leading-relaxed font-light mb-4">
                Demir SpeedConnect steht für professionelle Glasfaser-Infrastruktur aus einer Hand. Wir verlegen Glasfaserkabel, führen Spleißarbeiten durch und realisieren Tiefbauarbeiten – termingerecht und auf höchstem handwerklichem Niveau.
              </p>
              <p className="text-[#475569] text-base lg:text-lg leading-relaxed font-light">
                Von der ersten Schaufelspitze bis zum fertigen Hausanschluss begleiten wir jedes Projekt mit voller Leidenschaft. Unser Team bringt das schnelle Internet direkt zu Ihnen.
              </p>
            </motion.div>

            <motion.div className="flex items-center justify-center"
              initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }} viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/Gemini_Generated_Image_brzc8xbrzc8xbrzc.png"
                  alt="Demir SpeedConnect"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 500px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker – TICKER_WORDS oben anpassen */}
      <section className="bg-[#1D4ED8] py-16 lg:py-20 overflow-hidden">
        <motion.div className="whitespace-nowrap"
          animate={{ x: [0, '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          {[...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
            <span key={i} className="text-white font-black text-4xl lg:text-7xl tracking-tighter mr-12 inline-block"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              {w}&nbsp;·&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* Zahlen – ZAHLEN oben anpassen */}
      <section className="py-20 lg:py-32 bg-[#0F172A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {ZAHLEN.map((item, i) => (
              <motion.div key={item.label} className="text-center border border-[#1E293B] p-6 lg:p-8"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }} viewport={{ once: true }}>
                <p className="text-[#1D4ED8] font-black mb-2"
                  style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                  {item.number}
                </p>
                <p className="text-[#94A3B8] text-sm tracking-wider font-light">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adresse CTA – Kontaktdaten anpassen */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            BESUCHEN SIE UNS
          </motion.p>
          <motion.h2 className="text-[#0F172A] font-black leading-none tracking-tighter mb-10"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2rem, 7vw, 8rem)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}>
            FINDEN SIE <span className="text-[#1D4ED8]">UNS</span>
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-[#475569] text-base font-light">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1D4ED8] shrink-0" />
              <span>Talstraße 67, 66701 Beckingen</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1D4ED8] shrink-0" />
              <a href="tel:01737366820" className="hover:text-[#1D4ED8] transition-colors">0173 7366820</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1D4ED8] shrink-0" />
              <a href="mailto:info@speedconnect-demir.de" className="hover:text-[#1D4ED8] transition-colors">info@speedconnect-demir.de</a>
            </div>
          </div>
          <motion.div className="mt-10"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <Link href="/kontakt" className="inline-block px-10 py-4 bg-[#1D4ED8] text-white font-bold tracking-widest text-sm hover:bg-[#0F172A] transition-colors">
              NACHRICHT SENDEN
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/">
            <Image src="/AB257105-9CE0-457F-8EA2-47E07C066099.png" alt="Demir SpeedConnect" width={120} height={40} loading="lazy" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-xs font-light text-[#475569]">© 2026 Demir SpeedConnect UG (haftungsbeschränkt)</p>
          <div className="flex gap-6 text-xs font-light text-[#475569]">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-[#94A3B8]">
          designed by fylu - marketing <a href="https://fylumarketing.de" className="underline hover:text-white">fylumarketing.de</a>
        </div>
      </footer>
    </div>
  );
}
