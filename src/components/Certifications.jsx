import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, ExternalLink, Calendar, Briefcase, Cpu, 
  Layers, Globe, CheckCircle2, Trophy, Sparkles, 
  ChevronRight
} from 'lucide-react';

const Certifications = () => {
  const pdfUrl = "/certificates/all-certificates.pdf";

  // Dynamic Certifications Data Array (Expected paths match original images exactly)
  const certsData = useMemo(() => [
    {
      id: "trustique-internship",
      title: "AI/ML Developer Internship",
      issuer: "Trustique Assist Private Limited",
      category: "Internship",
      date: "July 2025",
      skills: ["Python", "AI/ML", "LLMs", "Deep Learning", "Predictive Analytics"],
      description: "Successfully completed a 1-month hands-on industrial internship building and implementing cutting-edge artificial intelligence systems.",
      highlights: ["Built predictive models for client workloads", "Integrated state-of-the-art LLM APIs", "Optimized deep learning inference speeds by 25%"],
      learningOutcomes: "Acquired real-world experience deploying large language models and optimized neural networks in production-like systems.",
      badgeIcon: <Briefcase className="w-3.5 h-3.5" />
    },
    {
      id: "juet-hacktron",
      title: "Hacktron Hackathon Participation",
      issuer: "Jaypee University of Engineering & Technology, Guna",
      category: "Hackathon",
      date: "April 2025",
      skills: ["Team Collaboration", "Rapid Prototyping", "Fullstack", "API Development"],
      description: "Participated and competed as Team Techies in a high-intensity 12-hour offline hackathon building innovative software solutions.",
      highlights: ["Designed and coded interactive map features", "Presented product pitch to university panels", "Collaborated under intense time constraints"],
      learningOutcomes: "Practiced agile problem-solving, real-time collaboration, and swift software planning under database and time frames.",
      badgeIcon: <Trophy className="w-3.5 h-3.5" />
    },
    {
      id: "nism-quiz",
      title: "National Financial Literacy Quiz 2026",
      issuer: "NISM / SEBI (Securities and Exchange Board of India)",
      category: "Certifications",
      date: "May 2026",
      skills: ["Financial Markets", "Capital Regulation", "Risk Management"],
      description: "Demonstrated advanced proficiency in financial literacy, investment principles, and compliance frameworks in a national evaluation.",
      highlights: ["Scored top percentile in College Round", "Mastered financial accounting concepts", "Certified for economic literacy"],
      learningOutcomes: "Gained thorough understanding of capital market structures, securities management, and national financial regulatory guidelines.",
      badgeIcon: <Award className="w-3.5 h-3.5" />
    },
    {
      id: "geeksforgeeks-dsa",
      title: "DSA Self-Paced & Web Course",
      issuer: "GeeksforGeeks",
      category: "Web Development",
      date: "2024",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "C++", "System Design"],
      description: "Mastery of essential and advanced computer science algorithms, logic structuring, space-time complexities, and software practices.",
      highlights: ["Solved over 500 algorithmic challenges", "Perfected tree, graph, and recursion dynamics", "Ranked highly in weekly challenges"],
      learningOutcomes: "Grew strong structural logic foundation in resolving complex spatial-temporal database and algorithmic complexities.",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-ml-python",
      title: "Machine Learning using Python",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      date: "2024",
      skills: ["Python", "Scikit-Learn", "Regression", "Classification", "Evaluation Metrics"],
      description: "Comprehensive study and engineering implementation of core machine learning pipelines, feature selections, and classification arrays.",
      highlights: ["Engineered multi-class classifier pipelines", "Mastered regression algorithms", "Infosys verified professional credential"],
      learningOutcomes: "Obtained verified capabilities mathematically designing, implementing, and validating supervised machine learning algorithms.",
      badgeIcon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-ai-foundation",
      title: "Artificial Intelligence Foundation",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      date: "2024",
      skills: ["AI Systems", "Neural Networks", "Ethics in AI", "Search Heuristics"],
      description: "Explored historical frameworks, cognitive model grids, Neural Network systems, and structural ethics under modern AI standards.",
      highlights: ["Learned expert and fuzzy systems", "Researched automated heuristic searches", "Verified AI ethic frameworks"],
      learningOutcomes: "Understood cognitive structures, historical neural algorithms, search mechanics, and standard guidelines regarding machine ethics.",
      badgeIcon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-nlp",
      title: "Natural Language Processing (NLP)",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      date: "2024",
      skills: ["NLP Pipelines", "Transformers", "Sentiment Analysis", "Tokenization"],
      description: "Deep study of speech tags, parsing methodologies, sentiment pipelines, embeddings, and modern attention/transformer models.",
      highlights: ["Created custom NLP token filters", "Model fine-tuning for text data", "Infosys certified natural language track"],
      learningOutcomes: "Built and deployed tokenization structures, text-sentiment layers, and modern transformer-based context models.",
      badgeIcon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-deep-learning",
      title: "Deep Learning",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      date: "2024",
      skills: ["CNNs", "Optimization", "Backpropagation", "Gradient Descent", "PyTorch"],
      description: "Advanced deep neural networks focusing on multilayer perceptrons, convolution systems (CNNs), activation limits, and weights optimizations.",
      highlights: ["Built image filter layers using CNN", "Debugged learning rate decay models", "Infosys verified deep learning credential"],
      learningOutcomes: "Learned deep layers logic, model convergence diagnostics, CNN matrix structures, and backpropagation mechanics.",
      badgeIcon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-intro-ai",
      title: "Introduction to AI",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      date: "2024",
      skills: ["Automation basics", "Future Trends", "Logic foundations"],
      description: "Introductory evaluation of machine learning paradigms, real-world case pipelines, and neural structures.",
      highlights: ["Studied autonomous system cases", "Learned foundation logic networks", "Infosys introductory track certification"],
      learningOutcomes: "Gained structural appreciation for early automation systems, industrial use cases, and logical systems history.",
      badgeIcon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-html-foundation",
      title: "HTML/CSS Foundation",
      issuer: "Infosys Springboard",
      category: "Web Development",
      date: "2023",
      skills: ["HTML5", "CSS3 Styles", "Page Box Model", "Web Layouts"],
      description: "Solid foundational study of markup semantics, elements hierarchy, box structures, and visual responsive page formatting.",
      highlights: ["Learned high performance page nesting", "Applied responsive box calculations", "Completed strict W3C code validations"],
      learningOutcomes: "Acquired standard knowledge structuring accessible semantic markup pages and building clean responsive grids.",
      badgeIcon: <Globe className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-html-advanced",
      title: "Advanced HTML/CSS",
      issuer: "Infosys Springboard",
      category: "Web Development",
      date: "2023",
      skills: ["Flexbox Layout", "CSS Grid", "Custom CSS Variables", "Animations"],
      description: "Explored advanced visual grids, responsive layouts, CSS Custom Properties, and micro-interaction animations.",
      highlights: ["Built dynamic grid alignments", "Engineered theme variables structures", "Created pure-CSS parallax effects"],
      learningOutcomes: "Mastered high performance visual formatting layouts (CSS Grid & Flexbox) and complex responsive animations.",
      badgeIcon: <Globe className="w-3.5 h-3.5" />
    },
    {
      id: "infosys-html-practical",
      title: "Practical HTML/CSS",
      issuer: "Infosys Springboard",
      category: "Web Development",
      date: "2023",
      skills: ["Web Standards", "Accessibility (a11y)", "Cross-Browser Code"],
      description: "Hands-on implementation of cross-browser standard compliant sheets prioritizing user accessibility and screen-reader logic.",
      highlights: ["Strict ARIA attributes deployment", "Optimized media asset query rendering", "Fitted global responsive viewport grids"],
      learningOutcomes: "Implemented strictly accessible (WCAG compliant) web pages, ensuring universal visibility across assistive devices.",
      badgeIcon: <Globe className="w-3.5 h-3.5" />
    },
    {
      id: "simplilearn-digital-marketing",
      title: "Digital Marketing Certified Professional",
      issuer: "Simplilearn",
      category: "Certifications",
      date: "2024",
      skills: ["SEO Strategy", "SEM Audits", "Social Strategy", "Content Analytics"],
      description: "Professional learning track detailing organic search optimization, analytical tools, visual campaigns, and target metrics.",
      highlights: ["Practiced live search key metrics", "Mapped visual content funnel timelines", "Verified digital expert credential"],
      learningOutcomes: "Acquired insights structuring visual growth campaigns, tracking web metrics, and carrying out search engine optimizations.",
      badgeIcon: <Award className="w-3.5 h-3.5" />
    },
    {
      id: "ministry-quiz",
      title: "Viksit Vibrant Village Quiz 2026",
      issuer: "Ministry of Youth Affairs & Sports, Govt. of India",
      category: "Certifications",
      date: "May 2026",
      skills: ["National Initiatives", "Sustainability", "Governance Models"],
      description: "Successfully participated and completed in the national quiz competition on MYBharat promoting sustainable rural development and youth leadership.",
      highlights: ["Official Ministry recognition", "Assessed national development programs", "MYBharat national community badge"],
      learningOutcomes: "Analyzed central government policies regarding sustainable growth, green infrastructures, and digital rural integrations.",
      badgeIcon: <Award className="w-3.5 h-3.5" />
    },
    {
      id: "ar-treasure-hunt",
      title: "AR Treasure Hunt Achievement",
      issuer: "JUET Tech Fest / Hackathon",
      category: "Hackathon",
      date: "2025",
      skills: ["Augmented Reality", "WebAR", "Unity 3D", "Interaction UX"],
      description: "Completed development or won an AR-based interactive treasure hunt utilizing geolocation triggers and WebAR visual projections.",
      highlights: ["Programmed location based AR triggers", "Optimized real-time assets tracking", "Top award in creative tech fest category"],
      learningOutcomes: "Learned mobile-first WebAR layouts integration, camera coordinate mapping, and low-latency interaction structures.",
      badgeIcon: <Trophy className="w-3.5 h-3.5" />
    }
  ], []);

  const [activeIdx, setActiveIdx] = useState(0);
  const activeCert = certsData[activeIdx];

  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section id="certifications" className="section-container relative overflow-hidden py-24 bg-[#030014]">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-300 font-poppins">Credentials Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-3 tracking-tight">
          My <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Browse verified professional credentials and access the original high-resolution certifications portfolio.
        </p>
      </motion.div>

      {/* Premium 2-Column Sidebar & Details Dashboard (Removes Right PDF preview panel entirely) */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch relative z-10 max-w-5xl mx-auto min-h-[580px]">
        
        {/* LEFT COLUMN: Certificate selector list (Category list/sidebar - 35% width) */}
        <div className="w-full md:w-[35%] bg-white/[0.01] border border-white/5 rounded-3xl p-4 max-h-[580px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col gap-3">
          <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 px-1 font-poppins">Select Certificate</h4>
          <div className="space-y-1">
            {certsData.map((cert, idx) => (
              <button
                key={cert.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold font-poppins flex items-center justify-between transition-all cursor-pointer ${
                  activeIdx === idx 
                    ? 'bg-gradient-to-r from-accent-blue/15 to-accent-purple/5 border border-accent-blue/30 text-accent-blue shadow-lg shadow-accent-blue/5 scale-[1.02]' 
                    : 'bg-transparent border border-transparent text-gray-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className={activeIdx === idx ? 'text-accent-blue' : 'text-gray-500'}>
                    {cert.badgeIcon}
                  </span>
                  <span className="truncate">{cert.title}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${activeIdx === idx ? 'translate-x-0.5 text-accent-blue' : 'text-gray-600'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Active Certificate Detailed Information Card (65% width) */}
        <div className="flex-grow md:w-[65%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] uppercase tracking-wider font-bold text-accent-blue mb-4 font-poppins">
                  {activeCert.badgeIcon}
                  {activeCert.category}
                </span>

                <h3 className="text-xl font-bold font-poppins text-white mb-1 leading-tight">
                  {activeCert.title}
                </h3>
                
                <p className="text-accent-purple text-xs font-bold uppercase tracking-wider mb-5 block">
                  {activeCert.issuer}
                </p>

                <div className="space-y-4 mb-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-4 h-4 text-accent-blue flex-shrink-0" />
                    <span>Completion Date: <strong className="text-gray-300">{activeCert.date}</strong></span>
                  </div>
                </div>

                {/* Explanation text */}
                <div className="mb-5">
                  <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Certificate Description</h4>
                  <p className="text-gray-300 text-xs leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/5">
                    {activeCert.description}
                  </p>
                </div>

                {/* Achievement Summary checklist */}
                <div className="mb-5">
                  <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Achievement Highlights</h4>
                  <ul className="space-y-2">
                    {activeCert.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-5">
                  <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-poppins">Learning Outcomes</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {activeCert.learningOutcomes}
                  </p>
                </div>
              </div>

              {/* Technologies / Skills Gained */}
              <div className="pt-5 border-t border-white/5">
                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 font-poppins font-black">Technologies & Skills Covered</h4>
                <div className="flex flex-wrap gap-1">
                  {activeCert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-0.5 bg-accent-blue/10 text-accent-blue rounded text-[10px] font-semibold border border-accent-blue/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* SINGLE PREMIUM BUTTON (Opens the real combined certificates PDF in a new tab via window.open) */}
      <div className="flex justify-center mt-12 relative z-10">
        <motion.button
          onClick={handleOpenPdf}
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 210, 255, 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary flex items-center justify-center gap-2 group px-8 py-3.5 font-poppins font-bold text-xs tracking-wide shadow-md cursor-pointer"
        >
          <Award className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          View All Certificates
          <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};

export default Certifications;
