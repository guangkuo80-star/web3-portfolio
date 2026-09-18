# Web3 Portfolio

Personal portfolio landing page — the **aggregator entry** that lists all my Web3 demos. Built with Next.js 15, Tailwind CSS, deployed on Vercel.

Every linked demo runs on **Sepolia testnet** only. No mainnet, no real funds, no sensitive financial flows.

## Live links

| What | Where |
| --- | --- |
| 🌐 Portfolio (this site) | https://web3-portfolio.vercel.app _(replace with your own Vercel URL)_ |
| 🎨 NFT Gallery demo | https://web3-nft-gallery.vercel.app _(replace after first deploy)_ |
| 💻 NFT Gallery source | https://github.com/YOUR_USERNAME/web3-nft-gallery |

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** (custom dark theme)
- **Vercel** (hosting, auto-deploy from GitHub)

## Project structure

```
web3-portfolio/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home page — hero + project grid
│   └── globals.css          # Tailwind + custom utilities
├── components/
│   ├── Header.tsx           # Sticky nav
│   ├── Hero.tsx             # Headline + availability badge
│   ├── ProjectCard.tsx      # Reusable card for each demo
│   └── Footer.tsx           # Contact + freelance CTA
├── lib/
│   └── projects.ts          # Single source of truth for the project list
├── .env.example             # Copy to .env.local
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Local development

```bash
# 1. Install
npm install

# 2. Configure env
cp .env.example .env.local
#   → edit .env.local with your GitHub username, contact info, demo URLs

# 3. Run
npm run dev
# → http://localhost:3000
```

## Environment variables

All prefixed with `NEXT_PUBLIC_` so they are exposed to the browser (safe — no secrets here).

| Key | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | ✅ | Used to build repo links in header/footer/cards |
| `NEXT_PUBLIC_EMAIL` | optional | Shown in footer contact list |
| `NEXT_PUBLIC_LINKEDIN` | optional | LinkedIn profile URL |
| `NEXT_PUBLIC_DISCORD` | optional | Discord handle |
| `NEXT_PUBLIC_DEMO_NFT_GALLERY` | optional | Vercel URL of the NFT gallery demo (fills the "Live demo" button) |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | optional | Reserved for future wallet-on-portfolio |

⚠️ **Never commit `.env.local`.** It is already in `.gitignore`. On Vercel, add each key via _Project → Settings → Environment Variables_.

## Adding a new demo

Edit [`lib/projects.ts`](./lib/projects.ts) and append a new entry:

```ts
{
  slug: "my-new-demo",
  name: "My New Demo",
  tagline: "One-line pitch.",
  description: "Two-to-three sentence summary.",
  stack: ["Next.js 15", "viem", "..."],
  network: "sepolia",
  status: "live",           // or "wip" | "planned"
  demoUrl: process.env.NEXT_PUBLIC_DEMO_MY_NEW_DEMO,
  repoUrl: `https://github.com/${gh}/my-new-demo`,
  highlights: ["...", "...", "..."],
}
```

Then set `NEXT_PUBLIC_DEMO_MY_NEW_DEMO` in `.env.local` and in Vercel.

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/web3-portfolio.git
git push -u origin main
```

### 2. Import into Vercel

1. Go to https://vercel.com/new
2. **Import Git Repository** → pick `web3-portfolio`
3. Framework Preset: **Next.js** (auto-detected)
4. Root Directory: `./` (leave default)
5. Expand **Environment Variables** and paste every key from your `.env.local`
6. Click **Deploy** — first build takes ~60s

### 3. Auto-update on push

Every `git push origin main` triggers a production deploy on Vercel automatically. Preview URLs are generated for each PR.

### 4. (Optional) Custom domain

_Project → Settings → Domains_ → add your domain → follow DNS instructions.

## License

MIT — feel free to fork this as your own portfolio template.

## Author

Frontend engineer transitioning into Web3. Open for freelance work — see footer for contact links.
