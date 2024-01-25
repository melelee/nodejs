// 八进制
x = 0o10;
console.log(x);

// 16进制
x = 0x10;
console.log(x);


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


console.log(Infinity);

console.log(-Infinity);

console.log(NaN);

// isNaN   is Not a Number  意思是：是不是能转换为一个数字，加引号的数字是能转换为一个数字的所以为false
console.log('NaN------------------------------------false')
x = 1;
console.log(isNaN(x));
x = '';
console.log(window.isNaN(x));
x = '123';
console.log(window.isNaN(x));

console.log('NaN------------------------------------true')

x = 'qwe';
console.log(window.isNaN(x));
x = NaN;
console.log(window.isNaN(x));