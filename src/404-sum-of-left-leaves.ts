// https://leetcode.com/problems/sum-of-left-leaves/description/?envType=problem-list-v2&envId=depth-first-search

// root이진 트리의 가 주어지면 , 모든 왼쪽 잎의 합을 반환합니다.

// 리프 는 자식이 없는 노드입니다. 왼쪽 리프 는 다른 노드의 왼쪽 자식인 리프입니다.

// 입력: root = [3,9,20,null,null,15,7]
//  출력: 24
//  설명: 이진 트리에는 두 개의 왼쪽 잎이 있으며 각각 값은 9와 15입니다.

// 입력: root = [1]
//  출력: 0

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;

  function calculator(root: TreeNode | null, isLeft = false) {
    if (root === null) {
      return;
    }

    if (isLeft && !root.left && !root.right) {
      sum += root.val;
    } else {
      if (root.left) {
        calculator(root.left, true);
      }
      if (root.right) {
        calculator(root.right, false);
      }
    }
  }
  calculator(root, false);
  return sum;
}

const leavesRoot = new TreeNode(3);
leavesRoot.left = new TreeNode(9);
leavesRoot.right = new TreeNode(20);
leavesRoot.right.left = new TreeNode(15);
leavesRoot.right.right = new TreeNode(7);
leavesRoot.right.right.right = new TreeNode(17);

console.log("result", sumOfLeftLeaves(leavesRoot));
