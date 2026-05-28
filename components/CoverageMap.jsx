"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Plane } from "lucide-react";

// Ciudades principales de México con coordenadas relativas al SVG (0-1000 x 0-600)
const CITIES = [
  { id: "tij", name: "Tijuana", x: 130, y: 90, state: "Baja California", tier: 1 },
  { id: "mxli", name: "Mexicali", x: 175, y: 80, state: "Baja California", tier: 2 },
  { id: "her", name: "Hermosillo", x: 245, y: 175, state: "Sonora", tier: 1 },
  { id: "lap", name: "La Paz", x: 230, y: 290, state: "Baja California Sur", tier: 2 },
  { id: "chi", name: "Chihuahua", x: 365, y: 200, state: "Chihuahua", tier: 1, hub: true },
  { id: "tor", name: "Torreón", x: 440, y: 260, state: "Coahuila", tier: 2 },
  { id: "mty", name: "Monterrey", x: 535, y: 245, state: "Nuevo León", tier: 1 },
  { id: "sal", name: "Saltillo", x: 510, y: 275, state: "Coahuila", tier: 2 },
  { id: "dur", name: "Durango", x: 460, y: 320, state: "Durango", tier: 2 },
  { id: "maz", name: "Mazatlán", x: 395, y: 345, state: "Sinaloa", tier: 2 },
  { id: "tam", name: "Tampico", x: 600, y: 335, state: "Tamaulipas", tier: 2 },
  { id: "ags", name: "Aguascalientes", x: 500, y: 380, state: "Aguascalientes", tier: 2 },
  { id: "slp", name: "San Luis Potosí", x: 545, y: 365, state: "SLP", tier: 1 },
  { id: "gdl", name: "Guadalajara", x: 480, y: 420, state: "Jalisco", tier: 1 },
  { id: "leon", name: "León", x: 535, y: 410, state: "Guanajuato", tier: 2 },
  { id: "qro", name: "Querétaro", x: 575, y: 425, state: "Querétaro", tier: 1 },
  { id: "mor", name: "Morelia", x: 545, y: 460, state: "Michoacán", tier: 2 },
  { id: "cdmx", name: "CDMX", x: 605, y: 460, state: "Ciudad de México", tier: 1 },
  { id: "pue", name: "Puebla", x: 635, y: 475, state: "Puebla", tier: 1 },
  { id: "ver", name: "Veracruz", x: 680, y: 460, state: "Veracruz", tier: 1 },
  { id: "aca", name: "Acapulco", x: 590, y: 525, state: "Guerrero", tier: 2 },
  { id: "oax", name: "Oaxaca", x: 665, y: 525, state: "Oaxaca", tier: 2 },
  { id: "vll", name: "Villahermosa", x: 750, y: 510, state: "Tabasco", tier: 2 },
  { id: "tux", name: "Tuxtla Gtz", x: 740, y: 555, state: "Chiapas", tier: 2 },
  { id: "mer", name: "Mérida", x: 855, y: 470, state: "Yucatán", tier: 1 },
  { id: "can", name: "Cancún", x: 910, y: 455, state: "Quintana Roo", tier: 1 },
];

const ROUTES = [
  // Hub Chihuahua → norte
  ["chi", "tij"],
  ["chi", "mxli"],
  ["chi", "her"],
  ["chi", "mty"],
  ["chi", "tor"],
  ["chi", "dur"],
  ["chi", "maz"],
  // Hub Chihuahua → centro y sur (vía Guadalajara y CDMX)
  ["chi", "gdl"],
  ["chi", "cdmx"],
  // Red secundaria
  ["mty", "tam"],
  ["mty", "slp"],
  ["gdl", "ags"],
  ["gdl", "leon"],
  ["cdmx", "qro"],
  ["cdmx", "pue"],
  ["cdmx", "ver"],
  ["cdmx", "oax"],
  ["cdmx", "mer"],
  ["pue", "ver"],
  ["ver", "vll"],
  ["vll", "tux"],
  ["mer", "can"],
];

export default function CoverageMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(null);

  const cityById = (id) => CITIES.find((c) => c.id === id);

  return (
    <section id="cobertura" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-40" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Plane className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Cobertura nacional
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Llegamos a toda la{" "}
            <span className="gradient-text">República</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Más de {CITIES.length}+ ciudades conectadas con rutas optimizadas.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
          {[
            { v: "32", l: "Estados" },
            { v: "120+", l: "Ciudades" },
            { v: "850k", l: "km/mes" },
            { v: "8", l: "Hubs" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl px-4 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold gradient-text">
                {s.v}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-white/50">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-6 md:p-10 overflow-hidden"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(234,179,8,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <svg
            viewBox="80 40 880 560"
            className="relative w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#facc15" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#eab308" stopOpacity="0.9" />
                <stop offset="1" stopColor="#facc15" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="cityGlow">
                <stop offset="0" stopColor="#facc15" stopOpacity="0.8" />
                <stop offset="1" stopColor="#facc15" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stylized Mexico outline (silhouette) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              d="M 110 80 Q 145 70 175 75 L 200 90 L 240 130 Q 270 160 290 200 L 330 220 L 380 200 L 420 210 L 470 240 L 520 240 L 545 230 L 580 245 L 615 265 Q 640 280 670 305 L 720 330 L 750 340 L 790 360 L 815 380 L 840 425 L 875 450 L 920 445 L 935 455 L 920 475 L 870 485 L 830 495 L 780 525 L 750 555 L 720 575 L 680 565 L 650 545 L 620 535 L 590 540 L 555 530 L 520 495 L 490 470 L 460 450 L 435 425 L 415 405 L 400 380 L 380 360 L 355 345 L 330 360 L 305 370 L 280 360 L 255 340 L 230 305 L 220 285 L 235 270 L 245 250 L 240 230 L 225 215 L 210 205 L 195 190 L 180 170 L 175 145 L 160 125 L 140 105 Z"
              fill="rgba(234,179,8,0.05)"
              stroke="rgba(234,179,8,0.4)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Baja California Sur (peninsula extra) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              d="M 210 230 Q 215 270 225 305 L 240 325 L 245 295 L 235 260 Z"
              fill="rgba(234,179,8,0.05)"
              stroke="rgba(234,179,8,0.4)"
              strokeWidth="1.5"
            />

            {/* Yucatan extension */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
              d="M 820 470 Q 860 450 905 455 L 925 470 L 920 490 L 870 495 L 835 490 Z"
              fill="rgba(234,179,8,0.08)"
              stroke="rgba(234,179,8,0.4)"
              strokeWidth="1.5"
            />

            {/* Routes */}
            {ROUTES.map((route, i) => {
              const a = cityById(route[0]);
              const b = cityById(route[1]);
              if (!a || !b) return null;
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2 - 30;
              const pathD = `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
              return (
                <g key={i}>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                    transition={{
                      duration: 1.4,
                      delay: 1 + i * 0.08,
                      ease: "easeInOut",
                    }}
                    d={pathD}
                    fill="none"
                    stroke="url(#routeGrad)"
                    strokeWidth="1.2"
                    strokeDasharray="3 4"
                  />
                  {/* Animated package along route */}
                  {i % 3 === 0 && inView && (
                    <motion.circle
                      r="3"
                      fill="#facc15"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 4,
                        delay: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        begin={`${2 + i * 0.3}s`}
                        path={pathD}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}

            {/* Cities */}
            {CITIES.map((city, i) => {
              const isHub = city.hub;
              const size = isHub ? 7 : city.tier === 1 ? 5 : 3.5;
              const isHovered = hovered === city.id;
              return (
                <g
                  key={city.id}
                  onMouseEnter={() => setHovered(city.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse */}
                  {(isHub || city.tier === 1) && (
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      initial={{ r: 0, opacity: 0 }}
                      animate={
                        inView
                          ? { r: [size, size + 18], opacity: [0.7, 0] }
                          : {}
                      }
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1.5 + i * 0.05,
                        ease: "easeOut",
                      }}
                      fill={isHub ? "#facc15" : "#eab308"}
                    />
                  )}
                  {/* Outer glow on hover */}
                  {isHovered && (
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ r: 24, opacity: 1 }}
                      fill="url(#cityGlow)"
                    />
                  )}
                  {/* Dot */}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r={size}
                    fill={isHub ? "#fff" : "#facc15"}
                    stroke={isHub ? "#facc15" : "#fff"}
                    strokeWidth={isHub ? 2.5 : 1.5}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay: 1.2 + i * 0.04,
                      type: "spring",
                      stiffness: 200,
                    }}
                    style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                    filter="url(#glow)"
                  />
                  {/* Label */}
                  {(isHub || city.tier === 1 || isHovered) && (
                    <motion.text
                      x={city.x}
                      y={city.y - size - 6}
                      textAnchor="middle"
                      fontSize={isHub ? 13 : 10}
                      fontWeight={isHub ? 700 : 500}
                      fill="#fff"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: isHub ? 1 : 0.85 } : {}}
                      transition={{ delay: 1.5 + i * 0.04 }}
                      style={{ pointerEvents: "none" }}
                    >
                      {city.name}
                    </motion.text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white ring-2 ring-brand-500" />
              Hub principal
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
              Centro de distribución
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500" />
              Ruta activa
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
