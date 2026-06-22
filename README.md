# Nexny – B2B Salg, Mødebooking & Digital Vækst

Officiel hjemmeside for [Nexny](https://nexny.dk) – en professionel B2B salgs- og mødebookingvirksomhed med specialer inden for telemarketing, leadgenerering og digitale løsninger.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **React Router v6** (routing)
- **Lucide React** (ikoner)
- **Vercel** (hosting)

## Kom i gang

```bash
npm install
npm run dev
```

Åbn [http://localhost:5173](http://localhost:5173) i din browser.

## Scripts

| Kommando | Beskrivelse |
|---|---|
| `npm run dev` | Start udviklingsserver |
| `npm run build` | Byg til produktion |
| `npm run preview` | Forhåndsvis produktionsbuild |
| `npm run lint` | Kør ESLint |

## Sidestruktur

```
/                        → Forside
/ydelser                 → Ydelser (telemarketing, mødebooking m.m.)
/om-os                   → Om Nexny
/kontakt                 → Kontakt
/priser                  → Priser & Pakker
/samarbejdspartner       → Bliv samarbejdspartner
/modebooking-priser      → Mødebooking priser
/leadgenerering          → Leadgenerering
/freelance-telemarketing → For freelance sælgere
/blog                    → Blog oversigt
/blog/:slug              → Individuelle blogindlæg

/digital/webudvikling    → Webudvikling
/digital/api-saas        → API & SaaS
/digital/hjemmesider     → Hjemmesider
/digital/ai-integration  → AI Integration

/jobs/arbejd-hjemmefra   → Freelance job: hjemmekontor
/jobs/web-bureau         → Freelance job: web bureau
/jobs/led-belysning      → Freelance job: LED belysning
/jobs/energi-salg        → Freelance job: energi salg
/jobs/kaffe-service      → Freelance job: kaffe service
/jobs/solenergi          → Freelance job: solenergi
/jobs/matte-service      → Freelance job: matte service
/jobs/pensionsordning    → Freelance job: pension
/jobs/inkasso            → Freelance job: inkasso
```

## Deployment

Siden er hostet på **Vercel** med automatisk deployment fra `main` branchen.

### DNS-opsætning (Simply.com)

For at tilkoble nexny.dk domænet:

| Type | Navn | Værdi |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

### SPA Routing

`vercel.json` indeholder en rewrite-regel der sender alle routes til `index.html`:

```json
{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}
```

## Kontakt

- **Email:** kontakt@nexny.dk
- **Web:** [nexny.dk](https://nexny.dk)
