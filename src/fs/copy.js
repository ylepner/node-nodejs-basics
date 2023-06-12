import { stat, copyFile, constants, readdir, mkdir } from 'fs/promises';
import { join } from 'path'

async function isExists(dir) {
  try {
    await stat(dir)
    return true
  } catch {
    return false
  }
}

const copy = async () => {
  const folderPath = './files';
  const newFolderPath = './files_copy';
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
    await copyFile(join('.', 'files', file), join('.', 'files_copy', file), constants.COPYFILE_EXCL);
  }
}

await copy();
