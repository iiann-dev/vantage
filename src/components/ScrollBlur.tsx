import { motion, useScroll, useVelocity, useSpring, useTransform } from 'motion/react'

/**
 * ScrollBlur — Cinema-grade velocity scroll blur & peripheral depth vignette.
 * Responds dynamically to scroll velocity with an atmospheric peripheral blur.
 */
export default function ScrollBlur() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  // Smooth out velocity fluctuations with physics spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  })

  // Map velocity to a noticeable cinematic blur vignette and depth overlay
  const opacityAmount = useTransform(smoothVelocity, [-3000, -200, 0, 200, 3000], [0.65, 0.2, 0, 0.2, 0.65])
  const blurAmount = useTransform(smoothVelocity, [-3000, 0, 3000], ['blur(8px)', 'blur(0px)', 'blur(8px)'])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {/* Top & Bottom Edge Depth Blur Vignette */}
      <motion.div
        style={{ opacity: opacityAmount, backdropFilter: blurAmount }}
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/90 via-ink/40 to-transparent transition-opacity duration-150"
      />
      <motion.div
        style={{ opacity: opacityAmount, backdropFilter: blurAmount }}
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent transition-opacity duration-150"
      />
    </div>
  )
}
