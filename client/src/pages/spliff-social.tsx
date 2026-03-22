import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Wallet, ShieldCheck, Zap, TrendingUp, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

// Optimized ComingSoonDialog for the professional theme
function ComingSoonDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="relative w-full max-w-lg rounded-[2.5rem] bg-stone-950 border border-stone-800 p-12 text-center overflow-hidden"
      >
        {/* Decorative subtle gradient background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,theme(colors.green.900),transparent_40%)] opacity-30" />
        
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2.5 bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800 transition-all z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Professional Coming Soon Content */}
        <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0]}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut"}}
              className="w-16 h-16 rounded-3xl bg-green-950/50 border border-green-800 flex items-center justify-center mb-8 shadow-[0_0_30px_theme(colors.green.700)]"
            >
              <Zap className="h-8 w-8 text-green-400" />
            </motion.div>
            
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-stone-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400">
              Sovereign Access Initializing
            </h2>
            <p className="text-xl text-stone-400 font-medium max-w-md mx-auto leading-relaxed mb-10">
              Our on-chain infrastructure is being deployed. To request early priority access, please sign the waitlist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
               <input type="email" placeholder="enter your email..." className="flex-grow h-14 rounded-2xl bg-stone-900 border border-stone-800 px-6 text-stone-300 placeholder:text-stone-600 focus:border-green-700 focus:ring-1 focus:ring-green-700 transition" />
               <Button className="h-14 px-8 rounded-2xl bg-green-500 hover:bg-green-600 text-stone-950 font-bold text-lg">
                 Reserve My Spot
               </Button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

// Background Component with moving gradients
const FloatingGradients = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
            animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-green-600 opacity-20 blur-[150px]"
        />
        <motion.div 
            animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500 opacity-15 blur-[120px]"
        />
    </div>
);


export default function SpliffSocial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-stone-950 text-stone-100 relative font-sans">
      
      <Navbar />
      <FloatingGradients />

      {/* 1. PROFESSIONAL HEADER / NAVIGATION BLOCK */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between pointer-events-none">
          {/* Back Action - professional blur */}
          <Link href="/" className="pointer-events-auto inline-flex items-center justify-center p-3 bg-stone-900/50 backdrop-blur-md rounded-2xl border border-stone-800 text-stone-300 hover:bg-stone-800 hover:text-white transition-all">
            <ArrowLeft className="h-6 w-6" />
          </Link>

          {/* New Profile Action with notification badge */}
          <div className="pointer-events-auto flex items-center gap-4">
              <button className="relative p-3 bg-stone-900/50 backdrop-blur-md rounded-2xl border border-stone-800 text-stone-400 hover:text-green-400">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-green-500" />
              </button>
              <div className="w-12 h-12 rounded-2xl border border-stone-800 bg-stone-900 overflow-hidden">
                  <img src="/avatar_placeholder.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
          </div>
      </header>

      {/* 2. MAIN CENTERED CONTENT & KEYBOARD COMMAND INTERFACE */}
      <main className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center pt-32">
        
        {/* Dynamic Logo with 'Sovereign' badge */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="relative mb-8"
        >
          {/* Main Leaf icon - more stylized, professional vector */}
          <motion.img 
            src="/stylized_leaf.svg" 
            alt="Spliff Leaf" 
            className="w-32 h-32 opacity-90 filter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          />
          <span className="absolute -top-3 -right-6 px-3 py-1 bg-green-950/70 border border-green-800 rounded-full text-[11px] font-black text-green-400 uppercase tracking-widest">SOVEREIGN</span>
        </motion.div>

        {/* Professional, modern title */}
        <h1 className="font-display text-7xl sm:text-8xl font-black text-stone-100 tracking-tightest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-stone-100 via-stone-300 to-stone-500">
          Spliff Social
        </h1>

        <p className="text-xl font-semibold text-stone-500 uppercase tracking-[.3em] mb-16">
          On-Chain Sovereignty
        </p>


        {/* THE PRIMARY CONNECT INTERFACE */}
        <div className="relative group mb-24 flex items-center gap-8 bg-stone-900 border border-stone-800 rounded-[3rem] p-12 pr-10 shadow-2xl">
            
             {/* Left side: Context message */}
             <div className="flex-1 text-left max-w-xs">
                 <div className="flex items-center gap-2.5 text-green-400 mb-2">
                     <ShieldCheck className="w-5 h-5"/>
                     <span className="text-xs font-black uppercase tracking-widest">Decentralized Id</span>
                 </div>
                 <h4 className="text-xl font-bold text-stone-100 leading-snug">
                     Your wallet is your identity. Sign in securely.
                 </h4>
             </div>

             {/* Right side: The stylized Connect Button (from image) */}
             <div className="relative">
                 {/* The background glow */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                 
                 <Button
                   size="lg"
                   className="relative text-xl px-12 py-9 rounded-full bg-black text-white hover:bg-stone-950 border-4 border-black group-hover:border-green-700/50 transition-all font-semibold flex items-center gap-4"
                   onClick={() => setDialogOpen(true)}
                 >
                   <Wallet className="h-7 w-7 text-green-400" />
                   <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-stone-300">Connect Wallet</span>
                 </Button>
             </div>
        </div>

        {/* 3. NEW & EXPANDED COMPONENT GRIDS */}
        
        {/* Core Utility Grid - upgraded versions of image list */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Zap, label: "Community", desc: "Access to token-gated feeds." },
            { icon: ShieldCheck, label: "Encrypted", desc: "Fully sovereign on-chain social layer." },
            { icon: TrendingUp, label: "Rewards", desc: "Earn tokens for active participation." },
          ].map((item, idx) => (
            <div key={item.label} className="bg-stone-900 border border-stone-800 p-8 rounded-3xl flex items-start gap-6 hover:border-green-800 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-950/50 border border-green-800 flex items-center justify-center text-green-400">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                 <span className="text-[11px] font-black uppercase tracking-widest text-green-400">Layer {idx+1}</span>
                 <h4 className="text-2xl font-bold text-stone-100 mb-1">{item.label}</h4>
                 <p className="text-base text-stone-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NEW COMPONENT: 'Holdings Preview' Card */}
        <div className="w-full bg-stone-900 border border-stone-800 rounded-3xl p-10 flex items-center justify-between mb-24">
             <div className="flex flex-col gap-1.5">
                 <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Estimated Holding Value</p>
                 <p className="text-5xl font-black text-white tracking-tighter">
                   <span className="text-4xl text-stone-500 font-medium">Ξ </span> 1,245.89 <span className="text-green-400 text-base font-bold ml-1">(+12%)</span>
                 </p>
             </div>
             <div className="text-right">
                <span className="text-xs font-black uppercase tracking-widest text-green-400">PORTFOLIO</span>
                 <Button className="mt-2.5 h-12 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-base font-bold">
                     View Holdings
                 </Button>
             </div>
        </div>

      </main>

      <AnimatePresence>
        {dialogOpen && <ComingSoonDialog onClose={() => setDialogOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
