# NPX Design System — Coding Standards & Implementation Rules

## Stack

| Concern | Technology |
|---|---|
| Language | TypeScript (strict mode) |
| UI library | React 18 (functional components only, hooks-first) |
| Component base | MUI v7 (`@mui/material`) — every component must sit on an MUI primitive |
| Styling | CSS Modules + design tokens (CSS custom properties). No Tailwind, no inline styles, no hard-coded values |
| Icons | `@mui/icons-material` |
| Documentation | Storybook 10.2.17 |
| Build | Vite 6 |
| Type checking | TypeScript 5.3+ |

---

## Design Token Rules (non-negotiable)

1. **Never hard-code** colours, sizes, radii, strokes, or spacing. Always use a `--token-name` CSS custom property.
2. Token files live at:
   - `src/styles/global_design_tokens.json` — global primitives (spacing, radius, stroke, typography scale, neutral colours)
   - `src/styles/brand_design_tokens.json` — brand colours and brand typefaces **only**
   - `src/styles/tokens.css` — component-level aliases (the actual CSS variables written as `--component-property: var(--global-token)`)
3. **Global vs Brand split**: any new token goes into `global_design_tokens.json` unless it is a brand colour or typeface — those go in `brand_design_tokens.json`. These two files must **never be merged**.
4. Token naming convention:
   - Global: `--global-{category}-{subcategory}-{value}` (e.g. `--global-spacing-sizing-8px`)
   - Brand: `--brand-{name}` (e.g. `--brand-primary`)
   - Component alias: `--{component}-{property}[-{variant}]` (e.g. `--button-bg-primary`, `--input-border-color-focus`)
5. Use `--global-spacing-stroke-*` for borders, shadows, blurs.
6. Use `--global-spacing-radius-*` for all border radii.

---

## Component Rules

1. Every component must be built **on top of an MUI primitive** (e.g. `Button`, `InputBase`, `Typography`, `Box`). Do not build from raw HTML when an MUI equivalent exists.
2. MUI Joy UI v5 patterns were used as design reference — follow MUI Material v7 implementation but with Joy-UI-inspired API shapes.
3. Use **CSS Modules** for all component styles. File name: `ComponentName.module.css`.
4. Export every component from its own `index.ts` barrel.
5. All props must have JSDoc comments.
6. Component file naming: `PascalCase.tsx`, stories: `PascalCase.stories.tsx`, styles: `PascalCase.module.css`.

---

## Storybook Rules

1. **Minimum version**: 10.2.17.
2. Every component **must** have a `Documentation` story listed **first** in its story file. The Documentation story renders the `*Docs` component (a `DocsTemplate`-based page).
3. Story taxonomy: `Foundation > *`, `Atoms > *`, `Building Blocks > *`.
4. `argTypes` must be fully populated with `control`, `description`, and `options` (where applicable).
5. Before removing any addon, confirm with the user — hidden dependencies may exist.

---

## Documentation Rules

1. Every new or updated component requires a `*Docs.tsx` file rendered in the Documentation story.
2. Use the `DocsTemplate` component system (Header, Section, BodyText, TokenTable, Principles, SizeDemo, Anatomy, BulletList, Footer, etc.).
3. Documentation must include: Overview, MUI Foundation, Anatomy, all variants/sizes/states, Design Tokens table, Usage Principles, Accessibility notes.
4. Design token names must be listed verbatim in the token table so consumers can reference them directly.
5. Update documentation on **every** component change — no exceptions.

---

## File Structure (abbreviated)

```
src/
  components/
    ComponentName/
      ComponentName.tsx          # Implementation
      ComponentName.module.css   # Styles (tokens only)
      ComponentName.stories.tsx  # Storybook stories
      ComponentNameDocs.tsx      # Documentation page
      index.ts                   # Barrel export
  styles/
    tokens.css                   # All CSS custom properties
    global_design_tokens.json    # Global token primitives
    brand_design_tokens.json     # Brand colours + typefaces
  index.ts                       # Public package API
scripts/
  generate-component-manifest.mjs  # Exports argTypes for AI context
gemini-context/
  component-manifest.json          # Generated — do not edit manually
  coding-standards.md              # This file
  implementation-rules.json        # Package versions + rules summary
```

---

## React Patterns

- Functional components only (`const Foo: React.FC<FooProps> = (…) => { … }`)
- `useId()` for generating unique element IDs
- `useRef` + `forwardRef` where native DOM access is needed
- Controlled components as the default; uncontrolled only when explicitly justified
- No class components
- No `any` types — use proper generics or explicit union types

---

## What NOT to do

- Never hard-code hex colours, pixel sizes, or font families directly in TSX or CSS
- Never use `style={{ }}` inline styles for visual properties (layout helpers in stories are the only exception)
- Never skip documentation when adding or editing a component
- Never merge `global_design_tokens.json` and `brand_design_tokens.json`
- Never use native `<input type="date">` or `<input type="time">` — use the design system's controlled text inputs
- Never add a Storybook addon without verifying compatibility with version 10.2.17
