/**
 * patch-storysource-compat.mjs
 *
 * Applies several targeted patches to node_modules after `npm install`
 * to suppress known build warnings caused by package mismatches.
 *
 * Patches applied:
 *
 * 1. @storybook/addon-storysource peerDependencies
 *    The addon's latest release (9.0.0-alpha.14) declares a peerDependency
 *    of `storybook: "^9.0.0-alpha.14"` which Storybook's startup check
 *    treats as incompatible with our installed storybook@10.x.
 *    Fix: widen the range to `>=9.0.0-alpha.14`.
 *    Remove once storysource ships a >=10.x release.
 *
 * 2. @mui/icons-material exports — expose ./package.json
 *    Storybook's manager build resolves <dep>/package.json for every project
 *    dependency (to detect addon storybook URLs). The `resolve` npm package
 *    (used internally by Storybook) respects the `exports` field in
 *    package.json. @mui/icons-material v7 defines an `exports` map but does
 *    not include the `./package.json` sub-path, causing `resolve` to throw an
 *    unrecognised error that triggers:
 *
 *       ▲  unable to find package.json for @mui/icons-material
 *
 *    Fix: add `"./package.json": "./package.json"` to the exports map.
 *    This is the canonical solution used by many packages (e.g. @mui/material
 *    already exports it). Safe to apply — it only exposes the file that is
 *    already on disk; it does not change any code behaviour.
 *    Remove once MUI ships icons-material with this export.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/* ── Helper ──────────────────────────────────────────────────────────────── */

function patchPackageJson(pkgPath, label, patchFn) {
  try {
    const raw = readFileSync(pkgPath, 'utf8');
    const pkg = JSON.parse(raw);
    const result = patchFn(pkg);
    if (result.changed) {
      writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
      console.log(`✅ Patched ${label}`);
    } else {
      console.log(`ℹ️  ${label} — already patched or no action needed.`);
    }
  } catch (e) {
    console.warn(`⚠️  Could not patch ${label}:`, e.message);
  }
}

/* ── Patch 1: @storybook/addon-storysource peerDependencies ──────────────── */

patchPackageJson(
  resolve(__dirname, '../node_modules/@storybook/addon-storysource/package.json'),
  '@storybook/addon-storysource peerDependencies (storybook: >=9.0.0-alpha.14)',
  (pkg) => {
    if (pkg.peerDependencies?.storybook === '^9.0.0-alpha.14') {
      pkg.peerDependencies.storybook = '>=9.0.0-alpha.14';
      return { changed: true };
    }
    return { changed: false };
  }
);

/* ── Patch 2: @mui/icons-material exports — add ./package.json ───────────── */

patchPackageJson(
  resolve(__dirname, '../node_modules/@mui/icons-material/package.json'),
  '@mui/icons-material exports (add ./package.json sub-path)',
  (pkg) => {
    if (!pkg.exports) {
      // No exports field — nothing to do; native resolution already works.
      return { changed: false };
    }
    if (pkg.exports['./package.json']) {
      // Already present.
      return { changed: false };
    }
    // Add the ./package.json export at the top of the map so resolvers
    // that iterate in order find it quickly.
    pkg.exports = {
      './package.json': './package.json',
      ...pkg.exports,
    };
    return { changed: true };
  }
);
