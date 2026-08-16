"use strict";
//console.log(a);let a=10;
//

// if(true){
//     let a=5;
//     var b=10;   
// }
// //consol
// // (b,"b");og(a,"a");
// console.log

// let stu={
//     a:5,
//     b:10,
//     name : "Gopal Da", 
// };
// //console.log(a,"a");
// console.log(stu);
// {
//    let a=5;
// }
// console.log(a);

// const obj={
//     name: "Ball Point pen" ,
//     rating: 3 ,
//     price : 250,

// }
// console.log("\n",obj ,"\n");
// console.log("obj.name : ",obj.name,"\n");
// console.log('obj["price"] :',obj["price"],"\n");
//______________________________________________________________

//function without parameter and without return type
// //function defination 

// function myFunc(){
//     console.log("Hello There...");
// }

// myFunc();//function call

//______________________________________________________________

//function with parameter and without return type
// function func(str){
//     console.log(str);
// }
// func("Hello There...tanmoy this side");

//______________________________________________________________

//function with parameter and with return type
     // function func(str){
     //     return str;
     // }
     // let a=func("Hello There...tanmoy this side");
     // console.log(a);
//______________________________________________________________

// //function with parameter and with return type

// function func(a,b){
//     let c=a+b;
//     return c;
// }
// let c=func(2,2);
// console.log(c);

//______________________________________________________________

//arrow function 

// const a=(a,b)=>{
//     // console.log(a+b);
//     return a+b;
// }
// // a(4,2)
// console.log(a);
 
// // console.log(a(1,2));

//_______________________________________________________________

// //arrow function without parameter

// let ab = (a,b)=>{
//     console.log("hello");
//     console.log(a+b);
// }

// ab()

//_______________________________________________________________

// //create a function using function keyword that takes an string as an input and calaulate no of vowels in this string and return that...
// function vow(str){
//     let count=0;
//     console.log("the string is: ", str);
//     for(let i of str){
//         if (i === "a"||i === "e"||i === "i"||i === "o"||i === "u"||i === "A"||i === "E"||i === "I"||i === "O"||i === "U"){
//             count ++;

//             console.log(`${count} no vowel is : ${i}`);
           
//         }
//         else{}
//     // console.log(i);
//     // console.log("No Of Vowel Is: ",count);
//     }
//     console.log("No Of Vowel Is: ",count);
// }

// vow("hello");

//___________________________________________________________________________________

// //create a Arrow function using that takes an string as an input and calaulate no of vowels in this string and return that...

//   let vow = (str)=>{
//     let count=0;
//     console.log("the string is: ", str);
//     for(let i of str){
//         if (i === "a"||i === "e"||i === "i"||i === "o"||i === "u"||i === "A"||i === "E"||i === "I"||i === "O"||i === "U"){
//             count ++;
//             console.log(`${count} no vowel is : ${i}`); 

//         }else{
//             console.log(`no Vowel is Present in the text ${str}`);
            
//         }
//     }
//     console.log(`Total No Of Vowel in \"${str}\" Is: `,count);
// }

// vow("bcd");

//_________________________________________________________

////call-Back Function 

// function num(){
//     console.log("num .");
// }
// function clb(num){
//     //console.log("clb .");
//     return num;

// }
// // num();

// console.log(clb());

//_____________________________________________________________

//forEach Loop & Its Usages in js.

// //forEach in arrow Function :
// let arr=[1,2,3,4,5,6];

// arr.forEach((element) => {

//     console.log(element**2);
    
// });

// //forEach in normal Function :--------

// let arr2=[1,2,3,4,5,6];

// arr2.forEach(function squ(val,idx,ar2){ // here i have declare "val" dosent need to declare orinitialize val it automatically takes val from arr2. 
//     console.log(idx,val,val**2,ar2);// pass 3 paarameter 1st value 2nd index,3rd array itselff
// });

//___________________________________________________________________
 
// //Q) for a given array find square of a number using forEach Loop .

let arr3 = [1,2,3,4,5,6]
arr3.forEach((val)=>{
    console.log(val**2);
});

// ----

let arr4 = [1,2,3,4,5,6]

let calsqr = (a)=>{     //vvi concept
    console.log(a*a);
}
arr4.forEach(calsqr);

//__________________________________________________________________



