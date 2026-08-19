import { motion, useScroll } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-ember via-ember-deep to-ember"
    />
  )
}
