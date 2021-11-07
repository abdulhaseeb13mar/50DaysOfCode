var heightChecker = function (heights) {
  let sortedHeights = [...heights];
  heights.sort((a, b) => a - b);
  let numOfWrongOccurences = 0;
  sortedHeights.forEach((element, index) => {
    if (element !== heights[index]) {
      numOfWrongOccurences++;
    }
  });
  console.log(numOfWrongOccurences);
};

heightChecker([1, 1, 4, 2, 1, 3]);
