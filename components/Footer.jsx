"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

import logoImage from "../logo/logo_lmr.jpg";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-ink-600/20 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Logo */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-20 h-20 overflow-hidden rounded-xl">
              <Image
                src={logoImage}
                alt="LMR Mensajería y Logística"
                className="w-full h-full object-contain"
                sizes="80px"
              />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lmr.mx?igsh=MW9sNXNhdTFybGdlMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-white/70 hover:bg-brand-400/20 hover:text-brand-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1B3W923XeE/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-white/70 hover:bg-brand-400/20 hover:text-brand-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Servicios
              </h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Mensajería local</a></li>
                <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Paquetería estatal</a></li>
                <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Carga consolidada</a></li>
                <li><a href="#equipo" className="hover:text-brand-400 transition-colors">Logística empresarial</a></li>
                <li><a href="#seguir" className="hover:text-brand-400 transition-colors">Rastreo de envíos</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Compañía
              </h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#experiencia" className="hover:text-brand-400 transition-colors">Nosotros</a></li>
                <li><a href="#cobertura" className="hover:text-brand-400 transition-colors">Cobertura</a></li>
                <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} LMR Mensajería y Logística. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 hover:text-brand-400 transition-colors"
          >
            Volver arriba
            <span className="w-8 h-8 rounded-full bg-ink-800 flex items-center justify-center group-hover:bg-brand-400/20 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
