export const CONTACT = {
  whatsapp: "50664059780",
  whatsappMsg: "Hola, me interesa cotizar un servicio de fotografía 360.",
  facebook: "https://www.facebook.com/profile.php?id=61588325744739",
  email: "info@fotografia360cr.com",
  domain: "https://www.fotografia360cr.com",
} as const;

export function waLink(msg: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export interface ServicePackage {
  name: string;
  badge?: string;
  description: string;
  includes: string[];
  waKey: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  slogan: string;
  tag: string;
  gradientClass: string;
  description: string;
  features: string[];
  benefits: string[];
  waKey: string;
  packages?: ServicePackage[];
}

export const WA_MESSAGES: Record<string, string> = {
  svc1: "Hola, me interesa cotizar *Fotografía 360° Inmobiliaria*.",
  svc2: "Hola, me interesa cotizar *Fotografía 360° Comercial*.",
  svc3: "Hola, me interesa cotizar un *Tour Virtual Interactivo*.",
  svc4: "Hola, me interesa cotizar *Videos 360° Estáticos*.",
  svc5: "Hola, me interesa cotizar *Videos 360° en Movimiento*.",
  svc6: "Hola, me interesa cotizar *Inspección y Monitoreo de Obra*.",
  pkg1: "Hola, me interesa el *Paquete Básico de Inspección de Obra*.",
  pkg2: "Hola, me interesa el *Paquete Tour de Obra*.",
  pkg3: "Hola, me interesa el *Paquete Inspección Profesional*.",
};

export const SERVICES: Service[] = [
  {
    id: "svc1",
    num: "01",
    title: "Fotografía 360° Inmobiliaria",
    slogan: "Vende más rápido con recorridos inmersivos",
    tag: "Inmobiliaria",
    gradientClass: "from-[#1a1208] via-[#2d1f0a] to-[#12100e]",
    description:
      "Capturamos cada rincón de tu propiedad en 360° para que los compradores la recorran virtualmente antes de visitar. Más consultas, menos tiempo en el mercado.",
    features: [
      "Fotografías esféricas de alta resolución",
      "Recorrido virtual navegable",
      "Compatible con dispositivos móviles y escritorio",
      "Entrega en 3–5 días hábiles",
      "Enlace compartible para portales inmobiliarios",
      "Soporte para propiedades residenciales y comerciales",
    ],
    benefits: [
      "Mayor alcance en portales como OLX y Encuentra24",
      "Reduce visitas innecesarias y acelera la toma de decisión",
      "Propiedades con tour virtual reciben hasta 3× más consultas",
      "Comparte en redes sociales y WhatsApp con un clic",
    ],
    waKey: "svc1",
  },
  {
    id: "svc2",
    num: "02",
    title: "Fotografía 360° Comercial",
    slogan: "Tu negocio siempre abierto al mundo",
    tag: "Comercial",
    gradientClass: "from-[#0e1a12] via-[#0a2d15] to-[#0a1a0e]",
    description:
      "Muestra tu restaurante, hotel, tienda o consultorio con una experiencia inmersiva que conquista clientes antes de que crucen la puerta. Ideal para Google My Business.",
    features: [
      "Fotografía interior y exterior 360°",
      "Optimizado para Google Street View",
      "Integración con Google My Business",
      "Imagen de marca profesional y diferenciada",
      "Archivos en alta resolución para múltiples usos",
      "Sesión en horario conveniente para tu negocio",
    ],
    benefits: [
      "Destaca en búsquedas de Google Maps",
      "Genera confianza antes de la primera visita",
      "Aumenta el tiempo de permanencia en tu perfil digital",
      "Contenido reutilizable para redes sociales",
    ],
    waKey: "svc2",
  },
  {
    id: "svc3",
    num: "03",
    title: "Tour Virtual Interactivo",
    slogan: "Una experiencia que enamora desde la primera vista",
    tag: "Tour Virtual",
    gradientClass: "from-[#0e0e1a] via-[#141428] to-[#0a0a1a]",
    description:
      "Tours virtuales con puntos de información, música de fondo, planos de planta y llamadas a la acción integradas. La experiencia más completa del mercado costarricense.",
    features: [
      "Hotspots informativos interactivos",
      "Música de fondo personalizable",
      "Integración de plano de planta",
      "Botones CTA (cotizar, llamar, visitar)",
      "Branding con tu logo y colores",
      "Panel de estadísticas de visitas",
    ],
    benefits: [
      "Experiencia inmersiva que diferencia tu marca",
      "Planos interactivos para orientar al visitante",
      "Funciona en VR, móvil y escritorio",
      "Reduce costos de visitas presenciales",
    ],
    waKey: "svc3",
  },
  {
    id: "svc4",
    num: "04",
    title: "Videos 360° Estáticos",
    slogan: "Impacto visual en cada plataforma digital",
    tag: "Video 360°",
    gradientClass: "from-[#1a0e0a] via-[#2d1a0e] to-[#1a0e08]",
    description:
      "Videos 360° grabados desde un punto fijo que permiten al espectador explorar el entorno completo. Perfectos para YouTube, Facebook y campañas de redes sociales.",
    features: [
      "Grabación en ultra HD",
      "Edición y color grading profesional",
      "Exportación en formato equirectangular",
      "Optimizado para YouTube 360° y Facebook",
      "Duración personalizable (30 seg – 5 min)",
      "Música o narración opcional",
    ],
    benefits: [
      "Contenido diferenciador en redes sociales",
      "Hasta 4× más visualizaciones que video convencional",
      "Reutilizable en múltiples campañas digitales",
      "Posiciona tu marca como innovadora y moderna",
    ],
    waKey: "svc4",
  },
  {
    id: "svc5",
    num: "05",
    title: "Videos 360° en Movimiento",
    slogan: "Lleva a tu cliente en un viaje sin salir de su pantalla",
    tag: "Video Dinámico",
    gradientClass: "from-[#0a1a1a] via-[#0e2828] to-[#0a1a18]",
    description:
      "Recorridos cinematográficos 360° con la cámara en movimiento: caminatas, drones y vehículos. La forma más emocionante de mostrar espacios, rutas y destinos turísticos.",
    features: [
      "Grabación en movimiento con estabilización",
      "Opciones: walkthrough, drone, vehículo",
      "Resolución ultra HD con estabilización de imagen",
      "Edición narrativa profesional",
      "Transiciones y efectos visuales premium",
      "Entrega en múltiples formatos",
    ],
    benefits: [
      "Ideal para turismo, hospitality y bienes raíces de lujo",
      "Experiencia inmersiva que genera emoción y deseo",
      "Compatible con plataformas VR y gafas de realidad virtual",
      "Alcanza audiencias globales con contenido de alto impacto",
    ],
    waKey: "svc5",
  },
  {
    id: "svc6",
    num: "06",
    title: "Inspección y Monitoreo de Obra",
    slogan: "Control total de tu proyecto desde cualquier lugar",
    tag: "Construcción",
    gradientClass: "from-[#1a1408] via-[#2a200a] to-[#1a1408]",
    description:
      "Documentación 360° periódica del avance de obras de construcción con reportes visuales detallados. Supervisión remota con respaldo legal y técnico.",
    features: [
      "Fotografías 360° georreferenciadas",
      "Reportes de avance semanales o quincenales",
      "Comparación visual antes/durante/después",
      "Acceso a plataforma en línea de seguimiento",
      "Respaldo documental para entidades financieras",
      "Ingeniería certificada e inscrita al CFIA",
    ],
    benefits: [
      "Supervisa tu obra sin desplazarte",
      "Respaldo legal y técnico en cada visita",
      "Detecta discrepancias con planos a tiempo",
      "Informes profesionales para inversionistas y bancos",
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
          "Galería en línea compartible",
        ],
        waKey: "pkg1",
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
          "Entrega en 24 horas por visita",
        ],
        waKey: "pkg2",
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
          "Recomendaciones técnicas escritas",
        ],
        waKey: "pkg3",
      },
    ],
  },
];

export const INDUSTRIES = [
  { num: "01", label: "Inmobiliarias" },
  { num: "02", label: "Hoteles & Turismo" },
  { num: "03", label: "Arquitectura" },
  { num: "04", label: "Retail & Comercios" },
  { num: "05", label: "Restaurantes & Cafés" },
  { num: "06", label: "Salud & Bienestar" },
  { num: "07", label: "Educación" },
  { num: "08", label: "Construcción" },
];
