"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50">
            {/* Upper navbar */}
            <div className='bg-primary'>
                <Container>
                    <div className='flex justify-between items-center text-white py-3'>
                        <p className='text-xs md:text-base'>MHIC: #11-111111</p>
                        <div className='flex items-center space-x-2'>
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
                            <p className='text-xs md:text-base'>240.688.8858</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={`${scrolled ? 'bg-white shadow-md transition-colors' : ''}`}>
                <Container>
                    <div className='flex justify-between items-center py-3'>
                        <Link href="/" className="text-primary py-3 flex items-center">
                            <Image src="/images/garage.svg"
                                alt="Metro Garage Solutions Logo"
                                width={85}
                                height={60}
                                className="mr-3"
                            />
                            <h1 className="text-3xl font-semibold pt-1 tracking-wide">
                                METRO
                                <div
                                    className="bg-gradient-to-r from-start to-end bg-clip-text text-transparent text-sm font-medium tracking-wide -mt-1"
                                >
                                    {' '}
                                    GARAGE SOLUTIONS
                                </div>
                            </h1> 
                        </Link>
                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            <a href="#about" className="group relative text-gray-800 hover:text-primary transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-primary">
                                About
                            </a>
                            <a href="#services" className="group relative text-gray-800 hover:text-primary transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-primary">
                                Services
                            </a>
                            <a href="#work" className="group relative text-gray-800 hover:text-primary transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-primary">
                                Our Work
                            </a>
                            <a href="#contact" className="group relative text-gray-800 hover:text-primary transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-primary">
                                Contact
                            </a>
                            <ThemeSwitcher />
                        </nav>
                        {/* Burger Menu Button */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Open mobile menu"
                        >
                            <span className={`block w-6 h-0.5 bg-primary mb-1 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary mb-1 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="md:hidden flex flex-col bg-white shadow-md rounded-lg mt-2 py-4 px-6 space-y-4 absolute left-0 right-0 z-40">
                            <a href="#about" className="text-gray-800 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
                            <a href="#services" className="text-gray-800 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <a href="#work" className="text-gray-800 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
                            <a href="#contact" className="text-gray-800 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                            <ThemeSwitcher />
                        </div>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
