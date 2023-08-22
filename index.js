
function hasTargetSum(array, target) {
  // Write your algorithm here
  // const filteredNums = array.filter(element=>element <= target);
  // console.log(`Theses are the filtered Numbers: ${filteredNums}`);
  const result = []
  for(let a=0; a<array.length; a++){
    // console.log(`This is that a iteration: ${filteredNums[a]}`);
      for(let b=a+1; b<array.length; b++){
    // console.log(`This is the b iteration ${filteredNums[b]}`)
        result.push(array[a]+array[b])};
    // console.log(result)    
  }
  // console.log(`this is the result array: ${result}`)
   //search for the target in the result array
  const doesTheTargetExist = result.includes(target);
  // console.log(`final result: ${doesTheTargetExist}`)
  return doesTheTargetExist;
}



/* 
  Write the Big O time complexity of your function here
  O(n 'to the power of' 2)
*/

/* 
  Add your pseudocode here
  INSTRUCTIONS
  - if 2 numbers of an array can add up to the provided target number, 
  return true - if no 2 numbers can add up to the provided target number, 
  return false
  - will need to compare sets of 2 numbers
  - can eliminate any single number that is larger than the provided target
  - iterate over the array left to right comparing each number pair
  - each iteration should begin the next index to the right until all the 
  possible pairs have been evaluated

  PSUEDOCODE
  - function hasTargetSum(array, target){
    for loop a - starts at index zero
      for loop b - starts the loop of a +1 so they don't overlap
    Add each pair together then store in another array
    Use some code or method to determine if the target
    exists in the array - that code or method should return a boolean
  }

  */

/*
  Add written explanation of your solution here
  I used a nested for loop that iterates through the provided array,
  Then for each index of the 2 for loops, I added them together,
  then pushed each result to an empty array ('result'). Then I used the
  includes() method to find if the target exists in the new array - which returns a 
  boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("1. Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("2. Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("3. Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("4. Expecting: false");
  console.log("=>", hasTargetSum([4,5,23,8,9], 22));

  console.log("");

  console.log("5. Expecting: true")
  console.log("=>", hasTargetSum([-7,10,4,8], 3));
}

module.exports = hasTargetSum;
