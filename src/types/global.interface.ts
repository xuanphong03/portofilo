import {HTMLAttributes} from 'react'

export type SocialItemType = {
  name: string
  icon: React.ReactElement<HTMLAttributes<HTMLElement>, string>
  href: string
}
