// race.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Trophy } from "lucide-react";
import bgSrc from "@assets/background.jpg";

const TARGET_DATE = new Date("2026-05-01T00:00:00Z");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Race() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  const timeUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

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

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto w-full">
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
          <p className="text-base text-white/50 font-medium mb-12">
            The track is being built. Prepare for launch.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-4 gap-3 sm:gap-4 w-full mb-10"
        >
          {timeUnits.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center rounded-2xl px-2 py-5 sm:py-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1"
                style={{ color: "#2563eb" }}
              >
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-white/40 font-semibold uppercase tracking-wider">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="h-4 w-4 text-blue-500/60" />
            <span className="text-sm font-semibold text-white/70 tracking-tight">
              Finish first and grab your GTD spot
            </span>
          </div>
          <p className="text-xs text-white/30 leading-relaxed max-w-sm mx-auto">
            Race goes live when the countdown hits zero. Connect your wallet and
            have your Slog ready at the starting line.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-[11px] tracking-[0.15em] text-white/25 uppercase font-medium"
        >
          Slow and steady wins the spot
        </motion.p>
      </div>
    </div>
  );
}
