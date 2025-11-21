# 🎬 SUNNY EDITORX - Professional Video Editor Portfolio

A stunning, modern portfolio website for **SUNNY EDITORX**, a professional video editor specializing in **Instagram Reels**, **YouTube Shorts**, and **TikTok** content. Built with cutting-edge web technologies including Next.js 15, Three.js 3D effects, and smooth animations.

[![Live]](https://sunny-editorax.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

### 🎥 **Video Portfolio Showcase**
- Embedded YouTube video portfolio with high-quality playback
- Responsive video player optimized for all devices
- Professional presentation of video editing work

### 🌟 **3D Visual Effects**
- Interactive particle background system using Three.js
- Holographic avatar with WebGL rendering
- Smooth 3D animations and transitions
- Fallback to 2D mode for unsupported devices

### 💼 **Professional Sections**
- **Hero Section**: Eye-catching introduction with 3D effects
- **About Section**: Services overview (Instagram Reels, YouTube Shorts, TikTok)
- **Portfolio Section**: Video showcase with embedded player
- **Contact Section**: WhatsApp integration for direct messaging

### 🎨 **Modern UI/UX**
- Glassmorphism design effects
- Smooth scroll animations with Framer Motion
- Responsive design for mobile, tablet, and desktop
- Dark theme optimized for video content
- Custom fonts (Inter & Sora) for professional typography

### 🚀 **Performance Optimized**
- Built with Next.js 15 App Router
- Optimized images and assets
- SEO-friendly with comprehensive meta tags
- PWA-ready configuration
- Fast loading times and smooth interactions

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### 3D & Animations
- **Three.js** - WebGL 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **GSAP** - Professional-grade animation

### Additional Libraries
- **react-youtube** - YouTube video integration
- **react-hook-form** - Form handling
- **Lottie React** - Animation player
- **Swiper** - Touch slider

### Development Tools
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Node.js 18+** - Runtime environment

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sarvast/Sunny-Editorax.git
cd Sunny-Editorax
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
Sunny-Editorax/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── 3d/                  # Three.js 3D components
│   │   ├── holographic-avatar.tsx
│   │   ├── particle-background.tsx
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/                  # Reusable UI components
│   └── widgets/             # Widget components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional styles
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Customization

### Update Personal Information
Edit the metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "YOUR NAME - Professional Video Editor",
  description: "Your description here...",
  // ... other metadata
}
```

### Change Contact Information
Update the WhatsApp number in `components/sections/contact-section.tsx`:
```typescript
const number = "917518608357" // Replace with your WhatsApp number
```

### Modify Portfolio Video
Change the YouTube video ID in `components/sections/projects-section.tsx`:
```typescript
<YouTube
  videoId="YOUR_VIDEO_ID"
  // ... other props
/>
```

### Customize Theme Colors
Edit `tailwind.config.ts` to change colors and theme:
```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sarvast/Sunny-Editorax)

### Environment Variables
No environment variables are required for basic functionality. The site works out of the box.

---

## 📱 Features in Detail

### WhatsApp Integration
The contact form redirects to WhatsApp with pre-filled message, making it easy for clients to reach out directly.

### 3D Effects
- Uses WebGL for hardware-accelerated 3D graphics
- Gracefully falls back to 2D mode if WebGL is not supported
- Optimized for performance on all devices

### SEO Optimization
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data for better search visibility

### Responsive Design
- Mobile-first approach
- Breakpoints for all screen sizes
- Touch-optimized interactions
- Optimized for portrait and landscape orientations

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sarvast/Sunny-Editorax/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- 3D effects powered by [Three.js](https://threejs.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)

---

## 📞 Contact

**SUNNY EDITORX**
- Portfolio: [https://sunny-editorax.vercel.app/](https://sunny-editorax.vercel.app/)
- WhatsApp: +91 7518608357
- Twitter: [@sunnyeditorx](https://twitter.com/sunnyeditorx)

---

<div align="center">
  <strong>⭐ If you like this project, please give it a star on GitHub! ⭐</strong>
</div>
