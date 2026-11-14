# Copilot instructions

## Project purpose

Cookie Kits by Kris is a Spanish-language, single-page informational storefront for a Costa Rican cookie-kit business. It presents products and prices, explains order and delivery details, answers FAQs, and links customers to WhatsApp and Instagram. The site does not take payments or collect customer data.

## Important constraints

- Keep all customer-facing page content in Spanish. Preserve the existing brand voice and meaning when editing copy; do not translate it into English.
- Keep prices in Costa Rican colones and preserve the Costa Rica contact details and WhatsApp flow.
- Use only confirmed business details. Do not invent delivery fees, schedules, allergy guarantees, or testimonials; only publish customer feedback when it is genuine and approved.
- Prefer small, focused changes that fit the existing Next.js App Router, React, TypeScript, and Tailwind CSS setup.
- Keep reusable UI in `src/components/`, page copy and business details in `src/data/`, and shared TypeScript contracts in `src/types.ts`.
- Use semantic HTML, keyboard-operable controls, visible focus states, descriptive accessible names, and reduced-motion support for interactive or animated UI.
- Use `next/image` for local images and avoid hard-coded asset paths when a matching data value already exists.
- Do not add a dependency for functionality already provided by the current stack, including Headless UI, Tailwind, and Next.js.

## Source map

### Application

- `src/app/page.tsx` composes the landing page sections.
- `src/app/layout.tsx` defines the document shell, fonts, global navigation/footer, metadata, analytics, and the main-content landmark.
- `src/app/globals.css` contains global design tokens, typography, and shared CSS utilities.
- `src/types.ts` defines the data contracts used by page sections and dialogs.
- `src/utils.tsx` maps supported social-platform names to their icons.

### Components

- `src/components/Header.tsx` renders the brand and responsive in-page navigation.
- `src/components/Footer.tsx` renders the business description, section links, contact methods, and social links.
- `src/components/Hero.tsx` renders the landing-page introduction and its decorative video/poster.
- `src/components/Container.tsx` provides the shared centered page-width wrapper.
- `src/components/Section.tsx` and `src/components/SectionTitle.tsx` provide shared section layout and heading styles.
- `src/components/OrderInfo.tsx` explains the order steps, delivery point, payment methods, and contact options.
- `src/components/Pricing/Pricing.tsx` renders the product grid and its show-more control.
- `src/components/Pricing/PricingColumn.tsx` renders one product card and controls its enlarged-image dialog.
- `src/components/Pricing/WhatsAppButton.tsx` creates a pre-filled WhatsApp order link for a product.
- `src/components/Modals/pricingModal.tsx` displays an accessible enlarged product image.
- `src/components/FAQ.tsx` presents the frequently asked questions as disclosures.

### Content and configuration

- `src/data/siteDetails.ts` holds the site identity, canonical URL, locale, metadata, and optional analytics ID.
- `src/data/menuItems.ts` supplies the header navigation links.
- `src/data/footer.ts` supplies footer copy, contact information, social URLs, and footer links.
- `src/data/hero.ts` supplies the hero heading, introduction, video, and poster image.
- `src/data/orderInfo.ts` supplies confirmed order, delivery, and payment details.
- `src/data/pricing.ts` supplies product names, colón prices, features, and product images.
- `src/data/faq.ts` supplies FAQ questions and answers.
- `tailwind.config.ts` defines the design-token extensions and animations used by Tailwind classes.
- `package.json` defines scripts and dependencies; use the existing scripts for validation.
- `public/images/` contains the product and hero assets; `heroVideo.mp4` is the hero video.

