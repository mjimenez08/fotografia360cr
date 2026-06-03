"use client";

import { useState } from "react";
import { CONTACT, waLink } from "@/lib/constants";
import { IconWhatsApp, IconEmail, IconFacebook, IconMap } from "@/components/Icons";

const SERVICE_OPTIONS = [
  "Fotografía 360° Inmobiliaria",
  "Fotografía 360° Comercial",
  "Tour Virtual Interactivo",
  "Videos 360° Estáticos",
  "Videos 360° en Movimiento",
  "Inspección de Obra — Básico",
  "Inspección de Obra — Tour",
  "Inspección de Obra — Profesional",
  "Consulta general",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      // TODO: conectar con EmailJS, Resend o Formspree
      alert(`¡Gracias, ${form.name}! Recibimos tu mensaje y te contactaremos pronto a ${form.email}.`);
      setForm({ name: "", email: "", service: "", message: "" });
    }, 800);
  };

  const inputStyle = {
    background: "rgba(247,243,238,0.05)",
    border: "1px solid rgba(168,137,90,0.25)",
    color: "var(--cream)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.9rem",
    fontFamily: "var(--font-jost)",
    outline: "none",
    transition: "border-color 0.2s",
  } as const;

  const contactCards = [
    {
      Icon: IconWhatsApp,
      label: "WhatsApp",
      primary: "+506 6405-9780",
      secondary: "Respuesta inmediata en horario hábil",
      href: waLink(CONTACT.whatsappMsg),
      external: true,
    },
    {
      Icon: IconEmail,
      label: "Correo",
      primary: CONTACT.email,
      secondary: "Para solicitudes formales y cotizaciones",
      href: `mailto:${CONTACT.email}`,
      external: false,
    },
    {
      Icon: IconFacebook,
      label: "Facebook",
      primary: "Fotografía 360 CR",
      secondary: "Síguenos para ver nuestros últimos proyectos",
      href: CONTACT.facebook,
      external: true,
    },
  ];

  return (
    <section id="contacto" className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="gold-line" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Hablemos
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)" }}
          >
            Solicita tu{" "}
            <em className="font-semibold" style={{ color: "var(--gold-lt)" }}>cotización</em>
          </h2>
          <p className="mt-4 text-base font-light" style={{ color: "var(--stone)" }}>
            Respuesta garantizada en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* ── Formulario ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase" style={{ color: "var(--stone)" }}>Nombre *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre" style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wider uppercase" style={{ color: "var(--stone)" }}>Correo *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="tu@correo.com" style={inputStyle} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-wider uppercase" style={{ color: "var(--stone)" }}>Servicio de interés</label>
              <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                <option value="" style={{ background: "var(--ink2)", color: "var(--cream)" }}>Selecciona un servicio</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} style={{ background: "var(--ink2)", color: "var(--cream)" }}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-wider uppercase" style={{ color: "var(--stone)" }}>Mensaje *</label>
              <textarea
                name="message" required rows={5} value={form.message} onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto, ubicación, dimensiones aproximadas..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit" disabled={sending}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed rounded-sm"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              {sending ? "Enviando…" : "Enviar solicitud →"}
            </button>
          </form>

          {/* ── Información de contacto ── */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 p-6 rounded-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "rgba(247,243,238,0.04)", border: "1px solid rgba(168,137,90,0.2)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(168,137,90,0.15)", border: "1px solid rgba(168,137,90,0.3)", color: "var(--gold-lt)" }}
                >
                  <card.Icon size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{card.label}</p>
                  <p className="font-medium" style={{ color: "var(--cream)" }}>{card.primary}</p>
                  <p className="text-xs" style={{ color: "var(--stone)" }}>{card.secondary}</p>
                </div>
              </a>
            ))}

            {/* Cobertura */}
            <div
              className="p-6 rounded-sm flex items-start gap-5"
              style={{ background: "rgba(168,137,90,0.06)", border: "1px solid rgba(168,137,90,0.15)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(168,137,90,0.12)", border: "1px solid rgba(168,137,90,0.25)", color: "var(--gold-lt)" }}
              >
                <IconMap size={20} />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Cobertura</p>
                <p className="text-sm font-light" style={{ color: "var(--stone)" }}>
                  Atendemos proyectos en todo Costa Rica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
