const bl = require('bl');
const http = require('http');
const count = 2;

const read = (count) => {

  http.get(process.argv[count], (response) => {
    response.pipe(bl((err, data) => {
      if (err)
        console.log(err);

      console.log(data.toString());
      if (count < 4)
        read(++count);
    }));
  });
}

read(count);
