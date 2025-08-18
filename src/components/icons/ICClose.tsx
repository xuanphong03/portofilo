import React from 'react'

export default function ICClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={21}
      height={20}
      viewBox='0 0 21 20'
      fill='none'
      {...props}
    >
      <path
        d='M4.36182 4.1665L16.0277 15.8324'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.36097 15.8324L16.0269 4.1665'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
