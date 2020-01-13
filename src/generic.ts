interface Something<T> {
  name: string;
}
let x: Something<number>;
let y: Something<string>;
x = y;
