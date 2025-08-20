'use client'
import Link from 'next/link'
import {useRef, useEffect, useCallback} from 'react'
import {gsap} from 'gsap'
import Image from 'next/image'
import {cn} from '@/src/lib/utils'

// Tạo các cấu hình animation
const animationConfig = {
  in: {
    clipPath: 'circle(150% at 0 0)',
    duration: 0.8,
    ease: 'power2.out',
  },
  out: {
    clipPath: 'circle(0% at 0 0)',
    duration: 0.8,
    ease: 'power2.inOut',
  },
}
interface CardClipPathProps {
  href: string
  img_default: string
  img_hover: string
  className?: string
}
const CardClipPath = ({href, img_default, img_hover, className}: CardClipPathProps) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  // Tạo một hàm animate tái sử dụng
  const animate = useCallback((direction: 'in' | 'out') => {
    if (!imageRef.current) return

    // Nếu đang có animation, kill nó trước
    if (animationRef.current) {
      animationRef.current.kill()
    }

    // Tạo animation mới với GSAP
    animationRef.current = gsap.to(imageRef.current, animationConfig[direction])
  }, [])

  // Tối ưu các hàm xử lý sự kiện với useCallback
  const handleMouseEnter = useCallback(() => {
    animate('in')
  }, [animate])

  const handleMouseLeave = useCallback(() => {
    animate('out')
  }, [animate])

  // Thiết lập ban đầu và cleanup
  useEffect(() => {
    // Đảm bảo clip-path ban đầu được thiết lập
    if (imageRef.current) {
      gsap.set(imageRef.current, {clipPath: 'circle(0% at 0 0)'})
    }

    // Cleanup khi component unmount
    return () => {
      // Hủy bỏ animation nếu đang chạy
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [])

  return (
    <Link
      href={href}
      className={cn('relative', className)}
      onNavigate={handleMouseEnter}
      target='_blank'
    >
      <div
        className='xsm:hidden absolute inset-0 z-10 size-full'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div className='xsm:w-full relative h-[21.75rem] w-full max-sm:h-auto'>
        <Image
          alt=''
          width={723}
          height={348}
          src={img_default}
          className='size-full object-cover'
        />
        <Image
          alt=''
          ref={imageRef}
          width={723}
          height={348}
          src={img_hover}
          className='absolute top-0 left-0 size-full object-cover'
        />
      </div>
    </Link>
  )
}

export default CardClipPath
