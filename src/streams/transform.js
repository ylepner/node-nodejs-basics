import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, __, callback) {
    const reversedChunk = chunk.toString().split('').reverse().join('');
    callback(null, reversedChunk)
  }
});

const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform()