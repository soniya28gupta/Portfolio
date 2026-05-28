import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Terminal, Layers, Eye, TrendingUp, 
  Table, Binary, Code, Globe, Database, Atom, 
  Paintbrush, FileCode, Palette, Server, Laptop, 
  Smartphone, Flame, BookOpen, Heart, MessageSquare, Home, 
  Glasses, Activity, ShieldCheck, Sparkles, Award, Star
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

// 27 Skills Rich Detail Records
const skillDetails = {
  // AI/ML & Data Science
  "Machine Learning": {
    desc: "Engineered high-performance predictive systems, optimized regression and classification models, and structured comprehensive metrics validation.",
    level: "Advanced Professional",
    projects: ["Smart Home Location Selector", "AlgoWarriors"],
    connected: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
    status: "Mastered & Deployed",
    icon: <Brain className="w-8 h-8 text-accent-blue" />
  },
  "Deep Learning": {
    desc: "Designed multi-layered Artificial Neural Networks (ANN) and custom TensorFlow/PyTorch pipelines, focusing on convolutional layers and backpropagation physics.",
    level: "Advanced / Professional",
    projects: ["Crop Disease Prediction", "AlgoWarriors"],
    connected: ["TensorFlow", "PyTorch", "Python", "Computer Vision"],
    status: "Active Implementation",
    icon: <Layers className="w-8 h-8 text-accent-blue" />
  },
  "NLP": {
    desc: "Constructed text preprocessing token filters, worked with transformer architectures, fine-tuned attention weights, and designed sentiment parsing pipelines.",
    level: "Intermediate to Advanced",
    projects: ["AI Chatbot", "Sanjeevni Hospital System"],
    connected: ["Python", "Transformers", "Tokenization", "NLTK"],
    status: "Ongoing Specialization",
    icon: <Cpu className="w-8 h-8 text-accent-blue" />
  },
  "Computer Vision": {
    desc: "Engineered real-time image filters, spatial coordinate transformations, pixel matrix layers, and advanced convolutional feature mapping.",
    level: "Advanced (Hands-on)",
    projects: ["Crop Disease Prediction", "AR Treasure Hunt"],
    connected: ["OpenCV", "TensorFlow", "Deep Learning", "Python"],
    status: "Practicing & Deployed",
    icon: <Eye className="w-8 h-8 text-accent-blue" />
  },
  "TensorFlow": {
    desc: "Built, compiled, and trained robust deep learning layers, optimized network weights, and deployed serializable models for edge inference.",
    level: "Advanced / Proficient",
    projects: ["Crop Disease Prediction", "AlgoWarriors"],
    connected: ["Deep Learning", "Python", "Keras", "NumPy"],
    status: "Active Deployment",
    icon: <Cpu className="w-8 h-8 text-accent-blue" />
  },
  "Scikit-Learn": {
    desc: "Leveraged Scikit-Learn for preprocessing datasets, model selection, hyperparameter tuning (GridSearchCV), and evaluation matrix designs.",
    level: "Expert / Advanced",
    projects: ["Smart Home Location Selector", "AlgoWarriors"],
    connected: ["Python", "Pandas", "NumPy", "Machine Learning"],
    status: "Mastered",
    icon: <TrendingUp className="w-8 h-8 text-accent-blue" />
  },
  "Pandas": {
    desc: "Manipulated large datasets using Series and DataFrames, cleaned missing values, ran aggregates, and structured relational database structures.",
    level: "Expert",
    projects: ["Smart Home Location Selector", "House Price Analysis"],
    connected: ["Python", "NumPy", "Matplotlib", "Data Science"],
    status: "Mastered",
    icon: <Table className="w-8 h-8 text-accent-blue" />
  },
  "NumPy": {
    desc: "Optimized complex vector arithmetic operations, matrix dot products, array slicing, and high-performance numerical mathematics calculations.",
    level: "Expert",
    projects: ["Smart Home Location Selector", "Crop Disease Prediction"],
    connected: ["Python", "Pandas", "Data Science", "Linear Algebra"],
    status: "Mastered",
    icon: <Binary className="w-8 h-8 text-accent-blue" />
  },

  // Programming Languages
  "Python": {
    desc: "Primary language for AI, data science, and backend development. Built robust REST APIs, engineered neural networks, and automated pipeline scripts.",
    level: "Expert (Infosys Certified)",
    projects: ["Smart Home Selector", "Crop Disease Prediction", "AlgoWarriors"],
    connected: ["TensorFlow", "Scikit-Learn", "Pandas", "Jupyter"],
    status: "Mastered & Active",
    icon: <Terminal className="w-8 h-8 text-accent-blue" />
  },
  "C++": {
    desc: "Core language for algorithmic training and DSA optimization. Solved 500+ logic arrays focusing on spatial-temporal graph execution.",
    level: "Advanced / Expert",
    projects: ["AlgoWarriors Solver", "Hacktron competitive grids"],
    connected: ["Data Structures", "Algorithms", "System Coding"],
    status: "Mastered",
    icon: <Code className="w-8 h-8 text-accent-blue" />
  },
  "JavaScript": {
    desc: "Engineered responsive frontend layout flows, dynamic component structures, promise-based asynchronous event arrays, and React state loops.",
    level: "Advanced Professional",
    projects: ["Sanjeevni Hospital System", "Portfolio Website"],
    connected: ["React", "Node.js", "Tailwind CSS", "HTML5"],
    status: "Active Implementation",
    icon: <Globe className="w-8 h-8 text-accent-blue" />
  },
  "SQL": {
    desc: "Structured complex relational databases, optimized join scripts, created indexed tables, and maintained secure transaction logic.",
    level: "Advanced / Proficient",
    projects: ["Sanjeevni Hospital System", "Smart Home Location Selector"],
    connected: ["MySQL", "Database Management", "Firebase"],
    status: "Mastered",
    icon: <Database className="w-8 h-8 text-accent-blue" />
  },

  // Web Development
  "React": {
    desc: "Engineered high-performance visual states using hooks, custom routing layouts, component compositions, and Framer Motion animation triggers.",
    level: "Advanced / Expert",
    projects: ["Sanjeevni Hospital System", "Portfolio Dashboard"],
    connected: ["JavaScript", "Tailwind CSS", "Vite", "Node.js"],
    status: "Active Deployment",
    icon: <Atom className="w-8 h-8 text-accent-blue" />
  },
  "Tailwind CSS": {
    desc: "Designed premium utility grids, responsive flexboxes, modern dark-mode aesthetics, dynamic glassmorphic backgrounds, and hover glow styles.",
    level: "Expert",
    projects: ["Sanjeevni Hospital System", "My Portfolio"],
    connected: ["HTML5", "CSS3", "React", "Visual Design"],
    status: "Mastered",
    icon: <Paintbrush className="w-8 h-8 text-accent-blue" />
  },
  "HTML": {
    desc: "Crafted strictly accessible, semantic markup structures, prioritized WCAG and W3C standard compliance, and fitted HTML responsive frames.",
    level: "Expert (Verified)",
    projects: ["Portfolio Website", "Sanjeevni Hospital System"],
    connected: ["CSS3", "React", "SEO Standards", "A11y"],
    status: "Mastered",
    icon: <FileCode className="w-8 h-8 text-accent-blue" />
  },
  "CSS": {
    desc: "Mastered flex layouts, grid structures, complex visual animations (@keyframes), neon glows, backdrop filters, and responsive viewports.",
    level: "Expert (Verified)",
    projects: ["Portfolio Website", "Sanjeevni Hospital System"],
    connected: ["Tailwind CSS", "HTML5", "Framer Motion"],
    status: "Mastered",
    icon: <Palette className="w-8 h-8 text-accent-blue" />
  },
  "Node.js": {
    desc: "Engineered scalable backend service APIs, integrated lightweight HTTP request routes, managed npm dependencies, and handled server requests.",
    level: "Advanced / Intermediate",
    projects: ["Sanjeevni Hospital System", "AI Chatbot API"],
    connected: ["JavaScript", "Express", "SQL", "Firebase"],
    status: "Active Development",
    icon: <Server className="w-8 h-8 text-accent-blue" />
  },

  // Tools & Platforms
  "Git/GitHub": {
    desc: "Maintained branching strategies, committed version control trees, managed remote PR flows, resolved conflicts, and automated GitHub page deploys.",
    level: "Expert",
    projects: ["Smart Home Location Selector", "SKY-Project", "AlgoWarriors"],
    connected: ["VS Code", "Version Control", "Collaboration"],
    status: "Mastered & Daily Use",
    icon: <GithubIcon className="w-8 h-8 text-accent-blue" />
  },
  "VS Code": {
    desc: "Primary integrated development environment (IDE). Customized debug configurations, built tasks automation, and configured linters.",
    level: "Expert",
    projects: ["All Portfolio Projects"],
    connected: ["Git/GitHub", "Vite", "Android Studio"],
    status: "Mastered & Daily Use",
    icon: <Laptop className="w-8 h-8 text-accent-blue" />
  },
  "Android Studio": {
    desc: "Designed mobile native application layouts, managed gradle builds, implemented platform views, and configured testing device emulators.",
    level: "Intermediate",
    projects: ["Sanjeevni Mobile Concept", "AR Treasure Hunt Mobile"],
    connected: ["Java", "Firebase", "Mobile Development"],
    status: "Active Practice",
    icon: <Smartphone className="w-8 h-8 text-accent-blue" />
  },
  "Firebase": {
    desc: "Configured serverless cloud infrastructure, handled OAuth authentication gates, built Firestore databases, and deployed hosting assets.",
    level: "Advanced / Proficient",
    projects: ["Sanjeevni Hospital System", "AI Chatbot Backend"],
    connected: ["React", "JavaScript", "Database Management"],
    status: "Active Implementation",
    icon: <Flame className="w-8 h-8 text-accent-blue" />
  },
  "Jupyter Notebook": {
    desc: "Conducted data exploratory studies, model validation checks, mathematical equations plotting, and clean markdown documentation.",
    level: "Expert",
    projects: ["Smart Home Location Selector", "Crop Disease Prediction"],
    connected: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    status: "Mastered",
    icon: <BookOpen className="w-8 h-8 text-accent-blue" />
  },

  // Projects & Technologies
  "Disease Prediction System": {
    desc: "Developed a multi-disease prediction platform leveraging high-accuracy machine learning algorithms to diagnose critical illnesses early.",
    level: "Featured System Creator",
    projects: ["AlgoWarriors"],
    connected: ["AI/ML", "Python", "Deep Learning", "Disease Prediction"],
    status: "Fully Completed & Deployed",
    icon: <Heart className="w-8 h-8 text-accent-blue" />
  },
  "AI Chatbot": {
    desc: "Programmed a responsive conversational agent utilizing pre-trained NLP layers and token parsing models for natural language interaction.",
    level: "Interactive Tool Developer",
    projects: ["Hospital Virtual Assistant", "Customer Support Chatbot"],
    connected: ["NLP", "Node.js", "Python", "API Integration"],
    status: "Completed & Deployed",
    icon: <MessageSquare className="w-8 h-8 text-accent-blue" />
  },
  "Smart Home AI": {
    desc: "Created a predictive geographic selector system optimizing home purchase options based on historical regional parameters.",
    level: "Lead System Architect",
    projects: ["Smart Home Location Selector"],
    connected: ["AI/ML", "Python", "Data Science", "Scikit-Learn"],
    status: "Fully Deployed",
    icon: <Home className="w-8 h-8 text-accent-blue" />
  },
  "AR/VR Integration": {
    desc: "Implemented geolocation-triggered WebAR coordinates and interactive visual overlays for high-intensity competitive treasure hunt game.",
    level: "Creative Developer",
    projects: ["AR Treasure Hunt"],
    connected: ["Unity 3D", "WebAR", "Interaction UX"],
    status: "Completed & Tested",
    icon: <Glasses className="w-8 h-8 text-accent-blue" />
  },
  "IoT Systems": {
    desc: "Configured sensor coordinates mapping, coordinated node messaging sequences, and integrated lightweight communication controllers.",
    level: "Proficient",
    projects: ["Smart Home Location Selector integration"],
    connected: ["Arduino", "Python", "Hardware Logic"],
    status: "Practicing",
    icon: <Activity className="w-8 h-8 text-accent-blue" />
  },
  "Predictive Analytics": {
    desc: "Formulated robust feature scoring, analyzed statistical data points, and constructed predictive models for client workloads.",
    level: "Advanced Analyst",
    projects: ["Trustique AI/ML Internship", "House Price Prediction"],
    connected: ["Python", "Machine Learning", "Scikit-Learn"],
    status: "Industry Validated",
    icon: <TrendingUp className="w-8 h-8 text-accent-blue" />
  }
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("Machine Learning");
  const activeDetail = skillDetails[activeSkill] || skillDetails["Machine Learning"];

  const skillCategories = [
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-5 h-5 text-accent-blue" />,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-accent-blue" />,
      skills: ["Python", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-5 h-5 text-accent-blue" />,
      skills: ["React", "Tailwind CSS", "HTML", "CSS", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      icon: <Laptop className="w-5 h-5 text-accent-blue" />,
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Firebase", "Jupyter Notebook"]
    },
    {
      title: "Projects & Technologies",
      icon: <Award className="w-5 h-5 text-accent-blue" />,
      skills: ["Disease Prediction System", "AI Chatbot", "Smart Home AI", "AR/VR Integration", "IoT Systems", "Predictive Analytics"]
    }
  ];

  return (
    <section id="skills" className="section-container relative py-24 overflow-hidden bg-[#030014]">
      {/* Subtle particle background elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-300 font-poppins">Technical Profile</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">
          Technical & <span className="gradient-text">AI/ML Skills</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-inter">
          Hover or tap any skill tag below to inspect real-world project usage, mastery levels, and linked technologies.
        </p>
      </motion.div>

      {/* 2-Column Responsive Dashboard Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto relative z-10">
        
        {/* LEFT COLUMN: Skill Category Cards (60% width) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-accent-blue/20 transition-all duration-300 flex flex-col gap-5 border border-white/5 bg-white/[0.01]"
            >
              {/* Floating gradient shine background */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent-blue/5 rounded-full blur-2xl group-hover:bg-accent-blue/10 transition-all duration-500" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent-blue group-hover:scale-105 group-hover:border-accent-blue/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-poppins text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isActive = activeSkill === skill;
                  return (
                    <motion.button
                      key={skill}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onClick={() => setActiveSkill(skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold font-poppins transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/5 border border-accent-blue/40 text-accent-blue shadow-lg shadow-accent-blue/10' 
                          : 'bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05]'
                      }`}
                    >
                      {skill}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN: Sticky Dynamic Experience Panel (40% width) */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-28 self-start">
            <motion.div
              className="bg-[#0b0825]/50 border border-white/5 shadow-2xl rounded-3xl p-6 md:p-8 backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0, 210, 255, 0.1)"
              }}
            >
              {/* Ambient neon backdrop glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-accent-blue/10 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-accent-purple/10 rounded-full blur-[70px] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Header panel */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-poppins flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-accent-blue animate-spin-slow" />
                    Experience Details
                  </h4>
                  <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-accent-purple font-poppins">
                    <ShieldCheck className="w-3 h-3 text-accent-purple" />
                    Verified Expertise
                  </span>
                </div>

                {/* Animated content card details */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-5 flex-grow"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl flex items-center justify-center">
                        {activeDetail.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-poppins text-white leading-tight">
                          {activeSkill}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-full text-[10px] font-semibold font-poppins">
                          {activeDetail.level}
                        </span>
                      </div>
                    </div>

                    {/* Description block */}
                    <div className="bg-black/35 border border-white/5 rounded-2xl p-4 mt-2">
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-inter">
                        {activeDetail.desc}
                      </p>
                    </div>

                    {/* Project tags */}
                    <div>
                      <h5 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Featured In Projects:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDetail.projects.map((proj, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] text-gray-300 rounded font-semibold font-poppins"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Connected Technologies */}
                    <div>
                      <h5 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Connected Tech Stack:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDetail.connected.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-0.5 bg-accent-purple/10 border border-accent-purple/10 text-[10px] text-accent-purple rounded font-semibold font-poppins"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status check */}
                    <div className="flex items-center gap-2 pt-2 text-[10px] text-gray-400 border-t border-white/5 mt-auto">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Status: <strong className="text-emerald-400">{activeDetail.status}</strong></span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
