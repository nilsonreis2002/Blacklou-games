import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const here=dirname(fileURLToPath(import.meta.url));
const mobileRoot=resolve(here,'..');
const repoRoot=resolve(mobileRoot,'..');
const output=resolve(mobileRoot,'www');
const excluded=new Set(['.git','.github','node_modules','mobile']);
rmSync(output,{recursive:true,force:true});
mkdirSync(output,{recursive:true});
cpSync(repoRoot,output,{recursive:true,filter(source){
 const rel=relative(repoRoot,source);
 if(!rel)return true;
 const first=rel.split(sep)[0];
 return !excluded.has(first);
}});
console.log('Site copiado para mobile/www');
