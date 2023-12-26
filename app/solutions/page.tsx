import backgroundImageSectionOne from "/public/background.jpg";
import backgroundImageSectionTwo from "/public/cyber.jpg";
import devOps from "/public/devops.jpg";
import speed from "/public/speed.jpg";
import defend from "/public/defend.jpg";


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
            <section className='grid grid-cols-2 gap-4 place-content-center' id='data'>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageSectionTwo.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        height: "auto",
                    }}
                ></div>
                <div style={{ width: "100vh", height: 'auto' }} className='flex flex-col justify-center py-4'>
                    <h2 className='text-3xl font-bold mb-2 mt-2 text-black'>
                        Data engineer/Data science
                    </h2>
                    <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
                        We speak data fluency across platforms.
                    </h1>
                    <p className='text-xl'>
                        Our data whisperers from DBAs to data scientists extract insights hiding between the 0&#39;s and 1&#39;s—elevating decisions through statistical, geospatial, behavioral modeling prowess combined with leading ETL, cloud data warehouse, lakehouse and BI tools fine-tuned to your repositories.
                    </p>
                    <p className='text-xl pt-2'>
                        Want to predict service backlogs, hedge risks through simulation, optimize logistics in real-time based on machine intelligence? Our experts in dataOps will architect and implement robust pipelines to feed bleeding edge AI/ML applications. We exposeROI through usable analytics.
                    </p>
                    <h1 className='text-3xl font-bold mb-2 mt-2 text-red-500'>
                        The Key Unlocks are Our Business
                    </h1>
                    <p className="text-xl">
                        We provide the keys unlocking your agency’s most ambitious operational, constituent-facing and mission-enhancing possibilities.  Data holds answers to your biggest “what ifs.” Our cross-functional teams work iteratively to decipher complex challenges. We translate findings into high-impact programs generating greater access, equity, insights and interventions for the communities relying on you.
                    </p>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center' id='devops'>
                <div style={{ width: "100vh", height: 'auto' }} className='flex flex-col justify-center p-4'>
                    <h2 className='text-3xl font-bold mb-2 mt-2 text-black'>
                        Where Cloud Fluency Meets DevOps Dynamism
                    </h2>
                    <p className='text-xl'>
                        We speak your cloud stack’s language – architecting, integrating, managing and optimizing public cloud, hybrid and multi-access edge deployments infused with automated CI/CD muscle. Our engineers alleviate orchestration burdens, freeing teams to deliver more value at intake points along the DevOps pipeline - from agile sprints to production-ready apps racked and stacked through infrastructure coded for optimal security, scalability and costs no matter the use case or data classification.
                    </p>
                    <p className='text-xl  pt-2'>
                        Call on cloud-native authorities equipped to plan, build and run modern architectures - whether lifting and shifting legacy systems to the cloud, harnessing serverless functions, or pursuing widescale microservices adoption across vibrant development squads. We provide radar on incoming drifts that could put operations at risk so your migration stays the course. Our systematic DevOps discipline protects uptime and reliability even as infrastructures change and innovate.
                    </p>

                </div>
                <div
                    style={{
                        backgroundImage: `url(${devOps.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "auto",
                        height: "auto",
                    }}
                />
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center' id='agile'>
                <div
                    style={{
                        backgroundImage: `url(${speed.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        height: "auto",
                    }}
                ></div>
                <div style={{ width: "100vh", height: 'auto' }} className='flex flex-col justify-center py-4'>
                    <h2 className='text-3xl font-bold mb-2 mt-2 text-black'>
                        Agile Velocity Shifting Into Overdrive
                    </h2>
                    <p className='text-xl'>
                        We apply software engineering fundamentals refined over decades delivering innovation at scale across public and private sector organizations alike - where scope fluidity demands laser focus. Our teams enhance outcomes by guiding clients on structuring empowered cross-functional squads able to thrive amid changing priorities.
                    </p>
                    <p className='text-xl pt-2'>
                        From user story mapping to test-driven development, our Agile DNA combines best practices with the human touch of experience. We configure CI/CD engines to keep iteration cycles spinning rapidly without stalling on quality, security or visibility concerns.
                    </p>
                    <p className='text-xl pt-2'>
                        Sprints facilitated by our Scrum masters progress transparently aided by collapsible toolchain integrations, automated testing, and observability dashboards - enabling more user value delivered sooner without risking trust. Our Lean-Agile perspective steers projects avoiding overinvestment, obsolete features or schedule overruns. We amplify organizational agility through proven frameworks battle-tested by the best.
                    </p>
                    <p className='text-xl  pt-2'>
                        I aimed to hit on Agile methodology expertise (Scrum, Lean-Agile), enhanced velocity/rapid delivery, CI/CD integrations, and risk mitigation. Please let me know if you would want me focus on any other aspects of Agile software development and cultural transformation!
                    </p>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-4 place-content-center' id='defend'>
                <div style={{ width: "100vh", height: 'auto' }} className='flex flex-col justify-center p-4'>
                    <h2 className='text-3xl font-bold mb-2 mt-2 text-black'>
                        Defenders of Critical Digital Infrastructure
                    </h2>
                    <p className='text-xl'>
                        For agencies charged with safeguarding sensitive systems, data, and critical infrastructure the risks can never be too careful or too managed for readiness. We provide mature strategies and leading-edge cybersecurity capabilities evolved over decades defending government and commercial systems from advanced persistent threats.

                    </p>
                    <p className='text-xl pt-2'>
                        Our spectrum starts with battle-tested SCO controls, data encryption, PAM, SSO, firewalls, SIEM correlation and user privilege principles preventing initial exploitation. We progress into threat intel leveraging AI for timely detection/response minimizing impacts through orchestration that accelerates healing. Resiliency by design principles drive our closed-loop architectures.
                    </p>
                    <p className='text-xl pt-2'>
                        Beyond layers securing endpoints, apps and cloud infrastructure itself, our duty is guarding mission assurance. We guide agencies adopting Zero Trust frameworks that verify explicitly while enabling securely. Our expertise arms partners with the cyber readiness to uphold infrastructure integrity, safeguard constituent privacy, and maintain vital continuity of operations against criminal actors targeting essential services. Resilience remains our true north star.
                    </p>

                </div>
                <div
                    style={{
                        backgroundImage: `url(${defend.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "auto",
                        height: "auto",
                    }}
                />
            </section>
        </main>
    );
}