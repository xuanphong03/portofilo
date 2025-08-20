'use client'
import {v4 as uuidv4} from 'uuid'
import React from 'react'
import {SocialItemType} from '@/src/types/global.interface'
import {Facebook, Github, Linkedin, Twitter} from 'lucide-react'
import Link from 'next/link'
import {useTranslations} from 'next-intl'

const socials: SocialItemType[] = [
  {icon: <Github />, href: 'https://github.com/xuanphong03'},
  {icon: <Linkedin />, href: 'https://www.linkedin.com/in/phong-nguyen-xuan-b0566134b/'},
  {icon: <Facebook />, href: 'https://www.facebook.com/nguyen.x.phong.583'},
  {icon: <Twitter />, href: 'https://x.com/PhongNguyn22693'},
]
export default function ContactInfo() {
  const t = useTranslations('ContactInfo')

  return (
    <div className='font-lexend flex flex-col gap-[1.5rem] max-sm:gap-[1rem]'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-[1rem] leading-[130%] text-[#999] max-sm:text-[0.75rem] max-sm:leading-[120%]'>
          {t('labelEmail')}
        </h3>
        <p className='text-[1.75rem] leading-[2.33313rem] text-white max-sm:text-[1.25rem] max-sm:leading-none'>
          xphong.fullstack03@gmail.com
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-[1rem] leading-[130%] text-[#999] max-sm:text-[0.75rem] max-sm:leading-[120%]'>
          {t('labelPhone')}
        </h3>
        <p className='text-[1.75rem] leading-[2.33313rem] text-white max-sm:text-[1.25rem] max-sm:leading-none'>
          0865 783 359
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-[1rem] leading-[130%] text-[#999] max-sm:text-[0.75rem] max-sm:leading-[120%]'>
          {t('labelSocial')}
        </h3>
        <ul className='flex items-center gap-2'>
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
  )
}
