import {cn} from '@/src/lib/utils'
import React from 'react'

interface SubtitleProps {
  text: string
  className?: string
}

export default function Subtitle({text, className}: SubtitleProps) {
  return (
    <h3
      className={cn(
        'font-plus-jakarta-sans text-linear-primary w-full text-center text-[3rem] leading-[120%] font-bold capitalize max-sm:text-[1.25rem] max-sm:leading-[150%]',
        className,
      )}
    >
      {text}
    </h3>
  )
}
