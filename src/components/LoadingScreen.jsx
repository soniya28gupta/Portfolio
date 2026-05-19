import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HackerIntro = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [phase, setPhase] = useState('initializing'); // initializing, terminal, access_granted

  const statuses = [
    "INITIALIZING...",
    "CONNECTING...",
    "BYPASSING SECURITY...",
    "ACCESSING DATABASE...",
    "VERIFYING USER...",
    "ACCESS_GRANTED"
  ];

  useEffect(() => {
    // Progress bar and status text timer
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 500);

    // Phase transitions
    setTimeout(() => setPhase('terminal'), 800);
    setTimeout(() => setPhase('access_granted'), 3200);

    return () => {
      clearInterval(progressTimer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-rajdhani overflow-hidden scanlines"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "circIn" }}
    >
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* HUD Corner Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/50" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-cyan-500/50" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50" />

      <AnimatePresence mode="wait">
        {phase === 'initializing' && (
          <motion.div
            key="initializing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black font-orbitron italic text-yellow-500 glitch-text tracking-tighter">
              SYSTEM_BREACH
            </h1>
          </motion.div>
        )}

        {phase === 'terminal' && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md px-10"
          >
            <div className="font-mono text-cyan-400 text-sm md:text-base mb-4 space-y-1">
              <p className="flex items-center gap-2">
                <span className="text-yellow-500">➜</span> /usr/bin/loader
              </p>
              <p className="text-gray-500 italic">PID: 5245</p>
            </div>

            <div className="relative h-1 w-full bg-gray-900 rounded-full overflow-hidden mb-4 border border-cyan-500/20">
              <motion.div
                className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-cyan-500 font-bold tracking-widest text-xs">
                  {statuses[statusIndex]}
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-cyan-500/30"
                      animate={{ backgroundColor: i < (progress / 20) ? '#06b6d4' : 'rgba(6, 182, 212, 0.3)' }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-2xl font-orbitron font-bold text-cyan-500">{progress}%</p>
            </div>
          </motion.div>
        )}

        {phase === 'access_granted' && (
          <motion.div
            key="access_granted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black font-orbitron text-cyan-400 shadow-cyan-500/50"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ACCESS_GRANTED
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-gray-400 font-rajdhani text-xl tracking-[0.5em] uppercase">
                Soniya_Gupta_Identified
              </p>
              <motion.p
                className="text-yellow-500 font-orbitron text-2xl font-bold italic"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.2, repeat: 5 }}
              >
                WELCOME_BACK
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD Decorative Elements */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-gray-700 hidden md:block">
        <p>SECURE_LINE: ACTIVE</p>
        <p>ENCRYPTION: AES-256</p>
        <p>SIGNAL_STRENGTH: 98%</p>
      </div>

      <div className="absolute top-10 right-10 font-mono text-[10px] text-gray-700 hidden md:block text-right">
        <p>LATENCY: 12ms</p>
        <p>PACKET_LOSS: 0%</p>
        <p>UPLOADING_CREDENTIALS...</p>
      </div>
    </motion.div>
  );
};

export default HackerIntro;
