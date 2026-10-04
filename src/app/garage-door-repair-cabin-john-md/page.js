import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

export const metadata = {
    title: "Garage Door Repair in Cabin John, MD",
    description: "Noisy, slow, or stuck garage door in Cabin John, MD? Metro Garage Solutions repairs doors and openers. Call 240-688-8858 for a free estimate.",
    alternates: {
        canonical: '/garage-door-repair-cabin-john-md',
    },
    openGraph: {
        title: "Garage Door Repair in Cabin John, MD | Metro Garage Solutions",
        description: "Garage door and opener repair for Cabin John, MD homes. Call 240-688-8858.",
        url: 'https://metrogaragesolutions.com/garage-door-repair-cabin-john-md',
    },
};

const noiseCauses = [
    ["Grinding or squealing", "Worn or dry rollers and hinges. Replacing steel rollers with nylon ones and lubricating the hardware usually quiets the door."],
    ["Rattling or banging", "Loose track bolts or hinge hardware. Tightening and realigning the hardware fixes most cases."],
    ["Loud, rough opener", "Chain-drive openers are naturally louder. A worn chain or gear can make it worse, and a belt-drive opener is a quieter replacement."],
    ["Popping or creaking from the springs", "Springs that need lubrication, or springs near the end of their life. Have them inspected before one breaks."],
];

export default function CabinJohnRepair() {
    return (
        <main>
            <Navbar />
            <article className="font-rubik bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 md:py-24 transition-colors">
                <Container>
                    <div className="max-w-3xl">
                        <header>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-[#002C8C] dark:text-white">
                                Garage Door Repair in Cabin John, MD
                            </h1>
                            <p className="mt-6 text-lg md:text-xl font-light">
                                Need a garage door repaired in Cabin John? Call{' '}
                                <a href="tel:+12406888858" className="font-semibold text-primary dark:text-white hover:underline">240-688-8858</a>{' '}
                                and we&rsquo;ll schedule a free estimate.
                            </p>
                        </header>

                        <section className="mt-12" aria-labelledby="cj-noise">
                            <h2 id="cj-noise" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Why is my garage door so loud?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                A door that has become noisy is usually telling you a part is wearing out. The
                                sound often points to the cause:
                            </p>
                            <dl className="mt-6 space-y-5">
                                {noiseCauses.map(([sound, cause]) => (
                                    <div key={sound}>
                                        <dt className="text-base md:text-lg font-medium text-gray-900 dark:text-white">{sound}</dt>
                                        <dd className="mt-1 text-base md:text-lg font-light leading-relaxed">{cause}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <section className="mt-12" aria-labelledby="cj-other">
                            <h2 id="cj-other" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                What else do you repair?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Broken springs and cables, doors that are off track or stuck, openers that won&rsquo;t
                                respond, remotes and keypads, safety sensors, and damaged panels. We work on
                                LiftMaster, Chamberlain, Genie, Clopay, Amarr, Wayne Dalton, and most other major
                                brands. For a snapped spring,{' '}
                                <Link href="/broken-garage-door-spring" className="font-semibold text-primary dark:text-white hover:underline">here&rsquo;s what to do first</Link>.
                            </p>
                        </section>

                        <section className="mt-12" aria-labelledby="cj-about">
                            <h2 id="cj-about" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                                Who will come out?
                            </h2>
                            <p className="mt-4 text-base md:text-lg font-light leading-relaxed">
                                Metro Garage Solutions is a family-owned company based at 365 Congressional Ln in
                                Rockville, MD, licensed under MHIC #05-147422. Estimates are free with no
                                obligation, you approve the price before we begin, and we warranty our parts and
                                workmanship. We aim to reach most repair calls the same day or the next.
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
