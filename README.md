# Beauty Lounge by Ashabi

E-commerce website for **Beauty Lounge by Ashabi** — a Nigerian hair brand based in Ibadan specialising in human hair wigs, hair blends, bridal hair, and hair revamp services.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Styling** — Tailwind CSS
- **Database** — Supabase (Postgres)
- **Image Storage** — Supabase Storage
- **Auth** — NextAuth.js
- **Deployment** — Vercel

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # All public pages
│   ├── (auth)/          # Admin login
│   ├── admin/           # Product management dashboard
│   └── api/             # Route handlers
├── components/
│   ├── layout/          # Navbar, Footer, WhatsApp button
│   ├── sections/        # Page sections (Hero, ProductGrid, etc.)
│   └── ui/              # Reusable UI components
├── lib/                 # DB client, utils, validators
└── hooks/               # Custom React hooks
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/shop` | Product catalogue |
| `/shop/[slug]` | Single product detail |
| `/bridal` | Bridal hair packages |
| `/revamp` | Hair revamp service |
| `/reviews` | Customer reviews |
| `/about` | Brand story |
| `/contact` | Contact, FAQ, how to order |
| `/admin` | Product management (protected) |
