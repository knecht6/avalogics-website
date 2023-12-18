import backgroundImageSectionOne from "/public/background.jpg";
import backgroundImageSectionTwo from "/public/cyber.jpg";
import backgroundImageSectionThree from "/public/abstract.jpg";

export default function Solutions() {
    return (
        <main>
            <section style={{
                backgroundImage: `url(${backgroundImageSectionOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
                height: "50vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 className="text-white text-7xl font-bold">Solutions</h1>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center'>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionTwo.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        height: "60vh",
                    }}
                ></div>
                <div style={{ width: "100vh", height: '60vh' }} className='flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold mb-2 mt-2 text-black'>
                        DATA SERVICES
                    </h2>
                    <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
                        More Access. More Analytics.
                    </h1>
                    <p className='text-xl'>
                        In today’s data-driven world, we help you maximize mission success by finding new ways to reduce the complexity and costs associated with the collection, transformation, delivery, and management of disparate information.
                    </p>
                </div>
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
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <h1 className="text-red-600 text-5xl font-bold py-10">Intelligent Data Dissemination (IDDF)</h1>
                <div className="grid grid-cols-5 gap-4 content-center text-white text-xl py-10">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <p>Uniﬁed Transformation</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <p>Advanced Modeling</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <p>Agile Product Creation</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <p>Flexible Dissemination</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <p>Data Consumers</p>
                    </div>
                </div>
                <div className="text-white text-xl py-8">
                    Benefits to you:
                    <ul className="list-disc text-red-700 pl-10">
                        <li>
                            <p className="text-white">
                                Accelerated dissemination of data products to users
                            </p>
                        </li>
                        <li>
                            <p className="text-white">
                                Event-driven, on demand Data-as-a-Service
                            </p>
                        </li>
                        <li>
                            <p className="text-white">
                                Robust, flexible microservices architecture
                            </p>
                        </li>
                        <li>
                            <p className="text-white">Improved big data processing performance</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}