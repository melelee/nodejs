let fs = require('fs');

let file = './fs.txt';

let callback = err => {
    console.log(err)
};
fs.writeFile(file, '我爱你\r\n', callback)

fs.writeFileSync(file, '我也爱你\r\n');


fs.appendFile(file, '我不爱你\r\n', callback);
fs.appendFileSync(file, "可是我还是爱你\r\n");