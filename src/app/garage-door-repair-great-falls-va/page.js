import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Great Falls, VA",
    description: "Garage door and opener repair for Great Falls, VA homes. Springs, cables, tracks, and openers. Call Metro Garage Solutions at 240-688-8858 for a free estimate.",
    alternates: {
        canonical: '/garage-door-repair-great-falls-va',
    },
    openGraph: {
        title: "Garage Door Repair in Great Falls, VA | Metro Garage Solutions",
        description: "Garage door and opener repair for Great Falls, VA homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-great-falls-va',
    },
};

const checks = [
    "Replace the batteries in your remote or wall keypad.",
    "Make sure the opener is plugged in and its outlet has power.",
    "Look at the two safety sensors near the floor. If one is bumped out of line or dirty, the door will refuse to close.",
    "Check that the manual lock bar on the inside of the door isn't engaged.",
];

export default function GreatFallsRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Great Falls, VA
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                For garage door or opener repair in Great Falls, Virginia, call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>.
                                We&rsquo;ll talk through the problem and schedule a visit.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="gf-fixes">
                            <h2 id="gf-fixes" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What can we fix in Great Falls?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We repair the parts that most often stop a garage door: torsion and extension
                                springs, lift cables, rollers, hinges, and tracks. We also repair and replace
                                openers, remotes, keypads, and safety sensors, and we replace damaged panels.
                                Our technicians work on LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne
                                Dalton, and most other major brands.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="gf-checks">
                            <h2 id="gf-checks" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Quick checks before you call
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                If the door won&rsquo;t move at all or won&rsquo;t close, a few simple things are
                                worth checking first:
                            </p>
                            <ol className="mt-4 space-y-2 list-decimal pl-6 text-base md:text-lg font-light">
                                {checks.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                If you heard a loud bang, see a broken spring, or a cable has come loose, skip
                                these checks and{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">read what to do about a broken spring</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="gf-route">
                            <h2 id="gf-route" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Where do we come from?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Our shop is at 365 Congressional Ln in Rockville, MD. We cross the Potomac on the
                                American Legion Bridge and reach Great Falls by way of Georgetown Pike.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="gf-booking">
                            <h2 id="gf-booking" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How does booking work?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Estimates are free with no obligation, and we discuss the cost with you before
                                any work begins. We aim to get to most repair calls the same day or the next,
                                and our parts and workmanship are covered by warranty.
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
