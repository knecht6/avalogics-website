import backgroundImageSectionOne from "/public/background.jpg";
import backgroundImageSectionTwo from "/public/devops.jpg";
import backgroundImageSectionThree from "/public/industry.jpg";

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
                <h1 className="text-white text-7xl font-bold">Services</h1>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center' id='engineering'>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionTwo.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        height: "auto",
                        minHeight: "60vh",
                    }}
                ></div>
                <div style={{ width: "100vh" }} className='flex flex-col justify-center py-10 pr-10'>
                    <h2 className='text-3xl font-bold mb-4 mt-2 text-red-500'>
                        Engineering, Logistics & Operational Services
                    </h2>
                    <p className='text-xl mb-6'>
                        We deliver end-to-end engineering and operational expertise to keep your business running at peak efficiency. From systems integration to logistics optimization, our teams combine technical depth with real-world execution experience.
                    </p>
                    <ul className='space-y-5'>
                        <li>
                            <p className='text-lg font-bold'>Systems Engineering & Integration</p>
                            <p className='text-base'>Designing and integrating complex systems to ensure seamless interoperability across hardware, software, and operational components.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Logistics & Supply Chain Optimization</p>
                            <p className='text-base'>Streamlining supply chains and logistics networks through data-driven process engineering to reduce costs and improve throughput.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Operational Support & Field Services</p>
                            <p className='text-base'>On-site technical expertise that keeps your operations running at peak performance through deployment, maintenance, and sustainment.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Technical Documentation & Configuration Management</p>
                            <p className='text-base'>Developing rigorous documentation standards and configuration control processes that ensure consistency and full traceability.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Quality Assurance & Process Engineering</p>
                            <p className='text-base'>Embedding quality at every stage—from design validation to production—minimizing risk and maximizing reliability.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Infrastructure Planning & Facilities Engineering</p>
                            <p className='text-base'>Planning, designing, and managing infrastructure projects that align with operational requirements and long-term organizational goals.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Program & Project Engineering Support</p>
                            <p className='text-base'>Seasoned program managers providing engineering oversight and execution support from concept through delivery.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center' id='management'>
                <div style={{ width: "100vh" }} className='flex flex-col justify-center py-10 pl-10'>
                    <h2 className='text-3xl font-bold mb-4 mt-2 text-red-500'>
                        Management & Advisory Services
                    </h2>
                    <p className='text-xl mb-6'>
                        Our management consultants and advisors help organizations achieve strategic clarity, operational efficiency, and sustainable growth. We work alongside your leadership team to turn ambition into action.
                    </p>
                    <ul className='space-y-5'>
                        <li>
                            <p className='text-lg font-bold'>Strategic Management Consulting</p>
                            <p className='text-base'>Partnering with leadership teams to define strategic direction, identify growth opportunities, and build lasting competitive advantage.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Business Process Improvement & Optimization</p>
                            <p className='text-base'>Analyzing and redesigning workflows to eliminate inefficiencies, reduce costs, and accelerate operational throughput.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Organizational Change Management</p>
                            <p className='text-base'>Guiding organizations through transformation with structured change strategies that drive adoption and minimize disruption.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Financial Management & Budget Advisory</p>
                            <p className='text-base'>Budget planning, cost analysis, and financial oversight that optimizes resource allocation across your organization.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Acquisition & Procurement Advisory</p>
                            <p className='text-base'>Advising on procurement strategy, vendor selection, and contract management to secure the best value for your investment.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Performance Management & Analytics</p>
                            <p className='text-base'>Building performance frameworks and analytics capabilities that give leadership real-time visibility into what matters most.</p>
                        </li>
                        <li>
                            <p className='text-lg font-bold'>Workforce Planning & Training Advisory</p>
                            <p className='text-base'>Developing talent strategies and training programs that align human capital with your organizational objectives and growth plans.</p>
                        </li>
                    </ul>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionThree.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "auto",
                        height: "auto",
                        minHeight: "60vh",
                    }}
                />
            </section>
        </main>
    );
}
