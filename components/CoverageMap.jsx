"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CITIES = [
  { name: "Chihuahua", type: "Matriz" },
  { name: "Cd. Juárez", type: "Ruta" },
  { name: "Cuauhtémoc", type: "Ruta" },
  { name: "Delicias", type: "Ruta" },
  { name: "Parral", type: "Ruta" },
  { name: "Nuevo Casas Grandes", type: "Ruta" },
];

export default function CoverageMap() {
  return (
    <section id="cobertura" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-600/5 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <MapPin className="h-3.5 w-3.5 text-ink-900" />
            <span className="text-xs uppercase tracking-widest text-ink-800">
              Cobertura estatal
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl text-ink-900">
            Chihuahua, <span className="gradient-text">nuestro territorio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-700">
            Operamos en el estado de Chihuahua con matriz en la ciudad de Chihuahua.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-cols-3 max-w-4xl mx-auto">
          {CITIES.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-ink-600/15 bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-400 text-ink-900">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="font-display text-xl font-bold text-ink-900">{city.name}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink-700">{city.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
