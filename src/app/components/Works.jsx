import React from 'react';

import Container from './Container';
import Carousel from './Carousel';


const Works = () => {
    return (
        <section id="works" className='py-20 font-rubik text-primary'>
            <Container>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-medium'>OUR WORK</h2>
                    <p className='text-lg my-3 font-light'>Featured jobs we've done</p>
                </div>
            </Container> 
            <Carousel />
        </section>
    );
};

export default Works;