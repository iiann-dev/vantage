import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, Mountain, Clock, Users, BookOpen } from 'lucide-react'
import { brand, packages, thumb } from '../data/site'
import Reveal from './Reveal'
import ItineraryModal from './ItineraryModal'

const featured = packages.featured

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [36, -36])
  const [open, setOpen] = useState<(typeof packages)['items'][number] | typeof featured | null>(null)

  return (
    <section id="tours" ref={sectionRef} className="relative pb-24 pt-16 md:pb-36 md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl md:mb-20">
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

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* -------- featured card -------- */}
          <Reveal className="lg:col-span-1 xl:col-span-2 xl:row-span-2">
            <div className="group relative block h-full min-h-[30rem] overflow-hidden rounded-[1.75rem] transition-transform duration-500 ease-out hover:-translate-y-2 xl:min-h-[42rem]">
              <motion.div style={{ y }} className="absolute inset-0">
                <img
                  src={thumb(featured.image, 1280)}
                  alt={featured.name}
                  loading="lazy"
                  decoding="async"
                  className="h-[115%] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-br from-ember to-ember-deep px-4 py-1.5 text-xs font-bold text-ink">
                    {featured.badge}
                  </span>
                  <span className="rounded-full glass px-4 py-1.5 text-xs font-medium text-mist">
                    {featured.tag}
                  </span>
                </div>
                <h3 className="font-display text-3xl leading-[1.08] tracking-tight text-mist md:text-5xl">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist/80 md:text-base">
                  {featured.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.includes.slice(0, 4).map((inc) => (
                    <span
                      key={inc}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-mist/85 backdrop-blur-md"
                    >
                      {inc}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                  <p className="text-sm text-mist-dim">
                    <span className="font-display text-3xl text-mist md:text-4xl">
                      {featured.price.split('from')[1].trim()}
                    </span>
                    <span className="text-mist-dim"> {featured.price.split('from')[0]}per traveler</span>
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setOpen(featured)}
                      className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-mist transition-all hover:bg-white/15 active:scale-95"
                    >
                      <BookOpen className="size-4" />
                      Itinerary
                    </button>
                    <a
                      href={`mailto:${brand.email}?subject=${encodeURIComponent(featured.name)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ember to-ember-deep px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.05] active:scale-[0.96]"
                    >
                      {featured.cta}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* -------- small cards -------- */}
          {packages.items.map((p, i) => (
            <Reveal key={p.id} delay={0.12 + i * 0.08}>
              <div className="group relative block h-full min-h-[24rem] overflow-hidden rounded-[1.75rem] transition-transform duration-500 ease-out hover:-translate-y-2">
                <motion.div style={{ y }} className="absolute inset-0">
                  <img
                    src={thumb(p.image, 960)}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-[115%] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="mb-4 w-fit rounded-full glass px-3.5 py-1.5 text-xs font-medium text-mist">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-mist md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist/75">{p.desc}</p>

                  {/* Mini metadata strip */}
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <span className="flex items-center gap-1.5 text-[11px] text-mist/70">
                      <Mountain className="size-3" />
                      {p.elevation}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-mist/70">
                      <Clock className="size-3" />
                      {p.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-mist/70">
                      <Users className="size-3" />
                      {p.groupSize}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <p className="text-sm text-mist-dim">
                      {p.price.split('from')[0]}
                      <span className="font-display text-2xl text-mist">
                        {' '}
                        {p.price.split('from')[1].trim()}
                      </span>
                    </p>
                    <button
                      onClick={() => setOpen(p)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold text-mist backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
                    >
                      <BookOpen className="size-3.5" />
                      Itinerary
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.5}>
          <p className="mt-12 text-center text-sm text-mist-dim">
            Every tour is private · runs from 2 travelers · custom dates available year-round
          </p>
        </Reveal>
      </div>

      <ItineraryModal pkg={open} onClose={() => setOpen(null)} />
    </section>
  )
}
