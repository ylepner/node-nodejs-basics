import { createHash } from 'crypto';
import { readFile } from 'fs/promises';


const calculateHash = async () => {
  const file = './files/fileToCalculateHashFor.txt'
  const content = await readFile(file)
  console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();