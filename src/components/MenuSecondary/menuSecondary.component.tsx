import Link from 'next/link'

export const MenuSecondary = () => {
  return (
    <div className="flex flex-col justify-around w-10 h-auto">
      <Link href={'/home'}>
        <img src={'/images/icons/home.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/outer-space-alien.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/rocket.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/achivements.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/achivements-plus.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/network.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/facebook.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/instagram.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/youtube.png'} className="mb-5" />
      </Link>
      <Link href={'/home'}>
        <img src={'/images/icons/information.png'} className="mb-5" />
      </Link>
    </div>
  )
}
