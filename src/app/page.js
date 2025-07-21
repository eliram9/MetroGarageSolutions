// import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Container from "./components/Container";


export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Container> 
                <About />
            </Container>     
            <Services />
         
                <Works />
          

                
                <Contact />
            
            <Footer />
        </div>
    );
}
