import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import {Textarea} from '@/src/components/ui/textarea'
import {ContactFormValuesType} from '@/src/schemas/contact.schema'
import React from 'react'
import {ControllerRenderProps} from 'react-hook-form'

type RHFTextareaType = {
  label?: string
  placeholder?: string
  className?: string
  field: ControllerRenderProps<
    ContactFormValuesType,
    keyof ContactFormValuesType
  >
}
/**
 * RHFTextarea component
 *
 * A reusable textarea field integrated with react-hook-form, styled for consistency across forms.
 * Ideal for collecting multi-line input such as messages, descriptions, or comments within controlled forms.
 *
 * Props:
 * - label (optional): A text label displayed above the textarea field.
 * - placeholder (optional): Placeholder text shown inside the textarea.
 * - className (optional): Custom class names for styling the outer wrapper.
 * - field: A ControllerRenderProps object provided by react-hook-form to connect the field with form state and handlers.
 *
 * Behavior:
 * - Renders a styled textarea with controlled value and onChange handler from react-hook-form.
 * - Displays validation messages below the textarea if present.
 * - Applies fixed height, padding, font size, and placeholder styling for a clean UI.
 *
 * Dependencies:
 * - Uses custom UI components: FormItem, FormLabel, FormControl, FormMessage, and Textarea.
 * - TailwindCSS utility classes are used to ensure a consistent look and responsive behavior.
 */
export default function RHFTextarea({
  label,
  placeholder,
  field,
  className,
}: RHFTextareaType) {
  return (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Textarea
          {...field}
          placeholder={placeholder}
          className='h-[9.8125rem] resize-none rounded-[0.5rem] border-none bg-[#F5F6F7] p-[0.875rem] text-[0.875rem] leading-[150%] text-[#4B5563] placeholder:text-[#666D80]/70'
        ></Textarea>
      </FormControl>
      <FormMessage className='text-[0.875rem] leading-[150%]' />
    </FormItem>
  )
}
