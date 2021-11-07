const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  const filteredArray = nums.filter(
    (value, index) => nums.indexOf(value) === index
  );
  console.log(filteredArray);
};

removeDuplicates(arr);
