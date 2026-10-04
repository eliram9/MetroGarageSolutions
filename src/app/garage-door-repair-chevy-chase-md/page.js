import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Chevy Chase, MD",
    description: "Garage door and opener repair in Chevy Chase, MD, including older doors and openers. Call Metro Garage Solutions at 240-688-8858 for a free estimate.",
    alternates: {
        canonical: '/garage-door-repair-chevy-chase-md',
    },
    openGraph: {
        title: "Garage Door Repair in Chevy Chase, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for Chevy Chase, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-chevy-chase-md',
    },
};

const replaceSigns = [
    "The opener has no safety sensors near the floor",
    "Replacement parts for your opener model are no longer made",
    "Panels are cracked, rotted, or badly dented across several sections",
    "The same parts keep failing after repairs",
];

export default function ChevyChaseRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Chevy Chase, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Chevy Chase homeowners: call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                for garage door and opener repair. Estimates are free.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="cc-older">
                            <h2 id="cc-older" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Can you repair an older garage door or opener?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Usually, yes. Springs, cables, rollers, hinges, and tracks can be replaced on
                                most doors regardless of age, and many openers can be repaired as long as parts
                                are still available. We service LiftMaster, Chamberlain, Genie, Clopay, Amarr,
                                Wayne Dalton, and most other major brands.
                            </p>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                One thing to know about older openers: since 1993, federal safety rules
                                (16 CFR Part 1211) have required automatic garage door openers sold in the U.S.
                                to reverse when they meet an obstruction. If your opener predates those rules
                                and has no sensors near the floor, replacing it is the safer choice.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="cc-replace">
                            <h2 id="cc-replace" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                When does replacement make more sense than repair?
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {replaceSigns.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We install new doors and openers as well as repair them, so we can price both
                                options during the same free estimate.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="cc-visit">
                            <h2 id="cc-visit" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How quickly can you get to Chevy Chase?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We work out of 365 Congressional Ln in Rockville, MD, and aim to reach most
                                repair calls the same day or the next. You&rsquo;ll know the cost before any work
                                starts, and our parts and workmanship are warrantied. Licensed in Maryland under
                                MHIC #05-147422. If a spring has snapped,{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">see what to do while you wait</Link>.
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
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">send us a message</Link>.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
