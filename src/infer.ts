type ParamType<T> = T extends (params: infer P) => any ? P : Text;
type a = ParamType<(_a: number) => {}>;
type b = ParamType<string>;
const tt = [123, "aaaa"];
type tt = typeof tt;
type ttupe = [number, string];
type ElementOf<T> = T extends Array<infer E> ? E : never;
type ttupeEle = ElementOf<ttupe>;

// leetcode
// type Result {
//    asyncMethod<T, U>(input: T): Action<U>;
//    syncMethod<T, U>(action: T): Action<U>;
// }

interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

interface Action<T> {
  payload?: T;
  type: string;
}

type FuncName<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type Connect<P> = (module: P) => { [T in FuncName<Module>]: Module[T] };

type res = Connect<Module>;

// type Result =
