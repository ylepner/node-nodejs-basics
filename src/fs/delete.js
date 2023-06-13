import { unlink } from 'fs/promises';

const remove = async () => {
  const file = './files/fileToRemove.txt';
  try {
    await unlink(file)
  } catch {
    throw new Error('FS operation failed')
  }
};

await remove();