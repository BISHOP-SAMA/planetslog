import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, X, ShieldCheck, Zap, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

function ComingSoonDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        className="relative w-full max-w-md rounded-[2.5rem] bg-stone-950 border border-stone-800 p-10 text-center overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-6xl mb-6">🌿</div>
        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">COMING SOON</h2>
        <p className="text-stone-400 font-medium leading-relaxed mb-8">
          The Spliff Social mainnet is being prepared. Connect your wallet to join the priority waitlist.
        </p>
        <Button 
          onClick={onClose}
          className="w-full py-6 rounded-2xl bg-green-500 hover:bg-green-600 text-stone-950 font-bold text-lg"
        >
          Got it
        </Button>
      </motion.div>
    </div>
  );
}

export default function SpliffSocial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-stone-950 text-white relative overflow-hidden">
      <Navbar />

      {/* 1. ANIMATED BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-green-900/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[150px]" 
        />
      </div>

      {/* 2. THE GLASS OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/[0.02] backdrop-blur-[10px]" />

      {/* 3. TOP NAVIGATION (Back Button Deleted) */}
      <header className="fixed top-0 left-0 right-0 z-30 p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar frame remains as seen in your screenshot */}
          <div className="w-14 h-14 rounded-full border-2 border-stone-800 bg-stone-900 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 overflow-hidden">
              <img src="/avatar_placeholder.png" alt="User" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
            <div className="px-5 py-2 bg-stone-900/50 backdrop-blur-md border border-stone-800 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-stone-300">The Oasis</span>
            </div>
        </div>
      </header>

      {/* 4. MAIN HERO SECTION */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex flex-col items-center text-center max-w-4xl"
      >
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <span className="text-8xl drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">🌿</span>
        </motion.div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-stone-500">
          Spliff Social
        </h1>
        
        <p className="text-lg md:text-xl font-bold text-stone-500 uppercase tracking-[0.4em] mb-16">
          On-Chain Sovereignty
        </p>

        {/* CONNECT WALLET BUTTON - CENTERED & VISIBLE */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
          <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <Button
            size="lg"
            className="relative px-16 py-10 text-2xl font-bold bg-black text-white rounded-full border-4 border-white/5 hover:border-green-500/30 shadow-2xl transition-all flex items-center gap-4"
            onClick={() => setDialogOpen(true)}
          >
            <Wallet className="h-8 w-8 text-green-400" />
            Connect Wallet
          </Button>
        </motion.div>

        {/* SUBTLE FEATURE FOOTER */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Encrypted Social</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-x border-white/10 px-8">
                <Zap className="h-6 w-6 text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Instant Settlement</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Bell className="h-6 w-6 text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Holder Alerts</span>
            </div>
        </div>
      </motion.main>

      <AnimatePresence>
        {dialogOpen && <ComingSoonDialog onClose={() => setDialogOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
