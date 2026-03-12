'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function NfcLandingPage() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [shake, setShake] = useState(false);
	const heroRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
	const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email.includes('@')) {
			setShake(true);
			setTimeout(() => setShake(false), 600);
			return;
		}
		setSubmitted(true);
	};

	// Pulse effect on load
	useEffect(() => {
		document.title = 'Geil, oder? – Taskey';
	}, []);

	return (
		<div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

			{/* ── HERO ── */}
			<section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

				{/* Animated grid background */}
				<div className="absolute inset-0"
					style={{
						backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}} />

				{/* Big glow */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
					style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)' }} />

				{/* NFC chip animation */}
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}>
					{/* Rings */}
					{[1, 2, 3, 4].map((i) => (
						<motion.div
							key={i}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20"
							style={{ width: i * 120, height: i * 120 }}
							animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.1, 0.3] }}
							transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
						/>
					))}
				</motion.div>

				<motion.div
					className="relative z-10 text-center max-w-4xl mx-auto"
					style={{ y: titleY, opacity: titleOpacity }}>

					{/* Tag label */}
					<motion.div
						className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 mb-8 text-yellow-400 text-xs font-bold tracking-[0.3em]"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<motion.span
							animate={{ opacity: [1, 0.3, 1] }}
							transition={{ duration: 1.2, repeat: Infinity }}>
							●
						</motion.span>
						NFC AKTIVIERT
					</motion.div>

					{/* Main headline */}
					<motion.h1
						className="font-black leading-[0.9] tracking-tighter mb-6"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}>
						GEIL,<br />
						<span className="text-yellow-400">ODER?</span>
					</motion.h1>

					{/* Sub */}
					<motion.p
						className="text-[#94A3B8] text-lg sm:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}>
						Genau so schnell checken deine Jungs auf der Baustelle<br className="hidden sm:block" />
						<strong className="text-white"> Werkzeug ein und aus.</strong> Kein Schwund mehr.
					</motion.p>

					{/* CTA arrow */}
					<motion.div
						className="flex justify-center"
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}>
						<div className="flex flex-col items-center gap-2 text-yellow-400/60">
							<span className="text-xs tracking-widest">WEITERLESEN</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* ── PROBLEM SECTION ── */}
			<section className="py-20 lg:py-32 px-6 relative">
				<div className="max-w-5xl mx-auto">
					<motion.p
						className="text-yellow-400 text-xs tracking-[0.4em] font-bold mb-4"
						initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }} viewport={{ once: true }}>
						DIE REALITÄT
					</motion.p>
					<motion.h2
						className="font-black leading-none tracking-tighter mb-16"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
						initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
						WERKZEUG <span className="text-yellow-400">VERSCHWINDET.</span><br />
						IMMER.
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
						{[
							{ stat: '€ 3.400', label: 'verliert ein Betrieb pro Jahr im Schnitt durch verschwundenes Werkzeug', icon: '💸' },
							{ stat: '1 von 3', label: 'Werkzeuge landet ohne Quittung im Kofferraum eines Mitarbeiters', icon: '🔧' },
							{ stat: '0 Sekunden', label: 'dauert das Ein- und Ausbuchen mit deinem neuen NFC-System', icon: '⚡' },
						].map((item, i) => (
							<motion.div
								key={i}
								className="border border-white/10 p-8 lg:p-10 hover:border-yellow-400/40 transition-colors"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.12 }}
								viewport={{ once: true }}>
								<div className="text-4xl mb-4">{item.icon}</div>
								<p className="text-yellow-400 font-black text-4xl lg:text-5xl mb-3"
									style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
									{item.stat}
								</p>
								<p className="text-[#94A3B8] text-sm font-light leading-relaxed">{item.label}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── HOW IT WORKS ── */}
			<section className="py-20 lg:py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">
				<div className="absolute inset-0 opacity-5"
					style={{ backgroundImage: 'radial-gradient(circle, #FACC15 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

				<div className="max-w-5xl mx-auto relative z-10">
					<motion.p
						className="text-yellow-400 text-xs tracking-[0.4em] font-bold mb-4"
						initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }} viewport={{ once: true }}>
						SO EINFACH GEHT&apos;S
					</motion.p>
					<motion.h2
						className="font-black leading-none tracking-tighter mb-16"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
						initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }} viewport={{ once: true }}>
						3 SCHRITTE.<br /><span className="text-yellow-400">FERTIG.</span>
					</motion.h2>

					<div className="space-y-0">
						{[
							{
								num: '01',
								title: 'CHIP DRAUFKLEBEN',
								desc: 'Du klebtst den NFC-Chip auf deine Flex, deinen Akkuschrauber, dein Gerüst – egal was. Dauert 3 Sekunden.',
								detail: 'Wetterfest · Industriekleber · Hält auf Metall',
							},
							{
								num: '02',
								title: 'HANDY RANHALTEN',
								desc: 'Dein Mitarbeiter hält sein Smartphone ran. Keine App. Kein Login. Öffnet sich direkt. So wie eben bei dir.',
								detail: 'Funktioniert auf jedem iPhone & Android · Kein Download nötig',
							},
							{
								num: '03',
								title: 'KEIN SCHWUND MEHR',
								desc: 'Du siehst in Echtzeit: Wer hat was. Wo ist es gerade. Wann wurde es zuletzt bewegt. Alles auf deinem Handy.',
								detail: 'Live-Dashboard · Push-Benachrichtigung bei Verschwinden · Export für Steuerberater',
							},
						].map((step, i) => (
							<motion.div
								key={i}
								className="flex gap-6 lg:gap-12 items-start py-10 lg:py-12 border-b border-white/10 group"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								viewport={{ once: true }}>
								<span className="text-yellow-400 font-black text-5xl lg:text-7xl leading-none shrink-0 group-hover:text-white transition-colors"
									style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
									{step.num}
								</span>
								<div>
									<h3 className="font-black text-2xl lg:text-4xl tracking-tight mb-3"
										style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
										{step.title}
									</h3>
									<p className="text-[#94A3B8] text-base lg:text-lg font-light leading-relaxed mb-3">
										{step.desc}
									</p>
									<p className="text-yellow-400/60 text-xs tracking-widest font-bold">{step.detail}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── BOLD STATEMENT ── */}
			<section className="py-20 lg:py-28 bg-yellow-400 overflow-hidden">
				<motion.div
					className="whitespace-nowrap"
					animate={{ x: ['-5%', '-20%'] }}
					transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'reverse' }}>
					<h2 className="text-[#0A0A0A] font-black leading-none"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(4rem, 12vw, 14rem)' }}>
						KEIN SCHWUND&nbsp;·&nbsp;KEIN STRESS&nbsp;·&nbsp;KEIN VERLUST&nbsp;·&nbsp;KEIN SCHWUND&nbsp;·&nbsp;KEIN STRESS&nbsp;·&nbsp;
					</h2>
				</motion.div>
			</section>

			{/* ── SOCIAL PROOF ── */}
			<section className="py-20 lg:py-32 px-6">
				<div className="max-w-5xl mx-auto">
					<motion.p
						className="text-yellow-400 text-xs tracking-[0.4em] font-bold mb-4"
						initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }} viewport={{ once: true }}>
						WAS ANDERE SAGEN
					</motion.p>
					<motion.h2
						className="font-black leading-none tracking-tighter mb-16"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(2rem, 5vw, 5rem)' }}
						initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }} viewport={{ once: true }}>
						DIE, DIE ES SCHON NUTZEN,<br /><span className="text-yellow-400">WOLLEN NICHT MEHR ZURÜCK.</span>
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
						{[
							{
								quote: '„Ich hab in 3 Monaten keine einzige Flex mehr vermisst. Früher hab ich 2x pro Monat Werkzeug nachgekauft."',
								name: 'Thomas K.',
								role: 'Gebäudereinigung, 18 Mitarbeiter',
							},
							{
								quote: '„Meine Jungs haben kein Bock auf Listen führen. Aber Handy ranhalten – das machen die sogar gerne."',
								name: 'Mehmet A.',
								role: 'Hausmeisterservice, 9 Mitarbeiter',
							},
							{
								quote: '„Das Beste: Wenn einer krank ist und ich wissen muss wo das Gerät ist – einmal aufs Handy schauen, fertig."',
								name: 'Sandra R.',
								role: 'Reinigungsbetrieb, 31 Mitarbeiter',
							},
							{
								quote: '„Hab meiner Steuerberaterin einfach den Export geschickt. Sie war begeistert. Ich auch."',
								name: 'Klaus W.',
								role: 'Handwerksbetrieb, 7 Mitarbeiter',
							},
						].map((t, i) => (
							<motion.div
								key={i}
								className="border border-white/10 p-8 lg:p-10 hover:border-yellow-400/30 transition-colors"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true }}>
								<div className="text-yellow-400 text-4xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
								<p className="text-[#E2E8F0] text-base lg:text-lg font-light leading-relaxed mb-6 italic">{t.quote}</p>
								<div className="flex items-center gap-3">
									<div className="w-1 h-8 bg-yellow-400" />
									<div>
										<p className="text-white font-bold text-sm">{t.name}</p>
										<p className="text-[#475569] text-xs">{t.role}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA / FORM SECTION ── */}
			<section className="py-20 lg:py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">

				{/* Glow */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
					style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)' }} />

				<div className="max-w-3xl mx-auto relative z-10 text-center">
					<motion.p
						className="text-yellow-400 text-xs tracking-[0.4em] font-bold mb-4"
						initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }} viewport={{ once: true }}>
						STARTE JETZT
					</motion.p>
					<motion.h2
						className="font-black leading-none tracking-tighter mb-6"
						style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(3rem, 10vw, 8rem)' }}
						initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }} viewport={{ once: true }}>
						14 TAGE<br /><span className="text-yellow-400">GRATIS.</span>
					</motion.h2>
					<motion.p
						className="text-[#94A3B8] text-lg font-light mb-12 leading-relaxed"
						initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
						Trag deine E-Mail ein — dein Account ist in <strong className="text-white">2 Minuten live.</strong><br />
						Keine Kreditkarte. Kein Abo-Trick. Einfach loslegen.
					</motion.p>

					<AnimatePresence mode="wait">
						{!submitted ? (
							<motion.form
								key="form"
								onSubmit={handleSubmit}
								className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.5, delay: 0.3 }}>
								<motion.input
									type="email"
									placeholder="deine@email.de"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="flex-1 px-6 py-5 bg-white/5 border border-white/20 text-white placeholder-[#475569] text-base outline-none focus:border-yellow-400 transition-colors"
									animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
									transition={{ duration: 0.4 }}
								/>
								<button
									type="submit"
									className="px-8 py-5 bg-yellow-400 text-[#0A0A0A] font-black text-sm tracking-widest hover:bg-white transition-colors whitespace-nowrap">
									JETZT STARTEN →
								</button>
							</motion.form>
						) : (
							<motion.div
								key="success"
								className="border-2 border-yellow-400 p-10 max-w-xl mx-auto"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, type: 'spring' }}>
								<div className="text-5xl mb-4">✅</div>
								<h3 className="font-black text-2xl text-yellow-400 mb-2"
									style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
									LÄUFT!
								</h3>
								<p className="text-[#94A3B8] font-light">
									Wir richten deinen Account ein.<br />
									Du bekommst in 2 Minuten eine E-Mail.
								</p>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Trust signals */}
					<motion.div
						className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-[#475569] font-light"
						initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
						{['🔒 SSL-verschlüsselt', '🇩🇪 Server in Deutschland', '✉️ Kein Spam', '❌ Jederzeit kündbar'].map(t => (
							<span key={t}>{t}</span>
						))}
					</motion.div>
				</div>
			</section>

			{/* ── URGENCY ── */}
			<section className="py-12 px-6 border-t border-white/10">
				<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
					<div className="flex items-center gap-4">
						<motion.div
							className="w-3 h-3 bg-yellow-400 rounded-full"
							animate={{ opacity: [1, 0.3, 1] }}
							transition={{ duration: 1, repeat: Infinity }} />
						<p className="text-[#94A3B8] text-sm">
							<strong className="text-white">Nur für Betriebe, die diesen NFC-Chip erhalten haben.</strong> Die ersten 14 Tage gehen auf uns.
						</p>
					</div>
					<a
						href="#top"
						onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
						className="px-6 py-3 bg-yellow-400 text-[#0A0A0A] text-xs font-black tracking-widest hover:bg-white transition-colors whitespace-nowrap">
						NACH OBEN ↑
					</a>
				</div>
			</section>

		</div>
	);
}
