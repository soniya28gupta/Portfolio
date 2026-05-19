import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy / Meta",
      date: "2023",
      link: "#"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2024",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="section-container relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h4 className="text-accent-purple font-bold tracking-[0.3em] uppercase mb-4 text-sm">Credentials</h4>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">My <span className="gradient-text">Certifications</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 group relative"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-purple/5 rounded-full blur-2xl group-hover:bg-accent-purple/10 transition-all" />
            
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-purple mb-8 group-hover:scale-110 group-hover:border-accent-purple/50 transition-all duration-300">
              <Award size={28} />
            </div>
            
            <h3 className="text-2xl font-bold font-poppins mb-2 text-white group-hover:text-accent-purple transition-colors">{cert.title}</h3>
            <p className="text-accent-purple text-sm font-black uppercase tracking-widest mb-6">{cert.issuer}</p>
            
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5">
              <span className="text-gray-500 text-xs font-bold tracking-widest">{cert.date}</span>
              <a href={cert.link} className="text-white hover:text-accent-blue transition-colors hover:scale-125 transform duration-300">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
