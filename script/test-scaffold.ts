import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const scaffoldPath = path.join(__dirname, '../.test/scaffold');
if (fs.existsSync(scaffoldPath)) {
    fs.rmSync(scaffoldPath, { recursive: true, force: true });
}
fs.mkdirSync(scaffoldPath, { recursive: true });

function run(cmd: string, path: string) {
    console.log(`Running: ${cmd}, in ${path}`);
    try {
        execSync(cmd, { cwd: path, stdio: 'ignore' });
    } catch (err) {
        console.error(`Test project scaffolding cmd error: ${err}`);
        throw err;
    }
}

run('npm init -y', scaffoldPath);
run('npm i --no-audit --no-fund typescript prisma @prisma/client zod decimal.js @types/node', scaffoldPath);
run('npm install --no-progress --no-audit --no-fund', path.join(__dirname, '../packages/schema/tests/projects/prisma-generator-test-project'));

console.log('Test scaffold setup complete.');
