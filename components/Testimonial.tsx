export default function Testimonial() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink2)" }}
    >
      {/* Decorative quote marks */}
      <div
        className="absolute top-8 left-12 font-cormorant font-bold select-none leading-none"
        style={{ fontSize: "12rem", color: "rgba(168,137,90,0.06)", lineHeight: 1 }}
      >
        "
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="gold-line mx-auto mb-8" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />

        <blockquote
          className="font-cormorant font-light italic leading-relaxed mb-8"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "var(--cream)",
            lineHeight: 1.5,
          }}
        >
          "Contraté el servicio para mi proyecto inmobiliario y el resultado superó todas mis expectativas.
          El tour virtual aumentó el interés de compradores potenciales significativamente.
          Entrega puntual y atención excelente."
        </blockquote>

        <div className="flex flex-col items-center gap-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-cormorant font-semibold text-lg"
            style={{ background: "var(--gold)", color: "var(--ink)" }}
          >
            M
          </div>
          <p className="font-medium text-sm" style={{ color: "var(--gold-lt)" }}>
            María Fernández
          </p>
          <p className="text-xs tracking-wider uppercase" style={{ color: "var(--stone)" }}>
            Agente Inmobiliaria — San José, Costa Rica
          </p>
        </div>
      </div>
    </section>
  );
}
