import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Vienna, VA",
    description: "Garage door won't close in Vienna, VA? Common causes and fixes for doors and openers. Call Metro Garage Solutions at 240-688-8858 for a free estimate.",
    alternates: {
        canonical: '/garage-door-repair-vienna-va',
    },
    openGraph: {
        title: "Garage Door Repair in Vienna, VA | Metro Garage Solutions",
        description: "Garage door and opener repair for Vienna, VA homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-vienna-va',
    },
};

const wontClose = [
    ["Safety sensors are blocked or misaligned", "The two sensors near the floor must face each other with nothing in between. If one has been knocked out of line or its lens is dirty, the opener will stop and reverse."],
    ["Something is in the track", "Debris, a bent track section, or a damaged roller can stop the door partway down."],
    ["Opener travel limits are off", "If the opener's close limit is set wrong, the door may reverse when it touches the floor or stop short of it."],
    ["A spring or cable has failed", "The door may close too fast or not at all. Keep clear of it and call us."],
];

export default function ViennaRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Vienna, VA
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                In Vienna, Virginia and need your garage door fixed? Call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                to set up a free estimate.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="vienna-close">
                            <h2 id="vienna-close" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Why won&rsquo;t my garage door close?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                A door that opens but won&rsquo;t close, or that reverses on its way down, usually
                                has one of these causes:
                            </p>
                            <dl className="mt-6 space-y-5">
                                {wontClose.map(([cause, detail]) => (
                                    <div key={cause}>
                                        <dt className="text-base md:text-lg font-medium text-gray-900 dark:text-white">{cause}</dt>
                                        <dd className="mt-1 text-base md:text-lg font-light leading-relaxed">{detail}</dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-6 text-base md:text-lg font-light leading-relaxed">
                                Cleaning or realigning the sensors is safe to try yourself. Anything involving
                                springs or cables is not; see{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">what to do about a broken spring</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="vienna-services">
                            <h2 id="vienna-services" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What services do you offer in Vienna?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Repair of springs, cables, tracks, rollers, and panels; opener repair and
                                replacement; and routine maintenance for doors and openers. We work on
                                LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne Dalton, and most other
                                major brands.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="vienna-how">
                            <h2 id="vienna-how" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How does scheduling work?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We&rsquo;re a family-owned company based at 365 Congressional Ln in Rockville, MD.
                                The estimate is free and carries no obligation, the cost is agreed before work
                                starts, and parts and workmanship are under warranty. We aim to get to most
                                repair calls the same day or the next.
                            </p>
                            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-base md:text-lg font-light">
                                <dt>Sunday - Thursday</dt><dd>9:00 AM - 8:00 PM</dd>
                                <dt>Friday</dt><dd>8:00 AM - 2:00 PM</dd>
                                <dt>Saturday</dt><dd>Closed</dd>
                            </dl>
                        </section>

                        <p className="mt-12 text-base md:text-lg font-light">
                            Call{' '}
                            <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">message us</Link>.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
