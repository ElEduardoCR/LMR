"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Building2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 4000);
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contacto" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Estamos para servirte
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Hablemos de tu <span className="gradient-text">envío</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Cuéntanos qué necesitas y te respondemos en menos de 1 hora hábil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
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
                detail: "Cobertura nacional desde el norte",
                href: "#cobertura",
              },
              {
                icon: Building2,
                label: "Cuenta empresarial",
                value: "Volúmenes desde 50 envíos/mes",
                detail: "Tarifas preferentes",
                href: "#contacto",
              },
            ].map((it, i) => {
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
                  className="flex items-start gap-4 glass rounded-2xl p-5 hover:bg-white/5 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/10 border border-brand-500/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-white/50 mb-0.5">
                      {it.label}
                    </div>
                    <div className="font-semibold text-white truncate">
                      {it.value}
                    </div>
                    <div className="text-sm text-white/50 mt-0.5">
                      {it.detail}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/10 rounded-full blur-3xl" />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-white/60">
                      Te contactamos en menos de 1 hora hábil.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 relative"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        label="Nombre"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Tu nombre"
                        required
                      />
                      <Field
                        label="Correo"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="tu@empresa.com"
                        required
                      />
                    </div>
                    <Field
                      label="Empresa (opcional)"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Nombre de tu empresa"
                    />
                    <Field
                      label="Mensaje"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Cuéntanos sobre tu envío o necesidad..."
                      textarea
                    />

                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 font-semibold text-base shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-shadow"
                    >
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </motion.button>

                    <p className="text-xs text-white/40 text-center">
                      Al enviar aceptas nuestra política de privacidad.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea = false, required = false }) {
  return (
    <label className="block group">
      <span className="block text-xs uppercase tracking-wider text-white/50 mb-2">
        {label} {required && <span className="text-brand-400">*</span>}
      </span>
      <div className="relative">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-brand-500/0 to-brand-500/0 group-focus-within:from-brand-500/40 group-focus-within:to-brand-600/40 transition-all" />
        {textarea ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={4}
            className="relative w-full px-4 py-3 rounded-xl bg-ink-700/60 border border-white/10 focus:border-brand-500/50 outline-none text-white placeholder:text-white/30 resize-none transition-colors"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="relative w-full px-4 py-3 rounded-xl bg-ink-700/60 border border-white/10 focus:border-brand-500/50 outline-none text-white placeholder:text-white/30 transition-colors"
          />
        )}
      </div>
    </label>
  );
}
