// 2/20

// XY 평면을 나타내는 평평한 벽에 붙은 구형 풍선이 몇 개 있습니다. 풍선은 2차원 정수 배열로 표현되며, points여기서 는 수평 지름이 와 사이로 뻗어 있는 풍선을 나타냅니다 . 풍선의 정확한 y 좌표는 알 수 없습니다.points[i] = [xstart, xend]xstartxend

// 화살은 x축을 따라 다른 지점에서 수직으로(양의 y 방향으로) 직접 발사될 수 있습니다 . 와 를 가진 풍선은 에서 발사 된 화살에 의해 터 집니다 . 발사할 수 있는 화살의 수에는 제한이 없습니다 . 발사된 화살은 무한히 위로 이동하면서 경로에 있는 모든 풍선을 터뜨립니다.xstartxendxxstart <= x <= xend

// 배열이 주어지면 points, 모든 풍선을 터뜨리기 위해 발사해야 하는 최소 화살 개수를 반환 합니다 .

// 예시 1:

// 입력: 점 = [[10,16],[2,8],[1,6],[7,12]]
//  출력: 2
//  설명: 풍선은 2개의 화살표로 터질 수 있습니다.
// - x = 6에 화살을 쏘아서 풍선 [2,8]과 [1,6]을 터뜨리세요.
// - x = 11에 화살을 쏘아서 풍선 [10,16]과 [7,12]를 터뜨리세요.
// 예시 2:

// 입력: 점 = [[1,2],[3,4],[5,6],[7,8]]
//  출력: 4
//  설명: 총 4개의 화살을 위해 각 풍선마다 화살을 하나씩 쏘아야 합니다.
// 예시 3:

// 입력: 점 = [[1,2],[2,3],[3,4],[4,5]]
//  출력: 2
//  설명: 풍선은 2개의 화살표로 터질 수 있습니다.
// - x = 2에 화살을 쏘아서 풍선 [1,2]와 [2,3]을 터뜨리세요.
// - x = 4에 화살을 쏘아서 풍선 [3,4]와 [4,5]를 터뜨리세요.

function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) {
    return 0;
  }

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = 0; j < points.length - i - 1; j++) {
      if (points[j][1] > points[j + 1][1]) {
        let temp = points[j];
        points[j] = points[j + 1];
        points[j + 1] = temp;
      }
    }
  }
  // points.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let max = points[0][1];

  for (let i = 0; i <= points.length - 1; i++) {
    if (points[i][0] > max) {
      count++;
      max = points[i][1];
    } else {
      max = points[i][1] < max ? points[i][1] : max;
    }
  }

  return count;
}

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
