# autoEHR Landing Page

HIPAA-first website intake to EHR automation platform.

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion animations
- Shadcn UI components
- Responsive design
- SEO optimized
- Loops.so integration for lead capture
- HIPAA-focused messaging

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Copy `.env.local.example` to `.env.local` and add your Loops.so API credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:
- `LOOPS_API_KEY` - Your Loops.so API key
- `LOOPS_TRANSACTIONAL_ID` - Your transactional email template ID

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deploy

Deploy to Vercel:

```bash
vercel
```

## License

Copyright © 2025 autoEHR. All rights reserved.
