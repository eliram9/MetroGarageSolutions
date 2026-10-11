// Site-wide schema rendered from layout.js. Homepage-only schema
// (Service, BreadcrumbList, FAQPage) lives in HomeStructuredData.jsx.
const StructuredData = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://metrogaragesolutions.com/#business",
        "name": "Metro Garage Solutions",
        "alternateName": "Metro Garage Solutions LLC",
        "description": "Family-owned garage door installation, repair, and maintenance company based in Rockville, MD, serving Rockville, Potomac, North Potomac, Darnestown, Bethesda, Chevy Chase, and Cabin John, MD and Great Falls, McLean, Vienna, and Oakton, VA.",
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
            "streetAddress": "365 Congressional Ln",
            "addressLocality": "Rockville",
            "addressRegion": "MD",
            "postalCode": "20852",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.060426,
            "longitude": -77.132233
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
            }
        ],
        "sameAs": [
            "https://www.facebook.com/metrogaragesolutions",
            "https://www.instagram.com/metrogaragesolutions"
        ]
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
                    __html: JSON.stringify(organizationSchema),
                }}
            />
        </>
    );
};

export default StructuredData;