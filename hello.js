console.log('hello,js');

const abs = function (x) {
    return x + 1;
};

let abs1 = abs(1);

console.log(abs(2))

console.log(abs('A'))


function plusOne(x) {
    return arguments.length + 1;
}

console.log(plusOne(2, 2, 2))


function restTest(x, y, z, ...rest) {
    return rest.length;
}

let number = restTest(1, 2, 3, 4);

console.log(number)

let number1 = restTest(1, 2);
console.log(number1)


function round(r, t) {
    console.log(t === undefined)
    console.log(t === null)
    console.log(t == null)

    if (isNaN(t)) {
        t = 3.14;
    }
    return t * r * r;
}

let round1 = round(2);

console.log(round1)


console.log(round1 == null);


function lazyAdd(x, y) {
    return function () {
        return x + y;
    }
}

let add = lazyAdd(1, 2);
console.log(add);
console.log(add());

let add1 = lazyAdd(1, 2);

console.log(add() === add1());
console.log(add === add1);


let newVar = (function anonymous(x) {
    return x * x;
})(2);

console.log(newVar);


const array = [];
for (let i = 0; i < 3; i++) {
    array.push(
        new function (i) {
            return i * i;
        }
    );
}

array.forEach(value => console.log(value));

function* foo(x) {
    yield x + 1;
    yield  x + 2;
    return x + 3;
}

let generator = foo(2);
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next());

for (const fooElement of foo(3)) {
    console.log(fooElement)
}

var Student = {
    'name':'张三'
}
var xiaoming = {
    'age':1
}
xiaoming.__proto__ = Student;
console.log(xiaoming.name)

let newVar1 = Object.create(Student);
console.log(newVar1);
newVar1.name = 'xiaoming';
console.log(newVar1);