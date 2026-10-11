const SITE_URL = 'https://metrogaragesolutions.com';

const STATE_NAMES = {
    MD: 'Maryland',
    VA: 'Virginia',
};

// Per-city Service + BreadcrumbList JSON-LD. The site-wide LocalBusiness
// schema lives in StructuredData.jsx and is referenced here by @id.
const CityStructuredData = ({ city, state, path }) => {
    const pageUrl = `${SITE_URL}${path}`;
    const pageName = `Garage Door Repair in ${city}, ${state}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": pageName,
        "serviceType": "Garage Door Repair",
        "url": pageUrl,
        "provider": {
            "@id": `${SITE_URL}/#business`
        },
        "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {
                "@type": "State",
                "name": STATE_NAMES[state]
            }
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
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": pageName,
                "item": pageUrl
            }
        ]
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
        </>
    );
};

export default CityStructuredData;
