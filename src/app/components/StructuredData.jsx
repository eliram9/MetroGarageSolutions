import Script from 'next/script';

const StructuredData = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://metrogaragesolutions.com/#business",
        "name": "Metro Garage Solutions",
        "alternateName": "Metro Garage Solutions LLC",
        "description": "Professional garage door installation, repair, and maintenance services in Rockville, MD and Washington DC metropolitan area. Family-owned business providing quality guaranteed services.",
        "url": "https://metrogaragesolutions.com",
        "telephone": "240-688-8858",
        "priceRange": "$$",
        "image": [
            "https://metrogaragesolutions.com/images/ofer-ai.png",
            "https://metrogaragesolutions.com/images/garage.png"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rockville",
            "addressLocality": "Rockville",
            "addressRegion": "MD",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.0840,
            "longitude": -77.1528
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Rockville",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Washington",
                "containedInPlace": {
                    "@type": "State",
                    "name": "District of Columbia"
                }
            },
            {
                "@type": "State",
                "name": "Maryland"
            },
            {
                "@type": "State",
                "name": "Virginia"
            }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "00:00",
                "closes": "00:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/metrogaragesolutions",
            "https://www.instagram.com/metrogaragesolutions"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://metrogaragesolutions.com/#services",
        "serviceType": "Garage Door Services",
        "provider": {
            "@id": "https://metrogaragesolutions.com/#business"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Rockville",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Washington",
                "containedInPlace": {
                    "@type": "State",
                    "name": "District of Columbia"
                }
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Garage Door Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Garage Door Installation",
                        "description": "Professional garage door installation services for residential and commercial properties"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Garage Door Repair",
                        "description": "Expert garage door repair services including springs, cables, and opener repairs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Garage Door Maintenance",
                        "description": "Regular maintenance services to keep your garage door operating smoothly"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Garage Door Opener Services",
                        "description": "Installation, repair, and maintenance of garage door openers"
                    }
                }
            ]
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://metrogaragesolutions.com/#organization",
        "name": "Metro Garage Solutions",
        "url": "https://metrogaragesolutions.com",
        "logo": "https://metrogaragesolutions.com/images/garage.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "240-688-8858",
            "contactType": "customer service",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.facebook.com/metrogaragesolutions",
            "https://www.instagram.com/metrogaragesolutions"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://metrogaragesolutions.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://metrogaragesolutions.com#about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://metrogaragesolutions.com#services"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://metrogaragesolutions.com#contact"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you provide free estimates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Metro Garage Solutions provides obligation-free estimates for all garage door services. Just call us at 240-688-8858 or contact us through our website."
                }
            },
            {
                "@type": "Question",
                "name": "What areas do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide garage door services throughout the Washington DC metropolitan area, with our base in Rockville, MD."
                }
            },
            {
                "@type": "Question",
                "name": "Do you guarantee your work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we guarantee the quality of our work and parts. Please ask your garage door consultant for more information about our workmanship and parts warranty."
                }
            },
            {
                "@type": "Question",
                "name": "What garage door brands do you work with?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work with major garage door brands including Chamberlain, LiftMaster, Clopay, Amarr, Genie, and Wayne Dalton."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
};

export default StructuredData;