var removeElement = function (nums, val) {
  let res = nums.filter((ele) => ele !== val);
  res.map((ele, index) => (nums[index] = ele));
  console.log(nums);
  console.log(res.length);
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
