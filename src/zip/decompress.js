import { promisify } from 'util';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

const pipe = promisify(pipeline);

const source = join(dirPath, 'files', 'archive.gz');
const destination = join(dirPath, 'files', 'fileToCompress_result.txt');

const decompress = async (input, output) => {
  const unzip = createUnzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, unzip, destination);
};

await decompress(source, destination);