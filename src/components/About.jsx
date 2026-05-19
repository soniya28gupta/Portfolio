import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Sparkles className="text-accent-blue" size={24} />,
      title: "Vision",
      desc: "To innovate and build intelligent systems that solve real-world problems and enhance human capabilities."
    },
    {
      icon: <Target className="text-accent-purple" size={24} />,
      title: "Focus",
      desc: "Deep diving into AI/ML, Data Science, and Full Stack development with a commitment to clean, scalable code."
    },
    {
      icon: <Zap className="text-pink-500" size={24} />,
      title: "Drive",
      desc: "Participating in hackathons and building practical solutions that bridge the gap between theory and impact."
    }
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-bold tracking-[0.3em] uppercase mb-4 text-sm"
          >
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-8 leading-tight">
            Crafting Digital <br />
            <span className="gradient-text">Experiences with AI</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 font-inter">
            I am currently pursuing a B.Tech in Computer Science Engineering with a strong interest in Artificial Intelligence, Machine Learning, and modern Software Development.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 font-inter">
            I enjoy building practical solutions, participating in hackathons, and exploring emerging technologies. My journey is driven by curiosity and a passion for creating impactful technology.
          </p>
          
          <div className="flex gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-1">20+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">GitHub Repos</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <h3 className="text-4xl font-bold text-white mb-1">05+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Major Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Icon Cards */}
        <div className="grid gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 flex gap-6 items-start group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-accent-blue/30">
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-poppins mb-2 text-white group-hover:text-accent-blue transition-colors">{card.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed font-inter">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
