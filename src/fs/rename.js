import { rename } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const renameFile = async () => {
  const currentFileName = join(dirPath, 'files', 'wrongFilename.txt');
  const newFileName = join(dirPath, 'files', 'properFilename.md');
  try {
    await rename(currentFileName, newFileName)
  } catch {
    throw new Error('FS operation failed')
  }
};

await renameFile();