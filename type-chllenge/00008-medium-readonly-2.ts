// 2/27
// https://www.typescriptlang.org/play/?#code/PQKgUABBAcELQQEoFMCGATA9gOwDYE8IAmSeOci0gI0IEFsAXACx0IDEBXCACgAFVGAMw4BKCAGIAtsnQBLDpIkAnNFjyFxmKgCtkAYwZwA1snwBnMKXHWIARQ7IzDWTktQAkpIAOuZNMYQqBAA5sjYyEqyehAABgCy+CgYOAREADwAKgA0EADSAHwxEADuTFFMEAyoJmaVxZiV+F7IgUrBCmEMsRlFAuixuTEAdG4DRWbNerKChMwtZshdmIIQXkqYzUrOjhDL3UXMqF1mLBy4-QtdDA1JagRDEADqTGFjELK12Jhda5gAbrJ0DIcrJjqdzhBJNUWqhcLhVutNttaipkuoINoOE4ILhZCZKi8IF8lFD4TFbil8JlCiNSGxMEoIMgAB6oby+UYxLkMCxQWSMCKCVB6FoZTBYCAAb1IUGcDF8AC4IE5IthgjKIECzHpIl5nDglSr+eqoFA9Jh2YsZEqqJhML4BKQAL6jc3YbHXLBKhIU9TpMVYHIAcjlviDEAAPhAg1qdbI9S5sEH8hAALxSjWh5BKgBEAAlTDmshrY7r9dhc4I7VRUEoixrzZaGNaIELcAti1AXaRPZghlm0xB88g4ZgcxBgMAIABRJTrJRKvQCL5dVFmMyyYLYQIQVF3Qi-JH4Hvivul+Plwc5mtKeljidT2fzxfL767tDrzfboJ7ykIjYRAwx6yqeQyNj4Vr9OmDBKA4D4QAA8rkpBcjEowpgAarIyDFLs24AOKgnmHBUEqTAMAwXhmAqk48noTBDNoZhDAywTANAYAgMAligBAAD6AmCUJgkQAAmpgHCMgAwuKLQFio-HCUpfEQFxlhAc0EA+qolL+jkBSDgIx5gLxylKRAGSOF0UmoAstRmcJqncbI3gMlcTQtJKEC0LiJg5NOzKTF0TqtusihBrwGnIHA9Gwr4aqOMAHDOO2QbqR5EBLnZg4ANqkAFQVpD5eLIGk2loqkmSngAjPkOS+gQVVYLV+R1flgX6AwRW+aV5X7v6NXBlm4ZRjGjhxgmODJv5HUGDIrWdjOs1dcVJhlYkOl+k1mBEENoJhpG0bnpNSZ1UtQXzW1UAFZ13UletDX4ANWC7Ud41lom4ZnTdc3oAtYAALo8VOkVmHALJBeDc4MmAUVMtDjLpn1unbdVe3ysgI3RvyfywoCyaWPyzZKEKIoWTVGayvt2bKjBxqkMd5YAPyGnTaqkOBvjNugNp2g62BgN2ROCsKoqnkQlPvhVszU6zqompq70XomLO0-LHMWhB3O8-aaAC0LAok6L52dTIku-uiWZy-TUAWwQivah9OCq0a7NmprXMtrauuOt2pkOSJnBbC8jIAMrNlRikBypamgKQKah0wtYtPgEmMmY9rJYm1EQORlHUbR2oMUxLFtOxwACGYxQRPHEBYThyqZ+WOd51RNHAHRxfMax5cZ7gWc4LyEApnEDItFJSdwmEoQtxRbeF-RjHd20nHcUAA

/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys

  ### Question

  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > View on GitHub: https://tsch.js.org/8
*/

/* _____________ Your Code Here _____________ */

type MyReadonly2<T, K> = any;

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8/answer
  > View solutions: https://tsch.js.org/8/solutions
  > More Challenges: https://tsch.js.org
*/
