import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import { faq, brand } from '../data/site'
import Reveal from './Reveal'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
              {faq.label}
            </p>
            <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-5xl">
              {faq.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist-dim">
              {faq.intro}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ember to-ember-deep px-6 py-3 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
            >
              Message the team
            </a>
          </Reveal>

          <div>
            <div className="space-y-3">
              {faq.items.map((item, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={item.q} delay={0.04 * i}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'border-ember/40 bg-ember/[0.04]'
                          : 'border-white/10 bg-white/[0.03]'
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-white/[0.04] md:px-6"
                      >
                        <span className="flex items-center gap-4">
                          <span
                            className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold transition-all ${
                              isOpen
                                ? 'bg-gradient-to-br from-ember to-ember-deep text-ink'
                                : 'border border-white/15 text-mist-dim'
                            }`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-lg text-mist md:text-xl">
                            {item.q}
                          </span>
                        </span>
                        <Plus
                          className={`size-5 shrink-0 text-mist-dim transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-6 pl-[4.25rem] pr-6 text-sm leading-relaxed text-mist-dim md:text-base">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm leading-relaxed text-mist-dim">
                  Still wondering something? We answer WhatsApp within an hour, Surabaya time.
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-3 inline-flex text-sm font-semibold text-ember transition-colors hover:text-mist"
                >
                  {brand.email} →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
