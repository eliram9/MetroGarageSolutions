'use client';

import React, { useState, useEffect } from 'react';
import Container from "./Container";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [loadReviews, setLoadReviews] = useState(false);

    useEffect(() => {
        // Defer Elfsight loading until page is interactive
        const timer = setTimeout(() => {
            setLoadReviews(true);
        }, 2000); // Load after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    const faqs = [
        {
            question: "Do you provide free estimates?",
            answer: "Yes, Metro Garage Solutions provides obligation-free estimates for all garage door services. Just call us at 240-688-8858 or contact us through our website. Our experienced technicians will assess your needs and provide a detailed estimate at no cost to you."
        },
        {
            question: "What areas do you serve?",
            answer: "We provide garage door services throughout the Washington DC metropolitan area, with our base in Rockville, MD. We serve customers in Maryland, Virginia, and Washington DC, including surrounding areas within a reasonable distance from our Rockville location."
        },
        {
            question: "Do you guarantee your work?",
            answer: "Absolutely! We guarantee the quality of our work and parts. As a family-owned business, we take pride in our craftsmanship and stand behind every job we complete. Please ask your garage door consultant for detailed information about our comprehensive workmanship and parts warranty."
        },
        {
            question: "What garage door brands do you work with?",
            answer: "We work with all major garage door brands including Chamberlain, LiftMaster, Clopay, Amarr, Genie, and Wayne Dalton. Our technicians are trained and experienced with various manufacturers, ensuring we can service, repair, or install doors and openers from virtually any brand."
        },
        {
            question: "How quickly can you respond to service calls?",
            answer: "We understand that garage door issues can be urgent, especially when they affect your daily routine or home security. We strive to provide same-day or next-day service for most repair calls."
        },
        {
            question: "What payment methods do you accept?",
            answer:  "We accept various payment methods including cash, checks, major credit cards, Zelle, and Venmo for your convenience. We believe in transparent pricing with no hidden fees, and all costs will be discussed upfront during your free estimate."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 font-rubik" aria-labelledby="faq-heading">
            {/* Google Reviews Section */}
            <Container>
                <div className="py-12">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-wide text-gray-900 dark:text-white mb-4 transition-colors">WHAT OUR CUSTOMERS SAY</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
                            {`Don't just take our word for it - see what our satisfied customers have to say about our garage door services.`}
                        </p>
                    </div>
                    <div className="w-full max-w-full overflow-hidden">
                        <div className="max-w-6xl mx-auto">
                            {loadReviews ? (
                                <>
                                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                                    <div className="elfsight-app-faf1dc23-891b-4d19-a32d-e8a44462f0c6" data-elfsight-app-lazy></div>
                                </>
                            ) : (
                                <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
                                    <p className="text-gray-500 dark:text-gray-400">Loading reviews...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
            <div className="max-w-4xl mx-auto px-6">
                <header className="text-center mb-12">
                    <h2 id="faq-heading" className="font-md tracking-wide text-gray-900 dark:text-white mb-4">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-300">
                        Get answers to common questions about our garage door services
                    </p>
                </header>

                <div className="space-y-4" role="list">
                    {faqs.map((faq, index) => (
                        <article 
                            key={index} 
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
                            role="listitem"
                        >
                            <button
                                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg text-gray-900 dark:text-white pr-4">
                                        {faq.question}
                                    </h3>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                            openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            {openIndex === index && (
                                <div 
                                    id={`faq-answer-${index}`}
                                    className="px-6 pt-6 pb-4 bg-gray-100 dark:bg-gray-700"
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                >
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{`Still have questions? We're here to help!`}</p>
                    <a 
                        href="tel:240-688-8858" 
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        aria-label="Call Metro Garage Solutions at 240-688-8858"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call 240-688-8858
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;