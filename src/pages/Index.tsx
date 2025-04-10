
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

// Sections
import Hero from '@/components/sections/Hero';
import Expertise from '@/components/sections/Expertise';
import Work from '@/components/sections/Work';
import Experience from '@/components/sections/Experience';

const Index = () => {
  useEffect(() => {
    // Add animation effects to sections when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply different animations based on data attributes
          const element = entry.target;
          const animationType = element.getAttribute('data-animation') || 'fade-in';
          element.classList.add(animationType);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' // Trigger animation before element is fully in view
    });

    // Target all elements with data-animation attribute
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Target all sections as fallback
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (!section.hasAttribute('data-animation')) {
        observer.observe(section);
      }
    });

    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
      sections.forEach(section => {
        if (!section.hasAttribute('data-animation')) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <div data-animation="slide-in">
          <Expertise />
        </div>
        <div data-animation="blur-in">
          <Work />
        </div>
        <div data-animation="zoom-in">
          <Experience />
        </div>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
