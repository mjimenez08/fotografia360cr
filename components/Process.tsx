"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IconMessage, IconCamera, IconGear, IconRocket } from "@/components/Icons";

const STEPS = [
  {
    Icon: IconMessage,
    num: "01",
    title: "Consulta y Cotización",
    body: "Cuéntanos sobre tu proyecto. Analizamos el espacio, el objetivo y te damos una cotización clara en menos de 24 horas.",
  },
  {
    Icon: IconCamera,
    num: "02",
    title: "Sesión Fotográfica",
    body: "Agendamos la visita a tu conveniencia. Usamos cámara Insta360 X4 5.7K para capturar cada detalle con la máxima calidad.",
  },
  {
    Icon: IconGear,
    num: "03",
    title: "Edición y Procesamiento",
    body: "Procesamos las imágenes, aplicamos corrección de color y ensamblamos el tour virtual en nuestra plataforma profesional.",
  },
  {
    Icon: IconRocket,
    num: "04",
    title: "Entrega Final",
    body: "Recibes un enlace listo para compartir en 3–5 días hábiles. Para inspecciones de obra, incluye reporte técnico completo.",
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section
      id="proceso"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--cream2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16 reveal d1">
          <span className="gold-line" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            ¿Cómo funciona?
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--ink)" }}
          >
            Proceso{" "}
            <em className="font-semibold" style={{ color: "var(--gold)" }}>simple y transparente</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal d${i + 2} group relative p-8 rounded-sm overflow-hidden`}
              style={{ background: "var(--cream)", border: "1px solid rgba(107,101,96,0.12)" }}
            >
              <span
                className="absolute top-4 right-6 font-cormorant font-bold select-none leading-none"
                style={{ fontSize: "6rem", color: "rgba(168,137,90,0.06)", lineHeight: 1 }}
              >
                {step.num}
              </span>

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: "rgba(168,137,90,0.1)",
                  border: "1px solid rgba(168,137,90,0.25)",
                  color: "var(--gold)",
                }}
              >
                <step.Icon size={20} />
              </div>

              <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                Paso {step.num}
              </p>
              <h3 className="font-cormorant font-semibold text-2xl mb-3" style={{ color: "var(--ink)" }}>
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--stone)" }}>
                {step.body}
              </p>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "var(--gold)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
