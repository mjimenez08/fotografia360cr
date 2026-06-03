"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Card =
  | { type: "iframe"; title: string; subtitle: string; src: string }
  | { type: "thumb"; title: string; subtitle: string; href: string; img: string; badge?: string }
  | { type: "placeholder"; title: string; subtitle: string };

const CARDS: Card[] = [
  {
    type: "iframe",
    title: "Tour Virtual Inmobiliario",
    subtitle: "Recorrido interactivo 360°",
    src: "https://tour.panoee.net/6979907f644d2fca163dbe08",
  },
  {
    type: "thumb",
    title: "Estudio de Pilates",
    subtitle: "Fotografía 360° interior",
    href: "https://cloud-va.insta360.com/share/va/339H0Z55017S9x5F1082704896",
    img: "/hero-360.jpeg",
  },
  { type: "placeholder", title: "Próximamente", subtitle: "Nuevo proyecto en preparación" },
  { type: "placeholder", title: "Próximamente", subtitle: "Nuevo proyecto en preparación" },
  { type: "placeholder", title: "Próximamente", subtitle: "Nuevo proyecto en preparación" },
  { type: "placeholder", title: "Próximamente", subtitle: "Nuevo proyecto en preparación" },
];

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section
      id="portafolio"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16 reveal d1">
          <span className="gold-line" />
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Nuestro trabajo
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)" }}
          >
            Portafolio{" "}
            <em className="font-semibold" style={{ color: "var(--gold-lt)" }}>360°</em>
          </h2>
          <p className="mt-4 text-base font-light" style={{ color: "var(--stone)" }}>
            Explora nuestros proyectos. Haz clic para ver la experiencia completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => {
            const delay = `d${Math.min(i + 2, 8)}`;

            if (card.type === "iframe") {
              return (
                <div
                  key={i}
                  className={`reveal ${delay} portfolio-card portfolio-card-static rounded-sm overflow-hidden`}
                  style={{ border: "1px solid rgba(168,137,90,0.18)" }}
                >
                  <div className="iframe-wrap">
                    <iframe src={card.src} title={card.title} allowFullScreen />
                  </div>
                  <div className="px-5 py-4" style={{ background: "var(--ink2)" }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{card.subtitle}</p>
                    <h3 className="font-cormorant font-semibold text-lg" style={{ color: "var(--cream)" }}>{card.title}</h3>
                  </div>
                </div>
              );
            }

            if (card.type === "thumb") {
              return (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal ${delay} portfolio-card block rounded-sm overflow-hidden group`}
                  style={{ border: "1px solid rgba(168,137,90,0.18)" }}
                >
                  <div className="relative overflow-hidden" style={{ paddingBottom: "62.5%" }}>
                    <Image
                      src={card.img} alt={card.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(18,16,14,0.6)" }}
                    >
                      <span
                        className="text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
                        style={{ background: "var(--gold)", color: "var(--ink)" }}
                      >
                        Ver tour →
                      </span>
                    </div>
                    {card.badge && (
                      <span
                        className="absolute top-3 left-3 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                        style={{ background: "var(--gold)", color: "var(--ink)" }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <div className="px-5 py-4" style={{ background: "var(--ink2)" }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{card.subtitle}</p>
                    <h3 className="font-cormorant font-semibold text-lg" style={{ color: "var(--cream)" }}>{card.title}</h3>
                  </div>
                </a>
              );
            }

            return (
              <div
                key={i}
                className={`reveal ${delay} rounded-sm overflow-hidden flex flex-col items-center justify-center`}
                style={{
                  border: "1px dashed rgba(168,137,90,0.2)",
                  background: "rgba(42,39,36,0.4)",
                  minHeight: "280px",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(168,137,90,0.08)", border: "1px dashed rgba(168,137,90,0.2)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22" style={{ color: "rgba(168,137,90,0.4)" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="font-cormorant text-xl font-light" style={{ color: "var(--stone)" }}>{card.title}</p>
                <p className="text-xs tracking-wider mt-1" style={{ color: "rgba(107,101,96,0.6)" }}>{card.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
