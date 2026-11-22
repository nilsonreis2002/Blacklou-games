import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const mobileRoot = resolve(here, '..');
const repoRoot = resolve(mobileRoot, '..');
const output = resolve(mobileRoot, 'www');
const excluded = new Set(['.git', '.github', 'node_modules', 'mobile']);

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const entry of readdirSync(repoRoot, { withFileTypes: true })) {
  if (excluded.has(entry.name)) continue;
  cpSync(resolve(repoRoot, entry.name), resolve(output, entry.name), {
    recursive: true,
    dereference: false
  });
}

console.log('Site copiado para mobile/www sem incluir arquivos de desenvolvimento.');
