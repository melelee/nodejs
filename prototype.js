// 构造函数，使用new调用
function Person(name) {
    this.name = name;
    console.log(this)
    this.run = function () {
        console.log(this.name + " is running");
        console.log(this)
    }
}

Person.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

let hangmeimei = new Person("hangmeimei");
hangmeimei.run();
console.log(hangmeimei.constructor);
hangmeimei.hello();




