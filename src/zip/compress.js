import { promisify } from 'util';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const source = './files/fileToCompress.txt';
const destination = './files/archive.gz';
const pipe = promisify(pipeline);

const compress = async (input, output) => {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
};

await compress(source, destination);