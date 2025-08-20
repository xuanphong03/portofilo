import CustomCursor from '@/src/app/[locale]/(main-layout)/_components/CustomCursor'
import Header from '@/src/app/[locale]/(main-layout)/_components/Header'
import IntroTransition from '@/src/app/[locale]/(main-layout)/_components/IntroTransition'
import {Toaster} from '@/src/components/ui/sonner'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({children}: MainLayoutProps) {
  return (
    <IntroTransition>
      <CustomCursor />
      <Header />
      <main className="font-lexend bg-[#121212] bg-[url('/background/concept-bg.webp')] bg-cover bg-fixed bg-top bg-no-repeat text-white">
        {children}
      </main>
      <Toaster richColors />
    </IntroTransition>
  )
}
