'use client'
import {v4 as uuidv4} from 'uuid'

import ButtonBorderGradient from '@/src/app/_components/ButtonBorderGradient'
import {SocialItemType} from '@/src/types/global.interface'
import {Download, Facebook, Github, Linkedin, Twitter} from 'lucide-react'
import Link from 'next/link'
import React, {useRef} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {TextPlugin} from 'gsap/TextPlugin'
import Image from 'next/image'

gsap.registerPlugin(TextPlugin)

const words = ['Nguyen Xuan Phong', 'Frontend Developer']

const socials: SocialItemType[] = [
  {icon: <Github />, href: 'https://github.com/xuanphong03'},
  {icon: <Linkedin />, href: 'https://www.linkedin.com/in/phong-nguyen-xuan-b0566134b/'},
  {icon: <Facebook />, href: 'https://www.facebook.com/nguyen.x.phong.583'},
  {icon: <Twitter />, href: 'https://x.com/PhongNguyn22693'},
]

export default function Introduce() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const animatedText = useRef<HTMLSpanElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 640
      const cursorEl = cursorRef.current
      const animatedTextEl = animatedText.current
      const avatarEl = avatarRef.current
      if (!cursorEl || !animatedTextEl) return
      const typingTextEffect = () => {
        gsap.to(cursorEl, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: 'power2.inOut',
        })

        const tlMaster = gsap.timeline({repeat: -1})
        words.forEach((word) => {
          const tlText = gsap.timeline({repeat: 1, yoyo: true})
          tlText.to(animatedTextEl, {
            duration: 2.5,
            text: word,
            ease: 'power1.inOut',
          })
          tlMaster.add(tlText)
        })
      }
      const spinAvatarEffect = () => {
        gsap.to(avatarEl, {
          rotationY: 360, // quay ngang (trục Y)
          repeat: -1, // lặp vô hạn
          duration: 10, // thời gian 1 vòng
          ease: 'linear', // đều
          transformOrigin: 'center center',
        })
      }
      // Quay avatar trái sang phải liên tục

      typingTextEffect()
      if (!isMobile) {
        spinAvatarEffect()
      }
    },
    {scope: containerRef, dependencies: []},
  )

  return (
    <section
      id='home'
      ref={containerRef}
      className='font-lexend relative h-screen text-white max-sm:h-auto max-sm:pt-[5rem]'
    >
      <Image
        alt=''
        width={20}
        height={20}
        src='/images/star.svg'
        className='absolute top-[10.125rem] left-[43.3125rem] z-0 max-sm:hidden'
      />
      <Image
        alt=''
        width={20}
        height={20}
        src='/images/star.svg'
        className='absolute top-[8.0625rem] left-[4.0625rem] z-0 max-sm:hidden'
      />
      <Image
        alt=''
        width={20}
        height={20}
        src='/images/star.svg'
        className='absolute top-[43.75rem] left-[26.9375rem] z-0 max-sm:hidden'
      />

      <div className='relative z-1 container flex h-full flex-col items-center justify-center gap-20'>
        <div className='flex items-center justify-between self-stretch max-sm:flex-col max-sm:gap-10'>
          <div className='flex w-[35.375rem] flex-col gap-8 max-sm:w-full max-sm:gap-4'>
            <h1 className='font-plus-jakarta-sans text-[3.5rem] leading-[120%] font-bold tracking-[-0.03125rem] max-sm:text-center max-sm:text-[1.75rem] max-sm:leading-[150%] max-sm:tracking-[-0.03125rem]'>
              Hello I'm <br />
              <div className='h-[4.25rem] max-sm:h-[2.625rem]'>
                <span
                  ref={animatedText}
                  className='text-linear-primary'
                ></span>
                <span
                  ref={cursorRef}
                  className='inline-block h-[3rem] w-[0.25rem] translate-y-[0.25rem] bg-[linear-gradient(0deg,#d8f8e1_0%,#98efaf_100%)] max-sm:h-[1.75rem] max-sm:w-[0.125rem]'
                ></span>
              </div>
            </h1>
            <p className='text-[1rem] leading-[160%] font-normal text-white/80 max-sm:text-center max-sm:text-[0.875rem]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui labore mollitia harum, porro minima
              tenetur omnis delectus, doloribus sint incidunt. Quam in doloremque hic laborum ipsa vitae nemo
              recusandae.
            </p>
            <div className='flex items-center gap-6 max-sm:flex-col max-sm:gap-4'>
              <ButtonBorderGradient iconRight={<Download />}>Download CV</ButtonBorderGradient>
              <ul className='flex items-center gap-4'>
                {socials?.map(({icon, href}) => (
                  <li key={uuidv4()}>
                    <Link
                      href={href}
                      target='_blank'
                      className='before:border-gradient-white relative flex size-[2.5rem] items-center justify-center rounded-full before:rounded-full before:bg-[linear-gradient(0deg,rgba(255,255,255,.25),rgba(255,255,255,1))] max-sm:size-[2rem] [&_svg]:relative [&_svg]:z-1 [&_svg]:size-[1.25rem] max-sm:[&_svg]:size-[1rem]'
                    >
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            ref={avatarRef}
            className='after:border-gradient-white relative size-[32.5rem] overflow-hidden rounded-full after:rounded-full after:bg-[linear-gradient(0deg,#d8f8e1_0%,#98efaf_100%))] after:p-[0.125rem] max-sm:size-full'
          >
            <Image
              alt=''
              width={520}
              height={520}
              className='size-full object-cover'
              src='/images/avatar.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
