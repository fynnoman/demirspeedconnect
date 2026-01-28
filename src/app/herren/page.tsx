'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function HerrenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const titleRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Initialize Lenis for smooth scrolling with higher speed
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
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
    <div className="min-h-screen bg-[#3D3226]">
      {/* Back Navigation */}
      <Link 
        href="/"
        className="fixed top-8 left-8 z-50 text-white hover:text-[#B8815F] transition-colors text-sm tracking-widest"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        ← ZURÜCK
      </Link>

      {/* Hero Section with Bold Title and Image Inside Text */}
      <section ref={heroRef} className="relative h-[140vh] flex items-center justify-center overflow-hidden bg-[#3D3226]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            y: titleY,
            rotate: titleRotate,
            opacity: titleOpacity
          }}
        >
          <h1 
            className="text-[18vw] lg:text-[22vw] font-bold leading-none tracking-tighter"
            style={{ 
              fontFamily: 'Georgia, serif',
              background: 'url(/C4EDFDED-47AC-4B13-B79F-B5F21D4CC593.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            HERREN
          </h1>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-2 bg-[#B8815F]"
          style={{ 
            scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
            transformOrigin: 'left'
          }}
        />
      </section>

      {/* Diagonal Split Section */}
      <DiagonalSplitSection />

      {/* Collection Showcase */}
      <CollectionShowcase />

      {/* Bold Statement */}
      <BoldStatementSection />

      {/* Vertical Scroll Cards */}
      <VerticalCardsSection />

      {/* Footer CTA */}
      <section className="py-32 bg-[#B8815F] text-white">
        <div className="max-w-[1400px] mx-auto px-12 text-center">
          <motion.h2
            className="text-7xl lg:text-9xl font-light mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            DEIN<br/>STATEMENT
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/"
              className="inline-block px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-[#B8815F] transition-colors text-sm tracking-widest"
            >
              ZUR STARTSEITE
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function DiagonalSplitSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const skewY = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  return (
    <section ref={ref} className="relative h-screen bg-[#FAF8F5] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[#5C4A3A] origin-bottom-left"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
          skewY
        }}
      >
        <div className="h-full flex items-center justify-center">
          <motion.h2
            className="text-6xl lg:text-8xl font-light text-white px-12"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            MODERNE<br/>KLASSIK
          </motion.h2>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-center justify-center">
        <motion.p
          className="text-2xl text-[#3D3226] text-center px-12"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Zeitlose Schnitte treffen auf moderne Details
        </motion.p>
      </div>
    </section>
  );
}

function CollectionShowcase() {
  const items = [
    { title: 'ANZÜGE', desc: 'Perfekte Passform', color: '#8B7355' },
    { title: 'HEMDEN', desc: 'Hochwertige Stoffe', color: '#5C4A3A' },
    { title: 'PULLOVER', desc: 'Zeitlose Eleganz', color: '#C9B8A3' },
    { title: 'HOSEN', desc: 'Moderne Schnitte', color: '#8B8674' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {items.map((item, index) => (
            <ShowcaseItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseItem({ item, index }: { item: { title: string; desc: string; color: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[80vh] flex items-center justify-center overflow-hidden cursor-pointer group"
      style={{ 
        backgroundColor: item.color,
        y,
        opacity
      }}
    >
      <div className="text-center z-10 relative">
        <motion.h3
          className="text-5xl lg:text-6xl font-light text-white mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
        <motion.p 
          className="text-lg text-white opacity-80 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 0.3 }}
        >
          {item.desc}
        </motion.p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#B8815F] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
      />

      {/* Animated Corner */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-white origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

function BoldStatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={ref} className="relative py-48 bg-[#3D3226] overflow-hidden">
      <motion.div
        className="text-center"
        style={{ scale, rotate }}
      >
        <h2
          className="text-8xl lg:text-[12rem] font-light text-white leading-none px-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="relative inline-block">
            KRAFT
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-6 bg-[#B8815F]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </span>
          <br/>
          <span className="text-[#B8815F]">& STIL</span>
        </h2>
      </motion.div>

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-[#B8815F] rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </section>
  );
}

function VerticalCardsSection() {
  const items = [
    { title: 'BUSINESS', desc: 'Professionell & Stilvoll' },
    { title: 'CASUAL', desc: 'Lässig & Komfortabel' },
    { title: 'ABEND', desc: 'Elegant & Raffiniert' }
  ];

  return (
    <section className="py-32 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-12 space-y-32">
        {items.map((item, index) => (
          <VerticalCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function VerticalCard({ item, index }: { item: { title: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [index % 2 === 0 ? -200 : 200, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-between gap-12"
      style={{ x, opacity }}
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <h3
          className="text-7xl lg:text-9xl font-light text-[#3D3226] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {item.title}
        </h3>
        <p className="text-2xl text-[#8B7355]">
          {item.desc}
        </p>
      </div>
      
      <motion.div
        className={`flex-1 h-[50vh] bg-[#8B7355] ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
