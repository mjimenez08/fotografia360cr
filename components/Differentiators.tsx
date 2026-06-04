"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IconBolt, IconCamera, IconBuilding, IconHandshake } from "@/components/Icons";

const DIFFERENTIATORS = [
  {
    Icon: IconBolt,
    title: "Entrega en 3–5 días hábiles",
    body: "Desde la sesión hasta el enlace listo para compartir. Sin demoras, con calidad garantizada.",
  },
  {
    Icon: IconCamera,
    title: "Tecnología de punta",
    body: "Los mejores equipos del mercado para resultados excepcionales en cada proyecto.",
  },
  {
    Icon: IconBuilding,
    title: "Ingeniería certificada CFIA",
    body: "Para inspecciones de obra, contamos con ingenieros inscritos al Colegio Federado de Ingenieros y Arquitectos.",
  },
  {
    Icon: IconHandshake,
    title: "Soporte post-entrega",
    body: "Acompañamos tu proyecto después de la entrega. Ajustes, actualizaciones y consultas sin costo adicional.",
  },
];

export default function Differentiators() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16 reveal d1">
          <span className="gold-line" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            ¿Por qué nosotros?
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--ink)" }}
          >
            Lo que nos{" "}
            <em className="font-semibold" style={{ color: "var(--gold)" }}>diferencia</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={i}
              className={`reveal d${i + 2} group flex gap-6 p-8 rounded-sm`}
              style={{ background: "var(--cream2)", border: "1px solid rgba(107,101,96,0.12)" }}
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(168,137,90,0.1)",
                  border: "1px solid rgba(168,137,90,0.25)",
                  color: "var(--gold)",
                }}
              >
                <d.Icon size={22} />
              </div>
              <div>
                <h3
                  className="font-cormorant font-semibold text-xl mb-2 group-hover:text-[var(--gold)] transition-colors duration-300"
                  style={{ color: "var(--ink)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--stone)" }}>
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
