# Rozana Tours & Travels — Web Application

Official corporate web portal for **Rozana Tours & Travels (روزانة للسياحة والسفر)**, a premier licensed travel agency based in Riyadh, Kingdom of Saudi Arabia.

---

## Technical Overview

The application is engineered as a high-performance, single-page application (SPA) designed to convert visitor traffic into qualified sales inquiries for visa processing, bespoke holiday packages, and flight/hotel bookings.

### Key Architecture Highlights
- **Dynamic Full-Page Localization**: Integrated Google Translate Client Engine providing instant English & Arabic (RTL) full-page translation.
- **Interactive Component Architecture**: Data-driven modular UI for Visa Services and Tour Packages with interactive requirement modals and itinerary timelines.
- **Micro-Interactions & Motion**: Smooth UI physics powered by Framer Motion, including staggered scroll reveals and animated modal drawers.
- **Direct WhatsApp Conversion Funnel**: Automated deep-link generators mapping user-selected criteria directly to customer support agents.

---

## Features & Modules

### 1. Navigation & Topbar (`Navbar.jsx`)
- Sticky glassmorphic header with backdrop blur effect on scroll.
- Top announcement bar with 24/7 VIP support channels and location info.
- Language switcher triggering full DOM text translation and text-direction alignment.
- Responsive navigation drawer optimized for mobile viewports.

### 2. Hero Finder Console (`Hero.jsx`)
- Asymmetric split layout presenting value propositions and trust metrics.
- Interactive multi-tab finder widget for Visa, Tour, and Flight inquiries.
- Floating rating badge with continuous spring-physics animation.

### 3. Visa Processing Services (`VisaSection.jsx`)
- Categorized visa directory (Europe & UK, North America, Asia & Turkey).
- High-definition country flag integration (`flagcdn`) ensuring uniform cross-platform rendering.
- Quick-view specifications (processing timeframe, validity, starting fee).
- Interactive document requirements modal popup.

### 4. Curated Tour Packages (`PackagesSection.jsx`)
- Vacation packages grid featuring high-resolution destination imagery and hover zoom effects.
- Inclusions checklist (Roundtrip Flight, 5-Star Hotel, Private Transfer, Daily Breakfast).
- Day-by-Day itinerary timeline popup modal.

---

## Tech Stack & Dependencies

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | React 19 |
| **Build Tooling** | Vite 6 |
| **Styling Engine** | Tailwind CSS v4 |
| **Animation Library** | Framer Motion |
| **Iconography** | Lucide React |
| **Translation Engine** | Google Translate Client API |

---

## Project Structure

```text
rozana-tours-travel/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.jpeg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── VisaSection.jsx
│   │   └── PackagesSection.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md