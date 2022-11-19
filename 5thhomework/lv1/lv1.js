"use strict";

function sumTo1(n){
    let sum1=0;
    for(let i=1;i<=n;i++){
        sum1 += i;
    }
    return sum1;
}
console.log(sumTo1(3));


function sumTo2(n){
    let sum2=1;
    if (n==1){
        return sum2=1;
    }
    else{
        return sum2=sumTo2(n-1)+n;
    }
}
console.log(sumTo2(3));