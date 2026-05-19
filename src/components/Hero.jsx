import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Download } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

const Hero = () => {
  const roles = ["Computer Science Student", "AI/ML Enthusiast", "Software Developer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[currentRole];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length === fullText.length) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          timer = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-deep-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold font-poppins mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <br />
            <span className="gradient-text">Soniya Gupta</span>
          </motion.h1>

          <motion.div 
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-[40px] font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {displayText}
            <span className="animate-pulse ml-1 text-accent-blue">|</span>
          </motion.div>

          <motion.p 
            className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate Computer Science student dedicated to building innovative software solutions and exploring the frontiers of AI/ML. Bridging the gap between complex algorithms and real-world impact.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: <Github size={22} />, href: "https://github.com" },
              { icon: <Linkedin size={22} />, href: "https://linkedin.com" },
              { icon: <Mail size={22} />, href: "mailto:soniyagupta0228@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-blue hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content: Profile Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Background Rings */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-accent-blue/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[550px] md:h-[550px] border border-accent-purple/10 rounded-full"
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Profile Card */}
          <div className="relative z-10 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-accent-blue to-accent-purple neon-glow">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-deep-navy">
              <img 
                src="/profile.jpg" 
                alt="Soniya Gupta" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Floaters */}
          <motion.div 
            className="absolute -top-4 -right-4 md:top-10 md:-right-10 glass-card px-4 py-3 flex items-center gap-3 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center text-accent-blue">
              🚀
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Focus</p>
              <p className="text-xs font-bold">AI Projects</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
