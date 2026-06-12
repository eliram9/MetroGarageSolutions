import faqs from '../../data/faqs';

const StructuredData = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://metrogaragesolutions.com/#business",
        "name": "Metro Garage Solutions",
        "alternateName": "Metro Garage Solutions LLC",
        "description": "Professional garage door installation, repair, and maintenance services in Rockville, MD and Washington DC metropolitan area. Family-owned business providing quality guaranteed services.",
        "url": "https://metrogaragesolutions.com",
        "telephone": "+1-240-688-8858",
        "email": "info@metrogaragesolutions.com",
        "priceRange": "$$",
        "image": [
            "https://metrogaragesolutions.com/images/ins1.jpg",
            "https://metrogaragesolutions.com/images/garage.png"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rockville",
            "addressRegion": "MD",
            "postalCode": "20852",
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
                    "Thursday"
                ],
                "opens": "09:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "08:00",
                "closes": "14:00"
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
            "telephone": "+1-240-688-8858",
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
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Plain <script> tags (not next/script) so the JSON-LD is present in the
    // initial server-rendered HTML — AI crawlers and social scrapers don't run JS.
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
};

export default StructuredData;