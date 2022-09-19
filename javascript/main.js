// console.log("hello world"); // use for debug

// type: string, number, boolean, date, object, array, null, undefined
// how to declare variable: var, let, const
// // variable should be used camelCase
// var variableA = "hello world"; // string
// let numberA = 1; // number
// numberA = "Hello World"; // apply javascript
// const boolA = true;
// let numberB; // apply with let and var
// numberB = 1;
// let objectA = {
//   key: "value 2"
// };
// let arrayA = ["value1", "value2"];
// let arrayB = [0, 1, 2, 3];
// let arrayC = [0, "a", 1, "b"];
// let arrayD = [
//   0, "a", {
//     key: "value b"
//   }
// ];

// how to use declared variable
// console.log(variableA)

// tinh toan
//let numberC = 0;
//let numberD = 1;
// console.log("result", numberC + numberD);

//let a = 4;
//let b = 3;
// console.log(a / b); // 1.333333
// console.log(a % b); // 1
// console.log(Math.abs(a));
// console.log(Math.floor(a / b));
// console.log(Math.round(a / b));
// console.log(Math.ceil(a / b));

//let c = 0;
// console.log(c+=1); // c = c + 1

// loop: vong lap
// from 1 to 10
// case 1: use while loop
// let i = 11;
// const max = 10;
// while (i <= max) { // 11
//   // 1.
//   console.log("use while", i);
//   // 2.
//   i++;
// }

// case 2: use for loop
// for (let i = 0; i <= max; i++) {
//   console.log("use for", i);
// }
//const max = 10;
//for (let i = 0; i <= max; i++) {
//for (let z = 0; z <= 5; z++) {
//console.log({
//i,


// case 3: use do...while loop
// do {
//   console.log("use do while", i);
//   i++;
// } while (i <= max);

// log string
// let string1 = "Hello";
// let string2 = "World";
// let number1 = 0;
// console.log(string1 + " " + string2 + number1);
// console.log(`${string1} ${string2} ${number1}`);

// bai tap 1: tinh chu vi, dien tich hinh hinh chu nhat voi gia tri
// const a = 5;
// const b = 10;
//
// //* dien tich hinh chu nhat:
// console.log(a * b);
//
// //* chu vi hinh chu nhat:
// //1/2 chu vi hcn :
// console.log((a + b) *2);

/* bai tap 2: in bang cuu chuong tu 1 den 9 ra man hinh
VI DU (bai tap 2):
1x1=1
1x2=2
1x3=3
//const max = 10;
//for (let i = 0; i <= max; i++) {
//for (let z = 0; z <= 5; z++) {
//console.log({
//i,
 */
/* Bang cuu chuong :*/
//  const max = 10;
//  let a = 1;
//  let b = 1;
// while (b<=max){
//   console.log(a+'x'+b+'='+(b*a));
//   b++;
// }
// const max = 10;
// for (let a = 1; a <= 9; a++) {
//   for (let b = 1; b <= max; b++) {
//     console.log(a + "x" + b + "=" + (a * b));
//   }
// }

// use loop with array
// 0  1 2 3 4 5 6 7 8 --> key
// 1  2 3 4 5 6 7 8 9 --> value
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// bai tap 3: in ra man hinh tong cua cac item ben trong mang
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;
// result: 45
for (let i = 0; i < array.length; i++) {
  result += array[i];
}

console.log(result);



