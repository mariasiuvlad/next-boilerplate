import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <img
        src="images/icons/logo.png"
        alt="logo"
        className="w-40 cursor-pointer"
      />
    </Link>
  )
}
