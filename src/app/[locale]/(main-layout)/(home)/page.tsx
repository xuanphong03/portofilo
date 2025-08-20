import About from '@/src/app/[locale]/(main-layout)/(home)/_components/About'
import Contact from '@/src/app/[locale]/(main-layout)/(home)/_components/Contact'
import Introduce from '@/src/app/[locale]/(main-layout)/(home)/_components/Introduce'
import Projects from '@/src/app/[locale]/(main-layout)/(home)/_components/Projects'
import Skills from '@/src/app/[locale]/(main-layout)/(home)/_components/Skills'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Introduce />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
