const fs = require('fs')
const path = require('path')
const https = require('https')
/////////

// console.log('Before');
// const data = fs.readFileSync(path.join(__dirname, 'lorem.txt'), { encoding: 'utf-8' })
// console.log(data);
// console.log('after');

//////////
// console.log('Before');
// fs.readFile(path.join(__dirname, 'lorem.txt'), { encoding: 'utf-8', flag: "r" }, (err, data) => {
//     if (err) {
//         console.log('error reading data.');
//     } else {
//         console.log(data, '-------------------------------------');
//     }
// })
// console.log('after');
//////////////////
// console.log('Before');
// const rs = fs.createReadStream(path.join(__dirname, 'lorem.txt'), { encoding: 'utf-8' })
// rs.on('data', (chunk) => {
//     console.log(chunk, '----------------------------------');
// }).on('open', (fd) => {
//     console.log('stream opened ', fd);
// }).on("close", () => {
//     console.log('stream closed');
// }).on('end', () => {
//     console.log('stream end');
// }).on('error', (err) => {
//     console.log('error reading data', err);
// }).on('pause', () => {
//     console.log('reading paused...');
// }).on('ready', () => {
//     console.log('ready');
// }).on('resume', () => {
//     console.log('stream resumed.');
// })

// console.log('after');

/////////////////////////////////////
// console.log('before');
// const req = https.get('https://www.worldometers.info/coronavirus/', (res) => {
//     if (res.statusCode == 200) {
//         res.on('data', (chunk) => {
//             console.log(chunk + '');
//         })
//     }
// })
// req.on('error', (err) => {
//     console.log(err);
// }).on('close', () => {
//     console.log('read done...');
// })
// console.log('after');