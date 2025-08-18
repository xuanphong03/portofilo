'use client'
import React, {useEffect, useRef} from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion'

interface NumberTransitionProps {
  value: string
}

export default function NumberTransition({value}: NumberTransitionProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {once: true})

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, Number(value), {
        duration: 2,
        ease: 'easeOut',
      })
      return () => controls.stop()
    }
  }, [isInView, value]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.span
      ref={ref}
      initial={{opacity: 0, y: 20}}
      animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
      transition={{duration: 0.5, ease: 'easeOut'}}
    >
      {rounded}
    </motion.span>
  )
}
