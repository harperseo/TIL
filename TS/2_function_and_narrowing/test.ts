function assertIsNumber(x: unknown): asserts x is number {
  if (typeof x !== "number") {
    throw new Error("BOOM");
  }
}

function isNumber(x: unknown): x is number {
  if (typeof x === "number") {
    return false;
  }
}

const x: string | number = "foobar";
const y: string | number = "foobar";
assertIsNumber(x);
isNumber(y);
x;
y;

const someValue: unknown = "foobar";
assertIsNumber(someValue);

console.log(someValue.toFixed(1));
