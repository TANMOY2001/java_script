"use strict";   
//we can create strings like this 
// let str1="Gopal Da";
// let str2='Gopal Da';//single quotes and double quotes are same in js
// let str3=`Gopal Da`;//backtick is used for template literals (string interpolation)
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str1.length); //length of string
// console.log(str1[0]); //accessing (string character) each element one by one .

let str=`GopalDa`;

 let l = str.length;
 console.log(l);

 let U_name=`@${str}${l}`; //string interpolation
 console.log(U_name);
