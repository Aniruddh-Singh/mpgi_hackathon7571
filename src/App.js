import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Weather from "./components/Weather";
import Farming from "./components/Farming";
import Pesticide from "./components/Pesticide";
import Soil from "./components/Soil";

const App = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <Services />
            <Weather />
            <Pesticide />
            <Farming />
            <Soil />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
