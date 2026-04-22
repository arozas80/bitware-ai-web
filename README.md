# Bitware AI Web Redesign 2026

Rediseño completo de bitware-ai.cl con foco en conversión y diseño premium.

## Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion (animaciones)
- TypeScript

## Estructura
```
app/
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Deploy

### Opción 1: VPS Actual (Docker)
```bash
cd projects/bitware-web-redesign
npm install
npm run build
docker build -t bitware/web .
sudo docker service update --image bitware/web:latest bitware_web
```

### Opción 2: Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

## Cambios Clave vs Versión Anterior

1. **Hero más agresivo** - CTA principal + secundario visible above the fold
2. **Animaciones scroll-triggered** - Elementos aparecen al hacer scroll
3. **Gradient orbs de fondo** - Profundidad visual sin distraer
4. **Testimonios con foto** - Más credibilidad
5. **FAQ interactivo** - Acordeón con animación suave
6. **Formulario simplificado** - Menos fricción, más conversiones
7. **Mobile optimizado** - 60% del tráfico viene de móvil

## SEO Mantenido
- Meta tags originales
- Schema.org JSON-LD
- Open Graph + Twitter Cards
- Google Analytics G-S4E79XLPFF
