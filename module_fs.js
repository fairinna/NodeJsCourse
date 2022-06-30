const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log('r-first' + err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log('r-second' + err);
      return;
    }
    const second = result;

    writeFile(
      './content/result_fs.txt',

      `Now we are create and write that: ${first} and ${second}`,
      (err, result) => {
        if ('write' + err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
