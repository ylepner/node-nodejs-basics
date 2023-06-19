import { spawn } from 'child_process';

const filePath = './files/script.js'

const spawnChildProcess = async (args) => {
  const child = spawn('node', [filePath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
