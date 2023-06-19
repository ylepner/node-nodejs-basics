import { spawn } from 'child_process';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url'

const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [filePath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
