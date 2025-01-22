import React from 'react';
import Image from 'next/image';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center font-rubik'>
            <div className="text-primary py-3 flex items-center px-6 font-rubik">
                <Image src="/images/garage.svg"
                    alt="Metro Garage Solutions Logo"
                    width={85}
                    height={60}
                    className="mr-3"
                />
                <h1 className="text-3xl font-semibold pt-1 tracking-wide">
                    METRO
                    <div
                        className="bg-gradient-to-r from-start to-end bg-clip-text text-transparent text-sm font-normal tracking-wide -mt-1"
                    >
                        {' '}
                        GARAGE SOLUTIONS
                    </div>
                </h1> 
            </div>
            <div>
                List of links
            </div>
      </div>

        
    )
}

export default Navbar
