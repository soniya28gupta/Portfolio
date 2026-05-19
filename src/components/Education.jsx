import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationCard = ({ year, degree, institution, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-24 mb-16"
  >
    {/* Timeline Center Element */}
    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex flex-col items-center z-10 h-full">
      <div className="w-12 h-12 rounded-full bg-deep-navy border-2 border-accent-blue flex items-center justify-center text-accent-blue shadow-[0_0_20px_rgba(0,210,255,0.3)] shrink-0">
        <GraduationCap size={22} />
      </div>
      <div className="w-[2px] h-full bg-gradient-to-b from-accent-blue to-transparent opacity-30 mt-4" />
    </div>

    {/* Content Card */}
    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} group`}>
      <div className="glass-card p-10 hover:border-accent-blue/40 transition-all duration-500 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-blue/5 rounded-full blur-2xl group-hover:bg-accent-blue/10 transition-all" />
        
        <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
          <Calendar size={16} className="text-accent-blue" />
          <span className="text-sm font-extrabold text-accent-blue tracking-[0.2em]">{year}</span>
        </div>
        
        <h3 className="text-3xl font-bold font-poppins mb-3 text-white group-hover:text-accent-blue transition-colors">{degree}</h3>
        
        <div className={`flex items-center gap-2 mb-6 text-gray-400 font-medium ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
          <MapPin size={16} />
          <span className="text-base font-inter">{institution}</span>
        </div>
        
        <p className="text-gray-400 text-base leading-relaxed font-inter max-w-lg ml-auto mr-auto md:ml-0 md:mr-0">
          {desc}
        </p>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      year: "2023 – 2027",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Jaypee University of Engineering and Technology, Guna, Madhya Pradesh",
      desc: "Currently pursuing Computer Science Engineering with focus on Artificial Intelligence, Machine Learning, Algorithms, Data Structures, and Software Development. Actively building real-world projects and participating in hackathons."
    },
    {
      year: "2020 – 2022",
      degree: "Higher Secondary Education",
      institution: "Shiva Academy Senior Secondary School",
      desc: "Completed higher secondary education with strong foundation in Physics, Chemistry, and Mathematics. Developed analytical thinking and a passion for technology."
    }
  ];

  return (
    <section id="education" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h4 className="text-accent-purple font-bold tracking-[0.3em] uppercase mb-4 text-sm">Journey</h4>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">My <span className="gradient-text">Education</span></h2>
      </motion.div>

      <div className="relative">
        {/* Vertical Timeline Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-0 w-[1px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-20" />

        <div className="flex flex-col">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
