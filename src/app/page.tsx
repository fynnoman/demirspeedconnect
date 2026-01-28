'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Lenis from 'lenis';

// Sticky About Section with smooth slide animation
function StickyAboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Smooth slide from right
  const slideX = useTransform(scrollYProgress, [0, 1], ['70%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.div 
      ref={ref}
      className="w-full h-full bg-[#FAF8F5] flex items-center justify-center"
      style={{ 
        x: slideX,
      }}
    >
      <motion.div 
        className="max-w-[1400px] mx-auto w-full px-12 lg:px-20"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Large Title */}
          <div className="flex flex-col justify-between py-20">
            <div>
              <motion.h1 
                className="text-8xl lg:text-9xl font-light text-[#3D3226] leading-none mb-12"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                STOFF<br/>WECHSEL
              </motion.h1>
              
              <motion.div 
                className="w-32 h-[2px] bg-[#B8815F] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: false }}
              />
            </div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3 text-[#5C4A3A]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <p className="font-normal text-sm tracking-wider">Stoffwechsel Patrick Kühle GmbH</p>
              <p className="text-sm font-light">Fürstenstraße 15</p>
              <p className="text-sm font-light">66111 Saarbrücken</p>
              <p className="text-sm font-light mt-4">Tel. 06858-9386388</p>
              <p className="text-sm font-light">
                <a href="mailto:mail@stoffwechselpk.de" className="hover:text-[#B8815F] transition-colors">
                  mail@stoffwechselpk.de
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right: Principles */}
          <div className="flex flex-col justify-center space-y-12 py-20">
            {[
              { title: 'QUALITÄT', desc: 'Hochwertige Materialien und exklusive Verarbeitung für zeitlose Eleganz' },
              { title: 'NACHHALTIGKEIT', desc: 'Bewusste Auswahl nachhaltiger Labels und langlebiger Kollektionen' },
              { title: 'INDIVIDUALITÄT', desc: 'Persönliche Beratung für deinen einzigartigen Stil' },
              { title: 'AUTHENTIZITÄT', desc: 'Echte Mode-Leidenschaft seit über zwei Jahrzehnten' }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                className="border-l-2 border-[#B8815F] pl-6"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + (index * 0.15) }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl font-light text-[#3D3226] mb-2 tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
                  {principle.title}
                </h3>
                <p className="text-sm text-[#8B7355] font-light leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Navigation word component with Framer Motion
function NavWord({ text, href, index }: { text: string; href: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Each word slides in from alternate sides based on scroll progress
  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [`${direction * 100}vw`, '0vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="w-full flex justify-center">
      <motion.a
        href={href}
        className="relative text-[#3D3226] text-6xl lg:text-8xl font-light hover:text-[#B8815F] transition-colors"
        style={{ 
          fontFamily: 'Georgia, serif',
          x,
          opacity
        }}
      >
        {text}
        {/* Marker-style underline */}
        <motion.div
          className="absolute bottom-2 left-0 right-0 h-4 bg-[#B8815F] -z-10"
          style={{ opacity: 0.4 }}
        />
      </motion.a>
    </div>
  );
}

// Stoffwechsel Section Component
function StoffwechselSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "center center"]
  });

  const { scrollYProgress: lineProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center center"]
  });

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "center center"]
  });

  const titleY = useTransform(titleProgress, [0, 1], [50, 0]);
  const titleOpacity = useTransform(titleProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  const lineWidth = useTransform(lineProgress, [0, 1], [0, 128]);
  
  const contactY = useTransform(contactProgress, [0, 1], [30, 0]);
  const contactOpacity = useTransform(contactProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section ref={sectionRef} className="w-full bg-[#FAF8F5] py-20">
      <div className="max-w-[1400px] mx-auto w-full px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Large Title */}
          <div className="flex flex-col justify-between py-20">
            <div>
              <motion.h1 
                ref={titleRef}
                className="text-8xl lg:text-9xl font-light text-[#3D3226] leading-none mb-12"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  y: titleY,
                  opacity: titleOpacity
                }}
              >
                STOFF<br/>WECHSEL
              </motion.h1>
              
              <motion.div 
                ref={lineRef}
                className="h-[2px] bg-[#B8815F] mb-8"
                style={{ 
                  width: lineWidth
                }}
              />
            </div>

            {/* Contact Info */}
            <motion.div 
              ref={contactRef}
              className="space-y-3 text-[#5C4A3A]"
              style={{
                y: contactY,
                opacity: contactOpacity
              }}
            >
              <p className="font-normal text-sm tracking-wider">Stoffwechsel Patrick Kühle GmbH</p>
              <p className="text-sm font-light">Fürstenstraße 15</p>
              <p className="text-sm font-light">66111 Saarbrücken</p>
              <p className="text-sm font-light mt-4">Tel. 06858-9386388</p>
              <p className="text-sm font-light">
                <a href="mailto:mail@stoffwechselpk.de" className="hover:text-[#B8815F] transition-colors">
                  mail@stoffwechselpk.de
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right: Principles */}
          <div className="flex flex-col justify-center space-y-12 py-20">
            {[
              { title: 'QUALITÄT', desc: 'Hochwertige Materialien und exklusive Verarbeitung für zeitlose Eleganz' },
              { title: 'NACHHALTIGKEIT', desc: 'Bewusste Auswahl nachhaltiger Labels und langlebiger Kollektionen' },
              { title: 'INDIVIDUALITÄT', desc: 'Persönliche Beratung für deinen einzigartigen Stil' },
              { title: 'AUTHENTIZITÄT', desc: 'Echte Mode-Leidenschaft seit über zwei Jahrzehnten' }
            ].map((principle, index) => (
              <PrincipleItem key={principle.title} principle={principle} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Principle Item with scroll-based animation
function PrincipleItem({ principle, index }: { principle: { title: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.div
      ref={ref}
      className="border-l-2 border-[#B8815F] pl-6"
      style={{
        x,
        opacity
      }}
    >
      <h3 className="text-xl font-light text-[#3D3226] mb-2 tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
        {principle.title}
      </h3>
      <p className="text-sm text-[#8B7355] font-light leading-relaxed">
        {principle.desc}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Logo moves from left to right as you scroll through hero
  const logoX = useTransform(heroScrollProgress, [0, 1], ['-100%', '100%']);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Hero */}
      <section ref={heroRef} className="relative w-full h-[200vh]">
        {/* Fixed viewport area */}
        <div className="sticky top-0 h-screen bg-[#D5D5D0] overflow-hidden">
          {/* Logo that moves horizontally based on scroll */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ x: logoX }}
          >
            <img
              src="/logo.png"
              alt="Stoffwechsel Logo"
              className="w-[150vw] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Minimalist Navigation */}
      <section className="bg-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center gap-8">
            {[
              { text: 'DAMEN', href: '/damen', index: 0 },
              { text: 'HERREN', href: '/herren', index: 1 },
              { text: 'LABELS', href: '/labels', index: 2 },
              { text: 'AKTIONEN', href: '/aktionen', index: 3 },
              { text: 'STOFFWECHSEL', href: '/ueber-uns', index: 4 }
            ].map(({ text, href, index }) => (
              <NavWord key={text} text={text} href={href} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Über Uns - Stoffwechsel Section */}
      <StoffwechselSection />

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-widest text-[#5A5A5A] mb-4" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
            BLEIB INFORMIERT
          </h2>
          <p className="text-sm text-[#8A8A8A] mb-8 font-light">
            Erhalte News zu neuen Kollektionen und exklusiven Events
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="E-Mail" className="flex-1 px-4 py-3 border border-[#E0E0E0] outline-none text-[#5A5A5A] text-sm focus:border-[#8A8A8A] transition-colors" />
            <button className="px-8 py-3 bg-[#8A8A8A] text-white text-xs font-light tracking-widest hover:bg-[#B8B8B8] transition-colors">
              ANMELDEN
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8A8A8A] text-white py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-light mb-4">SHOP</h4>
              <ul className="space-y-2 text-xs font-light text-[#E0E0E0]">
                <li><a href="#" className="hover:text-white transition-colors">Neue Kollektion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Damen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
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
                <p className="mt-3">Tel. 06858-9386388</p>
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
