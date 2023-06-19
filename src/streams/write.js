import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const write = async () => {
  const file = join(dirPath, 'files', 'fileToWrite.txt')
  const stream = createWriteStream(file)
  process.stdin.on('data', (data) => {
    stream.write(data);
  })
};

await write();