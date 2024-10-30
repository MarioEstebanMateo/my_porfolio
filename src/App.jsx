import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { useInView } from "./hooks/useInView";
import { useEffect } from "react";

// AnimatedSection component to wrap each section
const AnimatedSection = ({ children, id }) => {
  const [ref, isVisible] = useInView();

  return (
    <section 
      id={id}
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } scroll-mt-20`}
    >
      {children}
    </section>
  );
};

function App() {
  useEffect(() => {
    const handleScrollClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleScrollClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleScrollClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <section id="main" className="scroll-mt-20">
          <Main />
        </section>
        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="certifications">
          <Certifications />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;