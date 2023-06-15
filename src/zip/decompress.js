import { promisify } from 'util';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const pipe = promisify(pipeline);

const source = './files/archive.gz';
const destination = './files/fileToCompress_result.txt';

const decompress = async (input, output) => {
  const unzip = createUnzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, unzip, destination);
};

await decompress(source, destination);