import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Hackathons", value: "5+" },
    { label: "Technical Events", value: "12+" },
    { label: "Skills Mastered", value: "15+" }
  ];

  return (
    <section className="py-16 bg-white/2 border-y border-white/5 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-3 gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</h3>
            <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
