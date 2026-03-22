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

export default function SpliffSocial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <Navbar />

      {/* Decorative background blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-green-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-10" />

      {/* Back button */}
      <Link href="/" className="absolute top-24 left-6 inline-flex items-center justify-center p-3 bg-white rounded-full cartoon-border cartoon-shadow text-foreground z-10">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-2xl mx-auto text-center mt-20"
      >
        {/* Logo / icon */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="text-7xl">🌿</div>
        </motion.div>

        <h1 className="font-display text-6xl sm:text-7xl font-extrabold text-foreground tracking-widest mb-4">
          Spliff Social
        </h1>

        <div className="bg-white px-8 py-4 rounded-full inline-block cartoon-border cartoon-shadow mb-12 transform -rotate-1">
          <p className="text-lg sm:text-xl font-bold text-foreground">
            A social network for holders and select communities
          </p>
        </div>

        {/* Feature teaser cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { emoji: "🎨", label: "Share your NFTs" },
            { emoji: "💬", label: "Community feed" },
            { emoji: "🏆", label: "Holder perks" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/80 p-5 rounded-2xl cartoon-border cartoon-shadow flex flex-col items-center gap-2"
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="font-bold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Connect Wallet button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="text-xl px-14 py-8 bg-green-600 hover:bg-green-700 text-white cartoon-border cartoon-shadow"
            onClick={() => setDialogOpen(true)}
          >
            <Wallet className="h-6 w-6 mr-3" />
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