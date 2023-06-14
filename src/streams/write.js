import { createWriteStream } from 'fs';

const write = async () => {
  const file = './files/fileToWrite.txt'
  const stream = createWriteStream(file)
  process.stdin.on('data', (data) => {
    stream.write(data);
    process.exit()
  })
};

await write();