# NPX Design System — Agent Instructions

This project is a token-driven design system built on MUI Joy UI v5, documented in Storybook 10.

> **Gemini CLI users**: also read `GEMINI.md` — it contains the full Figma-to-code prompt
> baseline that governs all code generation from Gemini CLI, Figma MCP, Builder.io CLI,
> and GitHub CLI.

## MCP Servers

| Server                        | Transport | URL                               |
|-------------------------------|-----------|-----------------------------------|
| `npx-design-system-sb-mcp`   | HTTP      | http://localhost:6006/mcp         |
| `figma`                       | HTTP      | https://mcp.figma.com/mcp         |

## Figma MCP

Use the `figma` MCP server to inspect Figma components, retrieve design specs,
and bridge design intent to code:

- Figma design system file: `rCwHMIRhV0Taymt1YRXshd` (NPX White-label Design System)
- Authentication: requires a Figma personal access token (`FIGMA_TOKEN` env var)
- After any component change, sync with: `npm run figma:publish`
- To scaffold missing Code Connect files: `npm run figma:generate`
- CI guard (fails if `.figma.tsx` missing): `npm run figma:check`

## Storybook MCP

When working on UI components, always use the `npx-design-system-sb-mcp` MCP tools to access
Storybook's component and documentation knowledge before answering or taking any action.

- **CRITICAL: Never hallucinate component properties!** Before using ANY property on a component
  from this design system (including common-sounding ones like `shadow`, `variant`, etc.), you MUST
  use the MCP tools to check if the property is actually documented for that component.
- Query `list-all-documentation` to get a list of all components.
- Query `get-documentation` for that component to see all available properties and examples.
- Only use properties that are explicitly documented or shown in example stories.
- If a property is not documented, do not assume it exists based on naming conventions or patterns
  from other libraries. Check back with the user in these cases.
- Use the `get-storybook-story-instructions` tool to fetch the latest instructions for creating or
  updating stories. This will ensure you follow current conventions and recommendations.
- Check your work by running `run-story-tests`.

Remember: A story name might not reflect the property name correctly, so always verify properties
through documentation or example stories before using them.

## Design System Rules

### Tokens
- All styles must use design tokens — never hard-code colors, spacing, radii, or font sizes.
- Global tokens live in `.design_system/src/styles/global_design_tokens.json`.
- Brand tokens (colors, typefaces) live in `.design_system/src/styles/brand_design_tokens.json`.
- Do NOT add brand-specific values (colors, typefaces) to the global token file.

### Components
- Every component must use MUI (Joy UI v5) as its base primitive.
- Every new or updated component requires a corresponding Storybook documentation story.
- Documentation stories must be the first story listed for each component/category.
- Follow the documentation template at `.storybook` and existing `DocsTemplate.mdx` examples.

### Storybook
- Storybook runs on port 6006 (`npm run dev`).
- MCP server is available at `http://localhost:6006/mcp` when Storybook is running.
- Stories live in `src/**/*.stories.tsx`.
- Docs pages use MDX and follow the existing documentation template structure.

### Testing
- Storybook Test (Vitest) is configured via `@storybook/addon-vitest`.
- Accessibility checks run automatically via `@storybook/addon-a11y`.
- Visual regression testing runs via Chromatic (TurboSnap enabled — `onlyChanged: true`).
- Jest is configured separately; use `jest.mock()` inline in test files, not `__mocks__/` files
  (those are reserved for Storybook automocking via `sb.mock()`).

## Running the Design System

```bash
npm run dev          # Start Storybook dev server (port 6006)
npm run build-storybook  # Build for production
npm run chromatic    # Run visual regression tests
```
