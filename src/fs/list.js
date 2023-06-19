import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const list = async () => {
  const folder = join(dirPath, 'files')
  try {
    const files = await readdir(folder);
    for (const file of files) {
      console.log(file)
    }
  } catch {
    throw new Error('FS operation failed')
  }
};

await list();