"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Zap, TrendingUp } from "lucide-react";

import misionImage from "../image/mision.JPG";

export default function Mission() {
  return (
    <section id="mision" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-400/5 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
              <Target className="h-3.5 w-3.5 text-ink-900" />
              <span className="text-xs uppercase tracking-widest text-ink-800">
                Nuestra esencia
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-ink-900 leading-tight">
              Redefinimos la{" "}
              <span className="gradient-text">logística</span> desde
              Chihuahua para el mundo.
            </h2>

            <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-xl">
              No somos una empresa más de mensajería. Somos la infraestructura
              crítica que conecta industrias, negocios y familias con
              precisión milimétrica. Cada envío es una promesa de excelencia
              respaldada por tecnología de vanguardia y un equipo que no
              acepta menos que la perfección.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { icon: Zap, value: "99.4%", label: "Entregas a tiempo" },
                { icon: TrendingUp, value: "+2,500", label: "Envíos mensuales" },
                { icon: Target, value: "24/7", label: "Operación continua" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-ink-900" />
                  <div className="font-display text-2xl font-bold text-ink-900">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-ink-700 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-ink-600/15">
              <Image
                src={misionImage}
                alt="Misión LMR"
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decoración */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-brand-400/10 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-400/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
