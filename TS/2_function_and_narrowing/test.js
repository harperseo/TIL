function assertIsNumber(x) {
    if (typeof x !== "number") {
        throw new Error("BOOM");
    }
}
function isNumber(x) {
    if (typeof x === "number") {
        return false;
    }
}
var x = "foobar";
var y = "foobar";
assertIsNumber(x);
isNumber(y);
x;
y;
var someValue = "foobar";
assertIsNumber(someValue);
console.log(someValue.toFixed(1));
