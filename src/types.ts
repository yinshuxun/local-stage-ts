export const x = "x";
export type X = typeof x;
export enum Y {
  x,
  y,
  z
}
export type EnumType = typeof Y;
export type y = EnumType["y"];
const _y1: Y.y = Y.y;

export type a = keyof any;
export type valueOf<T> = T[keyof T];
const test01 = {
  a: 1,
  b: "2"
};
export type test02 = valueOf<typeof test01>;

export type t1 = keyof typeof test01

export type keyIn = {
  [key in keyof typeof test01]: string;
};
const test03: keyIn = {
  b: "1",
  a: "2"
};

export type test04 = {
  [key: string]: string;
};

interface A {
  name: string;
  age: number;
}
interface A {
  kid: string;
}
const _a1: A = {
  name: "a",
  age: 1,
  kid: "b"
};
