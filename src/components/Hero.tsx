import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { tours, hero, brand } from '../data/site'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const { scrollY } = useScroll()
  const proofY = useTransform(scrollY, [0, 700], [0, 60])
  const fade = useTransform(scrollY, [0, 520], [1, 0])

  // Gentle auto-advance; pauses while the slider is being hovered.
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((i) => (i + 1) % tours.length), 9000)
    return () => clearInterval(t)
  }, [paused])

  const tour = tours[active]

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* ------- background crossfade: all slides mounted, CSS transition drives opacity ------- */}
      {tours.map((t, i) => (
        <div
          key={t.id}
          className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === active ? 'z-[2] opacity-100' : 'z-[1] scale-[1.05] opacity-0'
          }`}
          aria-hidden={i !== active}
        >
          <img
            src={t.image}
            alt={t.name}
            className="kenburns h-full w-full object-cover"
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {/* cinematic grading */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/70 via-black/20 to-ink" />
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(6,5,4,0.55) 100%)',
        }}
      />

      {/* ------- content: two-column editorial grid (no overlap) ------- */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-14 px-6 pb-16 pt-36 lg:pt-32 xl:grid-cols-[minmax(0,1fr)_20rem]"
      >
        {/* left: copy + CTAs + proof card */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold tracking-[0.14em] text-mist/90 uppercase"
          >
            <MapPin className="size-3.5 text-ember" />
            {brand.location}
          </motion.div>

          {/* headline + sub re-key on tour change; pure CSS animation, cannot stall */}
          <h1
            key={`h-${tour.id}`}
            className="rise-in max-w-3xl font-display text-5xl leading-[1.04] tracking-tight text-mist drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl xl:text-[4.6rem]"
          >
            {tour.headline}
          </h1>

          <p
            key={`s-${tour.id}`}
            className="rise-in-late mt-6 max-w-xl text-base leading-relaxed text-mist/90 sm:text-lg"
          >
            {tour.sub}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-8 py-4 text-sm font-semibold text-ink shadow-xl shadow-ember/25 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              {hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#tours"
              className="rounded-full glass px-8 py-4 text-sm font-medium text-mist transition-colors duration-200 hover:bg-white/15"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          {/* social proof card, in flow under the CTAs */}
          <motion.div style={{ y: proofY }} className="mt-12 hidden max-w-md lg:block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
              className="glass rounded-3xl p-6 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {hero.proof.avatars.map((a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt=""
                      loading="lazy"
                      className="size-10 rounded-full border-2 border-ink object-cover"
                    />
                  ))}
                  <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-gradient-to-br from-ember to-ember-deep text-[11px] font-bold text-ink">
                    12k
                  </span>
                </div>
                <div className="flex items-center gap-1 text-ember">
                  <Star className="size-4 fill-ember" />
                  <span className="text-sm font-semibold text-mist">4.97</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-mist">{hero.proof.stat}</p>
              <p className="mt-1 text-sm leading-relaxed text-mist-dim">{hero.proof.message}</p>
              <a
                href="#stories"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ember transition-colors hover:text-mist"
              >
                {hero.proof.cta}
                <ArrowRight className="size-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* right: tour highlight slider (desktop) */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="hidden flex-col gap-3 xl:flex"
        >
          <p className="px-1 pb-1 text-[11px] font-semibold tracking-[0.18em] text-mist/60 uppercase">
            The journeys
          </p>
          {tours.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={`group flex items-center gap-4 rounded-2xl p-3 text-left transition-all duration-500 ${
                i === active
                  ? 'glass-strong scale-[1.02] shadow-[0_18px_45px_-14px_rgba(0,0,0,0.75)]'
                  : 'glass opacity-75 hover:opacity-100'
              }`}
            >
              <span
                className={`relative size-16 shrink-0 overflow-hidden rounded-xl transition-all duration-500 ${
                  i === active ? 'ring-2 ring-ember/80' : 'ring-1 ring-white/15'
                }`}
              >
                <img src={t.image} alt="" loading="lazy" className="size-full object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-mist">{t.name}</span>
                <span className="mt-0.5 block truncate text-xs leading-snug text-mist-dim">
                  {t.desc}
                </span>
              </span>
            </button>
          ))}
        </motion.aside>
      </motion.div>

      {/* ------- mobile: horizontal tour strip (in flow) ------- */}
      <div className="relative z-10 px-6 pb-10 lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {tours.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={`w-64 shrink-0 snap-start rounded-2xl p-3 text-left transition-all duration-300 ${
                i === active ? 'glass-strong' : 'glass opacity-70'
              }`}
            >
              <span className="relative block h-28 w-full overflow-hidden rounded-xl">
                <img src={t.image} alt={t.name} loading="lazy" className="size-full w-full object-cover" />
              </span>
              <span className="mt-3 block text-sm font-semibold text-mist">{t.name}</span>
              <span className="mt-0.5 block text-xs text-mist-dim">{t.desc}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-3">
            {hero.proof.avatars.slice(0, 4).map((a, i) => (
              <img
                key={i}
                src={a}
                alt=""
                loading="lazy"
                className="size-9 rounded-full border-2 border-ink object-cover"
              />
            ))}
          </div>
          <p className="text-xs font-medium text-mist/85">
            {hero.proof.stat}
            <span className="text-mist-dim"> · {hero.proof.rating.split('·')[1]}</span>
          </p>
        </div>
      </div>
    </section>
  )
}