// 3/20

// 서로 다른 정수 배열이 주어지면 nums가능한 모든 배열을 반환합니다.순열. 어떤 순서 로든 답변을 입력할 수 있습니다 .

// 예시 1:

// 입력: nums = [1,2,3]
//  출력: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 예시 2:

// 입력: nums = [0,1]
//  출력: [[0,1],[1,0]]
// 예시 3:

// 입력: nums = [1]
//  출력: [[1]]

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(path: number[], used: boolean[]) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

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

// 테스트 케이스
console.log(permute([1, 1, 2])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0, 1])); // [[0,1],[1,0]]
// console.log(permute([1])); // [[1]]
