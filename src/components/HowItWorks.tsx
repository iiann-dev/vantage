import { MapPin } from 'lucide-react'
import { howItWorks, brand } from '../data/site'
import Reveal from './Reveal'

export default function HowItWorks() {
  return (
    <section id="plan" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* -------- image column -------- */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={howItWorks.image}
                alt={howItWorks.imageCaption}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="glass-strong floaty-slow absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-2xl">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-ember to-ember-deep text-ink">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-mist">Volcano country</p>
                <p className="text-xs text-mist-dim">Bromo · Ijen · Tumpak Sewu</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* -------- steps column -------- */}
        <div>
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
              {howItWorks.label}
            </p>
            <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-5xl">
              {howItWorks.title}
            </h2>
          </Reveal>

          <div className="relative mt-12 border-l border-white/10 pl-8 md:pl-12">
            {howItWorks.steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={0.1 + i * 0.12}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[2.62rem] top-1.5 grid size-9 place-items-center rounded-full border border-white/15 bg-ink text-[11px] font-bold text-ember md:-left-[3.62rem]">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl tracking-tight text-mist md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-2.5 max-w-md text-base leading-relaxed text-mist-dim">
                  {s.line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember to-ember-deep px-8 py-4 text-sm font-semibold text-ink shadow-xl shadow-ember/20 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Start the conversation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}