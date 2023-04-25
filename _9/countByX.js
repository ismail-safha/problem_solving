/*
Create a function with two arguments that will 
return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

solution
*-1:create new array
*-2:loop though n
*-3:multiples n of x
*-4:add the number to the new array



*/
function countBy(x, n) {
  //*-1
  let arr = [];
  //*-2
  for (let i = 1; i <= n; i++) {
    //*-3
    arr.push(x * i);
  }
  // *-4
  return arr;
}
console.log(countBy(2, 5));
