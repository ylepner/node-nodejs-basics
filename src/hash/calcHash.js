import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const calculateHash = async () => {
  const file = join(dirPath, 'files', 'fileToCalculateHashFor.txt')
  const content = await readFile(file)
  console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();