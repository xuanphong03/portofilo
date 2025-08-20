'use client'
import {v4 as uuidv4} from 'uuid'
import {NavigationLinkType} from '@/src/types/header.interface'
import React, {useState} from 'react'
import LocaleSwitcher from '@/src/app/[locale]/(main-layout)/_components/LocaleSwitcher'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {cn} from '@/src/lib/utils'
import {useGSAP} from '@gsap/react'
interface NavDesktopProps {
  navLinks: NavigationLinkType[]
}

export default function NavDesktop({navLinks}: NavDesktopProps) {
  const [activeSection, setActiveSection] = useState<string>('#home')

  // Hàm scroll đến section
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id)
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {y: target, offsetY: 160},
        ease: 'power1.inOut',
      })
    }
  }

  // Xác định section đang active khi scroll
  // Kích hoạt navlink bằng ScrollTrigger
  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = []

      navLinks.forEach((link) => {
        if (link.href.startsWith('#') && link.href.length > 1) {
          const sectionId = link.href.replace('#', '')
          const sectionEl = document.getElementById(sectionId)
          if (sectionEl) {
            const trigger = ScrollTrigger.create({
              trigger: sectionEl,
              start: 'top center', // khi section vào giữa màn hình
              end: 'bottom center',
              onEnter: () => setActiveSection(link.href),
              onEnterBack: () => setActiveSection(link.href),
            })
            triggers.push(trigger)
          }
        }
      })

      // Xử lý Home (#) khi ở đầu trang
      const topTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 1,
        onEnter: () => setActiveSection('#home'),
        onEnterBack: () => setActiveSection('#home'),
      })
      triggers.push(topTrigger)

      return () => {
        triggers.forEach((t) => t.kill())
      }
    },
    {dependencies: [navLinks]},
  )

  return (
    <div className='flex items-center gap-4 max-sm:hidden'>
      <nav className='shrink-0'>
        <ul className='flex items-center space-x-[0.5rem]'>
          {navLinks?.map(({name, href}) => (
            <li key={uuidv4()}>
              <button
                type='button'
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo(href)
                }}
                className={cn(
                  'inline-block cursor-pointer p-[0.75rem] text-[1rem] leading-[160%] font-bold',
                  activeSection === href && 'text-linear-primary',
                )}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <LocaleSwitcher />
    </div>
  )
}
