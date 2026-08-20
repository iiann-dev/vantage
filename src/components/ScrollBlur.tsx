import { motion, useScroll, useVelocity, useSpring, useTransform } from 'motion/react'

/**
 * ScrollBlur — Soft, subtle velocity scroll blur & peripheral depth vignette.
 * Gently responds to scroll velocity without distracting heavy blur.
 */
export default function ScrollBlur() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  // Smooth out velocity fluctuations with physics spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 350,
  })

  // Gentle velocity mapping: subtle maximum 3px blur vignette
  const opacityAmount = useTransform(smoothVelocity, [-3000, -300, 0, 300, 3000], [0.35, 0.1, 0, 0.1, 0.35])
  const blurAmount = useTransform(smoothVelocity, [-3000, 0, 3000], ['blur(3px)', 'blur(0px)', 'blur(3px)'])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {/* Soft Top & Bottom Edge Depth Vignette */}
      <motion.div
        style={{ opacity: opacityAmount, backdropFilter: blurAmount }}
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/70 via-ink/20 to-transparent transition-opacity duration-200"
      />
      <motion.div
        style={{ opacity: opacityAmount, backdropFilter: blurAmount }}
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-opacity duration-200"
      />
    </div>
  )
}
