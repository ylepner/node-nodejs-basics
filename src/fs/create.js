import { writeFile, stat } from "fs/promises";

async function fileExists(fileName) {
  try {
    await stat(fileName)
    return true
  } catch {
    return false
  }
}
const create = async () => {
  const fileName = './files/fresh.txt';
  if (await fileExists(fileName)) {
    throw new Error('FS operation failed')
  }
  await writeFile('./files/fresh.txt', 'I am fresh and young');
};

await create();