import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Avalogics'
}

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Precision',
    desc: 'Every engagement is executed with meticulous attention to detail and measurable outcomes.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Agility',
    desc: 'We combine enterprise-tested methodologies with small business responsiveness to move at your pace.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Partnership',
    desc: 'We embed alongside your team, not just advise from the sidelines — your success is our success.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'We leverage cutting-edge AI and emerging technologies to give our clients a decisive edge.',
  },
]

export default function About() {
  return (
    <main className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
          alt="Leadership team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0f1e]/80" />
        <div className="relative z-10 text-center px-6">
          <div className="inline-block bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white">About Avalogics</h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Built to Solve What Others Can&apos;t
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Avalogics LLC was founded with a clear conviction: the most complex commercial challenges deserve both deep technical expertise and strategic advisory capabilities in a single, cohesive team. Too often, organizations choose between boutique responsiveness and enterprise firepower. We refuse that compromise.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From engineering systems integration to executive-level management consulting, we tune elite teams and proven methodologies to each client&apos;s unique context. We don&apos;t just advise — we execute alongside you, transforming bold visions into operational realities at the heart of complex challenges.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide every engagement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(value => (
              <div key={value.title} className="bg-[#0a0f1e] border border-white/10 hover:border-[#2563eb]/50 rounded-xl p-8 transition-colors duration-200">
                <div className="bg-[#2563eb]/20 w-12 h-12 rounded-xl flex items-center justify-center text-[#2563eb] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-white font-black text-xl mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Leadership</h2>
            <p className="text-gray-400 text-lg">Experienced leaders driving client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0d1526] border border-white/10 rounded-2xl p-10">
              <div className="w-16 h-16 bg-[#2563eb]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#2563eb]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-2xl mb-1">Zoila Gutierrez</h3>
              <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-wider mb-4">CEO & Founder</p>
              <p className="text-gray-400 leading-relaxed">
                Zoila founded Avalogics LLC to deliver innovative engineering and consulting solutions to commercial clients. With extensive experience in operations and strategic management, she leads the company vision and client partnerships — ensuring every engagement delivers measurable value.
              </p>
            </div>

            <div className="bg-[#0d1526] border border-white/10 rounded-2xl p-10">
              <div className="w-16 h-16 bg-[#2563eb]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#2563eb]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-2xl mb-1">Eduardo Knecht</h3>
              <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-wider mb-4">Chief Technology Officer</p>
              <p className="text-gray-400 leading-relaxed">
                Eduardo brings deep expertise in technology infrastructure, cloud platforms, and digital transformation. He leads Avalogics&apos; technical delivery across engineering and management advisory engagements — driving AI integration and innovation across all client work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0d1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Work Together?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Let&apos;s discuss how Avalogics can help your organization overcome its most complex challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
