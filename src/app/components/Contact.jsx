"use client"; 

import React, { useState } from "react";
import Image from 'next/image';

import emailjs from '@emailjs/browser';
import Container from "./Container";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Door Installation',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
        }
        
        // Last name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
        }
        
        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address (e.g., name@domain.com)';
        }
        
        // Phone validation (10 digits only)
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must contain exactly 10 digits';
        }
        
        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 3) {
            newErrors.message = 'Message must be at least 3 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus('');
        
        try {
            // Check if EmailJS environment variables are configured
            if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
                !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
                !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
                throw new Error('EmailJS configuration missing. Please check environment variables.');
            }

            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                service: formData.service,
                message: formData.message
            };
            
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: 'Door Installation',
                message: ''
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <Container>
                <div className="bg-primary/10 pb-2 pt-4 rounded-xl">
                
                    {/* <!-- Elfsight Google Reviews | Untitled Google Reviews 2 --> */}
                    <div className="w-full max-w-full overflow-hidden">
                        <div className="max-w-xs mx-auto sm:max-w-sm md:max-w-full" style={{maxWidth: '100%', overflow: 'hidden'}}>
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div className="elfsight-app-faf1dc23-891b-4d19-a32d-e8a44462f0c6" data-elfsight-app-lazy></div>
                        </div>
                    </div>  
                            
                </div>
            </Container>

            <div className='h-auto pb-20 pt-20 bg-gradient-to-b from-white via-white via-primary/50 to-primary'>

            <Container>
                <div className="block lg:grid lg:grid-cols-12 gap-28">
                    <div className="col-span-12 lg:col-span-4 bg-primary px-12 py-12 text-white rounded-lg flex flex-col">
                        <div className="flex-grow">
                            <h2 className='text-4xl'>CONTACT US</h2>
                            <p className='font-light text-md mb-5'>Say something to start a change!</p>
                            <div className='font-thin pt-5 text-[15px]'>
                            <div className='flex mb-10'>
                                <Image src='/images/Phone.png' alt="phone icon" width={24} height={24}
                                       className="w-6 h-6 ml-[2px] mr-3" 
                                />
                                240.688.8858
                            </div>
                            <div className='flex mb-10'>
                                <Image src='/images/Mail.png' alt="email icon" width={24} height={24}
                                       className="w-6 h-6 mr-3 mt-[1px]" 
                                />
                                info@metrogaragesolutions.com
                            </div>
                            <div className='flex'>
                                <Image src='/images/Location.png' alt="location icon" width={24} height={24}
                                       className="w-6 h-6 mr-3" 
                                />
                                <div>
                                    Metro Garage Solutions<br /> 
                                    259 Congressional Ln. Rockville<br />
                                    MD, 20852
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        {/* Footer Section */}
                        <div className="mt-auto pt-10">
                            {/* Social Media Icons */}
                            <div className="flex items-center gap-3 mb-8 -ml-[10px]">
                                <a href="https://www.facebook.com/metrogaragesolutions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white p-2 rounded-full"
                                    aria-label="Visit our Facebook page"
                                >
                                    <Image src="/images/facebook.png" 
                                           alt="Facebook icon" 
                                           width={40} 
                                           height={40}
                                           className="w-8 h-8"
                                    />
                                </a>
                                <a  href="https://www.angi.com/companylist/us/md/rockville/metro-garage-solutions-llc-reviews-8482812.htm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center transition-all duration-300 hover:scale-110 hover:-rotate-6 border border-white p-2 rounded-full"
                                    aria-label="Visit our Angi page"
                                >
                                    <Image src="/images/angi.png" 
                                           alt="Angi icon" 
                                           width={40} 
                                           height={40}
                                           className="w-8 h-8"
                                    />
                                </a>
                                <a  href="https://www.google.com/maps/place/Metro+Garage+Solutions/@39.0604265,-77.1348078,2631m/data=!3m1!1e3!4m8!3m7!1s0x89b7cdb34bbab53d:0x3436c00af1080ecc!8m2!3d39.0604265!4d-77.1322329!9m1!1b1!16s%2Fg%2F11bc73bvcf?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white p-2 rounded-full"
                                    aria-label="Visit our yelp page"
                                >
                                    <Image src="/images/google.png" 
                                           alt="Yelp icon" 
                                           width={40} 
                                           height={40}
                                           className="w-8 h-8"
                                    />
                                </a>
                                
                            </div>
                            
                            {/* Decorative Squares */}
                            <div className='flex'>
                                <div className='h-5 w-5 bg-white mr-3 rounded-[4px]'></div>
                                <div className='h-5 w-5 bg-white/65 mr-3 rounded-[4px]'></div>
                                <div className='h-5 w-5 bg-white/50 mr-3 rounded-[4px]'></div>
                                <div className='h-5 w-5 bg-white/20 mr-3 rounded-[4px]'></div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="col-span-12 lg:col-span-8 p-4 text-gray-700 relative">  
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            {/* First Name */}
                            <div>
                                <label className="block text-gray-900 mb-3">First Name <span className='text-red'>*</span></label>
                                <input type="text"
                                       name="firstName"
                                       value={formData.firstName}
                                       onChange={handleInputChange}
                                       required
                                       className={`mt-1 block w-full border-b-[3px] bg-transparent focus:bg-transparent text-lg text-black  ${errors.firstName ? '' : 'border-gray-500'} focus:border-blue-800 outline-none py-1 autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_transparent]`}
                                       style={{borderBottomColor: errors.firstName ? 'oklch(63.7% 0.237 25.331)' : undefined}}
                                />
                                <div className="h-5 mt-1">
                                    {errors.firstName && <p className="text-xs" style={{color: 'oklch(63.7% 0.237 25.331)'}}>{errors.firstName}</p>}
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-gray-900 mb-3">Last Name <span className='text-red'>*</span></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className={`mt-1 block w-full border-b-[3px] bg-transparent focus:bg-transparent text-lg text-black  ${errors.lastName ? '' : 'border-gray-500'} focus:border-blue-800 outline-none py-1 autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_transparent]`}
                                    style={{borderBottomColor: errors.lastName ? 'oklch(63.7% 0.237 25.331)' : undefined}}
                                />
                                <div className="h-5 mt-1">
                                    {errors.lastName && <p className="text-xs" style={{color: 'oklch(63.7% 0.237 25.331)'}}>{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div className='mt-4'>
                                <label className="block text-gray-900 mb-3">Email <span className='text-red'>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`mt-1 block w-full border-b-[3px] bg-transparent focus:bg-transparent text-lg text-black  ${errors.email ? '' : 'border-gray-500'} focus:border-blue-800 outline-none py-1 autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_transparent]`}
                                    style={{borderBottomColor: errors.email ? 'oklch(63.7% 0.237 25.331)' : undefined}}
                                />
                                <div className="h-5 mt-1">
                                    {errors.email && <p className="text-xs" style={{color: 'oklch(63.7% 0.237 25.331)'}}>{errors.email}</p>}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='mt-4'>
                                <label className="block text-gray-900 mb-3">Phone <span className='text-red'>*</span></label>
                                <input type="tel"
                                       name="phone"
                                       value={formData.phone}
                                       onChange={handleInputChange}
                                       required
                                       className={`mt-1 block w-full border-b-[3px] bg-transparent focus:bg-transparent text-lg text-black  ${errors.phone ? '' : 'border-gray-500'} focus:border-blue-800 outline-none py-1 autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_transparent]`}
                                       style={{borderBottomColor: errors.phone ? 'oklch(63.7% 0.237 25.331)' : undefined}}
                                />
                                <div className="h-5 mt-1">
                                    {errors.phone && <p className="text-xs" style={{color: 'oklch(63.7% 0.237 25.331)'}}>{errors.phone}</p>}
                                </div>
                            </div>

                            {/* Service Selection */}
                            <div className="md:col-span-2 mt-6">
                                <label className="block text-base text-gray-900 mb-3">Select service (Optional)</label>
                                <div className="grid grid-cols-2 gap-4 md:flex md:space-x-6">
                                    {["Door Installation", "Door Repair", "Commercial", "Other"].map((option, index) => (
                                        <label key={index} className="inline-flex items-center cursor-pointer">
                                            <input type="radio"
                                                   name="service"
                                                   value={option}
                                                   checked={formData.service === option}
                                                   onChange={handleInputChange}
                                                   className="hidden peer"
                                            />
                                            {/* Outer Circle */}
                                            <div className="w-[25px] h-[25px] border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-primary transition-all">
                                                {/* Inner Circle (Only visible when checked) */}
                                                <div className={`w-[15px] h-[15px] bg-primary rounded-full transition-all ${formData.service === option ? 'scale-100' : 'scale-0'}`}></div>
                                            </div>
                                            <span className="ml-2 text-gray-900">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2 mt-8">
                                <label className="block text-gray-900 mb-3">Message <span className='text-red'>*</span></label>
                                <textarea
                                  className="block w-full rounded-lg border border-gray-300 focus:border-primary bg-white bg-opacity-80 dark:bg-gray-900 text-lg text-black  px-4 py-3 shadow-sm transition-colors duration-200 outline-none"
                                  placeholder="Write your message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  required
                                  rows={4}
                                />
                                <div className="h-5 mt-1">
                                    {errors.message && <p className="text-xs" style={{color: 'oklch(63.7% 0.237 25.331)'}}>{errors.message}</p>}
                                </div>
                            </div>

                            {/* Submit Button Container */}
                            <div className="md:col-span-2 mt-6">
                                <div className="flex justify-center">
                                    {/* Submit Button */}
                                    <div className="flex justify-center">
                                        <button type="submit"
                                                disabled={isSubmitting || !(
                                                    formData.firstName.trim() && 
                                                    formData.lastName.trim() && 
                                                    formData.email.trim() && 
                                                    formData.phone.trim() && 
                                                    formData.message.trim() && 
                                                    formData.firstName.trim().length >= 2 &&
                                                    formData.lastName.trim().length >= 2 &&
                                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                                                    /^\d{10}$/.test(formData.phone.replace(/\D/g, '')) &&
                                                    formData.message.trim().length >= 3
                                                )}
                                                className={`btn-primary ${
                                                    isSubmitting || !(
                                                        formData.firstName.trim() && 
                                                        formData.lastName.trim() && 
                                                        formData.email.trim() && 
                                                        formData.phone.trim() && 
                                                        formData.message.trim() && 
                                                        formData.firstName.trim().length >= 2 &&
                                                        formData.lastName.trim().length >= 2 &&
                                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                                                        /^\d{10}$/.test(formData.phone.replace(/\D/g, '')) &&
                                                        formData.message.trim().length >= 3
                                                    ) ? '!bg-gray-400 !hover:scale-100' : ''
                                                }`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'SUBMIT'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="md:col-span-2 flex items-center gap-3 text-green-800 text-sm border-2 border-green-200 rounded-lg bg-green-50 py-3 px-4 shadow-sm">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="md:col-span-2 flex items-center gap-3 text-rose-800 text-sm border-2 border-rose-200 rounded-lg bg-rose-50 py-3 px-4 shadow-sm">
                                    <svg className="w-5 h-5 text-rose-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="font-medium">Sorry, there was an error sending your message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
            </div>
        </section>
    )
}

export default Contact