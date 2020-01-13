interface Person {
  name: string;
}
const ins: Person = { name: "yinshxuun" };

let a: any;
a = ins;
console.log(a.name);

export default {};
