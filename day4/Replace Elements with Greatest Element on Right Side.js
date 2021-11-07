var replaceElements = function (arr) {
  let currentFocus = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currentFocus) {
      let temp = arr[i];
      arr[i] = currentFocus;
      currentFocus = temp;
    } else {
      arr[i] = currentFocus;
    }
  }
  console.log(arr);
};

replaceElements([400]);
