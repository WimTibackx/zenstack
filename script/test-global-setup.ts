import fs from 'fs';
import path from 'path';

export default function globalSetup() {
    if (!fs.existsSync(path.join(__dirname, '../.test/scaffold/package-lock.json')) && !fs.existsSync(path.join(__dirname, '../.test/scaffold/pnpm-lock.yaml'))) {
        console.error(`Test scaffold not found. Please run \`pnpm test-scaffold\` first.`);
        process.exit(1);
    }
}
