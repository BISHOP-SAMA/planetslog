// race.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Timer } from "lucide-react";
import bgSrc from "@assets/background.jpg";

export default function Race() {
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Back Button */}
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer text-sm font-medium text-white/70 hover:text-white transition-colors"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.div>
      </Link>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.25em] text-white/40 uppercase font-semibold mb-4">
            Season 1
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Slog Race
          </h1>
          <p className="text-base text-white/50 font-medium mb-10">
            The track is being built. Prepare for launch.
          </p>
        </motion.div>

        {/* Coming Soon Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center rounded-2xl px-10 py-8 mb-10"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Timer className="h-6 w-6 text-blue-500/60 mb-3" />
          <span
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Coming Soon
          </span>
          <p className="text-xs text-white/30 font-medium">
            Check back for the official launch date
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm font-semibold text-white/70 tracking-tight">
              Finish first and grab your reward
            </span>
          </div>
          <p className="text-xs text-white/30 leading-relaxed max-w-sm mx-auto">
            Race goes live when the track opens. Connect your wallet and have
            your Slog ready at the starting line.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-[11px] tracking-[0.15em] text-white/25 uppercase font-medium"
        >
          Slow and steady
        </motion.p>
      </div>
    </div>
  );
}
