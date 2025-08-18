'use client'
import {v4 as uuidv4} from 'uuid'

import {AchievementItemType} from '@/src/types/home.interface'
import {motion, useInView} from 'framer-motion'
import React, {useRef} from 'react'
import NumberTransition from '@/src/app/[locale]/(main-layout)/_components/NumberTransition'
import Title from '@/src/app/[locale]/(main-layout)/_components/Title'
import Subtitle from '@/src/app/[locale]/(main-layout)/_components/Subtitle'
import Image from 'next/image'

const achievements: AchievementItemType[] = [
  {
    title: '6',
    description: '<p>Months of <br/>experience</p>',
  },
  {
    title: '9',
    description: '<p>Projects <br/>completed</p>',
  },
  {
    title: '8',
    description: '<p>Technologies <br/>maters</p>',
  },
  {
    title: '500',
    description: '<p>Code <br/>commits</p>',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const isAchievementsInView = useInView(achievementsRef, {once: true})

  return (
    <section
      id='about'
      ref={containerRef}
      className='relative text-white max-sm:mt-[4.5rem]'
    >
      <Image
        alt=''
        width={250}
        height={200}
        src='/images/space-station.png'
        className='absolute top-[-8.5rem] left-[5rem] z-0 h-[11.5rem] w-auto max-sm:top-[0.5rem] max-sm:left-[-1rem] max-sm:h-[3.375rem]'
      />
      <div className='mx-auto flex w-[70rem] flex-col items-center gap-16 max-sm:w-full max-sm:gap-8 max-sm:px-[1rem]'>
        <div className='flex flex-col gap-6 max-sm:gap-[0.625rem]'>
          <Title text='About me' />
          <Subtitle
            text='What defines me as a Frontend Developer'
            className='max-sm:mx-auto max-sm:w-[18.5rem]'
          />
          <p
            ref={descriptionRef}
            className='mx-auto w-[50rem] text-center text-[1rem] leading-[160%] text-white/80 max-sm:w-full max-sm:text-[0.875rem]'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic maiores. Repellendus, obcaecati
            itaque! Molestias eius debitis itaque temporibus, perferendis reiciendis incidunt inventore consequatur nam
            mollitia, veritatis explicabo dolore rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            hic maiores. Repellendus, obcaecati itaque! Molestias eius debitis itaque temporibus, perferendis reiciendis
            incidunt inventore consequatur nam mollitia, veritatis explicabo dolore rem?
          </p>
        </div>

        <motion.div
          ref={achievementsRef}
          initial={{opacity: 0, y: 50}}
          animate={isAchievementsInView ? {opacity: 1, y: 0} : {opacity: 0, y: 200}}
          transition={{duration: 0.8, ease: 'easeOut'}}
          className='grid grid-cols-4 gap-5 self-stretch'
        >
          {achievements.map(({title, description}) => (
            <article
              key={uuidv4()}
              className='col-span-1 flex items-center gap-4 max-sm:col-span-2 max-sm:gap-2'
            >
              <h3 className='text-[5rem] leading-[160%] font-bold text-white max-sm:text-[2.75rem]'>
                <NumberTransition value={title} />
              </h3>
              <div
                dangerouslySetInnerHTML={{__html: description}}
                className='text-[1rem] leading-[140%] font-medium text-white/80 max-sm:text-[0.75rem]'
              ></div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
