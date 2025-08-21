import ContactForm from '@/src/app/[locale]/(main-layout)/(home)/_components/ContactForm'
import Subtitle from '@/src/app/[locale]/(main-layout)/_components/Subtitle'
import Title from '@/src/app/[locale]/(main-layout)/_components/Title'

import React from 'react'
import ContentTransition from '@/src/app/[locale]/(main-layout)/_components/ContentAnimation'
import ContactInfo from '@/src/app/[locale]/(main-layout)/(home)/_components/ContactInfo'

export default function Contact() {
  return (
    <section
      id='contact'
      className='font-lexend mt-[5rem] overflow-hidden pb-[5rem] text-white max-sm:py-[2.5rem]'
    >
      <div className='container flex flex-col gap-16 max-sm:gap-8'>
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
            <Title text='Contact me' />
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
            <Subtitle text="Get in touch and let's get started!" />
          </ContentTransition>
        </div>
        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-2 self-baseline max-sm:col-span-full'>
            <ContentTransition
              distance={200}
              direction='horizontal'
              reverse={true}
              duration={0.75}
              ease='power2.inOut'
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.25}
              delay={0}
            >
              <ContactInfo />
            </ContentTransition>
          </div>

          <div className='col-span-3 max-sm:col-span-full'>
            <ContentTransition
              distance={200}
              direction='horizontal'
              reverse={false}
              duration={0.75}
              ease='power2.inOut'
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.25}
              delay={0}
            >
              <ContactForm />
            </ContentTransition>
          </div>
        </div>
      </div>
    </section>
  )
}
