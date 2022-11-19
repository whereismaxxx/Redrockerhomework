"use strict";

Array.prototype.myPush = function () {
  for(var i=0;i<arguments.length;i++){
    this[this.length]=arguments[i]
  }
  return this.length
}

let arr = [1];
arr.myPush(2,3);

console.log(arr);

