import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avalogics',
  description: 'Engineering, Logistics & Management Advisory Services',
  icons: {
    icon: '/avalogics_logo.jpg'
  }
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/solutions' },
  { name: 'Contact', path: '/contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-widest text-white hover:text-[#2563eb] transition-colors duration-200">
              AVALOGICS
            </Link>
            <ul className="flex items-center gap-8">
              {routes.map(route => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-gray-300 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {children}

        <footer className="bg-[#060b18] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-2xl font-black tracking-widest text-white mb-4">AVALOGICS</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Precision engineering and strategic expertise for complex commercial challenges.
                </p>
                <p className="text-[#2563eb] text-sm font-semibold italic">
                  Transforming bold visions into operational realities.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {routes.map(route => (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-0.5 text-[#2563eb] shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-gray-400 text-sm">2226 South 500 West<br />Clearfield, UT 84015</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#2563eb] shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <p className="text-gray-400 text-sm">(385) 519-9436</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#2563eb] shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <p className="text-gray-400 text-sm">solutions@avalogics.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">© 2024 Avalogics LLC. All rights reserved.</p>
              <p className="text-gray-500 text-sm">Privacy Policy</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
