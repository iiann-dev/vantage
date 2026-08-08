import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data/site'
import BrandMark from './BrandMark'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full py-3 pl-6 pr-3 transition-all duration-500 ${
          scrolled || open
            ? 'glass-strong shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7)]'
            : 'glass'
        }`}
      >
        <a href="#top" aria-label="Vantage home">
          <BrandMark />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-mist-dim transition-colors duration-200 hover:bg-white/10 hover:text-mist"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${brand.email}`}
            className="hidden rounded-full bg-gradient-to-br from-ember to-ember-deep px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97] sm:inline-flex"
          >
            Reserve your dawn
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-mist transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass-strong absolute inset-x-4 top-20 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                  className="rounded-2xl px-4 py-3.5 font-display text-2xl text-mist transition-colors hover:bg-white/10"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${brand.email}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.4, ease: EASE }}
                className="mt-3 rounded-full bg-gradient-to-br from-ember to-ember-deep px-5 py-3.5 text-center text-sm font-semibold text-ink"
              >
                Reserve your dawn
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}