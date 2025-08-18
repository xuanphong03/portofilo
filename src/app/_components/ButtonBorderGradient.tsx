import {cn} from '@/src/lib/utils'
import React, {cloneElement, ComponentProps, HTMLAttributes} from 'react'
import {twMerge} from 'tailwind-merge'

type ButtonType = 'button' | 'submit'
type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBorderGradientProps extends ComponentProps<'button'> {
  type?: ButtonType
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  iconRight?: React.ReactElement<HTMLAttributes<HTMLElement>, string>
  children: React.ReactNode
}

export default function ButtonBorderGradient({
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  iconRight,
  children,
  ...props
}: ButtonBorderGradientProps) {
  const buttonVariantClassnames: Record<ButtonVariant, string> = {
    primary:
      'text-white/80 lg:hover:text-black/80 before:bg-[linear-gradient(0deg,rgba(255,255,255,.25),rgba(255,255,255,1))] after:bg-[linear-gradient(0deg,#d8f8e1_0%,#98efaf_100%))]',
    secondary: '',
  }

  const buttonSizeClassnames: Record<ButtonSize, string> = {
    sm: 'px-[1rem] py-[0.125rem] h-[2.5rem] text-[0.75rem] max-sm:h-[2.5rem] max-sm:text-[0.625rem]',
    md: 'px-[1.5rem] py-[0.25rem] h-[3rem] text-[0.875rem] max-sm:h-[2.5rem] max-sm:text-[0.75rem]',
    lg: 'px-[2rem] py-[0.5rem] h-[3.5rem] text-[1rem] max-sm:h-[3rem] max-sm:text-[0.875rem]',
  }

  const iconVariantClassnames: Record<ButtonVariant, string> = {
    primary: 'group-hover:text-black/80',
    secondary: '',
  }

  const iconSizeClassnames: Record<ButtonSize, string> = {
    sm: 'size-3',
    md: 'size-4',
    lg: 'size-5',
  }

  const {className: iconRightClassname = '', ...iconRightProps} =
    iconRight?.props || {}

  const iconRightClone = iconRight
    ? cloneElement(iconRight, {
        className: twMerge(
          'transition-all duration-300 ease-in-out z-1',
          iconVariantClassnames[variant],
          iconSizeClassnames[size],
          ...iconRightClassname,
        ),
        ...iconRightProps,
      })
    : null

  return (
    <button
      type={type}
      className={cn(
        'group rounded-full relative font-medium leading-[160%] overflow-hidden bg-transparent after:inset-0 after:absolute  after:opacity-0 lg:hover:after:opacity-100 cursor-pointer transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out before:rounded-full before:border-gradient-white w-auto flex items-center gap-2 justify-center',
        buttonSizeClassnames[size],
        buttonVariantClassnames[variant],
        className,
      )}
      {...props}
    >
      <span className='relative z-1'>{children}</span>
      {iconRightClone ? iconRightClone : null}
    </button>
  )
}
