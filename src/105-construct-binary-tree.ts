// 4/10

// 두 개의 정수 배열이 주어지고 preorder, inorder여기서 는 preorder이진 트리의 전위 순회이고 inorder는 같은 트리의 중위 순회일 때, 이진 트리를 구성하여 반환합니다 .

// 입력: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
//  출력: [3,9,20,null,null,15,7]

// 입력: preorder = [-1], inorder = [-1]
//  출력: [-1]

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

import { TreeNode } from "./404-sum-of-left-leaves";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
}

console.log("result", buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
