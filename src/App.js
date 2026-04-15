import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Contributions from './components/Contributions';
import Resources from './components/Resources';
import Connect from './components/Connect';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contributions />
      <Resources />
      <Connect />
    </>
  );
}
