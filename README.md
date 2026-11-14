# Cookie Kits by Kris

Cookie Kits by Kris is a Spanish-language informational storefront for a Costa Rican cookie-kit business. The page presents products and prices, explains how to order and coordinate delivery, answers common questions, and links customers to WhatsApp and Instagram. It does not process payments or collect customer data.

## Stack

- Next.js 14 App Router with React and TypeScript
- Tailwind CSS for styling
- Headless UI and Framer Motion for accessible interactions and animation
- `next/image` and `next/font` for optimized images and fonts
- Vercel Analytics and Speed Insights when deployed on Vercel

## Run locally

Requires Node.js 18 or later.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other project scripts are `npm run lint`, `npm run build`, and `npm start`.

## Where to make changes

- `src/data/` contains the page copy, products, prices, contact details, order details, and FAQs.
- `src/components/` contains the reusable page sections and interactions.
- `src/app/` contains the page composition, document metadata, and global styles.
- `public/images/` contains the product, ingredient, testimonial, and hero assets.
- `.github/copilot-instructions.md` describes the project purpose, conventions, and source files.

Keep customer-facing copy in Spanish and product prices in Costa Rican colones. Update `src/data/siteDetails.ts` for site identity and metadata, and `src/data/footer.ts` for contact details and social links. Do not publish unverified business details or placeholder testimonials.
