const fs = require('fs');
const path = require('path');
const files = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(files, function(err, files) {
  files.map((file) => {
    if (path.extname(file) === extension)
      console.log(file);
  });
});