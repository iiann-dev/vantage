import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}