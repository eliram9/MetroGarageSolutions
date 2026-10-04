import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Broken Garage Door Spring Repair",
    description: "Heard a bang and now the garage door won't open? It's likely a broken spring. Learn the signs and call Metro Garage Solutions at 240-688-8858.",
    alternates: {
        canonical: '/broken-garage-door-spring',
    },
    openGraph: {
        title: "Broken Garage Door Spring Repair | Metro Garage Solutions",
        description: "Signs of a broken garage door spring and what to do next. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/broken-garage-door-spring',
    },
};

const symptoms = [
    "A sudden, loud bang from the garage — often when nobody is using the door",
    "A visible gap in the coiled spring on the bar above the door",
    "The opener strains, clicks, or runs, but the door lifts only a few inches or not at all",
    "The door feels extremely heavy when you try to lift it by hand",
    "The door comes down much faster than usual",
    "The door hangs crooked, or a cable has gone slack",
];

export default function BrokenSpring() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Broken Garage Door Spring
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                If your garage door won&rsquo;t open after a loud bang, a spring has most
                                likely snapped. Call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                and we&rsquo;ll replace it.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="spring-symptoms">
                            <h2 id="spring-symptoms" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How to tell a spring is broken
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {symptoms.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-12" aria-labelledby="spring-why">
                            <h2 id="spring-why" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Why the door stops working
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                The springs, not the opener, carry the weight of a garage door. Most doors
                                use torsion springs mounted on a shaft above the opening; some older or
                                lighter doors use extension springs that run along the horizontal tracks.
                                Either way, every spring is built for a limited number of open-and-close
                                cycles and eventually wears out. Once one breaks, the opener is left trying
                                to lift the full weight of the door on its own, which it isn&rsquo;t designed to do.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="spring-safety">
                            <h2 id="spring-safety" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What to do until we get there
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                <li>Stop pressing the opener button — repeated attempts can strain the motor and gears.</li>
                                <li>If the door is stuck open, don&rsquo;t pull the red emergency release cord. Without a working spring, the door can drop hard.</li>
                                <li>Keep people, pets, and cars out from under the door.</li>
                                <li>Don&rsquo;t try to unwind, adjust, or replace the spring yourself. Springs are under high tension and can cause serious injury.</li>
                            </ul>
                        </section>

                        <section className="mt-12" aria-labelledby="spring-service">
                            <h2 id="spring-service" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Spring replacement with Metro Garage Solutions
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We give free estimates with no obligation and go over the cost with you before
                                starting. We aim to reach most repair calls the same day or the next, and we
                                warranty our parts and workmanship. MHIC license #05-147422.
                            </p>
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
