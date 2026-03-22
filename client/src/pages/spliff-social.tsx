import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Wallet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

function ComingSoonDialog({ onClose }: { onClose: () => void }) {
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
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="relative w-full max-w-sm rounded-3xl bg-card p-8 cartoon-border cartoon-shadow-lg text-center"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>
        <div className="text-5xl mb-4">🌿</div>
        <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">
          Coming Soon
        </h2>
        <p className="text-muted-foreground font-medium">
          Wallet connect will be available when Spliff Social launches. Stay tuned!
        </p>
      </motion.div>
    </div>
  );
}

const FLOATING_WORDS = [
  "Own your profile", "On-chain", "Token-gated", "Earn NFTs",
  "Your voice", "Decentralized", "Community", "Blockchain",
  "Earn tokens", "Forever yours", "Secure", "Transparent",
];

export default function SpliffSocial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-950">
      <Navbar />

      {/* Animated floating blobs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${180 + i * 60}px`,
            height: `${180 + i * 60}px`,
            background: i % 2 === 0 ? "#22c55e" : "#10b981",
            left: `${10 + i * 18}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Floating words in background */}
      {FLOATING_WORDS.map((word, i) => (
        <motion.span
          key={word}
          className="absolute text-white/10 font-bold text-sm sm:text-base select-none pointer-events-none"
          style={{
            left: `${5 + (i * 17) % 85}%`,
            top: `${5 + (i * 13) % 85}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {word}
        </motion.span>
      ))}

      {/* Back button */}
      <Link href="/" className="absolute top-24 left-6 inline-flex items-center justify-center p-3 bg-white/20 hover:bg-white/30 rounded-full cartoon-border text-white z-10 transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      {/* White frosted overlay covering the whole page */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-2xl mx-auto text-center mt-20 px-4"
      >
        {/* Animated icon */}
        <motion.div
          animate={{ rotate: [-3, 3, -3], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="mb-6 text-7xl"
        >
          🌿
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl font-extrabold tracking-widest mb-6 text-white"
          style={{ textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000" }}
        >
          Spliff Social
        </motion.h1>

        {/* Frosted glass text card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 cartoon-border border-white/20 mb-10 text-left space-y-4"
        >
          {[
            "Imagine a social network where you truly own your profile, posts, and connections. Every like, comment, and repost is on-chain — secure, transparent, and belonging to you.",
            "Post content, engage with your community, and earn tokens or NFTs for your activity. Follow friends, join token-gated communities, and watch your social presence grow as real on-chain value.",
            "This isn't just social media — it's Spliff Social: where your voice, creativity, and connections are yours forever, powered by blockchain.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="text-white/70 font-medium text-base sm:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { emoji: "🎨", label: "Own your profile" },
            { emoji: "💬", label: "On-chain posts" },
            { emoji: "🏆", label: "Earn tokens & NFTs" },
            { emoji: "🔒", label: "Token-gated communities" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 font-bold text-sm cartoon-border border-white/20"
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Connect Wallet — very visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", bounce: 0.5 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="text-xl px-16 py-8 bg-green-500 hover:bg-green-400 text-white font-extrabold cartoon-border cartoon-shadow-lg shadow-green-500/50 shadow-2xl"
            onClick={() => setDialogOpen(true)}
          >
            <Wallet className="h-7 w-7 mr-3" />
            Connect Wallet
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {dialogOpen && <ComingSoonDialog onClose={() => setDialogOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}