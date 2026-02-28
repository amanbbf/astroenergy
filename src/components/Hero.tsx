import { ArrowRight, Leaf, Sun, Wind, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#CCFF00] border-4 border-[#111] text-[#111] text-sm font-black uppercase tracking-widest mb-10 shadow-[6px_6px_0px_#111] rotate-1 hover:rotate-0 transition-transform"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white border-2 border-[#111]"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#111]"></span>
          </span>
          Live P2P Trading Network
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-[#111] mb-8"
        >
          Trade <span className="text-[#FF3366] inline-block -rotate-2 bg-white px-2 border-4 border-[#111] shadow-[8px_8px_0px_#111]">Green.</span><br />
          <span className="text-[#00E5FF] inline-block rotate-1 bg-white px-2 border-4 border-[#111] shadow-[8px_8px_0px_#111] mt-4">Power</span> Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-[#111] max-w-3xl mx-auto mb-12 font-bold leading-relaxed border-4 border-[#111] bg-white p-6 shadow-[8px_8px_0px_#111]"
        >
          Join the decentralized energy revolution. Buy directly from local solar, wind, and biogas producers. Zero middlemen. 100% Funky.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onExplore}
            className="group px-10 py-5 bg-[#B026FF] text-white font-black text-xl uppercase tracking-wider border-4 border-[#111] brutal-shadow w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-[#FF3366] transition-colors"
          >
            Start Trading <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="px-10 py-5 bg-white text-[#111] font-black text-xl uppercase tracking-wider border-4 border-[#111] brutal-shadow w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-[#CCFF00] transition-colors">
            <Activity className="w-6 h-6" /> View Stats
          </button>
        </motion.div>
      </div>

      {/* Funky Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[5%] md:left-[15%] w-24 h-24 bg-[#CCFF00] border-4 border-[#111] flex items-center justify-center shadow-[8px_8px_0px_#111]"
        >
          <Sun className="w-12 h-12 text-[#111]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[5%] md:right-[15%] w-32 h-32 rounded-full bg-[#00E5FF] border-4 border-[#111] flex items-center justify-center shadow-[8px_8px_0px_#111]"
        >
          <Wind className="w-16 h-16 text-[#111]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[10%] md:right-[25%] w-20 h-20 bg-[#FF3366] border-4 border-[#111] flex items-center justify-center shadow-[8px_8px_0px_#111] rotate-12"
        >
          <Leaf className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 w-full max-w-6xl mx-auto px-4 translate-y-1/2 z-20 hidden md:block"
      >
        <div className="bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] p-8 grid grid-cols-3 gap-8 divide-x-4 divide-[#111]">
          <div className="text-center group">
            <div className="text-5xl font-black text-[#111] mb-2 group-hover:scale-110 transition-transform">24.5 <span className="text-[#FF3366] text-2xl">MWh</span></div>
            <div className="text-sm text-[#111] uppercase tracking-widest font-bold bg-[#CCFF00] inline-block px-3 py-1 border-2 border-[#111]">Traded Today</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-[#111] mb-2 group-hover:scale-110 transition-transform">1,204</div>
            <div className="text-sm text-[#111] uppercase tracking-widest font-bold bg-[#00E5FF] inline-block px-3 py-1 border-2 border-[#111]">Active Producers</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-[#111] mb-2 group-hover:scale-110 transition-transform">12.8 <span className="text-[#B026FF] text-2xl">Tons</span></div>
            <div className="text-sm text-[#111] uppercase tracking-widest font-bold bg-[#FF3366] text-white inline-block px-3 py-1 border-2 border-[#111]">CO₂ Saved</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
