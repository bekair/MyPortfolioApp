import React from 'react';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import FreelanceJobs from '../components/sections/FreelanceJobs';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import type { NextPage } from 'next';
import Certificates from '@/components/sections/Certificates';

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FreelanceJobs />
      <Certificates />
      <Contact />
    </main>
  );
}

export default Home; 