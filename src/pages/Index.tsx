
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <PageTransition />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
