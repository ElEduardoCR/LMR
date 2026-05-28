# LMR Mensajería y Logística

Sitio web corporativo construido con **Next.js 14**, **React 18**, **Tailwind CSS** y **Framer Motion**, optimizado para animaciones fluidas a 60 fps.

## Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (iconos)

## Secciones
1. **Hero** — Video de fondo + 2 CTAs ("¿A dónde vamos?" y "Nuestros servicios")
2. **Seguir envío** — Tracker animado con timeline en vivo
3. **Nuestro equipo** — Selector de flota estilo Need for Speed (moto, van, camión 3.5T, tórton, tráiler)
4. **Cobertura** — Mapa interactivo de la República Mexicana con rutas animadas
5. **Experiencia** — Timeline + contadores animados + valores
6. **Contacto** — Formulario animado con validación visual

## Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## Agregar el video del hero

Coloca tu archivo como `public/hero.mp4` (ver `public/README.txt` para recomendaciones).

Mientras no exista el video, se muestra un degradado de respaldo automáticamente.

## Build de producción

```bash
npm run build
npm start
```

## Estructura

```
LMR/
├── app/
│   ├── layout.jsx          # Layout raíz, metadatos
│   ├── page.jsx            # Página principal
│   └── globals.css         # Estilos globales + Tailwind
├── components/
│   ├── Header.jsx          # Navbar con scroll-spy
│   ├── Hero.jsx            # Video + CTAs
│   ├── TrackShipment.jsx   # Tracker animado
│   ├── Fleet.jsx           # Selector estilo NFS
│   ├── CoverageMap.jsx     # Mapa SVG MX
│   ├── Experience.jsx      # Timeline + stats
│   ├── Contact.jsx         # Formulario
│   └── Footer.jsx
├── public/
│   └── hero.mp4            # ← Coloca tu video aquí
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## Notas de rendimiento

- Todas las animaciones usan `transform` + `opacity` para correr en GPU (60 fps).
- `will-change` aplicado solo donde es necesario.
- Respeta `prefers-reduced-motion` para accesibilidad.
- Los componentes pesados (mapa, flota) usan `IntersectionObserver` vía `useInView` para animarse solo al entrar en viewport.

## Personalización

- Colores de marca: edita `tailwind.config.js` → `theme.extend.colors.brand`
- Ciudades del mapa: edita `components/CoverageMap.jsx` → array `CITIES`
- Vehículos de la flota: edita `components/Fleet.jsx` → array `VEHICLES`
- Timeline de experiencia: edita `components/Experience.jsx` → array `MILESTONES`
