"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Building2, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../image/1.JPG";
import img2 from "../image/2.JPG";
import img3 from "../image/3.JPG";
import img4 from "../image/4.JPG";
import img5 from "../image/5.JPG";
import img6 from "../image/6.JPG";
import img7 from "../image/7.JPG";
import img8 from "../image/8.JPG";

const GALLERY = [img1, img2, img3, img4, img5, img6, img7, img8];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Llámanos",
    value: "614 119 1420",
    detail: "Lun a Sáb · 8am - 8pm",
    href: "tel:+526141191420",
  },
  {
    icon: Mail,
    label: "Escríbenos",
    value: "ventas@lmrglobaltransport.com",
    detail: "Respuesta < 1h hábil",
    href: "mailto:ventas@lmrglobaltransport.com",
  },
  {
    icon: MapPin,
    label: "Hub principal",
    value: "Chihuahua, Chih.",
    detail: "Matriz en la ciudad de Chihuahua",
    href: "#cobertura",
  },
  {
    icon: Building2,
    label: "Cuenta empresarial",
    value: "Volúmenes desde 50 envíos/mes",
    detail: "Tarifas preferentes",
    href: "#contacto",
  },
];

export default function Contact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % GALLERY.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + GALLERY.length) % GALLERY.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % GALLERY.length);
  };

  return (
    <section id="contacto" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-600/5 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl text-ink-900">
            Contáctanos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-700">
            Estamos listos para ser tu socio logístico. Conversemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {CONTACT_INFO.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.a
                  key={i}
                  href={it.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 glass rounded-2xl p-6 hover:bg-ink-600/10 transition-colors"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-400 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-ink-900" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-ink-700 mb-1">
                      {it.label}
                    </div>
                    <div className="font-semibold text-lg text-ink-900 truncate">
                      {it.value}
                    </div>
                    <div className="text-sm text-ink-700 mt-1">
                      {it.detail}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Columna derecha - Galería carrusel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-ink-600/15 bg-white aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={GALLERY[current]}
                    alt={`LMR Galería ${current + 1}`}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controles */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-ink-900" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-ink-900" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {GALLERY.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-brand-400" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
