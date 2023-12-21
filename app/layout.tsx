import type { Metadata } from 'next'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Avalogics',
  description: 'Avalogics',
  icons: {
    icon: '/avalogics_logo.jpg'
  }
}

const routes = [
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Solutions',
    path: '/solutions'
  },
  {
    name: 'Profiles',
    path: '/profiles'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav className='flex text-red-700 text-xl font-bold m-3 justify-between'>
          <div >
            <Link href={'/'}>
              <img className='rounded-sm' src={'/avalogics_logo.avif'} alt='avalogics logo' width={60} height={'auto'} />
            </Link>
          </div>
          <ul className='grid grid-cols-5 place-content-center gap-4'>
            {routes.map(route => <li key={route.path + route.name}><Link href={route.path}>{route.name}</Link></li>)}
          </ul>
        </nav>
        {children}
        <section style={{ backgroundColor: '#f0f0f0' }} className='grid grid-cols-3 gap-4 text-lg font-bold px-10 pt-9 pb-9'>
          <div>
            <h1 className='font-bold'>Navigation</h1>
            <ul className='list-disc ml-5 mt-5'>
              {routes.map(route => <li key={route.path + route.name}><Link href={route.path}>{route.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>
              Avalogics
            </h1>
            <div className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className='flex flex-col pl-4'>
                <p>
                  2226 South 500 West,
                </p>
                <p>
                  Clearfield, UT 84015
                </p>
                <div>Avalogics LLC</div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div className='pl-4'>Tel. (385)519-9436</div>
            </div>
            <div className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div className='pl-4'>solutions@avalogics.com</div>
            </div>
          </div>
        </section>
        <footer className='grid grid-cols-2 place-items-center gap-4 text-blue-400 mx-4 mt-4 mb-10'>
          <div>Copyright © 2024, Avalogics</div>
          <div>Privacy Policy</div>
        </footer>
      </body>
    </html>
  )
}
