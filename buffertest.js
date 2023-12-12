let buffer = Buffer.alloc(100);
console.log(buffer);

let buffer1 = Buffer.allocUnsafe(100);
console.log(buffer1);


let buffer2 = Buffer.from("我爱你");
console.log(buffer2);

let buffer3 = Buffer.from([0xe5, 0xad, 0x9f, 0xe7, 0x90, 0x86, 0xe7, 0x90, 0x86]);
console.log(buffer3.toString());

// 转二进制
console.log(buffer3[0].toString(2));