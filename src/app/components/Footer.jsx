import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

// Server Component: static markup only, no client JS shipped for the footer.

const explore = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#works', label: 'Our Work' },
    { href: '/#contact', label: 'Contact' },
];

const socials = [
    {
        href: 'https://www.facebook.com/metrogaragesolutions',
        label: 'Metro Garage Solutions on Facebook',
        icon: '/images/facebook.png',
    },
    {
        href: 'https://www.angi.com/companylist/us/md/rockville/metro-garage-solutions-llc-reviews-8482812.htm',
        label: 'Metro Garage Solutions on Angi',
        icon: '/images/angi.png',
    },
    {
        href: 'https://www.google.com/maps/place/Metro+Garage+Solutions/@39.0604265,-77.1348078,2631m/data=!3m1!1e3!4m8!3m7!1s0x89b7cdb34bbab53d:0x3436c00af1080ecc!8m2!3d39.0604265!4d-77.1322329!9m1!1b1!16s%2Fg%2F11bc73bvcf?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
        label: 'Metro Garage Solutions on Google',
        icon: '/images/google.png',
    },
];

const hours = [
    ['Sun - Thu', '9:00 AM - 8:00 PM'],
    ['Friday', '8:00 AM - 2:00 PM'],
    ['Saturday', 'Closed'],
];

const linkClass =
    'inline-block py-1 text-white/75 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';
const headingClass = 'text-base font-medium text-white';

const LinkList = ({ items }) => (
    <ul className="mt-3 space-y-1">
        {items.map(({ href, label }) => (
            <li key={href}>
                <Link href={href} className={linkClass}>{label}</Link>
            </li>
        ))}
    </ul>
);

const ContactRow = ({ icon, children }) => (
    <li className="flex items-start gap-3">
        <Image src={icon} alt="" aria-hidden="true" width={20} height={20} className="mt-1 h-5 w-5 shrink-0" />
        <span>{children}</span>
    </li>
);

const Footer = () => {
    return (
        <footer className="bg-primary text-white font-rubik w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <Container>
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-x-10 lg:grid-cols-12 lg:py-16">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-1 lg:col-span-5">
                        <Link href="/" className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Metro Garage Solutions home">
                            <span className="block text-2xl md:text-3xl font-semibold tracking-wide leading-none">METRO</span>
                            <span className="mt-1 block bg-gradient-to-r from-start to-end bg-clip-text text-sm font-medium tracking-wide text-transparent">
                                GARAGE SOLUTIONS
                            </span>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm md:text-base font-light leading-relaxed text-white/75">
                            Garage door installation, repair, and maintenance from our shop in Rockville, MD.
                        </p>
                        <p className="mt-3 text-sm font-light text-white/60">MHIC #05-147422</p>
                        <ul className="mt-6 flex gap-3" aria-label="Find us online">
                            {socials.map(({ href, label, icon }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        <Image src={icon} alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + hours */}
                    <div className="col-span-2 sm:col-span-1 lg:col-span-4">
                        <h3 className={headingClass}>Contact</h3>
                        <ul className="mt-3 space-y-3 text-sm md:text-base font-light text-white/75">
                            <ContactRow icon="/images/Phone.png">
                                <a href="tel:+12406888858" className="hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                    (240) 688-8858
                                </a>
                            </ContactRow>
                            <ContactRow icon="/images/Mail.png">
                                <a href="mailto:info@metrogaragesolutions.com" className="break-all hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                    info@metrogaragesolutions.com
                                </a>
                            </ContactRow>
                            <ContactRow icon="/images/Location.png">
                                <address className="not-italic">
                                    365 Congressional Ln<br />
                                    Rockville, MD 20852
                                </address>
                            </ContactRow>
                        </ul>
                        <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm font-light text-white/75">
                            {hours.map(([day, time]) => (
                                <React.Fragment key={day}>
                                    <dt className="text-white/60">{day}</dt>
                                    <dd>{time}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>

                    {/* Site links */}
                    <nav className="col-span-2 lg:col-span-3" aria-labelledby="footer-explore">
                        <h3 id="footer-explore" className={headingClass}>Explore</h3>
                        <LinkList items={explore} />
                    </nav>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs md:text-sm font-light text-white/60 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Metro Garage Solutions. All rights reserved.</p>
                    <p>
                        Built by{' '}
                        <a
                            href="https://www.eliramalachi.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/75 hover:text-white transition-colors"
                        >
                            Eliram Malachi
                        </a>
                        <span className="mx-[3px]">&amp;</span>
                        <a
                            href="https://iti307.wixstudio.com/itaylevy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/75 hover:text-white transition-colors"
                        >
                            Itay Levy
                        </a>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
