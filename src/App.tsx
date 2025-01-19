import React from 'react';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import FreelanceJobs from './components/sections/FreelanceJobs';
import Certificates from './components/sections/Certificates';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FreelanceJobs />
        <Certificates />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

export default App; 