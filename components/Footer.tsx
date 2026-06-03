import { CONTACT, waLink } from "@/lib/constants";
import { IconWhatsApp, IconEmail, IconFacebook } from "@/components/Icons";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

const CONTACT_LINKS = [
  { Icon: IconWhatsApp, label: "+506 6405-9780", href: waLink(CONTACT.whatsappMsg), external: true },
  { Icon: IconEmail, label: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  { Icon: IconFacebook, label: "Fotografía 360 CR", href: CONTACT.facebook, external: true },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink2)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-cormorant text-2xl font-semibold tracking-wide" style={{ color: "var(--gold-lt)" }}>
              Fotografía<span className="text-white opacity-70 text-lg align-super ml-0.5">360</span>
              <span className="text-white font-light"> CR</span>
            </a>
            <p className="mt-4 text-sm font-light leading-relaxed max-w-xs" style={{ color: "var(--stone)" }}>
              Tours virtuales 360°, fotografía inmobiliaria e inspección de obra en Costa Rica.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold)" }}>Navegación</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-light hover:text-[var(--gold-lt)] transition-colors duration-200"
                    style={{ color: "var(--stone)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold)" }}>Contacto</p>
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2.5 text-sm font-light hover:text-[var(--gold-lt)] transition-colors duration-200"
                  style={{ color: "var(--stone)" }}
                >
                  <span style={{ color: "var(--gold)", opacity: 0.7 }}>
                    <c.Icon size={15} />
                  </span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(107,101,96,0.2)" }}
        >
          <p className="text-xs" style={{ color: "var(--stone)" }}>
            © {new Date().getFullYear()} Fotografía 360 Costa Rica. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(107,101,96,0.5)" }}>
            {CONTACT.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
