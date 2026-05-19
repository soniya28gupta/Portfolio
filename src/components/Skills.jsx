import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, BrainCircuit, Database } from 'lucide-react';

const SkillCard = ({ title, skills, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-10 group relative overflow-hidden"
  >
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/10 transition-all duration-500" />
    
    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 group-hover:border-accent-blue/30 transition-all duration-300">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold font-poppins mb-6 text-white group-hover:text-accent-blue transition-colors">{title}</h3>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-white transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      icon: <Code2 size={32} />,
      skills: ["C", "C++", "Python", "Java", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={32} />,
      skills: ["HTML", "CSS", "React", "Tailwind", "Vite"]
    },
    {
      title: "AI / ML",
      icon: <BrainCircuit size={32} />,
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "OpenCV", "NLP"]
    },
    {
      title: "Tools & DB",
      icon: <Database size={32} />,
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h4 className="text-accent-purple font-bold tracking-[0.3em] uppercase mb-4 text-sm">Expertise</h4>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">My <span className="gradient-text">Skills</span></h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
          Continuously learning and exploring new technologies to build better solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <SkillCard
            key={index}
            title={group.title}
            skills={group.skills}
            icon={group.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
