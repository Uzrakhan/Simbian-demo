# Simbian Demo

## Overview
This interactive comparison demonstrates security operations efficiency **without** vs **with** Simbian's AI-powered platform. Built with Next.js 14, Tailwind CSS, and Framer Motion, it showcases dramatic differences in alert handling through dynamic animations and real-time simulations.

[Live Demo](https://simbian-demo.vercel.app) • [Video Reference](https://drive.google.com/drive/folders/1yeklCMBqYDDoCgnyqcqqwQhpyV5uBi3L)

## Key Features
- 🚨 **Real-time Alert Simulation**: Animated counters & alert streams
- 📱 **Responsive Design**: Optimized for mobile/tablet/desktop
- 🎬 **Framer Motion Animations**: Spring physics, layout transitions
- ⚡ **Performance**: 90+ Lighthouse score, optimized re-renders
- 🛡 **Type Safety**: Full TypeScript implementation

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion 10
- **Icons**: Heroicons
- **Deployment**: Vercel

## Implementation Details

### Animation Strategy  
Used Framer Motion's spring animations for natural movement:
- `useAnimate` for complex sequences
- `AnimatePresence` for alert transitions
- Layout animations for responsive shifts
- Custom cubic bezier curves for brand-aligned timing

### Component Architecture
```plaintext
components/
├─ AnimatedCard.tsx  # Reusable animation wrapper
├─ WithoutSimbian.tsx  # Stress state visualization
├─ WithSimbian.tsx    # Resolution flow
└─ HydrationFix.tsx   # SSR compatibility