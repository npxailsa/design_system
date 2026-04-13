# `__mocks__` — Storybook Mock Files

This directory contains **mock files** for Storybook's automocking system.

Mock files are used when you need full control over a module's implementation
rather than auto-replacing exports with no-op functions.

## How it works

When `sb.mock(import('some-package'))` is called in `.storybook/preview.ts`,
Storybook checks this directory **first**. If a matching file is found, it is
used instead of the original module. If no file is found, exports are
automatically replaced with Vitest mock functions.

## Rules

- Files must use **JavaScript** (not TypeScript), with **ESModules** (`export`, not `module.exports`).
- Files must export the **same named exports** as the original module.
- For a default export use `export default`.
- For packages with deeper import paths (e.g. `lodash-es/add`), create a
  matching directory: `__mocks__/lodash-es/add.js`.

## For local modules

Local module mocks live **next to the source file**, not here.

```
src/
  lib/
    session.ts          ← original
    __mocks__/
      session.js        ← mock (JavaScript, ESM)
```

## Registration (`.storybook/preview.ts`)

All mocks — whether backed by a file here or auto-generated — must be
registered with `sb.mock()`:

```ts
import { sb } from 'storybook/test';

// Registers react-dom as spy-only (keeps original behaviour)
sb.mock(import('react-dom'), { spy: true });

// Registers uuid — Storybook will use __mocks__/uuid.js if it exists
sb.mock(import('uuid'));
```

## Using mocked modules in stories

```ts
import { expect, mocked } from 'storybook/test';
import { createPortal } from 'react-dom';

export const MyStory: Story = {
  play: async () => {
    expect(mocked(createPortal)).toHaveBeenCalled();
  },
};
```

## Currently registered mocks

| Module | Mode | File |
|--------|------|------|
| `react-dom` | Spy-only | *(auto — original preserved)* |

Add new entries to this table when registering additional mocks in `.storybook/preview.ts`.

---

## ⚠️ Conflict warning — Jest

This project also has a **Jest** configuration (`jest.config.js`). Both Jest
and Storybook scan this `__mocks__/` directory, which creates a conflict risk.

### Why it's safe right now

- Jest's `automock` is explicitly set to `false` — it will **not** automatically
  use files in `__mocks__/` unless a test file explicitly calls `jest.mock('module-name')`.
- Storybook mocks are registered in `.storybook/preview.ts` via `sb.mock()` and
  are **Storybook-only** — they do not affect Jest.

### The danger zone

If you add a file like `__mocks__/react-dom.js` **and** a Jest test calls
`jest.mock('react-dom')`, Jest will pick up that file. Because Storybook
requires mock files to be **ESModules** (`export function ...`) and Jest uses
**`ts-jest`** (which may not resolve bare ESM), this can cause:

- `SyntaxError: Cannot use import statement in a module` in Jest
- Incorrect mock behaviour shared between the two tools

### How to avoid conflicts

| Scenario | Recommended approach |
|----------|---------------------|
| Mock a module in Storybook only | Add to `__mocks__/` + register via `sb.mock()` in `preview.ts` |
| Mock a module in Jest only | Use `jest.mock('module')` inline in the test file, **or** put it in `jest-mocks/` and map via `moduleNameMapper` in `jest.config.js` |
| Mock a module in **both** | Create separate files: `__mocks__/pkg.js` (ESM for Storybook) and `jest-mocks/pkg.js` (CJS for Jest), mapped via `moduleNameMapper` |
