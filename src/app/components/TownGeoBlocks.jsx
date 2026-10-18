import { PHONE, PHONE_HREF, services } from "../../data/towns";

// Shared GEO content blocks for the town pages. Each takes the object
// returned by getTown() in src/data/towns.js. Visible content only — no
// FAQPage JSON-LD here (FAQ schema is homepage-only).

const h2 = "text-xl md:text-2xl font-medium text-gray-900 dark:text-white";
const body = "text-base md:text-lg font-light leading-relaxed";
const phoneLink = "font-semibold text-primary dark:text-white hover:underline";

export function TownServices({ town }) {
    const id = `${town.slug}-services`;
    return (
        <section className="mt-12" aria-labelledby={id}>
            <h2 id={id} className={h2}>
                Garage Door Services in {town.place}
            </h2>
            <p className={`mt-4 ${body}`}>
                Metro Garage Solutions provides these services to homeowners in {town.city}:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                {services.map((service) => (
                    <li key={service.name}>
                        <span className="font-medium text-gray-900 dark:text-white">{service.name}</span>
                        {": "}
                        {service.description}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function TownFAQ({ town }) {
    const id = `${town.slug}-faq`;
    return (
        <section className="mt-12" aria-labelledby={id}>
            <h2 id={id} className={h2}>
                Frequently asked questions
            </h2>
            <div className="mt-6 space-y-6">
                {town.faqs.map((faq) => (
                    <div key={faq.question}>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                        <p className={`mt-2 ${body}`}>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Hidden until real reviews are added to the town's `reviews` array.
export function TownReviews({ town }) {
    if (!town.reviews?.length) return null;

    const id = `${town.slug}-reviews`;
    return (
        <section className="mt-12" aria-labelledby={id}>
            <h2 id={id} className={h2}>
                What {town.city} customers say
            </h2>
            <div className="mt-6 space-y-6">
                {town.reviews.map((review) => (
                    <figure key={review.quote}>
                        <blockquote className={`${body} italic`}>&ldquo;{review.quote}&rdquo;</blockquote>
                        {review.author && (
                            <figcaption className="mt-2 text-base font-medium text-gray-900 dark:text-white">
                                {review.author}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>
        </section>
    );
}

export function TownHours({ town }) {
    return (
        <section className="mt-12" aria-label={`Business hours for ${town.place}`}>
            <p className={body}>
                <strong className="font-medium text-gray-900 dark:text-white">Business Hours</strong>
                {" — Sunday–Thursday: 9:00 AM–8:00 PM · Friday: 8:00 AM–2:00 PM · Saturday: Closed · Call "}
                <a href={PHONE_HREF} className={phoneLink}>{PHONE}</a>
            </p>
        </section>
    );
}
