// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

type cases2 = [
  Expect<Equal<Expected1, Pick<Todo, "title">>>,
  Expect<Equal<Expected2, Pick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  Pick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
