import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";

// Asset Imports
import applyJpg from "@assets/Apply.jpg";
import dressPng from "@assets/Dress.png";
import raceJpg from "@assets/Race.jpg";
import bgSrc from "@assets/background.jpg";
import slog1Src from "@assets/Slog-1.jpg";
import slog2Src from "@assets/Slog-2.jpg";

const cards = [
  {
    href: "/apply",
    label: "Apply to Whitelist",
    sub: "Finish first and grab your rewards",
    image: applyJpg,
    accent: "#c2410c",
  },
  {
    href: "/customize",
    label: "Dress Up",
    sub: "Customize your unique snail",
    image: dressPng,
    accent: "#7c3aed",
  },
  {
    href: "/race",
    label: "Race to Win",
    sub: "Earn rewards on the track",
    image: raceJpg,
    accent: "#2563eb",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />
      
      <Navbar />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-6 pt-20 pb-6 flex flex-col items-center">

        {/* Brand Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            SLOGS
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm tracking-[0.25em] text-white/50 uppercase mb-2 font-medium"
        >
          NFT Collection
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-16 h-px bg-white/20" />
          <span className="text-xs tracking-[0.2em] text-white/60 font-semibold uppercase">
            Season 1
          </span>
          <span className="w-16 h-px bg-white/20" />
        </motion.div>

        {/* Feature Cards - Slimmer, compact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="h-44 sm:h-48"
            >
              <Link href={card.href}>
                <div
                  className="relative h-full overflow-hidden rounded-2xl cursor-pointer group"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-all duration-500" />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${card.accent}40, 0 20px 40px -15px ${card.accent}20` }}
                  />
                  <div 
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: card.accent }}
                  />
                  <div className="relative z-10 p-4 h-full flex flex-col justify-end text-left">
                    <div className="flex items-end justify-between mb-1">
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {card.label}
                      </h3>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        style={{ background: card.accent }}
                      >
                        →
                      </div>
                    </div>
                    <p className="text-xs text-white/50 font-medium leading-relaxed">
                      {card.sub}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Preview Images */}
        <div className="flex items-center gap-4 justify-center mb-4">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-xl"
          >
            <img src={slog1Src} alt="Slog 1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.3 }}
            className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-xl"
          >
            <img src={slog2Src} alt="Slog 2" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[11px] tracking-[0.2em] text-white/30 font-medium uppercase"
        >
          Slow and steady
        </motion.p>
      </div>
    </div>
  );
}
