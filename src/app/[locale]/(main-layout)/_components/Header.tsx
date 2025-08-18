import NavDesktop from '@/src/app/[locale]/(main-layout)/_components/NavDesktop'
import NavMobile from '@/src/app/[locale]/(main-layout)/_components/NavMobile'
import {ROUTES} from '@/src/routes/routes'
import {HeaderTranslateKeyType, NavigationLinkType} from '@/src/types/header.interface'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type HeaderTranslationFn = (key: HeaderTranslateKeyType) => string

export default function Header() {
  const t: HeaderTranslationFn = useTranslations('Header')
  const navLinkData: NavigationLinkType[] = [
    {name: t('home'), href: ROUTES.HOME},
    {name: t('about'), href: ROUTES.ABOUT},
    {name: t('skills'), href: ROUTES.SKILLS},
    {name: t('projects'), href: ROUTES.PROJECTS},
    {name: t('contact'), href: ROUTES.CONTACT},
  ]
  return (
    <header className='fixed top-[2.5rem] right-0 left-0 z-50 max-sm:top-0'>
      <div className='relative container py-2 max-sm:px-0! max-sm:py-0'>
        <div className='relative z-0 w-full rounded-[0.25rem] backdrop-blur-md max-sm:rounded-[0.5rem]'>
          <Image
            alt=''
            width={375}
            height={80}
            className='hidden h-auto w-full max-sm:block'
            src='/background/header-bg-mb.svg'
          />
          <Image
            alt=''
            width={1400}
            height={70}
            className='h-auto w-full max-sm:hidden'
            src='/background/header-bg.svg'
          />
        </div>
        <div className='absolute top-1/2 left-0 z-1 flex w-full -translate-y-1/2 items-center justify-between px-[2rem] text-white'>
          <Link
            href={'/'}
            className='flex items-end gap-2 text-[2.25rem] font-bold tracking-[0.025rem] max-sm:gap-0 max-sm:text-[1.25rem]'
          >
            <div className='text-linear-primary flex items-start'>
              <span className='mt-[0.25rem] block text-[1.5rem] max-sm:text-[0.75rem]'>N</span>
              <span>Phong</span>
            </div>
          </Link>
          <div className='flex items-center gap-4'>
            <NavDesktop navLinks={navLinkData} />
            <NavMobile navLinks={navLinkData} />
          </div>
        </div>
      </div>
    </header>
  )
}
