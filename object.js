var student = {
    name: undefined,
    age: undefined,
    run: function () {
        console.log(this.name + " is running")
    }
}


var xiaoming = {
    name: "xiaming"
}

xiaoming.__proto__ = student;


xiaoming.run();
console.log(xiaoming.age);


let xiaohong = Object.create(student);
xiaohong.name = "xiaohong";
xiaohong.run();