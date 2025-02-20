// 2/20

// 간격 배열이 주어 intervals지면 나머지 간격이 겹치지 않도록 제거하기 위해 제거해야 하는 최소 간격 개수를 반환합니다 .intervals[i] = [starti, endi]

// 한 지점에서만 만나는 간격은 겹치지 않는다는 점 에 유의하세요 . 예를 들어, [1, 2]와 [2, 3]는 겹치지 않습니다.

// 예시 1:

// 입력: 간격 = [[1,2],[2,3],[3,4],[1,3]]
//  출력: 1
//  설명: [1,3]을 제거할 수 있으며 나머지 간격은 겹치지 않습니다.
// 예시 2:

// 입력: 간격 = [[1,2],[1,2],[1,2]]
//  출력: 2
//  설명: 나머지 간격이 겹치지 않도록 하려면 두 개의 [1,2]를 제거해야 합니다.
// 예시 3:

// 입력: 간격 = [[1,2],[2,3]]
//  출력: 0
//  설명: 이미 겹치지 않으므로 간격을 제거할 필요가 없습니다.

function eraseOverlapIntervals(intervals: number[][]): number {
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = 0; j < intervals.length - i - 1; j++) {
      if (intervals[j][1] > intervals[j + 1][1]) {
        let temp = intervals[j];
        intervals[j] = intervals[j + 1];
        intervals[j + 1] = temp;
      }
    }
  }

  let result = 0;
  let target = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < target[1]) {
      result++;
      continue;
    }
    target = intervals[i];
  }
  return result;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
); // 1
