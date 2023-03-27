/*  
  Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order
*/
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// -1: change the number to string
// -2 : split the string to an array
// -3 : change the string in the array to number
// -4 : reverse the array
function reverseNumberToArray(number) {
  return number
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
  // asy wey
  // // Convert the number to a string using the toString() method.
  // let numString = number.toString();
  // // Split the string into an array of characters using the split() method.
  // let numArray = numString.split("");
  // // Reverse the array using the reverse() method.
  // let reversedArray = numArray.reverse();
  // let digitArray = reversedArray.map((num) => parseInt(num));
  // return digitArray;
}
console.log(reverseNumberToArray(348597));
