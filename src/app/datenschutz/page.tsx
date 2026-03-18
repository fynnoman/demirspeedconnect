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

export default function Datenschutz() {
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
          <Image src="/AB257105-9CE0-457F-8EA2-47E07C066099.png" alt="Demir SpeedConnect" width={140} height={40} priority className="h-10 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(item => (
            <Link key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</Link>
          ))}
          <Link href="/kontakt" className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors">
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
          DATENSCHUTZ
        </h1>

        <div className="space-y-10 text-[#475569]">

          {/* 1 */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">1. DATENSCHUTZ AUF EINEN BLICK</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-3 text-sm font-light leading-relaxed">
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Allgemeine Hinweise</p>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Datenerfassung auf dieser Website</p>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass
                  Sie uns diese mitteilen (z. B. per E-Mail). Andere Daten werden automatisch beim Besuch der Website
                  durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                  Seitenaufrufs).
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">2. VERANTWORTLICHE STELLE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1 text-sm font-light">
              <p className="text-[#0F172A] font-bold">Demir SpeedConnect UG (haftungsbeschränkt)</p>
              <p>Adem Demir</p>
              <p>Talstraße 67</p>
              <p>66701 Beckingen</p>
              <p className="pt-1">
                E-Mail:{' '}
                <a href="mailto:info@speedconnect-demir.de" className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">
                  info@speedconnect-demir.de
                </a>
              </p>
              <p>
                Telefon:{' '}
                <a href="tel:+491727398452" className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">
                  +49 172 7398452
                </a>
              </p>
            </div>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">3. ERFASSUNG UND VERARBEITUNG VON DATEN</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-5 text-sm font-light leading-relaxed">
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Hosting durch Vercel</p>
                <p>
                  Wir hosten unsere Website bei <span className="text-[#0F172A] font-semibold">Vercel Inc.</span> (440 N
                  Barranca Ave #4133, Covina, CA 91723, USA). Bei der Nutzung der Website werden technische
                  Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, Browsertyp) an die Server von Vercel übertragen. Dies
                  ist notwendig, um die Website technisch bereitstellen zu können. Wir haben mit Vercel einen Vertrag
                  über Auftragsverarbeitung (Data Processing Agreement) abgeschlossen, der den Schutz Ihrer Daten gemäß
                  DSGVO garantiert. Sofern Daten in die USA übertragen werden, erfolgt dies auf Grundlage der
                  Standardvertragsklauseln der EU-Kommission.
                </p>
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Server-Log-Dateien</p>
                <p className="mb-2">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="space-y-1 pl-3">
                  {[
                    'Browsertyp und Browserversion',
                    'Verwendetes Betriebssystem',
                    'Referrer URL',
                    'Hostname des zugreifenden Rechners',
                    'Uhrzeit der Serveranfrage',
                    'IP-Adresse',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#1D4ED8] mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die
                  Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der fehlerfreien
                  Darstellung und Optimierung der Website).
                </p>
              </div>
              <div>
                <p className="text-[#0F172A] font-semibold mb-1">Kontakt per E-Mail oder Telefon</p>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                  uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                  Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">4. IHRE RECHTE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light leading-relaxed space-y-2">
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
              <ul className="space-y-1 pl-3">
                {[
                  { right: 'Auskunft', detail: 'über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO).' },
                  { right: 'Berichtigung', detail: 'unrichtiger Daten (Art. 16 DSGVO).' },
                  { right: 'Löschung', detail: 'Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO).' },
                  { right: 'Einschränkung der Verarbeitung', detail: '(Art. 18 DSGVO).' },
                  { right: 'Datenübertragbarkeit', detail: '(Art. 20 DSGVO).' },
                  { right: 'Widerruf', detail: 'Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO).' },
                ].map(({ right, detail }) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] mt-0.5">·</span>
                    <span><span className="text-[#0F172A] font-semibold">{right}</span> {detail}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-1">
                <span className="text-[#0F172A] font-semibold">Beschwerderecht:</span> Sie haben außerdem das Recht,
                sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch
                uns zu beschweren.
              </p>
              <p className="pt-1">
                Zur Wahrnehmung Ihrer Rechte wenden Sie sich an:{' '}
                <a href="mailto:info@speedconnect-demir.de" className="text-[#1D4ED8] hover:underline transition-colors">
                  info@speedconnect-demir.de
                </a>
              </p>
            </div>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">5. SSL- BZW. TLS-VERSCHLÜSSELUNG</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light leading-relaxed">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>

          {/* Stand */}
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-4">STAND</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-5 text-sm font-light">
              <p>Diese Datenschutzerklärung hat den Stand März 2026 und wird bei Bedarf aktualisiert.</p>
            </div>
          </div>

        </div>
      </div>

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
