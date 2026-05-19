import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const SERVICE_ID = "service_5wv681l"; 
  const TEMPLATE_ID = "template_ibagdip"; 
  const PUBLIC_KEY = "m4ve1X3xPVeaGjLd4"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const subject = formData.get('subject')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please fill out all required fields before sending.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );
      
      console.log('✅ Form submission successful:', result.text);
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      formRef.current.reset();
      
    } catch (error) {
      console.error("❌ Form submission failed. Details:", error);
      
      let errorMsg = error?.text || error?.message || 'An unknown error occurred.';
      
      // Explicitly mention Ad-blockers for EmailJS network failures
      if (errorMsg.toLowerCase().includes('failed to fetch') || errorMsg.includes('NetworkError')) {
        errorMsg = 'Connection blocked. Please disable any Ad-Blockers (like uBlock) or Brave Shields to use this form, or email me directly.';
      }

      setStatus({ type: 'error', message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: <Mail size={24} />, title: "Email", value: "soniyagupta0228@gmail.com", href: "mailto:soniyagupta0228@gmail.com" },
    { icon: <Phone size={24} />, title: "Phone", value: "+91 9602885168", href: "tel:+919602885168" },
    { icon: <MapPin size={24} />, title: "Location", value: "Madhya Pradesh, India", href: "https://www.google.com/maps/place/Guna,+Madhya+Pradesh" }
  ];

  return (
    <section id="contact" className="section-container relative bg-deep-navy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h4 className="text-pink-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contact</h4>
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">Get In <span className="gradient-text">Touch</span></h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-inter">
          Let's discuss your next project or potential opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {contactItems.map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              className="group flex gap-8 items-center p-8 glass-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:border-accent-blue/50 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">{item.title}</h4>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors font-poppins">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-10 flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Name</label>
                <input name="name" type="text" placeholder="Your Name" className="contact-input" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Email</label>
                <input name="email" type="email" placeholder="Your Email" className="contact-input" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Subject</label>
              <input name="subject" type="text" placeholder="Subject" className="contact-input" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Message</label>
              <textarea name="message" placeholder="Your Message" rows="5" className="contact-input resize-none" required></textarea>
            </div>
            
            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-5 rounded-xl flex items-center gap-3 text-sm font-medium ${
                    status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <p>{status.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              className="btn-primary w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50 group text-lg"
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 24px;
          border-radius: 20px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
        }
        .contact-input:focus {
          border-color: #00d2ff;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
