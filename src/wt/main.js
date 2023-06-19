import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const dirPath = dirname(currentFilePath);
const workerFilePath = join(dirPath, 'worker.js')

const performCalculations = async () => {
  const cpusNumber = cpus().length;
  let resultPromises = [];
  for (let i = 0; i < cpusNumber; i++) {
    resultPromises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerFilePath, { workerData: i + 10 });
        worker.on('message', (message) => resolve({
          status: 'resolved',
          data: message
        }));
        worker.on('error', () => reject({
          status: 'error',
          data: null
        }))
      }))
  }
  Promise.all(resultPromises).then((val) => {
    console.log(val)
  })
};

await performCalculations();