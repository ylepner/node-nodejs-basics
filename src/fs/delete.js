import { unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const remove = async () => {
  const file = join(dirPath, 'files', 'fileToRemove.txt');
  try {
    await unlink(file)
  } catch {
    throw new Error('FS operation failed')
  }
};

await remove();