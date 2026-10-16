# MC PRODUCTS · HOMEMADE

Premium, mobile-first Next.js website for **MC PRODUCTS, Sri Lanka**.

> The complete editable website source, illustrated SVG artwork, carefully prepared product photos, icons, animated interactions, and a QR generator are included. This is a static website with WhatsApp ordering (not an e-commerce payment backend).

## What's included

- Next.js App Router + TypeScript + React
- Responsive 2026 editorial/artisan design, motion animations and accessibility-friendly reduced motion
- Sinhala-first content with English toggle (language preference remembered locally)
- Three individual product pages accessible from product-specific QR URLs:
  - `/products/grain-drink/` – ධාන්‍යමය පෝෂදායී පානය (200g)
  - `/products/kollu-kenda/` – කොල්ලු කැඳ (150g)
  - `/products/grain-aggala/` – පෝෂණීය ධාන්‍යමය අග්ගලා (200g, **fine powder mix**, not ready-made balls)
- Interactive preparation steps, ingredients, FAQ, product navigation
- Direct WhatsApp ordering with product name and selectable quantity already in the message
- Sticky mobile order bar, menu, illustrations, animated product cards
- SEO metadata, per-product Open Graph, sitemap, robots, installable-app manifest, favicon
- Static output (can deploy without running your own server)
- QR code PNG + SVG + printable PNG cards for all three products (sample URLs until domain is supplied)

## 1. Run locally

Install Node.js 20+ (22 recommended). In a terminal:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit **http://localhost:3000**.

If on Windows, copy `.env.example` to `.env.local` manually.

## 2. Set your real website domain and WhatsApp number

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR_REAL_WEBSITE_DOMAIN
NEXT_PUBLIC_WHATSAPP_NUMBER=94773418738
```

- **Important:** `NEXT_PUBLIC_SITE_URL` must be the exact public **HTTPS** domain where this website is actually deployed. The default `.example` domain is a deliberately **non-working placeholder**.
- WhatsApp number uses Sri Lankan international-format digits with no `+` or initial `0`.
- Website brand, address, original photos: `/lib/site.ts`, `/data/products.ts`, `/public/`.

## 3. Deploy (Vercel / Cloudflare Pages / Netlify)

For Vercel:
1. Put this project in a GitHub repository.
2. Create a Vercel project linked to that repository.
3. Set the 2 environment variables above in project settings. **Use your actual Vercel-provided deployed URL or custom domain.**
4. Deploy the project. `next build` exports static HTML to `out/`.
5. Confirm these paths load on a PHONE browser over mobile data, outside local Wi-Fi:
   - `https://YOUR-DOMAIN/`
   - `https://YOUR-DOMAIN/products/grain-drink/`
   - `https://YOUR-DOMAIN/products/kollu-kenda/`
   - `https://YOUR-DOMAIN/products/grain-aggala/`

For static hosting, the build command is `npm run build` and output folder is `out`.

**No hosting, domain, or deployment was performed for you.** The code is prepared for deployment.

## 4. Generate real scannable product QR codes

**The supplied QR codes are SAMPLES. Do NOT print them on your packaging yet.** They encode `https://your-real-domain.example/...` and cannot open a live site. This is necessary because you haven't provided a real site URL.

After the site is live at your real HTTPS URL:

```bash
python -m pip install -r scripts/requirements-qr.txt
python scripts/generate_qr.py --base-url https://YOUR_REAL_WEBSITE_DOMAIN
```

Generates three distinct links:

| Product | QR destination |
| --- | --- |
| Grain drink | `https://YOUR_REAL_WEBSITE_DOMAIN/products/grain-drink/` |
| Kollu Kenda | `https://YOUR_REAL_WEBSITE_DOMAIN/products/kollu-kenda/` |
| Grain Aggala Mix | `https://YOUR_REAL_WEBSITE_DOMAIN/products/grain-aggala/` |

New files are saved in `public/qr/`:

- `<product>.png` – raw high-resolution QR code
- `<product>.svg` – scalable print-quality vector QR
- `<product>-print-label.png` – designed 900×1100 QR sticker/card
- `qr-manifest.json` – exact encoded destination for each code

**Rebuild/redeploy** the website after regenerating QR files so the new codes appear on product pages.

Print verification checklist:
1. Scan the **actual printed** QR with at least 2 different phones.
2. Make sure it opens the right product page on cellular data.
3. Tap **How to prepare** and check ingredients/steps.
4. Tap **Order via WhatsApp**, verify the message names the correct item.
5. Only then print packaging in bulk. Keep high QR contrast and white quiet zone.

## 5. Update content safely

Open `data/products.ts`:
- Name, Sinhala/English descriptions, ingredient lists
- `preparation[]` interactive guide
- `priceLkr`, `grams`
- FAQs, product badge
- Illustration / image paths

The owner **must confirm exact preparation instructions, ingredient quantities, nutrition figures, allergen notices, shelf life, shipping/returns, stock and retail prices** before launch. Some original packaging text is not fully readable. The implementation therefore uses a **conservative illustrative preparation guide** and explicitly directs readers to the printed package for exact amounts and food-safety instructions.

Pricing sourced from dated sample packaging photographs:
- Grain drink 200g: LKR 330
- Kollu Kenda 150g: LKR 240
- Grain Aggala 200g: **price not clearly confirmed; shows “ask for price”**

Update these values after verifying current prices. Do not treat example printing-date information as a live stock or expiry claim.

Aggala product accurately displays the **light tan powder inside the packet**. The app does not falsely suggest pre-made balls are already inside it.

## 6. Design assets

`public/images/products/` – transformed, optimized foreground photos **from your supplied business images**, plus original reference photos in WebP.

`public/illustrations/` – fully editable original SVG files (grains, cup, bowl, aggala, botanical leaves, seal).

`public/logo.svg` – editable vector brand-mark approximation. Use a supplied official master logo file if a pixel-perfect brand reproduction is needed.

`public/qr/` – generated QR assets.

Icons are vector icons provided through the `lucide-react` package. Framer Motion and CSS implement animations. No proprietary animation or stock-image API needed.

## 7. UI / UX details

- Phone-first touch targets; sticky WhatsApp CTA on product pages
- Responsive desktop/tablet/phone grids
- Accessible main navigation and skip link
- Keyboard-operable FAQs / guide controls / quantity stepper
- Animated transitions with `prefers-reduced-motion` support
- Static routes: fast, cacheable, low maintenance
- Product-specific shareable URLs and metadata
- Sinhala-first, with English translation toggle
- No database, payment processing, tracking pixels or fictitious reviews

## 8. Scope / final QA

This is a **complete source project**, but it has **not been built in this environment** because access to the public npm registry was unavailable. Run `npm install && npm run build` on a machine with internet access. Check real browsers and devices before commercial launch. Product information in the copy must be approved by the owner.

The QR code PNGs were **decoded successfully** in a local scanner test and correctly encode three unique sample URLs. Their destinations are not publicly accessible until a real live domain is provided and the QR codes regenerated.

### Suggested improvements for the next phase

- A real domain and HTTPS hosting
- Owner-verified recipe text + professional ingredient/allergen panels
- Official vector logo / professional package photos if available
- Delivery area and delivery-fee policy, inventory management and order statuses
- Optional Google Analytics with privacy controls (only after consent/policy decisions)
- Optional customer service / wholesale inquiry workflows

---

### Sinhala quick start / සිංහලෙන්

1. ZIP එක Extract කරන්න.
2. Node.js install කරලා project folder එකේ `npm install` හා `npm run dev` භාවිත කරන්න.
3. Browser එකේ `http://localhost:3000` බලන්න.
4. `.env.local` එකට ඔබේ **ඇත්තම website domain** සහ WhatsApp අංකය දාන්න.
5. Website එක deploy කරන්න (Vercel හෝ වෙනත් hosting එකක).
6. **Website එක LIVE වුණාට පස්සේ** `python scripts/generate_qr.py --base-url https://ඔබේ-domain` ධාවනය කරන්න.
7. නව QR කේත scan කරලා පරීක්ෂා කරලා පමණක් පැකට්ටුවලට මුද්‍රණය කරන්න.
8. `data/products.ts` තුළ මිල, අමුද්‍රව්‍ය සහ සැකසීමේ පියවර නිවැරදි බව තහවුරු කරන්න.

**දැනට ZIP එකේ ඇති QR codes ඇත්තම website එකකට නොයන SAMPLE codes බව මතක තබාගන්න.**
