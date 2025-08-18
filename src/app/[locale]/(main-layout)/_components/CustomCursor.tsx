'use client'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

export default function CustomCursor() {
  useGSAP(
    () => {
      const isMobile = window.innerWidth < 640
      if (isMobile) return
      const cursor = document.createElement('div')
      cursor.classList.add('custom-cursor')
      document.body.appendChild(cursor)

      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5, // thời gian chuyển động (mượt)
          ease: 'power3.out', // easing mượt mà
        })
      }

      window.addEventListener('mousemove', moveCursor)

      return () => {
        window.removeEventListener('mousemove', moveCursor)
        cursor.remove()
      }
    },
    {dependencies: []},
  )
  return null
}
