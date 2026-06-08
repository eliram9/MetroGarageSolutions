import React from 'react';
import dynamic from 'next/dynamic';

import Container from './Container';

const Tabs = dynamic(() => import('./Tabs'), {
    loading: () => <div className="w-full h-[400px] md:h-[600px]" />,
});


const Works = () => {
    return (
        <section id="works" className='py-20 font-rubik text-primary'>
            <Container>
                  {/* Header */}
                <div className='left-0 relative'>
                    <h1 className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15' aria-hidden="true">OUR WORK</h1>
                    <div className='text-primary'>
                        <h2 className='ml-10 font-medium absolute -mt-9 md:-mt-12 text-[#002C8C] dark:text-white md:text-3xl text-2xl'>{`Featured jobs we've done`}</h2>
                    </div>
                </div>
            </Container>
            <Tabs />
        </section>
    );
};

export default Works;