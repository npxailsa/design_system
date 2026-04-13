/**
 * patch-storysource-compat.mjs
 *
 * @storybook/addon-storysource has no published Storybook 10.x release yet.
 * Its latest version (9.0.0-alpha.14) declares a peerDependency of
 * `storybook: "^9.0.0-alpha.14"` which Storybook's startup check treats as
 * incompatible with our installed storybook@10.x.
 *
 * This script widens that peerDependency range to `>=9.0.0-alpha.14` in the
 * installed node_modules so the warning is suppressed. The addon itself works
 * correctly with Storybook 10 — this is purely a semver declaration issue.
 *
 * Run automatically via `postinstall` in package.json after every `npm install`.
 * Remove this script once @storybook/addon-storysource publishes a >=10.x release.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '../node_modules/@storybook/addon-storysource/package.json');

try {
  const raw = readFileSync(pkgPath, 'utf8');
  const pkg = JSON.parse(raw);

  if (pkg.peerDependencies?.storybook === '^9.0.0-alpha.14') {
    pkg.peerDependencies.storybook = '>=9.0.0-alpha.14';
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✅ Patched @storybook/addon-storysource peerDependencies (storybook: >=9.0.0-alpha.14)');
  } else {
    console.log('ℹ️  @storybook/addon-storysource peerDependencies already patched or changed — no action needed.');
  }
} catch (e) {
  // Non-fatal: if the file isn't found (e.g. clean install still running) just warn.
  console.warn('⚠️  Could not patch @storybook/addon-storysource peerDependencies:', e.message);
}
