import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const engineeringCapabilities = [
    'Systems Engineering & Integration',
    'Logistics & Supply Chain Optimization',
    'Operational Support & Field Services',
    'Technical Documentation & Configuration Management',
    'Quality Assurance & Process Engineering',
    'Infrastructure Planning & Facilities Engineering',
    'Program & Project Engineering Support',
  ]

  const managementCapabilities = [
    'Strategic Management Consulting',
    'Business Process Improvement & Optimization',
    'Organizational Change Management',
    'Financial Management & Budget Advisory',
    'Acquisition & Procurement Advisory',
    'Performance Management & Analytics',
    'Workforce Planning & Training Advisory',
  ]

  const aiCapabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'AI-Assisted Project Planning',
      desc: 'Intelligent scheduling and resource optimization powered by machine learning models.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Predictive Analytics',
      desc: 'Data-driven forecasting that gives leadership early visibility into risks and opportunities.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: 'Automated Reporting',
      desc: 'Real-time dashboards and automated report generation that eliminate manual overhead.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      title: 'Intelligent Process Optimization',
      desc: 'AI-driven workflow analysis that identifies bottlenecks and recommends improvements.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75m-9.75-6H7.5M10.5 6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0M3.75 6H7.5" />
        </svg>
      ),
      title: 'ML for Supply Chain & Logistics',
      desc: 'Machine learning models that optimize routing, inventory, and demand forecasting at scale.',
    },
  ]

  return (
    <main className="bg-[#0a0f1e]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0f1e]/75" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            Engineering · Logistics · Advisory
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Precision Solutions for{' '}
            <span className="text-[#2563eb]">Complex Challenges</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto">
            We deliver specialized engineering and strategic advisory services — pairing boutique dedication with enterprise-grade firepower.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Two specialized domains, one integrated team — delivering measurable results across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <Link href="/solutions#engineering" className="group block">
              <div className="relative h-56 rounded-t-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                  alt="Engineering and logistics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/40 to-transparent" />
              </div>
              <div className="bg-[#0d1526] border border-white/10 group-hover:border-[#2563eb]/50 rounded-b-2xl p-8 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2563eb]/20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2563eb]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <span className="text-[#2563eb] text-sm font-bold uppercase tracking-wider">Domain 1</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Engineering, Logistics & Operational Services</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">End-to-end engineering and operational expertise combining technical depth with real-world execution experience.</p>
                <ul className="space-y-2">
                  {engineeringCapabilities.map(item => (
                    <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-[#2563eb] font-semibold text-sm group-hover:gap-4 transition-all duration-200">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Domain 2 */}
            <Link href="/solutions#management" className="group block">
              <div className="relative h-56 rounded-t-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="Management and advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/40 to-transparent" />
              </div>
              <div className="bg-[#0d1526] border border-white/10 group-hover:border-[#2563eb]/50 rounded-b-2xl p-8 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2563eb]/20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#2563eb]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <span className="text-[#2563eb] text-sm font-bold uppercase tracking-wider">Domain 2</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Management & Advisory Services</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Strategic consulting and advisory services that turn ambition into action, helping organizations achieve sustainable growth.</p>
                <ul className="space-y-2">
                  {managementCapabilities.map(item => (
                    <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-[#2563eb] font-semibold text-sm group-hover:gap-4 transition-all duration-200">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Powered Delivery Section */}
      <section className="py-24 px-6 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                AI-Powered Delivery
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Intelligence Built Into{' '}
                <span className="text-[#2563eb]">Every Engagement</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Avalogics leverages cutting-edge AI tools across all engagements — not as an afterthought, but as a core part of how we deliver results faster, smarter, and with greater precision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Work With Us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiCapabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`bg-[#0a0f1e] border border-white/10 hover:border-[#2563eb]/50 rounded-xl p-6 transition-colors duration-200${i === 4 ? ' sm:col-span-2' : ''}`}
                >
                  <div className="bg-[#2563eb]/20 w-10 h-10 rounded-lg flex items-center justify-center text-[#2563eb] mb-4">
                    {cap.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{cap.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800"
            alt="AI technology"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-[#0a0f1e]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Partner with Avalogics to turn your most complex challenges into your greatest competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/about"
              className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
