// https://leetcode.com/problems/lexicographically-smallest-palindrome/description/?envType=problem-list-v2&envId=greedy
// TODO -
// 2/6 발표

// 소문자 영어 문자s 로 구성된 문자열이 주어지고 , 이에 대한 연산을 수행할 수 있습니다. 한 연산에서 문자를 다른 소문자 영어 문자로 바꿀 수 있습니다.s

// 여러분의 과제는 가능한 최소한 의 연산 으로 팰 s린드 롬을 만드는 것입니다 .
// 최소한 의 연산 으로 만들 수 있는 팰린드롬이 여러 개 있다면 사전적으로 가장 작은 팰린드롬을 만드세요 .

// 문자열은 같은 길이의 a문자열보다 사전적으로 더 작습니다 . 문자열의 첫 번째 위치에 해당 문자 가 알파벳 순서로 앞에 나오는 경우입니다 .babab

// 결과 팰린드롬 문자열을 반환합니다 .

// 입력: s = "egcfe"
//  출력: "efcfe"
//  설명: "egcfe"를 팰린드롬으로 만들기 위한 최소 연산 횟수는 1이고, 한 문자를 수정하여 얻을 수 있는 사전적으로 가장 작은 팰린드롬 문자열은 'g'를 변경하여 "efcfe"입니다.

// 입력: s = "abcd"
//  출력: "abba"
//  설명: "abcd"를 팰린드롬으로 만들기 위한 최소 연산 횟수는 2이고, 두 문자를 수정하여 얻을 수 있는 사전적으로 가장 작은 팰린드롬 문자열은 "abba"입니다.

// 입력: s = "seven"
//  출력: "neven"
//  설명: "seven"을 팰린드롬으로 만들기 위한 최소 연산 횟수는 1이고, 한 문자를 수정하여 얻을 수 있는 사전적으로 가장 작은 팰린드롬 문자열은 "neven"입니다.

function makeSmallestPalindrome(s: string): string {
  return "efcfe";
}

console.log(makeSmallestPalindrome("egcfe")); // efcfe
