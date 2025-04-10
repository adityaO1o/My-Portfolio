
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'expertise', 'work', 'experience'];
      
      // Check if scrolled past initial threshold
      setScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
        scrolled ? "bg-black backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-cyan-400"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          AS
        </a>
        
        <div className="hidden md:flex space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'expertise', label: 'My Expertise' },
            { id: 'work', label: 'My Work' },
            { id: 'experience', label: 'My Experience' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm font-medium relative py-2 transition-colors",
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-muted-foreground hover:text-cyan-400",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300",
                activeSection === item.id
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-500 focus:outline-none"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 right-0 bg-black shadow-md">
        <div className="px-4 py-2 space-y-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'expertise', label: 'My Expertise' },
            { id: 'work', label: 'My Work' },
            { id: 'experience', label: 'My Experience' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block px-3 py-2 text-base font-medium rounded-md",
                activeSection === item.id
                  ? "bg-secondary text-cyan-400"
                  : "text-muted-foreground hover:bg-secondary hover:text-cyan-400"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.add('hidden');
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
