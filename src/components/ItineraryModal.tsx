import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight, Mountain, Clock, Users, Sparkles, Compass, ShieldCheck } from 'lucide-react'
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
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Sheet Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-x-0 bottom-0 z-[110] mx-auto max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-t-[2.5rem] border-t border-white/15 bg-ink-2 shadow-[0_-30px_120px_-20px_rgba(0,0,0,0.9)] sm:inset-x-4 sm:bottom-4 sm:rounded-[2.5rem] sm:border"
          >
            <div
              ref={sheetRef}
              className="no-scrollbar grain relative max-h-[92vh] overflow-y-auto"
            >
              {/* Hero image header */}
              <div className="relative h-72 overflow-hidden md:h-96">
                <img
                  src={thumb(pkg.image, 1280)}
                  alt={pkg.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/50 to-transparent" />
                <button
                  onClick={onClose}
                  aria-label="Close itinerary"
                  className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-ink/75 text-mist backdrop-blur-md transition-all hover:scale-105 hover:bg-ink active:scale-95"
                >
                  <X className="size-5" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                      {pkg.tag}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs text-mist/80">
                      {pkg.startCity} → {pkg.endCity}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl leading-[1.05] tracking-tight text-mist md:text-5xl">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-10 md:px-12 md:py-14">
                <p className="max-w-3xl text-base leading-relaxed text-mist-dim md:text-lg">
                  {pkg.desc}
                </p>

                {/* Key Spec Grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: Mountain, label: 'Max Altitude', value: pkg.elevation },
                    { icon: Clock, label: 'Duration', value: pkg.duration },
                    { icon: Users, label: 'Capacity', value: pkg.groupSize },
                    { icon: Compass, label: 'Difficulty', value: pkg.difficulty },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-ember/30"
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

                {/* Expedition Highlights */}
                <div className="mt-12">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                    Curated Highlights
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {pkg.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-mist"
                      >
                        <Sparkles className="size-3.5 shrink-0 text-ember" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Day by Day Itinerary */}
                <div className="mt-14">
                  <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                        Complete Schedule
                      </p>
                      <h4 className="mt-1 font-display text-2xl tracking-tight text-mist md:text-3xl">
                        Day by Day Arc
                      </h4>
                    </div>
                    <span className="text-xs text-mist-dim">Time tuned for peak natural light</span>
                  </div>

                  <div className="relative">
                    {/* timeline rail */}
                    <div className="absolute left-[19px] top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-ember via-white/15 to-transparent" />
                    
                    <ol className="space-y-8">
                      {pkg.itinerary.map((d, i) => (
                        <li key={d.day} className="relative pl-14">
                          <span className="absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-ember/50 bg-ink text-xs font-bold text-ember shadow-md shadow-ember/15">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-ember">
                              {d.day}
                            </span>
                            <span className="text-white/20">•</span>
                            <h5 className="font-display text-xl tracking-tight text-mist md:text-2xl">
                              {d.title}
                            </h5>
                          </div>
                          <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-mist-dim md:text-base">
                            {d.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Inclusions & Logistics Box */}
                <div className="mt-14 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <ShieldCheck className="size-4 text-ember" />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                        Included in Package
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-mist/90">
                      {pkg.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ember" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Compass className="size-4 text-ember" />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                        Logistics & Requirements
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-mist-dim">
                      <p><strong className="text-mist">Meeting Gate:</strong> Private pickup at {pkg.startCity}</p>
                      <p><strong className="text-mist">Final Drop-off:</strong> Return to {pkg.endCity} hotel/airport</p>
                      <p><strong className="text-mist">Best Window:</strong> {pkg.bestSeason}</p>
                      <p><strong className="text-mist">Rating:</strong> {pkg.rating} ({pkg.reviews})</p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mist-dim">Total package rate</p>
                    <p className="font-display text-3xl text-mist md:text-4xl">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-mist-dim">Per guest · All permits, stays & transit covered</p>
                  </div>
                  <a
                    href={`mailto:${brand.email}?subject=${encodeURIComponent(`Reservation Request: ${pkg.name}`)}`}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-9 py-4 text-sm font-semibold text-ink shadow-2xl shadow-ember/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
                  >
                    Reserve this Journey
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
