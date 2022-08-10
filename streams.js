const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1: node will 1st put the entire file in memory and then...
  // fs.readFile(`${__dirname}/test-file.txt`, (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });

  // solution 2: Stream - backpressure
  // const readable = fs.createReadStream(`${__dirname}/test-file.txt`);

  // reading data chunk by chunk
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });

  // call the end event when everything is done
  // readable.on('end', () => {
  //   res.end();
  // });

  // In case sth wrong occurs
  // readable.on('error', (err) => {
  //   res.statusCode = 500;
  //   res.end('File Not Found!');
  // });

  // Solution 3: elegant
  const readable = fs.createReadStream(`${__dirname}/test-file.txt`);
  // receaves data from readable stream and sends it to writable stream at same speed
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening ...');
});
