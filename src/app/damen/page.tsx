'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function DamenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Back Navigation */}
      <Link 
        href="/"
        className="fixed top-8 left-8 z-50 text-[#3D3226] hover:text-[#B8815F] transition-colors text-sm tracking-widest"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        ← ZURÜCK
      </Link>

      {/* Hero Section with Massive Title */}
      <section ref={heroRef} className="relative h-[150vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <h1 
            className="text-[20vw] lg:text-[25vw] font-light text-[#3D3226] leading-none tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            DAMEN
          </h1>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#B8815F] opacity-20"
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.5])
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-2 bg-[#B8815F]"
          style={{ 
            scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
            transformOrigin: 'left'
          }}
        />
      </section>

      {/* Collection Grid with Staggered Animation */}
      <CollectionSection />

      {/* Statement Section */}
      <StatementSection />

      {/* Category Split Section */}
      <CategorySplitSection />

      {/* Footer CTA */}
      <section className="py-32 bg-[#3D3226] text-white">
        <div className="max-w-[1400px] mx-auto px-12 text-center">
          <motion.h2
            className="text-6xl lg:text-8xl font-light mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            ENTDECKE<br/>DEINEN STIL
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/"
              className="inline-block px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-[#3D3226] transition-colors text-sm tracking-widest"
            >
              ZUR STARTSEITE
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CollectionSection() {
  const items = [
    { title: 'NEUE KOLLEKTION', subtitle: 'Frühling/Sommer 2026' },
    { title: 'KLEIDER', subtitle: 'Zeitlose Eleganz' },
    { title: 'BLUSEN', subtitle: 'Leichte Stoffe' },
    { title: 'HOSEN', subtitle: 'Perfekte Passform' },
    { title: 'JACKEN', subtitle: 'Hochwertige Schnitte' },
    { title: 'ACCESSOIRES', subtitle: 'Die perfekte Ergänzung' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <CollectionItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionItem({ item, index }: { item: { title: string; subtitle: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[60vh] bg-[#E8DDD0] overflow-hidden cursor-pointer group"
      style={{ y, opacity, scale }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <motion.h3
          className="text-5xl lg:text-7xl font-light text-[#3D3226] mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {item.title}
        </motion.h3>
        <motion.p className="text-lg text-[#8B7355] tracking-wider">
          {item.subtitle}
        </motion.p>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-[#B8815F] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        />
      </div>

      {/* Decorative Corner */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-[#B8815F] opacity-40"
        style={{ 
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2
        }}
      />
    </motion.div>
  );
}

function StatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={ref} className="relative py-48 bg-[#FAF8F5] overflow-hidden">
      <motion.div
        className="text-center"
        style={{ x, rotate }}
      >
        <h2
          className="text-7xl lg:text-9xl font-light text-[#3D3226] leading-tight px-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          STIL IST<br/>
          <span className="relative inline-block">
            ZEITLOS
            <motion.div
              className="absolute bottom-2 left-0 right-0 h-8 bg-[#B8815F] -z-10"
              style={{ opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </span>
        </h2>
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#B8815F] opacity-10"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-[#8B7355] opacity-10"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}

function CategorySplitSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ['-100%', '0%', '0%']);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '0%', '0%']);

  return (
    <section ref={ref} className="relative h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex">
        {/* Left Half */}
        <motion.div
          className="w-1/2 bg-[#E8DDD0] flex items-center justify-center"
          style={{ x: leftX }}
        >
          <div className="text-center p-12">
            <h3
              className="text-6xl lg:text-8xl font-light text-[#3D3226] mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              CASUAL
            </h3>
            <p className="text-lg text-[#8B7355] tracking-wider">
              Entspannt & Stilvoll
            </p>
          </div>
        </motion.div>

        {/* Right Half */}
        <motion.div
          className="w-1/2 bg-[#C9B8A3] flex items-center justify-center"
          style={{ x: rightX }}
        >
          <div className="text-center p-12">
            <h3
              className="text-6xl lg:text-8xl font-light text-[#3D3226] mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              ELEGANT
            </h3>
            <p className="text-lg text-[#8B7355] tracking-wider">
              Raffiniert & Feminin
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Divider Line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#B8815F] -translate-x-1/2"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
