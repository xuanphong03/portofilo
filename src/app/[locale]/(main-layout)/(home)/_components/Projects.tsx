import CardClipPath from '@/src/app/[locale]/(main-layout)/_components/CardClipPath'
import ContentTransition from '@/src/app/[locale]/(main-layout)/_components/ContentAnimation'
import Subtitle from '@/src/app/[locale]/(main-layout)/_components/Subtitle'
import Title from '@/src/app/[locale]/(main-layout)/_components/Title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PROJECT_LIST = [
  {
    href: 'https://aquastreet.com.vn/',
    img_default: '/screenshot/aquastreet1.png',
    img_hover: '/screenshot/aquastreet2.png',
    title: 'Aquastreet',
    skills: ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`,
  },
  {
    href: 'https://aquastreet.com.vn/',
    img_default: '/screenshot/aquastreet1.png',
    img_hover: '/screenshot/aquastreet2.png',
    title: 'Aquastreet',
    skills: ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`,
  },
  {
    href: 'https://aquastreet.com.vn/',
    img_default: '/screenshot/aquastreet1.png',
    img_hover: '/screenshot/aquastreet2.png',
    title: 'Aquastreet',
    skills: ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`,
  },
  {
    href: 'https://aquastreet.com.vn/',
    img_default: '/screenshot/aquastreet1.png',
    img_hover: '/screenshot/aquastreet2.png',
    title: 'Aquastreet',
    skills: ['HTML', 'CSS', 'Javascript', 'Wordpress'],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`,
  },
]

export default function Projects() {
  return (
    <section
      id='projects'
      className='font-lexend relative mt-[50rem] mb-[5rem] max-sm:mt-[20rem]'
    >
      <Image
        alt=''
        src='/background/world.png'
        width={2000}
        height={2000}
        className='pointer-events-none absolute top-[-50rem] h-[71.8125rem] w-full object-cover select-none max-sm:top-[-25rem] max-sm:h-[30rem]'
      />
      <div className='container flex flex-col items-center gap-16 overflow-hidden max-sm:gap-8'>
        <div className='flex flex-col items-center gap-6 max-sm:gap-[0.625rem]'>
          <ContentTransition
            distance={50}
            direction='vertical'
            reverse={false}
            duration={0.75}
            ease='power2.inOut'
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <Title text='Work' />
          </ContentTransition>
          <ContentTransition
            distance={50}
            direction='vertical'
            reverse={false}
            duration={0.75}
            ease='power2.inOut'
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <Subtitle
              text='Some of the noteworthy projects I have built'
              className='w-[50rem] max-sm:w-[20.25rem]'
            />
          </ContentTransition>
        </div>
        <div className='grid grid-cols-2 gap-8 max-sm:gap-4'>
          {PROJECT_LIST.map(({title, description, href, img_default, img_hover, skills}, index) => (
            <article
              key={index}
              className='col-span-full'
            >
              <ContentTransition
                distance={200}
                direction='horizontal'
                reverse={index % 2 === 0}
                duration={1}
                ease='power2.inOut'
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className='grid grid-cols-2 overflow-hidden rounded-[0.75rem] bg-[#1F2937] shadow-[0_25px_25px_0_rgba(0,0,0,0.15)]'>
                  <div className='col-span-1 border-r border-solid border-[#1F2937] bg-[#374151] p-[3rem] max-sm:col-span-full max-sm:h-auto max-sm:p-0'>
                    <div className='overflow-hidden rounded-[0.75rem] max-sm:rounded-none'>
                      <CardClipPath
                        href={href}
                        img_default={img_default}
                        img_hover={img_hover}
                      />
                    </div>
                  </div>
                  <div className='col-span-1 flex flex-col gap-y-[1.5rem] p-[3rem] max-sm:col-span-full max-sm:gap-y-[0.75rem] max-sm:p-[0.75rem]'>
                    <h3 className='line-clamp-1 text-[1.25rem] leading-[1.75rem] font-semibold text-[#F9FAFB] max-sm:text-[1rem] max-sm:leading-[150%]'>
                      <Link
                        href={href}
                        target='_blank'
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className='text-[1rem] leading-[1.5rem] text-[#D1D5DB] max-sm:text-[0.875rem] max-sm:leading-[120%]'>
                      {description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className='flex items-center justify-center rounded-[0.75rem] bg-[#374151] px-[1.25rem] py-[0.25rem] text-[0.875rem] leading-[1.25rem] font-medium text-[#D1D5DB] max-sm:text-[0.75rem] max-sm:leading-[120%]'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ContentTransition>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
