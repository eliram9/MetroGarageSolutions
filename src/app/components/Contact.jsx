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

    const isFormValid = () => {
        return (
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
        );
    };

    return (
        <section id="contact" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            {/* Contact Form Section */}
            <div className="bg-white dark:bg-gray-800 transition-colors">
                <Container>
                    <div className="py-16 lg:py-24">
                        {/* Section Header */}
                        <header className='left-0 relative text-center mb-12'>
                            <h1 className='text-7xl md:text-9xl font-extrabold text-blue-500 opacity-15' aria-hidden="true">CONTACT</h1>
                            <div className='text-primary'>
                                <h2 className='absolute font-medium -mt-9 md:-mt-12 text-[#002C8C] dark:text-white md:text-3xl text-2xl left-1/2 transform -translate-x-1/2'>GET YOUR FREE QUOTE TODAY</h2>
                            </div>
                        </header>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                            {/* Contact Form */}
                            <div className="order-2 lg:order-1 flex">
                                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 flex-1 transition-colors">
                                    <div className="mb-8">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-gray-900 dark:text-white mb-2 transition-colors">
                                            SEND US A MESSAGE
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 transition-colors">{`Fill out the form below and we'll get back to you within 24 hours.`}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Fields */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                                                    First Name <span className="text-red">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                                                        transition-all duration-200 focus:bg-white dark:focus:bg-gray-700 focus:outline-none
                                                        ${errors.firstName 
                                                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900' 
                                                            : 'border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900'
                                                        }`}
                                                    placeholder="Enter your first name"
                                                />
                                                {errors.firstName && (
                                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                                        </svg>
                                                        {errors.firstName}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                                                    Last Name <span className="text-red">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                                                        transition-all duration-200 focus:bg-white dark:focus:bg-gray-700 focus:outline-none
                                                        ${errors.lastName 
                                                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900' 
                                                            : 'border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900'
                                                        }`}
                                                    placeholder="Enter your last name"
                                                />
                                                {errors.lastName && (
                                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                                        </svg>
                                                        {errors.lastName}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Contact Fields */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                                                    Email Address <span className="text-red">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                                                        transition-all duration-200 focus:bg-white dark:focus:bg-gray-700 focus:outline-none
                                                        ${errors.email 
                                                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900' 
                                                            : 'border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900'
                                                        }`}
                                                    placeholder="your.email@example.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                                        </svg>
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                                                    Phone Number <span className="text-red">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                                                        transition-all duration-200 focus:bg-white dark:focus:bg-gray-700 focus:outline-none
                                                        ${errors.phone 
                                                            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900' 
                                                            : 'border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900'
                                                        }`}
                                                    placeholder="(555) 123-4567"
                                                />
                                                {errors.phone && (
                                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                                        </svg>
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Service Selection */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                                                Service Needed
                                            </label>
                                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                                {["Door Installation", "Door Repair", "Commercial", "Other"].map((option) => (
                                                    <label key={option} className="flex items-center p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer 
                                                        transition-all duration-200 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20
                                                        has-[:checked]:border-primary has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
                                                        <input
                                                            type="radio"
                                                            name="service"
                                                            value={option}
                                                            checked={formData.service === option}
                                                            onChange={handleInputChange}
                                                            className="sr-only"
                                                        />
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-all
                                                            ${formData.service === option 
                                                                ? 'border-primary bg-primary' 
                                                                : 'border-gray-300 dark:border-gray-500'
                                                            }`}>
                                                            {formData.service === option && (
                                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900 dark:text-white transition-colors">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                                                Message <span className="text-red">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={5}
                                                className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                                                    transition-all duration-200 focus:bg-white dark:focus:bg-gray-700 focus:outline-none resize-none
                                                    ${errors.message 
                                                        ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-900' 
                                                        : 'border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900'
                                                    }`}
                                                placeholder="Tell us about your project, any specific requirements, or questions you have..."
                                            ></textarea>
                                            {errors.message && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                                    </svg>
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !isFormValid()}
                                                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 
                                                    focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900
                                                    ${isSubmitting || !isFormValid()
                                                        ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                                                        : 'bg-gradient-to-r from-primary to-secondaryBlue text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center gap-3">
                                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending Message...
                                                    </span>
                                                ) : (
                                                    'Get Your Free Quote'
                                                )}
                                            </button>
                                        </div>

                                        {/* Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 transition-colors">Message Sent Successfully!</h4>
                                                        <p className="text-sm text-green-700 dark:text-green-400 mt-1 transition-colors">{`Thank you for contacting us. We'll get back to you soon.`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-red-800 dark:text-red-300 transition-colors">Message Failed to Send</h4>
                                                        <p className="text-sm text-red-700 dark:text-red-400 mt-1 transition-colors">Sorry, there was an error sending your message. Please try again or call us directly.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* Business Information & Contact Details */}
                            <div className="order-1 lg:order-2 flex">
                                <div className="space-y-8 flex-1">
                                    {/* Quick Contact */}
                                    <div className="bg-gradient-to-br from-primary to-secondaryBlue rounded-2xl p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide mb-2">
                                            NEED IMMEDIATE HELP?
                                        </h3>
                                        <p className="text-blue-100 mb-6 leading-relaxed">
                                            Our expert team is ready to assist you with any garage door emergency or question you may have.
                                        </p>
                                        
                                        <div className="space-y-4">
                                            <a href="tel:240.688.8858" 
                                               className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group">
                                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-lg">Call Now</p>
                                                    <p className="text-blue-100">(240) 688-8858</p>
                                                </div>
                                            </a>

                                            <a href="mailto:info@metrogaragesolutions.com" 
                                               className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group">
                                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-lg">Email Us</p>
                                                    <p className="text-blue-100 break-all">info@metrogaragesolutions.com</p>
                                                </div>
                                            </a>
                                        </div>

                                        {/* Business Hours */}
                                        <div className="mt-8 p-4 bg-white/10 rounded-lg">
                                            <h4 className="text-lg mb-3 flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                                </svg>
                                                Business Hours
                                            </h4>
                                            <div className="space-y-2 text-blue-100">
                                                <div className="flex justify-between">
                                                    <span>Sunday - Thursday:</span>
                                                    <span>9:00 AM - 8:00 PM</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Friday:</span>
                                                    <span>8:00 AM - 2:00 PM</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Saturday:</span>
                                                    <span>Closed</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Address */}
                                        <div className="mt-4 p-4 bg-white/10 rounded-lg">
                                            <h4 className="text-lg mb-3 flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                                </svg>
                                                Address
                                            </h4>
                                            <div className="text-blue-100">
                                                <p>Metro Garage Solutions</p>
                                                <p>365 Congressional Ln.</p>
                                                <p>Rockville, MD 20852</p>
                                            </div>
                                        </div>

                                        {/* Social Media */}
                                        <div className="mt-8 p-4 bg-white/10 rounded-lg">
                                            <div className="flex gap-3">
                                                <a href="https://www.facebook.com/metrogaragesolutions"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                                                   aria-label="Visit our Facebook page">
                                                    <Image 
                                                        src="/images/facebook.png" 
                                                        alt="Facebook icon" 
                                                        width={20} 
                                                        height={20} 
                                                        className="w-5 h-5"
                                                    />
                                                </a>
                                                <a href="https://www.angi.com/companylist/us/md/rockville/metro-garage-solutions-llc-reviews-8482812.htm"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                                                   aria-label="Visit our Angi page">
                                                    <Image 
                                                        src="/images/angi.png" 
                                                        alt="Angi icon" 
                                                        width={20} 
                                                        height={20} 
                                                        className="w-5 h-5"
                                                    />
                                                </a>
                                                <a href="https://www.google.com/maps/place/Metro+Garage+Solutions/@39.0604265,-77.1348078,2631m/data=!3m1!1e3!4m8!3m7!1s0x89b7cdb34bbab53d:0x3436c00af1080ecc!8m2!3d39.0604265!4d-77.1322329!9m1!1b1!16s%2Fg%2F11bc73bvcf?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                                                   aria-label="Visit our Google page">
                                                    <Image 
                                                        src="/images/google.png" 
                                                        alt="Google icon" 
                                                        width={20} 
                                                        height={20} 
                                                        className="w-5 h-5"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Contact;