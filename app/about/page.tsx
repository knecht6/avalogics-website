import type { Metadata } from 'next'
import backgroundImageSectionOne from "/public/light-bulb.jpg";
import backgroundImageSectionTwo from "/public/industry.jpg";
import backgroundImageSectionThree from "/public/triangles.png";
import alagantLogo from "/public/Alagant-logo.png";
import nursa from "/public/nursa.svg";
import truckonomics from '/public/trucknomics.jpg';

export const metadata: Metadata = {
    title: 'About Us - Avalogics'
}

export default function About() {
    return (
        <main>
            <section style={{
                backgroundImage: `url(${backgroundImageSectionOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
                height: "90vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <div className='grid grid-cols-3 gap-4 text-white'>
                    <div></div>
                    <div></div>
                    <div>
                        <h2 className='text-xl font-bold mb-2 mt-2'>About Us</h2>
                        <h1 className='text-2xl font-bold mb-2 mt-2'>Agencies call us trusted allies – now with expanded expertise dedicated to uplifting your teams&#39; reach. Progress demands out-of-box orchestration. Contact us to compose possibilities.</h1>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center'>
                <div style={{ width: "100vh", height: '100vh' }} className='flex flex-col justify-center p-20'>
                    <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
                        Unlocking Data-Driven Insights & Future-Proofing How You Fuel Innovation
                    </h1>
                    <div>
                        <p className='text-xl'>
                            We empower agencies through advanced analytics, machine learning, modeling, and visualization tailored to mission needs – our data scientists are immersed in powering better decisions and operations.

                        </p>
                        <p className='text-xl'>
                            Our data engineers architect stable, scalable data pipelines fetching, governing, uniting datasets across classic and cloud repositories for your teams&#39; next-gen initiatives – be it portals, IoT or AI applications. Compliance assured.
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionTwo.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "auto",
                        height: "100vh",
                    }}
                ></div>
            </section>
            <section style={{
                backgroundImage: `url(${backgroundImageSectionThree.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
                height: "auto",
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }} className='pt-10'>
                <h1 className='text-white text-4xl font-bold'>Our Customers</h1>
                <p className='text-white text-xl px-20'>Where missions meet ingenuity. Agencies call us allies taking on vital, complex challenges fueling national impact — now expanding talents dedicated to your mission’s possibilities.</p>
                <p className='text-white text-xl px-20'>Avalogics as your partner pushes transformations core to community service through new operational capabilities. Join driven teams equipped with an expanded arsenal to lead missions to the farthest frontiers.</p>
                <div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='p-5'>
                            <div className="">
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">Avalogics performed systems and server engineering for a few U.S. Government projects for my company and not only did a great job, but also met some tough deadlines. I will continue to use them for projects ranging from highly technical proposal development to solutions architecture and engineering.</div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 mr-4" width={50} height={50} src={alagantLogo.src} alt="Alagant" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">Eli Liang</p>
                                            <p className="text-gray-600">CEO, Alagant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className="">
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">AVALOGICS has been a lifesaver. One thing that has stood out above all others over the first 8 months that we worked with them, is their dependability. It&#39;s challenging in software today to find teams with enough experience and tenacity to consistently meet their deadlines, and deliver impeccable products. They just don&#39;t miss. The team is gritty, they listen, they understand, and they add value every step of the way. We actively recommend them to anyone we can. </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 mr-4" width={50} height={50} src={nursa.src} alt="Nursa" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">Curtis Anderson</p>
                                            <p className="text-gray-600">Founder @ Nursa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className="">
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">Every day for the last five months, I have relied on Avalogics and their ability to create, develop, execute, and manage. I would recommend them to anyone who is serious about succeeding in business. Avalogics fits my idea of &#34;the perfect business partner&#34;. They are highly skilled, remarkably proficient, and genuinely available, openminded, attentive, and responsive at all times. I have spent thousands of hours, and hundreds of thousand of dollars relying on freelance contractors and service providers. Avalogics ranks among my top 3 most trusted. The single-greatest attribute I appreciate most about Avalogics is their ability to solve any problem, at any time, within my timeframe.</div>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 mr-4" width={50} height={50} src={truckonomics.src} alt="Trucknomics" />
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">Myron Manuirirangi</p>
                                            <p className="text-gray-600">Truckonomics Project CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex items-center flex-col p-10'>
                <h1 className='text-3xl text-red-600 p-5'>Contact Us</h1>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="example@email.com" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Agency / Company
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="avalogics" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Phone
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="tel" placeholder="+1 (123) 123-1234" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                What can we help you with?
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                By submitting this form, I consent to the processing of the personal data that I provide Ignite in accordance with and as described in the privacy policy.
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}