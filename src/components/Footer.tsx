import { useState, type FormEvent } from 'react'
import { brand, navLinks, footer } from '../data/site'
import BrandMark from './BrandMark'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 20c-.5-2 .3-4.5.8-6.5M12 9.5c.3-1 1.4-1.8 2.5-1.5 1.3.3 2 1.4 2 2.7 0 1.8-1.1 3.5-2.5 3.5-1 0-1.7-.9-1.4-1.8" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
    </svg>
  )
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="border-t border-white/10 bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr] md:py-20">
        {/* brand */}
        <div>
          <a href="#top">
            <BrandMark />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-dim">
            {footer.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {brand.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full glass text-mist-dim transition-all duration-200 hover:bg-white/15 hover:text-mist active:scale-[0.94]"
              >
                {s.label === 'Instagram' ? (
                  <InstagramIcon />
                ) : s.label === 'YouTube' ? (
                  <YoutubeIcon />
                ) : (
                  <PinterestIcon />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* nav */}
        <nav aria-label="Footer">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/60">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-mist/80 transition-colors hover:text-ember"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-mist/80 transition-colors hover:text-ember"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* contact */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/60">
            Write to us
          </p>
          <ul className="mt-5 space-y-3 text-sm text-mist/80">
            <li>
              <a href={`mailto:${brand.email}`} className="transition-colors hover:text-ember">
                {brand.email}
              </a>
            </li>
            <li>{brand.location}</li>
            <li>{brand.tagline}</li>
            <li className="text-mist-dim">{brand.priceRange} per journey</li>
          </ul>
        </div>

        {/* newsletter */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/60">
            Dawn notes
          </p>
          <p className="mt-5 text-sm leading-relaxed text-mist-dim">
            {footer.newsletterLine}
          </p>
          {subscribed ? (
            <p className="mt-5 w-fit rounded-full bg-ember/15 px-5 py-3 text-sm font-semibold text-ember">
              You are on the list. See you at dawn.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-5 flex items-center gap-2 rounded-full glass p-1.5"
            >
              <input
                type="email"
                required
                placeholder={footer.newsletterPlaceholder}
                className="w-full min-w-0 bg-transparent px-4 py-2 text-sm text-mist placeholder:text-mist/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-br from-ember to-ember-deep px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.04] active:scale-[0.96]"
              >
                {footer.newsletterButton}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-mist/50 md:flex-row">
          <p>{footer.legal}</p>
          <p>{footer.attribution}</p>
        </div>
      </div>
    </footer>
  )
}