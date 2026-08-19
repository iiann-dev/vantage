import { motion, useScroll, useVelocity, useSpring, useTransform } from 'motion/react'

/**
 * ScrollBlur — Cinema-grade velocity scroll blur & peripheral depth.
 *
 * Measures scroll velocity and dynamically responds with a subtle
 * peripheral blur vignette and atmosphere depth effect during active scrolling.
 */
export default function ScrollBlur() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  // Smooth out velocity fluctuations with physics spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 350,
  })

  // Map velocity to a subtle blur radius (0px when still, up to 4px during fast scroll)
  const opacityAmount = useTransform(smoothVelocity, [-2500, 0, 2500], [0.4, 0, 0.4])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {/* Top & Bottom Edge Depth Vignette */}
      <motion.div
        style={{ opacity: opacityAmount }}
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/90 via-ink/30 to-transparent backdrop-blur-[3px] transition-opacity duration-200"
      />
      <motion.div
        style={{ opacity: opacityAmount }}
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent backdrop-blur-[3px] transition-opacity duration-200"
      />
    </div>
  )
}
