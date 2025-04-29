// 4/29

// 예시 1:
// 입력: 작업 = ["A","A","A","B","B","B"], n = 2
// 출력: 8

// 예 2:
// 입력: 작업 = ["A","C","A","B","D","B"], n = 1
// 출력 : 6

// 예시 3:
// 입력: 작업 = ["A","A","A", "B","B","B"], n = 3
// 출력 : 10

function leastInterval(tasks: string[], n: number): number {
  const sortedTasks = tasks.sort();
  const taskCounts = new Map<string, number>();
  for (const task of sortedTasks) {
    taskCounts.set(task, (taskCounts.get(task) || 0) + 1);
  }

  let repeat = 0; // 몇 덩이로 나눠지는지 저장, -> 덩어리 사이에 유휴를 넣기만하면됨.
  let cur = 0; // 반복문에 사용
  let result = 0; // 결과값

  for (const [key, value] of taskCounts) {
    if (repeat === 0) {
      // 첫번째 key값의 value를 result에 넣어줌
      repeat = value;
      cur = value;
    }
  }
  const firstKey = taskCounts.keys().next().value;

  // idle 필요없을때
  while (cur > 0) {
    let temp = 0;
    taskCounts.forEach((value, key) => {
      if (key !== firstKey) {
        temp++;
      }
      if (cur === 1) {
        result = temp;
      }
    });
    cur--;
  }

  // idle 필요없을때
  if (result >= n) {
    return tasks.length;
  }

  return tasks.length + (repeat - 1) * (n - result); // idle 필요한 경우
}

// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8 ab>i>ab>i>ab
// console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // 6
// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3)); // 10
// console.log(
//   leastInterval(["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4)
// ); // 10
// console.log(leastInterval(["A", "A"], 2)); //4
console.log(
  leastInterval(
    ["A", "A", "A", "B", "B", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
    7
  )
); // 18
