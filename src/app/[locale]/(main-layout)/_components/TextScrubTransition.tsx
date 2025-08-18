'use client'
import {useEffect} from 'react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import {cn} from '@/src/lib/utils'

interface TextScrubAnimationProps {
  className?: string
  children: React.ReactNode
}

export default function TextScrubAnimation({className, children}: TextScrubAnimationProps) {
  useEffect(() => {
    // Create split
    new SplitType('[data-animate]', {
      types: 'lines,words,chars',
      tagName: 'span',
    })

    // Animate
    gsap.fromTo(
      '[data-animate] .char',
      {
        color: '#22c55e',
      },
      {
        opacity: 1,
        color: 'inherit',
        duration: 0.5,
        stagger: 0.1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '[data-animate]',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  }, [])

  return (
    <div
      data-animate
      className={cn('', className)}
    >
      {children}
    </div>
  )
}
