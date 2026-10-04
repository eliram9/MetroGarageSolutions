import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Oakton, VA",
    description: "Garage door off track or due for a tune-up in Oakton, VA? Metro Garage Solutions repairs and maintains doors and openers. Call 240-688-8858.",
    alternates: {
        canonical: '/garage-door-repair-oakton-va',
    },
    openGraph: {
        title: "Garage Door Repair in Oakton, VA | Metro Garage Solutions",
        description: "Garage door and opener repair for Oakton, VA homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-oakton-va',
    },
};

const tuneUp = [
    "Balance test, to confirm the springs are carrying the door's weight",
    "Spring, cable, and drum inspection",
    "Rollers, hinges, and tracks checked, tightened, and lubricated",
    "Safety sensor alignment and auto-reverse test",
    "Opener operation, remotes, and wall controls",
];

export default function OaktonRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Oakton, VA
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Oakton, Virginia residents can call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                for garage door repair and maintenance.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="oak-track">
                            <h2 id="oak-track" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What should I do if my garage door is off track?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Stop using the opener and leave the door where it is. A door that has slipped out
                                of its track can fall or bind further if you force it. Doors usually come off
                                track because a cable has broken, a roller has worn out, the track has been bent,
                                or something struck the door. We realign or replace the track and fix whatever
                                caused the problem so it doesn&rsquo;t happen again. If you also see a gap in a spring,{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">read our broken-spring guide</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="oak-tune">
                            <h2 id="oak-tune" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What does a garage door tune-up include?
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {tuneUp.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Regular maintenance catches worn parts before they fail and keeps the door
                                running quietly.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="oak-us">
                            <h2 id="oak-us" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                About Metro Garage Solutions
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We&rsquo;re a family-owned garage door company based at 365 Congressional Ln in
                                Rockville, MD. We service LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne
                                Dalton, and most other major brands. Estimates are free, the price is agreed
                                before work starts, parts and workmanship are warrantied, and we aim to reach
                                most repair calls the same day or the next.
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
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">contact us online</Link>.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
