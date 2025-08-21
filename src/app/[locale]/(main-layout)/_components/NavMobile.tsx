'use client'
import {v4 as uuidv4} from 'uuid'
import LocaleSwitcher from '@/src/app/[locale]/(main-layout)/_components/LocaleSwitcher'
import ICClose from '@/src/components/icons/ICClose'
import ICMenu from '@/src/components/icons/ICMenu'
import {Button} from '@/src/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/src/components/ui/drawer'
import {NavigationLinkType} from '@/src/types/header.interface'
import {Download, Facebook, Github, Linkedin, Twitter} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import ButtonBorderGradient from '@/src/app/_components/ButtonBorderGradient'
import {SocialItemType} from '@/src/types/global.interface'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const socials: SocialItemType[] = [
  {name: 'Github', icon: <Github />, href: 'https://github.com/xuanphong03'},
  {name: 'Linkedin', icon: <Linkedin />, href: 'https://www.linkedin.com/in/phong-nguyen-xuan-b0566134b/'},
  {name: 'Facebook', icon: <Facebook />, href: 'https://www.facebook.com/nguyen.x.phong.583'},
  {name: 'Twitter', icon: <Twitter />, href: 'https://x.com/PhongNguyn22693'},
]
interface NavMobileProps {
  navLinks: NavigationLinkType[]
}

export default function NavMobile({navLinks}: NavMobileProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('#home')
  console.log(activeSection)
  // Hàm scroll đến section
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id)
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {y: target, offsetY: 100},
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
    <>
      <button
        onClick={() => setOpen(true)}
        className='relative z-1 hidden translate-x-[0.5rem] items-center justify-center max-sm:flex'
      >
        <div className='flex size-10 items-center justify-center'>
          <ICMenu className='size-[1.25rem]' />
        </div>
      </button>
      <Drawer
        direction='right'
        open={open}
        onOpenChange={setOpen}
      >
        <DrawerContent className='hidden w-full! max-w-full border-none! text-white max-sm:block'>
          <DrawerHeader className='sr-only hidden'>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="font-lexend h-screen bg-[#121212] bg-[url('/background/concept-bg.webp')] bg-cover bg-fixed bg-top bg-no-repeat">
            <div className='relative container py-2 max-sm:px-0! max-sm:py-0'>
              <div className='relative z-0 w-full'>
                <Image
                  alt=''
                  width={375}
                  height={80}
                  className='h-auto w-full'
                  src='/background/header-bg-mb.svg'
                />
              </div>
              <div className='absolute top-1/2 left-0 z-1 flex w-full -translate-y-1/2 items-center justify-between text-white max-sm:px-[2rem]'>
                <Link
                  href={'/'}
                  className='flex items-end gap-2 text-[3rem] font-bold tracking-[0.025rem] max-sm:gap-0 max-sm:text-[1.25rem]'
                >
                  <div className='text-linear-primary flex items-start'>
                    <span className='mt-[0.25rem] block text-[1.5rem] max-sm:text-[0.75rem]'>N</span>
                    <span>Phong</span>
                  </div>
                </Link>

                <DrawerClose
                  asChild
                  className='translate-x-[0.5rem]'
                >
                  <Button className='size-10 bg-transparent! p-0!'>
                    <ICClose className='size-[1.25rem]' />
                  </Button>
                </DrawerClose>
              </div>
            </div>

            <div className='container flex flex-col gap-4'>
              <nav className=''>
                <ul>
                  {navLinks?.map(({name, href}) => (
                    <li
                      key={uuidv4()}
                      className='mb-[0.75rem] border-b border-solid border-[rgba(229,245,223,0.4)] pb-[0.75rem]'
                    >
                      <button
                        onClick={() => {
                          handleScrollTo(href)
                          setOpen(false)
                        }}
                        className='flex h-[2.875rem] items-center px-[0.875rem] py-[0.625rem] text-[1rem] leading-[160%] font-semibold tracking-[0.03125rem] uppercase'
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className='flex flex-col items-center gap-4'>
                <ButtonBorderGradient
                  size='lg'
                  className='w-full bg-[#23a26b] font-medium text-white before:hidden after:hidden'
                  iconRight={<Download />}
                >
                  Download CV
                </ButtonBorderGradient>
                <ul className='flex items-center gap-4'>
                  {socials?.map(({name, icon, href}) => (
                    <li key={uuidv4()}>
                      <Link
                        href={href}
                        target='_blank'
                        className='before:border-gradient-white relative flex size-[2.5rem] items-center justify-center rounded-full before:rounded-full before:bg-[linear-gradient(0deg,rgba(255,255,255,.25),rgba(255,255,255,1))] max-sm:size-[2rem] [&_svg]:relative [&_svg]:z-1 [&_svg]:size-[1.25rem] max-sm:[&_svg]:size-[1rem]'
                        aria-label={name}
                      >
                        {icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex h-[2.875rem] items-center px-[0.875rem]'>
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
