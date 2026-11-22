import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const manifestPath = resolve('android/app/src/main/AndroidManifest.xml');
let xml = readFileSync(manifestPath, 'utf8');
const activity = xml.match(/<activity\\b(?=[^>]*android:name="\\.MainActivity")[^>]*>/s);
if (!activity) throw new Error('MainActivity não encontrada no AndroidManifest.xml');
let tag = activity[0];
if (/android:screenOrientation=/.test(tag)) {
  tag = tag.replace(/android:screenOrientation="[^"]*"/, 'android:screenOrientation="landscape"');
} else {
  tag = tag.replace(/>$/, ' android:screenOrientation="landscape">');
}
xml = xml.replace(activity[0], tag);
writeFileSync(manifestPath, xml);
console.log('BLACKLOUT PANTHER configurado em orientação horizontal.');
