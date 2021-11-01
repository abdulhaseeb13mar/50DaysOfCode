var findNumbers = function (nums) {
  let evenLengthsCount = 0;
  nums.forEach(
    (number) => number.toString().length % 2 === 0 && evenLengthsCount++
  );
  console.log(evenLengthsCount);
};

findNumbers([12, 3435, 2, 6, 7829]);
