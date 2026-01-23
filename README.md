# SOLAMI BEACH BABES

---

---

## About This Repo

`solami-beach-babes` is a published landing-page artefact for an unreleased Solana NFT project. The site remains live as a historical snapshot: minting and wallet flows are intentionally disabled, and the codebase is maintained only to stay buildable and deployable.

### Purpose & Scope

- Preserve a public landing page for the project and its narrative.
- Keep the UX frozen (“MINT CLOSED”, no wallet prompts, no transaction flows).
- Ensure long-term deployment stability (fast, minimal, production-safe).

### Blockchain

- Intended chain: **Solana**
- Status: unreleased; the on-chain mint did not launch after the landing page was published.

### Technology

- Framework: **Next.js** (App Router) + **React**
- Styling: **Tailwind CSS**
- Tooling: **npm**, **ESLint**, **TypeScript**
- Deployment: **Vercel**

### How We Maintain Quality

- We follow **Prof. NOTA Evergreen Standard** while keeping artefact behavior unchanged.
- We validate changes with audit + lint + build, and document runs under `EVERGREENING/completion-log-*.md`.

### Context (Project Story)

This project was originally planned as a Solana NFT release. After the landing page went live, the co-founder, that is the main developer disappeared without clear communication, and the mint never launched. The current maintenance goal is preservation and operational stability, not feature expansion.

## Maintenance by Prof. NOTA Evergreen Standard

This repo is a **Live Artefact App**: the user-facing UX is intentionally frozen
("MINT CLOSED", no wallet prompts), while the codebase remains buildable and
production-safe on Vercel.

### Runtime

- Node: **24.x** (local + Vercel)
- Package manager: **NPM** (lockfile: `package-lock.json`)
- Deploy target: **Vercel**

### Build System

- Next.js **16** (App Router)

### Monthly Safe Updates (recommended)

Monthly is **monitor + verify**, not modernization.

1. Check what’s outdated (report only):

   - `npm outdated`

2. Security report (report only unless explicitly approved):

   - `npm audit --audit-level=moderate`

3. Verify build reproducibility:

   - `npm run lint`
   - `npm run build`

4. Verify production sanity:

   - Confirm "MINT CLOSED"
   - Confirm no wallet prompts / connect flows
   - Confirm no critical console errors

### Major Updates (quarterly / scheduled)

Major upgrades must be done **one at a time**, with a dedicated PR and full testing.
Artefact UX must remain unchanged.

Examples:

- Next.js / React major version
- Solana/web3 stack major version
- Tailwind CSS major version
- Node major policy change

### Artefact UX Policy (Frozen)

- Minting must remain **disabled**
- Wallet connect must remain **disabled**
- Any functional change requires a versioned successor (new tag/release)

---

---

## Usage

### Install dependencies

```bash
npm install
```

### Check outdated dependencies

```bash
npm outdated
```

### Upgrade dependencies interactively

```bash
npm update
```

### Start development server

```bash
npm run dev
```

### Check all the code

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm start
```

## Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)

## Join Prof. NOTA Discord

For any questions or suggestions, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).
