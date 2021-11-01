//***************** Squares of a Sorted Array  **************************

var sortedSquares = (nums) =>
  nums
    .sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2))
    .map((elem) => elem * elem);

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// let max = 0;
// let sortedSquaredArr = [];
// let smallestIndex = 0;

// for (let i = 1; i < nums.length - 1; i++) {
//     let current1 = Math.pow(nums[i], 2);

//     if (Math.pow(nums[i],2) < Math.pow(nums[smallestIndex],2)) {
//         let swapper = nums[i];
//         nums[smallestIndex] = Math.pow(swapper, 2);
//         nums[i] = Math.pow(nums[smallestIndex], 2);
//         smallestIndex = i;
//     }

// }
