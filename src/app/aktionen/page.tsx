'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Lenis from 'lenis';

export default function AktionenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
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
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Back Navigation */}
      <Link 
        href="/"
        className="fixed top-8 left-8 z-50 text-[#3D3226] hover:text-[#B8815F] transition-colors text-sm tracking-widest"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        ← ZURÜCK
      </Link>

      {/* Hero Section with Bold Title and Image Inside Text */}
      <section ref={heroRef} className="relative h-[150vh] flex items-center justify-center overflow-hidden bg-[#B8815F]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <h1 
            className="text-[14vw] lg:text-[18vw] font-bold leading-none tracking-tighter"
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
            AKTIONEN
          </h1>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 rounded-full border-8 border-white opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-[500px] h-3 bg-white"
          style={{ 
            scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
            transformOrigin: 'left'
          }}
        />
      </section>

      {/* Current Offers Section */}
      <CurrentOffersSection />

      {/* Countdown Banner */}
      <CountdownSection />

      {/* Deal Grid */}
      <DealGridSection />

      {/* Special Statement */}
      <SpecialStatementSection />

      {/* Newsletter CTA */}
      <NewsletterSection />

      {/* Footer CTA */}
      <section className="py-32 bg-[#3D3226] text-white">
        <div className="max-w-[1400px] mx-auto px-12 text-center">
          <motion.h2
            className="text-7xl lg:text-9xl font-light mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            VERPASSE<br/>NICHTS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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

function CurrentOffersSection() {
  const offers = [
    { 
      title: 'WINTER SALE', 
      discount: 'BIS ZU 50%',
      subtitle: 'Ausgewählte Winterkollektion',
      color: '#8B7355'
    },
    { 
      title: 'NEW ARRIVALS', 
      discount: '20% RABATT',
      subtitle: 'Auf alle Neuheiten',
      color: '#5C4A3A'
    },
    { 
      title: 'ACCESSOIRES', 
      discount: '30% RABATT',
      subtitle: 'Taschen, Schals & mehr',
      color: '#C9B8A3'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-12">
        <motion.h2
          className="text-6xl lg:text-8xl font-light text-[#3D3226] mb-20 text-center"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          AKTUELLE ANGEBOTE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={offer.title} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, index }: { offer: { title: string; discount: string; subtitle: string; color: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[70vh] overflow-hidden cursor-pointer group"
      style={{ 
        backgroundColor: offer.color,
        y,
        rotate,
        opacity
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <motion.h3
          className="text-5xl lg:text-6xl font-light text-white mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {offer.title}
        </motion.h3>
        
        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-7xl lg:text-8xl font-bold text-white">
            {offer.discount}
          </p>
          <motion.div
            className="absolute bottom-2 left-0 right-0 h-4 bg-[#B8815F] -z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <p className="text-xl text-white opacity-90">
          {offer.subtitle}
        </p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#B8815F] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
      />

      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 bg-white opacity-20"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.3
        }}
      />
    </motion.div>
  );
}

function CountdownSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative py-32 bg-[#FAF8F5] overflow-hidden">
      <motion.div
        className="text-center"
        style={{ scale }}
      >
        <motion.p
          className="text-2xl text-[#8B7355] mb-6 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          NUR NOCH KURZE ZEIT
        </motion.p>
        
        <h2
          className="text-7xl lg:text-9xl font-light text-[#3D3226] leading-tight px-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="relative inline-block">
            SALE
            <motion.div
              className="absolute bottom-2 left-0 right-0 h-8 bg-[#B8815F]"
              style={{ opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </span>
          <br/>
          <span className="text-[#B8815F]">ENDET BALD</span>
        </h2>
      </motion.div>

      {/* Animated Background Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#B8815F] opacity-5"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </section>
  );
}

function DealGridSection() {
  const deals = [
    { category: 'DAMEN KLEIDER', percent: '40%' },
    { category: 'HERREN ANZÜGE', percent: '35%' },
    { category: 'SCHUHE', percent: '25%' },
    { category: 'TASCHEN', percent: '30%' }
  ];

  return (
    <section className="py-32 bg-[#3D3226]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {deals.map((deal, index) => (
            <DealItem key={deal.category} deal={deal} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DealItem({ deal, index }: { deal: { category: string; percent: string }; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[60vh] flex items-center justify-center overflow-hidden cursor-pointer group border-r border-b border-[#B8815F]"
      style={{ y, opacity }}
    >
      <div className="text-center z-10 relative">
        <motion.p
          className="text-9xl lg:text-[10rem] font-bold text-[#B8815F] mb-4"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {deal.percent}
        </motion.p>
        <motion.h3
          className="text-3xl lg:text-4xl font-light text-white tracking-wider"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {deal.category}
        </motion.h3>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-[#B8815F] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
      />

      {/* Bottom Line Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8815F] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: index * 0.15 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

function SpecialStatementSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={ref} className="relative py-48 bg-white overflow-hidden">
      <motion.div
        className="text-center"
        style={{ x }}
      >
        <h2
          className="text-8xl lg:text-[13rem] font-light text-[#3D3226] leading-none px-12"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          SPARE<br/>
          <span className="text-[#B8815F]">JETZT</span>
        </h2>
      </motion.div>

      {/* Floating Percentage Signs */}
      {['%', '%', '%', '%', '%'].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-9xl font-bold text-[#B8815F] opacity-5"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-32 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-12 text-center">
        <motion.h2
          className="text-6xl lg:text-8xl font-light text-[#3D3226] mb-8"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          EXKLUSIVE DEALS
        </motion.h2>
        <motion.p
          className="text-2xl text-[#8B7355] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Melde dich an und erhalte 10% auf deine erste Bestellung
        </motion.p>
        <motion.div
          className="flex gap-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <input 
            type="email" 
            placeholder="Deine E-Mail" 
            className="flex-1 px-6 py-4 border-2 border-[#8B7355] outline-none text-[#3D3226] text-lg focus:border-[#B8815F] transition-colors"
          />
          <button className="px-10 py-4 bg-[#B8815F] text-white text-lg font-light tracking-widest hover:bg-[#3D3226] transition-colors">
            ANMELDEN
          </button>
        </motion.div>
      </div>
    </section>
  );
}
