const { readFile } = require('fs');
const { resolve } = require('path');

readFile('./content/result_fs.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

getText('./content/subfolder/text.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const startText = async () => {
  try {
    const first = await getText('./content/second.txt');
    const second = await getText('./content/result-sync.txt');
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
startText();
