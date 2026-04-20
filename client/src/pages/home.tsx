import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { JoinDialog } from "@/components/join-dialog";
import { StatusDialog } from "@/components/status-dialog";
import { FrensDialog } from "@/components/frens-dialog";
import { Navbar } from "@/components/navbar";
import bgSrc from "@assets/background.jpg";

export default function Home() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isFrensOpen, setIsFrensOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative"
      style={{ backgroundImage: `url(${bgSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Navbar />

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-3xl mx-auto text-center mt-28"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-widest mb-6 text-orange-400"
            style={{ textShadow: "0 0 40px rgba(230,130,50,0.8)" }}
          >
            SLOGS
          </h1>
        </motion.div>

        <div className="bg-black/60 border border-orange-500/40 px-8 py-4 rounded-full inline-block mb-12 transform -rotate-2">
          <p className="text-xl sm:text-2xl font-bold text-orange-200">
            Slow and steady wins the whitelist
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="default"
              className="text-xl px-12 py-8 w-full sm:w-auto bg-orange-500 hover:bg-orange-600"
              onClick={() => setIsJoinOpen(true)}
            >
              Apply to WL
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="secondary"
              className="text-xl px-12 py-8 w-full sm:w-auto"
              onClick={() => setIsStatusOpen(true)}
            >
              Check Status
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 w-full sm:w-auto border-orange-500/50 text-orange-300 hover:bg-orange-500/10"
              onClick={() => setIsFrensOpen(true)}
            >
              Slog Frens
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <JoinDialog isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <StatusDialog isOpen={isStatusOpen} onClose={() => setIsStatusOpen(false)} />
      <FrensDialog isOpen={isFrensOpen} onClose={() => setIsFrensOpen(false)} />
    </div>
  );
}