// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=problem-list-v2&envId=breadth-first-search

// root이진 트리의 가 주어지면 , 최대 깊이를 반환합니다 .

// 이진 트리의 최대 깊이  는 루트 노드에서 가장 먼 리프 노드까지 가장 긴 경로에 있는 노드의 수입니다.

// 입력: root = [3,9,20,null,null,15,7]
//  출력: 3

// 입력: root = [1,null,2]
//  출력: 2

//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//  최대깊이-1 제곱 < 배열길이 < 최대깊이 제곱
// function maxDepth(root: any): number {
//   for (let i = 0; i < root.length; i++) {
//     if (2 ** i + 1 > root.length) {
//       return i;
//     }
//   }
//   return 1;
// }

// console.log(maxDepth([3, 9, 20, null, null, 15, 7])); //3
// console.log(maxDepth([1, null, 2])); //2
// console.log(maxDepth([1, null, null])); //1

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (root.val !== 0) {
    console.log(root.left, root.right);
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(17);

console.log("result", maxDepth(root));
