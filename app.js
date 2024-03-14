'use strict';
const fs = require('node:fs');
const readline = require('node:readline');
const rs = fs.createReadStream('./haiku.html');
const rl = readline.createInterface({ input: rs });

rl.on('line', (lineString) => {
  console.log(lineString);
});
