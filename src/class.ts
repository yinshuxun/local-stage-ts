class Alpha {
  x: number;
}
class Bravo {
  x: number;
}
class Charlie {
  private x: number;
}
class Delta {
  private x: number;
}

let a = new Alpha(),
  b = new Bravo(),
  c = new Charlie(),
  d = new Delta();

console.log(a, b, c, d);
a = b;
export default {};
