import {cn} from '@/src/lib/utils'
import React from 'react'

interface TitleProps {
  text: string
  className?: string
}

export default function Title({text, className}: TitleProps) {
  return (
    <h2
      className={cn(
        'text-linear-primary flex items-center justify-center gap-6 text-[0.75rem] leading-[150%] font-normal tracking-[0.025rem] uppercase text-shadow-[0px_2px_16px_rgba(174,207,242,0.24)] before:block before:h-[0.0625rem] before:w-[5.375rem] before:bg-[linear-gradient(90deg,rgba(216,236,248,0.00)_0%,#A6FFBE_100%)] after:block after:h-[0.0625rem] after:w-[5.375rem] after:rotate-180 after:bg-[linear-gradient(90deg,rgba(216,236,248,0.00)_0%,#A6FFBE_100%)] max-sm:text-[0.625rem]',
        className,
      )}
    >
      {text}
    </h2>
  )
}
