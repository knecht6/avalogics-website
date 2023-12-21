import zoilaImg from '/public/zoila_gutierrez.png';
import archesUthaImg from '/public/arches-utha.png';
import utha from '/public/utha2.jpg';
import coo from '/public/ceo.png';

export default function Profiles() {
    return (
        <main>
            <section className="container">
                <div className="grid grid-cols-3 place-content-center gap-4 p-10">
                    <div className='ml-5'>
                        <img className='rounded-full border-4 border-gray-200' src={zoilaImg.src} alt="Zoila Gutierrez" style={{ height: '200px', width: 'auto' }} />
                        <h1 className='text-3xl font-bold pt-5'>Zoila Gutierrez</h1>
                        <h2 className='text-xl text-gray-500 pt-5'>CEO of Avalogics</h2>
                        <p className=''>
                            Zoila Gutierrez is the CEO and Founder of Avalogics, an IT solutions company based in Clearfield, Utah that is pursuing US government contracts. Zoila emigrated to the US from El Salvador in 2005 and has called the state of Utah her home ever since.
                        </p>
                    </div>
                    <div className='col-span-2'>
                        <img className='rounded-lg w-full' src={archesUthaImg.src} alt="business" />
                        <p className='pt-10'>
                            Zoila brought with her a strong passion for technology and project management. She previously worked for several years in Central America leading IT and software development teams, implementing ERP systems and digital solutions for medium sized companies. Her hands-on expertise and business acumen quickly became assets to employers in Utah as well.
                        </p>
                        <p className='pt-2'>
                            Founded in late 2017 and initially self-funded by Zoila drawing from her own savings, Avalogics provides a range of services from custom software to security assessments and cloud infrastructure for commercial companies. However, Zoila has set her sights on the immense potential serving public sector clients and making an impact by modernizing government operations.
                        </p>
                        <p className='pt-2'>
                            Headquartered in Clearfield in an Opportunity Zone, Avalogics is eligible for incentives to spur growth and local hiring. As a visionary Hispanic woman tech founder, Zoila aims to deliver innovation to public agencies while expanding economic prospects for untapped talent nearby. She constantly advocates for young women and minorities to develop STEAM skills and become the next generation of IT trailblazers.

                        </p>
                        <p className='pt-2'>
                            Under Zoila’s leadership, the future shines brightly for the Avalogics team’s public sector ambitions - bringing agility and advanced capabilities to better serve US communities coast to coast.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="grid grid-cols-3 place-content-center gap-4 p-10">
                    <div className='ml-5'>
                        <img className='rounded-full border-4 border-gray-200' src={coo.src} alt="Eduardo Sandoval" style={{ height: '200px', width: 'auto' }} />
                        <h1 className='text-3xl font-bold pt-5'>Eduardo Sandoval</h1>
                        <h2 className='text-xl text-gray-500 pt-5'>COO of Avalogics</h2>
                        <p className=''>
                            Eduardo Sandoval, born in Guadalajara, Mexico, in 1978, is a notable government contractor based in Salt Lake City, Utah. His journey to the United States began in his early twenties when he received a scholarship to study civil engineering at the University of Utah. Showcasing an innate ability for both technical analysis and team management, Eduardo rapidly carved a niche for himself in the field.
                        </p>
                    </div>
                    <div className='col-span-2'>
                        <img className='rounded-lg w-full' src={utha.src} alt="business" />
                        <p className='text-gray-300 pt-2'>Courtesy: Jamie Hagan</p>
                        <p className='pt-5'>
                            After completing his Master's degree in Engineering Management, Eduardo began his professional journey by joining a renowned Hispanic-American-owned firm, Avalogics LLC, based in Clearfield, Utah. Recognizing Eduardo's expertise and dedication, the company quickly promoted him to a leadership position where he managed several critical infrastructure projects for both commercial and local government customers.
                        </p>
                        <p className='pt-2'>
                            At Avalogics LLC, Eduardo's deep understanding of the overlap between policy, engineering, and community needs propelled the company to new heights. Under his leadership, the firm was responsible for pivotal projects that encompassed transportation, water supply, and public housing solutions in the state.
                        </p>
                        <p className='pt-2'>
                            Eduardo's commitment isn't just limited to his professional endeavors. As a proud Hispanic professional, he is deeply invested in promoting diversity in STEM fields. He's initiated scholarships for underrepresented students in Utah and frequently speaks at educational institutions about the importance of inclusive representation in engineering and entrepreneurship.
                        </p>
                        <p className='pt-2'>
                        Outside the confines of the boardroom, Eduardo, a father of two, finds solace in Utah's vast landscapes. He is an avid hiker and often attributes the state's natural beauty as a consistent source of inspiration for his work. Through his dedication to community and outstanding professional contributions, Eduardo Sandoval has cemented his reputation as an invaluable asset to Avalogics LLC and the broader Utah community.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}