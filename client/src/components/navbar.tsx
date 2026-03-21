import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/Logo-junkies.jpg";
import oasisSrc from "@assets/Oasis.png";

// ── SPLIFF SOCIAL COUNTDOWN ──────────────────────────────────────
// Set your fixed end date here
const SPLIFF_TARGET = new Date("2026-04-06T00:00:00Z");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
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

// ── SPLIFF SOCIAL DIALOG ─────────────────────────────────────────
function SpliffSocialDialog({ onClose }: { onClose: () => void }) {
  const { days, hours, minutes, seconds } = useCountdown(SPLIFF_TARGET);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="relative w-full max-w-md rounded-3xl bg-card p-8 cartoon-border cartoon-shadow-lg text-center"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted transition-colors text-foreground font-bold text-lg"
        >
          ✕
        </button>

        <div className="mb-4 text-4xl">🌿</div>
        <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
          Spliff Social
        </h2>
        <p className="text-muted-foreground font-medium mb-8">
          An upcoming social network for holders and select communities.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-3">
          {[
            { label: "Days",    value: days },
            { label: "Hours",   value: hours },
            { label: "Mins",    value: minutes },
            { label: "Secs",    value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center bg-secondary rounded-2xl px-3 py-3 cartoon-border min-w-[60px]">
              <span className="font-display text-3xl font-extrabold text-foreground">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground font-bold text-xs mt-1 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── LEADERBOARD DIALOG ───────────────────────────────────────────
function LeaderboardDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="relative w-full max-w-md rounded-3xl bg-card p-8 cartoon-border cartoon-shadow-lg text-center"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted transition-colors text-foreground font-bold text-lg"
        >
          ✕
        </button>

        <div className="mb-4 text-4xl">🏆</div>
        <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
          Spliff Leaderboard
        </h2>
        <p className="text-muted-foreground font-medium">
          Coming Soon
        </p>
      </motion.div>
    </div>
  );
}

// ── MAIN NAVBAR ──────────────────────────────────────────────────
export function Navbar() {
  const [spliffOpen, setSpliffOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center gap-2 sm:gap-4 bg-foreground/90 backdrop-blur-sm px-4 py-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSpliffOpen(true)}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-bold text-sm cartoon-border"
        >
          🌿 Spliff Social
        </motion.button>

        <div className="w-px h-5 bg-white/20" />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLeaderboardOpen(true)}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-bold text-sm cartoon-border"
        >
          🏆 Spliff Leaderboard
        </motion.button>
      </div>

      {/* Main navbar — pushed down below the announcement bar */}
      <nav className="fixed top-10 left-0 right-0 z-40 flex items-center justify-between px-6 py-4">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="Junkies Logo"
              className="h-12 w-12 rounded-full cartoon-border object-cover"
            />
          </motion.div>
        </Link>

        <Link href="/oasis">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full cartoon-border cartoon-shadow bg-white font-bold text-foreground text-base hover:bg-secondary transition-colors"
          >
            <img src={oasisSrc} alt="Oasis" className="h-6 w-6 rounded-full object-cover" />
            The Oasis
          </motion.button>
        </Link>
      </nav>

      {/* Dialogs */}
      <AnimatePresence>
        {spliffOpen && <SpliffSocialDialog onClose={() => setSpliffOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {leaderboardOpen && <LeaderboardDialog onClose={() => setLeaderboardOpen(false)} />}
      </AnimatePresence>
    </>
  );
}