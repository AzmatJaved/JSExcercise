var a = ["Mango", "Apple", "Grapes", "Kiwi"];

a.sort();
console.log(a);
a.reverse();
console.log(a);

function compare(a, b) {
  return a - b;
}

console.log("Compare is ", compare(40 - 100));

// Numeric sort

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

console.log(points);

var y = 1;
if (function F() {}) {
  y += typeof F;
}
console.log(y);
