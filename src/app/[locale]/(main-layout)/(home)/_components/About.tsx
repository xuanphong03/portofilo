'use client'
import {v4 as uuidv4} from 'uuid'

import {AchievementItemType} from '@/src/types/home.interface'
import {motion, useInView} from 'framer-motion'
import React, {useRef} from 'react'
import NumberTransition from '@/src/app/[locale]/(main-layout)/_components/NumberTransition'
import Title from '@/src/app/[locale]/(main-layout)/_components/Title'
import Subtitle from '@/src/app/[locale]/(main-layout)/_components/Subtitle'
import Image from 'next/image'
import ContentTransition from '@/src/app/[locale]/(main-layout)/_components/ContentAnimation'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import {useTranslations} from 'next-intl'

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
  const t = useTranslations('About')
  const containerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const isAchievementsInView = useInView(achievementsRef, {once: true})

  useGSAP(
    () => {
      // Create split
      new SplitType('[data-animate]', {
        types: 'lines,words,chars',
        tagName: 'span',
      })

      // Animate
      gsap.fromTo(
        '[data-animate] .line',
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          color: 'inherit',
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '[data-animate]',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    },
    {dependencies: []},
  )

  return (
    <section
      id='about'
      ref={containerRef}
      className='font-lexend relative z-2 mt-[2.5rem] mb-[10rem] text-white max-sm:mt-[4.5rem]'
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
            <Title text={t('title')} />
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
            delay={0.1}
          >
            <Subtitle
              text={t('subtitle')}
              className='max-sm:mx-auto max-sm:flex max-sm:w-[14rem] max-sm:justify-center'
            />
          </ContentTransition>

          <p
            data-animate
            ref={descriptionRef}
            className='mx-auto w-[50rem] text-center text-[1rem] leading-[160%] text-white/80 max-sm:w-full max-sm:text-[0.875rem]'
          >
            {t('desc')}
          </p>
        </div>

        <motion.div
          ref={achievementsRef}
          initial={{opacity: 0, y: 50}}
          animate={isAchievementsInView ? {opacity: 1, y: 0} : {opacity: 0, y: 200}}
          transition={{duration: 0.75, ease: 'easeInOut'}}
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
