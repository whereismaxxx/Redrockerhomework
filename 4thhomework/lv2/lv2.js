"use strict";

let arr = [1,[2,3],[4,5,[6,7,8]],9];

function flatten(arr) {
    let newarr= [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newarr=newarr.concat(flatten(arr[i]))
        }else {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

console.log(flatten(arr));

//结果 [1,2,3,4,5,6,7,8,9]