'use client'
import {v4 as uuidv4} from 'uuid'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/src/components/ui/select'
import {usePathname, useRouter} from '@/src/i18n/navigation'
import {routing} from '@/src/i18n/routing'
import {Locale, useLocale} from 'next-intl'
import React, {useTransition} from 'react'

const localeData: Record<string, {label: string; flag: string}> = {
  en: {label: 'English', flag: '🇺🇸'},
  vi: {label: 'Tiếng Việt', flag: '🇻🇳'},
}

export default function LocaleSwitcher() {
  const locale: string = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChangeLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace({pathname}, {locale: nextLocale as Locale})
    })
  }
  return (
    <div className='ml-[5rem] flex items-center gap-2'>
      <Select
        defaultValue={locale}
        disabled={isPending}
        onValueChange={handleChangeLocale}
      >
        <SelectTrigger className='w-[10rem] cursor-pointer'>
          <SelectValue placeholder='Language' />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur) => (
            <SelectItem
              value={cur}
              key={uuidv4()}
              className='cursor-pointer'
            >
              <span className='text-[1.5rem]'>{localeData[cur]?.flag}</span>
              <span>{localeData[cur]?.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
