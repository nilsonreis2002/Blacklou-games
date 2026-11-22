import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
const html = readFileSync('../games/blacklou-legend/index.html', 'utf8');
const match = html.match(/<script type="module">([\\s\\S]*?)<\\/script>/);
if (!match) throw new Error('Script principal do jogo não encontrado.');
writeFileSync('/tmp/blacklout-panther-check.mjs', match[1]);
const result = spawnSync(process.execPath, ['--check', '/tmp/blacklout-panther-check.mjs'], { stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
console.log('Sintaxe JavaScript do jogo validada.');
