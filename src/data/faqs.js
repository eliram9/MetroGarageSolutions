// Single source of truth for FAQ content — rendered in FAQ.jsx and
// emitted as FAQPage JSON-LD in StructuredData.jsx so the schema can
// never drift from the visible answers.
const faqs = [
    {
        question: "Do you provide free estimates?",
        answer: "Yes, Metro Garage Solutions provides obligation-free estimates for all garage door services. Just call us at 240-688-8858 or contact us through our website. Our experienced technicians will assess your needs and provide a detailed estimate at no cost to you."
    },
    {
        question: "What areas do you serve?",
        answer: "Our main service areas are Rockville, Potomac, and Bethesda in Maryland, and Great Falls and McLean in Virginia. We are based at 365 Congressional Ln in Rockville, MD, and also serve customers elsewhere in the Washington DC metro area.",
        links: [
            { href: "/garage-door-repair-potomac-md", label: "Garage door repair in Potomac, MD" },
            { href: "/garage-door-repair-bethesda-md", label: "Garage door repair in Bethesda, MD" },
        ]
    },
    {
        question: "How do I know if my garage door spring is broken?",
        answer: "The most common sign is a loud bang from the garage, after which the door won't open or the opener lifts it only a few inches. You may also see a gap in the coiled spring above the door, or the door may feel very heavy or hang crooked. Springs are under high tension, so don't try to fix one yourself. Call us at 240-688-8858.",
        links: [
            { href: "/broken-garage-door-spring", label: "Broken garage door spring: signs and what to do" },
        ]
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
        answer: "We accept various payment methods including cash, checks, major credit cards, Zelle, and Venmo for your convenience. We believe in transparent pricing with no hidden fees, and all costs will be discussed upfront during your free estimate."
    }
];

export default faqs;
