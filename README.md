# Julius T. Francisco: Portfolio

A single-page developer portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and framer-motion.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run build` | Production build                     |
| `npm start`     | Serve the production build           |
| `npm run lint`  | ESLint (Next.js + TypeScript rules)  |

Copy `.env.example` to `.env.local` and set `SITE_URL` if you want production-like URLs locally.

## Editing content

**All content lives in [`data/profile.ts`](data/profile.ts)**, typed by [`types/profile.ts`](types/profile.ts). Components contain no personal content, so you never need to touch them to update text.

- `person`: name, title, pitch, summary, email, GitHub/LinkedIn URLs, resume path
- `about`: About section heading, paragraphs, and the facts list (location, time zones, what you're looking for)
- `contact`: Contact section heading and message
- `caseStudy`: the Quinns suite
  - `gallery`: product screens in a 2-column grid, each with a caption (`width`/`height` must match the image)
  - `apps[]`: name, summary, screenshot, and `device` (`"phone"` or `"tablet"` frame)
  - `playStoreUrl` / `playStoreLabel`: set the URL to `""` to hide the button
  - `stack`, `problem`, `solution`, `impact`
- `clientWork[]`: client sites, each with `client`, `url`, `role`, `summary`, `stack`, optional `company` (shows "· at …") and optional `note` (short context box)
- `experience[]`: timeline entries; optional `companyUrl` links the company name
- `skills`, `education`, `certifications`

Search the file for `TODO` to find anything that still needs your input.

Skill badge icons are chosen with the `icon` key (see `TechIconKey` in `types/profile.ts` and the map in `lib/tech-icons.ts`).

## Media: screenshots and resume

Everything goes in `public/`:

| File                                   | Purpose                                  |
| -------------------------------------- | ---------------------------------------- |
| `public/resume.pdf`                    | Hero "Resume (PDF)" button               |
| `public/images/profile.jpg`            | Hero photo (4:5 portrait; update `person.photo` width/height if replaced) |
| `public/projects/quinns/pos-*.webp`    | Quinns POS tablet screens (gallery; `pos-home.webp` is also the POS card) |
| `public/projects/quinns/admin.webp`     | Quinns Admin screenshot                  |
| `public/projects/quinns/driver.jpg`    | Quinns Driver screenshot                 |

Missing files show a styled placeholder instead of a broken image. The check runs on the server at build time, so **restart `npm run dev` or rebuild after adding files**. App screenshots display in a phone frame (9:19.5, e.g. 1080×2340) or, with `device: "tablet"`, a landscape tablet frame (5:3, e.g. 804×480). If you replace a gallery image, update its `width`/`height` too. **Blur customer names, phone numbers, and addresses before adding real screenshots.**

## Project structure

```
app/                  layout (metadata, fonts), page, opengraph-image, sitemap, robots
components/
  layout/             SiteHeader, MobileNav (client), SiteFooter, SocialLinks, SkipLink
  sections/           Hero, About, Projects (+ projects/*), Experience, Skills, Certifications, Contact
  ui/                 Button, Badge, Card, Container, Section, SectionHeading,
                      MediaFrame, MediaPlaceholder, Reveal (client)
data/profile.ts       all site content
types/profile.ts      content types
lib/                  cn(), site constants + SITE_URL, metadata/JSON-LD, asset checks, icon map
```

Everything is a Server Component except `MobileNav` (menu toggle) and `Reveal` (scroll animation, disabled for `prefers-reduced-motion`).

## Deploy to Railway from GitHub

1. Push this repo to GitHub.
2. In [Railway](https://railway.com), choose **New Project → Deploy from GitHub repo** and pick the repo. Railway detects Next.js and runs `npm run build` and `npm start` automatically.
3. Under the service's **Settings → Networking**, click **Generate Domain** (or add a custom domain).
4. `SITE_URL` is optional on Railway: the site uses Railway's generated domain (`RAILWAY_PUBLIC_DOMAIN`) automatically. Set `SITE_URL` (with `https://`, no trailing slash) only for a custom domain, then **redeploy**, since it's read at build time.
5. Every push to the default branch redeploys automatically.

Once it's live, check the share card with an Open Graph debugger and `https://<your-domain>/sitemap.xml`.
