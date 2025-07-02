"use client"; 

import React, { useState } from "react";
import Image from 'next/image';



const Contact = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <section className='px-32 h-auto mb-40 font-rubik'>
            <div className="grid grid-cols-12 gap-28">
                <div className="col-span-12 md:col-span-4 bg-primary px-12 py-12 text-white rounded-tl-md rounded-tr-md rounded-br-md">
                    <h2 className='text-4xl'>CONTACT US</h2>
                    <p className='font-light text-md mb-5'>Say something to start a change!</p>
                    <div className='font-thin pt-5 text-[15px]'>
                        <div className='flex mb-10'>
                            <Image src='/images/Phone.png' alt="phone icon" width={20} height={20}
                                   className="w-3 h-[14px] ml-[2px] mr-2 mt-1" 
                            />
                            240.688.8858
                        </div>
                        <div className='flex mb-10'>
                            <Image src='/images/Mail.png' alt="phone icon" width={20} height={20}
                                   className="w-4 h-[14px] mr-2 mt-[5px]" 
                            />
                            info@metrogaragesolutions.com
                        </div>
                        <div className='flex'>
                            <Image src='/images/Location.png' alt="phone icon" width={20} height={20}
                                   className="w-[18px] h-4 mr-2 mt-1" 
                            />
                            <div>
                                Metro Garage Solutions<br /> 
                                259 Congressional Ln. Rockville<br />
                                MD, 20852
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='h-5 w-5 bg-white mr-3 rounded-[4px]'></div>
                        <div className='h-5 w-5 bg-white mr-3 rounded-[4px]'></div>
                    </div>
                </div>

                {/* From */}
                <div className="col-span-12 md:col-span-8 p-4 text-gray-700 relative">  
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full-width input */}

                        <div>
                            <label className="block text-sm text-gray-500">First Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-blue-800 outline-none py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">Last Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-blue-800 outline-none py-1"
                            />
                        </div>

                        {/* Half-width inputs (on larger screens) */}
                        <div className='mt-4'>
                            <label className="block text-sm text-gray-500">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-blue-800 outline-none py-1"
                            />
                        </div>
                        <div className='mt-4'>
                            <label className="block text-sm text-gray-500">Phone</label>
                            <input
                                type="tel"
                                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-blue-800 outline-none py-1"
                            />
                        </div>

                        {/* Inline Radio Buttons with State */}
                        <div className="md:col-span-2 mt-6">
                            <label className="block text-sm text-gray-500 mb-2">*Optional - Select service</label>
                            <div className="flex space-x-6">
                                {["Option 1", "Option 2", "Option 3", "Other"].map((option, index) => (
                                    <label key={index} className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="selection"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                            className="hidden peer"
                                        />
                                        {/* Outer Circle */}
                                        <div className="w-6 h-6 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-blue-600 transition-all">
                                            {/* Inner Circle (Only visible when checked) */}
                                            <div className="w-3.5 h-3.5 bg-blue-600 rounded-full peer-checked:scale-100 scale-0 transition-all"></div>
                                        </div>
                                        <span className="ml-2 text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>



                        {/* Full-width textarea */}
                        <div className="md:col-span-2 mt-8">
                            <label className="block text-sm text-gray-500">*Optional</label>
                            <textarea className=" block w-full border-b-2 border-gray-500 focus:border-blue-800 outline-none pt-2"
                                        placeholder='Write your message'
                                        rows={1}
                            >
                                        
                            </textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-end absolute bottom-0 right-0">
                            <button className="px-8 py-2 text-white bg-gradient-to-r from-start to-end rounded-md shadow hover:bg-blue-600">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
