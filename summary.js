const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) {

console.log('Usage: node summary.js [filename]');
process.exit(1);

}

try {
const fileContents = fs.readFileSync(fileName, 'utf8');

let lines = fileContents.split('\n');

if (lines.length > 0 && lines[lines.length - 1] === '') {
lines.pop();
}

lines = lines.map(function (line) {
if (line.endsWith('\r')) {
return line.slice(0, -1);
}

return line;
});

const totalLines = lines.length;
const firstLine = totalLines > 0 ? lines[0] : '(none)';
const lastLine = totalLines > 0 ? lines[totalLines - 1] : '(none)';

console.log('File Summary');
console.log('_____________');
console.log('Filename: ' + fileName);
console.log('Total lines: ' + totalLines);
console.log('First line: ' + firstLine);
console.log('Last line: ' + lastLine);
} catch (error) {
console.log('Error: Unable to read "' + fileName + '".');
}
