const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.de', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log('https:', Date.now() - start);
    });
  }).end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('hash:', Date.now() - start);
  })
}

doRequest();

fs.readFile('index.js', () => {
  console.log('fs:', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();