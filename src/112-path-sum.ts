// https://leetcode.com/problems/path-sum/description/?envType=problem-list-v2&envId=depth-first-search

import { TreeNode } from "./404-sum-of-left-leaves";

// 1/23 발표

// DFS 방식으로 풀기!!

// root이진 트리의 와 정수가 주어졌을 때 targetSum, true트리에 루트에서 리프까지의 경로가 있고 경로에 따라 모든 값을 더한 값이 와 같은지 여부 를 반환합니다 targetSum.

// 리프 노드 는 자식이 없는 노드입니다.

// 1 입력: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
//  출력: true
//  설명: 대상 합계가 있는 루트-리프 경로가 표시됩니다.

// 2 입력: root = [1,2,3], targetSum = 5
//  출력: false
//  설명: 트리에는 루트-리프 경로가 두 개 있습니다.
// (1 --> 2): 합은 3입니다.
// (1 --> 3): 합은 4입니다.
// 합계가 5인 루트-리프 경로는 없습니다.

// 3 입력: root = [], targetSum = 0
//  출력: false
//  설명: 트리가 비어 있으므로 루트에서 리프로 가는 경로가 없습니다.

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  // 리프 노드인지 확인
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

const sumRoot = new TreeNode(5);
sumRoot.left = new TreeNode(4);
sumRoot.right = new TreeNode(8);
sumRoot.left.left = new TreeNode(11);
sumRoot.right.left = new TreeNode(13);
sumRoot.right.right = new TreeNode(4);
sumRoot.left.left.left = new TreeNode(7);
sumRoot.left.left.right = new TreeNode(2);
sumRoot.right.right.right = new TreeNode(1);

console.log("result", hasPathSum(sumRoot, 22));
console.log(sumRoot);
