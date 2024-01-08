function cutZero(a) {
  if (a.substring(0, 1) == 0) {
    return a.substring(1, a.length);
  }
  return a;
}

function removeDash(a) {
  a = a.replace(/-/g, "");
  return parseFloat(a);
}

type cutZeroType = (a: string) => string;
type removeDashType = (a: string) => number;

let cutZero2: cutZeroType = (a) => {
  if (a.substring(0, 1) == "0") {
    return a.substring(1, a.length);
  }
  return a;
};

let removeDash2: removeDashType = (a) => {
  a = a.replace(/-/g, "");
  return parseFloat(a);
};

function quiz(
  x: string,
  cutZero2: cutZeroType,
  removeDash2: removeDashType
): void {
  let result = cutZero2(x);
  console.log(removeDash2(result));
}

quiz("010-1234-1234", cutZero2, removeDash2);
