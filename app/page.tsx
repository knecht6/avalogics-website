import Link from 'next/link';
import backgroundImageSectionOne from "/public/blockchain.jpg";
import backgroundImageSectionTwo from "/public/startup.jpg";
import backgroundImageSectionThree from "/public/circle.jpg";
import backgroundImageSectionFour from "/public/hands.jpg";

export default function Home() {
  return (
    <>
      <main>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionOne.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "90vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <div className='flex lg:text-white'>
            <div className='lg:justify-end lg:w-96 lg:m-10 sm:justify-center'>
              <h1 className='text-2xl font-bold mb-2 mt-2'>Precision engineering and strategic expertise for complex commercial challenges</h1>
              <h2 className='text-xl font-bold mb-2 mt-2'>We deliver specialized solutions bridging your operational vision to measurable results.</h2>
              <p className='font-bold mb-2 mt-2'>Pairing boutique dedication with technical firepower—scaled for the most ambitious and demanding projects.</p>
              <div className='flex flex-direction-rows'>
                <button className='mr-2'>View more</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-4 place-content-center'>
          <div
            style={{
              backgroundImage: `url(${backgroundImageSectionTwo.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vh",
              height: "100vh",
            }}
          ></div>
          <div style={{ width: "100vh", height: '100vh' }} className='flex flex-col justify-center'>
            <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
              Your toughest challenges, our calling
            </h1>
            <p className='text-xl'>
              We bring enterprise-tested methodologies sharpened with small business responsiveness and breakthrough thinking.
            </p>
            <div className='flex flex-direction-rows mb-4 mt-4 text-red-800'>
              <button className='mr-2'>Work with us</button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </section>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionThree.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "auto"
        }} className='flex flex-col items-center p-10'>
          <div className='text-white text-6xl mb-10'>What We Do</div>
          <div className='grid grid-cols-2 gap-10 text-white w-full max-w-5xl'>
            <Link href={'/solutions#engineering'} className='flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg hover:bg-opacity-60 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <h2 className='text-2xl font-bold text-center mb-4'>Engineering, Logistics & Operational Services</h2>
              <ul className='list-disc ml-5 text-base space-y-1 self-start'>
                <li>Systems Engineering & Integration</li>
                <li>Logistics & Supply Chain Optimization</li>
                <li>Operational Support & Field Services</li>
                <li>Technical Documentation & Configuration Management</li>
                <li>Quality Assurance & Process Engineering</li>
                <li>Infrastructure Planning & Facilities Engineering</li>
                <li>Program & Project Engineering Support</li>
              </ul>
            </Link>
            <Link href={'/solutions#management'} className='flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg hover:bg-opacity-60 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
              <h2 className='text-2xl font-bold text-center mb-4'>Management & Advisory Services</h2>
              <ul className='list-disc ml-5 text-base space-y-1 self-start'>
                <li>Strategic Management Consulting</li>
                <li>Business Process Improvement & Optimization</li>
                <li>Organizational Change Management</li>
                <li>Financial Management & Budget Advisory</li>
                <li>Acquisition & Procurement Advisory</li>
                <li>Performance Management & Analytics</li>
                <li>Workforce Planning & Training Advisory</li>
              </ul>
            </Link>
          </div>
        </section>
        <section style={{
          backgroundImage: `url(${backgroundImageSectionFour.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "90vh",
        }} className='text-white grid grid-cols-3 gap-4 place-content-center p-6'>
          <div>
            <h1 className='text-2xl my-3 font-bold'>Avalogics synthesizes deep expertise as your trusted partner</h1>
            <p className='text-xl'>Combining operational depth with strategic agility, technical rigor with creative problem-solving, and proven experience with readiness to drive your organization forward. We tune elite teams and proven methodologies to each client&apos;s unique context. This partnership multiplies your ability to transform bold visions into operational realities at the heart of complex challenges. The future belongs to organizations bold enough to act—let&apos;s build it together.</p>
            <div className='flex flex-row my-4'>
              <button>Learn More</button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  )
}
