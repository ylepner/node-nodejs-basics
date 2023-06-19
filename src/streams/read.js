import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const read = async () => {
  const file = join(dirPath, 'files', 'fileToRead.txt')
  const stream = createReadStream(file);
  stream.pipe(process.stdout)
};

await read();