var duplicateZeros = function (arr) {
  let result = [];
  arr.forEach((element) => {
    result.push(element);
    if (element === 0) {
      result.push(0);
    }
  });
  result.splice(arr.length, result.length);

  //   arr.forEach((element, index) => {
  //     arr.splice(index + 1, 0, 0);
  //   });
  //   console.log(arr);
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
