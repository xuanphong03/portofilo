import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import {Input} from '@/src/components/ui/input'
import {ContactFormValuesType} from '@/src/schemas/contact.schema'
import React from 'react'
import {ControllerRenderProps} from 'react-hook-form'

type RHFInputType = {
  label?: string
  placeholder?: string
  className?: string
  field: ControllerRenderProps<
    ContactFormValuesType,
    keyof ContactFormValuesType
  >
}

export default function RHFInput({
  label,
  placeholder,
  field,
  className,
}: RHFInputType) {
  return (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input
          {...field}
          placeholder={placeholder}
          className='h-[3.0625rem] rounded-[0.5rem] border-none bg-[#F5F6F7] p-[0.875rem] text-[0.875rem] leading-[150%] text-[#4B5563] placeholder:text-[#666D80]/70'
        />
      </FormControl>
      <FormMessage className='text-[0.875rem] leading-[150%]' />
    </FormItem>
  )
}
