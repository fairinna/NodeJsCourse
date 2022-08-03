const { readFile, writeFile } = require('fs').promises;
//need only for util module
const util = require('util');
const readFileUtil = util.promisify(readFile);
const writeFileUtil = util.promisify(writeFile);

//first variant

readFile('./content/result_fs.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

//second variant
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

//therd variant

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

// fourth variant

const startToReadWrite = async () => {
  try {
    const first = await readFileUtil('./content/first.txt', 'utf8');
    const second = await readFileUtil('./content/second.txt', 'utf8');
    await writeFileUtil(
      './content/two.txt',
      `We are creating file with two variable: ${first}  @@@  ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
startToReadWrite();

//fifth variant
const readWriteFSPromises = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/two.txt',
      `THIS IS AWESOME!!! We are adding to the file with two variable: ${first}  @@@  ${second} new text`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
readWriteFSPromises();
