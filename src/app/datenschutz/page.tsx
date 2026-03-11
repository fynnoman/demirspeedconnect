'use client';

export default function Datenschutz() {
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
          DATENSCHUTZ
        </h1>

        <div className="space-y-8 text-[#475569]">
          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">1. VERANTWORTLICHE STELLE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 space-y-1 text-sm font-light">
              <p className="text-[#0F172A] font-bold">Demir SpeedConnect</p>
              <p>Talstraße 67, 66701 Beckingen</p>
              <p>Telefon: <a href="tel:01737366820" className="hover:text-[#1D4ED8] transition-colors">01737366820</a></p>
              <p>E-Mail: <a href="mailto:info@speedconnect-demir.de" className="hover:text-[#1D4ED8] transition-colors">info@speedconnect-demir.de</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">2. ERHEBUNG UND SPEICHERUNG PERSONENBEZOGENER DATEN</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light leading-relaxed">
              <p>Beim Aufrufen unserer Website werden durch den Webserver automatisch folgende Daten erfasst und in Server-Logfiles gespeichert: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei sowie verwendeter Browser. Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">3. COOKIES</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light leading-relaxed">
              <p>Wir verwenden keine Tracking- oder Analyse-Cookies. Unsere Website setzt nur technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">4. IHRE RECHTE</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light space-y-1">
              <p>• Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</p>
              <p>• Berichtigung unrichtiger Daten (Art. 16 DSGVO)</p>
              <p>• Löschung oder Einschränkung der Verarbeitung (Art. 17 und 18 DSGVO)</p>
              <p>• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</p>
              <p className="pt-2">Zur Wahrnehmung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@speedconnect-demir.de" className="hover:text-[#1D4ED8] transition-colors">info@speedconnect-demir.de</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0F172A] font-bold text-xs tracking-[0.3em] mb-3">5. AKTUALITÄT</h2>
            <div className="border-l-2 border-[#1D4ED8] pl-4 text-sm font-light">
              <p>Diese Datenschutzerklärung hat den Stand März 2026 und wird bei Bedarf aktualisiert.</p>
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
