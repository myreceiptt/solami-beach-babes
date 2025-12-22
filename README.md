# FUCK YOU MOTHER FUCKERS

---

---

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

   - `npm run build`

4. Verify production sanity:

   - Confirm artefact UX is unchanged
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

Known pinned security advisories (no non-breaking fix):
- bigint-buffer via `@solana/spl-token`
- node-fetch via `@solana/spl-token-registry`

---

---
## Usage

### Install dependencies

```bash
yarn
```

### Check outdated dependencies

```bash
yarn outdated
```

### Upgrade dependencies interactively

```bash
yarn upgrade-interactive --latest
```

### Start development server

```bash
yarn dev
```

### Check all the code

```bash
yarn run lint
```

### Create a production build

```bash
yarn build
```

### Preview the production build

```bash
yarn start
```

## Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)

## Join Prof. NOTA Discord

For any questions or suggestions, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).
