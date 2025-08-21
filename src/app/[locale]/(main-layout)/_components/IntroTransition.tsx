'use client'

import {useGSAP} from '@gsap/react'
import {useRef} from 'react'
import {gsap} from 'gsap'
import {SplitText} from 'gsap/SplitText'
import {CustomEase} from 'gsap/CustomEase'
import {useIsMobile} from '@/src/hooks/use-mobile'

gsap.registerPlugin(SplitText, CustomEase)

export default function IntroTransition({children}: {children: React.ReactNode}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const overlayCenterRef = useRef<HTMLDivElement | null>(null)
  const isTransitioning = useRef<boolean>(false)
  const isMobile = useIsMobile()

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 640
      const headingEl = headingRef.current
      const overlayCenterEl = overlayCenterRef.current
      if (isTransitioning.current || !headingEl || !overlayCenterEl) return
      const oneRem = parseFloat(getComputedStyle(document.documentElement).fontSize)
      const split = SplitText.create(headingEl, {type: 'words, chars'})
      CustomEase.create('hop', '.8, 0, .3, 1')
      gsap.to(split.chars.slice(1, split.chars.length - 5), {
        duration: 0.2,
        y: 200,
        stagger: 0.1,
        onComplete: () => {
          gsap.to(split.chars.slice(1, split.chars.length - 5), {
            duration: 0.3,
            width: '0',
          })
          gsap.to(split.chars[0], {
            scale: 0.5,
            y: isMobile ? `-${oneRem * 0.3}px` : `-${oneRem * 1.3}px`,
            x: isMobile ? `-${0}px` : `${oneRem * 2.2}px`,
            delay: 0.5,
            duration: 0.5,
          })
          gsap.to(split.chars.slice(split.chars.length - 5, split.chars.length), {
            x: isMobile ? `-${oneRem}px` : `-${oneRem * 2.2}px`,
            delay: 0.5,
            duration: 0.5,
          })
          gsap.to(overlayCenterEl, {
            clipPath: isMobile
              ? 'polygon(0% 49.5%, 100% 49.5%, 100% 50.5%, 0% 50.5%)'
              : 'polygon(0% 48.5%, 100% 48.5%, 100% 51.5%, 0% 51.5%)',
            delay: 1.2,
            duration: 0.75,
            onComplete: () => {
              // Phần này
              gsap.to(overlayCenterEl, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                delay: 0.1,
                duration: isMobile ? 1 : 0.5,
                onComplete: () => {
                  gsap.set(overlayCenterEl, {
                    height: 'auto',
                    overflow: 'auto',
                  })
                  isTransitioning.current = true
                },
              })
            },
          })
        },
      })
    },
    {dependencies: []},
  )

  return (
    <>
      <div
        ref={containerRef}
        className='fixed inset-0 z-10 flex items-center justify-center overflow-hidden'
      >
        <div className='absolute top-0 left-0 size-full bg-[#181818]'></div>

        <div className='relative z-10'>
          <div
            ref={headingRef}
            aria-label='Introduce Text'
            className='overflow-hidden text-[8rem] leading-none font-semibold tracking-[-0.025rem] text-[#f4efe7] max-sm:text-[2rem]'
          >
            NGUYEN XUAN PHONG
          </div>
        </div>
      </div>
      <div
        ref={overlayCenterRef}
        className='relative z-20 h-screen w-full overflow-hidden bg-white'
        style={{
          clipPath: isMobile
            ? 'polygon(0% 49.5%, 0% 49.5%, 0% 50.5%, 0% 50.5%)'
            : 'polygon(0% 48.5%, 0% 48.5%, 0% 51.5%, 0% 51.5%)',
        }}
      >
        {children}
      </div>
    </>
  )
}
