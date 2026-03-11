'use client';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
        <a href="/">
          <img src="/AB257105-9CE0-457F-8EA2-47E07C066099.png" alt="Demir SpeedConnect" className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {[{ label: 'Leistungen', href: '/leistungen' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'Kontakt', href: '/kontakt' }].map(item => (
            <a key={item.href} href={item.href} className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light">{item.label}</a>
          ))}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-36 pb-20">
        <p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-4">RECHTLICHES</p>
        <h1 className="text-[#0F172A] font-black tracking-tighter mb-12"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          IMPRESSUM
        </h1>

        <div className="space-y-8 text-[#475569]">
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">ANGABEN GEMÄSS § 5 TMG</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 space-y-1 text-sm font-light">
              <p className="text-[#0F172A] font-bold">Demir SpeedConnect</p>
              <p>Talstraße 67</p>
              <p>66701 Beckingen</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">KONTAKT</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 space-y-1 text-sm font-light">
              <p>Telefon: <a href="tel:01737366820" className="hover:text-[#1D4ED8] transition-colors">01737366820</a></p>
              <p>E-Mail: <a href="mailto:info@speedconnect-demir.de" className="hover:text-[#1D4ED8] transition-colors">info@speedconnect-demir.de</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">VERANTWORTLICH FÜR DEN INHALT</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light">
              <p>Demir SpeedConnect, Talstraße 67, 66701 Beckingen</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">HAFTUNGSAUSSCHLUSS</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light leading-relaxed">
              <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/">
            <img src="/AB257105-9CE0-457F-8EA2-47E07C066099.png" alt="Demir SpeedConnect" className="h-10 w-auto object-contain" />
          </a>
          <p className="text-xs font-light text-[#475569]">© 2026 Demir SpeedConnect</p>
          <div className="flex gap-6 text-xs font-light text-[#475569]">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
