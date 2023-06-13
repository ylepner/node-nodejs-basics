import { rename } from 'fs/promises';

const renameFile = async () => {
  const currentFileName = './files/wrongFilename.txt';
  const newFileName = './files/properFilename.md';
  try {
    await rename(currentFileName, newFileName)
  } catch {
    throw new Error('FS operation failed')
  }
};

await renameFile();