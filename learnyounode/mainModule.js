const fs = require('fs');
const path = require('path');
const fileModule = require('./module');
const files = process.argv[2];
const extension = '.' + process.argv[3];

const callback = (err, files) => {
  if (err) {
    throw err;
  }

  files.map(file => {
    console.log(file);
  });
}

fileModule(files, extension, callback);

