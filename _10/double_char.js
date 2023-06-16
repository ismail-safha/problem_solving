/*
Given a string you have to return a string in which each character (case- sensitive) is repeated once
*/
// "String"=> "SSttrriinngg"
// -1 Turn the String into Array
// -2 Loop through the Array
// -3 Repeat the Array Into String again
function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}
console.log(doubleChar("ismail saf")); //iissmmaaiill  ssaaff
