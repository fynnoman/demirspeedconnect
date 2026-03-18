'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Impressum() {
  const [menuOpen, setMenuOpen] = useState(false);
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
                <Link href="/kontakt" onClick={() => setMenuOpen(false)}
                  className="mt-4 px-6 py-4 bg-[#1D4ED8] text-white text-sm font-bold tracking-widest text-center hover:bg-white hover:text-[#1D4ED8] transition-colors">
                  ANGEBOT ANFRAGEN
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        <Link href="/">
          <Image src="/Gemini_Generated_Image_e9xku7e9xku7e9xk.png" alt="Demir SpeedConnect" width={140} height={40} priority className="h-10 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(item => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <Link href="/kontakt"
            className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
            ANGEBOT ANFRAGEN
          </Link>
        </div>
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-36 pb-20">
        <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-4">RECHTLICHES</p>
        <h1 className="text-[#0F172A] font-black tracking-tighter mb-12"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          IMPRESSUM
        </h1>

        <div className="space-y-10 text-[#475569]">

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">ANGABEN GEMÄSS § 5 DDG</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1 text-sm font-light">
              <p className="text-[#0F172A] font-bold">Demir SpeedConnect UG (haftungsbeschränkt)</p>
              <p>Talstraße 67</p>
              <p>66701 Beckingen</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">HANDELSREGISTER</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1 text-sm font-light">
              <p>Handelsregister: <span className="text-[#0F172A] font-semibold">HRB 111710</span></p>
              <p>Registergericht: Amtsgericht Saarbrücken</p>
              <p>Vertreten durch: <span className="text-[#0F172A] font-semibold">Adem Demir</span> (Geschäftsführer)</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">KONTAKT</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1 text-sm font-light">
              <p>Telefon: <a href="tel:01737366820" className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">0173 7366820</a></p>
              <p>E-Mail: <a href="mailto:info@speedconnect-demir.de" className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">info@speedconnect-demir.de</a></p>
              <p>Website: <a href="https://demir-speedconnect.de" className="hover:text-[#1D4ED8] transition-colors">https://demir-speedconnect.de</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">UMSATZSTEUER-ID / STEUERNUMMER</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light leading-relaxed">
              <p>
                Die Steuernummer wird aus Sicherheitsgründen und zum Schutz vor Missbrauch nicht öffentlich angezeigt,
                kann jedoch auf berechtigte Anfrage jederzeit mitgeteilt werden.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">REDAKTIONELL VERANTWORTLICH GEMÄSS § 18 ABS. 2 MSTV</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1 text-sm font-light">
              <p className="text-[#0F172A] font-semibold">Adem Demir</p>
              <p>Talstraße 67</p>
              <p>66701 Beckingen</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">EU-STREITSCHLICHTUNG</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light leading-relaxed space-y-2">
              <p>
                Die EU-Plattform zur Online-Streitbeilegung (OS) wurde zum 20. Juli 2025 eingestellt und steht nicht
                mehr zur Verfügung.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">VERBRAUCHERSTREITBEILEGUNG / UNIVERSALSCHLICHTUNGSSTELLE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light leading-relaxed">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">RECHTLICHE HINWEISE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-5 text-sm font-light leading-relaxed">
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Haftung für Inhalte</p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Haftung für Links</p>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Urheberrecht</p>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                  deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                  außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                  Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/">
            <Image src="/Gemini_Generated_Image_e9xku7e9xku7e9xk.png" alt="Demir SpeedConnect" width={120} height={40} loading="lazy" className="h-10 w-auto object-contain" />
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
