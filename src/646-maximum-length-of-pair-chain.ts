// 5/8

// 예시 1:
// 입력: 쌍 = [[1,2],[2,3],[3,4]]
//  출력: 2
//  설명: 가장 긴 체인은 [1,2] -> [3,4]입니다.

// 예 2:
// 입력: 쌍 = [[1,2],[7,8],[4,5]]
//  출력: 3
//  설명: 가장 긴 체인은 [1,2] -> [4,5] -> [7,8]입니다.

function findLongestChain(pairs: number[][]): number {
  let sortedPairs = pairs.sort((x, y) => x[1] - y[1]);

  let result = 1;
  let temp = sortedPairs[0];

  console.log(temp);

  for (let i = 1; i < sortedPairs.length; i++) {
    if (temp[1] < sortedPairs[i][0]) {
      result++;
      temp = sortedPairs[i];
    }
  }

  return result;
}

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 2
console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5],
  ])
); // 3
