"use client";

import { motion } from "framer-motion";
import { Truck, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/80">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Truck className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-lg font-bold">
                  <span className="gradient-text">LMR</span> Mensajería
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  & Logística
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              Más de 12 años conectando México con entregas confiables, rastreo
              en tiempo real y una flota moderna que cuida tu carga.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-500/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Mensajería local</a></li>
              <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Paquetería nacional</a></li>
              <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Carga consolidada</a></li>
              <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Logística empresarial</a></li>
              <li><a href="#seguir" className="hover:text-brand-400 transition-colors">Rastreo de envíos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Compañía
            </h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#experiencia" className="hover:text-brand-400 transition-colors">Nosotros</a></li>
              <li><a href="#cobertura" className="hover:text-brand-400 transition-colors">Cobertura</a></li>
              <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} LMR Mensajería y Logística. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 hover:text-brand-400 transition-colors"
          >
            Volver arriba
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
