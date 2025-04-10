
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-6 text-center mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-gray-300">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col space-y-4 items-center justify-center">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-400" />
                <a href="mailto:aditya2562sharma@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                  aditya2562sharma@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-cyan-400" />
                <a href="tel:+919541457327" className="text-white hover:text-cyan-400 transition-colors">
                  +91 9541457327
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-cyan-400" />
                <span className="text-white">Delhi, India</span>
              </div>
            </div>
            
            <div className="flex space-x-6 pt-6 justify-center">
              <a href="https://github.com/adityaO1o" className="text-white hover:text-cyan-400 transition-colors" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/aditya-sharma-78268a219/" className="text-white hover:text-cyan-400 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
