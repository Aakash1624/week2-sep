`use strict`;

// <-----------------Question-11--------------------->

// FIRST NON-REPETITIVE CHARACTER

// const findStr = (str) => {
//   let firstChar;

//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       firstChar = str[i];
//       return console.log(`The first Non-Repetitive Character : ${firstChar}`);
//     }
//   }
// };

// findStr(`aakash`);

// <-----------------Question-12--------------------->

// FLATTEN-OBJECT

// let obj = {};
// function flattenObject(obj) {
//   let obj1 = {};
//   for (let [key, ele] of Object.entries(obj)) {
//     if (typeof ele === 'object') {
//       let str = key;
//       obj1 = { ...flatObject(key, ele, str), ...obj1 };
//     } else {
//       obj1[key] = ele;
//     }
//   }
//   return obj1;
// }

// function flatObject(key, ele, str) {
//   let base = str;
//   let objArr = Object.entries(ele);
//   for (let i = 0; i < objArr.length; i++) {
//     if (typeof objArr[i][0] != 'object' && typeof objArr[i][1] != 'object') {
//       obj[str + '.' + objArr[i][0]] = objArr[i][1];
//     } else if (
//       typeof objArr[i][0] != 'object' &&
//       typeof objArr[i][1] == 'object'
//     ) {
//       base += '.' + objArr[i][0];
//       return flatObject(objArr[i][0], objArr[i][1], base);
//     }
//   }
//   return obj;
// }

// const nestedObject = {
//   a: 1,
//   b: { c: 2, d: { e: 3, f: 4 } },
//   g: 5,
// };
// console.log(flattenObject(nestedObject));


// <-----------------Question-13--------------------->

// FIND THE MEDIAN

// let middle;
// let total;
// let strLength;

//   const median = (num1 = [], num2 = []) => {
//   let num3 = num1.concat(num2);
//   console.log(`concat array : ${num3}`);
//   num3.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(`sorted array : ${num3}`);
//   strLength = num3.length;
//   console.log(`length : ${strLength}`);

//   if (strLength % 2 == 0) {
//     middle = strLength / 2;
//     total = num3[middle - 1] + num3[middle];
//     total /= 2;
//     console.log(`median : ${total}`);
//   } else {
//     middle = Math.trunc(strLength / 2);
//     console.log(`median : ${num3[middle]}`);
//   }
// };

// median([1, 2], [3, 4, 5, 6]);

// <-----------------Question-14--------------------->


// ROMAN NUMBER TO INTEGER

// const romanValues = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const romanToInteger = (inputRoman) => {
//   let specialRoman = 0;

//   for (let i = 0; i < inputRoman.length; i++) {
//     if (inputRoman[i] === 'I' && inputRoman[i + 1] === 'V') {
//       specialRoman += 4;
//       i++;
//     } else if (inputRoman[i] === 'I' && inputRoman[i + 1] === 'X') {
//       specialRoman += 9;
//       i++;
//     } else if (inputRoman[i] === 'X' && inputRoman[i + 1] === 'L') {
//       specialRoman += 40;
//       i++;
//     } else if (inputRoman[i] === 'X' && inputRoman[i + 1] === 'C') {
//       specialRoman += 90;
//       i++;
//     } else if (inputRoman[i] === 'C' && inputRoman[i + 1] === 'D') {
//       specialRoman += 400;
//       i++;
//     } else if (inputRoman[i] === 'C' && inputRoman[i + 1] === 'M') {
//       specialRoman += 900;
//       i++;
//     } else {
//       specialRoman += romanValues[inputRoman[i]];
//     }
//   }
//   console.log(specialRoman);
// };

// romanToInteger('XXVI');

// <-----------------Question-15--------------------->

// WORD REVERSE

// const wordReverse = (str) => {
//   let strWordArr = str.split(' ');

//   let reverse = [];

//   for (let i = strWordArr.length - 1; i >= 0; i--) {
//     reverse.push(strWordArr[i]);
//   }

//   console.log(reverse.join(' '));
// };

// wordReverse(`JavaScript is a Best Language`);

// <-----------------Question-16--------------------->

// SUM OF MULTIPLE OF 3 AND 5 

// const sumMultiple = (limit) => {
//   let result = 0;

//   for (let i = 0; i < limit; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       console.log(i);
//       result += i;
//     }
//   }
//   console.log(`The Answer is : ${result}`);
// };

// sumMultiple(10);

// <-----------------Question-17--------------------->

// REMOVE DUPLICATE ARRAY ELEMENT

// function removeDuplicates(array) {
//   const result = [];

//   console.log(`Original array : ${array}`);
//   for (let i = 0; i < array.length; i++) {
//     let exists = false;

//     for (j = 0; j < result.length; j++) {
//       if (array[i] === result[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) {
//       result.push(array[i]);
//     }
//   }
//   console.log(`Removed Duplicate array : ${result}`);
// }

// removeDuplicates([1, 22, 3, 4, 5, 22, 5, 6]);

// <-----------------Question-18--------------------->

// FIND A PERFECT NUMBER

// const findNum = (num1) => {
//   let result = 0;

//   for (let i = 1; i <= num1 / 2; i++) {
//     if (num1 % i === 0) {
//       result += i;
//     }
//   }

//   console.log(result);

//   if (result === num1 && result !== 0) {
//     console.log(`${num1} is a prefect number`);
//   } else {
//     console.log(`${num1} is not a prefect number`);
//   }
// };

// findNum(12);

// <-----------------Question-19--------------------->

// INTERSECTION OF AN ARRAY

// function printIntersection(arr1, arr2) {
//   var i = 0,
//     j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) i++;
//     else if (arr2[j] < arr1[i]) j++;
//     else {
//       console.log(arr2[j++] + ' ');
//       i++;
//     }
//   }
// }

// printIntersection([1, 2, 3, 4, 5], [1, 2, 4, 5]);

// <-----------------Question-20--------------------->

// SUDOKU BOARD

// function notInRow(arr, row) {

//   let st = new Set();

//   for (let i = 0; i < 9; i++) {

//     if (st.has(arr[row][i])) return false;

//     if (arr[row][i] != '.') st.add(arr[row][i]);
//   }
//   return true;
// }

// function notInCol(arr, col) {
//   let st = new Set();

//   for (let i = 0; i < 9; i++) {

//     if (st.has(arr[i][col])) return false;

//     if (arr[i][col] != '.') st.add(arr[i][col]);
//   }
//   return true;
// }

// function notInBox(arr, startRow, startCol) {
//   let st = new Set();

//   for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//       let curr = arr[row + startRow][col + startCol];

//       if (st.has(curr)) return false;

//       if (curr != '.') st.add(curr);
//     }
//   }
//   return true;
// }

// function isValid(arr, row, col) {
//   return (
//     notInRow(arr, row) &&
//     notInCol(arr, col) &&
//     notInBox(arr, row - (row % 3), col - (col % 3))
//   );
// }

// function isValidConfig(arr, n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {

//       if (!isValid(arr, i, j)) return false;
//     }
//   }
//   return true;
// }

// let board = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

// console.log(isValidConfig(board, 9) ? 'YES' : 'NO');
