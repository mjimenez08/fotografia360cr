(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT",
    ()=>CONTACT,
    "DIFFERENTIATORS",
    ()=>DIFFERENTIATORS,
    "INDUSTRIES",
    ()=>INDUSTRIES,
    "SERVICES",
    ()=>SERVICES,
    "WA_MESSAGES",
    ()=>WA_MESSAGES,
    "waLink",
    ()=>waLink
]);
const CONTACT = {
    whatsapp: "50664059780",
    whatsappMsg: "Hola, me interesa cotizar un servicio de fotografía 360.",
    facebook: "https://www.facebook.com/profile.php?id=61588325744739",
    email: "info@fotografia360cr.com",
    domain: "https://www.fotografia360cr.com"
};
function waLink(msg) {
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}
const WA_MESSAGES = {
    svc1: "Hola, me interesa cotizar *Fotografía 360° Inmobiliaria*.",
    svc2: "Hola, me interesa cotizar *Fotografía 360° Comercial*.",
    svc3: "Hola, me interesa cotizar un *Tour Virtual Interactivo*.",
    svc4: "Hola, me interesa cotizar *Videos 360° Estáticos*.",
    svc5: "Hola, me interesa cotizar *Videos 360° en Movimiento*.",
    svc6: "Hola, me interesa cotizar *Inspección y Monitoreo de Obra*.",
    pkg1: "Hola, me interesa el *Paquete Básico de Inspección de Obra*.",
    pkg2: "Hola, me interesa el *Paquete Tour de Obra*.",
    pkg3: "Hola, me interesa el *Paquete Inspección Profesional*."
};
const SERVICES = [
    {
        id: "svc1",
        num: "01",
        title: "Fotografía 360° Inmobiliaria",
        slogan: "Vende más rápido con recorridos inmersivos",
        tag: "Inmobiliaria",
        gradientClass: "from-[#1a1208] via-[#2d1f0a] to-[#12100e]",
        description: "Capturamos cada rincón de tu propiedad en 360° para que los compradores la recorran virtualmente antes de visitar. Más consultas, menos tiempo en el mercado.",
        features: [
            "Fotografías esféricas de alta resolución",
            "Recorrido virtual navegable",
            "Compatible con dispositivos móviles y escritorio",
            "Entrega en 3–5 días hábiles",
            "Enlace compartible para portales inmobiliarios",
            "Soporte para propiedades residenciales y comerciales"
        ],
        benefits: [
            {
                icon: "🏠",
                text: "Mayor alcance en portales como OLX y Encuentra24"
            },
            {
                icon: "⏱️",
                text: "Reduce visitas innecesarias y acelera la toma de decisión"
            },
            {
                icon: "📈",
                text: "Propiedades con tour virtual reciben hasta 3× más consultas"
            },
            {
                icon: "🌐",
                text: "Comparte en redes sociales y WhatsApp con un clic"
            }
        ],
        waKey: "svc1"
    },
    {
        id: "svc2",
        num: "02",
        title: "Fotografía 360° Comercial",
        slogan: "Tu negocio siempre abierto al mundo",
        tag: "Comercial",
        gradientClass: "from-[#0e1a12] via-[#0a2d15] to-[#0a1a0e]",
        description: "Muestra tu restaurante, hotel, tienda o consultorio con una experiencia inmersiva que conquista clientes antes de que crucen la puerta. Ideal para Google My Business.",
        features: [
            "Fotografía interior y exterior 360°",
            "Optimizado para Google Street View",
            "Integración con Google My Business",
            "Imagen de marca profesional y diferenciada",
            "Archivos en alta resolución para múltiples usos",
            "Sesión en horario conveniente para tu negocio"
        ],
        benefits: [
            {
                icon: "📍",
                text: "Destaca en búsquedas de Google Maps"
            },
            {
                icon: "🛍️",
                text: "Genera confianza antes de la primera visita"
            },
            {
                icon: "📊",
                text: "Aumenta el tiempo de permanencia en tu perfil digital"
            },
            {
                icon: "🤳",
                text: "Contenido reutilizable para redes sociales"
            }
        ],
        waKey: "svc2"
    },
    {
        id: "svc3",
        num: "03",
        title: "Tour Virtual Interactivo",
        slogan: "Una experiencia que enamora desde la primera vista",
        tag: "Tour Virtual",
        gradientClass: "from-[#0e0e1a] via-[#141428] to-[#0a0a1a]",
        description: "Tours virtuales con puntos de información, música de fondo, planos de planta y llamadas a la acción integradas. La experiencia más completa del mercado costarricense.",
        features: [
            "Hotspots informativos interactivos",
            "Música de fondo personalizable",
            "Integración de plano de planta",
            "Botones CTA (cotizar, llamar, visitar)",
            "Branding con tu logo y colores",
            "Panel de estadísticas de visitas"
        ],
        benefits: [
            {
                icon: "🎯",
                text: "Experiencia inmersiva que diferencia tu marca"
            },
            {
                icon: "📋",
                text: "Planos interactivos para orientar al visitante"
            },
            {
                icon: "📲",
                text: "Funciona en VR, móvil y escritorio"
            },
            {
                icon: "📉",
                text: "Reduce costos de visitas presenciales"
            }
        ],
        waKey: "svc3"
    },
    {
        id: "svc4",
        num: "04",
        title: "Videos 360° Estáticos",
        slogan: "Impacto visual en cada plataforma digital",
        tag: "Video 360°",
        gradientClass: "from-[#1a0e0a] via-[#2d1a0e] to-[#1a0e08]",
        description: "Videos 360° grabados desde un punto fijo que permiten al espectador explorar el entorno completo. Perfectos para YouTube, Facebook y campañas de redes sociales.",
        features: [
            "Grabación en 5.7K ultra HD",
            "Edición y color grading profesional",
            "Exportación en formato equirectangular",
            "Optimizado para YouTube 360° y Facebook",
            "Duración personalizable (30 seg – 5 min)",
            "Música o narración opcional"
        ],
        benefits: [
            {
                icon: "🎬",
                text: "Contenido diferenciador en redes sociales"
            },
            {
                icon: "👁️",
                text: "Hasta 4× más visualizaciones que video convencional"
            },
            {
                icon: "🔁",
                text: "Reutilizable en múltiples campañas digitales"
            },
            {
                icon: "🏆",
                text: "Posiciona tu marca como innovadora y moderna"
            }
        ],
        waKey: "svc4"
    },
    {
        id: "svc5",
        num: "05",
        title: "Videos 360° en Movimiento",
        slogan: "Lleva a tu cliente en un viaje sin salir de su pantalla",
        tag: "Video Dinámico",
        gradientClass: "from-[#0a1a1a] via-[#0e2828] to-[#0a1a18]",
        description: "Recorridos cinematográficos 360° con la cámara en movimiento: caminatas, drones y vehículos. La forma más emocionante de mostrar espacios, rutas y destinos turísticos.",
        features: [
            "Grabación en movimiento con estabilización",
            "Opciones: walkthrough, drone, vehículo",
            "Resolución 5.7K con estabilización de imagen",
            "Edición narrativa profesional",
            "Transiciones y efectos visuales premium",
            "Entrega en múltiples formatos"
        ],
        benefits: [
            {
                icon: "✈️",
                text: "Ideal para turismo, hospitality y bienes raíces de lujo"
            },
            {
                icon: "🎢",
                text: "Experiencia inmersiva que genera emoción y deseo"
            },
            {
                icon: "📡",
                text: "Compatible con plataformas VR y gafas de realidad virtual"
            },
            {
                icon: "🌍",
                text: "Alcanza audiencias globales con contenido de alto impacto"
            }
        ],
        waKey: "svc5"
    },
    {
        id: "svc6",
        num: "06",
        title: "Inspección y Monitoreo de Obra",
        slogan: "Control total de tu proyecto desde cualquier lugar",
        tag: "Construcción",
        gradientClass: "from-[#1a1408] via-[#2a200a] to-[#1a1408]",
        description: "Documentación 360° periódica del avance de obras de construcción con reportes visuales detallados. Supervisión remota con respaldo legal y técnico.",
        features: [
            "Fotografías 360° georreferenciadas",
            "Reportes de avance semanales o quincenales",
            "Comparación visual antes/durante/después",
            "Acceso a plataforma en línea de seguimiento",
            "Respaldo documental para entidades financieras",
            "Ingeniería certificada e inscrita al CFIA"
        ],
        benefits: [
            {
                icon: "🏗️",
                text: "Supervisa tu obra sin desplazarte"
            },
            {
                icon: "📑",
                text: "Respaldo legal y técnico en cada visita"
            },
            {
                icon: "🔍",
                text: "Detecta discrepancias con planos a tiempo"
            },
            {
                icon: "💼",
                text: "Informes profesionales para inversionistas y bancos"
            }
        ],
        waKey: "svc6",
        packages: [
            {
                name: "Básico",
                description: "Ideal para proyectos residenciales pequeños",
                includes: [
                    "1 visita de inspección fotográfica 360°",
                    "Reporte visual del estado actual",
                    "Entrega en 48 horas",
                    "Galería en línea compartible"
                ],
                waKey: "pkg1"
            },
            {
                name: "Tour de Obra",
                badge: "El más elegido",
                description: "Para proyectos medianos con seguimiento periódico",
                includes: [
                    "4 visitas mensuales de inspección 360°",
                    "Comparativa visual mes a mes",
                    "Reporte ejecutivo con observaciones",
                    "Acceso a plataforma de seguimiento",
                    "Entrega en 24 horas por visita"
                ],
                waKey: "pkg2"
            },
            {
                name: "Inspección Profesional",
                description: "Supervisión técnica completa con respaldo de ingeniería",
                includes: [
                    "Todo lo del plan Tour de Obra",
                    "Ingeniero certificado e inscrito al CFIA",
                    "Dictamen técnico oficial por visita",
                    "Respaldo documental para entidades financieras",
                    "Análisis de conformidad con planos aprobados",
                    "Recomendaciones técnicas escritas"
                ],
                waKey: "pkg3"
            }
        ]
    }
];
const INDUSTRIES = [
    {
        num: "01",
        label: "Inmobiliarias"
    },
    {
        num: "02",
        label: "Hoteles & Turismo"
    },
    {
        num: "03",
        label: "Arquitectura"
    },
    {
        num: "04",
        label: "Retail & Comercios"
    },
    {
        num: "05",
        label: "Restaurantes & Cafés"
    },
    {
        num: "06",
        label: "Salud & Bienestar"
    },
    {
        num: "07",
        label: "Educación"
    },
    {
        num: "08",
        label: "Construcción"
    }
];
const DIFFERENTIATORS = [
    {
        icon: "⚡",
        title: "Entrega en 3–5 días hábiles",
        body: "Desde la sesión hasta el enlace listo para compartir. Sin demoras, con calidad garantizada."
    },
    {
        icon: "📷",
        title: "Tecnología de punta",
        body: "Cámara Insta360 X4 con resolución 5.7K. Los mejores equipos del mercado para resultados excepcionales."
    },
    {
        icon: "🏛️",
        title: "Ingeniería certificada CFIA",
        body: "Para inspecciones de obra, contamos con ingenieros inscritos al Colegio Federado de Ingenieros y Arquitectos."
    },
    {
        icon: "🤝",
        title: "Soporte post-entrega",
        body: "Acompañamos tu proyecto después de la entrega. Ajustes, actualizaciones y consultas sin costo adicional."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LINKS = [
    {
        href: "#servicios",
        label: "Servicios"
    },
    {
        href: "#proceso",
        label: "Proceso"
    },
    {
        href: "#portafolio",
        label: "Portafolio"
    },
    {
        href: "#contacto",
        label: "Contacto"
    }
];
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Nav.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#12100E]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3" : "bg-transparent py-5"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "font-cormorant text-2xl font-semibold tracking-wide",
                    style: {
                        color: "var(--gold-lt)"
                    },
                    children: [
                        "Fotografía",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white opacity-70 text-lg align-super ml-0.5",
                            children: "360"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-light",
                            children: " CR"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "hidden md:flex items-center gap-8",
                    children: LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                className: "text-sm font-medium tracking-wider uppercase text-white/70 hover:text-[var(--gold-lt)] transition-colors duration-200",
                                children: l.label
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, l.href, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].whatsappMsg),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105",
                    style: {
                        background: "var(--gold)",
                        color: "var(--ink)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Cotizar"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: "📩"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Nav.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Nav, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useScrollReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollReveal() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
            const observer = new IntersectionObserver({
                "useScrollReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "useScrollReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("is-visible");
                                observer.unobserve(entry.target);
                            }
                        }
                    }["useScrollReveal.useEffect"]);
                }
            }["useScrollReveal.useEffect"], {
                threshold: 0.08
            });
            targets.forEach({
                "useScrollReveal.useEffect": (t)=>observer.observe(t)
            }["useScrollReveal.useEffect"]);
            return ({
                "useScrollReveal.useEffect": ()=>observer.disconnect()
            })["useScrollReveal.useEffect"];
        }
    }["useScrollReveal.useEffect"], []);
    return ref;
}
_s(useScrollReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Audience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Audience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Audience() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-pad",
        style: {
            background: "var(--cream2)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16 reveal d1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Audience.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "¿Para quién?"
                        }, void 0, false, {
                            fileName: "[project]/components/Audience.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--ink)"
                            },
                            children: [
                                "Industrias que",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold)"
                                    },
                                    children: "transformamos"
                                }, void 0, false, {
                                    fileName: "[project]/components/Audience.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Audience.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base font-light",
                            style: {
                                color: "var(--stone)"
                            },
                            children: "Trabajamos con negocios de todos los sectores que quieren destacar en el mundo digital."
                        }, void 0, false, {
                            fileName: "[project]/components/Audience.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Audience.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-px",
                    style: {
                        background: "rgba(107,101,96,0.15)"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDUSTRIES"].map((ind, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal d${Math.min(i + 1, 8)} group relative p-8 flex flex-col justify-between overflow-hidden`,
                            style: {
                                background: "var(--cream)",
                                minHeight: "160px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-cormorant font-bold leading-none select-none transition-opacity duration-300 group-hover:opacity-100",
                                    style: {
                                        fontSize: "clamp(3.5rem, 6vw, 5rem)",
                                        color: "rgba(168,137,90,0.08)",
                                        lineHeight: 1
                                    },
                                    children: ind.num
                                }, void 0, false, {
                                    fileName: "[project]/components/Audience.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-px mb-3 transition-all duration-300 group-hover:w-10",
                                            style: {
                                                background: "var(--gold)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Audience.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-base tracking-wide transition-colors duration-300 group-hover:text-[var(--gold)]",
                                            style: {
                                                color: "var(--ink2)"
                                            },
                                            children: ind.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Audience.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Audience.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500",
                                    style: {
                                        background: "var(--gold)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Audience.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, ind.num, true, {
                            fileName: "[project]/components/Audience.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Audience.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Audience.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Audience.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Audience, "79FN6PjZhT66fD4Cl/dmgIBwU/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = Audience;
var _c;
__turbopack_context__.k.register(_c, "Audience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Services() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (id)=>setOpen((prev)=>prev === id ? null : id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "servicios",
        className: "section-pad",
        style: {
            background: "var(--ink)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "Lo que hacemos"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--cream)"
                            },
                            children: [
                                "Nuestros",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold-lt)"
                                    },
                                    children: "servicios"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map((svc)=>{
                        const isOpen = open === svc.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-sm",
                            style: {
                                border: "1px solid rgba(168,137,90,0.18)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "svc-header w-full text-left relative overflow-hidden focus:outline-none",
                                    onClick: ()=>toggle(svc.id),
                                    "aria-expanded": isOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `svc-header-bg absolute inset-0 bg-gradient-to-r ${svc.gradientClass}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 px-8 py-6 flex items-center justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-cormorant font-bold text-4xl leading-none shrink-0 hidden sm:block",
                                                            style: {
                                                                color: "rgba(168,137,90,0.45)"
                                                            },
                                                            children: svc.num
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-block text-xs font-medium tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2",
                                                                    style: {
                                                                        background: "rgba(168,137,90,0.18)",
                                                                        color: "var(--gold-lt)",
                                                                        border: "1px solid rgba(168,137,90,0.3)"
                                                                    },
                                                                    children: svc.tag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-cormorant font-semibold leading-tight mb-1",
                                                                    style: {
                                                                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                                                        color: "var(--cream)"
                                                                    },
                                                                    children: svc.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm italic font-light",
                                                                    style: {
                                                                        color: "var(--stone)"
                                                                    },
                                                                    children: svc.slogan
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0 text-2xl transition-transform duration-300 font-thin",
                                                    style: {
                                                        color: "var(--gold)",
                                                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                                                    },
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `accordion-body ${isOpen ? "open" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accordion-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-8 py-8",
                                            style: {
                                                background: "var(--ink2)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base font-light leading-relaxed mb-6",
                                                                    style: {
                                                                        color: "var(--stone)"
                                                                    },
                                                                    children: svc.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2",
                                                                    children: svc.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: "var(--gold)"
                                                                                    },
                                                                                    className: "mt-1 shrink-0 text-sm",
                                                                                    children: "✦"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Services.tsx",
                                                                                    lineNumber: 114,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-light",
                                                                                    style: {
                                                                                        color: "var(--cream2)"
                                                                                    },
                                                                                    children: f
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Services.tsx",
                                                                                    lineNumber: 117,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium tracking-widest uppercase mb-4",
                                                                    style: {
                                                                        color: "var(--gold)"
                                                                    },
                                                                    children: "Beneficios clave"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3 mb-8",
                                                                    children: svc.benefits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start gap-3 p-3 rounded-sm",
                                                                            style: {
                                                                                background: "rgba(247,243,238,0.04)"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xl shrink-0",
                                                                                    children: b.icon
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Services.tsx",
                                                                                    lineNumber: 140,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-light",
                                                                                    style: {
                                                                                        color: "var(--cream2)"
                                                                                    },
                                                                                    children: b.text
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Services.tsx",
                                                                                    lineNumber: 141,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 27
                                                                }, this),
                                                                !svc.packages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_MESSAGES"][svc.waKey]),
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105",
                                                                    style: {
                                                                        background: "var(--gold)",
                                                                        color: "var(--ink)"
                                                                    },
                                                                    children: "💬 Cotizar este servicio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this),
                                                svc.packages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-px mb-8",
                                                            style: {
                                                                background: "rgba(168,137,90,0.2)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium tracking-widest uppercase mb-6",
                                                            style: {
                                                                color: "var(--gold)"
                                                            },
                                                            children: "Paquetes disponibles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                            children: svc.packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative flex flex-col rounded-sm p-6",
                                                                    style: {
                                                                        background: "var(--ink)",
                                                                        border: pkg.badge ? "1px solid rgba(168,137,90,0.5)" : "1px solid rgba(168,137,90,0.15)"
                                                                    },
                                                                    children: [
                                                                        pkg.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap",
                                                                            style: {
                                                                                background: "var(--gold)",
                                                                                color: "var(--ink)"
                                                                            },
                                                                            children: pkg.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-cormorant font-semibold text-xl mb-2",
                                                                            style: {
                                                                                color: "var(--gold-lt)"
                                                                            },
                                                                            children: pkg.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 198,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-light mb-4",
                                                                            style: {
                                                                                color: "var(--stone)"
                                                                            },
                                                                            children: pkg.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 204,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-2 flex-1 mb-6",
                                                                            children: pkg.includes.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-start gap-2 text-sm font-light",
                                                                                    style: {
                                                                                        color: "var(--cream2)"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: "var(--gold)"
                                                                                            },
                                                                                            className: "shrink-0 mt-0.5 text-xs",
                                                                                            children: "✦"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/Services.tsx",
                                                                                            lineNumber: 210,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        item
                                                                                    ]
                                                                                }, j, true, {
                                                                                    fileName: "[project]/components/Services.tsx",
                                                                                    lineNumber: 209,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_MESSAGES"][pkg.waKey]),
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:scale-105",
                                                                            style: {
                                                                                background: pkg.badge ? "var(--gold)" : "rgba(168,137,90,0.15)",
                                                                                color: pkg.badge ? "var(--ink)" : "var(--gold-lt)",
                                                                                border: pkg.badge ? "none" : "1px solid rgba(168,137,90,0.3)"
                                                                            },
                                                                            children: "💬 Cotizar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Services.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, pkg.waKey, true, {
                                                                    fileName: "[project]/components/Services.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 104,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, svc.id, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Services, "3gHT60S3lHEhyYybFcB05ha95j4=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const STEPS = [
    {
        num: "01",
        title: "Consulta y Cotización",
        body: "Cuéntanos sobre tu proyecto. Analizamos el espacio, el objetivo y te damos una cotización clara en menos de 24 horas.",
        icon: "💬"
    },
    {
        num: "02",
        title: "Sesión Fotográfica",
        body: "Agendamos la visita a tu conveniencia. Usamos cámara Insta360 X4 5.7K para capturar cada detalle con la máxima calidad.",
        icon: "📷"
    },
    {
        num: "03",
        title: "Edición y Procesamiento",
        body: "Procesamos las imágenes, aplicamos corrección de color y ensamblamos el tour virtual en nuestra plataforma profesional.",
        icon: "⚙️"
    },
    {
        num: "04",
        title: "Entrega Final",
        body: "Recibes un enlace listo para compartir en 3–5 días hábiles. Para inspecciones de obra, incluye reporte técnico completo.",
        icon: "🚀"
    }
];
function Process() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "proceso",
        ref: ref,
        className: "section-pad",
        style: {
            background: "var(--cream2)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16 reveal d1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Process.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "¿Cómo funciona?"
                        }, void 0, false, {
                            fileName: "[project]/components/Process.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--ink)"
                            },
                            children: [
                                "Proceso",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold)"
                                    },
                                    children: "simple y transparente"
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Process.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Process.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                    children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal d${i + 2} group relative p-8 rounded-sm overflow-hidden`,
                            style: {
                                background: "var(--cream)",
                                border: "1px solid rgba(107,101,96,0.12)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-4 right-6 font-cormorant font-bold select-none leading-none",
                                    style: {
                                        fontSize: "6rem",
                                        color: "rgba(168,137,90,0.06)",
                                        lineHeight: 1
                                    },
                                    children: step.num
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl mb-4",
                                    children: step.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium tracking-widest uppercase mb-2",
                                    style: {
                                        color: "var(--gold)"
                                    },
                                    children: [
                                        "Paso ",
                                        step.num
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-cormorant font-semibold text-2xl mb-3",
                                    style: {
                                        color: "var(--ink)"
                                    },
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-light leading-relaxed",
                                    style: {
                                        color: "var(--stone)"
                                    },
                                    children: step.body
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700",
                                    style: {
                                        background: "var(--gold)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Process.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, step.num, true, {
                            fileName: "[project]/components/Process.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Process.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Process.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Process.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Process, "79FN6PjZhT66fD4Cl/dmgIBwU/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = Process;
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CARDS = [
    {
        type: "iframe",
        title: "Tour Virtual Inmobiliario",
        subtitle: "Recorrido interactivo 360°",
        src: "https://tour.panoee.net/6979907f644d2fca163dbe08"
    },
    {
        type: "thumb",
        title: "Estudio de Pilates",
        subtitle: "Fotografía 360° interior",
        href: "https://cloud-va.insta360.com/share/va/339H0Z55017S9x5F1082704896",
        img: "/hero-360.jpeg"
    },
    {
        type: "thumb",
        title: "Inspección de Obra — ANTES",
        subtitle: "Monitoreo de construcción 360°",
        href: "https://cloud-va.insta360.com/share/va/3l818p2y6R7C7g8f6729689088",
        img: "/hero-360.jpeg",
        badge: "ANTES"
    },
    {
        type: "thumb",
        title: "Inspección de Obra — DESPUÉS",
        subtitle: "Comparativa visual de avance",
        href: "https://cloud-va.insta360.com/share/va/3i8V8F2M6u7b6y0j0028635136",
        img: "/hero-360.jpeg",
        badge: "DESPUÉS"
    },
    {
        type: "placeholder",
        title: "Próximamente",
        subtitle: "Nuevo proyecto en preparación"
    },
    {
        type: "placeholder",
        title: "Próximamente",
        subtitle: "Nuevo proyecto en preparación"
    }
];
function Portfolio() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portafolio",
        ref: ref,
        className: "section-pad",
        style: {
            background: "var(--ink)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16 reveal d1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "Nuestro trabajo"
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--cream)"
                            },
                            children: [
                                "Portafolio",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold-lt)"
                                    },
                                    children: "360°"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base font-light",
                            style: {
                                color: "var(--stone)"
                            },
                            children: "Explora algunos de nuestros proyectos. Haz clic para ver la experiencia completa."
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Portfolio.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: CARDS.map((card, i)=>{
                        const delay = `d${Math.min(i + 2, 8)}`;
                        if (card.type === "iframe") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal ${delay} portfolio-card portfolio-card-static rounded-sm overflow-hidden`,
                                style: {
                                    border: "1px solid rgba(168,137,90,0.18)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "iframe-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: card.src,
                                            title: card.title,
                                            allowFullScreen: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio.tsx",
                                            lineNumber: 92,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 py-4",
                                        style: {
                                            background: "var(--ink2)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs tracking-widest uppercase mb-1",
                                                style: {
                                                    color: "var(--gold)"
                                                },
                                                children: card.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cormorant font-semibold text-lg",
                                                style: {
                                                    color: "var(--cream)"
                                                },
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this);
                        }
                        if (card.type === "thumb") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: card.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `reveal ${delay} portfolio-card block rounded-sm overflow-hidden group`,
                                style: {
                                    border: "1px solid rgba(168,137,90,0.18)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden",
                                        style: {
                                            paddingBottom: "62.5%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: card.img,
                                                alt: card.title,
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 group-hover:scale-105",
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                style: {
                                                    background: "rgba(18,16,14,0.6)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm",
                                                    style: {
                                                        background: "var(--gold)",
                                                        color: "var(--ink)"
                                                    },
                                                    children: "Ver tour →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this),
                                            card.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-3 left-3 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full",
                                                style: {
                                                    background: "var(--gold)",
                                                    color: "var(--ink)"
                                                },
                                                children: card.badge
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 140,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 py-4",
                                        style: {
                                            background: "var(--ink2)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs tracking-widest uppercase mb-1",
                                                style: {
                                                    color: "var(--gold)"
                                                },
                                                children: card.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 149,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cormorant font-semibold text-lg",
                                                style: {
                                                    color: "var(--cream)"
                                                },
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Portfolio.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this);
                        }
                        // Placeholder
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal ${delay} rounded-sm overflow-hidden flex flex-col items-center justify-center`,
                            style: {
                                border: "1px dashed rgba(168,137,90,0.2)",
                                background: "rgba(42,39,36,0.4)",
                                minHeight: "280px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl mb-4 opacity-30",
                                    children: "📷"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-cormorant text-xl font-light",
                                    style: {
                                        color: "var(--stone)"
                                    },
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs tracking-wider mt-1",
                                    style: {
                                        color: "rgba(107,101,96,0.6)"
                                    },
                                    children: card.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Portfolio.tsx",
                            lineNumber: 162,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Portfolio.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Portfolio.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "79FN6PjZhT66fD4Cl/dmgIBwU/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Differentiators.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Differentiators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Differentiators() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-pad",
        style: {
            background: "var(--cream)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16 reveal d1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Differentiators.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "¿Por qué nosotros?"
                        }, void 0, false, {
                            fileName: "[project]/components/Differentiators.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--ink)"
                            },
                            children: [
                                "Lo que nos",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold)"
                                    },
                                    children: "diferencia"
                                }, void 0, false, {
                                    fileName: "[project]/components/Differentiators.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Differentiators.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Differentiators.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIFFERENTIATORS"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal d${i + 2} group flex gap-6 p-8 rounded-sm`,
                            style: {
                                background: "var(--cream2)",
                                border: "1px solid rgba(107,101,96,0.12)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl",
                                    style: {
                                        background: "rgba(168,137,90,0.1)",
                                        border: "1px solid rgba(168,137,90,0.25)"
                                    },
                                    children: d.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Differentiators.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-cormorant font-semibold text-xl mb-2 group-hover:text-[var(--gold)] transition-colors duration-300",
                                            style: {
                                                color: "var(--ink)"
                                            },
                                            children: d.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Differentiators.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-light leading-relaxed",
                                            style: {
                                                color: "var(--stone)"
                                            },
                                            children: d.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/Differentiators.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Differentiators.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Differentiators.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Differentiators.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Differentiators.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Differentiators.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Differentiators, "79FN6PjZhT66fD4Cl/dmgIBwU/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = Differentiators;
var _c;
__turbopack_context__.k.register(_c, "Differentiators");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SERVICE_OPTIONS = [
    "Fotografía 360° Inmobiliaria",
    "Fotografía 360° Comercial",
    "Tour Virtual Interactivo",
    "Videos 360° Estáticos",
    "Videos 360° en Movimiento",
    "Inspección de Obra — Básico",
    "Inspección de Obra — Tour",
    "Inspección de Obra — Profesional",
    "Consulta general"
];
function Contact() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        service: "",
        message: ""
    });
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSending(true);
        setTimeout(()=>{
            setSending(false);
            // TODO: conectar con EmailJS, Resend o Formspree
            alert(`¡Gracias, ${form.name}! Recibimos tu mensaje y te contactaremos pronto a ${form.email}.`);
            setForm({
                name: "",
                email: "",
                service: "",
                message: ""
            });
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
        transition: "border-color 0.2s"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contacto",
        className: "section-pad",
        style: {
            background: "var(--ink)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gold-line"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium tracking-[0.25em] uppercase mb-3",
                            style: {
                                color: "var(--gold)"
                            },
                            children: "Hablemos"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant font-light leading-tight",
                            style: {
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                color: "var(--cream)"
                            },
                            children: [
                                "Solicita tu",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "font-semibold",
                                    style: {
                                        color: "var(--gold-lt)"
                                    },
                                    children: "cotización"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base font-light",
                            style: {
                                color: "var(--stone)"
                            },
                            children: "Respuesta garantizada en menos de 24 horas hábiles."
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs tracking-wider uppercase",
                                                    style: {
                                                        color: "var(--stone)"
                                                    },
                                                    children: "Nombre *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    required: true,
                                                    value: form.name,
                                                    onChange: handleChange,
                                                    placeholder: "Tu nombre",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs tracking-wider uppercase",
                                                    style: {
                                                        color: "var(--stone)"
                                                    },
                                                    children: "Correo *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    required: true,
                                                    value: form.email,
                                                    onChange: handleChange,
                                                    placeholder: "tu@correo.com",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs tracking-wider uppercase",
                                            style: {
                                                color: "var(--stone)"
                                            },
                                            children: "Servicio de interés"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "service",
                                            value: form.service,
                                            onChange: handleChange,
                                            style: inputStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    style: {
                                                        background: "var(--ink2)",
                                                        color: "var(--cream)"
                                                    },
                                                    children: "Selecciona un servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                SERVICE_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: opt,
                                                        style: {
                                                            background: "var(--ink2)",
                                                            color: "var(--cream)"
                                                        },
                                                        children: opt
                                                    }, opt, false, {
                                                        fileName: "[project]/components/Contact.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs tracking-wider uppercase",
                                            style: {
                                                color: "var(--stone)"
                                            },
                                            children: "Mensaje *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            required: true,
                                            rows: 5,
                                            value: form.message,
                                            onChange: handleChange,
                                            placeholder: "Cuéntanos sobre tu proyecto, ubicación, dimensiones aproximadas...",
                                            style: {
                                                ...inputStyle,
                                                resize: "vertical"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: sending,
                                    className: "inline-flex items-center justify-center gap-3 px-8 py-4 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed rounded-sm",
                                    style: {
                                        background: "var(--gold)",
                                        color: "var(--ink)"
                                    },
                                    children: sending ? "Enviando…" : "Enviar solicitud →"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].whatsappMsg),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-5 p-6 rounded-sm group transition-all duration-300 hover:scale-[1.02]",
                                    style: {
                                        background: "rgba(247,243,238,0.04)",
                                        border: "1px solid rgba(168,137,90,0.2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0",
                                            style: {
                                                background: "rgba(168,137,90,0.15)",
                                                border: "1px solid rgba(168,137,90,0.3)"
                                            },
                                            children: "💬"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs tracking-widest uppercase mb-1",
                                                    style: {
                                                        color: "var(--gold)"
                                                    },
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: "var(--cream)"
                                                    },
                                                    children: "+506 6405-9780"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "var(--stone)"
                                                    },
                                                    children: "Respuesta inmediata en horario hábil"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].email}`,
                                    className: "flex items-center gap-5 p-6 rounded-sm group transition-all duration-300 hover:scale-[1.02]",
                                    style: {
                                        background: "rgba(247,243,238,0.04)",
                                        border: "1px solid rgba(168,137,90,0.2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0",
                                            style: {
                                                background: "rgba(168,137,90,0.15)",
                                                border: "1px solid rgba(168,137,90,0.3)"
                                            },
                                            children: "✉️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs tracking-widest uppercase mb-1",
                                                    style: {
                                                        color: "var(--gold)"
                                                    },
                                                    children: "Correo"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: "var(--cream)"
                                                    },
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "var(--stone)"
                                                    },
                                                    children: "Para solicitudes formales y cotizaciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].facebook,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-5 p-6 rounded-sm group transition-all duration-300 hover:scale-[1.02]",
                                    style: {
                                        background: "rgba(247,243,238,0.04)",
                                        border: "1px solid rgba(168,137,90,0.2)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0",
                                            style: {
                                                background: "rgba(168,137,90,0.15)",
                                                border: "1px solid rgba(168,137,90,0.3)"
                                            },
                                            children: "📘"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs tracking-widest uppercase mb-1",
                                                    style: {
                                                        color: "var(--gold)"
                                                    },
                                                    children: "Facebook"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: "var(--cream)"
                                                    },
                                                    children: "Fotografía 360 CR"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "var(--stone)"
                                                    },
                                                    children: "Síguenos para ver nuestros últimos proyectos"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-sm",
                                    style: {
                                        background: "rgba(168,137,90,0.06)",
                                        border: "1px solid rgba(168,137,90,0.15)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs tracking-widest uppercase mb-3",
                                            style: {
                                                color: "var(--gold)"
                                            },
                                            children: "Cobertura"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-light",
                                            style: {
                                                color: "var(--stone)"
                                            },
                                            children: "Atendemos proyectos en todo Costa Rica. Gran Área Metropolitana, zona de los Santos, Pacífico Central y Caribe."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Contact, "44g6fGg3YJmt1BlTS4mm2Yn/ZKU=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloatingButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
"use client";
;
;
function IconWhatsApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "22",
        height: "22",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/components/FloatingButtons.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FloatingButtons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = IconWhatsApp;
function IconFacebook() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/components/FloatingButtons.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FloatingButtons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c1 = IconFacebook;
function IconEmail() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        width: "20",
        height: "20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/FloatingButtons.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 7l10 7 10-7"
            }, void 0, false, {
                fileName: "[project]/components/FloatingButtons.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloatingButtons.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c2 = IconEmail;
function FloatingButtons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-50 flex flex-col gap-3",
        style: {
            bottom: "2rem",
            right: "2rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].email}`,
                "aria-label": "Enviar correo",
                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].email,
                className: "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
                style: {
                    background: "var(--ink2)",
                    border: "1px solid rgba(168,137,90,0.4)",
                    color: "var(--gold-lt)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEmail, {}, void 0, false, {
                    fileName: "[project]/components/FloatingButtons.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FloatingButtons.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].facebook,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Facebook",
                title: "Fotografía 360 CR en Facebook",
                className: "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
                style: {
                    background: "var(--ink2)",
                    border: "1px solid rgba(168,137,90,0.4)",
                    color: "var(--gold-lt)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconFacebook, {}, void 0, false, {
                    fileName: "[project]/components/FloatingButtons.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FloatingButtons.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT"].whatsappMsg),
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Contactar por WhatsApp",
                title: "Cotizar por WhatsApp",
                className: "floating-wa w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110",
                style: {
                    background: "var(--gold)",
                    color: "var(--ink)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWhatsApp, {}, void 0, false, {
                    fileName: "[project]/components/FloatingButtons.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FloatingButtons.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FloatingButtons.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c3 = FloatingButtons;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "IconWhatsApp");
__turbopack_context__.k.register(_c1, "IconFacebook");
__turbopack_context__.k.register(_c2, "IconEmail");
__turbopack_context__.k.register(_c3, "FloatingButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1cvzc63._.js.map