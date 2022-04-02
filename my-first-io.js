import { readFileSync } from 'fs';
const buffer = readFileSync(process.argv[2]);
const result = buffer.toString().split('\n').length - 1;
console.log(result)