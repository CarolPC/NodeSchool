const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {

  fs.readdir(directory, (err, files) => {
    if (err)
      return callback(err);

    const fileExtension = (file) => {
      if(path.extname(file) === extension)
        return true;
    }

    const filtered = files.filter(fileExtension);

    return callback(null, filtered);
  });
};
