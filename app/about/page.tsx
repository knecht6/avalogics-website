export const metadata = {
    title: 'About Us - Avalogics'
}

export default function About() {
    return (
        <main>
            <section style={{backgroundColor: '#1a1a2e', padding: '80px 40px', textAlign: 'center'}}>
                <h1 style={{color: 'white', fontSize: '2.5rem', marginBottom: '20px'}}>About Avalogics</h1>
                <p style={{color: '#ccc', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>
                    Avalogics LLC is a professional services firm delivering engineering, logistics, and management advisory solutions to commercial clients across industries.
                </p>
            </section>
            <section style={{padding: '80px 40px', maxWidth: '1200px', margin: '0 auto'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Our Mission</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#444'}}>
                    We combine deep technical expertise with strategic advisory capabilities to help organizations solve complex operational challenges, optimize performance, and achieve sustainable growth.
                </p>
            </section>
            <section style={{backgroundColor: '#f5f5f5', padding: '80px 40px'}}>
                <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                    <h2 style={{fontSize: '2rem', marginBottom: '40px', textAlign: 'center'}}>Our Leadership</h2>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
                        <div style={{backgroundColor: 'white', padding: '40px', borderRadius: '8px'}}>
                            <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Zoila Gutierrez</h3>
                            <p style={{color: '#666', marginBottom: '20px'}}>CEO &amp; Founder</p>
                            <p style={{lineHeight: '1.8'}}>Zoila founded Avalogics LLC to deliver innovative engineering and consulting solutions to commercial clients. With extensive experience in operations and strategic management, she leads the company vision and client partnerships.</p>
                        </div>
                        <div style={{backgroundColor: 'white', padding: '40px', borderRadius: '8px'}}>
                            <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Eduardo Knecht</h3>
                            <p style={{color: '#666', marginBottom: '20px'}}>Chief Technology Officer</p>
                            <p style={{lineHeight: '1.8'}}>Eduardo brings deep expertise in technology infrastructure, cloud platforms, and digital transformation. He leads Avalogics technical delivery across engineering and management advisory engagements for commercial clients across industries.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{padding: '80px 40px', textAlign: 'center'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Get In Touch</h2>
                <p style={{fontSize: '1.1rem', color: '#444', marginBottom: '30px'}}>Ready to work with us? Contact our team today.</p>
                <a href="/contact" style={{backgroundColor: '#2563eb', color: 'white', padding: '15px 40px', borderRadius: '6px', textDecoration: 'none', fontSize: '1.1rem'}}>Contact Us</a>
            </section>
        </main>
    )
}
