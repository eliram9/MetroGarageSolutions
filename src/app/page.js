// import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Container from "./components/Container";
import FAQ from "./components/FAQ";
import HomeStructuredData from "./components/HomeStructuredData";


export default function Home() {
    return (
        <main>
            <HomeStructuredData />
            <Navbar />
            <Hero />
            <Container> 
                <About />
            </Container>     
            <Services />
            <Works />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
