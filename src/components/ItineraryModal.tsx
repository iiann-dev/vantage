import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight, Mountain, Clock, Users, Sparkles, Sun, Cloud } from 'lucide-react'
import { brand, thumb } from '../data/site'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Pkg = (typeof import('../data/site').packages)['featured'] | (typeof import('../data/site').packages)['items'][number]

type Props = {
  pkg: Pkg | null
  onClose: () => void
}

export default function ItineraryModal({ pkg, onClose }: Props) {
  const sheetRef = useRef<HTMLDivElement>(null)

  // lock body scroll + close on ESC
  useEffect(() => {
    if (!pkg) return
    document.body.classList.add('no-scroll')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [pkg, onClose])

  return (
    <AnimatePresence>
      {pkg && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
          />

          {/* Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-x-0 bottom-0 z-[110] mx-auto max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-t-[2rem] bg-ink-2 shadow-[0_-30px_120px_-20px_rgba(0,0,0,0.8)] sm:inset-x-4 sm:bottom-4 sm:rounded-[2rem]"
          >
            <div
              ref={sheetRef}
              className="no-scrollbar grain relative max-h-[92vh] overflow-y-auto"
            >
              {/* Hero image */}
              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={thumb(pkg.image, 1280)}
                  alt={pkg.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/40 to-transparent" />
                <button
                  onClick={onClose}
                  aria-label="Close itinerary"
                  className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-ink/70 text-mist backdrop-blur-md transition-all hover:scale-105 hover:bg-ink active:scale-95"
                >
                  <X className="size-5" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <span className="mb-3 inline-flex rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                    {pkg.tag}
                  </span>
                  <h3 className="font-display text-3xl leading-[1.05] tracking-tight text-mist md:text-5xl">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-10 md:px-12 md:py-14">
                <p className="max-w-3xl text-base leading-relaxed text-mist-dim md:text-lg">
                  {pkg.desc}
                </p>

                {/* Quick metadata grid */}
                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    { icon: Mountain, label: 'Elevation', value: pkg.elevation },
                    { icon: Clock, label: 'Duration', value: pkg.duration },
                    { icon: Users, label: 'Group size', value: pkg.groupSize },
                    { icon: Sparkles, label: 'Difficulty', value: pkg.difficulty },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl glass p-4 transition-all hover:bg-white/10"
                    >
                      <m.icon className="mb-2 size-4 text-ember" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mist-dim">
                        {m.label}
                      </p>
                      <p className="mt-1 font-display text-base text-mist md:text-lg">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-12">
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                    What you will see
                  </p>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {pkg.highlights.map((h, i) => (
                      <motion.li
                        key={h}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                        className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3"
                      >
                        <span className="mt-1.5 grid size-1.5 shrink-0 place-items-center rounded-full bg-ember" />
                        <span className="text-sm leading-relaxed text-mist">{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Day-by-day */}
                <div className="mt-14">
                  <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                    Day by day
                  </p>
                  <div className="relative">
                    {/* timeline rail */}
                    <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-ember/50 via-white/10 to-transparent" />
                    <ol className="space-y-7">
                      {pkg.itinerary.map((d, i) => (
                        <motion.li
                          key={d.day}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
                          className="relative pl-14"
                        >
                          <span className="absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-ember/40 bg-ink text-[11px] font-bold text-ember">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mist-dim">
                            {d.day}
                          </p>
                          <h4 className="mt-1 font-display text-xl tracking-tight text-mist md:text-2xl">
                            {d.title}
                          </h4>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist-dim">
                            {d.detail}
                          </p>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Includes */}
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                      Included
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-sm text-mist">
                          <span className="mt-1.5 grid size-1.5 shrink-0 place-items-center rounded-full bg-ember" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                      On the day
                    </p>
                    <ul className="space-y-3 text-sm text-mist-dim">
                      <li className="flex items-start gap-3">
                        <Sun className="mt-0.5 size-4 shrink-0 text-ember" />
                        <span><strong className="text-mist">Pickup:</strong> {pkg.startCity}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Cloud className="mt-0.5 size-4 shrink-0 text-ember" />
                        <span><strong className="text-mist">Best season:</strong> {pkg.bestSeason}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="mt-0.5 size-4 shrink-0 text-ember" />
                        <span><strong className="text-mist">{pkg.rating}</strong> · {pkg.reviews}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mountain className="mt-0.5 size-4 shrink-0 text-ember" />
                        <span><strong className="text-mist">Drop-off:</strong> {pkg.endCity}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-10">
                  <p className="font-display text-3xl text-mist md:text-4xl">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-mist-dim">per traveler · all taxes and permits included</p>
                  <a
                    href={`mailto:${brand.email}?subject=${encodeURIComponent(pkg.name)}`}
                    className="mt-3 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-8 py-4 text-sm font-semibold text-ink shadow-2xl shadow-ember/30 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
                  >
                    {pkg.cta}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
