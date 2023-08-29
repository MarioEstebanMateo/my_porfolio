import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Confetti from "./components/Confetti";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

import BackToUp from "@uiw/react-back-to-top";

function App() {
  return (
    <div className="app">
      <BackToUp className="backToTop">Top</BackToUp>
      <Navbar />
      <Hero />
      <Introduction />
      <Skills />
      <Certifications />
      <Projects />
      <Confetti />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
