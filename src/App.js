import React, { useCallback, useEffect, useState } from 'react';
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
import AllProjects from './pages/AllProjects';

function App() {
  const [isAllProjectsPage, setIsAllProjectsPage] = useState(
    () => window.location.pathname === '/projects'
  );

  useEffect(() => {
    const handlePopState = () => {
      setIsAllProjectsPage(window.location.pathname === '/projects');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToAllProjects = useCallback(() => {
    if (window.location.pathname !== '/projects') {
      window.history.pushState(null, '', '/projects');
    }
    setIsAllProjectsPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateHome = useCallback((hash) => {
    const targetHash = hash || '';
    const nextUrl = targetHash ? `/${targetHash}` : '/';

    if (window.location.pathname + window.location.hash !== nextUrl) {
      window.history.pushState(null, '', nextUrl);
    }

    setIsAllProjectsPage(false);

    if (targetHash) {
      // Wait for the main layout to render before scrolling.
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="App min-h-screen bg-black text-white relative">
      <ScrollProgress />
      <FloatingElements />
      <Navigation
        isAllProjectsPage={isAllProjectsPage}
        onNavigateHome={navigateHome}
      />
      <main>
        {isAllProjectsPage ? (
          <AllProjects onBack={() => navigateHome('#projects')} />
        ) : (
          <>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects onViewAll={navigateToAllProjects} />
            <SectionDivider />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
