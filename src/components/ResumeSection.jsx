import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

const ResumeSection = () => {
  const resumeUrl = "/Original_Resume.pdf";
  
  const actions = [
    { label: "Download PDF", icon: <Download size={18} />, href: resumeUrl, download: "Soniya_Gupta_Resume.pdf", primary: true },
    { label: "GitHub", icon: <Github size={18} />, href: "https://github.com/soniyagupta", target: "_blank" },
    { label: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/soniyagupta", target: "_blank" },
    { label: "Email Me", icon: <Mail size={18} />, href: "mailto:soniyagupta0228@gmail.com" },
    { label: "Call Me", icon: <Phone size={18} />, href: "tel:+919602885168" },
  ];

  return (
    <section id="resume" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Professional <span className="gradient-text">Resume</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A high-resolution view of my professional background and technical expertise.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {actions.map((action, i) => (
            <motion.a
              key={i}
              href={action.href}
              download={action.download}
              target={action.target}
              rel={action.target ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={action.primary ? "btn-primary" : "btn-secondary"}
            >
              {action.icon} {action.label}
            </motion.a>
          ))}
        </div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[1000px] mx-auto aspect-[1/1.4] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-dark text-white">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Download size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cannot display PDF directly</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Your browser doesn't support direct PDF embedding or has it disabled. 
                Please use the button below to view or download the full resume.
              </p>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={18} /> Open PDF in New Tab
              </a>
            </div>
          </object>
        </motion.div>

        {/* Mobile Hint */}
        <div className="md:hidden mt-8 text-center text-xs text-gray-500 italic">
          For the best experience on mobile, please use the "Download PDF" button.
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default ResumeSection;
