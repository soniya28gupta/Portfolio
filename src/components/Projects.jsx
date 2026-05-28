import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, ArrowUpRight, Brain, Heart, Cpu, 
  Layers, Database, Code, Terminal, Activity, TrendingUp 
} from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

const getTagIcon = (tag) => {
  const lower = tag.toLowerCase();
  if (lower.includes('ai') || lower.includes('ml')) return <Brain className="w-3.5 h-3.5" />;
  if (lower.includes('python')) return <Terminal className="w-3.5 h-3.5" />;
  if (lower.includes('healthcare') || lower.includes('health')) return <Heart className="w-3.5 h-3.5" />;
  if (lower.includes('deep learning') || lower.includes('cnn')) return <Layers className="w-3.5 h-3.5" />;
  if (lower.includes('disease') || lower.includes('prediction')) return <Activity className="w-3.5 h-3.5" />;
  if (lower.includes('react')) return <Code className="w-3.5 h-3.5" />;
  if (lower.includes('full stack') || lower.includes('healthcare management')) return <Database className="w-3.5 h-3.5" />;
  if (lower.includes('data science') || lower.includes('regression') || lower.includes('scikit-learn')) return <TrendingUp className="w-3.5 h-3.5" />;
  return null;
};

const ProjectCard = ({ title, desc, tags, image, github, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ 
      y: -8, 
      scale: 1.015,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 210, 255, 0.25)"
    }}
    className="group glass-card overflow-hidden h-full flex flex-col border border-white/10 hover:border-accent-blue/30 transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-80" />
      
      {/* Floating Action Buttons */}
      <div className="absolute top-6 right-6 flex gap-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <motion.a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-deep-navy transition-all border border-white/20 cursor-pointer"
          whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(0, 210, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-blue py-1.5 px-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center gap-1.5"
          >
            {getTagIcon(tag)}
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-3xl font-bold font-poppins mb-4 text-white group-hover:text-accent-blue transition-colors flex items-center justify-between">
        {title} 
        <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </h3>
      
      <p className="text-gray-400 text-base leading-relaxed mb-8 font-inter flex-grow">
        {desc}
      </p>
      
      <div className="flex items-center gap-8 pt-6 border-t border-white/5">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-sm font-bold text-gray-400 hover:text-accent-blue transition-colors duration-300 flex items-center gap-2.5 group/link py-2.5 px-5 rounded-xl border border-white/10 hover:border-accent-blue/30 bg-white/[0.02] hover:bg-accent-blue/5 cursor-pointer overflow-hidden"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)",
            color: "#00d2ff"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Source Code</span>
          <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Location Selector",
      desc: "Advanced AI/ML recommendation system designed to optimize residential property selection based on user preferences and regional data points.",
      tags: ["AI/ML", "Python", "Data Science"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soniya28gupta/Smart-Home-Location-Selector-"
    },
    {
      title: "Crop Disease Prediction",
      desc: "Deep Learning solution using Convolutional Neural Networks (CNN) to detect and classify crop diseases from leaf images with high accuracy.",
      tags: ["CNN", "Deep Learning", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soniya28gupta/SKY-Project"
    },
    {
      title: "AlgoWarriors",
      desc: "AI-powered multi-disease prediction system designed to detect and analyze diseases like Lung Cancer, Heart Disease, Diabetes, and other chronic health conditions using Machine Learning models. The platform provides intelligent health risk assessment, predictive analytics, and accurate disease classification to support early diagnosis and preventive healthcare.",
      tags: ["AI/ML", "Python", "Healthcare", "Deep Learning", "Disease Prediction"],
      image: "/healthcare_ai.png",
      github: "https://github.com/soniya28gupta/AlgoWarriors"
    },
    {
      title: "Sanjeevni Hospital System",
      desc: "Full-scale healthcare management platform built with React, focusing on patient data management, appointment scheduling, and intuitive UX.",
      tags: ["React", "Full Stack", "Healthcare"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soniya28gupta/Hacktron_Sanjeevni"
    }
  ];

  return (
    <section id="projects" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h4 className="text-accent-blue font-bold tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</h4>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
          Exploring the intersection of data science and web technologies through impactful builds.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
