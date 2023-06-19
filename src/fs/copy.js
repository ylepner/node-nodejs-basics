import { stat, copyFile, constants, readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);
const folderPath = join(dirPath, 'files');
const newFolderPath = join(dirPath, 'files_copy');

async function isExists(dir) {
  try {
    await stat(dir)
    return true
  } catch {
    return false
  }
}

const copy = async () => {
  if (await isExists(newFolderPath)) {
    throw new Error('FS operation failed')
  } else {
    await mkdir(newFolderPath)
    await copyFiles(folderPath)
  }
};

async function copyFiles(path) {
  const files = await readdir(path);
  for (const file of files) {
    await copyFile(join(dirPath, 'files', file), join(dirPath, 'files_copy', file), constants.COPYFILE_EXCL);
  }
}

await copy();
