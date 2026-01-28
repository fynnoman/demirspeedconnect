'use client';

import { useState } from 'react';

export default function UeberUns() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-[#E0E0E0]/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 w-6 h-6 justify-center hover:opacity-70 transition-opacity"
            >
              <span className="w-full h-0.5 bg-[#8A8A8A]"></span>
              <span className="w-full h-0.5 bg-[#8A8A8A]"></span>
              <span className="w-full h-0.5 bg-[#8A8A8A]"></span>
            </button>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <h1 className="text-2xl lg:text-3xl tracking-tight text-[#2C2C2C] whitespace-nowrap" style={{ fontFamily: 'Didot, "Bodoni MT", "Noto Serif Display", "Playfair Display", Georgia, serif', fontWeight: '400', letterSpacing: '0.05em' }}>
                STOFFWECHSEL
              </h1>
            </a>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl tracking-wide text-[#5A5A5A]" style={{ fontFamily: 'Georgia, serif' }}>MENÜ</h2>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-[#8A8A8A] hover:text-[#5A5A5A] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-6">
            <a href="/" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">NEUHEITEN</a>
            <a href="/" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">SHOP</a>
            <a href="/" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">SALE</a>
            <a href="/" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">INSPIRATION</a>
            <a href="/" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">LIEBLINGSLOOKS</a>
            <a href="/labels" className="block text-lg font-light text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors tracking-wide">LABELS</a>
          </nav>
          <div className="absolute bottom-8 left-8 right-8 pt-8 border-t border-[#E0E0E0]">
            <div className="space-y-3 text-sm text-[#8A8A8A]">
              <a href="/ueber-uns" className="block hover:text-[#5A5A5A] transition-colors">Über uns</a>
              <a href="/impressum" className="block hover:text-[#5A5A5A] transition-colors">Impressum</a>
              <a href="/datenschutz" className="block hover:text-[#5A5A5A] transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Hero */}
      <section className="relative w-full mt-20">
        <div className="relative w-full h-[60vh] bg-[#E0E0E0]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#5A5A5A] px-4">
              <h2 className="text-5xl lg:text-7xl font-light tracking-widest" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
                ÜBER UNS
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-16">
          {/* Über Uns */}
          <section>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-[#5A5A5A] font-light">
                Wir lieben Kleidung, die Haltung zeigt. Und Menschen, die ihren eigenen Stil haben. Darum findest du bei uns keine Massenware, sondern kuratierte Looks, ausgesuchte Labels und ein Team, das dich ehrlich und individuell berät.
              </p>
            </div>
          </section>

          {/* Philosophie */}
          <section className="bg-white p-12 lg:p-16">
            <h3 className="text-3xl font-light tracking-widest text-[#5A5A5A] mb-8 text-center" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              UNSERE PHILOSOPHIE
            </h3>
            <div className="max-w-3xl mx-auto space-y-6 text-[#8A8A8A] leading-relaxed">
              <p className="text-base font-light">
                <strong className="text-[#5A5A5A] font-normal">Anprobieren statt anklicken. Spüren statt scrollen.</strong> Wir glauben: Mode ist mehr als ein Bild im Online-Shop. Sie muss sich gut anfühlen. Zu dir passen. Und live wirken.
              </p>
              <p className="text-base font-light">
                Deshalb nehmen wir uns Zeit – für dich, deinen Stil, deine Fragen. Du gehst nicht einfach mit einem neuen Teil. Du gehst mit einem guten Gefühl.
              </p>
            </div>
          </section>

          {/* Team */}
          <section className="bg-[#F5F5F5] p-12 lg:p-16">
            <h3 className="text-3xl font-light tracking-widest text-[#5A5A5A] mb-8 text-center" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              UNSER TEAM
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base leading-relaxed text-[#8A8A8A] font-light">
                Wir sind keine Verkäufer. Wir sind Berater mit Mode im Blut. Wir hören zu, schlagen vor – und sagen auch mal, wenn etwas nicht passt. Denn echte Beratung ist ehrlich. Und macht Spaß.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h3 className="text-2xl font-light tracking-widest text-[#5A5A5A] mb-6" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              BESUCH UNS
            </h3>
            <div className="space-y-2 text-sm text-[#8A8A8A] mb-8">
              <p>Fürstenstraße 15</p>
              <p>66111 Saarbrücken</p>
              <p className="mt-4">Tel. 0681-9386388</p>
            </div>
            <a href="/" className="inline-block px-10 py-3 border border-[#8A8A8A] text-[#5A5A5A] text-sm font-light tracking-widest hover:bg-[#8A8A8A] hover:text-white transition-colors">
              ZUR KOLLEKTION
            </a>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#8A8A8A] text-white py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-light mb-4">SHOP</h4>
              <ul className="space-y-2 text-xs font-light text-[#E0E0E0]">
                <li><a href="/" className="hover:text-white transition-colors">Neue Kollektion</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Damen</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">UNTERNEHMEN</h4>
              <ul className="space-y-2 text-xs font-light text-[#E0E0E0]">
                <li><a href="/ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="/labels" className="hover:text-white transition-colors">Labels</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">KONTAKT</h4>
              <div className="space-y-2 text-xs font-light text-[#E0E0E0]">
                <p className="font-normal text-white">Stoffwechsel Patrick Kühle GmbH</p>
                <p>Fürstenstraße 15</p>
                <p>66111 Saarbrücken</p>
                <p className="mt-3">Tel. 0681-9386388</p>
                <p>
                  <a href="mailto:mail@stoffwechselpk.de" className="hover:text-white transition-colors">
                    mail@stoffwechselpk.de
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light mb-4">FOLLOW US</h4>
              <ul className="space-y-2 text-xs font-light text-[#E0E0E0]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#B8B8B8] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-[#E0E0E0]">© 2026 Stoffwechsel Patrick Kühle GmbH</p>
            <div className="flex gap-4 text-xs font-light text-[#E0E0E0]">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
