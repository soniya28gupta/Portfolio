import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-deep-navy/70 backdrop-blur-xl border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-poppins"
        >
          <span className="gradient-text">Portfolio.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 items-center list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 pl-8 border-l border-white/10">
            <a href="https://github.com/soniya28gupta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/soniya-gupta-952260296/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-navy/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-300 hover:text-accent-blue"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-6 border-t border-white/10">
                <a href="https://github.com/soniya28gupta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/soniya-gupta-952260296/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:soniyagupta0228@gmail.com" className="text-gray-400 hover:text-accent-blue transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
