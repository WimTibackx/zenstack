import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { NPM_RC_CONTENTS, NPM_RC_FILE, PNPM_STORE_PATH } from './test-utils';

if (!fs.existsSync(PNPM_STORE_PATH)) {
    fs.mkdirSync(PNPM_STORE_PATH)
}

function run(cmd: string, path: string) {
    console.log(`Running: ${cmd}, in ${path}`);
    try {
        execSync(cmd, { cwd: path, stdio: 'ignore' });
    } catch (err) {
        console.error(`Test project scaffolding cmd error: ${err}`);
        throw err;
    }
}

function setUpProject(projectPath: string) {
    if (fs.existsSync(projectPath)) {
        const dirEntries = fs.readdirSync(projectPath, {withFileTypes: true});
        for (const entry of dirEntries) {
            const keep = entry.isFile() && ['package.json', '.gitignore'].includes(entry.name);
            if (!keep) {
                fs.rmSync(path.join(entry.path, entry.name), { force: true, recursive: true });
                console.log('removed ' + path.join(entry.path, entry.name));
            }
        }
    } else {
        fs.mkdirSync(projectPath, { recursive: true });
        run('npm init -y', projectPath);
    }
    fs.writeFileSync(path.join(projectPath, NPM_RC_FILE), NPM_RC_CONTENTS, { encoding: 'utf-8', flag: 'w+' });
    run('pnpm i --ignore-workspace', projectPath);
}

const scaffoldPath = path.join(__dirname, '../.test/scaffold');
setUpProject(scaffoldPath);
run('pnpm i --ignore-workspace typescript prisma @prisma/client zod decimal.js @types/node', scaffoldPath);

console.log('Test scaffold setup complete.');
