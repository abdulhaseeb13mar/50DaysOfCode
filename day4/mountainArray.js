var validMountainArray = function (arr) {
  if (arr.length > 2) {
    let peakReached = false;
    let previous = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (!peakReached) {
        previous = arr[i];
        if (previous > arr[i]) {
          if (i == 1) {
            return false;
          }
          peakReached = true;
        } else {
          return false;
        }
      } else {
        if (previous > arr[i]) {
          previous = arr[i];
        } else {
          return false;
        }
      }
    }
    if (!peakReached) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};
console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
