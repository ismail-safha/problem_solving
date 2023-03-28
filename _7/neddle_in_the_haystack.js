/*
write  a function findNeed() that takes an array full of junk but containing one "needle" 
after your  function finds that needle it should return a message (as a string ) that says:
"found the needle at position " plus index it found the needle, so:
findNeedle(["hay","junk","hay","hay","moreJunk","needle"])
 -- should return "found the needle at position 5"
*/
let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle"];

function findNeed(arr) {
  // way 1
  // -loop through the array
  for (let i = 0; i < arr.length; i++) {
    //- check if the element === needle

    if (arr[i] === "needle") {
      // - return the massage
      return `found the needle at position ${i}`;
    }
  }
}
console.log(findNeed(arr)); //found the needle at position 5

// way 2
const findNeed = (arr) => {
  return "found the needle at position " + arr.indexOf("needle");
};
console.log(findNeed(arr)); //found the needle at position 5
