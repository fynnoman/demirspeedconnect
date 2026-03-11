'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

const KONTAKT_ITEMS = [
  {
    label: 'ADRESSE',
    icon: '📍',
    lines: ['Talstraße 67', '66701 Beckingen'],
    href: 'https://maps.google.com/?q=Talstraße+67,+66701+Beckingen',
  },
  {
    label: 'TELEFON',
    icon: '📞',
    lines: ['01737366820'],
    href: 'tel:01737366820',
  },
  {
    label: 'E-MAIL',
    icon: '✉️',
    lines: ['info@speedconnect-demir.de'],
    href: 'mailto:info@speedconnect-demir.de',
  },
  {
    label: 'LEISTUNGEN',
    icon: '⚡',
    lines: ['Glasfaserverlegung', 'Spleißen', 'Tiefbauarbeiten', 'Hausanschlüsse'],
    href: '/leistungen',
  },
];

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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {[{ label: 'Leistungen', href: '/leistungen' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'Kontakt', href: '/kontakt' }].map(item => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <a href="tel:01737366820" className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
            JETZT ANRUFEN
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Gemini_Generated_Image_brzc8xbrzc8xbrzc.png" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/70" />
        </div>
        <motion.div className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8] z-10"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} />
        <motion.div className="text-center relative z-10" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">WIR SIND FÜR SIE DA</p>
          <h1 className="text-white font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            KON<span className="text-[#1D4ED8]">TAKT</span>
          </h1>
        </motion.div>
      </section>

      {/* Kontaktdaten */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <motion.p
            className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}>
            KONTAKTINFORMATIONEN
          </motion.p>
          <motion.h2
            className="text-[#0F172A] font-black tracking-tighter mb-16"
            style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            SPRECHEN SIE UNS AN
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {KONTAKT_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex gap-6 p-8 border border-[#EEEEEE] hover:border-[#1D4ED8] hover:bg-[#0F172A] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1 bg-[#1D4ED8] shrink-0 group-hover:w-2 transition-all duration-300" />
                <div>
                  <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.3em] mb-3">{item.label}</p>
                  {item.lines.map(line => (
                    <p key={line} className="text-[#0F172A] group-hover:text-white text-xl font-light transition-colors duration-300">{line}</p>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <a href="tel:01737366820"
              className="flex-1 py-5 bg-[#1D4ED8] text-white text-sm font-bold tracking-widest text-center hover:bg-[#0F172A] transition-colors">
              📞 01737366820
            </a>
            <a href="mailto:info@speedconnect-demir.de"
              className="flex-1 py-5 bg-white border-2 border-[#1D4ED8] text-[#1D4ED8] text-sm font-bold tracking-widest text-center hover:bg-[#1D4ED8] hover:text-white transition-colors">
              ✉️ info@speedconnect-demir.de
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-white font-black text-xl" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            DEMIR <span className="text-[#1D4ED8]">SPEEDCONNECT</span>
          </Link>
          <p className="text-xs font-light text-[#475569]">© 2026 Demir SpeedConnect</p>
          <div className="flex gap-6 text-xs font-light text-[#475569]">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
