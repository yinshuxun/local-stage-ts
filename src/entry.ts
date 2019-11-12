function getA(a: string, b: number): number;
function getA(a: string): string;
function getA(a: string, b?: number) {
  if (b) {
    return a;
  }
  return b;
}
