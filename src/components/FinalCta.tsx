import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { finalCta, brand } from '../data/site'
import Reveal from './Reveal'

export default function FinalCta() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.7, 1], [0, 80])

  return (
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden pt-28 pb-32 md:pt-36 md:pb-40">
      {/* Parallax Background Image with smooth multi-stop gradient mask */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={finalCta.image}
          alt="Mist rolling over a volcano ridge at golden hour"
          loading="lazy"
          decoding="async"
          className="h-[120%] w-full object-cover object-center"
        />
      </motion.div>

      {/* Silky smooth gradient blend from previous section (top) and into footer (bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      
      {/* Secondary atmospheric radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232, 145, 78, 0.12), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ember">
            {finalCta.label}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-5xl leading-[1.04] tracking-tight text-mist drop-shadow-2xl md:text-7xl">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist/85 md:text-lg">
            {finalCta.line}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${brand.email}?subject=${encodeURIComponent('Expedition Reservation')}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-9 py-4 text-sm font-semibold text-ink shadow-2xl shadow-ember/30 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
            >
              {finalCta.cta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={`mailto:${brand.email}?subject=${encodeURIComponent('Questions before booking')}`}
              className="rounded-full glass px-9 py-4 text-sm font-medium text-mist transition-colors duration-200 hover:bg-white/15 active:scale-95"
            >
              {finalCta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
