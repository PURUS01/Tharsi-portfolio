import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App min-h-screen bg-black text-white relative">
      <ScrollProgress />
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
