import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white lg:py-5 py-3 px-4 font-light font-rubik w-full bottom-0">
            <div className="mt-2 text-center text-xs lg:text-sm">
                <p>© {new Date().getFullYear()} Metro Garage Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
