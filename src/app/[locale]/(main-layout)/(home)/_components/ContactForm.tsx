'use client'
import React, {useMemo, useTransition} from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {Button} from '@/src/components/ui/button'
import {Form, FormField} from '@/src/components/ui/form'
import RHFInput from '@/src/components/form-controls/RHFInputField'
import {useTranslations} from 'next-intl'
import {contactFormSchema, ContactFormValuesType} from '@/src/schemas/contact.schema'
import {ContactFormKey} from '@/src/types/home.interface'
import RHFTextarea from '@/src/components/form-controls/RHFTextareaField'
import {
  ENV_EMAILJS_PUBLIC_KEY as PUBLIC_KEY,
  ENV_EMAILJS_SERVICE_ID as SERVICE_ID,
  ENV_EMAILJS_TEMPLATE_ID as TEMPLATE_ID,
} from '@/src/ config-global.env'
import emailjs from '@emailjs/browser'

type ContactFormFn = (key: ContactFormKey | string) => string

export default function ContactForm() {
  const t: ContactFormFn = useTranslations('ContactForm')
  const translationSchema = useMemo(() => contactFormSchema.build(t), [t])
  const [isPending, setTransition] = useTransition()

  const form = useForm<ContactFormValuesType>({
    resolver: zodResolver(translationSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
      phone: '',
    },
  })

  const handleSubmitContactForm = (formData: ContactFormValuesType) => {
    setTransition(async () => {
      try {
        if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
          throw new Error('PUBLIC_KEY or SERVICE_ID or TEMPLATE_ID not exist')
        }
        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)

        if (res.status === 200) {
          console.log('Sucêss')
          form.reset()
        }
      } catch (error) {
        console.log('Error')
      }
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitContactForm)}
        className='grid grid-cols-2 gap-4 rounded-[0.75rem] bg-white p-6 shadow-md max-sm:p-3'
      >
        <FormField
          control={form.control}
          name='fullname'
          render={({field}) => (
            <RHFInput
              field={field}
              className='col-span-1 max-sm:col-span-full'
              placeholder={t('fieldFullnamePlaceholder')}
            />
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({field}) => (
            <RHFInput
              field={field}
              className='col-span-1 max-sm:col-span-full'
              placeholder={t('fieldPhonePlaceholder')}
            />
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <RHFInput
              field={field}
              className='col-span-full'
              placeholder={t('fieldEmailPlaceholder')}
            />
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({field}) => (
            <RHFTextarea
              field={field}
              className='col-span-full'
              placeholder={t('fieldMessagePlaceholder')}
            />
          )}
        />
        <div className='col-span-full'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}
