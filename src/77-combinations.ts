// 두 개의 정수 n및 가 주어지면, 범위에서 선택한 숫자 의 모든 가능한 조합을k 반환합니다 . k [1, n]

// 답변은 어떤 순서 로든 작성하실 수 있습니다 .

// 예시 1:
// 입력: n = 4, k = 2
//  출력: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
//  설명: 4가지 선택 2 = 총 6가지 조합이 있습니다.
// 조합에는 순서가 없습니다. 즉, [1,2]와 [2,1]은 동일한 조합으로 간주됩니다.

// 예시 2:
// 입력: n = 1, k = 1
//  출력: [[1]]
//  설명: 1을 선택하면 총 1개의 조합이 있습니다.

function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  if (k === 1) {
    return [[n]];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = k; j <= n; j++) {
      if (result.find((el) => el.includes(i) && el.includes(j))) {
        console.log(i, j);
        continue;
      } else {
        result.push([i, j]);
      }
    }
  }
  return result;
}
console.log(combine(4, 2));
console.log(combine(1, 1));
