import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/site'
import Reveal from './Reveal'

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev())
      setCanNext(emblaApi.canScrollNext())
    }
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi])

  const scroll = useCallback(
    (dir: 1 | -1) => {
      if (!emblaApi) return
      if (dir === 1) emblaApi.scrollNext()
      else emblaApi.scrollPrev()
    },
    [emblaApi]
  )

  return (
    <section id="stories" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <Reveal className="max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
              {testimonials.label}
            </p>
            <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-mist md:text-6xl">
              {testimonials.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-dim md:text-lg">
              {testimonials.intro}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex gap-3">
            <button
              type="button"
              aria-label="Previous story"
              disabled={!canPrev}
              onClick={() => scroll(-1)}
              className="grid size-12 place-items-center rounded-full glass text-mist transition-all duration-200 hover:bg-white/15 active:scale-[0.92] disabled:opacity-35"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next story"
              disabled={!canNext}
              onClick={() => scroll(1)}
              className="grid size-12 place-items-center rounded-full glass text-mist transition-all duration-200 hover:bg-white/15 active:scale-[0.92] disabled:opacity-35"
            >
              <ChevronRight className="size-5" />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="overflow-hidden">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
            <div className="flex gap-5 px-6 md:gap-7 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
              {testimonials.items.map((t, i) => (
                <div
                  key={t.name}
                  className="w-[86vw] shrink-0 snap-start sm:w-[26rem]"
                  style={{ animationDelay: `${(i % 3) * 0.9}s` }}
                >
                  <div
                    className={`glass flex h-full flex-col rounded-[1.75rem] p-8 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.6)] ${
                      i % 2 === 0 ? 'floaty' : 'floaty-slow'
                    }`}
                  >
                    <div className="flex items-center gap-1.5" aria-label={`${t.stars} star rating`}>
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="size-4 fill-ember text-ember" />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-mist">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-6">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="size-11 rounded-full object-cover ring-2 ring-white/15"
                      />
                      <div>
                        <p className="text-sm font-semibold text-mist">{t.name}</p>
                        <p className="text-xs text-mist-dim">{t.origin}</p>
                      </div>
                    </figcaption>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}