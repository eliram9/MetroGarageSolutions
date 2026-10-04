import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Darnestown, MD",
    description: "Garage door opener repair and replacement in Darnestown, MD, plus door, spring, and cable repair. Call Metro Garage Solutions at 240-688-8858.",
    alternates: {
        canonical: '/garage-door-repair-darnestown-md',
    },
    openGraph: {
        title: "Garage Door Repair in Darnestown, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for Darnestown, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-darnestown-md',
    },
};

const openerTypes = [
    ["Chain drive", "Durable and common. Louder than the other types."],
    ["Belt drive", "Works like a chain drive but with a rubber belt, so it runs much more quietly."],
    ["Screw drive", "Uses a threaded rod. Fewer moving parts."],
    ["Wall-mount (jackshaft)", "Mounts on the wall beside the door instead of the ceiling, which frees up overhead space."],
];

export default function DarnestownRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Darnestown, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                For garage door and opener repair in Darnestown, phone{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>.
                                We come out from Rockville along Darnestown Road.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="dt-opener">
                            <h2 id="dt-opener" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Should I repair or replace my garage door opener?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Repair makes sense when the problem is a single part, such as a worn gear,
                                a bad logic board, a remote, or a misaligned sensor, and parts for your model
                                are still available. Replacement is worth considering when the opener is old
                                enough that parts are hard to find, when it keeps failing, or when you want a
                                quieter drive or newer features. We can quote both during the free estimate.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="dt-types">
                            <h2 id="dt-types" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What types of openers are there?
                            </h2>
                            <dl className="mt-6 space-y-5">
                                {openerTypes.map(([type, detail]) => (
                                    <div key={type}>
                                        <dt className="text-base md:text-lg font-medium text-gray-900 dark:text-white">{type}</dt>
                                        <dd className="mt-1 text-base md:text-lg font-light leading-relaxed">{detail}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <section className="mt-12" aria-labelledby="dt-door">
                            <h2 id="dt-door" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Door repairs too
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                If the opener runs but the door barely moves, the problem may be the door, not
                                the opener: often a broken spring or cable.{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">Learn the signs of a broken spring</Link>.
                                We repair springs, cables, rollers, tracks, and panels on LiftMaster, Chamberlain,
                                Genie, Clopay, Amarr, Wayne Dalton, and most other brands.
                            </p>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Metro Garage Solutions is family-owned and licensed under MHIC #05-147422.
                                Estimates are free with no obligation, and we warranty our parts and workmanship.
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
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">use our contact form</Link>.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
