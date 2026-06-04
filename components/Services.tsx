"use client";

import { useState } from "react";
import { SERVICES, WA_MESSAGES, waLink } from "@/lib/constants";
import { IconWhatsApp, IconCheck } from "@/components/Icons";

function IconBenefit() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section id="servicios" className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="gold-line" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Lo que hacemos
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)" }}
          >
            Nuestros{" "}
            <em className="font-semibold" style={{ color: "var(--gold-lt)" }}>servicios</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {SERVICES.map((svc) => {
            const isOpen = open === svc.id;
            return (
              <div
                key={svc.id}
                className="overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(168,137,90,0.18)" }}
              >
                {/* ── Header ── */}
                <button
                  className="svc-header w-full text-left relative overflow-hidden focus:outline-none"
                  onClick={() => toggle(svc.id)}
                  aria-expanded={isOpen}
                >
                  <div className={`svc-header-bg absolute inset-0 bg-gradient-to-r ${svc.gradientClass}`} />
                  <div className="relative z-10 px-8 py-6 flex items-center justify-between gap-4">
                    <div className="flex items-start gap-6">
                      <span
                        className="font-cormorant font-bold text-4xl leading-none shrink-0 hidden sm:block"
                        style={{ color: "rgba(168,137,90,0.45)" }}
                      >
                        {svc.num}
                      </span>
                      <div>
                        <span
                          className="inline-block text-xs font-medium tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2"
                          style={{
                            background: "rgba(168,137,90,0.18)",
                            color: "var(--gold-lt)",
                            border: "1px solid rgba(168,137,90,0.3)",
                          }}
                        >
                          {svc.tag}
                        </span>
                        <h3
                          className="font-cormorant font-semibold leading-tight mb-1"
                          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "var(--cream)" }}
                        >
                          {svc.title}
                        </h3>
                        <p className="text-sm italic font-light" style={{ color: "var(--stone)" }}>
                          {svc.slogan}
                        </p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-2xl transition-transform duration-300 font-thin"
                      style={{
                        color: "var(--gold)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* ── Body ── */}
                <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                  <div className="accordion-inner">
                    <div className="px-8 py-8" style={{ background: "var(--ink2)" }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left: description + features */}
                        <div>
                          <p className="text-base font-light leading-relaxed mb-6" style={{ color: "var(--stone)" }}>
                            {svc.description}
                          </p>
                          <ul className="space-y-2">
                            {svc.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span style={{ color: "var(--gold)", marginTop: "3px" }} className="shrink-0">
                                  <IconCheck size={14} />
                                </span>
                                <span className="text-sm font-light" style={{ color: "var(--cream2)" }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: benefits */}
                        <div>
                          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
                            Beneficios clave
                          </p>
                          <div className="space-y-3 mb-8">
                            {svc.benefits.map((b, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-sm"
                                style={{ background: "rgba(247,243,238,0.04)" }}
                              >
                                <span
                                  className="shrink-0 mt-0.5"
                                  style={{ color: "var(--gold)" }}
                                >
                                  <IconBenefit />
                                </span>
                                <span className="text-sm font-light" style={{ color: "var(--cream2)" }}>{b}</span>
                              </div>
                            ))}
                          </div>

                          {!svc.packages && (
                            <a
                              href={waLink(WA_MESSAGES[svc.waKey])}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105"
                              style={{ background: "var(--gold)", color: "var(--ink)" }}
                            >
                              <IconWhatsApp size={16} />
                              Cotizar este servicio
                            </a>
                          )}
                        </div>
                      </div>

                      {/* ── Packages (svc6 only) ── */}
                      {svc.packages && (
                        <div className="mt-10">
                          <div className="w-full h-px mb-8" style={{ background: "rgba(168,137,90,0.2)" }} />
                          <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>
                            Paquetes disponibles
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {svc.packages.map((pkg) => (
                              <div
                                key={pkg.waKey}
                                className="relative flex flex-col rounded-sm p-6"
                                style={{
                                  background: "var(--ink)",
                                  border: pkg.badge
                                    ? "1px solid rgba(168,137,90,0.5)"
                                    : "1px solid rgba(168,137,90,0.15)",
                                }}
                              >
                                {pkg.badge && (
                                  <span
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                                    style={{ background: "var(--gold)", color: "var(--ink)" }}
                                  >
                                    {pkg.badge}
                                  </span>
                                )}
                                <h4 className="font-cormorant font-semibold text-xl mb-2" style={{ color: "var(--gold-lt)" }}>
                                  {pkg.name}
                                </h4>
                                <p className="text-xs font-light mb-4" style={{ color: "var(--stone)" }}>
                                  {pkg.description}
                                </p>
                                <ul className="space-y-2 flex-1 mb-6">
                                  {pkg.includes.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm font-light" style={{ color: "var(--cream2)" }}>
                                      <span style={{ color: "var(--gold)", marginTop: "3px" }} className="shrink-0">
                                        <IconCheck size={13} />
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                                <a
                                  href={waLink(WA_MESSAGES[pkg.waKey])}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105"
                                  style={{
                                    background: pkg.badge ? "var(--gold)" : "rgba(168,137,90,0.15)",
                                    color: pkg.badge ? "var(--ink)" : "var(--gold-lt)",
                                    border: pkg.badge ? "none" : "1px solid rgba(168,137,90,0.3)",
                                  }}
                                >
                                  <IconWhatsApp size={14} />
                                  Cotizar
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
