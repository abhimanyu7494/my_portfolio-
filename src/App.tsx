import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";

// 👇 WhatsApp Button import yaha karo
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* 👇 Ye button hamesha screen ke corner me visible rahega */}
      <WhatsAppButton />
    </>
  );
};

export default App;
