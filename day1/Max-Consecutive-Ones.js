var findMaxConsecutiveOnes = function (arr) {
  let currentCount = 0;
  let maxWindowCount = 0;
  [1, 0, 1, 1, 0, 1].map((elem) => {
    if (!elem) {
      if (currentCount > maxWindowCount) {
        maxWindowCount = currentCount;
      }
      currentCount = 0;
    } else {
      currentCount = currentCount + 1;
    }
  });
  if (currentCount > maxWindowCount) {
    maxWindowCount = currentCount;
  }

  console.log("max count of 1 is:", maxWindowCount);
};

findMaxConsecutiveOnes();
