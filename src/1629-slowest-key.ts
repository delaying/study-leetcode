// https://leetcode.com/problems/slowest-key/

// 입력: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
//  출력: "c"
//  설명: 키 누름은 다음과 같습니다.
// 'c'에 대한 키 누름은 지속 시간이 9였습니다(시간 0에 눌리고 시간 9에 놓임).
// 'b'에 대한 키 누름은 지속 시간이 29 - 9 = 20이었습니다(이전 문자를 놓은 직후 시간 9에 눌렀고 시간 29에 놓임).
// 'c'에 대한 키 누름은 지속 시간이 49 - 29 = 20이었습니다(이전 문자를 놓은 직후 시간 29에 눌렀고 시간 49에 놓임).
// 'd'에 대한 키 누름은 지속 시간이 50 - 49 = 1이었습니다(이전 문자를 놓은 직후 시간 49에 눌렀고 시간 50에 놓임).
// 이 중 가장 긴 키 입력은 'b'를 누르는 것이었고, 두 번째 키 입력은 'c'였으며, 두 키 모두 지속 시간이 20이었습니다.
// 'c'는 사전적으로 'b'보다 크므로 답은 'c'입니다.
export function slowestKey(
  releaseTimes: number[],
  keysPressed: string
): string {
  return "c";
}

const data = slowestKey([9, 29, 49, 50], "cbcd"); // c
console.log(data);
