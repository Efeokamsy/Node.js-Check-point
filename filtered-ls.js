import fs from 'fs'
const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`

fs.readdir(directory,(err, list)=>{
console.log(list);
});

