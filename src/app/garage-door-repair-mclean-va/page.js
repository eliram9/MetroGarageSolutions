import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in McLean, VA",
    description: "Garage door and opener repair in McLean, VA. Find out whether it's the door or the opener, then call Metro Garage Solutions at 240-688-8858.",
    alternates: {
        canonical: '/garage-door-repair-mclean-va',
    },
    openGraph: {
        title: "Garage Door Repair in McLean, VA | Metro Garage Solutions",
        description: "Garage door and opener repair for McLean, VA homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-mclean-va',
    },
};

const doorSigns = [
    "The door is crooked, sags, or rubs against the frame",
    "A spring has a visible gap or a cable is loose",
    "The door is very heavy when you lift it by hand with the opener disconnected",
];

const openerSigns = [
    "The motor hums or clicks but nothing moves",
    "The door works from the wall button but not the remote",
    "The door starts to close, then reverses",
];

const upkeep = [
    "Lubricate the rollers, hinges, and springs a couple of times a year with a garage door lubricant.",
    "Watch the door run. Jerky movement or new noises usually mean a part is wearing.",
    "Keep the floor sensors clean and the tracks clear of debris.",
];

export default function McLeanRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in McLean, VA
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                McLean homeowners can reach us at{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                for garage door and opener repair, replacement, and maintenance.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="mclean-which">
                            <h2 id="mclean-which" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Is it the door or the opener?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Knowing which part is failing helps us bring the right parts on the first visit.
                            </p>
                            <div className="mt-6 grid gap-8 sm:grid-cols-2">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Usually the door</h3>
                                    <ul className="mt-3 space-y-2 list-disc pl-6 text-base font-light">
                                        {doorSigns.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Usually the opener</h3>
                                    <ul className="mt-3 space-y-2 list-disc pl-6 text-base font-light">
                                        {openerSigns.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-base md:text-lg font-light leading-relaxed">
                                Not sure? Describe what you see and hear when you call, and we&rsquo;ll help
                                narrow it down. If a spring has snapped,{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">here&rsquo;s what to do until we arrive</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="mclean-upkeep">
                            <h2 id="mclean-upkeep" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                How can you prevent breakdowns?
                            </h2>
                            <ul className="mt-4 space-y-2 list-disc pl-6 text-base md:text-lg font-light">
                                {upkeep.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We also offer maintenance visits for doors and openers of all major brands,
                                including LiftMaster, Chamberlain, Genie, Clopay, Amarr, and Wayne Dalton.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="mclean-service">
                            <h2 id="mclean-service" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What to expect from Metro Garage Solutions
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                We&rsquo;re a family-owned company based at 365 Congressional Ln in Rockville, MD,
                                and we come to McLean via the American Legion Bridge. Every estimate is free and
                                comes with no obligation, you approve the cost before we start, and our
                                workmanship and parts are warrantied. Most repair calls are seen the same day
                                or the next.
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
                            or <Link href="/#contact" className="font-semibold text-primary dark:text-white hover:underline">reach us online</Link>.
                        </p>
                    </div>
                </Container>
            </article>
            <Footer />
        </main>
    );
}
