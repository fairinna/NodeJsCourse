const path = require('path');

console.log(path.sep);
console.log(path.toNamespacedPath('module_os.js'));
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
