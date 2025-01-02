// https://leetcode.com/problems/teemo-attacking/

// 우리의 영웅 티모가 적 애쉬를 독 공격으로 공격하고 있습니다! 티모가 애쉬를 공격하면 애쉬는 정확히 몇 duration초 동안 독에 중독됩니다. 더 공식적으로, 2초에 공격하면 애쉬는 포함 시간 간격 t동안 독에 중독됩니다 .
// 티모가 독 효과가 끝나기 전에 다시 공격하면 타이머가 재설정 되고 독 효과는 새로운 공격 후 몇 초 후에 끝납니다.[t, t + duration - 1]duration

// 감소하지 않는 정수 배열이 주어지며 timeSeries, 여기서 는 timeSeries[i]티모가 2초에 애쉬를 공격한다는 것을 나타내고 timeSeries[i], 정수 는 입니다 duration.

// 애쉬가 중독된 총 시간을 초 단위 로 반환 합니다 .

// 예시 1:

// 입력: timeSeries = [1,4], duration = 2
//  출력: 4
//  설명: Ashe에 대한 Teemo의 공격은 다음과 같습니다.
// - 1초에 티모가 공격하고, 애쉬는 1초와 2초 동안 중독됩니다.
// - 4초에 티모가 공격하고, 애쉬는 4초와 5초 동안 중독됩니다.
// 애쉬는 1초, 2초, 4초, 5초 동안 중독 상태에 빠지는데, 총 4초가 걸립니다.
// 예시 2:

// 입력: timeSeries = [1,2], duration = 2
//  출력: 3
//  설명: Ashe에 대한 Teemo의 공격은 다음과 같습니다.
// - 1초에 티모가 공격하고, 애쉬는 1초와 2초 동안 중독됩니다.
// - 하지만 2초차에 티모가 다시 공격하고 독 타이머를 리셋합니다. 애쉬는 2초와 3초 동안 독에 중독됩니다.
// 애쉬는 1초, 2초, 3초 동안 중독 상태에 빠지는데, 총 3초가 걸립니다.

function teemoAttacking(timeSeries: number[], duration: number): number {
  let total = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i + 1] - timeSeries[i] <= duration) {
      total += timeSeries[i + 1] - timeSeries[i];
    } else {
      total += duration;
    }
  }

  //   copilot으로 위 코드 리팩토링했을때
  //   for (let i = 0; i < timeSeries.length - 1; i++) {
  //     total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  //   }
  //   total += duration;
  return total;
}

const teemoAttackingData = teemoAttacking([1, 4], 2); // 4
const teemoAttackingData2 = teemoAttacking([1, 2], 2); // 3
const teemoAttackingData3 = teemoAttacking([1, 3, 5, 7, 9, 11, 13, 15], 3); // 17
const teemoAttackingData4 = teemoAttacking([1, 3, 8], 3); // 8

console.log(
  teemoAttackingData,
  teemoAttackingData2,
  teemoAttackingData3,
  teemoAttackingData4
);
