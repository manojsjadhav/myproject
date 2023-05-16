console.log("Manoj Jadhav");

// 1)  Remove the duplicate element from an array using set method
const array = [1, 5, 8, 4, 3, 6, 1, 5, 8, 6, 7, 9];
const dupliarray = [...new Set(array)];
// console.log(dupliarray);

// 2) Remove the duplicate element from array without using in build in function
// const arr = [1, 5, 8, 4, 3, 6, 1, 5, 8, 6, 7, 9];
// const dupliarr = [];
// arr.map((item) => {
//   if (!dupliarr.includes(item)) {
//     dupliarr.push(item);
//   }
// });
// console.log(dupliarr);

const arr = [1, 5, 8, 4, 3, 6, 1, 5, 8, 6, 7, 9];
function removeDuplicate(arr) {
  let length = 0;
  const tmp = {};
  for (let i = 0; i < arr.length; i++) {
    if (!tmp[arr[i]]) {
      tmp[arr[i]] = 1;
      arr[length] = arr[i];
      length++;
    }
  }

  // the last element is not a duplicate
  if (!tmp[arr[arr.length - 1]]) {
    length--;
  }
  arr.length = length;
  return arr;
}

// console.log(removeDuplicate(arr));
// 3) Take a string, reverse it and print in console
let str = "manojjadhav";
let revstr = str.split("").reverse().join("");
// console.log(revstr);

// 4)  Reverse string without using the any build in function and print in the console
let myname = "manojjadhav";
let reversName = "";
for (let i = myname.length - 1; i >= 0; i--) {
  reversName = reversName + myname[i];
}
// console.log(reversName);

// 5) Check given number is prime or not
function primeNo(pri) {
  if (pri < 1) {
    console.log(` ${pri} is not a prime number`);
  } else if (pri == 2) {
    console.log(` ${pri} is a prime number`);
  } else {
    let primeValue = true;
    for (let i = 2; i < pri; i++) {
      if (pri % i == 0) {
        primeValue = false;
        break;
      }
    }
    if (primeValue == true) {
      console.log(` ${pri} is a prime number`);
    } else {
      console.log(` ${pri} is not a prime number`);
    }
  }
}
// primeNo(7);

// 6) Check prime numbers from 1 to 100 and print
const priNo = [];
for (let i = 2; i <= 100; i++) {
  let notPrime = false;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j !== i) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    priNo.push(i);
  }
}
// console.log(priNo);

// 7) Copy all elements of one array into another array
const a = [11, 22, 33];
const b = [4, 5, 6];
const c = b.concat(a);
// console.log(c);
// console.log([...a, ...b]);

// 9) Copy array from another array by using the slice method
const x = [11, 22, 33];
const y = [4, 5, 6];
const z = x.concat(y.slice());
// console.log(z);

// 10) Copy array from another array by using the push method
const n = [11, 22, 33];
const m = [4, 5, 6];
m.forEach((item) => {
  n.push(item);
});
// console.log(n);

// 11)  Reverse the array element
const num = [11, 22, 44, 33, 55];
console.log(num.reverse());

// 12)  Delete the first and last element of array
const num1 = [11, 22, 44, 33, 55];
function delfristandlastele() {
  num1.pop();
  num1.shift();
  console.log(num1);
}

// 13)  Add the first and last element in array by using splice
const num2 = [11, 22, 44, 33, 55];
function addEleInArr() {
  let fristvalue = document.getElementById("frist").value;
  if (typeof fristvalue == string) {
    num2.splice(0, 0, fristvalue);
  } else {
    num2.splice(0, 0, parseInt(fristvalue));
  }
  // console.log(typeof fristvalue);
  let secondvalue = document.getElementById("second").value;
  num2.splice(0, 0, fristvalue);
  num2.splice(num2.length - 1, 0, secondvalue);
  console.log(num2);
}

// 14)  Delete the given element from array
const ary = [11, 22, 44, 33, 55];
function deleteGivenNum(ary, number) {
  let findInd = ary.indexOf(number);
  ary.splice(findInd, 1);
  return ary;
}
console.log(deleteGivenNum(ary, 22));

// 15)  Check the given element is available in array or not
const ar = [11, 22, 44, 33, 55];
function checkGivenNum(ar, number) {
  if (ar.includes(number)) {
    console.log(`${number} is available in this array `);
  } else {
    console.log(`${number} is nit available in this array `);
  }
}
checkGivenNum(ar, 3);

// 16)  Find the factorial no of given number
function factorial(num) {
  let conut = 1;
  for (let i = 1; i <= num; i++) {
    conut *= i;
  }
  console.log(conut);
}
factorial(5);
// 17)  Check the number/string is Armstrong or not
function armstrongNo(num) {
  let rem = 0;
  let temp = 0;
  const num1 = num;
  while (num > 0) {
    rem = num % 10;
    temp = temp + rem * rem * rem;
    num = parseInt(num / 10);
  }
  if (temp == num1) {
    console.log("this is armstrong number");
  } else {
    console.log("this is not armstrong number");
  }
}
armstrongNo(153);

// 18)  Check the give no is even or odd
function giveNoOddOrEven(num) {
  if (num % 2 == 0) {
    console.log("give number is even");
  } else {
    console.log("give number is odd");
  }
}
giveNoOddOrEven(13);

// 19)  Print the odd no from 1 to 10
function oddNo(num) {
  const oddnum = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      oddnum.push(i);
    }
  }
  return oddnum;
}
console.log(oddNo());

// 20)  check given number is palindrome or not
function palindrome(num) {
  let find = 0;
  let rem = 0;
  const paliNo = num;
  while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    find = find * 10 + rem;
  }
  if (find == paliNo) {
    console.log("The inputed number is Palindrome");
  } else {
    console.log("The inputted number is not palindrome");
  }
}
palindrome(424);

// 21)  Shift the 0 element from array to last element in array
const arrele = [1, 2, 6, 3, 4, 5];
function shiftNo() {
  arrele.push(arrele[0]);
  arrele.splice(0, 1);
  console.log(arrele);
}
// 22)  Print the fibonacci sequence
// const promt = prompt(
//   "please enter the number you wnat to length of fibonacci sequence "
// );
const fibarr = [0, 1];
let f1 = 0;
let f2 = 1;
function fibonacciSeq(num) {
  for (let i = 2; i < num; i++) {
    let add = f1 + f2;
    fibarr.push(add);
    f1 = f2;
    f2 = add;
  }
  return fibarr;
}
console.log(fibonacciSeq(25));

// 23)  First Class function example
//  can be passed as an argument
function sayHello() {
  return "manoj";
}
function mainFun(argfu, lname) {
  console.log(argfu(), lname);
}
mainFun(sayHello, "jadhav");

// can be returned by an anouther function
function addfun() {
  return function () {
    console.log("manoj");
  };
}

// can be assigned as a  value to a variable, object or array
const myfun = function () {};
const obj = {
  getName: function () {
    console.log("manoj jadhav");
  },
};
const myarr = [];
myarr.push(function () {});

// 24)  Check given string and convert character uppercase into the lower and lower case to uppercase
let myfullname = "maNoJJAdhAv";
let conName = "";
for (let i = 0; i < myfullname.length; i++) {
  if (myfullname[i] == myfullname[i].toUpperCase()) {
    conName = conName + myfullname[i].toLowerCase();
  }
  if (myfullname[i] == myfullname[i].toLowerCase()) {
    conName = conName + myfullname[i].toUpperCase();
  }
}
console.log(conName);

// 25)  Write Fizz buzz program
const fizzBuzz = [];
for (let i = 1; i <= 101; i++) {
  if (i % 5 == 0 && i % 3 == 0) fizzBuzz.push("FizzBuzz");
  else if (i % 3 == 0) fizzBuzz.push("Fizz");
  else if (i % 5 == 0) fizzBuzz.push("Buzz");
  else fizzBuzz.push(i);
}
console.log(fizzBuzz);

// 26)  Write hoisting example and explain it

// When the JavaScript engine executes the JavaScript code, it creates the global execution context.
// The global execution context has two phases:
// 1) Creation
// 2) Execution
// During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code.
// This is known as hoisting in JavaScript.

console.log(counter); //  undefined
var counter = 1;

let v1 = 20,
  v2 = 10;

let result = add(v1, v2);
console.log(result); //  30

function add(a, b) {
  return a + b;
}

// 27)  Write closure example
function mainsub() {
  let va1 = 40;
  function sub() {
    let va2 = 20;
    return va1 - va2;
  }
  return sub();
}
console.log(mainsub());

// 28)  Write callback function

// A callback is a function passed as an argument to another function.
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// 29)  Write promise example
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// why need promise
// javascript always synchronouns and single-threaded-language it means javascript never wait for code or function result when
// they take some time. js directe excute next code.

// There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string),
//  and false of course.
const prom = (a, b, e, d) => {
  return new Promise((res, rej) => {
    let c = a / b;
    if ((a, b, e, d)) {
      res(`solve `);
    } else {
      rej("rejectet");
    }
  });
};
prom(5, 0, 2, 0)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 30)  Write example of async await
async function getmethod() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await resp.json();
  console.log(res);
}
getmethod();

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// let die1 = Math.ceil(Math.random() * 6);
// let die2 = Math.ceil(Math.random() * 6);

// console.log(`You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`);

function test1() {
  const nu = 10;
  function test() {
    let xzy = 20;
    return nu + xzy;
  }
  return test();
}
console.log(test1());
