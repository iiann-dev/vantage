import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { moments } from '../data/site'
import Reveal from './Reveal'

function Parallax({
  item,
  y,
  index,
}: {
  item: (typeof moments.items)[number]
  y: MotionValue<number>
  index: number
}) {
  return (
    <motion.figure
      style={{ y }}
      className="group relative aspect-[4/5] w-[78vw] shrink-0 snap-center overflow-hidden rounded-[1.75rem] sm:w-[52vw] md:w-[38vw] lg:w-[30vw] xl:w-[25vw]"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-full w-full scale-[1.12] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ember">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="font-display text-2xl leading-tight text-mist">{item.title}</h3>
        <p className="mt-1 text-sm text-mist/70">{item.caption}</p>
      </figcaption>
    </motion.figure>
  )
}

export default function Moments() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="moments" ref={sectionRef} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <Reveal className="max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
              {moments.label}
            </p>
            <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-6xl">
              {moments.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-dim md:text-lg">
              {moments.intro}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll moments left"
              onClick={() => scrollBy(-1)}
              className="grid size-12 place-items-center rounded-full glass text-mist transition-all duration-200 hover:bg-white/15 active:scale-[0.92]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll moments right"
              onClick={() => scrollBy(1)}
              className="grid size-12 place-items-center rounded-full glass text-mist transition-all duration-200 hover:bg-white/15 active:scale-[0.92]"
            >
              <ChevronRight className="size-5" />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 md:gap-7 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {moments.items.map((m, i) => (
            <Parallax key={m.title} item={m} y={y} index={i} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}