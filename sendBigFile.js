const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // Response Header => content-Legth: 43954
    // const text = fs.readFileSync('./content/bigFile.txt', 'utf8');
    // res.end(text);

    // create chunk  Response Header=> Transfer-Encoding: chunked
    const fileread = fs.createReadStream('./content/bigFile.txt', 'utf8');
    fileread.on('open', (chank) => {
      fileread.pipe(res);
    });
    fileread.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
