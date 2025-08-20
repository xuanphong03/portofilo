import ContentTransition from '@/src/app/[locale]/(main-layout)/_components/ContentAnimation'
import Subtitle from '@/src/app/[locale]/(main-layout)/_components/Subtitle'
import Title from '@/src/app/[locale]/(main-layout)/_components/Title'
import Image from 'next/image'
import React from 'react'
import {v4 as uuidv4} from 'uuid'

const SKILLS = [
  {name: 'HTML', img: '/icons/icon-html.svg'},
  {name: 'CSS', img: '/icons/icon-css.svg'},
  {name: 'Javascript', img: '/icons/icon-javascript.svg'},
  {name: 'Typescript', img: '/icons/icon-typescript.svg'},
  {name: 'React', img: '/icons/icon-react.svg'},
  {name: 'Next.js', img: '/icons/icon-nextjs.svg'},
  {name: 'Node.js', img: '/icons/icon-nodejs.svg'},
  {name: 'Nest.js', img: '/icons/icon-nest.svg'},
  {name: 'Redux', img: '/icons/icon-redux.svg'},
  {name: 'Socket.io', img: '/icons/icon-socket.svg'},
  {name: 'PostgreSQL', img: '/icons/icon-postgresql.svg'},
  {name: 'Prisma', img: '/icons/icon-prisma.svg'},
  {name: 'Sass/Scss', img: '/icons/icon-sass.svg'},
  {name: 'Tailwindcss', img: '/icons/icon-tailwindcss.svg'},
  {name: 'Swiper', img: '/icons/icon-swiper.svg'},
  {name: 'Git', img: '/icons/icon-git.svg'},
]

export default function Skills() {
  return (
    <section
      id='skills'
      className='font-lexend relative my-[5rem] pt-[21.3725rem] max-sm:pt-[5rem]'
    >
      <Image
        alt=''
        width={2000}
        height={1000}
        src='/background/vision-moon-surface.png'
        className='pointer-none absolute top-[-37.5rem] left-0 h-[79.11313rem] w-full object-cover max-sm:top-[-20rem] max-sm:h-[30rem]'
      />
      <div className='mx-auto flex w-[80rem] flex-col items-center gap-16 max-sm:w-full max-sm:px-[1rem]'>
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
            <Title text='Skills' />
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
              text='The skills, tools and technologies I am really good at'
              className='w-[50rem] max-sm:w-full'
            />
          </ContentTransition>
        </div>
        <div className='grid w-full grid-cols-8 gap-y-[3rem] max-sm:grid-cols-3 max-sm:gap-x-4'>
          {SKILLS.map(({name, img}, index) => (
            <div
              key={uuidv4()}
              className='col-span-1'
            >
              <ContentTransition
                distance={100}
                direction='vertical'
                reverse={false}
                duration={0.75}
                ease='power1.inOut'
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.1}
                delay={0.1 * index}
              >
                <div className='flex flex-col items-center gap-2'>
                  <Image
                    alt={name}
                    width={65}
                    height={65}
                    src={img}
                    className='h-[4rem] w-auto transition-transform duration-300 max-sm:h-[3rem] md:hover:scale-110'
                  />
                  <p className='text-[1.125rem] leading-[1.75rem] font-normal text-[#D1D5DB] max-sm:text-[0.875rem]'>
                    {name}
                  </p>
                </div>
              </ContentTransition>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
