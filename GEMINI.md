# NPX Design System — AI Agent Instructions (Gemini)

This file is read automatically by Gemini CLI when working in this repository.
The rules below apply to **all** code generation, regardless of which tool triggers it
(Gemini CLI, Figma MCP, Builder.io CLI, GitHub CLI).

---

## MCP Servers

| Server     | Transport | URL                          |
|------------|-----------|------------------------------|
| `figma`    | HTTP      | https://mcp.figma.com/mcp    |
| `storybook`| HTTP      | http://localhost:6006/mcp    |

Use `figma` for all Figma component inspection and `storybook` for story lookup,
documentation retrieval, and story test execution.

---

## Figma Source of Truth

- Design system Figma file: https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System
- DocsTemplate (use as documentation layout reference): https://npxailsa.github.io/design_system/iframe.html?id=foundation-docstemplate--usage-guide&viewMode=story
- Storybook (published): https://npxailsa.github.io/design_system

---

## Figma-to-Code Rules

### 1. Design Tokens — ALWAYS required

- Never use hard-coded colour, spacing, radius, or stroke values.
- All tokens live in:
  - `src/styles/global_design_tokens.json` + `tokens.css`
  - `src/styles/brand_design_tokens.json`
- **Global vs Brand**: New tokens go in `global_design_tokens.json` unless they are
  a brand colour or typeface (those go in `brand_design_tokens.json`). Keep these
  two files strictly separate — never merge them.
- Use CSS custom property references (`var(--token-name)`) in all component styles.
- Full token names must appear in documentation so readers know exactly what to use.

### 2. Versioning

- Every component build, update, or edit must be accompanied by updated documentation.
- Update the Storybook story docs page for that component.
- Bump the relevant section in the changelog / release notes if one exists.

### 3. Styling — Material UI base

- Base UI: **MUI v7.2.0** (`@mui/material`) + **MUI Joy UI v5.15.0** (`@mui/joy`).
- Do NOT use MUI's own design tokens for colours or spacing — pull exclusively from
  the design system token files listed above.
- Final output must be fully responsive:
  - Desktop: 1280–1920 px width
  - Tablet portrait: 834–1280 px width
  - Mobile: 390–700 px width
- Spacing rule: multiples of 8px, with permitted exceptions at 4px, 6px, 12px.
  Use sizing/spacing tokens — never bare numbers.
- Use `spacing/*` tokens for padding, gap, margin.
- Use `radius/*` tokens for `border-radius` only.
- Use `stroke/*` tokens for border/stroke thickness only.
- Use `color/*` tokens for all colour values.

### 4. Typography

- Primary font: **F37 Ginger Pro** (loaded from the design system repo as .woff2).
- Secondary font: **Calibri** (system or Google Fonts fallback).
- Apply `type/*` design tokens for all font-size, line-height, letter-spacing, and
  font-weight values throughout every component.

### 5. Icons

- All icons come from **MUI Icons** (`@mui/icons-material`).
- Install if missing: `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
- Never embed custom SVGs for icons already available in MUI Icons.

### 6. Layout

- Follow an 8px spacing grid (see §3 above).
- Ensure components flex/wrap correctly across all three breakpoints.
- Use CSS Grid or Flexbox — no fixed pixel widths for containers.

### 7. Code Quality

- Language: **React + TypeScript**.
- No `any` types unless absolutely unavoidable (add a comment explaining why).
- Clean, semantic HTML output.
- No unused imports or dead code.
- All props must be documented with JSDoc on the interface.

### 8. Documentation

- The first story exported from every component file must be `Documentation`
  and must render the component's `*Docs` page (using `DocsTemplate` layout).
- Use the `DocsTemplate` found in the Storybook `Foundation` category as the layout.
  Do not alter the template structure.
- Include the full design token names for every prop/variant documented.
- Update docs on every change — no silent updates.

### 9. Figma ↔ Storybook Sync

- A `.figma.tsx` Code Connect file must exist alongside every `*.stories.tsx`.
- If one is missing, run: `npm run figma:generate`
- After updating components, publish: `npm run figma:publish` (requires `FIGMA_TOKEN`).
- Minimum sync cadence: every 24 hours, or on every push that touches a component.

---

## Workflow Checklist (run before every commit)

```
[ ] Design tokens used everywhere — no hard-coded values
[ ] MUI base component used as the underlying primitive
[ ] Responsive across desktop / tablet / mobile
[ ] .figma.tsx exists (run `npm run figma:check`)
[ ] Documentation story updated
[ ] `npm run typecheck` passes
[ ] `npm run build-storybook` passes
```

---

## Useful Scripts

| Script                        | Purpose                                          |
|-------------------------------|--------------------------------------------------|
| `npm run figma:generate`      | Scaffold missing `.figma.tsx` files              |
| `npm run figma:check`         | CI check — exits 1 if any `.figma.tsx` missing   |
| `npm run figma:publish`       | Publish Code Connect files to Figma              |
| `npm run docs:generate`       | Scaffold missing MDX documentation files         |
| `npm run build-storybook`     | Full Storybook build                             |
| `npm run build-storybook:gh-pages` | Build for GitHub Pages deployment           |
| `npm run typecheck`           | TypeScript type check (no emit)                  |

---

## MCP Tool Usage (Storybook)

When inspecting or generating stories, prefer these MCP tools in order:

1. `list-all-documentation` — discover available components
2. `get-documentation` — retrieve docs for a specific component
3. `get-storybook-story-instructions` — get rendering instructions for a story
4. `run-story-tests` — validate story renders without errors

Do **not** hallucinate component props. Always verify against the actual story source
or the Storybook MCP before generating code.

---

## Jest vs Storybook Mocks

- `*.mock.ts` files and `__mocks__/` directories are for Jest unit tests only.
- Use `sb.mock()` exclusively for Storybook story-level mocking.
- Never mix the two systems — they are independent and incompatible.
