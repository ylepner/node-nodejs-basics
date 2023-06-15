import { createReadStream } from 'fs';

const read = async () => {
  const file = './files/fileToRead.txt'
  const stream = createReadStream(file);
  stream.pipe(process.stdout)
};

await read();