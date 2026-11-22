import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
const html = readFileSync('../games/blacklou-legend/index.html', 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(([, attrs, body]) => !/\bsrc\s*=/.test(attrs) && body.trim());
if (!scripts.length) throw new Error('Nenhum script JavaScript inline encontrado no jogo.');
for (let i = 0; i < scripts.length; i++) {
  const file = `/tmp/blacklout-panther-check-${i}.js`;
  writeFileSync(file, scripts[i][2]);
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  unlinkSync(file);
  if (result.status !== 0) process.exit(result.status || 1);
}
if (!html.includes('<canvas')) throw new Error('Canvas principal do jogo não encontrado.');
if (!html.includes('function showMenu')) throw new Error('Menu inicial não encontrado.');
console.log(`Validados ${scripts.length} script(s), Canvas e menu inicial do BLACKLOUT PANTHER.`);
