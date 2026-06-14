export const metadata = {
  title: 'Contact - Avalogics'
}

export default function Contact() {
  return (
    <main className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <div className="inline-block bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Get In Touch
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to tackle your toughest challenges? Reach out and let&apos;s start a conversation.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black text-white mb-8">Our Information</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#2563eb]/20 w-10 h-10 rounded-lg flex items-center justify-center text-[#2563eb] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Address</p>
                  <p className="text-gray-400">2226 South 500 West<br />Clearfield, UT 84015</p>
                  <p className="text-gray-500 text-sm mt-1">Avalogics LLC</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2563eb]/20 w-10 h-10 rounded-lg flex items-center justify-center text-[#2563eb] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <p className="text-gray-400">(385) 519-9436</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2563eb]/20 w-10 h-10 rounded-lg flex items-center justify-center text-[#2563eb] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <p className="text-gray-400">solutions@avalogics.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1526] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'Response within 1 business day',
                  'Discovery call to understand your challenge',
                  'Tailored proposal with clear scope and timeline',
                  'No-obligation initial consultation',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black text-white mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (385) 000-0000"
                  className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide" htmlFor="message">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your challenge or project..."
                  className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <p className="text-gray-500 text-xs leading-relaxed">
                By submitting this form, I consent to the processing of the personal data I provide to Avalogics in accordance with and as described in the privacy policy.
              </p>

              <button
                type="submit"
                className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-lg transition-colors duration-200 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
