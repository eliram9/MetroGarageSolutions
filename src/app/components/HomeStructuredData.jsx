import faqs from '../../data/faqs';

// Homepage-only schema: the section breadcrumb and the FAQ, which describe
// content that only exists on the homepage.
const HomeStructuredData = () => {
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
