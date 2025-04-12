
import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Aditya Sharma';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // milliseconds per character
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayText(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToExpertise = () => {
    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight blur-in">
              Hi, I'm <span className="text-cyan-400 inline-block min-w-[2ch]">
                {displayText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
              <br />
              <span className="fade-in-delay-1">Creative Developer</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg fade-in-delay-2">
              I’m a front-end developer skilled in HTML, CSS, JavaScript, React, and Node.js. I build responsive, user-focused interfaces that captivate users and boost business growth through smart, innovative web solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-3">
              <a 
                href="#work" 
                className="px-8 py-3 bg-black text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-colors text-center font-medium hover-glow"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors text-center hover-glow"
              >
                Let's Work Together
              </a>
            </div>
          </div>
          
          <div className="relative zoom-in">
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-gray-800 max-w-md mx-auto hover-scale">
              <img 
                src="/gallery/profile-image.jpg" 
                alt="Profile portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cyan-400 p-4 rounded-full shadow-lg text-white scale-in-bounce">
              <span className="block text-center font-bold">5+</span>
              <span className="text-sm"> Projects </span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center fade-in-delay-3">
          <button 
            onClick={scrollToExpertise}
            className="inline-flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to expertise section"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDownCircle size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
