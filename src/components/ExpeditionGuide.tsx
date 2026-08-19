import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { Mountain, Thermometer, Backpack, Check, Plus, Sun } from 'lucide-react'
import { expedition, brand } from '../data/site'
import Reveal from './Reveal'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ExpeditionGuide() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const [tab, setTab] = useState<'seasons' | 'altitude' | 'gear'>('seasons')
  const [openGear, setOpenGear] = useState<string | null>(expedition.gear.provided[0].name)

  const peakMonths = expedition.seasons.filter((s) => s.rating === 5)

  return (
    <section
      id="expedition"
      ref={sectionRef}
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* Seamless background blend with smooth radial fade */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg/1920px-Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg"
          alt=""
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
            {expedition.label}
          </p>
          <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-6xl">
            {expedition.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-dim md:text-lg">
            {expedition.intro}
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2.5">
            {[
              { id: 'seasons' as const, label: 'Best seasons', icon: Sun },
              { id: 'altitude' as const, label: 'Altitude & climate', icon: Mountain },
              { id: 'gear' as const, label: 'Gear & what we provide', icon: Backpack },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  tab === t.id
                    ? 'bg-gradient-to-br from-ember to-ember-deep text-ink shadow-lg shadow-ember/25'
                    : 'glass text-mist-dim hover:text-mist hover:bg-white/10'
                }`}
              >
                <t.icon className="size-4" />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab contents */}
        <AnimatePresence mode="wait">
          {tab === 'seasons' && (
            <motion.div
              key="seasons"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid gap-8 lg:grid-cols-[1.4fr_1fr]"
            >
              {/* Season matrix */}
              <div className="rounded-3xl glass p-6 md:p-8">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                  Month-by-month
                </p>
                <div className="grid grid-cols-6 gap-2 sm:gap-3 md:grid-cols-12">
                  {expedition.seasons.map((s, i) => (
                    <motion.div
                      key={s.month}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.03 * i, duration: 0.4, ease: EASE }}
                      className="group relative flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition-all hover:border-ember/40 hover:bg-white/[0.06]"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mist-dim">
                        {s.month}
                      </span>
                      <div className="flex h-12 w-full items-end justify-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 rounded-full transition-all ${
                              idx < s.rating
                                ? 'bg-gradient-to-t from-ember to-ember-deep'
                                : 'bg-white/10'
                            }`}
                            style={{ height: `${20 + idx * 16}%` }}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-mist/60">{s.rain}</span>
                      {s.rating === 5 && (
                        <span className="absolute -top-1.5 -right-1.5 grid size-4 place-items-center rounded-full bg-ember text-[8px] font-bold text-ink breathe">
                          ★
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-mist-dim">
                  Bars = travel rating (1–5). Temperature = average for Surabaya to mountain rim. Orange stars = peak months.
                </p>
              </div>

              {/* Peak season callout */}
              <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-gradient-to-br from-ember/15 via-ember/5 to-transparent p-8">
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-ember/20 blur-3xl" />
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                  Peak window
                </p>
                <h3 className="font-display text-3xl leading-[1.1] text-mist md:text-4xl">
                  May through September.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-dim">
                  Five consecutive months of clear skies, cold crisp sunrises, and the most reliable blue fire on Ijen. June and July are the coldest — think 2°C at the crater rim — but also the clearest.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {peakMonths.map((m) => (
                    <span
                      key={m.month}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-mist"
                    >
                      {m.month}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'altitude' && (
            <motion.div
              key="altitude"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-3xl glass p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-ember to-ember-deep text-ink">
                    <Thermometer className="size-5" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                    {expedition.altitude.title}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-mist-dim">
                  {expedition.altitude.intro}
                </p>
                <div className="mt-6 space-y-3">
                  {expedition.altitude.stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.4, ease: EASE }}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mist-dim">
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-xs text-mist/70">{s.note}</p>
                      </div>
                      <span className="font-display text-2xl text-mist md:text-3xl">{s.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Elevation profile visualization */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                  Elevation profile
                </p>
                <div className="relative h-72">
                  <svg viewBox="0 0 340 280" className="h-full w-full">
                    <defs>
                      <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e8914e" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#e8914e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="240" x2="340" y2="240" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="340" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="340" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <path
                      d="M 0 240 Q 30 230 60 200 Q 90 175 120 165 Q 150 155 180 150 Q 220 142 250 130 Q 280 115 305 95 Q 325 75 340 50 L 340 240 Z"
                      fill="url(#ridge)"
                    />
                    <path
                      d="M 0 240 Q 30 230 60 200 Q 90 175 120 165 Q 150 155 180 150 Q 220 142 250 130 Q 280 115 305 95 Q 325 75 340 50"
                      stroke="#e8914e"
                      strokeWidth="2"
                      fill="none"
                    />
                    <g fontFamily="var(--font-sans)" fontSize="9" fill="rgba(255,255,255,0.7)">
                      <circle cx="0" cy="240" r="4" fill="#f4ede2" />
                      <text x="10" y="252">Surabaya 5m</text>
                      <circle cx="60" cy="215" r="4" fill="#f4ede2" />
                      <text x="68" y="226">Malang 476m</text>
                      <circle cx="120" cy="165" r="4" fill="#e8914e" />
                      <text x="128" y="160">Cemoro 2,200m</text>
                      <circle cx="180" cy="150" r="4" fill="#e8914e" />
                      <text x="188" y="145">Bromo 2,329m</text>
                      <circle cx="250" cy="130" r="4" fill="#e8914e" />
                      <text x="258" y="125">Bondowoso 2,400m</text>
                      <circle cx="305" cy="95" r="5" fill="#e8914e" />
                      <text x="290" y="86">Ijen 2,799m</text>
                    </g>
                  </svg>
                </div>
                <p className="mt-4 text-xs text-mist-dim">
                  Cross-section from coast to summit. We acclimatize at Cemoro Lawang on every tour to soften the climb.
                </p>
              </div>
            </motion.div>
          )}

          {tab === 'gear' && (
            <motion.div
              key="gear"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* What we provide */}
              <div className="rounded-3xl border border-ember/20 bg-gradient-to-br from-ember/10 via-transparent to-transparent p-7 md:p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                  What we provide
                </p>
                <h3 className="mb-6 font-display text-2xl text-mist md:text-3xl">
                  Field-grade, on the mountain.
                </h3>
                <ul className="space-y-2.5">
                  {expedition.gear.provided.map((g) => (
                    <li key={g.name}>
                      <button
                        onClick={() => setOpenGear(openGear === g.name ? null : g.name)}
                        className="flex w-full items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 text-left transition-colors hover:bg-white/10"
                      >
                        <span className="flex items-center gap-3">
                          <span className="grid size-6 place-items-center rounded-full bg-ember/30 text-ember">
                            <Check className="size-3" />
                          </span>
                          <span className="text-sm font-medium text-mist">{g.name}</span>
                        </span>
                        <Plus
                          className={`size-4 text-mist-dim transition-transform ${
                            openGear === g.name ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openGear === g.name && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden px-4 pt-2 text-xs leading-relaxed text-mist-dim"
                          >
                            {g.detail}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you bring */}
              <div className="rounded-3xl glass p-7 md:p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                  What you bring
                </p>
                <h3 className="mb-6 font-display text-2xl text-mist md:text-3xl">
                  Pack light, layer smart.
                </h3>
                <ul className="space-y-3.5">
                  {expedition.gear.bring.map((g, i) => (
                    <motion.li
                      key={g.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 grid size-1.5 shrink-0 place-items-center rounded-full bg-ember" />
                      <div>
                        <p className="text-sm font-medium text-mist">{g.name}</p>
                        <p className="text-xs leading-relaxed text-mist-dim">{g.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp prompt with compact bottom margin */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-2.5 text-center">
            <p className="text-sm text-mist-dim">
              Have a specific question about your gear, your window, or your route?
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 text-xs font-medium text-mist transition-all hover:border-ember/40 hover:bg-white/10 sm:text-sm"
            >
              Ask us on WhatsApp · We reply in an hour
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
