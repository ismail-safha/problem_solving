/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

*/
// ======
// 1 - check If an empty value return  0
// 2 - find the highest number
// 3 - find the lowest number
// 4 - filter the array
// 5 - Sum all the numbers
// ===
// let arr = [6, 2, 1, 8, 10]; // => 16
let arr = [1, 1, 11, 2, 3]; // => 6
// arr.sort((a, b) => a - b); //  [1, 1, 2, 3, 11]
function sumHighestLowest(arr) {
  //==== arr 2
  if (arr == null) return 0;
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((x, y) => x + y, 0);
  console.log(arr);

  //==== second arr 1 way
  // if (arr == null) return 0;
  // return arr
  //   .filter((x) => x !== Math.max(...arr) && x !== Math.min(...arr))
  //   .reduce((a, b) => a + b, 0);

  //==== first way
  // 1 - check If an empty value return  0
  // if (arr == null) return 0;
  // 2 - find the highest number
  // let maxValue = Math.max(...arr);
  // 3 - find the lowest number
  // let minValue = Math.min(...arr);
  // 4 - filter the array
  // let filterArray = arr.filter((x) => x !== maxValue && x !== minValue);
  // 5 - Sum all the numbers
  // let newArray = filterArray.reduce((a, b) => a + b, 0);
  // return newArray;
}

console.log(sumHighestLowest(arr));
