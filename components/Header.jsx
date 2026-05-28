"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "seguir", label: "Seguir envío" },
  { id: "equipo", label: "Nuestro equipo" },
  { id: "cobertura", label: "Cobertura" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleClick("inicio")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30"
            >
              <Truck className="w-5 h-5 text-white" strokeWidth={2.5} />
            </motion.div>
            <div className="absolute inset-0 rounded-xl bg-brand-500 blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">
              <span className="gradient-text">LMR</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Mensajería · Logística
            </div>
          </div>
        </motion.button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => handleClick("contacto")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-sm font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-shadow"
          >
            Cotizar envío
          </motion.button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-strong mt-3 mx-6 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-3">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? "bg-brand-500/20 text-brand-300"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
