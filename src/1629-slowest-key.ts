// https://leetcode.com/problems/slowest-key/

// 입력: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
// 출력: "c"

function slowestKey(releaseTimes: number[], keysPressed: string): string {
  const timeArr = releaseTimes.map((releaseTime, index) => {
    return index === 0 ? releaseTime : releaseTime - releaseTimes[index - 1];
  });

  const max = Math.max(...timeArr);
  const indices = timeArr.reduce((acc, time, index) => {
    // acc [] time 9 index 0
    // acc [] time 20 index 1
    // acc [ 1 ] time 20 index 2
    // acc [ 1, 2 ] time 1 index 3
    if (time === max) {
      acc.push(index);
    }
    return acc;
  }, [] as number[]);

  const keys = indices.map((index) => keysPressed[index]);

  return keys.reduce((max, current) => {
    return current > max ? current : max;
  }, keys[0]);
}

const slowestKeyData = slowestKey([9, 29, 49, 50], "cbcd"); // c
console.log(slowestKeyData);
