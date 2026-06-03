# Fotografía 360 CR — Proyecto Next.js 14

## Requisitos previos

1. Instalar **Node.js LTS** desde: https://nodejs.org/
   - Descarga el instalador de Windows (.msi)
   - Acepta todas las opciones por defecto

## Primer inicio

Abre una terminal en esta carpeta (`fotografia360cr`) y ejecuta:

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Copiar la imagen del hero a public/
#    (si hero-360.jpeg está en la carpeta padre)
copy ..\hero-360.jpeg public\

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

## Comandos útiles

```bash
npm run dev      # Servidor de desarrollo (con hot-reload)
npm run build    # Compilar para producción
npm run start    # Iniciar versión de producción
npm run lint     # Verificar errores de código
```

## Despliegue en Vercel (recomendado — gratis)

1. Crea una cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Vercel detecta Next.js automáticamente
4. Configura el dominio personalizado: fotografia360cr.com

## Estructura del proyecto

```
fotografia360cr/
├── app/
│   ├── layout.tsx        ← Metadatos SEO, fuentes, estructura base
│   ├── page.tsx          ← Página principal (ensambla componentes)
│   └── globals.css       ← Variables CSS y estilos globales
├── components/
│   ├── Nav.tsx           ← Navbar fija con scroll effect
│   ├── Hero.tsx          ← Hero con imagen 360 y anillo giratorio
│   ├── Audience.tsx      ← Grid de industrias
│   ├── Services.tsx      ← Acordeón de 6 servicios
│   ├── Process.tsx       ← 4 pasos del proceso
│   ├── Portfolio.tsx     ← 6 tarjetas de portafolio
│   ├── Differentiators.tsx ← Diferenciadores 2x2
│   ├── Testimonial.tsx   ← Quote testimonial
│   ├── Contact.tsx       ← Formulario + datos de contacto
│   ├── Footer.tsx        ← Pie de página
│   └── FloatingButtons.tsx ← Botones flotantes (WA, FB, Email)
├── hooks/
│   └── useScrollReveal.ts ← Animaciones con Intersection Observer
├── lib/
│   └── constants.ts      ← Datos de contacto, servicios, industrias
└── public/
    ├── hero-360.jpeg     ← Imagen principal (debes copiarla aquí)
    ├── sitemap.xml       ← Para SEO
    └── robots.txt        ← Para crawlers
```

## Próximos pasos

- [ ] Conectar formulario con EmailJS, Resend o Formspree
- [ ] Crear favicon personalizado (F360 dorado)
- [ ] Agregar más proyectos al portafolio
- [ ] Configurar Google Analytics / Meta Pixel
