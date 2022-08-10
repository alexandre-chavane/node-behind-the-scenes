const fs = require('fs');
const crypto = require('crypto');
// Milisseconds of password encryption
const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => {
  console.log('Timer 1 Finished');
}, 0);

setImmediate(() => console.log('Immediate 1 Finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O Finished');

  console.log('--------------------------');
  // See what gonna happen inside a callback function
  setTimeout(() => {
    console.log('Timer 2 Finished');
  }, 0);
  setTimeout(() => {
    console.log('Timer 3 Finished');
  }, 3000);
  setImmediate(() => console.log('Immediate 2 Finished'));

  process.nextTick(() => console.log('process.nextTick'));

  // cryptography: asynchronous: offload to the thread pool
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start} : Password encrypted`);
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start} : Password encrypted`);
  });
  setImmediate(() => console.log('Immediate 1 Finished'));
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start} : Password encrypted`);
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start} : Password encrypted`);
  });

  // Sync: This is going to block the code has expected
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(`${Date.now() - start} : Password encrypted synchonously`);
});

console.log('Top level code');
