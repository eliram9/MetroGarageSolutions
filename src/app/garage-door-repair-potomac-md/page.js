import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CityStructuredData from "../components/CityStructuredData";
import { TownServices, TownFAQ, TownReviews, TownHours } from "../components/TownGeoBlocks";
import { getTown } from "../../data/towns";

export const metadata = {
    title: "Garage Door Repair in Potomac, MD",
    description: "Garage door and opener repair for Potomac, MD homes near River Road and Falls Road. Call Metro Garage Solutions at 240-688-8858 for a free estimate.",
    alternates: {
        canonical: '/garage-door-repair-potomac-md',
    },
    openGraph: {
        title: "Garage Door Repair in Potomac, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for Potomac, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-potomac-md',
    },
};

const town = getTown("potomac-md");

const repairs = [
    "Broken torsion and extension springs",
    "Frayed or snapped lift cables",
    "Doors that sit crooked, slip off track, or stop partway",
    "Openers that hum without moving the door, reverse on their own, or ignore the remote",
    "Worn rollers, hinges, and other hardware that make the door loud or jerky",
    "Dented or damaged panels",
];

export default function PotomacRepair() {
    return (
        <main>
            <CityStructuredData city="Potomac" state="MD" path="/garage-door-repair-potomac-md" />
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Potomac, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                to schedule a garage door or opener repair at your Potomac home.
                            </p>
                        </header>

                        <TownServices town={town} />

                        <section className="mt-12" aria-labelledby="potomac-area">
                            <h2 id="potomac-area" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Serving Potomac from Rockville
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Our shop is at 365 Congressional Ln in Rockville. Falls Road runs from
                                Rockville down to Potomac Village, where it crosses River Road, so homes
                                along either road and in the neighborhoods between them are part of our
                                regular service area.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="potomac-repairs">
                            <h2 id="potomac-repairs" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Repairs we handle
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {repairs.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We work on doors and openers from Chamberlain, LiftMaster, Clopay, Amarr,
                                Genie, Wayne Dalton, and most other major brands.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="potomac-process">
                            <h2 id="potomac-process" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What to expect
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Estimates are free and come with no obligation. We go over the cost with you
                                before any work starts. Metro Garage Solutions is licensed under MHIC #05-147422.
                            </p>
                        </section>


                        <TownFAQ town={town} />
                        <TownReviews town={town} />
                        <TownHours town={town} />

                        <p className="mt-12 text-base md:text-lg font-light">
                            Ready to book? Call{' '}
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
