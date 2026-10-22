# Bright Bazar

Bright Bazar is an online store for fashion, electronics, sports and outdoors, beauty, and furniture. Shoppers browse categories, search the catalog, open a product, save favorites, and add items to the cart.

The storefront lives in `starters/shopify-algolia`.

## Pages

- **Home** — sale banner, hero carousel, new arrivals, and featured categories.
- **Category** (`/category/...`) — category landing pages and product listings with filters.
- **Search** (`/search`) — product search.
- **Product** (`/product/[slug]`) — images, variants, reviews, and add to cart.
- **Reviews** (`/reviews/[slug]`) — reviews for a product.
- **Favorites** (`/favorites`) — saved products.

The header shows the Bright Bazar name, category menu, search, favorites, and cart. The footer lists the store address, phone numbers, and email addresses.

## Contact

These details appear in the footer on every page:

- **Address:** 27 Market Arcade, Banjara Hills, Hyderabad 500034
- **Phone:** +91 40 4500 9100
- **Alternative phone:** +91 40 4500 9101
- **Email:** hello@brightbazar.shop
- **Alternative email:** support@brightbazar.shop

## Catalog

The navigation covers:

- Fashion — women, men, and kids
- Electronics — audio, cameras, smartphones, laptops, and screens
- Sports & Outdoors — exercise equipment, outdoor gear, sportswear, and athletic footwear
- Beauty — skin care, makeup, haircare, and fragrances
- Furniture — living room, bedroom, and office

## Stack

- Next.js App Router
- Shopify for product and category data
- Algolia for search, filtering, and recommendations
- Tailwind CSS

Without live Shopify and Algolia keys, the app can run against the demo catalog in `public/demo-data.json`.

## Getting started

From this folder:

```bash
npm run install:store
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm start` serves a production build. Run `npm run build` first.

## Scripts

From this folder:

- `npm run install:store` installs the storefront dependencies
- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm start` serves the production build

Inside `starters/shopify-algolia`, `npm test` runs unit tests and `npm run e2e` runs the Playwright check for the page title.
