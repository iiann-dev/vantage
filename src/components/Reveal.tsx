import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  blur = true,
  scale = 0.98,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  blur?: boolean
  scale?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        scale: reduce ? 1 : scale,
        filter: blur && !reduce ? 'blur(8px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.95, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
