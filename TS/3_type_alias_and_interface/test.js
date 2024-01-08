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
var cutZero2 = function (a) {
  if (a.substring(0, 1) == "0") {
    return a.substring(1, a.length);
  }
  return a;
};
var removeDash2 = function (a) {
  a = a.replace(/-/g, "");
  return parseFloat(a);
};
function quiz(x, cutZero2, removeDash2) {
  var result = cutZero2(x);
  console.log(removeDash2(result));
}
quiz("010-1234-1234", cutZero2, removeDash2);
