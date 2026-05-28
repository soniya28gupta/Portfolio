import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, GitPullRequest, HelpCircle, GitBranch, 
  GitCommit, Calendar, Globe, Sparkles, ExternalLink 
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

const Achievements = () => {
  const stats = [
    { label: "Pull Requests", value: "15+", icon: <GitPullRequest className="w-5 h-5 text-accent-blue" /> },
    { label: "Issues Resolved", value: "8+", icon: <HelpCircle className="w-5 h-5 text-accent-purple" /> },
    { label: "Repositories Contributed", value: "5+", icon: <GitBranch className="w-5 h-5 text-pink-500" /> },
    { label: "Open Source Contributions", value: "100+", icon: <GitCommit className="w-5 h-5 text-emerald-500" /> }
  ];

  const tags = ["Open Source", "GitHub", "Collaboration", "React", "AI/ML", "Web Development"];

  const timelineSteps = [
    { phase: "Selection", detail: "Accepted as an official Open Source Contributor in GSSoC 2026", date: "May 2026" },
    { phase: "Collaboration", detail: "Engaged in GitHub discussions and coordinated with global maintainers", date: "June 2026" },
    { phase: "Development", detail: "Fixed bugs, solved code hurdles, and optimized critical files", date: "July 2026" },
    { phase: "PR Approvals", detail: "Merged 15+ pull requests across complex React and AI/ML codebases", date: "August 2026" }
  ];

  return (
    <section id="achievements" className="section-container relative py-24 bg-[#030014] overflow-hidden">
      {/* Floating particles/glowing dust overlay */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-300 font-poppins">Global Milestones</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-3 tracking-tight">
          Contributions & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Pioneering open-source contributions, collaborative solutions, and verified technical milestones in global ecosystems.
        </p>
      </motion.div>

      {/* Main Achievement Layout */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Glassmorphic GSSoC Contributor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ 
            y: -10,
            scale: 1.015,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 210, 255, 0.2)"
          }}
          className="group glass-card border border-white/5 hover:border-accent-blue/30 bg-[#0a0823]/40 backdrop-blur-2xl rounded-3xl p-6 md:p-10 relative overflow-hidden transition-all duration-500"
        >
          {/* Neon Glow Light Sweep Overlay */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Left Side: Badge & Descriptions */}
            <div className="flex-grow space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                {/* Achievement Badge */}
                <div className="w-16 h-16 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 border border-accent-blue/30 rounded-2xl flex items-center justify-center text-accent-blue shadow-[0_0_20px_rgba(0,210,255,0.2)] animate-pulse">
                  <Award size={32} />
                </div>
                
                <div>
                  <h3 className="text-xl md:text-3xl font-bold font-poppins text-white leading-tight flex items-center gap-2.5">
                    GSSoC Contributor 2026
                    <span className="px-2 py-0.5 text-[8px] bg-accent-blue/15 text-accent-blue border border-accent-blue/30 rounded-full font-bold uppercase tracking-wider animate-pulse">
                      Open Source
                    </span>
                  </h3>
                  <p className="text-accent-purple text-xs md:text-sm font-semibold uppercase tracking-wider mt-1">
                    GirlScript Summer of Code (Open Source Program)
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-3xl bg-black/20 p-5 rounded-2xl border border-white/5">
                “Selected as an Open Source Contributor in GirlScript Summer of Code 2026, contributing to real-world projects, collaborating with developers, improving codebases, fixing issues, and enhancing project functionality through GitHub-based development workflows.”
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-semibold font-poppins hover:border-accent-blue/40 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Links & Workable Controls */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 self-stretch lg:self-start lg:w-64 shrink-0 justify-center lg:justify-start pt-4 lg:pt-0">
              <motion.button
                onClick={() => window.open("https://github.com/soniya28gupta", "_blank")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 210, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full px-6 py-3.5 text-xs font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent-blue/5"
              >
                <Github size={16} />
                View GitHub Contributions
                <ExternalLink size={12} />
              </motion.button>

              <div className="flex items-center justify-center gap-3 w-full mt-2">
                <motion.a 
                  href="https://github.com/soniya28gupta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/soniya-gupta-952260296/recent-activity/all/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group/ln w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: -6,
                    boxShadow: "0 0 20px rgba(0, 119, 181, 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Shine sweep animation inside small icon button */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/ln:translate-x-full transition-transform duration-1000" />
                  
                  <Linkedin size={18} className="group-hover/ln:-translate-y-0.5 transition-transform duration-300" />
                </motion.a>
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent-blue transition-all cursor-default">
                  <Globe size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Open Source Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5 relative z-10">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-black/10 border border-white/5 rounded-2xl p-4 flex flex-col justify-between group/stat hover:border-accent-blue/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-poppins">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-transform group-hover/stat:scale-105 duration-300">
                    {stat.icon}
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-black font-poppins text-white leading-none">
                  {stat.value}
                </h4>
              </div>
            ))}
          </div>

          {/* Timeline Milestones Subgrid */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 font-poppins flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent-blue" />
              Contribution Timeline Milestones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-2 relative pl-5 md:pl-0">
                  {/* Left bullet marker for mobile / Top bullet for desktop */}
                  <div className="absolute left-0 top-1.5 md:relative md:top-0 w-2.5 h-2.5 bg-accent-blue rounded-full shadow-[0_0_10px_rgba(0,210,255,0.8)] z-10 mb-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-poppins">{step.phase}</span>
                    <span className="text-[9px] text-gray-500 font-poppins font-semibold">{step.date}</span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed font-inter">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
