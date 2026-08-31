# Rozana Tours & Travels — Web Application

Official enterprise web portal for **Rozana Tours & Travels (روزانة للسياحة والسفر)**, an accredited premier travel and visa consultancy based in Riyadh, Kingdom of Saudi Arabia.

---

## Technical Overview

The application is built as a high-performance Single Page Application (SPA) designed to convert visitors into qualified travel and visa inquiries. It features bilingual localization, interactive data-driven components, and smooth micro-interactions.

### Key Architecture Highlights
- **Dynamic Localization Engine**: Integrated background Google Translate Client Engine enabling instant English and Arabic (RTL) full-page translation without layout disruption.
- **Data-Driven Architecture**: Fully modular components for Visa Services, Tour Packages, and Umrah Pilgrimages with structured datasets.
- **Physics-Based Micro-Interactions**: Framer Motion entrance animations, scroll reveals, spring physics, and animated modal drawers.
- **Conversion Funnel**: Pre-filled WhatsApp deep-linking mapping user selections directly to senior travel consultants.

---

## Core Modules & Features

### 1. Navigation & Top Announcement Bar (`Navbar.jsx`)
- Sticky glassmorphic header with backdrop blur effect on scroll.
- Top announcement bar with 24/7 VIP contact info, Riyadh location details, and language switcher.
- Responsive mobile drawer navigation.

### 2. Interactive Hero & Finder Console (`Hero.jsx`)
- Asymmetric split layout with value propositions and licensed operator trust badges.
- Multi-tab travel finder console (*Visa Services*, *Tour Packages*, *Flights & Hotels*).
- Animated floating 4.9-star rating badge and Saudi trust metrics counter.

### 3. Visa Assistance Services (`VisaSection.jsx`)
- Categorized visa directory (Europe & UK, North America, Asia & Turkey).
- High-definition country flag integration via FlagCDN for uniform cross-platform rendering.
- Quick specifications (turnaround time, validity, starting fee in SAR).
- Interactive document requirements modal popup.

### 4. Curated Luxury Tour Packages (`PackagesSection.jsx`)
- High-resolution destination image cards with hover zoom and badge overlays.
- Inclusions checklist (Flights, 5-Star Hotel, Private Transfer, Daily Breakfast).
- Day-by-Day itinerary timeline popup modal.

### 5. VIP Umrah & Religious Tourism (`UmrahSection.jsx`)
- Specialized high-end pilgrimage packages (Fairmont Makkah Clock Tower, Oberoi Madinah, Pullman Zamzam).
- Nusuk permit assistance, 5-star Kaaba view hotel coordination, and private GMC transfers.
- Custom Umrah quotation inquiry banner.

### 6. About Us & Heritage (`AboutSection.jsx`)
- Official agency story, Riyadh office location (*Umm Al Hamam Al Sharqi District*), and consultant contact spotlight.
- 4 Core Trust Pillars: Licensed Excellence, 99.6% Visa Success, Personalized Care, and 24/7 Support.

---

## Tech Stack & Dependencies

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | React 19 |
| **Build Tool** | Vite 6 |
| **Styling Framework** | Tailwind CSS v4 |
| **Animation Library** | Framer Motion |
| **Iconography** | Lucide React |
| **Translation Engine** | Google Translate Client API |
| **Assets & Flags CDN** | FlagCDN |

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
│   │   ├── PackagesSection.jsx
│   │   ├── UmrahSection.jsx
│   │   └── AboutSection.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md