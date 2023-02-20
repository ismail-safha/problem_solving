/* You get an array of numbers, return the sum of all of the positives ones.

 Example [1,-4,7,12] => 1 + 7 + 12 = 20

 Note: if there is nothing to sum, the sum is default to 0. */
// let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// ======
// 1 - initValue = 0
// 2 - array loop
// 3 - check if the number, of the positives or not
// 4 - add the number to the initValue if positives
// ===

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function sumOfPositive(arr) {
  //==== first second way
  // 1 - initValue = 0
  // let initValue = 0;
  // 2 - array loop
  // for (let i = 0; i < arr.length; i++) {
  // 3 - check if the number, of the positives or not
  //   if (arr[i] > 0) {
  //     initValue += arr[i];
  //   }
  // }
  // return initValue;
  // ==== second way
  return arr.filter((num) => num > -1).reduce((a, b) => a + b, 0);
}

console.log(sumOfPositive(arr));
