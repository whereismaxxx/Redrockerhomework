"use strict";

let obj = new Object();
obj.name = 'Loki';
obj.age = '58';
console.log(obj); 

let abj = {
    name: 'Mickey',
    age: '88'
}
console.log(abj); 

function Student(name, age) {
    this.name = name;
    this.age  = age;
    this.sayName = function(){
      console.log(this.name)
    }
  }
  let stu1=new Student("daisy",65)
  stu1.sayName();
