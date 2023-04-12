/*
--count of positive / sum of negatives--
Given an array of integers
return an array, where the first element is the count of positives number and the second element is
sum of negative numbers.

if the input is an empty array or is null, return an empty array.
example 
ro input [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,15]
you should return [10,-65]
*/
//: steps
//1-create empty array of the positives number
//2-create a variables for the of negative
//3-loop thought the given array
//4-check if number is positive add it to array , if negative add to the sum variables
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, 15];
function convertArray(input) {
  // =====way1
  // let positionArray = [];
  // let sumNegative = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] > 0) {
  //     positionArray.push(input[i]);
  //   } else {
  //     sumNegative += input[i];
  //   }
  // }
  // return [positionArray.length, sumNegative];
  //== way 2
  let positionArray = input.filter((x) => x > 0).length;
  let sumNegative = input
    .filter((x) => x < 0)
    .reduce((acc, cur) => acc + cur, 0);
  return [positionArray, sumNegative];
}
console.log(convertArray(input)); //[11, -50]
