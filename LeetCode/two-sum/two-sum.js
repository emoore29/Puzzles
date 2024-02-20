var twoSum = function (nums, target) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (currentNum + nums[j] === target) {
        newArr.push(i, j);
        return newArr;
      }
    }
  }
};
