import { writeFile, stat } from "fs/promises";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

async function fileExists(fileName) {
  try {
    await stat(fileName)
    return true
  } catch {
    return false
  }
}
const create = async () => {
  const fileName = join(dirPath, 'files', 'fresh.txt');
  if (await fileExists(fileName)) {
    throw new Error('FS operation failed')
  }
  await writeFile(join(dirPath, 'files', 'fresh.txt'), 'I am fresh and young');
};

await create();