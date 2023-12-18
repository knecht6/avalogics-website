import backgroundImageSectionOne from "/public/wave.jpg";
import backgroundImageSectionTwo from "/public/cybersecurity.png";
import backgroundImageSectionThree from "/public/digitization.jpg";

export default function Contracts() {
    return (
        <main>
            <section style={{
                backgroundImage: `url(${backgroundImageSectionOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
                height: "70vh",
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div className="box-border w-60 mr-40">
                    <h1 className="text-white text-2xl font-bold">Our Contract Vehicles allow you to get up and running - FAST.</h1>
                    <h2 className="text-white text-xl ">Contract Vehicles</h2>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center'>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionTwo.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '100%',
                        height: "100vh",
                    }}
                ></div>
                <div style={{ width: '100%', height: '100vh' }} className='flex flex-col justify-center items-center'>
                    <div>
                        <h1 className="text-red-500 text-4xl">GSA – Multiple Award Schedule (MAS)</h1>
                        <h2 className="text-2xl">Contract #: 47QTCA21D008A</h2>
                        <div className="mt-5">
                            <p>54151S: Information Technology Professional Services</p>
                            <p>518210C: Cloud SIN</p>
                            <p>54151HEAL: Health SIN</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center'>
                <div style={{ width: '100%', height: '100vh' }} className='flex flex-col justify-center items-center p-16'>
                    <div>
                        <h1 className="text-red-500 text-4xl">Electronic FAA Accelerated and Simplified Tasks (eFAST) program - Master Ordering Agreement (MOA)</h1>
                        <h2 className="text-2xl">Contract #: 693KA9-22-A-00184</h2>
                        <div className="mt-5">
                            <p>Functional Areas Awarded:</p>
                            <ul className="list-disc pl-10">
                                <li>Air Transportation Support (ATS)</li>
                                <li>Business Administration & Management (BAM)</li>
                                <li>Engineering Services (ES)</li>
                                <li>Computer/Information Systems Development (CSD)</li>
                                <li>Computer Systems Support (CSS)</li>
                                <li>Documentation & Training (D&T)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionThree.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '100%',
                        height: "100vh",
                    }}
                ></div>
            </section>
        </main>
    );
}