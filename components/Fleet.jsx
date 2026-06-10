"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gauge,
  Package,
  Ruler,
  Weight,
  Zap,
} from "lucide-react";

import camion34Image from "../camiones/camion 34.png";
import rabonImage from "../camiones/rabon.png";
import trailerImage from "../camiones/trailer.png";
import vanCortaImage from "../camiones/van corta.png";
import vanLargaImage from "../camiones/van larga.png";

const VEHICLES = [
  {
    id: "van-corta",
    name: "Van corta",
    tagline: "Entregas ágiles dentro de ciudad y zonas cercanas.",
    capacity: "Hasta 1 ton",
    volume: "Carga ligera",
    service: "Paquetería y reparto",
    stats: { maniobra: 92, capacidad: 42, alcance: 58 },
    image: vanCortaImage,
  },
  {
    id: "van-larga",
    name: "Van larga",
    tagline: "Más espacio sin perder flexibilidad para reparto urbano.",
    capacity: "Hasta 1.5 ton",
    volume: "Volumen medio",
    service: "Ruta local y regional",
    stats: { maniobra: 82, capacidad: 58, alcance: 64 },
    image: vanLargaImage,
  },
  {
    id: "camion-34",
    name: "Camión 3/4",
    tagline: "Unidad versátil para carga comercial y reparto programado.",
    capacity: "Hasta 3.5 ton",
    volume: "Caja mediana",
    service: "Carga comercial",
    stats: { maniobra: 68, capacidad: 72, alcance: 76 },
    image: camion34Image,
  },
  {
    id: "rabon",
    name: "Rabón",
    tagline: "Mayor capacidad para movimientos industriales y consolidados.",
    capacity: "Hasta 8 ton",
    volume: "Caja grande",
    service: "Carga pesada",
    stats: { maniobra: 54, capacidad: 86, alcance: 82 },
    image: rabonImage,
  },
  {
    id: "trailer",
    name: "Tráiler",
    tagline: "Solución de alto volumen para carga completa y rutas largas.",
    capacity: "Hasta 30 ton",
    volume: "Caja completa",
    service: "Carga dedicada",
    stats: { maniobra: 38, capacidad: 100, alcance: 94 },
    image: trailerImage,
  },
];

export default function Fleet() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const vehicle = VEHICLES[active];

  const go = (delta) => {
    setDirection(delta);
    setActive((prev) => (prev + delta + VEHICLES.length) % VEHICLES.length);
  };

  const select = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <section id="equipo" className="relative overflow-hidden px-6 py-28">
      <motion.div
        key={`fleet-bg-${vehicle.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.24 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 70% 42%, #FFD523, transparent 38%), linear-gradient(180deg, rgba(178,177,185,0.08), rgba(255,213,35,0.06))",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-ink-800">
              Selecciona tu vehículo
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl text-ink-900">
            Flotilla <span className="gradient-text">LMR</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-700">
            Cinco tipos de unidad para elegir la capacidad ideal según tu carga y ruta.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {VEHICLES.map((v, i) => (
            <button
              key={v.id}
              onClick={() => select(i)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                i === active
                  ? "border-brand-400 bg-brand-400 text-ink-900 shadow-lg shadow-brand-500/30"
                  : "border-ink-600/30 bg-ink-600/10 text-ink-700 hover:border-brand-400 hover:text-ink-900"
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-ink-600/20 bg-white p-5 shadow-2xl shadow-ink-900/10 md:p-8">
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-600/20 bg-white text-ink-900 transition hover:border-brand-400 hover:text-brand-400"
            aria-label="Vehículo anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-600/20 bg-white text-ink-900 transition hover:border-brand-400 hover:text-brand-400"
            aria-label="Vehículo siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={vehicle.id}
              custom={direction}
              initial={{ x: direction > 0 ? 160 : -160, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -160 : 160, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid min-h-[520px] items-center gap-8 px-10 md:grid-cols-2 md:px-14"
            >
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
                  Unidad {active + 1}/5
                </div>
                <h3 className="font-display text-4xl font-black tracking-tight md:text-6xl text-ink-900">
                  {vehicle.name}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
                  {vehicle.tagline}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Weight, label: "Capacidad", value: vehicle.capacity },
                    { icon: Package, label: "Volumen", value: vehicle.volume },
                    { icon: Ruler, label: "Servicio", value: vehicle.service },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-2xl border border-ink-600/20 bg-gray-50 p-4">
                        <Icon className="mb-3 h-5 w-5 text-brand-400" />
                        <div className="text-[10px] uppercase tracking-wider text-ink-700">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-ink-900">
                          {item.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { label: "Maniobra", value: vehicle.stats.maniobra },
                    { label: "Capacidad", value: vehicle.stats.capacidad },
                    { label: "Alcance", value: vehicle.stats.alcance },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wider text-ink-700">
                        <span className="flex items-center gap-2">
                          <Gauge className="h-3.5 w-3.5 text-brand-400" />
                          {stat.label}
                        </span>
                        <span className="font-mono text-brand-400">{stat.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[320px] items-center justify-center">
                <div className="relative z-10 flex h-[280px] w-full max-w-xl items-center justify-center md:h-[360px]">
                  <Image
                    src={vehicle.image}
                    alt={`Unidad ${vehicle.name} de LMR`}
                    className="h-full w-full object-contain"
                    priority={active === 0}
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
