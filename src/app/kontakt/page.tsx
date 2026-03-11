'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
		lines: [
			'Glasfaserverlegung',
			'Spleißen',
			'Tiefbauarbeiten',
			'Hausanschlüsse',
		],
		href: '/leistungen',
	},
];

export default function KontaktPage() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 0.9,
			easing: (t) =>
				Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
		});
		let rafId: number;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);

	const heroRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});
	const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<div className="min-h-screen bg-white">
			<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
				<Link href="/">
					<Image
						src="/AB257105-9CE0-457F-8EA2-47E07C066099.png"
						alt="Demir SpeedConnect"
						width={140}
						height={40}
						priority
						className="h-10 w-auto object-contain"
					/>
				</Link>
				<div className="hidden lg:flex items-center gap-8">
					{[
						{ label: 'Leistungen', href: '/leistungen' },
						{ label: 'Über uns', href: '/ueber-uns' },
						{ label: 'Kontakt', href: '/kontakt' },
					].map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-[#94A3B8] hover:text-white text-sm tracking-wider transition-colors font-light"
						>
							{item.label}
						</Link>
					))}
					<a
						href="tel:01737366820"
						className="px-6 py-3 bg-[#1D4ED8] text-white text-xs font-bold tracking-widest hover:bg-white hover:text-[#1D4ED8] transition-colors"
					>
						JETZT ANRUFEN
					</a>
				</div>
			</nav>

			{/* Hero */}
			<section
				ref={heroRef}
				className="relative h-[60vh] bg-[#0F172A] flex items-center justify-center overflow-hidden"
			>
				{/* Punkte-Raster */}
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle, #1D4ED8 1.5px, transparent 1.5px)',
						backgroundSize: '36px 36px',
						opacity: 0.25,
					}}
				/>
				{/* Blaues Licht von unten Mitte – wie ein Scheinwerfer */}
				<div
					className="absolute inset-0"
					style={{
						background:
							'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(29,78,216,0.6) 0%, rgba(29,78,216,0.15) 50%, transparent 70%)',
					}}
				/>
				{/* Horizontale Scan-Linie */}
				<div
					className="absolute left-0 right-0 h-px bg-[#1D4ED8]/30"
					style={{ top: '55%' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/60" />
				<motion.div
					className="absolute left-0 top-0 w-4 h-full bg-[#1D4ED8] z-10"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className="text-center relative z-10"
					style={{
						y: titleY,
						opacity: titleOpacity,
						willChange: 'transform, opacity',
					}}
				>
					<p className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-6">
						WIR SIND FÜR SIE DA
					</p>
					<h1
						className="text-white font-black leading-none tracking-tighter"
						style={{
							fontFamily: 'Arial Black, Arial, sans-serif',
							fontSize: 'clamp(4rem, 12vw, 12rem)',
						}}
					>
						KON<span className="text-[#1D4ED8]">TAKT</span>
					</h1>
				</motion.div>
			</section>

			{/* Kontaktdaten */}
			<section className="py-32 bg-white">
				<div className="max-w-[1000px] mx-auto px-6 lg:px-12">
					<motion.p
						className="text-[#1D4ED8] text-xs tracking-[0.4em] font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						KONTAKTINFORMATIONEN
					</motion.p>
					<motion.h2
						className="text-[#0F172A] font-black tracking-tighter mb-16"
						style={{
							fontFamily: 'Arial Black, Arial, sans-serif',
							fontSize: 'clamp(2rem, 5vw, 4rem)',
						}}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						SPRECHEN SIE UNS AN
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
						{KONTAKT_ITEMS.map((item, i) => (
							<motion.a
								key={item.label}
								href={item.href}
								target={item.href.startsWith('http') ? '_blank' : undefined}
								rel={
									item.href.startsWith('http')
										? 'noopener noreferrer'
										: undefined
								}
								className="group flex gap-6 p-8 border border-[#EEEEEE] hover:border-[#1D4ED8] hover:bg-[#0F172A] transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="w-1 bg-[#1D4ED8] shrink-0 group-hover:w-2 transition-all duration-300" />
								<div>
									<p className="text-[#1D4ED8] text-xs font-bold tracking-[0.3em] mb-3">
										{item.label}
									</p>
									{item.lines.map((line) => (
										<p
											key={line}
											className="text-[#0F172A] group-hover:text-white text-xl font-light transition-colors duration-300"
										>
											{line}
										</p>
									))}
								</div>
							</motion.a>
						))}
					</div>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 mt-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<a
							href="tel:01737366820"
							className="flex-1 py-5 bg-[#1D4ED8] text-white text-sm font-bold tracking-widest text-center hover:bg-[#0F172A] transition-colors"
						>
							📞 01737366820
						</a>
						<a
							href="mailto:info@speedconnect-demir.de"
							className="flex-1 py-5 bg-white border-2 border-[#1D4ED8] text-[#1D4ED8] text-sm font-bold tracking-widest text-center hover:bg-[#1D4ED8] hover:text-white transition-colors"
						>
							✉️ info@speedconnect-demir.de
						</a>
					</motion.div>

					{/* Google Maps Karte */}
					<motion.a
						href="https://www.google.com/maps/search/?api=1&query=Talstraße+67,+66701+Beckingen"
						target="_blank"
						rel="noopener noreferrer"
						className="group block relative overflow-hidden mt-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.1!2d6.758!3d49.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b4a11b2d1a13%3A0x0!2sTalstra%C3%9Fe+67%2C+66701+Beckingen!5e0!3m2!1sde!2sde!4v1710000000000"
							className="w-full h-[420px] border-0 grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
						<div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
						<div className="absolute bottom-0 left-0 right-0 bg-[#0F172A] p-6 flex items-center justify-between">
							<div>
								<p className="text-[#1D4ED8] text-xs font-bold tracking-[0.3em] mb-1">
									STANDORT
								</p>
								<p
									className="text-white font-black text-lg tracking-tight"
									style={{
										fontFamily: 'Arial Black, Arial, sans-serif',
									}}
								>
									Talstraße 67, 66701 Beckingen
								</p>
							</div>
							<div className="w-10 h-10 bg-[#1D4ED8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</div>
						</div>
					</motion.a>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#0F172A] text-white py-12 border-t border-[#1E293B]">
				<div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
					<Link href="/">
						<Image
							src="/AB257105-9CE0-457F-8EA2-47E07C066099.png"
							alt="Demir SpeedConnect"
							width={120}
							height={40}
							loading="lazy"
							className="h-10 w-auto object-contain"
						/>
					</Link>
					<p className="text-xs font-light text-[#475569]">
						© 2026 Demir SpeedConnect
					</p>
					<div className="flex gap-6 text-xs font-light text-[#475569]">
						<Link
							href="/impressum"
							className="hover:text-white transition-colors"
						>
							Impressum
						</Link>
						<Link
							href="/datenschutz"
							className="hover:text-white transition-colors"
						>
							Datenschutz
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
