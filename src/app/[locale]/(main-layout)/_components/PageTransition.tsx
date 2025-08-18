'use client'
import gsap from 'gsap'
import {usePathname, useRouter} from 'next/navigation'
import React, {useCallback, useEffect, useRef} from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({children}: PageTransitionProps) {
  const router = useRouter()
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement[]>([])
  const isTransitioning = useRef(false)

  const coverPage = useCallback(
    (url: string) => {
      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      })
      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
        transformOrigin: 'left',
      })
    },
    [router],
  )

  const revealPage = () => {
    gsap.set(blocksRef.current, {scaleX: 1, transformOrigin: 'right'})
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      transformOrigin: 'right',
      onComplete: () => {
        isTransitioning.current = false
      },
    })
  }

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return
      overlayRef.current.innerHTML = ''
      blocksRef.current = []

      for (let i = 0; i < 20; i++) {
        const block = document.createElement('div')
        block.className = 'transition-block'
        overlayRef.current.appendChild(block)
        blocksRef.current.push(block)
      }
    }
    createBlocks()

    gsap.set(blocksRef.current, {scaleX: 0, transformOrigin: 'left'})

    revealPage()

    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return
      isTransitioning.current = true
      coverPage(url)
    }

    const links = document.querySelectorAll('a[href^="/"]')

    const handleLinkClick = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement | null
      if (!target) return
      const href = target.href
      const url = new URL(href).pathname
      if (url !== pathname) {
        handleRouteChange(url)
      }
    }

    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [router, pathname, coverPage])

  return (
    <>
      <div
        ref={overlayRef}
        className='transition-overlay'
      ></div>
      {children}
    </>
  )
}
