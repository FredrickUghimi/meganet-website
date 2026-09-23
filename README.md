# Mega-Net Website

Website for **Mega-Net Software Ltd.** The homepage is a neutral company page that presents the two cloud products — **Mega-Net EHR Cloud** (clinics and hospitals) and **Mega-Net ERP Cloud** (SME business management and accounting) — with equal weight.

🔗 Live site: [meganetsoftware.com.ng](https://meganetsoftware.com.ng) *(pending custom domain setup)*

---

## About

**Mega-Net EHR Cloud** (`ehr-cloud.html`) covers patient management, electronic medical records, appointments, pharmacy, laboratory, billing, financial monitoring, reporting, security, and more, all in one platform for Nigerian clinics and hospitals. **Mega-Net ERP Cloud** (`erp-cloud.html`) covers sales, purchases, banking, expenses, and automatic accounting for small and medium businesses.

Other Mega-Net products (HospitalPro, Revenue Guard, PharmacyPro, Clinic Appointment System, ChurchPro, Mega-Net ERP, Academy) are presented as secondary solutions, linked from a dedicated Solutions section.

## Tech Stack

- Plain **HTML5 / CSS3 / JavaScript** — no frameworks, no build step
- Hosted on **GitHub Pages**
- Custom domain via `CNAME`: `meganetsoftware.com.ng`

## Structure

```
/
├── index.html              → Home (neutral company page, links to both products)
├── ehr-cloud.html          → Mega-Net EHR Cloud product page
├── erp-cloud.html          → Mega-Net ERP Cloud product page
├── features.html           → Full EHR Cloud feature breakdown
├── pricing.html            → Pricing tiers
├── security.html           → Security, MFA, audit trail
├── solutions.html          → Other Mega-Net solutions (index)
├── solutions/               → Individual secondary product pages
├── about.html               → Company story
├── academy.html             → Mega-Net Academy
├── resources/                → Links to the Mega-Net blog (hosted on Blogspot)
├── contact.html              → Contact / demo request
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── CNAME
```

## Contact / Conversion

No backend, no form service — contact is handled via:
- `mailto:` links for demo requests
- WhatsApp deep link for direct chat

## Deployment

This site is served directly by GitHub Pages from the `main` branch root. Pushing to `main` updates the live site automatically.

## Blog

The Mega-Net blog remains hosted separately on Blogspot: [meganetsoftware.blogspot.com](https://meganetsoftware.blogspot.com)

---
© Mega-Net Software Ltd. All rights reserved.
