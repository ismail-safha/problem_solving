/* 
write a function called repeatStr which repeats the given string exactly n times
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


*/
// 1- create Empty String
// 2- take the num argument and loop through it
// 3- add the string to the empty one
function repeatStr(num, str) {
  // ##   second  way
  return str.repeat(num);
  // ##   1  way
  // // 1- create Empty String
  // let emptyStr = "";
  // // 2- take the num argument and loop through it
  // for (let i = 0; i < num; i++) {
  //   // 3- add the string to the empty one
  //   emptyStr += str;
  // }
  // return emptyStr;
}
console.log(repeatStr(10, " hi "));
