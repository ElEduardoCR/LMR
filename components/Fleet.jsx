"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Gauge, Package, Weight, Zap } from "lucide-react";

const VEHICLES = [
  {
    id: "moto",
    name: "Moto Express",
    tagline: "Urgencias en la ciudad",
    capacity: "Hasta 20 kg",
    speed: "Express · Mismo día",
    range: "Local · 50 km",
    color: "from-amber-400 to-orange-500",
    accent: "#f59e0b",
    stats: { speed: 95, capacity: 25, range: 40 },
    svg: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        {/* Wheels */}
        <circle cx="100" cy="170" r="30" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="100" cy="170" r="14" fill="#1f1f2e" />
        <circle cx="300" cy="170" r="30" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="300" cy="170" r="14" fill="#1f1f2e" />
        {/* Body */}
        <path d="M 90 145 Q 130 90 180 95 L 240 95 Q 290 95 320 145 L 290 155 L 130 155 Z" fill="url(#m1)" />
        {/* Box / cargo */}
        <rect x="195" y="55" width="90" height="55" rx="6" fill="#c2410c" stroke="#7c2d12" strokeWidth="2" />
        <line x1="240" y1="55" x2="240" y2="110" stroke="#7c2d12" strokeWidth="2" />
        <line x1="195" y1="82" x2="285" y2="82" stroke="#7c2d12" strokeWidth="2" />
        {/* Handle */}
        <path d="M 150 110 L 180 90" stroke="#1f1f2e" strokeWidth="5" strokeLinecap="round" />
        {/* Headlight */}
        <circle cx="130" cy="135" r="8" fill="#fef3c7" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: "van",
    name: "Van Sprinter",
    tagline: "Reparto urbano premium",
    capacity: "Hasta 1.5 ton",
    speed: "Mismo día o 24h",
    range: "Zona metropolitana",
    color: "from-sky-400 to-blue-600",
    accent: "#3b82f6",
    stats: { speed: 75, capacity: 60, range: 55 },
    svg: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="v1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* Shadow */}
        <ellipse cx="200" cy="195" rx="170" ry="6" fill="#000" opacity="0.4" />
        {/* Body */}
        <path d="M 40 90 L 70 60 L 280 60 L 360 90 L 360 160 L 40 160 Z" fill="url(#v1)" />
        {/* Windows */}
        <path d="M 80 75 L 100 65 L 270 65 L 280 75 L 280 110 L 80 110 Z" fill="#0a0a0f" opacity="0.85" />
        <line x1="180" y1="65" x2="180" y2="110" stroke="#1e3a8a" strokeWidth="2" />
        {/* LMR logo */}
        <rect x="160" y="125" width="80" height="22" rx="3" fill="#fff" opacity="0.95" />
        <text x="200" y="141" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">LMR</text>
        {/* Wheels */}
        <circle cx="100" cy="165" r="22" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="100" cy="165" r="10" fill="#1f1f2e" />
        <circle cx="300" cy="165" r="22" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="300" cy="165" r="10" fill="#1f1f2e" />
        {/* Headlight */}
        <rect x="50" y="115" width="20" height="10" rx="2" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    id: "camion3",
    name: "Camión 3.5 Ton",
    tagline: "Reparto regional",
    capacity: "Hasta 3.5 ton",
    speed: "24 a 48 horas",
    range: "Estatal",
    color: "from-emerald-400 to-teal-600",
    accent: "#10b981",
    stats: { speed: 60, capacity: 75, range: 70 },
    svg: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="t1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="195" rx="180" ry="6" fill="#000" opacity="0.4" />
        {/* Cargo box */}
        <rect x="140" y="60" width="220" height="100" rx="4" fill="url(#t1)" />
        <rect x="160" y="80" width="180" height="60" rx="3" fill="#fff" opacity="0.1" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
        {/* Cabin */}
        <path d="M 40 100 L 70 75 L 140 75 L 140 160 L 40 160 Z" fill="url(#t1)" />
        <path d="M 55 95 L 75 80 L 135 80 L 135 115 L 55 115 Z" fill="#0a0a0f" opacity="0.85" />
        {/* LMR */}
        <text x="250" y="120" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#fff" opacity="0.95">LMR</text>
        {/* Wheels */}
        <circle cx="80" cy="165" r="20" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="80" cy="165" r="9" fill="#1f1f2e" />
        <circle cx="200" cy="165" r="20" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="200" cy="165" r="9" fill="#1f1f2e" />
        <circle cx="320" cy="165" r="20" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="320" cy="165" r="9" fill="#1f1f2e" />
        <rect x="42" y="120" width="14" height="8" rx="2" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    id: "torton",
    name: "Tórton 10 Ton",
    tagline: "Carga pesada nacional",
    capacity: "Hasta 10 ton",
    speed: "48 a 72 horas",
    range: "Nacional",
    color: "from-fuchsia-400 to-purple-600",
    accent: "#a855f7",
    stats: { speed: 55, capacity: 90, range: 90 },
    svg: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tt1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c084fc" />
            <stop offset="1" stopColor="#7e22ce" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="195" rx="190" ry="6" fill="#000" opacity="0.4" />
        <rect x="120" y="50" width="260" height="110" rx="4" fill="url(#tt1)" />
        <rect x="140" y="70" width="220" height="70" rx="3" fill="#fff" opacity="0.08" stroke="#fff" strokeOpacity="0.2" />
        <path d="M 20 95 L 50 70 L 120 70 L 120 160 L 20 160 Z" fill="url(#tt1)" />
        <path d="M 35 90 L 55 75 L 115 75 L 115 115 L 35 115 Z" fill="#0a0a0f" opacity="0.85" />
        <text x="240" y="115" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#fff">LMR</text>
        {/* Multi axle wheels */}
        <circle cx="60" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="60" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="180" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="180" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="225" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="225" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="335" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="335" cy="165" r="8" fill="#1f1f2e" />
        <rect x="22" y="118" width="14" height="8" rx="2" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    id: "trailer",
    name: "Tráiler 48'",
    tagline: "Logística de gran escala",
    capacity: "Hasta 30 ton",
    speed: "72h+ a destino",
    range: "Nacional · USA",
    color: "from-rose-400 to-red-600",
    accent: "#ef4444",
    stats: { speed: 50, capacity: 100, range: 100 },
    svg: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tr1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f87171" />
            <stop offset="1" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="195" rx="195" ry="6" fill="#000" opacity="0.4" />
        {/* Trailer */}
        <rect x="100" y="55" width="295" height="105" rx="4" fill="url(#tr1)" />
        <line x1="160" y1="55" x2="160" y2="160" stroke="#7f1d1d" strokeWidth="1" opacity="0.5" />
        <line x1="220" y1="55" x2="220" y2="160" stroke="#7f1d1d" strokeWidth="1" opacity="0.5" />
        <line x1="280" y1="55" x2="280" y2="160" stroke="#7f1d1d" strokeWidth="1" opacity="0.5" />
        <line x1="340" y1="55" x2="340" y2="160" stroke="#7f1d1d" strokeWidth="1" opacity="0.5" />
        <text x="250" y="120" textAnchor="middle" fontSize="34" fontWeight="bold" fill="#fff">LMR</text>
        {/* Tractor cabin */}
        <path d="M 10 85 L 30 60 L 95 60 L 95 160 L 10 160 Z" fill="url(#tr1)" />
        <path d="M 25 90 L 40 70 L 90 70 L 90 110 L 25 110 Z" fill="#0a0a0f" opacity="0.85" />
        {/* Wheels */}
        <circle cx="55" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="55" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="155" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="155" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="200" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="200" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="320" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="320" cy="165" r="8" fill="#1f1f2e" />
        <circle cx="365" cy="165" r="18" fill="#0a0a0f" stroke="#1f1f2e" strokeWidth="3" />
        <circle cx="365" cy="165" r="8" fill="#1f1f2e" />
        <rect x="12" y="118" width="14" height="8" rx="2" fill="#fef3c7" />
      </svg>
    ),
  },
];

export default function Fleet() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(0);

  const go = (delta) => {
    setDirection(delta);
    setActive((prev) => (prev + delta + VEHICLES.length) % VEHICLES.length);
  };

  const select = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const vehicle = VEHICLES[active];

  return (
    <section
      id="equipo"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Backdrop dynamic */}
      <motion.div
        key={`bg-${vehicle.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${vehicle.accent}, transparent 60%)`,
        }}
      />

      {/* Speed lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2.5 + (i % 4) * 0.4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "linear",
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              top: `${(i * 6) % 100}%`,
              width: `${30 + (i % 5) * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Zap className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Selecciona tu vehículo
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Nuestro <span className="gradient-text">equipo</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Una flota completa para cada tipo de envío. Elige el vehículo ideal para tu carga.
          </p>
        </motion.div>

        {/* Vehicle stage */}
        <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 md:left-4 z-20 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 md:right-4 z-20 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Big vehicle name behind */}
          <motion.div
            key={`name-${vehicle.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.06, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span className="font-display font-black text-[clamp(120px,22vw,320px)] tracking-tighter leading-none whitespace-nowrap text-white">
              {vehicle.name.split(" ")[0].toUpperCase()}
            </span>
          </motion.div>

          {/* Vehicle showcase */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={vehicle.id}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-2xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {vehicle.svg}
              </motion.div>
              {/* Reflection glow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 blur-2xl opacity-70"
                style={{ background: vehicle.accent }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vehicle info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${vehicle.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                {vehicle.name}
              </h3>
              <p className="text-white/60 mt-2">{vehicle.tagline}</p>
            </div>

            {/* Stat bars */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Velocidad", icon: Gauge, value: vehicle.stats.speed },
                { label: "Capacidad", icon: Weight, value: vehicle.stats.capacity },
                { label: "Alcance", icon: Package, value: vehicle.stats.range },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="glass rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-white/60">
                        <Icon className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-sm font-mono font-semibold">
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${vehicle.color}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Selector dots */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {VEHICLES.map((v, i) => (
            <button
              key={v.id}
              onClick={() => select(i)}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-12 h-2 bg-gradient-to-r from-brand-400 to-brand-600"
                    : "w-2 h-2 bg-white/20 group-hover:bg-white/40"
                }`}
              />
              <span
                className={`text-[10px] uppercase tracking-wider transition-colors ${
                  i === active ? "text-white" : "text-white/40"
                }`}
              >
                {v.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
