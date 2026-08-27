# ✈️ Rozana Tours & Travels (روزانة للسياحة والسفر)
> **Official Web Application — Development Phase 1**  
> A luxury, high-converting, and bilingual (English & Arabic) web portal for Rozana Tours & Travels, based in Riyadh, Kingdom of Saudi Arabia.

---

## 📌 Executive Summary

**Rozana Tours & Travels** is designed to provide Saudi travelers with a seamless experience for worldwide visa processing, bespoke luxury tour packages, and first-class flight bookings. Built with modern web performance standards, responsive design, and dynamic translation capabilities.

---

## 🎨 Brand Design System & Color Palette

Extracted from the official **Rozana Tours & Travels** logo:

| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Royal Navy** | `#002B5B` / `#001E3D` | Navbar Topbar, Hero Background, Dark Headers |
| **Ocean Blue** | `#0084D6` / `#003B7A` | Primary Brand Color, Badges, Active States |
| **Sunset Orange** | `#FF7A00` | Call to Action (CTA) Buttons, Highlights, Airplane Accents |
| **Emerald Green** | `#10B981` | Direct WhatsApp Inquiry Actions |
| **Slate Light** | `#F8FAFC` | Clean Section Backgrounds |

---

## 🚀 Key Features Implemented in Phase 1

### 1. 🛡️ Ultra-Premium Header & Navbar (`Navbar.jsx`)
- **Top Announcement Bar**: 24/7 VIP Assistance indicator, Riyadh office location badge, and direct call/email contacts.
- **Glassmorphism Main Header**: Sticky navbar with backdrop blur effect on scroll.
- **Dual Action CTAs**: Instant WhatsApp button + "Plan My Trip" gradient button.
- **Responsive Mobile Drawer**: Smooth overlay menu optimized for smartphones and tablets.

### 2. 🌐 Dynamic Full-Page Translation System (`index.html` + `Navbar.jsx`)
- Integrated **Google Translate Engine** operating seamlessly in the background.
- Custom luxury **Language Toggle Button** (`English (EN)` / `العربية (AR)`).
- Automatically translates the entire web page on the fly without hardcoded JSON dictionaries.
- Supports **RTL (Right-to-Left)** text orientation when switching to Arabic.

### 3. 🌟 Unique Asymmetric Hero Section (`Hero.jsx`)
- **Left Column**: High-impact luxury headline, key trust bullet badges (99.6% Visa Approval, Licensed Agency), and instant travel consultation trigger.
- **Right Column**: Interactive **Glassmorphism "Quick Travel Finder Console"** featuring 3 dynamic modes:
  - 🛂 **Visas**: Destination selector (Schengen, UK, USA, Japan, Turkey, etc.).
  - 🏖️ **Tours**: Interactive destination keyword tags (Maldives, Switzerland, Bosnia, etc.).
  - ✈️ **Flights**: Direct 5-star airline booking consultation.
- **Saudi Trust Metrics Bar**: Statistics counter highlighting 15,000+ Visas issued and 12,000+ happy travelers.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Translation Engine**: Google Translate Client API

---

## 📁 Project Directory Structure

```text
rozana-tours-travel/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.jpeg           <-- Official Rozana Brand Logo
│   ├── components/
│   │   ├── Navbar.jsx          <-- Premium Sticky Header & Language Switcher
│   │   └── Hero.jsx            <-- Unique Luxury Hero & Travel Finder Console
│   ├── App.jsx                 <-- Main Application Entry Component
│   ├── index.css               <-- Tailwind CSS Imports
│   └── main.jsx
├── index.html                  <-- Google Translate Script & Meta Configs
├── package.json
├── vite.config.js
└── README.md