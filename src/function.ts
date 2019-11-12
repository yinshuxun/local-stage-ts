interface Overload {
  (key: string): string;
  (key: number): number;
}

function overload(a: string): string;
function overload(a: number): number;
function overload(a: number | string) {
  return a;
}

const overloadIns: Overload = overload;
const num = overloadIns(1);
const str = overloadIns("1");
