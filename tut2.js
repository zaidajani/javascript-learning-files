// strings

// console.log('this is a string');

// string methods

let string = 'this is a new string';
//            01234
// lenght
// indexof
// lastindexof
// slice
// replace

// console.log(string.length);
// console.log(string.indexOf('t'));
// console.log(string.lastIndexOf('t'));
// console.log(string.slice(0, 4));
// console.log(string.replace('this', 'that'));

// even store these in variables

// operators -> way of comparision and processing
// arithmatic operators

let a = 10;
let b = 15;

// +-*/ -> arithmatic operators

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// asignment operators

let asop = 20;
// console.log(asop);
asop += 10;
// console.log(asop);
asop -=5;
// console.log(asop);
asop *= 2;
// console.log(asop);
asop /= 2;
// console.log(asop);

// arrays

let array = ['fan', 'train', 110, null];
console.log(array);

// a box named array contains many things

// array methods

// pop
// push
// length
// shift
// unshift

array.pop();
console.log(array);

array.push('zaid');
console.log(array);

console.log(array.length);

array.shift();
console.log(array);

array.unshift('this', 'that', 'what', 'delicious');
// console.log(array);

// conditional statements

// if and switch

let age = 12;

if (age < 18) {
  console.log('you are a kid');
}
else {
  console.log('you are an adult');
}

// if else ladder

if (age < 18 && age > 13) {
  console.log('you are a teenager');
}
else if (age <= 13) {
  console.log('you are a child');
}
else {
  console.log('you are an adult');
}

// switch case statement

let day;
let dayNum = 7;

switch (dayNum) {
  case 1: 
    day = "sunday";
    break;

  case 2: 
    day = "monday";
    break;

  case 3: 
    day = "tuesday";
    break;

  case 4: 
    day = "wednesday";
    break;

  case 5: 
    day = "thursday";
    break;

  case 6: 
    day = "friday";
    break;

  case 7: 
    day = "saturday";
    break;
  
  default: 
    day = "sunday";
}

console.log(day);

// loops

// for 
// while
// do while
// foreach

// for loops -> c

// loops -> continuously doing until being terminated

// syntax ->

for (let i = 0; i < 100; i++) {
    // variable comp.oper. increamentation
    
    // console.log('hello');
}

// while loop

let j = 0;

while (j < 100) {
  // console.log('hello');
  j++;
}

// do while

let k = 100;

do {
  // console.log('this is a do while loop', k);
  k++;
} while (k < 100);

// foreach

// arrays

array.forEach(function (element) {
  // console.log(element);
});

// dates

// 20 november 2020

console.log(new Date().getFullYear());

