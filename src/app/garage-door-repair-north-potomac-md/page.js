import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in North Potomac, MD",
    description: "Garage door spring and opener repair in North Potomac, MD. How long springs last and when to replace them. Call Metro Garage Solutions at 240-688-8858.",
    alternates: {
        canonical: '/garage-door-repair-north-potomac-md',
    },
    openGraph: {
        title: "Garage Door Repair in North Potomac, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for North Potomac, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-north-potomac-md',
    },
};

export default function NorthPotomacRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in North Potomac, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Garage door trouble in North Potomac? Call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>.
                                North Potomac sits just west of our Rockville shop.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="np-life">
                            <h2 id="np-life" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How long do garage door springs last?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Springs are rated in cycles, where one cycle is the door opening and closing once.
                                Standard torsion springs are commonly rated for about 10,000 cycles. How long that
                                lasts depends on how often your household uses the garage; a door that runs many
                                times a day wears its springs out much sooner than one used once or twice.
                                Higher-cycle springs are available for doors that get heavy use.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="np-both">
                            <h2 id="np-both" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                If one spring breaks, should both be replaced?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                On doors with two springs, replacing both at once is usually the better choice.
                                The two springs have done the same number of cycles, so when one fails the other
                                is often close behind, and a matched pair keeps the door balanced. We&rsquo;ll look at
                                your setup and explain the options during the free estimate. Until then,{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">here&rsquo;s how to stay safe with a broken spring</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="np-more">
                            <h2 id="np-more" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What else do we handle?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Cables, rollers, hinges, tracks, panels, openers, remotes, keypads, and safety
                                sensors, on LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne Dalton, and most
                                other major brands. We&rsquo;re family-owned, licensed under MHIC #05-147422, and
                                warranty our parts and workmanship. Most repair calls are seen the same day or
                                the next, and the cost is agreed before we start.
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
