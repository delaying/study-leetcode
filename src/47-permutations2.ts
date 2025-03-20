// 3/20
// 중복이 포함될 수 있는 숫자 컬렉션이 주어지면 nums, 가능한 모든 고유한 순열을 임의의 순서로 반환합니다 .

// 예시 1:
// 입력: nums = [1,1,2]
//  출력:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// 예시 2:
// 입력: nums = [1,2,3]
//  출력: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // 중복을 피하기 위해 정렬

  function backtrack(path: number[], used: boolean[]) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // 이미 사용된 숫자는 건너뜀
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      } // 중복 숫자 건너뜀

      path.push(nums[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));
  return result;
}

console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
