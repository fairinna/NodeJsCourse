const { createReadStream } = require('fs');

const stream = createReadStream('./content/bigFile.txt', {
  highWaterMark: 9000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log(result);
  console.log(result.length);
});
stream.on('error', (err) => {
  console.log(err);
});
