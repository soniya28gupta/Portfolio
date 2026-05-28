import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Stats from './components/Stats';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import { ArrowUp } from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-deep-navy min-h-screen text-white relative font-inter overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Global Background Elements */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-accent-blue/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-accent-purple/5 rounded-full blur-[150px]" />
          </div>

          {/* Scroll Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500 origin-left z-[1001]" 
            style={{ scaleX }} 
          />

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Achievements />
            <Contact />
          </main>

          <footer className="py-24 border-t border-white/5 bg-deep-navy/80 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-3xl font-bold font-poppins gradient-text mb-4">Soniya Gupta</h3>
              <p className="text-gray-500 mb-12 font-inter max-w-md mx-auto leading-relaxed">Building the future with code, AI, and creative problem solving. Let's create something extraordinary together.</p>
              
              <div className="flex flex-wrap justify-center gap-10 mb-12">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-xs font-black text-gray-500 hover:text-accent-blue transition-all uppercase tracking-[0.3em]"
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="w-20 h-[1px] bg-white/10 mx-auto mb-12" />
              
              <p className="text-gray-600 text-[10px] font-black tracking-[0.5em] uppercase">
                © {new Date().getFullYear()} SONIYA GUPTA. ALL RIGHTS RESERVED.
              </p>
            </div>
          </footer>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 z-[100] w-14 h-14 bg-accent-blue/10 backdrop-blur-xl border border-accent-blue/30 rounded-full flex items-center justify-center text-accent-blue hover:bg-accent-blue/20 transition-all shadow-[0_0_20px_rgba(0,210,255,0.2)]"
              >
                <ArrowUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default App;
