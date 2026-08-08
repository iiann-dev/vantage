import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { finalCta, brand } from '../data/site'
import Reveal from './Reveal'

export default function FinalCta() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.6, 1], [0, 140])

  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden py-32">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={finalCta.image}
          alt="Mist rolling over a volcano ridge at golden hour"
          loading="lazy"
          decoding="async"
          className="h-[120%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(6,5,4,0.75) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-ember">
            {finalCta.label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl leading-[1.04] tracking-tight text-mist drop-shadow-2xl md:text-7xl">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mist/80">
            {finalCta.line}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-9 py-4.5 text-sm font-semibold text-ink shadow-2xl shadow-ember/30 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
            >
              {finalCta.cta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={`mailto:${brand.email}?subject=${encodeURIComponent('Questions before booking')}`}
              className="rounded-full glass px-9 py-4.5 text-sm font-medium text-mist transition-colors duration-200 hover:bg-white/15"
            >
              {finalCta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}