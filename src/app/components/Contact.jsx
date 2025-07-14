"use client"; 

import React, { useState, useRef } from "react";
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";

import emailjs from '@emailjs/browser';
import Container from "./Container";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Other',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const recaptchaRef = useRef(null);

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
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }
        
        if (!recaptchaValue) {
            newErrors.recaptcha = 'Please verify that you are not a robot';
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
                service: 'Other',
                message: ''
            });
            setRecaptchaValue(null);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className='h-auto pb-20 pt-32 bg-gradient-to-b from-white to-primary'>
            <Container>
                <div className="block lg:grid lg:grid-cols-12 gap-28">
                    <div className="col-span-12 lg:col-span-4 bg-primary px-12 py-12 text-white rounded-tl-md rounded-tr-md rounded-br-md">
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

                    {/* Form */}
                    <div className="col-span-12 lg:col-span-8 p-4 text-gray-700 relative">  
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            {/* First Name */}
                            <div>
                                <label className="block text-base text-gray-900 dark:text-gray-100">First Name <span className='text-red'>*</span></label>
                                <input type="text"
                                       name="firstName"
                                       value={formData.firstName}
                                       onChange={handleInputChange}
                                       required
                                       className={`mt-1 block w-full border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-500'} focus:border-blue-800 outline-none py-1`}
                                />
                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-base text-gray-900 dark:text-gray-100">Last Name <span className='text-red'>*</span></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className={`mt-1 block w-full border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-500'} focus:border-blue-800 outline-none py-1`}
                                />
                                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                            </div>

                            {/* Email */}
                            <div className='mt-4'>
                                <label className="block text-base text-gray-900 dark:text-gray-100">Email <span className='text-red'>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`mt-1 block w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-500'} focus:border-blue-800 outline-none py-1`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div className='mt-4'>
                                <label className="block text-base text-gray-900 dark:text-gray-100">Phone <span className='text-red'>*</span></label>
                                <input type="tel"
                                       name="phone"
                                       value={formData.phone}
                                       onChange={handleInputChange}
                                       required
                                       className={`mt-1 block w-full border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-500'} focus:border-blue-800 outline-none py-1`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            {/* Service Selection */}
                            <div className="md:col-span-2 mt-6">
                                <label className="block text-sm text-gray-500 mb-3">Select service (Optional)</label>
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
                                            <div className="w-[25px] h-[25px] border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-blue-600 transition-all">
                                                {/* Inner Circle (Only visible when checked) */}
                                                <div className={`w-[15px] h-[15px] bg-blue-600 rounded-full transition-all ${formData.service === option ? 'scale-100' : 'scale-0'}`}></div>
                                            </div>
                                            <span className="ml-2 text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2 mt-8">
                                <label className="block text-base text-gray-900 dark:text-gray-200 mb-3">Message <span className='text-red'>*</span></label>
                                <textarea
                                  className="block w-full rounded-lg border border-gray-400 focus:border-primary bg-white dark:bg-gray-900 text-base px-4 py-3 shadow-sm transition-colors duration-200 outline-none"
                                  placeholder="Write your message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  rows={4}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            {/* reCAPTCHA */}
                            <div className="md:col-span-2 mt-6 flex justify-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Test key
                                    onChange={(value) => {
                                        setRecaptchaValue(value);
                                        if (errors.recaptcha) {
                                            setErrors(prev => ({
                                                ...prev,
                                                recaptcha: ''
                                            }));
                                        }
                                    }}
                                    onExpired={() => setRecaptchaValue(null)}
                                />
                                {errors.recaptcha && <p className="text-red-500 text-xs mt-2 text-center w-full">{errors.recaptcha}</p>}
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="md:col-span-2 text-green-600 text-sm">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="md:col-span-2 text-red-600 text-sm">
                                    Sorry, there was an error sending your message. Please try again.
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="md:col-span-2 flex justify-center mt-8">
                                <button type="submit"
                                        disabled={isSubmitting}
                                        className={`px-8 py-2 text-white bg-gradient-to-r from-start to-end rounded-md shadow hover:bg-blue-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact