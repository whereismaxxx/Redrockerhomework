"use strict";

const stu = {
    myname: 'WEN',
    hobby: ['play', 'sleep', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'ChongQing'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const{myname,hobby,address: {home:HOME} ,title: [_,{year}]}=stu


console.log(myname) 
console.log(hobby)  
console.log(HOME)  
console.log(year)  