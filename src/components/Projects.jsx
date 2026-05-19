import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

const ProjectCard = ({ title, desc, tags, image, github, demo, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group glass-card overflow-hidden h-full flex flex-col"
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
        <a href={github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-deep-navy transition-all border border-white/20">
          <Github size={20} />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all border border-white/20">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-blue py-1.5 px-4 rounded-full bg-accent-blue/10 border border-accent-blue/20">
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
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-accent-blue transition-colors flex items-center gap-2 group/link">
          Live Demo <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-2 group/link">
          Source Code <Github size={16} />
        </a>
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
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Crop Disease Prediction",
      desc: "Deep Learning solution using Convolutional Neural Networks (CNN) to detect and classify crop diseases from leaf images with high accuracy.",
      tags: ["CNN", "Deep Learning", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "House Price Prediction",
      desc: "Regression-based machine learning model analyzing historical real estate data to predict future market prices with refined statistical modeling.",
      tags: ["Machine Learning", "Scikit-Learn", "Regression"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Sanjeevni Hospital System",
      desc: "Full-scale healthcare management platform built with React, focusing on patient data management, appointment scheduling, and intuitive UX.",
      tags: ["React", "Full Stack", "Healthcare"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
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

      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary px-10">
          Explore More on GitHub <Github size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
