import { readFile } from 'fs/promises';
import { dirname } from 'path'
import { join } from 'path';
import { fileURLToPath } from 'url'

const read = async () => {
  const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
  console.log('file', file)
  try {
    const content = await readFile(file)
    console.log(content.toString())
  } catch {
    throw new Error('FS operation failed')
  }

};

await read();