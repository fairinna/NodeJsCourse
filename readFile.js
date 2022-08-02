const { readFile } = require('fs');

console.log('startad First Task');
readFile('./content/result_fs.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('Completed first Task');
});
console.log('Next task');
console.log('Finish');
