var sortArrayByParity = function (nums) {
  let newArr = [];

  nums.map((num) => (num % 2 === 0 ? newArr.unshift(num) : newArr.push(num)));

  console.log(newArr);
};

sortArrayByParity([3, 1, 2, 0, 4, 5]);
