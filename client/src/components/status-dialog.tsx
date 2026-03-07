import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock } from "lucide-react";

interface StatusDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatusDialog({ isOpen, onClose }: StatusDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card p-6 sm:p-8 cartoon-border cartoon-shadow-lg text-center"
          >
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>

            <div className="flex flex-col items-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center cartoon-border">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">Coming Soon</h2>
              <p className="text-muted-foreground font-medium">
                Status checking will be available soon. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
