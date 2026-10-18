// Generates public/img/qr-download.svg (QR for the Download page). Run: node scripts/make-qr.mjs
import QRCode from 'qrcode';
import { writeFileSync } from 'node:fs';
const url = process.argv[2] ?? 'https://arrowflow.ahmedbuildapps.com/download/';
const svg = await QRCode.toString(url, { type: 'svg', margin: 2, errorCorrectionLevel: 'M', color: { dark: '#06060E', light: '#FFFFFF' } });
writeFileSync(new URL('../public/img/qr-download.svg', import.meta.url), svg);
console.log('QR written for', url);
