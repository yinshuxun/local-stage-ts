// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
console.log(strEnum(["a", "b"]));

class Test<T> {
  name: T;
}

const a = new Test();
console.log(a.name);

class People {
  constructor(public name: string) {}
}
const people1: People = {
  name: "1"
};

