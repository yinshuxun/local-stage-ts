type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

type Point1 = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

let p: Point1 = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx; // this has type Point
    this.y += dy; // this has type Point
  }
};
