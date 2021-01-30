// console.log('hello world');

// datatypes

// string
// number
// boolean
// object

// console.log('this is a string'); // this is a string
// console.log(105); // this is a number
// console.log(true, false); // boolean

// variables

var box = 'products';

// a variable named block contains products

// console.log(box);

// comments

// single line comments

/* 
  multi line comment
*/

var bol = true;

console.log(bol);


// objects

const obj = {
  // key:value pairs
  string: 'this is a string',
  number: 105,
  boolean: true,
}

console.log(obj);

// es6 -> ecma script 6

// var -> let and const

let letobj = {
  message: 'this is in es6'
}

const numbercon = 1000000000;

// numbercon = 10 + 10;

// functions

// duty to be done by the program

// for (let i = 0; i < 100; i++) {
//   console.log('do this');
// }

// until i is less than 100, print "do this"

function addSubs() { 
  // operation
  let subs = 0;
  for (let i = 0; i < 106; i++) {
    subs = subs + 1;
    console.log(subs)
  }
}

// addSubs();

function add(numbero, numberto) {
  // console.log(numbero + numberto);
  return numbero + numberto;
}

const numberWithFunction = add(10, 2);
console.log(numberWithFunction);