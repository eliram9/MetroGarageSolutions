import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 px-4 font-rubik w-full">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
                <p className="text-xs lg:text-sm font-light text-white/80">
                    © {new Date().getFullYear()} Metro Garage Solutions. All rights reserved.
                </p>
                <div className="border-t border-white/20 w-3/6 mb-2" />
                <p className="text-xs text-white/50 font-light">
                    Built by{' '}
                    <a
                        href="https://www.eliramalachi.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                    >
                        Eliram Malachi
                    </a>
                    <span className="text-white/50 mx-[3px]">&amp;</span>
                    <a
                        href="https://iti307.wixstudio.com/itaylevy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                    >
                        Itay Levy 
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
