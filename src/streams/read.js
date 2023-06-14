import { createReadStream } from 'fs';

const read = async () => {
  const file = './files/fileToRead.txt'
  const stream = createReadStream(file);
  const data = []
  stream.on('data', (chunk) => {
    data.push(chunk.toString());
  });
  stream.on('end', () => process.stdout.write(data.join('')));
};

await read();