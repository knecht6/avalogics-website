import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Avalogics',
  description: 'Avalogics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav className='grid grid-cols-2 place-items-start items-center gap-4 text-red-400 text-xl font-bold m-3'>
          <Link href={'/'}>
            <Image src={'/avalogics_logo.jpeg'} alt='avalogics logo' width={60} height={60} />
          </Link>
          <ul className='grid grid-cols-5 place-items-center gap-4'>
            <li>
              <Link href={'/about'}>About Us</Link>
            </li>
            <li>
              <Link href={'/solutions'}>Solutions</Link>
            </li>
            <li>
              <Link href={'/contracts'}>Contracts</Link>
            </li>
            <li>
              <Link href={'news'}>News</Link>
            </li>
            <li>
              <Link href={'contact'}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className='grid grid-cols-2 place-items-center gap-4 text-blue-400 mx-4 mt-4 mb-10'>
          <div>Copyright © 2024, Avalogics</div>
          <div>Privacy Policy</div>
        </footer>
      </body>
    </html>
  )
}
