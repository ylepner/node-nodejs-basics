import { stat } from 'fs/promises';

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
    console.log('Lets copy the folder!')
  }

};

await copy();
