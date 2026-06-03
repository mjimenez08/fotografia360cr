"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { INDUSTRIES } from "@/lib/constants";

export default function Audience() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--cream2)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal d1">
          <span className="gold-line" />
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            ¿Para quién?
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--ink)" }}
          >
            Industrias que{" "}
            <em className="font-semibold" style={{ color: "var(--gold)" }}>
              transformamos
            </em>
          </h2>
          <p className="mt-4 text-base font-light" style={{ color: "var(--stone)" }}>
            Trabajamos con negocios de todos los sectores que quieren destacar en el mundo digital.
          </p>
        </div>

        {/* Grid 4×2 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: "rgba(107,101,96,0.15)" }}>
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.num}
              className={`reveal d${Math.min(i + 1, 8)} group relative p-8 flex flex-col justify-between overflow-hidden`}
              style={{ background: "var(--cream)", minHeight: "160px" }}
            >
              {/* Decorative number */}
              <span
                className="font-cormorant font-bold leading-none select-none transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  color: "rgba(168,137,90,0.08)",
                  lineHeight: 1,
                }}
              >
                {ind.num}
              </span>

              {/* Label */}
              <div>
                <div
                  className="w-6 h-px mb-3 transition-all duration-300 group-hover:w-10"
                  style={{ background: "var(--gold)" }}
                />
                <p
                  className="font-medium text-base tracking-wide transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{ color: "var(--ink2)" }}
                >
                  {ind.label}
                </p>
              </div>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--gold)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
