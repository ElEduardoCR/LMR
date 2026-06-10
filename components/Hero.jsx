"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Package, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 gradient-mesh -z-10" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.6) 100%)"
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 z-[2] opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,213,35,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,213,35,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400 mb-8"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-ink-900">
            Operando en el estado de Chihuahua
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95] text-white"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          Tu envío,
          <br />
          nuestra ruta.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Mensajería y logística en Chihuahua. Flota moderna, rastreo en tiempo
          real y un equipo que entrega a tiempo, siempre.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("cobertura")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-400 text-ink-900 font-semibold text-base shadow-2xl shadow-brand-500/30 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-300 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MapPin className="relative w-5 h-5" />
            <span className="relative">¿A dónde vamos?</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("equipo")}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass-strong text-ink-900 font-semibold text-base hover:bg-ink-600/20 transition-colors"
          >
            <Package className="w-5 h-5 text-brand-400" />
            <span>Nuestros servicios</span>
            <Play className="w-4 h-4 fill-current opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "Chih.", label: "Estado" },
            { value: "24/7", label: "Operación" },
            { value: "99.4%", label: "A tiempo" },
          ].map((stat, i) => (
            <div key={i} className="bg-brand-400 rounded-2xl px-4 py-5">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-ink-900 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-ink-700 to-transparent"
        />
      </motion.div>
    </section>
  );
}
