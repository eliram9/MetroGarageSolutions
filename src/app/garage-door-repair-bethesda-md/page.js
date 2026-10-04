import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Bethesda, MD",
    description: "Spring, cable, track, and opener repair for Bethesda, MD garage doors. Call Metro Garage Solutions at 240-688-8858 for a free, no-obligation estimate.",
    alternates: {
        canonical: '/garage-door-repair-bethesda-md',
    },
    openGraph: {
        title: "Garage Door Repair in Bethesda, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for Bethesda, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-bethesda-md',
    },
};

const signs = [
    "A loud bang from the garage, followed by a door that won't lift — usually a broken spring",
    "A cable hanging loose or unwound from its drum",
    "One side of the door rising faster than the other",
    "The opener motor running while the door stays put",
    "A door that reverses before it closes, or won't close at all",
    "Grinding, scraping, or popping as the door moves",
];

export default function BethesdaRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Bethesda, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Garage door stuck in Bethesda? Phone{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                and tell us what it&rsquo;s doing — we&rsquo;ll set up a time to come take a look.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="bethesda-signs">
                            <h2 id="bethesda-signs" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Signs it&rsquo;s time to call
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {signs.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-12" aria-labelledby="bethesda-safety">
                            <h2 id="bethesda-safety" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                While you wait
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                If a spring or cable has failed, leave the door where it is and keep cars,
                                kids, and pets out from under it. Springs and cables hold a lot of tension,
                                so please don&rsquo;t try to adjust or remove them yourself.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="bethesda-area">
                            <h2 id="bethesda-area" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Coming to you from Rockville
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Metro Garage Solutions works out of 365 Congressional Ln in Rockville, and
                                Rockville Pike takes us straight south into Bethesda. We service the
                                major door and opener brands, including LiftMaster, Chamberlain, Genie,
                                Clopay, Amarr, and Wayne Dalton.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="bethesda-estimate">
                            <h2 id="bethesda-estimate" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Estimates and scheduling
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                There&rsquo;s no charge for an estimate and no commitment to book. You&rsquo;ll know
                                the cost before we begin, and most repair calls get a visit the same day
                                or the next. We hold Maryland Home Improvement Commission license
                                #05-147422 and warranty our work and parts.
                            </p>
                            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-base md:text-lg font-light">
                                <dt>Sunday – Thursday</dt><dd>9:00 AM – 8:00 PM</dd>
                                <dt>Friday</dt><dd>8:00 AM – 2:00 PM</dd>
                                <dt>Saturday</dt><dd>Closed</dd>
                            </dl>
                        </section>

                        <p className="mt-12 text-base md:text-lg font-light">
                            Call{' '}
                            <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">use our contact form</Link>{' '}
                            to get on the schedule.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
