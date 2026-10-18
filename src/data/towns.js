// Per-town content for the shared GEO blocks in TownGeoBlocks.jsx (services,
// FAQ, hours, review excerpts). Visible page content only — town FAQs are
// intentionally NOT emitted as FAQPage JSON-LD; FAQ schema is homepage-only.
//
// Only state facts from the approved list: family-owned, based in Rockville,
// 240-688-8858, the hours below, and the five services. No prices, ratings,
// warranties, response times, or 24/7 claims.

export const PHONE = "240-688-8858";
export const PHONE_HREF = "tel:+12406888858";

const COUNTIES = {
    MD: "Montgomery County, MD",
    VA: "Fairfax County, VA",
};

// `faq` picks which phrasing (0–2) each of the five FAQ answers uses, so the
// ten pages don't read identically. Keep every town's combination unique.
// `reviews` stays empty until real customer reviews are pasted in as
// { quote, author } objects. Never write placeholder or generated reviews.
const towns = {
    "potomac-md": { city: "Potomac", state: "MD", faq: [0, 1, 2, 0, 1], reviews: [] },
    "north-potomac-md": { city: "North Potomac", state: "MD", faq: [1, 2, 0, 1, 2], reviews: [] },
    "darnestown-md": { city: "Darnestown", state: "MD", faq: [2, 0, 1, 2, 0], reviews: [] },
    "bethesda-md": { city: "Bethesda", state: "MD", faq: [0, 2, 1, 0, 2], reviews: [] },
    "chevy-chase-md": { city: "Chevy Chase", state: "MD", faq: [1, 0, 2, 1, 0], reviews: [] },
    "cabin-john-md": { city: "Cabin John", state: "MD", faq: [2, 1, 0, 2, 1], reviews: [] },
    "great-falls-va": { city: "Great Falls", state: "VA", faq: [0, 0, 1, 1, 2], reviews: [] },
    "mclean-va": { city: "McLean", state: "VA", faq: [1, 1, 0, 2, 2], reviews: [] },
    "vienna-va": { city: "Vienna", state: "VA", faq: [2, 2, 2, 0, 1], reviews: [] },
    "oakton-va": { city: "Oakton", state: "VA", faq: [0, 1, 1, 2, 0], reviews: [] },
};

export const services = [
    {
        name: "Garage door repair",
        description: "Diagnosis and repair of residential garage doors that aren't working properly.",
    },
    {
        name: "Broken spring repair and replacement",
        description: "Repair and replacement of broken torsion and extension springs.",
    },
    {
        name: "Garage door opener repair and installation",
        description: "Repair of your existing opener, or installation of a new one.",
    },
    {
        name: "New garage door installation",
        description: "Installation of new residential garage doors.",
    },
    {
        name: "Maintenance and safety inspection",
        description: "Routine maintenance and a safety inspection of your garage door.",
    },
];

// Each question has three answer phrasings; a town's `faq` array picks one per
// question.
const faqTemplates = [
    {
        question: ({ place }) => `Do you provide garage door repair in ${place}?`,
        answers: [
            ({ city, county }) => `Yes. ${city} is part of our ${county} service area. Metro Garage Solutions is a family-owned company based in Rockville, MD. Call ${PHONE} during business hours to schedule.`,
            ({ city, county }) => `Yes, we serve ${city} as part of our ${county} service area. We're family-owned and based in Rockville, MD. Call ${PHONE} during business hours.`,
            ({ city, county }) => `We do. Metro Garage Solutions covers ${city} within our ${county} service area. We're a family-owned business based in Rockville, MD. Reach us at ${PHONE} during business hours.`,
        ],
    },
    {
        question: ({ place }) => `What should I do if my garage door spring breaks in ${place}?`,
        answers: [
            () => `Common signs of a broken spring are a loud bang from the garage, a door that won't open or opens only a few inches, a visible gap in the spring, or a door that feels very heavy. Springs are under high tension, so don't try to repair one yourself. We replace both torsion and extension springs. Call ${PHONE}.`,
            () => `Watch for a loud bang, a door that won't open or lifts only a few inches, a visible gap in the spring, or a door that suddenly feels very heavy. Because springs are under high tension, please don't attempt a DIY repair. Metro Garage Solutions replaces torsion and extension springs. Call ${PHONE}.`,
            () => `If you heard a loud bang, the door won't open or opens only a few inches, you can see a gap in the spring, or the door feels very heavy, a spring has likely broken. Springs are under high tension, so leave the repair to us rather than trying it yourself. We replace torsion and extension springs. Call ${PHONE}.`,
        ],
    },
    {
        question: ({ place }) => `Can you repair or replace my garage door opener in ${place}?`,
        answers: [
            () => `Yes. We repair garage door openers and install new ones. Call ${PHONE} to schedule.`,
            () => `Yes, we handle both opener repair and new opener installation. Call ${PHONE}.`,
            () => `We do. Whether your opener needs a repair or you want a new one installed, call ${PHONE}.`,
        ],
    },
    {
        question: ({ place }) => `Do you install new garage doors in ${place}?`,
        answers: [
            () => `Yes. We install new residential garage doors, and we also offer maintenance and safety inspections. Call ${PHONE} during business hours to get started.`,
            () => `Yes, we install new residential garage doors. We also provide maintenance and safety inspections. Give us a call at ${PHONE} during business hours.`,
            () => `We do: new residential door installation, plus maintenance and safety inspections for your existing door. Call ${PHONE} during business hours.`,
        ],
    },
    {
        question: ({ place }) => `What are your hours for service in ${place}?`,
        answers: [
            () => "We're open Sunday through Thursday, 9:00 AM to 8:00 PM, and Friday, 8:00 AM to 2:00 PM. We're closed on Saturday. We are not a 24-hour service.",
            () => "Sunday–Thursday, 9:00 AM–8:00 PM, and Friday, 8:00 AM–2:00 PM. We're closed Saturday. Please note that we are not a 24-hour service.",
            () => "Our hours are Sunday to Thursday from 9:00 AM to 8:00 PM and Friday from 8:00 AM to 2:00 PM. We're closed Saturdays and are not a 24-hour service.",
        ],
    },
];

export function getTown(slug) {
    const town = towns[slug];
    if (!town) throw new Error(`Unknown town slug: ${slug}`);

    const ctx = {
        city: town.city,
        place: `${town.city}, ${town.state}`,
        county: COUNTIES[town.state],
    };

    const faqs = faqTemplates.map((t, i) => ({
        question: t.question(ctx),
        answer: t.answers[town.faq[i]](ctx),
    }));

    return { ...town, ...ctx, slug, faqs };
}
