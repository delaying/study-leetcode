// https://leetcode.com/problems/valid-palindrome-ii/
// 문자열이 주어졌을 때 s, 해당 문자열에서 최대 한 문자를 삭제한 후 true 그 문자열이 팰린드롬이 될 수 있는지 여부를 반환합니다 .s

// 예시 1:

// 입력: s = "aba"
//  출력: true
// 예시 2:

// 입력: s = "abca"
//  출력: true
//  설명: 문자 'c'를 삭제할 수 있습니다.
// 예시 3:

// 입력: s = "abc"
//  출력: false

function validPalindrome(s: string): boolean {
  // let left = 1;
  // for (let i = 0; i < s.length / 2; i++) {
  //   if (s[i] === s[s.length - 1 - i]) {
  //     continue;
  //   } else {
  //     if (
  //       (s[i] === s[s.length - 2 - i] || s[i + 1] === s[s.length - 1 - i]) &&
  //       left === 1
  //     ) {
  //       left--;
  //       continue;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // return true;

  function isPalindromeRange(str: string, start: number, end: number): boolean {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindromeRange(s, left + 1, right) || // 왼쪽부터 한글자 제거
        isPalindromeRange(s, left, right - 1) //오른쪽부터 한글자 제거
      );
    }
  }

  return true;
}

console.log("1", validPalindrome("aba")); // true
console.log("2", validPalindrome("abba")); // true
console.log("3", validPalindrome("abca")); // true
console.log("4", validPalindrome("deeee")); // true
console.log("5", validPalindrome("abccdbda")); // false
console.log("6", validPalindrome("eeccccbebaeeabebccceea")); // false
console.log("6", validPalindrome("eedede")); // true -- 에러
