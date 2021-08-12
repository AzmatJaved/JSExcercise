//JavaScript Interview Questions: Arrays

a = [1, 22, 3, 4, 5, 6, 6, 5, 8, 8];

// function uniqueArray (){

// }
//1--> What is the output of the following code?
const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);
// 101
// The reason for this solution is as follows: JavaScript placesempty as a value for indices 3 - 99. Thus, when you set the value of the 100th index, the array looks like:

//2--> How can you double elements of an array using reduce?
// Please note that you cannot create additional variables.

const arrayOfNumbers = [1, 2, 3, 4, 5];
arrayOfNumbers.reduce(
  (accumulator, currentValue, index, array) => (array[index] = array[index] * 2)
);

console.log(arrayOfNumbers);
//----------------
const arrayOfNumbers2 = [10, 20, 30, 40, 50, 60, 70];

arrayOfNumbers2.reduce((index, array) => (array[index] = array[index] * 2));

console.log(arrayOfNumbers2);

// 3-->What is the output of the following code snippet?
let arrayOfLetters = ["a", "b", "c", "d", "e", "f"];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);

// 4--> How could you print unique values from an array?

function getUniqueValues(arrayOfNums) {
  const set = new Set(arrayOfNums);
  return [...set];
}

// console.log(getUniqueValues(a));

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 66];

function uniquArrayFind(someArray) {
  const set = new Set(someArray);
  return [...set];
}

console.log(uniquArrayFind(arr));
// 5--> How could you destructure array elements?
const [address1, address2, address3, address4, address5] = [
  "kamptee",
  "Nagpur",
  "Mumbai",
  "Pune",
  "Nashik",
];
console.log(address3);

// Flatten an array

var array = [1, [2, 3], [4, 5, 6, [7, 8, 9]]];
const flatten = (arr) => {
  someNewArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return someNewArray;
};

console.log(flatten(array));

// What will be the output of the following code

console.log("bar:", bar);
bar = 15;
var foo = 1;
console.log(foo, bar);
var bar;

// 1,15

const obj = {
  props: 42,
};

Object.freeze(obj);
obj.props = 33;

console.log(obj.props);

console.log("checking", Object.freeze(1));
