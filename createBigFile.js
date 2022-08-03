const { writeFileSync } = require('fs');

for (let i = 0; i < 1000; i++) {
  writeFileSync(
    './content/bigFile.txt',
    ` Hello word for many times in my loop : ${i}\n`,
    { flag: 'a' }
  );
}
