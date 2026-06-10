"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardCheck,
  Headphones,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

import equipoImage from "../image/equipo.JPG";

const TEAM_AREAS = [
  {
    icon: Headphones,
    title: "Atención cercana",
    desc: "Seguimiento claro desde la cotización hasta la entrega final.",
  },
  {
    icon: MapPinned,
    title: "Coordinación de rutas",
    desc: "Planeación diaria para mover cada unidad con orden y puntualidad.",
  },
  {
    icon: Truck,
    title: "Operadores confiables",
    desc: "Personal capacitado para cuidar la carga y representar bien a tu empresa.",
  },
  {
    icon: Wrench,
    title: "Unidades listas",
    desc: "Revisión constante de la flotilla para mantener la operación activa.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    desc: "Cada envío se trata como una promesa que debe cumplirse.",
  },
  {
    icon: ClipboardCheck,
    title: "Orden operativo",
    desc: "Documentación, rutas y entregas con procesos claros.",
  },
  {
    icon: Sparkles,
    title: "Actitud de servicio",
    desc: "Un equipo atento, resolutivo y disponible para apoyar.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative overflow-hidden px-6 py-28">
      <div className="absolute left-1/2 top-10 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <Users className="h-3.5 w-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-ink-800">
              Equipo LMR
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl text-ink-900">
            Personas que hacen que{" "}
            <span className="gradient-text">tu envío avance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-700">
            En LMR combinamos atención, coordinación y operación para que cada
            movimiento tenga seguimiento real y una respuesta clara.
          </p>
        </motion.div>

        {/* Equipo image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 -mx-6 md:-mx-10 lg:-mx-14"
        >
          <div className="relative w-full overflow-hidden rounded-none md:rounded-3xl border-y md:border border-ink-600/15">
            <Image
              src={equipoImage}
              alt="Equipo LMR"
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4">
          {TEAM_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-ink-600/15 bg-white p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-ink-900 shadow-lg shadow-brand-500/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-ink-600/15 bg-white p-8 md:p-10"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
                Trabajo coordinado
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold md:text-5xl text-ink-900">
                Un equipo alineado con tus tiempos
              </h3>
              <p className="mt-5 text-ink-700 leading-relaxed">
                Nuestro trabajo no termina al cargar la unidad. El equipo de LMR
                acompaña cada servicio con comunicación, control de ruta y
                atención a los detalles que hacen la diferencia en logística.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-ink-600/15 bg-white p-5"
                >
                  <div className="flex gap-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-brand-400" />
                    <div>
                      <h4 className="font-display text-lg font-bold text-ink-900">{value.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
