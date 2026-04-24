# NPX Design System — Context & Instructions for AI Agents

> **Audience**: AI agents (Gemini CLI, Google Code Assist, Builder.io Fusion, GitHub Copilot)
> and human contributors. All rules in this file are mandatory unless explicitly marked optional.
>
> **Source of truth**: this file consolidates `AGENTS.md`, `GEMINI.md`,
> `gemini-context/coding-standards.md`, `gemini-context/implementation-rules.json`,
> and related configuration. When this file and another file conflict, this file wins.
> Keep them in sync.

---

## 1. Project Overview

| Property | Value |
|---|---|
| Package name | `@npxailsa/design-system` |
| Repository | `npxailsa/design_system` (source) → `NPXInnovation/design_system` (canonical) |
| Storybook (published) | https://npxailsa.github.io/design_system |
| Figma source file | https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System |
| Chromatic | https://main--69b1afa12d84753b425f1721.chromatic.com |

---

## 2. Tech Stack

| Concern | Technology | Version |
|---|---|---|
| Language | TypeScript (strict mode) | 5.3+ |
| UI framework | React (functional components, hooks-first) | 18.x |
| Component base | MUI Material | v7.x |
| Design reference | MUI Joy UI v5 (API shape / interaction model) | v5.x |
| Styling | CSS Modules + CSS custom properties (design tokens) | — |
| Icons | `@mui/icons-material` | v7.x |
| Build tool | Vite | 6.x |
| Documentation | Storybook | **min 10.2.17** |
| Visual regression | Chromatic (TurboSnap — `onlyChanged: true`) | — |
| Accessibility | `@storybook/addon-a11y` (runs on every story) | — |
| Primary font | F37 Ginger Pro (`.woff2`, loaded from repo) | — |
| Secondary font | Calibri (system / Google Fonts fallback) | — |

> **Note on MUI**: every component must sit on an MUI Material v7 primitive
> (`InputBase`, `Button`, `Typography`, `Box`, etc.). MUI Joy UI v5 was used as
> the *design reference* for API shape — it is not a runtime dependency.
> Do **not** use MUI's own design tokens for colours or spacing; pull
> exclusively from the design system token files described in §3.

---

## 3. Design Token Architecture

### 3.1 File Locations

| File | Purpose |
|---|---|
| `src/styles/global_design_tokens.json` | Global primitive tokens — spacing, radius, stroke, colour, typography scale, opacity |
| `src/styles/brand_design_tokens.json` | Brand tokens — **brand colours and typefaces only** |
| `src/styles/tokens.css` | Component-level CSS custom property aliases (`--component-property: var(--global-token)`) |

### 3.2 Global vs Brand — Strict Separation Rule

- **Never merge** `global_design_tokens.json` and `brand_design_tokens.json` into a single file.
- Any new token goes into `global_design_tokens.json` **unless** it is a brand colour or typeface.
- Brand colours and typefaces go in `brand_design_tokens.json` and nowhere else.

### 3.3 Token Naming Convention

```
Global primitives:   --global-{category}-{subcategory}-{value}
                     e.g. --global-spacing-sizing-8px
                          --global-color-neutral-gray-300
                          --global-spacing-radius-4px
                          --global-spacing-stroke-1px

Brand tokens:        --brand-{name}
                     e.g. --brand-primary
                          --brand-typeface-primary

Component aliases:   --{component}-{property}[-{variant}]
                     e.g. --button-bg-primary
                          --input-border-color-focus
                          --simple-field-height-default
```

### 3.4 Token Usage Rules (non-negotiable)

- **Never hard-code** colours, sizes, radii, strokes, or spacing. Always use `var(--token-name)`.
- Use `--global-spacing-sizing-*` for padding, gap, margin, fixed heights/widths.
- Use `--global-spacing-radius-*` for all `border-radius` values.
- Use `--global-spacing-stroke-*` for borders, outlines, shadows, blurs.
- Use `--global-color-*` (or brand tokens) for all colour values.
- Use `--global-type-*` for font-size, line-height, letter-spacing, font-weight.
- Spacing grid: multiples of 8px. Permitted exceptions: 4px, 6px, 12px.

### 3.5 Current Token Primitive Summary

**Spacing sizing scale**: 0 → 400px (8px base unit, with 4px, 6px, 12px exceptions)
**Negative spacing**: -2px → -80px (for overlay/badge positioning)
**Radius scale**: 0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 80, 99999px
**Stroke scale**: 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 32, 40px
**Opacity tokens**: `muted` (0.6), `subtle` (0.65), `hover` (0.85), `disabled` (0.45), `dim` (0.3), `full` (1.0)

**Typography size scale (primary)**:
`label-xxs` 10px → `label-xs` 12px → `label-sm` 14px → `footnote` 13px →
`label` 16px → `label-lg` 18px → `heading-5` 19px → `heading-4` 24px →
`heading-3` 28px → `heading-2` 32px → `heading-1` 36px → `stats` 72px

---

## 4. Component Rules

### 4.1 Mandatory Structure

Every component lives in its own directory:

```
src/components/ComponentName/
  ComponentName.tsx          # Implementation (React + TypeScript)
  ComponentName.module.css   # Styles — tokens only, no hard-coded values
  ComponentName.stories.tsx  # Storybook stories (see §5 for order)
  ComponentNameDocs.tsx      # Documentation page (DocsTemplate-based)
  index.ts                   # Barrel export
```

### 4.2 Implementation Rules

- Functional components only: `const Foo: React.FC<FooProps> = (…) => { … }`
- All props must have JSDoc comments on the interface.
- `useId()` for generating unique element IDs.
- `useRef` + `forwardRef` where native DOM access is needed.
- Controlled components as the default; uncontrolled only when explicitly justified.
- No class components. No `any` types (add a comment if absolutely unavoidable).
- No unused imports or dead code.
- File naming: `PascalCase.tsx` / `PascalCase.module.css` / `PascalCase.stories.tsx`.

### 4.3 Styling Rules

- CSS Modules only — file: `ComponentName.module.css`.
- All values via `var(--token-name)` — no hard-coded hex, px, or font-family strings.
- No `style={{ }}` inline styles for visual properties.
  (Layout helpers in story `render` functions are the only acceptable exception.)
- No Tailwind.
- No MUI `sx` prop (use CSS Modules instead so tokens remain the single source of truth).

### 4.4 Responsiveness

- Desktop: 1280–1920px width
- Tablet portrait: 834–1280px width
- Mobile: 390–700px width
- Use CSS Grid or Flexbox — no fixed pixel widths for layout containers.
- Breakpoints are **not yet defined in `global_design_tokens.json`**. Handle
  responsive behaviour at the component level until breakpoint tokens are added.

---

## 5. Storybook Rules

### 5.1 Version Constraint

- **Minimum version: 10.2.17**. Verify addon compatibility before installing.
- Before removing any addon, **ask the user first** — hidden dependencies may exist.
  After removal, also remove every mention of that addon across the entire codebase.

### 5.2 Canonical Story Order (MANDATORY)

Every `*.stories.tsx` file must export stories in this exact order with these exact names:

```tsx
// 1. Documentation — renders the *Docs component (always first)
export const Documentation: Story = { name: 'Documentation', render: () => <ComponentDocs /> }

// 2. Playground — fully interactive, all argTypes wired to controls
export const Playground: Story = { name: 'Playground', ... }

// 3. Default — component in its default / resting state
export const Default: Story = { name: 'Default', ... }

// 4. Sizes — all size variants
export const Sizes: Story = { name: 'Sizes', ... }

// 5. Status stories — one per semantic state the component supports
//    Name after the state: Primary, Secondary, Tertiary, Disabled, Error, Warning, Success, etc.
//    Only include states that genuinely apply.
export const Primary: Story   = { name: 'Status / Primary',   ... }
export const Secondary: Story = { name: 'Status / Secondary', ... }
export const Disabled: Story  = { name: 'Status / Disabled',  ... }

// 6. ComponentBreakdown — each sub-atom with its design token name displayed as a monospace label
export const ComponentBreakdown: Story = { name: 'Component Breakdown', ... }

// 7. AllInteractiveStates — hover, focus, active, disabled rendered side-by-side
export const AllInteractiveStates: Story = { name: 'All Interactive States', ... }

// 8. FullDesignMatrix — every variant combination in one grid
//    Name MUST be: 'Full Design Matrix (<N> variants)'
export const FullDesignMatrix: Story = { name: 'Full Design Matrix (## variants)', ... }
```

**Rules:**
- Story `title` in `meta` must be unique across the entire codebase.
- Only include status/state stories that are genuinely relevant. No empty placeholders.
- `ComponentBreakdown` must display the full design token reference name next to each
  sub-component, formatted as a monospace code label.
- The `FullDesignMatrix` variant count must reflect the actual number of unique combinations.

### 5.3 argTypes Requirements

All `argTypes` must include:
- `control` — control type (`select`, `boolean`, `text`, `number`, etc.)
- `description` — plain-English description of the prop
- `options` — array of valid values (for `select` controls)
- `defaultValue` — the default if one exists

### 5.4 MCP Tool Usage

When inspecting or generating stories, use the Storybook MCP tools in this order:

1. `list-all-documentation` — discover available components
2. `get-documentation` — retrieve docs for a specific component
3. `get-storybook-story-instructions` — get rendering instructions for a story
4. `run-story-tests` — validate story renders without errors

**Critical**: Never hallucinate component properties. Verify every prop against actual
story source or the MCP before generating code. If a property is undocumented, ask the user.

---

## 6. Documentation Rules

### 6.1 *Docs Component Requirements

Every component must have a `ComponentNameDocs.tsx` that uses the `DocsTemplate` layout.
Use `DocsTemplate` from `src/components/DocsTemplate/DocsTemplate.tsx`.

Minimum sections required in every documentation page:

| Section | DocsTemplate component |
|---|---|
| Header (title + subtitle) | `DocsTemplate.Header` |
| Overview | `DocsTemplate.Section` + `DocsTemplate.BodyText` |
| MUI Foundation | `DocsTemplate.Section` |
| Anatomy | `DocsTemplate.Section` + `DocsTemplate.BulletList` |
| Variants / Sizes / States | `DocsTemplate.Section` + live examples |
| Design Tokens | `DocsTemplate.TokenTable` |
| Usage Principles | `DocsTemplate.Principles` + `DocsTemplate.PrincipleCard` |
| Accessibility | `DocsTemplate.Section` + `DocsTemplate.BulletList` |
| Footer | `DocsTemplate.Footer` |

### 6.2 Token Documentation Rule

Every token referenced in a component's styles must appear verbatim in the `TokenTable`
so that consumers know exactly which CSS custom property to use.

### 6.3 Update Cadence

- Update documentation on **every** component change — no silent updates.
- Include what changed and any prop/token additions or removals in the relevant section.

---

## 7. MCP Servers

| Server | Transport | URL | Purpose |
|---|---|---|---|
| `npx-design-system-sb-mcp` | HTTP | `http://localhost:6006/mcp` | Story lookup, doc retrieval, test execution |
| `figma` | HTTP | `https://mcp.figma.com/mcp` | Figma component inspection, design specs |

Storybook MCP is available only while `npm run dev` is running (port 6006).

---

## 8. Figma ↔ Code Sync

- Figma design file: `rCwHMIRhV0Taymt1YRXshd` (NPX White-label Design System)
- Authentication: `FIGMA_TOKEN` environment variable (Figma personal access token)
- A `.figma.tsx` Code Connect file must exist alongside every `*.stories.tsx`.
- After updating any component, run: `npm run figma:publish`
- To scaffold missing Code Connect files: `npm run figma:generate`
- CI guard (fails build if `.figma.tsx` missing): `npm run figma:check`

---

## 9. Gemini CLI Configuration

| Setting | Value |
|---|---|
| Default model | `gemini-3.1-pro-preview` |
| Fallback model | `gemini-2.5-pro` (activates when daily quota exhausted) |
| Config file | `.gemini/settings.json` |

```bash
npm run gemini         # interactive session (primary → fallback)
npm run gemini:yolo    # --yolo autonomous mode
sh scripts/gemini.sh -p "Your prompt"   # one-shot prompt
gemini -m gemini-2.5-pro               # override model for one session
```

---

## 10. AI Context Files (for Gemini / Code Assist)

Run to regenerate before every AI session that needs full component context:

```bash
npm run context:generate
```

This produces three files in `gemini-context/`:

| File | Contents |
|---|---|
| `component-manifest.json` | All 54 components: title, stories, argTypes (control/options/description/defaultValue), defaultArgs |
| `coding-standards.md` | Stack, token rules, component rules, React patterns, what NOT to do |
| `implementation-rules.json` | Package versions, all mandatory rules, token file paths |

**Feed these to Gemini in this order:**
1. `src/styles/tokens.css` — actual CSS variable syntax
2. `src/styles/global_design_tokens.json` — global primitive values
3. `src/styles/brand_design_tokens.json` — brand values
4. `gemini-context/component-manifest.json` — component APIs
5. `gemini-context/coding-standards.md` + `gemini-context/implementation-rules.json` — rules

---

## 11. Git & CI Workflow

### Branch Strategy
- `main` — production branch; all CI workflows run here
- Development happens in personal branches; sync to `main` via PR

### Automated Workflows
| Workflow | File | Trigger | Purpose |
|---|---|---|---|
| Deploy Storybook | `.github/workflows/storybook.yml` | Push to `main` | Builds and deploys to GitHub Pages |
| Chromatic | `.github/workflows/chromatic.yml` | Push to `main` (non-blocking) | Visual regression snapshots |
| Publish package | `.github/workflows/ci-publish.yml` | Manual / tag | Bumps version, publishes to npm |
| Sync to NPXInnovation | `.github/workflows/sync-to-npx.yml` | Push to `main` | Mirrors source → canonical repo |

### Commit Message Tokens
- `[skip ci]` — skips all CI workflows
- `[skip pages]` — skips the Storybook GitHub Pages deploy specifically

### SYNC_PAT Requirements
- Must be a PAT with `repo` scope stored as a **repository-level secret** on `npxailsa/design_system`.
- Does **not** need `workflows` scope — the sync workflow excludes `.github/workflows/` from the mirror.

---

## 12. Useful Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start Storybook dev server (port 6006) |
| `npm run build-storybook` | Full Storybook build |
| `npm run build-storybook:gh-pages` | Build for GitHub Pages deployment |
| `npm run typecheck` | TypeScript type check (no emit) |
| `npm run docs:generate` | Scaffold missing MDX documentation files |
| `npm run figma:generate` | Scaffold missing `.figma.tsx` Code Connect files |
| `npm run figma:check` | CI guard — exits 1 if any `.figma.tsx` is missing |
| `npm run figma:publish` | Publish Code Connect files to Figma |
| `npm run context:generate` | Regenerate all files in `gemini-context/` |
| `npm run chromatic` | Run Chromatic visual regression tests |
| `npm run gemini` | Start Gemini CLI interactive session |
| `npm run gemini:yolo` | Start Gemini CLI in autonomous mode |

---

## 13. Pre-Commit Checklist

Before every commit that touches a component:

```
[ ] Design tokens used everywhere — no hard-coded colours, sizes, radii, or font stacks
[ ] MUI Material v7 primitive used as the underlying base
[ ] Component is responsive across desktop / tablet / mobile
[ ] .figma.tsx exists (run `npm run figma:check`)
[ ] Documentation story (*Docs.tsx) updated to reflect all changes
[ ] Token table in docs lists every new or changed token verbatim
[ ] `npm run typecheck` passes with no errors
[ ] `npm run build-storybook` passes with no errors
[ ] Story order matches canonical order in §5.2
[ ] argTypes fully populated (control, description, options, defaultValue)
```

---

## 14. What NOT to Do

| Rule | Reason |
|---|---|
| Never hard-code hex, px, or font-family values | Breaks token system; makes global changes impossible |
| Never use `style={{ }}` for visual properties | Bypasses token system; exceptions only for story layout |
| Never use `any` TypeScript types | Undermines type safety across the codebase |
| Never merge `global_design_tokens.json` and `brand_design_tokens.json` | Architectural contract — must remain separate always |
| Never add a Storybook addon without verifying 10.2.17 compatibility | Can break the entire Storybook build |
| Never remove a Storybook addon without confirming with the user | Hidden dependencies may exist |
| Never skip documentation after a component change | Consumers rely on docs; silent updates break trust |
| Never use native `<input type="date/time">` | Browser-specific formatting breaks the design system |
| Never hallucinate component props | Always verify against MCP or story source |
| Never add brand colours to `global_design_tokens.json` | Violates the global/brand token separation contract |

---

## 15. File Structure Reference

```
npxailsa/design_system/
├── src/
│   ├── components/
│   │   └── ComponentName/
│   │       ├── ComponentName.tsx          # Implementation
│   │       ├── ComponentName.module.css   # Styles (tokens only)
│   │       ├── ComponentName.stories.tsx  # Storybook stories
│   │       ├── ComponentNameDocs.tsx      # Documentation page
│   │       └── index.ts                   # Barrel export
│   ├── stories/                           # Non-component stories (Introduction, Foundation)
│   ├── styles/
│   │   ├── tokens.css                     # CSS custom properties (all components)
│   │   ├── global_design_tokens.json      # Global primitive tokens
│   │   └── brand_design_tokens.json       # Brand colours + typefaces ONLY
│   └── index.ts                           # Public package API
├── .storybook/
│   ├── main.ts                            # Storybook config, addons, Vite overrides
│   └── preview.ts                         # Global decorators, theme
├── scripts/
│   ├── generate-component-manifest.mjs    # Extracts argTypes → component-manifest.json
│   ├── generate-implementation-rules.mjs  # Extracts rules → implementation-rules.json
│   ├── generate-docs.mjs                  # Scaffolds missing MDX docs
│   ├── generate-figma-connect.mjs         # Scaffolds missing .figma.tsx files
│   ├── patch-storysource-compat.mjs       # Postinstall patch for addon compatibility
│   └── gemini.sh                          # Gemini CLI wrapper (primary → fallback model)
├── gemini-context/
│   ├── component-manifest.json            # Generated — do not edit manually
│   ├── coding-standards.md               # Coding standards (detailed)
│   └── implementation-rules.json         # Machine-readable rules + package versions
├── .github/workflows/
│   ├── storybook.yml                      # GitHub Pages deploy
│   ├── chromatic.yml                      # Visual regression (non-blocking)
│   ├── ci-publish.yml                     # npm package publish
│   └── sync-to-npx.yml                   # Mirror to NPXInnovation/design_system
├── AGENTS.md                              # Agent instructions (Codex / Copilot)
├── GEMINI.md                              # Gemini CLI specific rules
├── DESIGN_SYSTEM_CONTEXT.md              # THIS FILE — canonical combined context
└── README.md                             # Project overview + live links
```
