// 仅仅是一个 interface
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

const ifFoo = (params: Foo | Bar): params is Foo => {
  return params instanceof Foo;
};
