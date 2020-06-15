const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log('Time 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('--------------------------');

  setTimeout(() => console.log('Time 2 finished'), 0);
  setTimeout(() => console.log('Time 3 finished'), 3000);
setImmediate(() => console.log('Immediate 2 finished'));

process.nextTick(() => {console.log('Process.nextTick')});

crypto.pbkdf2('password', 'salt', 10000, 2014, 'sha512', () => {
  console.log(Date.now() - start, 'pasword encrypted');
});
crypto.pbkdf2('password', 'salt', 10000, 2014, 'sha512', () => {
  console.log(Date.now() - start, 'pasword encrypted');
});
crypto.pbkdf2('password', 'salt', 10000, 2014, 'sha512', () => {
  console.log(Date.now() - start, 'pasword encrypted');
});
crypto.pbkdf2('password', 'salt', 10000, 2014, 'sha512', () => {
  console.log(Date.now() - start, 'pasword encrypted');
});
});

console.log("Hello from the top-level code");