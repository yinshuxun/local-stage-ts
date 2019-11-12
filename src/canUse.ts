interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
var Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型
