"use strict";
let arr = [100, 200, 300, 400, 500];
let k = 0;
for(let i of arr){
    k = i;
    let discount = k/100*10;
    arr[arr.indexOf(i)] = i - discount;
}
for(let i of arr){
    console.log(i);
}

