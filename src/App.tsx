import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  useEffect(() => {
    document.title = 'Merin Johny — AI Engineer | ML & Deep Learning Specialist';
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <div className="noise-overlay" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
