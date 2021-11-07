var merge = function (nums1, m, nums2, n) {
  nums2.map((ele, index) => {
    nums1[m + index] = ele;
  });
  nums1.sort((a, b) => a - b);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
