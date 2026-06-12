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
        answer: "We accept various payment methods including cash, checks, major credit cards, Zelle, and Venmo for your convenience. We believe in transparent pricing with no hidden fees, and all costs will be discussed upfront during your free estimate."
    }
];

export default faqs;
