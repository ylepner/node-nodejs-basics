import { readdir } from 'fs/promises';

const list = async () => {
  const folder = './files/'
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