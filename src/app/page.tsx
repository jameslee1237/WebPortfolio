'use client';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { useState } from 'react';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  const [nav, setNav] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-zinc-950">
      <MobileNav nav={nav} closeNav={() => setNav(false)} />
      <Nav openNav={() => setNav(true)} />
      <section id="Herosection">
        <Hero />
      </section>
      <section id="Aboutsection">
        <About />
      </section>
      <section id="Projectsection">
        <Project />
      </section>
      <section id="Contactsection">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
