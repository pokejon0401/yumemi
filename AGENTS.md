# YUMEMI contributor guide

This repository is an Astro content site for Japanese adult women concerned about nightmares, sleep and morning wellbeing.

## Before editing

- Read `docs/EDITORIAL.md` before creating or changing health content.
- Run `npm install` when dependencies are missing, then `npm run build` before committing.
- Do not edit generated `dist/` files.
- Keep medical information and dream-fortune interpretations visibly separate.

## Add an article

1. Copy `src/content/articles/_template.md.txt` to `src/content/articles/<english-slug>.md`.
2. Fill every frontmatter field. Keep `draft: true` until fact checking is complete.
3. Link to one pillar article and two relevant supporting articles using site-relative links.
4. Cite primary/public sources for health claims. Never invent a reviewer or credentials.
5. Change to `draft: false` only after the editorial checklist passes.

## Architecture

- Content: `src/content/articles/*.md`
- Content schema: `src/content.config.ts`
- Routes: `src/pages/`
- Shared UI: `src/components/`
- Layout and SEO: `src/layouts/BaseLayout.astro`
- Global styling: `src/styles/global.css`
- Static assets: `public/`

Prefer data/content changes over one-off markup. Do not add a page manually when a content entry or collection route can produce it.
