import {HTMLAttributes} from 'react'

export type SocialItemType = {
  icon: React.ReactElement<HTMLAttributes<HTMLElement>, string>
  href: string
}
