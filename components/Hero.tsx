import Image from "next/image";
import { waLink, CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.1) 2px,rgba(255,255,255,0.1) 3px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ── Left column ── */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-10 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Costa Rica
            </span>
          </div>

          <h1
            className="font-cormorant font-light leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "var(--cream)" }}
          >
            Fotografía
            <br />
            <em className="font-semibold not-italic" style={{ color: "var(--gold-lt)" }}>
              360°
            </em>{" "}
            <span className="font-light opacity-80">CR</span>
          </h1>

          <p
            className="text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--stone)" }}
          >
            Tours virtuales inmersivos, fotografía inmobiliaria y
            <em style={{ color: "var(--gold-lt)" }}> inspección de obra</em> para
            Costa Rica. Entrega en{" "}
            <strong style={{ color: "var(--cream)" }}>3–5 días hábiles</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waLink(CONTACT.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-sm"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              <span>💬</span> Cotizar ahora
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-3 px-8 py-4 font-medium tracking-wider uppercase text-sm border transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold-lt)] rounded-sm"
              style={{
                borderColor: "rgba(168,137,90,0.4)",
                color: "var(--cream)",
              }}
            >
              Ver portafolio
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              { num: "3–5", label: "días de entrega" },
              { num: "360°", label: "fotografía esférica" },
              { num: "CFIA", label: "ingeniería certificada" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-cormorant font-semibold text-2xl"
                  style={{ color: "var(--gold-lt)" }}
                >
                  {s.num}
                </div>
                <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: "var(--stone)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column (image) ── */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed animate-spin-slow"
              style={{
                borderColor: "rgba(168,137,90,0.25)",
                transform: "scale(1.18)",
              }}
            />
            {/* Second ring */}
            <div
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: "rgba(168,137,90,0.12)",
                transform: "scale(1.35)",
              }}
            />

            {/* Image */}
            <div
              className="relative w-[420px] h-[420px] rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(168,137,90,0.35)",
                boxShadow: "0 0 80px rgba(168,137,90,0.12)",
              }}
            >
              <Image
                src="/hero-360.jpeg"
                alt="Fotografía 360° — Tour virtual estudio de pilates en Costa Rica"
                fill
                priority
                className="object-cover"
                sizes="420px"
              />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 text-xs font-medium tracking-widest uppercase rounded-full whitespace-nowrap"
              style={{
                background: "var(--ink2)",
                border: "1px solid rgba(168,137,90,0.4)",
                color: "var(--gold-lt)",
              }}
            >
              Fotografía 360° CR
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--stone)" }}>
          Explorar
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />
      </div>
    </section>
  );
}
