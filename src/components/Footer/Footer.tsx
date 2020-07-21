import React from 'react'
import Link from 'next/link'

import FacebookIcon from '@components/Icons/ptw_fb.svg'
import InstagramIcon from '@components/Icons/ptw_insta.svg'
import TwitterIcon from '@components/Icons/ptw_twitter.svg'
import {FOOTERMENU} from '@config/constants'
import Logo from '@components/Logo'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  const items: JSX.Element[] = FOOTERMENU.map((item) => (
    <Link href={item.href} key={item.name}>
      <p className="menuItem">{item.name}</p>
    </Link>
  ))

  return (
    <div className="footer">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="social mt-4">
        <FacebookIcon className="w-8 h-8 mr-4" />
        <InstagramIcon className="w-8 h-8 mr-4" />
        <TwitterIcon className="w-8 h-8" />
      </div>
      <div className="menu">{items}</div>
      <div className="copyrights mt-4">
        <span>
          &copy; {year} | &reg; <Link href="/">All rights reserved.</Link>
        </span>
      </div>
    </div>
  )
}
