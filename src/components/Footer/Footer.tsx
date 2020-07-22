import React from 'react'
import Link from 'next/link'
import {FooterLinks} from '@config/constants'
import Logo from '@components/Logo'
import Icon from '@components/Icon'

import style from './Footer.module.css'

export default function Footer() {
  const items: JSX.Element[] = FooterLinks.map((item) => (
    <Link href={item.href} key={item.label}>
      <p className="mx-4">{item.label}</p>
    </Link>
  ))

  return (
    <div className={style.container}>
      <Logo />
      <div className="flex mt-8">
        <Icon name="facebook" className={style.icon} />
        <Icon name="twitter" className={style.icon} />
        <Icon name="instagram" className={style.icon} />
      </div>
      <div className={style.links}>{items}</div>
      <span className={style.legal}>&copy; 2020 Playtwin™ | &reg; All rights reserved.</span>
    </div>
  )
}
