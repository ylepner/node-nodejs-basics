import { readFile } from 'fs/promises';

const read = async () => {
  const file = './files/fileToRead.txt';
  try {
    const content = await readFile(file)
    console.log(content.toString())
  } catch {
    throw new Error('FS operation failed')
  }

};

await read();