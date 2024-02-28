// import { Carousel } from "flowbite";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Guide from "./components/Guide";
import History from "./components/History";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Carousel /> 
    <Guide />
    <History />
    <Footer />
    </>
  );
}
