import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, Mountain, Clock, Users, Sparkles } from 'lucide-react'
import { brand, packages, thumb } from '../data/site'
import Reveal from './Reveal'

// Combine featured and items into one unified balanced grid of 4 cards
const allPackages = [packages.featured, ...packages.items]

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="tours" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl md:mb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
            {packages.label}
          </p>
          <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-6xl">
            {packages.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist-dim md:text-lg">
            {packages.intro}
          </p>
        </Reveal>

        {/* Clean, symmetrical 2x2 grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {allPackages.map((p, i) => {
            return (
              <Reveal key={p.id} delay={0.08 * i}>
                <div className="group relative flex h-full min-h-[32rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/60 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-ember/10 md:min-h-[36rem] md:p-10">
                  {/* Background Image with parallax */}
                  <motion.div style={{ y }} className="absolute inset-0 -z-10">
                    <img
                      src={thumb(p.image, 1280)}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="block h-[115%] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-black/30" />

                  {/* Top Badges */}
                  <div className="mb-auto flex flex-wrap items-center gap-2.5">
                    {'badge' in p && typeof p.badge === 'string' && (
                      <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-3.5 py-1 text-xs font-bold text-ink shadow-md shadow-ember/20">
                        <Sparkles className="size-3" />
                        {p.badge}
                      </span>
                    )}
                    <span className="rounded-full glass px-3.5 py-1 text-xs font-medium text-mist">
                      {p.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="font-display text-3xl leading-tight tracking-tight text-mist md:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist/80 md:text-base">
                      {p.desc}
                    </p>

                    {/* Metadata Strip */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-white/10 py-3 text-xs text-mist/75">
                      <span className="flex items-center gap-1.5">
                        <Mountain className="size-3.5 text-ember" />
                        {p.elevation}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-ember" />
                        {p.duration}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1.5">
                        <Users className="size-3.5 text-ember" />
                        {p.groupSize}
                      </span>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-mist-dim">Starting from</p>
                        <p className="font-display text-3xl text-mist">
                          {p.price.replace('from ', '')}
                        </p>
                      </div>

                      <a
                        href={`mailto:${brand.email}?subject=${encodeURIComponent(p.name)}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-6 py-3 text.sm font-semibold text-ink shadow-lg shadow-ember/25 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.96]"
                      >
                        Reserve
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.3}>
          <p className="mt-14 text-center text-sm text-mist-dim">
            Every departure is private or small-group · Custom dates available year-round
          </p>
        </Reveal>
      </div>
    </section>
  )
}
