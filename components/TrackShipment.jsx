"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle2, MapPin, Clock } from "lucide-react";

const STEPS = [
  { icon: Package, label: "Recibido", time: "08:42 AM", done: true },
  { icon: MapPin, label: "En centro de distribución", time: "10:15 AM", done: true },
  { icon: Truck, label: "En ruta", time: "01:30 PM", done: true, current: true },
  { icon: CheckCircle2, label: "Entregado", time: "Estimado 04:20 PM", done: false },
];

export default function TrackShipment() {
  const [code, setCode] = useState("");
  const [tracking, setTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (code.trim().length > 3) setTracking(true);
  };

  return (
    <section id="seguir" className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Tracking en vivo
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Sigue tu <span className="gradient-text">envío</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Ingresa tu número de guía y conoce el estado de tu paquete en tiempo real.
          </p>
        </motion.div>

        {/* Search input */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleTrack}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl blur opacity-30 group-focus-within:opacity-70 transition-opacity" />
            <div className="relative flex items-center glass-strong rounded-2xl p-2">
              <div className="pl-4 pr-3">
                <Search className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej: LMR-2026-0042819"
                className="flex-1 bg-transparent py-4 text-white placeholder:text-white/30 outline-none font-mono tracking-wider"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 font-semibold text-sm shadow-lg shadow-brand-500/30"
              >
                Rastrear
              </motion.button>
            </div>
          </div>
        </motion.form>

        {/* Tracking result */}
        <AnimatePresence mode="wait">
          {tracking && (
            <motion.div
              key="tracker"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 glass-strong rounded-3xl p-8 md:p-10 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-1">
                    Guía
                  </div>
                  <div className="font-mono text-lg text-white">{code}</div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">
                    En camino · llegada estimada 16:20
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Progress line */}
                <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10" />
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "62%" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                  className="absolute left-6 top-6 w-px bg-gradient-to-b from-brand-400 to-brand-600"
                />

                <div className="space-y-6">
                  {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                        className="relative flex items-start gap-5"
                      >
                        <div
                          className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                            step.done
                              ? "bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/40"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          {step.current && (
                            <motion.span
                              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full bg-brand-400"
                            />
                          )}
                          <Icon
                            className={`w-5 h-5 relative ${
                              step.done ? "text-white" : "text-white/40"
                            }`}
                          />
                        </div>
                        <div className="pt-2.5">
                          <div
                            className={`font-semibold ${
                              step.done ? "text-white" : "text-white/40"
                            }`}
                          >
                            {step.label}
                          </div>
                          <div className="text-sm text-white/50 mt-0.5">
                            {step.time}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
