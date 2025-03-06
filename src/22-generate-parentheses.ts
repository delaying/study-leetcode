// 2/27
// https://leetcode.com/problems/generate-parentheses/description/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function func(s: string, left: number, right: number): void {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }
    if (left < n) {
      func(s + "(", left + 1, right);
    }
    if (right < left) {
      func(s + ")", left, right + 1);
    }
  }

  func("", 0, 0);
  return result;
}
