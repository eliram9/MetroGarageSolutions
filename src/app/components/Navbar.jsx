"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

// Hoisted constants
const SECTIONS = ['about', 'services', 'works', 'contact'];

// Phone icon component
const PhoneIcon = () => (
    <svg
        className="w-6 h-6 text-white"
        fill="white"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
        <path
            d="M32.5 31.5c-2.5 2.5-10-2.5-12.5-5s-7.5-10 0-12.5l2.5 2.5c.5.5.5 1.5 0 2l-1.5 1.5c-.5.5-.5 1.5 0 2.5 1 2 3.5 5 5.5 6 1 .5 2 .5 2.5 0l1.5-1.5c.5-.5 1.5-.5 2 0l2.5 2.5z"
            fill="currentColor"
        />
    </svg>
);

// NavLink component for DRY
const NavLink = ({ href, active, children, onClick, mobile = false }) => {
    if (mobile) {
        return (
            <a
                href={href}
                className={`font-medium text-lg py-3 border-b border-gray-200 dark:border-gray-600 transition-colors ${
                    active ? 'text-primary' : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                }`}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={`group relative font-medium pb-1 border-b-2 transition-colors ${
                active ? 'border-current' : 'border-transparent hover:border-current'
            }`}
        >
            {children}
        </a>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Cache scrollY
            setScrolled(scrollY > 10);

            const scrollPosition = scrollY + 200; // Increased offset for navbar height
            let currentSection = '';

            // Check each section to see which one is currently in view
            SECTIONS.forEach(sectionId => {
                // Lazy load DOM refs: cache on first successful lookup
                if (!sectionRefs.current[sectionId]) {
                    sectionRefs.current[sectionId] = document.getElementById(sectionId);
                }

                const element = sectionRefs.current[sectionId];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = scrollY + rect.top;
                    const elementBottom = elementTop + element.offsetHeight;

                    // For contact section, be more lenient with detection
                    if (sectionId === 'contact') {
                        // Activate contact when we're close to it or past it
                        if (scrollPosition >= elementTop - 100) {
                            currentSection = sectionId;
                        }
                    } else {
                        // Check if the current scroll position is within this section
                        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                            currentSection = sectionId;
                        }
                    }
                }
            });

            // If we're at the very top, no section is active
            if (scrollY < 100) {
                currentSection = '';
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Call once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50">
            {/* Upper navbar */}
            <div className='bg-primary'>
                <Container>
                    <div className='flex justify-between items-center text-white py-3'>
                        <p className='text-xs md:text-base'>MHIC: #05-147422</p>
                        <div className='flex items-center space-x-2'>
                            <PhoneIcon />
                            <a href="tel:2406888858" className='text-xs md:text-base hover:underline'>240.688.8858</a>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={`${scrolled ? 'bg-white dark:bg-gray-800 shadow-md transition-colors text-gray-900 dark:text-gray-100' : ''}`}>
                <Container>
                    <div className='flex justify-between items-center py-3'>
                        <Link href="/" className="text-primary py-3 flex items-center">
                            <Image src="/images/garage.svg"
                                alt="Metro Garage Solutions Logo"
                                width={85}
                                height={60}
                                className="mr-3 w-[60px] h-[40px] md:w-[85px] md:h-[60px]"
                            />
                            <p className="text-xl md:text-3xl font-semibold pt-1 md:pt-1 tracking-wide whitespace-nowrap flex items-center md:block">
                                <span className="text-[#0010A4] dark:text-white">METRO</span>
                                <span className="bg-gradient-to-r from-start to-end bg-clip-text text-transparent text-xs md:text-sm font-medium tracking-wide mt-[2px] md:ml-0 md:block md:mt-[-4px] ml-1 whitespace-nowrap md:whitespace-normal">
                                    GARAGE SOLUTIONS
                                </span>
                            </p>
                        </Link>
                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            <NavLink href="#about" active={activeSection === 'about'}>
                                About
                            </NavLink>
                            <NavLink href="#services" active={activeSection === 'services'}>
                                Services
                            </NavLink>
                            <NavLink href="#works" active={activeSection === 'works'}>
                                Our Work
                            </NavLink>
                            <NavLink href="#contact" active={activeSection === 'contact'}>
                                Contact
                            </NavLink>
                            <ThemeSwitcher />
                        </nav>
                        {/* Burger Menu Button */}
                        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Open mobile menu"
                        >
                            <span className={`block w-6 h-0.5 bg-primary dark:bg-white mb-1 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary dark:bg-white mb-1 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary dark:bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>

                    {/* Mobile Overlay */}
                    {mobileMenuOpen && (
                        <div className="md:hidden fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)}>
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        </div>
                    )}

                    {/* Mobile Side Drawer */}
                    <div className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col px-6 space-y-6">
                            <NavLink href="#about" active={activeSection === 'about'} onClick={() => setMobileMenuOpen(false)} mobile>
                                About
                            </NavLink>
                            <NavLink href="#services" active={activeSection === 'services'} onClick={() => setMobileMenuOpen(false)} mobile>
                                Services
                            </NavLink>
                            <NavLink href="#works" active={activeSection === 'works'} onClick={() => setMobileMenuOpen(false)} mobile>
                                Our Work
                            </NavLink>
                            <NavLink href="#contact" active={activeSection === 'contact'} onClick={() => setMobileMenuOpen(false)} mobile>
                                Contact
                            </NavLink>

                            <div className="pt-4">
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
