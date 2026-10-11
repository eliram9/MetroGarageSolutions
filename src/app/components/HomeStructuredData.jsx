import faqs from '../../data/faqs';

// Homepage-only schema: the all-areas Service, the section breadcrumb, and the
// FAQ. City pages carry their own Service via CityStructuredData.jsx.
const HomeStructuredData = () => {
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
                "name": "Potomac",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "North Potomac",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Darnestown",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Bethesda",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Chevy Chase",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Cabin John",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
                }
            },
            {
                "@type": "City",
                "name": "Great Falls",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                }
            },
            {
                "@type": "City",
                "name": "McLean",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                }
            },
            {
                "@type": "City",
                "name": "Vienna",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                }
            },
            {
                "@type": "City",
                "name": "Oakton",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
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

export default HomeStructuredData;
