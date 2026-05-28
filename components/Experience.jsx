"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Truck, Users, Globe2, ShieldCheck, Sparkles } from "lucide-react";

const MILESTONES = [
  {
    year: "2014",
    title: "Inicio del camino",
    desc: "LMR nace con 2 vans y una visión: entregar a tiempo, siempre.",
  },
  {
    year: "2017",
    title: "Expansión regional",
    desc: "Abrimos hubs en Guadalajara y Monterrey. Cobertura en 10 estados.",
  },
  {
    year: "2020",
    title: "Logística inteligente",
    desc: "Plataforma de rastreo en tiempo real y optimización por IA.",
  },
  {
    year: "2023",
    title: "Cobertura nacional",
    desc: "32 estados conectados. Más de 500k entregas anuales.",
  },
  {
    year: "2026",
    title: "El futuro",
    desc: "Flota eléctrica, drones para última milla y entregas el mismo día.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Seguridad",
    desc: "GPS en cada unidad y seguro de carga incluido.",
  },
  {
    icon: Sparkles,
    title: "Puntualidad",
    desc: "99.4% de entregas a tiempo verificadas.",
  },
  {
    icon: Globe2,
    title: "Cobertura",
    desc: "32 estados, 120+ ciudades, sin fronteras internas.",
  },
  {
    icon: Award,
    title: "Calidad",
    desc: "Certificación ISO 9001 en operación logística.",
  },
];

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString("es-MX"));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, to, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, to, motionVal]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Award className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              12+ años de experiencia
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Una historia de{" "}
            <span className="gradient-text">entregas</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Más de una década llevando lo importante a su destino.
          </p>
        </motion.div>

        {/* Big counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-5xl mx-auto">
          {[
            { value: 12, suffix: "+", label: "Años operando", icon: Award },
            { value: 500000, suffix: "+", label: "Envíos al año", icon: Truck },
            { value: 1200, suffix: "+", label: "Clientes activos", icon: Users },
            { value: 99, suffix: "%", label: "Puntualidad", icon: ShieldCheck },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 text-center group hover:bg-white/5 transition-colors"
              >
                <Icon className="w-6 h-6 text-brand-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-2">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-400 via-brand-500 to-transparent origin-top"
          />

          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year side */}
                <div className={`hidden md:block flex-1 ${
                  i % 2 === 0 ? "text-right" : "text-left"
                }`}>
                  <div className="font-display text-5xl font-black gradient-text">
                    {m.year}
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center border-2 border-brand-500/50">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-brand-400/30"
                    />
                    <span className="md:hidden font-display font-bold text-sm gradient-text">
                      {m.year}
                    </span>
                    <Truck className="hidden md:block w-6 h-6 text-brand-400" />
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                  <h3 className="font-display text-xl font-bold mb-1">
                    {m.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative glass rounded-2xl p-6 overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors" />
                <Icon className="w-8 h-8 text-brand-400 mb-3 relative" />
                <h4 className="font-display font-bold text-lg mb-1 relative">
                  {v.title}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed relative">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
