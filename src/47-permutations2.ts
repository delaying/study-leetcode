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
  const perm: number[] = [];
  const count: { [key: number]: number } = {};

  nums.forEach((n) => {
    count[n] = ++count[n] || 1;
  });

  function dfs() {
    if (perm.length === nums.length) {
      result.push([...perm]);
      return;
    }

    for (const n in count) {
      if (count[n] > 0) {
        perm.push(+n);
        count[n] -= 1;

        dfs();

        count[n] += 1;
        perm.pop();
      }
    }
  }

  dfs();
  return result;
}

console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
