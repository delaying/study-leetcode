// 3/27

function findKthLargest(nums: number[], k: number): number {
  const result = nums.sort((a, b) => b - a);
  //   console.log("nums", nums);
  return result[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 1)); // 6
