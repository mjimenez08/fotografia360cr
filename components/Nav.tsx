"use client";

import { useEffect, useState } from "react";
import { waLink, CONTACT } from "@/lib/constants";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#12100E]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-cormorant text-2xl font-semibold tracking-wide"
          style={{ color: "var(--gold-lt)" }}
        >
          Fotografía<span className="text-white opacity-70 text-lg align-super ml-0.5">360</span>
          <span className="text-white font-light"> CR</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wider uppercase text-white/70 hover:text-[var(--gold-lt)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waLink(CONTACT.whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105"
          style={{
            background: "var(--gold)",
            color: "var(--ink)",
          }}
        >
          <span className="hidden sm:inline">Cotizar</span>
          <span className="sm:hidden">📩</span>
        </a>
      </div>
    </nav>
  );
}
